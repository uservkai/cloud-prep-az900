/* eslint-disable prettier/prettier */

import type { DomainId, QuizResult } from "@/types/quiz";
import { createClient } from "@/lib/supabase/client";

const domainMapping: Record<DomainId, "d1" | "d2" | "d3"> = {
  "cloud-concepts": "d1",
  "architecture-services": "d2",
  "management-governance": "d3",
};

export async function saveCloudResult(
  result: QuizResult
): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const supabase = createClient();

  // The database handles ownership through the authenticated user.
  const { data: authData, error: authError } =
    await supabase.auth.getUser();

  if (authError || !authData.user) {
    // Guest learners retain their locally stored results.
    return false;
  }

  const userId = authData.user.id;

  // Generate a database-specific UUID, independent of local session IDs.
  const cloudSessionId = crypto.randomUUID();

  const domainId =
    result.config.domainId === "all"
      ? null
      : domainMapping[result.config.domainId];

  // First create an in-progress session because the RLS policy only
  // allows answers to be inserted into an in-progress session.
  const { error: sessionError } = await supabase
    .from("quiz_sessions")
    .insert({
      id: cloudSessionId,
      user_id: userId,
      mode: result.mode,
      domain_id: domainId,
      topic_id: null,
      difficulty: result.config.difficulty,
      status: "in_progress",
      question_ids: result.items.map((item) => item.questionId),
      total_questions: result.total,
      current_question_index: Math.max(0, result.total - 1),
    });

  if (sessionError) {
    throw new Error(
      `Could not save quiz session: ${sessionError.message}`
    );
  }

  // Skipped questions remain identifiable through question_ids
  // and total_questions, but do not create empty answer records.
  const answers = result.items
    .filter(
      (item): item is typeof item & { chosenOptionId: string } =>
        item.chosenOptionId !== null
    )
    .map((item) => ({
      session_id: cloudSessionId,
      user_id: userId,
      question_id: item.questionId,
      selected_option_ids: [item.chosenOptionId],
      is_correct: item.correct,
    }));

  if (answers.length > 0) {
    const { error: answersError } = await supabase
      .from("quiz_answers")
      .insert(answers);

    if (answersError) {
      throw new Error(
        `Could not save quiz answers: ${answersError.message}`
      );
    }
  }

  // Mark the session as completed only after the answers are saved.
  const scorePercent =
    result.total > 0
      ? Math.round((result.correct / result.total) * 10000) / 100
      : 0;

  const { error: completionError } = await supabase
    .from("quiz_sessions")
    .update({
      status: "completed",
      correct_count: result.correct,
      score_percent: scorePercent,
      completed_at: result.completedAt,
    })
    .eq("id", cloudSessionId)
    .eq("user_id", userId);

  if (completionError) {
    throw new Error(
      `Could not complete cloud session: ${completionError.message}`
    );
  }

  return true;
}

import { questionById } from "@/services/quiz-service";
import type { QuizResultItem, TopicBreakdown } from "@/types/quiz";

const reverseDomainMapping: Record<string, DomainId> = {
  d1: "cloud-concepts",
  d2: "architecture-services",
  d3: "management-governance",
};

export async function loadCloudResults(): Promise<QuizResult[]> {
  const supabase = createClient();

  const { data: authData, error: authError } =
    await supabase.auth.getUser();

  if (authError) throw authError;
  if (!authData.user) return [];

  const { data: sessions, error: sessionsError } = await supabase
    .from("quiz_sessions")
    .select("*")
    .eq("status", "completed")
    .order("started_at", { ascending: false })
    .limit(50);

  if (sessionsError) throw sessionsError;
  if (!sessions?.length) return [];

  // Fetch answers in batches to avoid large result sets.
  const allAnswers: Array<{
    session_id: string;
    question_id: string;
    selected_option_ids: string[];
    is_correct: boolean | null;
  }> = [];

  for (let i = 0; i < sessions.length; i += 10) {
    const ids = sessions.slice(i, i + 10).map((s) => s.id);

    const { data, error } = await supabase
      .from("quiz_answers")
      .select("session_id, question_id, selected_option_ids, is_correct")
      .in("session_id", ids);

    if (error) throw error;
    allAnswers.push(...(data ?? []));
  }

  const answersBySession = new Map<string, typeof allAnswers>();

  for (const answer of allAnswers) {
    const current = answersBySession.get(answer.session_id) ?? [];
    current.push(answer);
    answersBySession.set(answer.session_id, current);
  }

  return sessions.map((session): QuizResult => {
    const savedAnswers = answersBySession.get(session.id) ?? [];
    const answerMap = new Map(
      savedAnswers.map((answer) => [answer.question_id, answer])
    );

    const questionIds = (session.question_ids ?? []) as string[];

    const items: QuizResultItem[] = questionIds.map((questionId) => {
      const answer = answerMap.get(questionId);

      return {
        questionId,
        chosenOptionId: answer?.selected_option_ids?.[0] ?? null,
        correct: answer?.is_correct === true,
      };
    });

    const topicBreakdown: Record<string, TopicBreakdown> = {};

    for (const item of items) {
      const question = questionById(item.questionId);
      if (!question) continue;

      const bucket = (topicBreakdown[question.topicId] ??= {
        correct: 0,
        total: 0,
      });

      bucket.total++;
      if (item.correct) bucket.correct++;
    }

    const mode =
      session.mode === "assessment" ? "assessment" : "practice";

    const difficulty =
      session.difficulty === "foundational" ||
      session.difficulty === "intermediate" ||
      session.difficulty === "advanced"
        ? session.difficulty
        : "mixed";

    return {
      id: session.id,
      completedAt: session.completed_at ?? session.started_at,
      mode,
      config: {
        mode,
        domainId: reverseDomainMapping[session.domain_id] ?? "all",
        topicId: "all",
        difficulty,
        requestedCount: questionIds.length,
      },
      total: session.total_questions,
      correct: session.correct_count ?? items.filter((i) => i.correct).length,
      incorrect:
        session.total_questions -
        (session.correct_count ?? items.filter((i) => i.correct).length),
      items,
      topicBreakdown,
    };
  });
}
