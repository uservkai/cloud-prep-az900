import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, X, PlayCircle, ExternalLink } from "lucide-react";
import { mistakeQuestions } from "@/store/results-store";
import { buildQuizFromQuestionIds } from "@/services/quiz-service";
import { quizStore } from "@/store/quiz-session";
import type { QuizConfig } from "@/types/quiz";
import { topicName } from "@/data/syllabus";
import { buttonPrimary, buttonSecondary, EmptyState, Pill } from "@/components/ui";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "Mistakes review — CloudPrep AZ-900" },
      {
        name: "description",
        content: "Revisit every AZ-900 question you answered incorrectly and practise them again.",
      },
      { property: "og:title", content: "Mistakes review — CloudPrep AZ-900" },
      {
        property: "og:description",
        content: "Review the AZ-900 questions you missed, with explanations, and retry them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MistakesReview,
});

function MistakesReview() {
  const navigate = useNavigate();
  const [mistakes, setMistakes] = useState<ReturnType<typeof mistakeQuestions> | null>(null);

  useEffect(() => {
    setMistakes(mistakeQuestions());
  }, []);

  if (!mistakes) {
    return <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6"><p className="text-sm text-muted-foreground">Loading your mistakes…</p></div>;
  }

  if (mistakes.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Mistakes review</h1>
        <div className="mt-8">
          <EmptyState
            title="No mistakes recorded"
            description="Finish a quiz first — every question you answer incorrectly is collected here with its explanation so you can revisit it."
          >
            <Link to="/quiz/setup" className={buttonPrimary}>
              Start practising
            </Link>
            <Link to="/dashboard" className={buttonSecondary}>
              Go to dashboard
            </Link>
          </EmptyState>
        </div>
      </div>
    );
  }

  function practiseMistakes() {
    const ids = mistakes.map((m) => m.entry.questionId).slice(0, 20);
    const picked = buildQuizFromQuestionIds(ids);
    if (picked.length === 0) return;
    const config: QuizConfig = {
      domainId: "all",
      topicId: "all",
      difficulty: "mixed",
      mode: "practice",
      requestedCount: picked.length,
    };
    if (quizStore.start(config, picked)) {
      void navigate({ to: "/quiz/run" });
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Mistakes review</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mistakes.length} question{mistakes.length === 1 ? "" : "s"} you answered incorrectly, with the answer you chose.
          </p>
        </div>
        <button type="button" onClick={practiseMistakes} className={buttonPrimary}>
          <PlayCircle className="h-4 w-4" aria-hidden />
          Practise these ({Math.min(mistakes.length, 20)})
        </button>
      </div>

      <div className="mt-8 space-y-5">
        {mistakes.map(({ entry, chosenText }) => {
          const question = buildQuizFromQuestionIds([entry.questionId])[0];
          if (!question) return null;
          const correctOption = question.options.find((o) => o.id === question.correctOptionId);
          return (
            <article key={entry.questionId} className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <Pill tone="neutral">{topicName(question.topicId)}</Pill>
                <span className="text-xs text-muted-foreground">
                  Last missed {new Date(entry.attemptedAt).toLocaleDateString()}
                </span>
              </div>
              <h2 className="mt-3 font-display text-base font-bold leading-relaxed text-foreground">
                {question.stem}
              </h2>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex items-start gap-2 rounded-xl border border-danger/40 bg-danger-soft p-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden />
                  <span>
                    <strong className="font-semibold">Your answer:</strong> {chosenText}
                  </span>
                </p>
                <p className="flex items-start gap-2 rounded-xl border border-success/40 bg-success-soft p-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  <span>
                    <strong className="font-semibold">Correct answer:</strong> {correctOption?.text}
                  </span>
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{question.correctExplanation}</p>
              {question.sourceUrl ? (
                <a
                  href={question.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  {question.sourceLabel}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
