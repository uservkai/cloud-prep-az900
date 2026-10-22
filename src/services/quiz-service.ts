import { pendingQuestions, questions, reviewedQuestions } from "@/data/questions";
import { topics } from "@/data/syllabus";
import type { QuizConfig, QuizQuestion, QuizResult, QuizSession } from "@/types/quiz";

/** True when the question passes the config's domain/topic/difficulty filters. */
export function matchesConfig(question: QuizQuestion, config: QuizConfig): boolean {
  return (
    (config.domainId === "all" || question.domainId === config.domainId) &&
    (config.topicId === "all" || question.topicId === config.topicId) &&
    (config.difficulty === "mixed" || question.difficulty === config.difficulty)
  );
}

/**
 * Active quizzes may only draw from reviewed, source-verified questions.
 * Pending (needs-verification) questions are never eligible.
 */
export function getAvailableQuestions(config: QuizConfig): QuizQuestion[] {
  return reviewedQuestions.filter((q) => matchesConfig(q, config));
}

export function countAvailableQuestions(config: QuizConfig): number {
  return getAvailableQuestions(config).length;
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = copy[i];
    const other = copy[j];
    if (current === undefined || other === undefined) continue;
    copy[i] = other;
    copy[j] = current;
  }
  return copy;
}

/**
 * Build a question set for a quiz. Never repeats a question (pool entries are
 * unique by id) and gracefully caps the count to the available pool size.
 */
export function buildQuiz(
  config: QuizConfig,
  requestedCount: number | "max" = config.requestedCount,
): QuizQuestion[] {
  const pool = shuffle(getAvailableQuestions(config));
  const take = requestedCount === "max" ? pool.length : Math.min(requestedCount, pool.length);
  return pool.slice(0, take);
}

/** Build a quiz from specific question ids (e.g. a learner's mistake list). */
export function buildQuizFromQuestionIds(ids: string[]): QuizQuestion[] {
  const byId = new Map(reviewedQuestions.map((q) => [q.id, q]));
  const unique = new Map<string, QuizQuestion>();
  for (const id of ids) {
    const q = byId.get(id);
    if (q) unique.set(q.id, q);
  }
  return shuffle([...unique.values()]);
}

export function isChoiceCorrect(question: QuizQuestion, optionId: string): boolean {
  return question.correctOptionId === optionId;
}

/** Grade a session's submitted answers into a result (calculated, not hardcoded). */
export function buildResult(session: QuizSession): QuizResult {
  const topicBreakdown: QuizResult["topicBreakdown"] = {};
  const items: QuizResult["items"] = [];
  let correct = 0;

  for (const question of session.questions) {
    const chosen =
      session.config.mode === "assessment"
        ? (session.choices[question.id] ?? null)
        : (session.submitted[question.id] ?? null);
    const isCorrect = chosen !== null && isChoiceCorrect(question, chosen);
    if (isCorrect) correct++;
    items.push({ questionId: question.id, chosenOptionId: chosen, correct: isCorrect });

    const bucket = (topicBreakdown[question.topicId] ??= { correct: 0, total: 0 });
    bucket.total++;
    if (isCorrect) bucket.correct++;
  }

  return {
    id: session.id,
    completedAt: new Date().toISOString(),
    config: session.config,
    mode: session.config.mode,
    total: session.questions.length,
    correct,
    incorrect: session.questions.length - correct,
    topicBreakdown,
    items,
  };
}

export interface TopicCoverage {
  reviewed: number;
  pending: number;
}

/** Coverage indicator per official topic: reviewed vs pending verification. */
export function topicCoverage(): Map<string, TopicCoverage> {
  const map = new Map<string, TopicCoverage>();
  for (const topic of topics) map.set(topic.id, { reviewed: 0, pending: 0 });
  for (const q of reviewedQuestions) {
    const entry = map.get(q.topicId);
    if (entry) entry.reviewed++;
  }
  for (const q of pendingQuestions) {
    const entry = map.get(q.topicId);
    if (entry) entry.pending++;
  }
  return map;
}

export function questionById(id: string): QuizQuestion | undefined {
  return questions.find((q) => q.id === id);
}
