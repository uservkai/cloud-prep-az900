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
 * Latest incorrect answer per question across all stored results, newest
 * attempt first. Unanswered (skipped) questions are not mistakes.
 */
export function latestMistakes(): MistakeEntry[] {
  const byQuestion = new Map<string, MistakeEntry>();
  for (const result of loadResults()) {
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

export function mistakeQuestions(): Array<{
  entry: MistakeEntry;
  chosenText: string;
}> {
  return latestMistakes()
    .map((entry) => {
      const question = questionById(entry.questionId);
      if (!question) return null;
      const chosen = question.options.find((o) => o.id === entry.chosenOptionId);
      return { entry, chosenText: chosen?.text ?? "Unknown answer" };
    })
    .filter((v): v is { entry: MistakeEntry; chosenText: string } => v !== null);
}
