import type { QuizResult } from "@/types/quiz";
import { questionById } from "@/services/quiz-service";

/**
 * Completed quiz results, stored locally on the device until the persistence
 * phase (database + accounts) lands. Nothing here is presented as account
 * data — the dashboard labels it clearly.
 */

const RESULTS_KEY = "cloudprep.results.v1";
const MAX_RESULTS = 50;

export function loadResults(): QuizResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RESULTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as QuizResult[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveResult(result: QuizResult): void {
  if (typeof window === "undefined") return;
  try {
    const existing = loadResults();
    const next = [result, ...existing.filter((r) => r.id !== result.id)].slice(0, MAX_RESULTS);
    window.localStorage.setItem(RESULTS_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable — result stays in memory for this page view only.
  }
}

export function findResult(id: string | undefined): QuizResult | null {
  const results = loadResults();
  if (id) {
    const match = results.find((r) => r.id === id);
    if (match) return match;
  }
  return results[0] ?? null;
}

export interface MistakeEntry {
  questionId: string;
  chosenOptionId: string;
  resultId: string;
  attemptedAt: string;
}

/**
 * Find the latest incorrect answer for each question
 * from a supplied collection of completed quiz results.
 *
 * Works with both localStorage and Supabase results.
 */
export function latestMistakesFromResults(results: QuizResult[]): MistakeEntry[] {
  const byQuestion = new Map<string, MistakeEntry>();

  // Sort newest first, regardless of where results came from.
  const ordered = [...results].sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
  );

  for (const result of ordered) {
    for (const item of result.items) {
      if (item.correct || item.chosenOptionId === null) continue;

      if (!byQuestion.has(item.questionId)) {
        byQuestion.set(item.questionId, {
          questionId: item.questionId,
          chosenOptionId: item.chosenOptionId,
          resultId: result.id,
          attemptedAt: result.completedAt,
        });
      }
    }
  }

  return [...byQuestion.values()];
}

/** Preserve the original localStorage-based functionality. */
export function latestMistakes(): MistakeEntry[] {
  return latestMistakesFromResults(loadResults());
}

/** Resolve mistakes into questions and selected answer text. */
export function mistakeQuestionsFromResults(results: QuizResult[]): Array<{
  entry: MistakeEntry;
  chosenText: string;
}> {
  return latestMistakesFromResults(results)
    .map((entry) => {
      const question = questionById(entry.questionId);

      if (!question) return null;

      const chosen = question.options.find((option) => option.id === entry.chosenOptionId);

      return {
        entry,
        chosenText: chosen?.text ?? "Unknown answer",
      };
    })
    .filter(
      (
        value,
      ): value is {
        entry: MistakeEntry;
        chosenText: string;
      } => value !== null,
    );
}

/** Existing API for local Mistakes Review. */
export function mistakeQuestions() {
  return mistakeQuestionsFromResults(loadResults());
}
