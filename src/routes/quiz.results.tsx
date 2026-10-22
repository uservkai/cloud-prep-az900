/* eslint-disable prettier/prettier */
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import type { QuizResult } from "@/types/quiz";
import { loadResults } from "@/store/results-store";
import { loadCloudResults } from "@/services/cloud-results";
import { createClient } from "@/lib/supabase/client";
import { buildQuiz, questionById } from "@/services/quiz-service";
import { quizStore } from "@/store/quiz-session";
import { topicName } from "@/data/syllabus";
import { AccuracyRing, buttonPrimary, buttonSecondary, EmptyState, Pill, ProgressBar } from "@/components/ui";

export const Route = createFileRoute("/quiz/results")({
  validateSearch: (search: Record<string, unknown>): { result?: string | undefined } => ({
    result: typeof search["result"] === "string" ? search["result"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Quiz results — CloudPrep AZ-900" },
      {
        name: "description",
        content: "Your AZ-900 quiz score, accuracy by topic and links to review mistakes.",
      },
      { property: "og:title", content: "Quiz results — CloudPrep AZ-900" },
      {
        property: "og:description",
        content: "See your AZ-900 quiz score and topic breakdown.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizResults,
});

function QuizResults() {
  const navigate = useNavigate();
  const search = Route.useSearch();

  const [result, setResult] = useState<QuizResult | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadQuizResult() {
      setLoaded(false);
      setLoadError(null);
      setResult(null);

      // First, find the exact result saved on this device.
      // This preserves the immediate results page after quiz submission.
      const localResults = loadResults();
      const localResult = search.result
        ? localResults.find((r) => r.id === search.result)
        : (localResults[0] ?? null);

      if (localResult) {
        if (active) {
          setResult(localResult);
          setLoaded(true);
        }
        return;
      }

      try {
        // If unavailable locally, look for the result in the
        // authenticated learner's Supabase history.
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();

        if (error) throw error;

        if (!data.user) {
          if (active) setLoaded(true);
          return;
        }

        const cloudResults = await loadCloudResults();

        const cloudResult = search.result
          ? cloudResults.find((r) => r.id === search.result)
          : (cloudResults[0] ?? null);

        if (active) {
          setResult(cloudResult ?? null);
        }
      } catch (error) {
        console.error("Could not load quiz result:", error);

        if (active) {
          setLoadError(
            "We couldn't retrieve this result from your account. Please try again."
          );
        }
      } finally {
        if (active) setLoaded(true);
      }
    }

    void loadQuizResult();

    return () => {
      active = false;
    };
  }, [search.result]);


  if (!loaded) {
    return <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6"><p className="text-sm text-muted-foreground">Loading results…</p></div>;
  }


  if (loadError) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-xl font-bold">
          Unable to load result
        </h1>

        <p role="alert" className="mt-3 text-sm text-danger">
          {loadError}
        </p>

        <Link
          to="/dashboard"
          className={`${buttonPrimary} mt-6`}
        >
          Back to dashboard
        </Link>
      </div>
    );
  }


  if (!result) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <EmptyState
          title="No result to show"
          description="Finish a quiz first — results are calculated from the answers you submit."
        >
          <Link to="/quiz/setup" className={buttonPrimary}>
            Start a quiz
          </Link>
        </EmptyState>
      </div>
    );
  }

  const pct = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;
  const mistakes = result.items.filter((i) => !i.correct && i.chosenOptionId !== null);
  const skipped = result.items.filter((i) => i.chosenOptionId === null);

  function retry() {
    if (!result) return;
    const picked = buildQuiz(result.config);
    if (picked.length === 0) return;
    if (quizStore.start(result.config, picked)) {
      void navigate({ to: "/quiz/run" });
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Quiz complete</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {result.mode === "practice" ? "Practice mode" : "Assessment mode"} · {result.total} questions ·{" "}
            {new Date(result.completedAt).toLocaleString()}
          </p>
        </div>
        <Pill tone={pct >= 70 ? "success" : pct >= 40 ? "brand" : "danger"}>
          {pct >= 70 ? "Strong performance" : pct >= 40 ? "Keep going" : "Worth another pass"}
        </Pill>
      </div>

      <div className="mt-6 grid gap-6 rounded-2xl border bg-card p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="justify-self-center">
          <AccuracyRing percent={pct} />
        </div>
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-muted-foreground">Correct</dt>
            <dd className="font-display text-2xl font-bold text-success">{result.correct}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Incorrect</dt>
            <dd className="font-display text-2xl font-bold text-danger">{result.incorrect}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Skipped</dt>
            <dd className="font-display text-2xl font-bold text-muted-foreground">{skipped.length}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Score calculated from your submitted answers. This is practice feedback, not an official Microsoft
        score or a guarantee of exam readiness.
      </p>

      {/* Performance by topic */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">Performance by topic</h2>
        <div className="mt-4 space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
          {Object.entries(result.topicBreakdown)
            .sort((a, b) => b[1].total - a[1].total)
            .map(([topicId, breakdown]) => {
              const topicPct = Math.round((breakdown.correct / breakdown.total) * 100);
              return (
                <div key={topicId}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-foreground">{topicName(topicId)}</span>
                    <span className="text-muted-foreground">
                      {breakdown.correct}/{breakdown.total} · {topicPct}%
                    </span>
                  </div>
                  <ProgressBar
                    className="mt-2"
                    value={breakdown.correct}
                    max={breakdown.total}
                    tone={topicPct >= 70 ? "success" : topicPct >= 40 ? "brand" : "danger"}
                    label={`Accuracy for ${topicName(topicId)}`}
                  />
                </div>
              );
            })}
        </div>
      </section>

      {/* Question strip */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">Question summary</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {result.items.map((item, i) => {
            const q = questionById(item.questionId);
            const tone = item.correct ? "success" : item.chosenOptionId === null ? "neutral" : "danger";
            return (
              <span
                key={item.questionId}
                title={q ? q.stem : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${tone === "success"
                  ? "bg-success-soft text-success"
                  : tone === "danger"
                    ? "bg-danger-soft text-danger"
                    : "bg-muted text-muted-foreground"
                  }`}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Green: correct · Red: incorrect · Grey: skipped. Hover a number to preview the question.
        </p>
      </section>

      {/* Actions */}
      <div className="mt-10 flex flex-wrap gap-3">
        <button type="button" onClick={retry} className={buttonPrimary}>
          <RotateCcw className="h-4 w-4" aria-hidden />
          Retry this quiz
        </button>
        {mistakes.length > 0 ? (
          <Link to="/review" className={buttonSecondary}>
            Review {mistakes.length} mistake{mistakes.length === 1 ? "" : "s"}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        ) : null}
        <Link to="/dashboard" className={buttonSecondary}>
          Back to dashboard
        </Link>
      </div>

    </div>
  );
}
