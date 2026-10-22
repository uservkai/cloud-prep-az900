
/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { QuizResult } from "@/types/quiz";
import { loadResults } from "@/store/results-store";
import { topics, topicName } from "@/data/syllabus";
import { questionById } from "@/services/quiz-service";
import {
  buttonPrimary,
  buttonSecondary,
  EmptyState,
  Pill,
  ProgressBar,
  StatCard,
} from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import { loadCloudResults } from "@/services/cloud-results";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CloudPrep AZ-900" },
      {
        name: "description",
        content:
          "Practice statistics, recent quiz activity and topic accuracy for your AZ-900 preparation.",
      },
      {
        property: "og:title",
        content: "Dashboard — CloudPrep AZ-900",
      },
      {
        property: "og:description",
        content:
          "Track AZ-900 practice accuracy by topic, recent quizzes and mistakes to review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function formatMode(mode: QuizResult["mode"]): string {
  return mode === "practice" ? "Practice mode" : "Assessment mode";
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Dashboard() {
  const [results, setResults] = useState<QuizResult[] | null>(null);

  const [dataSource, setDataSource] = useState<
    "local" | "cloud" | "cloud-error"
  >("local");

  useEffect(() => {
    let active = true;
    let requestId = 0;
    let currentUserId: string | null | undefined = undefined;

    const supabase = createClient();

    function handleAccountChange(userId: string | null) {
      if (!active) return;

      // Avoid reloading the same account unnecessarily.
      if (currentUserId === userId) return;

      currentUserId = userId;
      const thisRequest = ++requestId;

      // Immediately clear results from the previous account.
      setResults(null);
      setDataSource("local");

      if (!userId) {
        // Guest Mode: load local results immediately.
        setResults(loadResults());
        return;
      }

      // Fetch cloud history after the authentication callback.
      setTimeout(() => {
        if (!active || thisRequest !== requestId) return;

        void loadCloudResults()
          .then((cloudResults) => {
            if (!active || thisRequest !== requestId) return;

            setResults(cloudResults);
            setDataSource("cloud");
          })
          .catch((error: unknown) => {
            if (!active || thisRequest !== requestId) return;

            console.error("Could not load cloud history:", error);
            setResults([]);
            setDataSource("cloud-error");
          });
      }, 0);
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (
          event === "INITIAL_SESSION" ||
          event === "SIGNED_IN" ||
          event === "SIGNED_OUT"
        ) {
          handleAccountChange(session?.user?.id ?? null);
        }
      }
    );

    return () => {
      active = false;
      requestId++;
      subscription.unsubscribe();
    };
  }, []);

  const stats = useMemo(() => {
    const completedResults = results ?? [];

    const answered = completedResults.reduce(
      (sum, result) => sum + result.total,
      0
    );

    const correct = completedResults.reduce(
      (sum, result) => sum + result.correct,
      0
    );

    const byTopic = new Map<
      string,
      { correct: number; total: number }
    >();

    for (const result of completedResults) {
      for (const [topicId, breakdown] of Object.entries(
        result.topicBreakdown
      )) {
        const bucket = byTopic.get(topicId) ?? {
          correct: 0,
          total: 0,
        };

        bucket.correct += breakdown.correct;
        bucket.total += breakdown.total;

        byTopic.set(topicId, bucket);
      }
    }

    const topicsPractised = byTopic.size;

    const topicRows = topics
      .filter((topic) => byTopic.has(topic.id))
      .map((topic) => ({
        topicId: topic.id,
        ...(byTopic.get(topic.id) as {
          correct: number;
          total: number;
        }),
      }))
      .sort((a, b) => b.total - a.total);

    return {
      answered,
      correct,
      quizzes: completedResults.length,
      topicsPractised,
      topicRows,
    };
  }, [results]);

  const loading = results === null;
  const hasData = stats.quizzes > 0;

  const avgAccuracy =
    stats.answered > 0
      ? Math.round((stats.correct / stats.answered) * 100)
      : 0;

  const recent = results?.slice(0, 5) ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Your practice dashboard
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            {hasData
              ? dataSource === "cloud"
                ? "Calculated from your recent quizzes saved to Supabase."
                : "Calculated from quizzes saved on this device."
              : "Track your progress as you complete quizzes."}
          </p>
        </div>

        <Link to="/quiz/setup" className={buttonPrimary}>
          Start a quiz
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-4">
        {loading ? (
          <Pill tone="brand">
            Loading practice history...
          </Pill>
        ) : dataSource === "cloud-error" ? (
          <Pill tone="warning">
            Unable to load account history
          </Pill>
        ) : dataSource === "cloud" ? (
          <Pill tone="brand">
            Synced account history — Supabase
          </Pill>
        ) : (
          <Pill tone="brand">
            Guest progress — stored on this device
          </Pill>
        )}
      </div>

      {/* Statistics */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Quizzes completed"
          value={String(stats.quizzes)}
        />

        <StatCard
          label="Questions answered"
          value={String(stats.answered)}
        />

        <StatCard
          label="Overall accuracy"
          value={`${avgAccuracy}%`}
          hint="Correct ÷ answered"
        />

        <StatCard
          label="Topics practised"
          value={`${stats.topicsPractised} / ${topics.length}`}
        />
      </div>

      {/* Topic accuracy */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">
          Accuracy by topic
        </h2>

        {stats.topicRows.length > 0 ? (
          <div className="mt-4 space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
            {stats.topicRows.map((row) => (
              <div key={row.topicId}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-foreground">
                    {topicName(row.topicId)}
                  </span>

                  <span className="text-muted-foreground">
                    {row.correct}/{row.total} ·{" "}
                    {row.total > 0
                      ? Math.round(
                        (row.correct / row.total) * 100
                      )
                      : 0}
                    %
                  </span>
                </div>

                <ProgressBar
                  className="mt-2"
                  value={row.correct}
                  max={row.total}
                  tone={
                    row.total > 0 &&
                      row.correct / row.total >= 0.7
                      ? "success"
                      : row.total > 0 &&
                        row.correct / row.total >= 0.4
                        ? "brand"
                        : "danger"
                  }
                  label={`Accuracy for ${topicName(row.topicId)}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <EmptyState
              title={
                loading
                  ? "Loading topic accuracy"
                  : "No topic data yet"
              }
              description={
                loading
                  ? "Checking your saved quiz results."
                  : "Complete your first quiz to see your accuracy by topic."
              }
            >
              {!loading && (
                <Link to="/quiz/setup" className={buttonPrimary}>
                  Start practising
                </Link>
              )}
            </EmptyState>
          </div>
        )}
      </section>

      {/* Recent activity */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">
          Recent activity
        </h2>

        {hasData ? (
          <ul className="mt-4 divide-y divide-border rounded-2xl border bg-card shadow-sm">
            {recent.map((result) => {
              const pct =
                result.total > 0
                  ? Math.round(
                    (result.correct / result.total) * 100
                  )
                  : 0;

              const mistakes = result.items.filter(
                (item) =>
                  !item.correct &&
                  item.chosenOptionId !== null
              ).length;

              const topicSet = new Set(
                result.items
                  .map(
                    (item) =>
                      questionById(item.questionId)?.topicId
                  )
                  .filter(Boolean)
              );

              return (
                <li
                  key={result.id}
                  className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {formatMode(result.mode)} · {result.total} questions
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {formatDate(result.completedAt)} ·{" "}
                      {topicSet.size} topic
                      {topicSet.size === 1 ? "" : "s"} ·{" "}
                      {mistakes} mistake
                      {mistakes === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Pill
                      tone={
                        pct >= 70
                          ? "success"
                          : pct >= 40
                            ? "brand"
                            : "danger"
                      }
                    >
                      {pct}%
                    </Pill>

                    <Link
                      to="/quiz/results"
                      search={{ result: result.id }}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View result
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-4">
            <EmptyState
              title={
                loading
                  ? "Loading recent activity"
                  : "No quizzes yet"
              }
              description={
                loading
                  ? "Checking your saved quiz results."
                  : dataSource === "cloud-error"
                    ? "Your account history could not be loaded. Please check your connection and try again."
                    : "Your five most recent quizzes will appear here with accuracy and links to review them."
              }
            >
              {!loading && (
                <>
                  <Link to="/quiz/setup" className={buttonPrimary}>
                    Start practising
                  </Link>

                  <Link to="/topics" className={buttonSecondary}>
                    Browse topics
                  </Link>
                </>
              )}
            </EmptyState>
          </div>
        )}
      </section>
    </div>
  );
}
