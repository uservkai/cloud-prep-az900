import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { QuizResult } from "@/types/quiz";
import { loadResults } from "@/store/results-store";
import { topics, topicName } from "@/data/syllabus";
import { questionById } from "@/services/quiz-service";
import { AccuracyRing, buttonPrimary, buttonSecondary, EmptyState, Pill, ProgressBar, StatCard } from "@/components/ui";

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

/** Clearly-labelled illustrative data shown until the learner completes a quiz. */
const SAMPLE = {
  quizzes: 8,
  answered: 74,
  accuracy: 71,
  topicAccuracy: [
    { topicId: "d1-cloud-computing", pct: 86 },
    { topicId: "d1-cloud-benefits", pct: 74 },
    { topicId: "d2-core-architecture", pct: 69 },
    { topicId: "d2-compute-networking", pct: 58 },
    { topicId: "d3-cost-management", pct: 77 },
  ],
};

function Dashboard() {
  const [results, setResults] = useState<QuizResult[] | null>(null);

  useEffect(() => {
    setResults(loadResults());
  }, []);

  const stats = useMemo(() => {
    if (!results) return null;
    const answered = results.reduce((sum, r) => sum + r.total, 0);
    const correct = results.reduce((sum, r) => sum + r.correct, 0);
    const byTopic = new Map<string, { correct: number; total: number }>();
    for (const result of results) {
      for (const [topicId, b] of Object.entries(result.topicBreakdown)) {
        const bucket = byTopic.get(topicId) ?? { correct: 0, total: 0 };
        bucket.correct += b.correct;
        bucket.total += b.total;
        byTopic.set(topicId, bucket);
      }
    }
    const topicsPractised = byTopic.size;
    const topicRows = topics
      .filter((t) => byTopic.has(t.id))
      .map((t) => ({ topicId: t.id, ...(byTopic.get(t.id) as { correct: number; total: number }) }))
      .sort((a, b) => b.total - a.total);
    return { answered, correct, quizzes: results.length, topicsPractised, topicRows };
  }, [results]);

  const hasData = !!stats && stats.quizzes > 0;
  const avgAccuracy = stats && stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;
  const recent = results?.slice(0, 5) ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Your practice dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {hasData
              ? "Calculated from quizzes you completed on this device."
              : "Here's what your progress will look like as you practise."}
          </p>
        </div>
        <Link to="/quiz/setup" className={buttonPrimary}>
          Start a quiz
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-4">
        <Pill tone={hasData ? "brand" : "warning"}>
          {hasData
            ? "Stored locally on this device — no account persistence yet"
            : "Illustrative sample data — not real results"}
        </Pill>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hasData ? (
          <>
            <StatCard label="Quizzes completed" value={String(stats.quizzes)} />
            <StatCard label="Questions answered" value={String(stats.answered)} />
            <StatCard label="Overall accuracy" value={`${avgAccuracy}%`} hint="Correct ÷ answered" />
            <StatCard label="Topics practised" value={`${stats.topicsPractised} / ${topics.length}`} />
          </>
        ) : (
          <>
            <StatCard illustrative label="Quizzes completed" value={String(SAMPLE.quizzes)} />
            <StatCard illustrative label="Questions answered" value={String(SAMPLE.answered)} />
            <StatCard illustrative label="Overall accuracy" value={`${SAMPLE.accuracy}%`} hint="Correct ÷ answered" />
            <StatCard illustrative label="Topics practised" value="5 / 12" />
          </>
        )}
      </div>

      {/* Topic accuracy */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">Accuracy by topic</h2>
        {hasData ? (
          stats.topicRows.length > 0 ? (
            <div className="mt-4 space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
              {stats.topicRows.map((row) => (
                <div key={row.topicId}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-foreground">{topicName(row.topicId)}</span>
                    <span className="text-muted-foreground">
                      {row.correct}/{row.total} · {Math.round((row.correct / row.total) * 100)}%
                    </span>
                  </div>
                  <ProgressBar
                    className="mt-2"
                    value={row.correct}
                    max={row.total}
                    tone={row.correct / row.total >= 0.7 ? "success" : row.correct / row.total >= 0.4 ? "brand" : "danger"}
                    label={`Accuracy for ${topicName(row.topicId)}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4">
              <EmptyState
                title="No topic data yet"
                description="Complete your first quiz and this section will fill with your accuracy per official topic."
              >
                <Link to="/quiz/setup" className={buttonPrimary}>
                  Start practising
                </Link>
              </EmptyState>
            </div>
          )
        ) : (
          <div className="mt-4 space-y-4 rounded-2xl border border-dashed bg-card/60 p-6 shadow-sm">
            {SAMPLE.topicAccuracy.map((row) => (
              <div key={row.topicId}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-muted-foreground">{topicName(row.topicId)}</span>
                  <span className="text-muted-foreground">{row.pct}%</span>
                </div>
                <ProgressBar className="mt-2 opacity-60" value={row.pct} max={100} label={`Sample accuracy for ${topicName(row.topicId)}`} />
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              Illustrative example only. These bars show your real per-topic accuracy once you finish a quiz.
            </p>
          </div>
        )}
      </section>

      {/* Recent activity */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-bold text-foreground">Recent activity</h2>
        {hasData ? (
          <ul className="mt-4 divide-y divide-border rounded-2xl border bg-card shadow-sm">
            {recent.map((result) => {
              const pct = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;
              const mistakes = result.items.filter((i) => !i.correct && i.chosenOptionId !== null).length;
              const topicSet = new Set(result.items.map((i) => questionById(i.questionId)?.topicId).filter(Boolean));
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
                    <Link to="/quiz/results" search={{ result: result.id }} className="text-sm font-semibold text-primary hover:underline">
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
              title="No quizzes yet"
              description="Your five most recent quizzes will appear here with accuracy and links to review them."
            >
              <Link to="/quiz/setup" className={buttonPrimary}>
                Start practising
              </Link>
              <Link to="/topics" className={buttonSecondary}>
                Browse topics
              </Link>
            </EmptyState>
          </div>
        )}
      </section>
    </div>
  );
}
