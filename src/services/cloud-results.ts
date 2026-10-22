/* eslint-disable prettier/prettier */

import type { DomainId, QuizResult } from "@/types/quiz";
import { createClient } from "@/lib/supabase/client";

const domainMapping: Record<DomainId, "d1" | "d2" | "d3"> = {
  "cloud-concepts": "d1",
  "architecture-services": "d2",
  "management-governance": "d3",
};

/**
 * Return the same UUID for the same learner and local quiz.
 * This prevents retries from creating new cloud sessions.
 */
async function cloudIdFor(userId: string, resultId: string): Promise<string> {
  const input = new TextEncoder().encode(`cloudprep:v1:${userId}:${resultId}`);

  const hash = new Uint8Array(await crypto.subtle.digest("SHA-256", input));

  const bytes = hash.slice(0, 16);

  // Use the UUID version/variant bits.
  bytes[6] = (bytes[6]! & 0x0f) | 0x40;
  bytes[8] = (bytes[8]! & 0x3f) | 0x80;

  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20),
  ].join("-");
}

/**
 * Save a completed quiz without duplicating it on retry.
 * Existing incomplete sessions can be resumed.
 */
export async function saveCloudResult(
  result: QuizResult,
  expectedUserId?: string,
): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const supabase = createClient();

  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError) throw authError;
  if (!authData.user) return false;

  const userId = authData.user.id;

  // Prevent a queued result from being uploaded to another learner's account.
  if (expectedUserId && expectedUserId !== userId) {
    return false;
  }

  const cloudSessionId = await cloudIdFor(userId, result.id);

  const domainId = result.config.domainId === "all" ? null : domainMapping[result.config.domainId];

  // Check whether this quiz was already uploaded.
  const { data: existing, error: lookupError } = await supabase
    .from("quiz_sessions")
    .select("id, status")
    .eq("id", cloudSessionId)
    .eq("user_id", userId)
    .maybeSingle();

  if (lookupError) throw lookupError;

  if (existing?.status === "completed") {
    return true;
  }

  if (!existing) {
    const { error: insertError } = await supabase.from("quiz_sessions").insert({
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

    // Another simultaneous upload may have created this
    // session first. 23505 means a duplicate unique key.
    if (insertError && insertError.code !== "23505") {
      throw new Error(insertError.message);
    }

    if (insertError?.code === "23505") {
      const { data: concurrent, error: concurrentError } = await supabase
        .from("quiz_sessions")
        .select("status")
        .eq("id", cloudSessionId)
        .eq("user_id", userId)
        .single();

      if (concurrentError) throw concurrentError;
      if (concurrent.status === "completed") return true;
    }
  }

  // Retrieve saved answers to recover partial uploads.
  const { data: savedAnswers, error: answersLookupError } = await supabase
    .from("quiz_answers")
    .select("question_id")
    .eq("session_id", cloudSessionId)
    .eq("user_id", userId);

  if (answersLookupError) throw answersLookupError;

  const savedIds = new Set((savedAnswers ?? []).map((answer) => answer.question_id));

  const missingAnswers = result.items
    .filter((item) => item.chosenOptionId !== null && !savedIds.has(item.questionId))
    .map((item) => ({
      session_id: cloudSessionId,
      user_id: userId,
      question_id: item.questionId,
      selected_option_ids: [item.chosenOptionId!],
      is_correct: item.correct,
    }));

  if (missingAnswers.length > 0) {
    const { error: answersError } = await supabase.from("quiz_answers").upsert(missingAnswers, {
      onConflict: "session_id,question_id",
      ignoreDuplicates: true,
    });

    if (answersError) {
      throw new Error(answersError.message);
    }
  }

  const scorePercent =
    result.total > 0 ? Math.round((result.correct / result.total) * 10000) / 100 : 0;

  const { error: completionError } = await supabase
    .from("quiz_sessions")
    .update({
      status: "completed",
      correct_count: result.correct,
      score_percent: scorePercent,
      completed_at: result.completedAt,
    })
    .eq("id", cloudSessionId)
    .eq("user_id", userId)
    .eq("status", "in_progress");

  if (completionError) {
    throw new Error(completionError.message);
  }

  // Confirm completion instead of assuming an UPDATE matched.
  const { data: completed, error: verifyError } = await supabase
    .from("quiz_sessions")
    .select("status")
    .eq("id", cloudSessionId)
    .eq("user_id", userId)
    .single();

  if (verifyError) throw verifyError;

  if (completed.status !== "completed") {
    throw new Error("Cloud quiz session was not completed.");
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

  const { data: authData, error: authError } = await supabase.auth.getUser();

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
    const answerMap = new Map(savedAnswers.map((answer) => [answer.question_id, answer]));

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

    const mode = session.mode === "assessment" ? "assessment" : "practice";

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
        session.total_questions - (session.correct_count ?? items.filter((i) => i.correct).length),
      items,
      topicBreakdown,
    };
  });
}
