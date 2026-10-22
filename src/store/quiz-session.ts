import { useSyncExternalStore } from "react";
import type { QuizConfig, QuizQuestion, QuizResult, QuizSession } from "@/types/quiz";
import { reviewedQuestions } from "@/data/questions";
import { buildResult } from "@/services/quiz-service";
import { saveResult } from "@/store/results-store";

/**
 * Active quiz session, persisted to localStorage so a refresh or reopen
 * resumes exactly where the learner left off. Only question ids are stored;
 * questions are re-resolved from the current bank and validated on restore.
 * Completed results / mistakes live in results-store and are never touched here.
 */

export const STORAGE_KEY = "cloudprep.activeSession.v2";
const LEGACY_KEYS = ["cloudprep.session.v1"];
const STORAGE_VERSION = 2;

interface StoreState {
  session: QuizSession | null;
  lastResultId: string | null;
  /** Set when a saved session existed but could not be resumed. */
  restoreError: string | null;
}

interface PersistedSession {
  id: string;
  startedAt: string;
  deadline: string | null;
  config: QuizConfig;
  questionIds: string[];
  index: number;
  choices: Record<string, string>;
  submitted: Record<string, string>;
}

interface PersistedState {
  version: number;
  session: PersistedSession | null;
  lastResultId: string | null;
}

const SERVER_STATE: StoreState = { session: null, lastResultId: null, restoreError: null };
let state: StoreState = SERVER_STATE;
const listeners = new Set<() => void>();
let hydrated = false;

const INVALID_MESSAGE =
  "Your previous quiz could not be resumed because its saved data is out of date or incomplete. Please start a new quiz.";

function isStringRecord(value: unknown): value is Record<string, string> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((v) => typeof v === "string")
  );
}

/** Validate a persisted session against the current question bank. */
export function restoreSession(raw: unknown): QuizSession | null {
  if (typeof raw !== "object" || raw === null) return null;
  const p = raw as Partial<PersistedSession>;
  if (typeof p.id !== "string" || typeof p.startedAt !== "string") return null;
  if (typeof p.config !== "object" || p.config === null) return null;
  if (!Array.isArray(p.questionIds) || p.questionIds.length === 0) return null;
  if (!isStringRecord(p.choices) || !isStringRecord(p.submitted)) return null;
  if (typeof p.index !== "number" || !Number.isInteger(p.index)) return null;
  if (p.index < 0 || p.index >= p.questionIds.length) return null;

  const byId = new Map(reviewedQuestions.map((q) => [q.id, q]));
  const ordered: QuizQuestion[] = [];
  const seen = new Set<string>();
  for (const id of p.questionIds) {
    const q = typeof id === "string" ? byId.get(id) : undefined;
    if (!q || seen.has(id)) return null;
    seen.add(id);
    ordered.push(q);
  }
  // Every stored answer must reference a question in the set and a real option.
  for (const answers of [p.choices, p.submitted]) {
    for (const [qid, oid] of Object.entries(answers)) {
      const q = byId.get(qid);
      if (!q || !seen.has(qid) || !q.options.some((o) => o.id === oid)) return null;
    }
  }

  return {
    id: p.id,
    startedAt: p.startedAt,
    deadline: typeof p.deadline === "string" ? p.deadline : null,
    config: p.config,
    questions: ordered,
    index: p.index,
    choices: p.choices,
    submitted: p.submitted,
  };
}

function toPersisted(s: StoreState): PersistedState {
  const session = s.session;
  return {
    version: STORAGE_VERSION,
    lastResultId: s.lastResultId,
    session: session
      ? {
          id: session.id,
          startedAt: session.startedAt,
          deadline: session.deadline ?? null,
          config: session.config,
          questionIds: session.questions.map((q) => q.id),
          index: session.index,
          choices: session.choices,
          submitted: session.submitted,
        }
      : null,
  };
}

function hydrate(): void {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  state = { session: null, lastResultId: null, restoreError: null };
  try {
    for (const key of LEGACY_KEYS) {
      if (window.localStorage.getItem(key) !== null) {
        window.localStorage.removeItem(key);
      }
    }
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    const lastResultId = typeof parsed?.lastResultId === "string" ? parsed.lastResultId : null;
    if (parsed?.version !== STORAGE_VERSION) throw new Error("version");
    if (parsed.session == null) {
      state = { ...state, lastResultId };
      return;
    }
    const session = restoreSession(parsed.session);
    if (!session) throw new Error("invalid");
    state = { session, lastResultId, restoreError: null };
  } catch {
    state = { session: null, lastResultId: null, restoreError: INVALID_MESSAGE };
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
}

function persist(): void {
  if (typeof window === "undefined") return;
  try {
    if (state.session) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersisted(state)));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
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

/** Remaining time for a timed session, computed from its original deadline. */
export function remainingMs(session: QuizSession, now: number = Date.now()): number | null {
  if (!session.deadline) return null;
  return Math.max(0, new Date(session.deadline).getTime() - now);
}

export const quizStore = {
  /**
   * Start a new session. Returns false when the question set is empty.
   * Callers must confirm with the learner before replacing an active session.
   */
  start(config: QuizConfig, pickedQuestions: QuizQuestion[], timeLimitMs?: number): boolean {
    if (pickedQuestions.length === 0) return false;
    const now = Date.now();
    setState({
      session: {
        id: makeId(),
        startedAt: new Date(now).toISOString(),
        deadline: timeLimitMs ? new Date(now + timeLimitMs).toISOString() : null,
        config,
        questions: pickedQuestions,
        index: 0,
        choices: {},
        submitted: {},
      },
      lastResultId: null,
      restoreError: null,
    });
    return true;
  },

  getActive(): QuizSession | null {
    hydrate();
    return state.session;
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

  /** Finish the quiz: grade, store the result, clear only the active session. */

  finish(): QuizResult | null {
    const session = state.session;
    if (!session) return null;

    const result = buildResult(session);

    // Always save locally first.
    saveResult(result);

    setState({
      session: null,
      lastResultId: result.id,
      restoreError: null,
    });

    if (typeof window !== "undefined") {
      void import("@/services/quiz-sync")
        .then(({ queueCloudResult }) => queueCloudResult(result))
        .catch((error: unknown) => {
          console.error("Unable to queue cloud quiz result:", error);
        });
    }

    return result;
  },

  /** Abandon the active quiz. Completed results and mistakes are untouched. */
  clear(): void {
    setState({ ...state, session: null, restoreError: null });
  },

  dismissRestoreError(): void {
    if (state.restoreError) setState({ ...state, restoreError: null });
  },
};

function useStore(): StoreState {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER_STATE);
}

export function useQuizSession(): QuizSession | null {
  return useStore().session;
}

export function useRestoreError(): string | null {
  return useStore().restoreError;
}
