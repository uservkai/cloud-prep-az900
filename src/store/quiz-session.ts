/* eslint-disable prettier/prettier */

import { useSyncExternalStore } from "react";
import type {
  QuizConfig,
  QuizQuestion,
  QuizResult,
  QuizSession,
} from "@/types/quiz";
import { reviewedQuestions } from "@/data/questions";
import { buildResult } from "@/services/quiz-service";
import {
  saveResult,
  saveAccountResult,
} from "@/store/results-store";

/**
 * Active quiz sessions are stored separately for guests and
 * each authenticated learner.
 *
 * Only question IDs are persisted. Questions are resolved
 * and validated against the current reviewed question bank.
 *
 * Completed quiz results are managed by results-store.
 */

/* Legacy shared key: preserved, never automatically assigned. */
export const STORAGE_KEY = "cloudprep.activeSession.v2";

const STORAGE_PREFIX = "cloudprep.activeSession.v3.";
const STORAGE_VERSION = 3;

function storageKeyFor(userId: string | null): string {
  return userId
    ? `${STORAGE_PREFIX}user.${userId}`
    : `${STORAGE_PREFIX}guest`;
}

interface StoreState {
  session: QuizSession | null;
  lastResultId: string | null;
  restoreError: string | null;
  ownerReady: boolean;
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

const SERVER_STATE: StoreState = {
  session: null,
  lastResultId: null,
  restoreError: null,
  ownerReady: false,
};

let state: StoreState = SERVER_STATE;

const listeners = new Set<() => void>();

let hydrated = false;
let ownerUserId: string | null = null;
let currentStorageKey: string | null = null;

const INVALID_MESSAGE =
  "Your previous quiz could not be resumed because its saved data is out of date or incomplete. Please start a new quiz.";

function notify(): void {
  for (const listener of listeners) {
    listener();
  }
}

function isStringRecord(
  value: unknown,
): value is Record<string, string> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((v) => typeof v === "string")
  );
}

/**
 * Validate a persisted quiz against the current question bank.
 */
export function restoreSession(raw: unknown): QuizSession | null {
  if (typeof raw !== "object" || raw === null) return null;

  const p = raw as Partial<PersistedSession>;

  if (typeof p.id !== "string" || typeof p.startedAt !== "string") {
    return null;
  }

  if (typeof p.config !== "object" || p.config === null) {
    return null;
  }

  if (!Array.isArray(p.questionIds) || p.questionIds.length === 0) {
    return null;
  }

  if (!isStringRecord(p.choices) || !isStringRecord(p.submitted)) {
    return null;
  }

  if (
    typeof p.index !== "number" ||
    !Number.isInteger(p.index) ||
    p.index < 0 ||
    p.index >= p.questionIds.length
  ) {
    return null;
  }

  const byId = new Map(reviewedQuestions.map((q) => [q.id, q]));
  const ordered: QuizQuestion[] = [];
  const seen = new Set<string>();

  for (const id of p.questionIds) {
    const question =
      typeof id === "string" ? byId.get(id) : undefined;

    if (!question || seen.has(id)) return null;

    seen.add(id);
    ordered.push(question);
  }

  for (const answers of [p.choices, p.submitted]) {
    for (const [questionId, optionId] of Object.entries(answers)) {
      const question = byId.get(questionId);

      if (
        !question ||
        !seen.has(questionId) ||
        !question.options.some((option) => option.id === optionId)
      ) {
        return null;
      }
    }
  }

  return {
    id: p.id,
    startedAt: p.startedAt,
    deadline:
      typeof p.deadline === "string" ? p.deadline : null,
    config: p.config,
    questions: ordered,
    index: p.index,
    choices: p.choices,
    submitted: p.submitted,
  };
}

function toPersisted(current: StoreState): PersistedState {
  const session = current.session;

  return {
    version: STORAGE_VERSION,
    lastResultId: current.lastResultId,
    session: session
      ? {
          id: session.id,
          startedAt: session.startedAt,
          deadline: session.deadline ?? null,
          config: session.config,
          questionIds: session.questions.map(
            (question) => question.id,
          ),
          index: session.index,
          choices: session.choices,
          submitted: session.submitted,
        }
      : null,
  };
}

