import { describe, expect, it } from "vitest";
import { reviewedQuestions } from "@/data/questions";
import { remainingMs, restoreSession } from "@/store/quiz-session";
import type { QuizSession } from "@/types/quiz";

const [a, b, c] = reviewedQuestions;
const base = {
  id: "s1",
  startedAt: "2026-01-01T00:00:00.000Z",
  deadline: null,
  config: { domainId: "all", topicId: "all", difficulty: "mixed", mode: "practice", requestedCount: 3 },
  questionIds: [c!.id, a!.id, b!.id],
  index: 2,
  choices: { [c!.id]: c!.options[0]!.id },
  submitted: { [c!.id]: c!.options[0]!.id },
};

describe("active session restore", () => {
  it("preserves exact question order, index and submitted answers", () => {
    const s = restoreSession(base)!;
    expect(s.questions.map((q) => q.id)).toEqual([c!.id, a!.id, b!.id]);
    expect(s.index).toBe(2);
    expect(s.submitted).toEqual(base.submitted);
  });

  it("rejects sessions referencing unavailable questions", () => {
    expect(restoreSession({ ...base, questionIds: ["nope", a!.id] })).toBeNull();
  });

  it("rejects corrupted data", () => {
    expect(restoreSession("garbage")).toBeNull();
    expect(restoreSession({ ...base, index: 9 })).toBeNull();
    expect(restoreSession({ ...base, submitted: { [a!.id]: "zz" } })).toBeNull();
  });

  it("computes remaining time from the original deadline", () => {
    const s = { deadline: "2026-01-01T00:10:00.000Z" } as QuizSession;
    expect(remainingMs(s, Date.parse("2026-01-01T00:04:00.000Z"))).toBe(6 * 60 * 1000);
  });
});
