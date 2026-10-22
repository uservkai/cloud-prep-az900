import { useSyncExternalStore } from "react";
import type { QuizConfig, QuizQuestion, QuizResult, QuizSession } from "@/types/quiz";
import { buildResult } from "@/services/quiz-service";
import { saveResult } from "@/store/results-store";

/**
 * In-memory active quiz session, persisted to localStorage so an accidental
 * refresh does not lose an in-progress quiz. Deliberately localStorage (not a
 * database) — persistence layer arrives in the next phase.
 */

const STORAGE_KEY = "cloudprep.session.v1";

interface StoreState {
  session: QuizSession | null;
  lastResultId: string | null;
}

let state: StoreState = { session: null, lastResultId: null };
const listeners = new Set<() => void>();
let hydrated = false;

function hydrate(): void {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as StoreState;
    const session = parsed?.session ?? null;
    if (session && Array.isArray(session.questions) && session.questions.length > 0) {
      state = { session, lastResultId: parsed.lastResultId ?? null };
    }
  } catch {
    // Corrupt or unusable stored state — start fresh.
  }
}

function persist(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable (private mode etc.) — session stays in memory.
  }
}

function setState(next: StoreState): void {
  state = next;
  persist();
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): StoreState {
  hydrate();
  return state;
}

function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export const quizStore = {
  /** Start a new session. Returns false when the question set is empty. */
  start(config: QuizConfig, pickedQuestions: QuizQuestion[]): boolean {
    if (pickedQuestions.length === 0) return false;
    setState({
      session: {
        id: makeId(),
        startedAt: new Date().toISOString(),
        config,
        questions: pickedQuestions,
        index: 0,
        choices: {},
        submitted: {},
      },
      lastResultId: null,
    });
    return true;
  },

  /** Select an option. In practice mode a submitted answer can no longer change. */
  choose(questionId: string, optionId: string): void {
    const session = state.session;
    if (!session) return;
    if (session.config.mode === "practice" && session.submitted[questionId]) return;
    setState({
      ...state,
      session: { ...session, choices: { ...session.choices, [questionId]: optionId } },
    });
  },

  /** Practice mode: submit the selected answer and lock the question. */
  submitCurrent(): void {
    const session = state.session;
    if (!session || session.config.mode !== "practice") return;
    const question = session.questions[session.index];
    if (!question) return;
    const choice = session.choices[question.id];
    if (!choice || session.submitted[question.id]) return;
    setState({
      ...state,
      session: { ...session, submitted: { ...session.submitted, [question.id]: choice } },
    });
  },

  goTo(index: number): void {
    const session = state.session;
    if (!session) return;
    const clamped = Math.max(0, Math.min(index, session.questions.length - 1));
    setState({ ...state, session: { ...session, index: clamped } });
  },

  next(): void {
    const session = state.session;
    if (!session) return;
    quizStore.goTo(session.index + 1);
  },

  prev(): void {
    const session = state.session;
    if (!session) return;
    quizStore.goTo(session.index - 1);
  },

  /** Finish the quiz: grade all submitted answers, store the result, clear the session. */
  finish(): QuizResult | null {
    const session = state.session;
    if (!session) return null;
    const result = buildResult(session);
    saveResult(result);
    setState({ session: null, lastResultId: result.id });
    return result;
  },

  clear(): void {
    setState({ session: null, lastResultId: null });
  },
};

export function useQuizSession(): QuizSession | null {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => ({ session: null, lastResultId: null }) as StoreState,
  ).session;
}