/**
 * Load only the currently identified learner's session.
 */
function hydrate(): void {
  if (
    hydrated ||
    !state.ownerReady ||
    !currentStorageKey ||
    typeof window === "undefined"
  ) {
    return;
  }

  hydrated = true;

  state = {
    ...SERVER_STATE,
    ownerReady: true,
  };

  try {
    const raw = window.localStorage.getItem(currentStorageKey);
    if (!raw) return;

    const parsed: unknown = JSON.parse(raw);

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      (parsed as Partial<PersistedState>).version !==
        STORAGE_VERSION
    ) {
      throw new Error("Unsupported quiz session version.");
    }

    const saved = parsed as PersistedState;

    const lastResultId =
      typeof saved.lastResultId === "string"
        ? saved.lastResultId
        : null;

    if (saved.session === null || saved.session === undefined) {
      state = {
        ...state,
        lastResultId,
      };
      return;
    }

    const session = restoreSession(saved.session);

    if (!session) {
      throw new Error("Invalid stored quiz session.");
    }

    state = {
      session,
      lastResultId,
      restoreError: null,
      ownerReady: true,
    };
  } catch {
    // Preserve existing data for troubleshooting.
    state = {
      session: null,
      lastResultId: null,
      restoreError: INVALID_MESSAGE,
      ownerReady: true,
    };
  }
}

/**
 * Persist only to the active learner's own storage key.
 */
function persist(): void {
  if (
    typeof window === "undefined" ||
    !state.ownerReady ||
    !currentStorageKey
  ) {
    return;
  }

  try {
    if (state.session) {
      window.localStorage.setItem(
        currentStorageKey,
        JSON.stringify(toPersisted(state)),
      );
    } else {
      window.localStorage.removeItem(currentStorageKey);
    }
  } catch {
    // Storage may be unavailable. Keep the session in memory.
  }
}

function setState(next: StoreState): void {
  state = next;
  persist();
  notify();
}

/**
 * Set the current learner after Supabase establishes auth state.
 *
 * Signed-out learners use guest storage.
 * Authenticated learners use their own user-ID storage.
 */
export function setQuizOwner(userId: string | null): void {
  if (typeof window === "undefined") return;

  const nextKey = storageKeyFor(userId);

  if (state.ownerReady && currentStorageKey === nextKey) {
    return;
  }

  // The previous learner's session is already persisted.
  // Do not copy it to the next learner.
  ownerUserId = userId;
  currentStorageKey = nextKey;

  hydrated = false;

  state = {
    ...SERVER_STATE,
    ownerReady: true,
  };

  hydrate();
  notify();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): StoreState {
  hydrate();
  return state;
}

