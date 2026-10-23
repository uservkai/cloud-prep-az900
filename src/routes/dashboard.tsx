/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { QuizResult } from "@/types/quiz";
import { loadResults } from "@/store/results-store";
import { topics, topicName } from "@/data/syllabus";
import { questionById } from "@/services/quiz-service";
import { buttonPrimary, buttonSecondary, EmptyState, Pill, ProgressBar, StatCard } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import { loadCloudResults } from "@/services/cloud-results";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CloudPrep AZ-900" },
      {
        name: "description",
        content: "Practice statistics, recent quiz activity and topic accuracy for your AZ-900 preparation.",
      },
      { property: "og:title", content: "Dashboard — CloudPrep AZ-900" },
      {
        property: "og:description",
        content: "Track AZ-900 practice accuracy by topic, recent quizzes and mistakes to review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const PAGE_SIZE = 10;
type QuizFilter = "all" | "practice" | "assessment";
type QuizSort = "newest" | "oldest" | "highest" | "lowest";

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

function scoreOf(result: QuizResult): number {
  return result.total > 0 ? (result.correct / result.total) * 100 : 0;
}

function Dashboard() {
  const [results, setResults] = useState<QuizResult[] | null>(null);
  const [dataSource, setDataSource] = useState<"local" | "cloud" | "cloud-error">("local");
  const [quizFilter, setQuizFilter] = useState<QuizFilter>("all");
  const [quizSort, setQuizSort] = useState<QuizSort>("newest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let active = true;
    let requestId = 0;
    let currentUserId: string | null | undefined = undefined;
    const supabase = createClient();

    function handleAccountChange(userId: string | null) {
      if (!active || currentUserId === userId) return;

      currentUserId = userId;
      const thisRequest = ++requestId;

      // Never show one account's results while another account loads.
      setResults(null);
      setDataSource("local");
      setQuizFilter("all");
      setQuizSort("newest");
      setPage(1);

      if (!userId) {
        setResults(loadResults());
        return;
      }

      // Defer Supabase requests until outside the auth callback.
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

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION" || event === "SIGNED_IN" || event === "SIGNED_OUT") {
        handleAccountChange(session?.user?.id ?? null);
      }
    });

    return () => {
      active = false;
      requestId++;
      subscription.unsubscribe();
    };
  }, []);

  const stats = useMemo(() => {
    const completedResults = results ?? [];
    const answered = completedResults.reduce((sum, r) => sum + r.total, 0);
    const correct = completedResults.reduce((sum, r) => sum + r.correct, 0);
    const byTopic = new Map<string, { correct: number; total: number }>();

    for (const result of completedResults) {
      for (const [topicId, breakdown] of Object.entries(result.topicBreakdown)) {
        const bucket = byTopic.get(topicId) ?? { correct: 0, total: 0 };
        bucket.correct += breakdown.correct;
        bucket.total += breakdown.total;
        byTopic.set(topicId, bucket);
      }
    }

    const topicRows = topics
      .filter((topic) => byTopic.has(topic.id))
      .map((topic) => ({
        topicId: topic.id,
        ...(byTopic.get(topic.id) as { correct: number; total: number }),
      }))
      .sort((a, b) => b.total - a.total);

    return {
      answered,
      correct,
      quizzes: completedResults.length,
      topicsPractised: byTopic.size,
      topicRows,
    };
  }, [results]);

  const loading = results === null;
  const hasData = stats.quizzes > 0;
  const avgAccuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;

  const filteredResults = useMemo(() => {
    const filtered = (results ?? []).filter((result) => quizFilter === "all" || result.mode === quizFilter);
    return [...filtered].sort((a, b) => {
      if (quizSort === "highest" || quizSort === "lowest") {
        const difference = scoreOf(a) - scoreOf(b);
        if (difference !== 0) return quizSort === "highest" ? -difference : difference;
      }
      const dateDifference = new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
      return quizSort === "oldest" ? -dateDifference : dateDifference;
    });
  }, [results, quizFilter, quizSort]);

  const totalPages = Math.max(1, Math.ceil(filteredResults.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageResults = filteredResults.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const firstShown = filteredResults.length > 0 ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const lastShown = Math.min(currentPage * PAGE_SIZE, filteredResults.length);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Your practice dashboard</h1>
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
          <Pill tone="brand">Loading practice history...</Pill>
        ) : dataSource === "cloud-error" ? (
          <Pill tone="warning">Unable to load account history</Pill>
        ) : dataSource === "cloud" ? (
          <Pill tone="brand">Synced account history — Supabase</Pill>
        ) : (
          <Pill tone="brand">Guest progress — stored on this device</Pill>
        )}
      </div>

      {/* Statistics: not affected by quiz-history filter */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Quizzes completed" value={String(stats.quizzes)} />
        <StatCard label="Questions answered" value={String(stats.answered)} />
        <StatCard label="Overall accuracy" value={`${avgAccuracy}%`} hint="Correct ÷ answered" />
        <StatCard label="Topics practised" value={`${stats.topicsPractised} / ${topics.length}`} />
      </div>

      {/* Topic accuracy: not affected by quiz-history filter */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">Accuracy by topic</h2>
        {stats.topicRows.length > 0 ? (
          <div className="mt-4 space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
            {stats.topicRows.map((row) => (
              <div key={row.topicId}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-foreground">{topicName(row.topicId)}</span>
                  <span className="text-muted-foreground">
                    {row.correct}/{row.total} · {row.total > 0 ? Math.round((row.correct / row.total) * 100) : 0}%
                  </span>
                </div>
                <ProgressBar
                  className="mt-2"
                  value={row.correct}
                  max={row.total}
                  tone={row.total > 0 && row.correct / row.total >= 0.7 ? "success" : row.total > 0 && row.correct / row.total >= 0.4 ? "brand" : "danger"}
                  label={`Accuracy for ${topicName(row.topicId)}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <EmptyState
              title={loading ? "Loading topic accuracy" : "No topic data yet"}
              description={loading ? "Checking your saved quiz results." : "Complete your first quiz to see your accuracy by topic."}
            >
              {!loading && <Link to="/quiz/setup" className={buttonPrimary}>Start practising</Link>}
            </EmptyState>
          </div>
        )}
      </section>

      {/* Quiz history: 10 per page, filtered and sorted client-side */}
      <section className="mt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-bold text-foreground">Quiz history</h2>
          {!loading && hasData && (
            <p className="text-sm text-muted-foreground">
              Showing {firstShown}–{lastShown} of {filteredResults.length} results
            </p>
          )}
        </div>

        {!loading && hasData && (
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block text-sm font-medium text-foreground">
              Quiz type
              <select
                aria-label="Filter quizzes by type"
                value={quizFilter}
                onChange={(event) => {
                  setQuizFilter(event.target.value as QuizFilter);
                  setPage(1);
                }}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                <option value="all">All quizzes</option>
                <option value="practice">Practice</option>
                <option value="assessment">Assessment</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-foreground">
              Sort by
              <select
                aria-label="Sort quiz history"
                value={quizSort}
                onChange={(event) => {
                  setQuizSort(event.target.value as QuizSort);
                  setPage(1);
                }}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="highest">Highest score</option>
                <option value="lowest">Lowest score</option>
              </select>
            </label>
          </div>
        )}

        {pageResults.length > 0 ? (
          <>
            <ul className="mt-4 divide-y divide-border rounded-2xl border bg-card shadow-sm">
              {pageResults.map((result) => {
                const pct = Math.round(scoreOf(result));
                const mistakes = result.items.filter((item) => !item.correct && item.chosenOptionId !== null).length;
                const topicSet = new Set(result.items.map((item) => questionById(item.questionId)?.topicId).filter(Boolean));
                return (
                  <li key={result.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {formatMode(result.mode)} · {result.total} questions
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {formatDate(result.completedAt)} · {topicSet.size} topic{topicSet.size === 1 ? "" : "s"} ·{" "}
                        {mistakes} mistake{mistakes === 1 ? "" : "s"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Pill tone={pct >= 70 ? "success" : pct >= 40 ? "brand" : "danger"}>{pct}%</Pill>
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
            {totalPages > 1 && (
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm text-muted-foreground">Page {currentPage} of {totalPages}</span>
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4">
            <EmptyState
              title={loading ? "Loading quiz history" : hasData ? "No matching quizzes" : "No quizzes yet"}
              description={
                loading
                  ? "Checking your saved quiz results."
                  : hasData
                    ? "Try selecting another quiz type."
                    : dataSource === "cloud-error"
                      ? "Your account history could not be loaded. Please check your connection and try again."
                      : "Your completed quizzes will appear here with accuracy and links to review them."
              }
            >
              {!loading && !hasData && (
                <>
                  <Link to="/quiz/setup" className={buttonPrimary}>Start practising</Link>
                  <Link to="/topics" className={buttonSecondary}>Browse topics</Link>
                </>
              )}
            </EmptyState>
          </div>
        )}
      </section>
    </div>
  );
}
