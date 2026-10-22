
import type { QuizResult } from "@/types/quiz";
import { createClient } from "@/lib/supabase/client";
import { saveCloudResult } from "@/services/cloud-results";

const KEY_PREFIX = "cloudprep.pending.v1.";

function queueKey(userId: string): string {
  return `${KEY_PREFIX}${userId}`;
}

function readPending(userId: string): QuizResult[] {
  try {
    const raw = localStorage.getItem(queueKey(userId));
    const parsed: unknown = JSON.parse(raw ?? "[]");
    return Array.isArray(parsed) ? parsed as QuizResult[] : [];
  } catch {
    return [];
  }
}

function writePending(userId: string, results: QuizResult[]): void {
  localStorage.setItem(queueKey(userId), JSON.stringify(results));
}

function removePending(userId: string, resultId: string): void {
  const remaining = readPending(userId).filter(
    (result) => result.id !== resultId
  );
  writePending(userId, remaining);
}

/**
 * Save a result to the current learner's pending queue,
 * then attempt its upload.
 */
export async function queueCloudResult(
  result: QuizResult
): Promise<void> {
  if (typeof window === "undefined") return;

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;

  // Guests retain local results without assigning them
  // to an account they haven't signed into.
  if (!data.user) return;

  const userId = data.user.id;
  const existing = readPending(userId);

  if (!existing.some((item) => item.id === result.id)) {
    writePending(userId, [...existing, result]);
  }

  await syncPendingCloudResults(userId);
}

const running = new Set<string>();

/**
 * Retry pending results only for their original owner.
 */
export async function syncPendingCloudResults(
  expectedUserId?: string
): Promise<void> {
  if (typeof window === "undefined") return;

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) return;

  const userId = data.user.id;

  if (expectedUserId && expectedUserId !== userId) return;
  if (running.has(userId)) return;

  running.add(userId);

  try {
    for (const result of readPending(userId)) {
      // Verify the same learner is still signed in.
      const { data: current } = await supabase.auth.getUser();
      if (current.user?.id !== userId) break;

      try {
        const saved = await saveCloudResult(result, userId);

        if (saved) {
          removePending(userId, result.id);
        }
      } catch (error) {
        console.error(
          "Quiz upload pending retry:",
          result.id,
          error
        );

        // Keep the result queued for a later retry.
      }
    }
  } finally {
    running.delete(userId);
  }
}
