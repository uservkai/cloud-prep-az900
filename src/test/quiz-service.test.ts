import { describe, expect, it } from "vitest";
import {
  buildQuiz,
  buildQuizFromQuestionIds,
  buildResult,
  getAvailableQuestions,
  topicCoverage,
} from "@/services/quiz-service";
import { pendingQuestions, reviewedQuestions } from "@/data/questions";
import { topics } from "@/data/syllabus";
import type { QuizConfig, QuizSession } from "@/types/quiz";

const allConfig: QuizConfig = {
  domainId: "all",
  topicId: "all",
  difficulty: "mixed",
  mode: "practice",
  requestedCount: "max",
};

function sessionFor(config: QuizConfig, submitted: Record<string, string>): QuizSession {
  return {
    id: "test-session",
    startedAt: new Date().toISOString(),
    config,
    questions: buildQuiz(config),
    index: 0,
    choices: { ...submitted },
    submitted,
  };
}

describe("seed integrity", () => {
  it("covers every official topic with at least one reviewed question", () => {
    const coverage = topicCoverage();
    for (const topic of topics) {
      const entry = coverage.get(topic.id);
      expect(entry, `no coverage entry for ${topic.id}`).toBeDefined();
      expect(entry!.reviewed, `topic ${topic.id} has no reviewed questions`).toBeGreaterThan(0);
    }
  });

  it("flags questions without a verified source as needing verification", () => {
    for (const question of pendingQuestions) {
      expect(question.reviewStatus).toBe("needs-verification");
      expect(question.sourceUrl).toBeNull();
    }
  });

  it("keeps optionExplanations complete for every option", () => {
    for (const question of reviewedQuestions) {
      for (const option of question.options) {
        expect(
          question.optionExplanations[option.id],
          `missing explanation for option ${option.id} in ${question.id}`,
        ).toBeTruthy();
      }
      expect(question.options.map((o) => o.id)).toContain(question.correctOptionId);
    }
  });
});

describe("quiz building", () => {
  it("only ever draws reviewed, source-verified questions", () => {
    const pool = getAvailableQuestions(allConfig);
    expect(pool.length).toBeGreaterThan(0);
    for (const question of pool) {
      expect(question.reviewStatus).toBe("reviewed");
      expect(question.sourceUrl).toBeTruthy();
    }
    // The needs-verification datacenter question must never enter a quiz.
    expect(pool.some((q) => q.id === "d2-arch-datacenters")).toBe(false);
  });

  it("never repeats a question within an assessment", () => {
    for (let i = 0; i < 5; i++) {
      const picked = buildQuiz(allConfig);
      const ids = new Set(picked.map((q) => q.id));
      expect(ids.size).toBe(picked.length);
    }
  });

  it("caps the requested count to the available pool", () => {
    const picked = buildQuiz({ ...allConfig, requestedCount: 5 });
    expect(picked.length).toBe(5);
    const capped = buildQuiz({ ...allConfig, requestedCount: 10000 });
    expect(capped.length).toBe(reviewedQuestions.length);
  });

  it("returns an empty set gracefully for an impossible filter", () => {
    const picked = buildQuiz({
      ...allConfig,
      domainId: "cloud-concepts",
      topicId: "d1-cloud-benefits",
      difficulty: "advanced",
    });
    expect(picked).toEqual([]);
  });

  it("builds mistake retries from reviewed questions only, without duplicates", () => {
    const picked = buildQuizFromQuestionIds([
      "d1-cc-shared-responsibility-vm",
      "d1-cc-shared-responsibility-vm",
      "d2-arch-datacenters", // needs verification — must be excluded
      "d3-mon-advisor",
    ]);
    expect(picked.map((q) => q.id).sort()).toEqual([
      "d1-cc-shared-responsibility-vm",
      "d3-mon-advisor",
    ]);
  });
});

describe("scoring", () => {
  it("calculates the score from actual submitted answers", () => {
    const config: QuizConfig = {
      domainId: "cloud-concepts",
      topicId: "d1-cloud-computing",
      difficulty: "mixed",
      mode: "practice",
      requestedCount: "max",
    };
    const questions = buildQuiz(config);
    expect(questions.length).toBeGreaterThan(0);

    // Submit the correct answer for the first question and a wrong one for the rest.
    const submitted: Record<string, string> = {};
    questions.forEach((q, i) => {
      submitted[q.id] = i === 0 ? q.correctOptionId : q.options.find((o) => o.id !== q.correctOptionId)!.id;
    });

    const result = buildResult(sessionFor(config, submitted));
    expect(result.total).toBe(questions.length);
    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(questions.length - 1);
    expect(Object.values(result.topicBreakdown).reduce((s, b) => s + b.total, 0)).toBe(questions.length);
  });

  it("counts skipped questions as incorrect", () => {
    const picked = buildQuiz({ ...allConfig, requestedCount: 5 });
    const result = buildResult(sessionFor(allConfig, {}));
    expect(result.total).toBe(5);
    expect(result.correct).toBe(0);
    expect(result.incorrect).toBe(5);
    expect(result.items.every((i) => i.chosenOptionId === null)).toBe(true);
  });
});