function makeId(): string {
  if (
    typeof crypto !== "undefined" &&
    "randomUUID" in crypto
  ) {
    return crypto.randomUUID();
  }

  return `s_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/**
 * Remaining time for a timed quiz.
 */
export function remainingMs(
  session: QuizSession,
  now: number = Date.now(),
): number | null {
  if (!session.deadline) return null;

  return Math.max(
    0,
    new Date(session.deadline).getTime() - now,
  );
}

export const quizStore = {
  /**
   * Start a new quiz belonging to the current learner.
   */
  start(
    config: QuizConfig,
    pickedQuestions: QuizQuestion[],
    timeLimitMs?: number,
  ): boolean {
    if (!state.ownerReady || pickedQuestions.length === 0) {
      return false;
    }

    const now = Date.now();

    setState({
      session: {
        id: makeId(),
        startedAt: new Date(now).toISOString(),
        deadline: timeLimitMs
          ? new Date(now + timeLimitMs).toISOString()
          : null,
        config,
        questions: pickedQuestions,
        index: 0,
        choices: {},
        submitted: {},
      },
      lastResultId: null,
      restoreError: null,
      ownerReady: true,
    });

    return true;
  },

  getActive(): QuizSession | null {
    if (!state.ownerReady) return null;

    hydrate();
    return state.session;
  },

  /**
   * Choose an answer.
   * Submitted answers are locked in practice mode.
   */
  choose(questionId: string, optionId: string): void {
    if (!state.ownerReady) return;

    const session = state.session;
    if (!session) return;

    if (
      session.config.mode === "practice" &&
      session.submitted[questionId]
    ) {
      return;
    }

    setState({
      ...state,
      session: {
        ...session,
        choices: {
          ...session.choices,
          [questionId]: optionId,
        },
      },
    });
  },

  /**
   * Submit the current practice question.
   */
  submitCurrent(): void {
    if (!state.ownerReady) return;

    const session = state.session;

    if (!session || session.config.mode !== "practice") {
      return;
    }

    const question = session.questions[session.index];
    if (!question) return;

    const choice = session.choices[question.id];

    if (!choice || session.submitted[question.id]) {
      return;
    }

    setState({
      ...state,
      session: {
        ...session,
        submitted: {
          ...session.submitted,
          [question.id]: choice,
        },
      },
    });
  },

  goTo(index: number): void {
    if (!state.ownerReady) return;

    const session = state.session;
    if (!session) return;

    const clamped = Math.max(
      0,
      Math.min(index, session.questions.length - 1),
    );

    setState({
      ...state,
      session: {
        ...session,
        index: clamped,
      },
    });
  },

  next(): void {
    const session = quizStore.getActive();
    if (!session) return;

    quizStore.goTo(session.index + 1);
  },

  prev(): void {
    const session = quizStore.getActive();
    if (!session) return;

    quizStore.goTo(session.index - 1);
  },

  /**
   * Finish a quiz and save the result only to its owner.
   */
  async finish(): Promise<QuizResult | null> {
    if (
      !state.ownerReady ||
      !currentStorageKey
    ) {
      throw new Error(
        "Quiz ownership has not been established.",
      );
    }

    const session = state.session;
    if (!session) return null;

    const expectedStorageKey = currentStorageKey;
    const expectedUserId = ownerUserId;

    const result = buildResult(session);

    if (typeof window !== "undefined") {
      const { createClient } = await import(
        "@/lib/supabase/client"
      );

      const supabase = createClient();
      const { data, error } =
        await supabase.auth.getSession();

      if (error) throw error;

      const actualUserId = data.session?.user?.id ?? null;

      if (
        actualUserId !== expectedUserId ||
        currentStorageKey !== expectedStorageKey ||
        state.session?.id !== session.id
      ) {
        throw new Error(
          "Your account changed during quiz completion. Please return to your quiz.",
        );
      }

      if (expectedUserId) {
        const { enqueuePendingCloudResult } =
          await import("@/services/quiz-sync");

        // Verify ownership again after the asynchronous import.
        if (
          currentStorageKey !== expectedStorageKey ||
          state.session?.id !== session.id
        ) {
          throw new Error(
            "Quiz account changed during completion.",
          );
        }

        // Preserve offline sync and account-local history.
        enqueuePendingCloudResult(
          expectedUserId,
          result,
        );

        saveAccountResult(
          result,
          expectedUserId,
        );
      } else {
        saveResult(result);
      }
    }

    if (
      currentStorageKey !== expectedStorageKey ||
      state.session?.id !== session.id
    ) {
      throw new Error(
        "Quiz account changed during completion.",
      );
    }

    setState({
      session: null,
      lastResultId: result.id,
      restoreError: null,
      ownerReady: true,
    });

    if (expectedUserId) {
      void import("@/services/quiz-sync")
        .then(({ syncPendingCloudResults }) =>
          syncPendingCloudResults(expectedUserId),
        )
        .catch((error: unknown) => {
          console.error(
            "Unable to synchronize quiz result:",
            error,
          );
        });
    }

    return result;
  },

  /**
   * Abandon the current learner's unfinished quiz.
   */
  clear(): void {
    if (!state.ownerReady) return;

    setState({
      ...state,
      session: null,
      restoreError: null,
    });
  },

  dismissRestoreError(): void {
    if (!state.ownerReady || !state.restoreError) {
      return;
    }

    setState({
      ...state,
      restoreError: null,
    });
  },
};

function useStore(): StoreState {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => SERVER_STATE,
  );
}

export function useQuizSession(): QuizSession | null {
  return useStore().session;
}

export function useRestoreError(): string | null {
  return useStore().restoreError;
}

export function useQuizOwnerReady(): boolean {
  return useStore().ownerReady;
}
