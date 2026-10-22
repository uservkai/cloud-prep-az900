import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import type { CountSelection, Difficulty, DomainId, PracticeMode, QuizConfig } from "@/types/quiz";
import { domains, topics, topicsForDomain } from "@/data/syllabus";
import { buildQuiz, countAvailableQuestions } from "@/services/quiz-service";
import { quizStore } from "@/store/quiz-session";
import { buttonPrimary, buttonSecondary, Pill } from "@/components/ui";

export const Route = createFileRoute("/quiz/setup")({
  validateSearch: (search: Record<string, unknown>): { topicId?: string } => ({
    topicId: typeof search.topicId === "string" ? search.topicId : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Quiz setup — CloudPrep AZ-900" },
      {
        name: "description",
        content: "Choose a topic, question count, difficulty and practice mode for your AZ-900 quiz.",
      },
      { property: "og:title", content: "Quiz setup — CloudPrep AZ-900" },
      {
        property: "og:description",
        content: "Configure your AZ-900 practice quiz: topic, count, difficulty and mode.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizSetup,
});

const DIFFICULTY_OPTIONS: Array<{ value: Difficulty | "mixed"; label: string }> = [
  { value: "mixed", label: "Mixed" },
  { value: "foundational", label: "Foundational" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const COUNT_OPTIONS: CountSelection[] = [5, 10, 20, "max"];

function QuizSetup() {
  const navigate = useNavigate();
  const preselectedTopicId = Route.useSearch().topicId;
  const preselected = topics.find((t) => t.id === preselectedTopicId);

  const [domainId, setDomainId] = useState<DomainId | "all">(preselected?.domainId ?? "all");
  const [topicId, setTopicId] = useState<string | "all">(preselected?.id ?? "all");
  const [difficulty, setDifficulty] = useState<Difficulty | "mixed">("mixed");
  const [mode, setMode] = useState<PracticeMode>("practice");
  const [requestedCount, setRequestedCount] = useState<CountSelection>(10);

  const domainTopics = useMemo(
    () => (domainId === "all" ? topics : topicsForDomain(domainId)),
    [domainId],
  );

  const config: QuizConfig = { domainId, topicId, difficulty, mode, requestedCount };
  const available = countAvailableQuestions(config);
  const effectiveCount =
    requestedCount === "max" ? available : Math.min(requestedCount, available);

  function updateDomain(next: DomainId | "all") {
    setDomainId(next);
    // Keep the topic only if it belongs to the newly chosen domain.
    if (next !== "all" && topicId !== "all" && !topicsForDomain(next).some((t) => t.id === topicId)) {
      setTopicId("all");
    }
  }

  function startQuiz() {
    const picked = buildQuiz(config);
    if (picked.length === 0) return;
    if (quizStore.start(config, picked)) {
      void navigate({ to: "/quiz/run" });
    }
  }

  const selectClass =
    "mt-1 w-full rounded-xl border border-input bg-card px-3 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Set up your quiz</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Only reviewed questions with a verified Microsoft Learn source enter active quizzes.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border bg-card p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="setup-domain" className="text-sm font-semibold text-foreground">
              Domain
            </label>
            <select
              id="setup-domain"
              className={selectClass}
              value={domainId}
              onChange={(e) => updateDomain(e.target.value as DomainId | "all")}
            >
              <option value="all">All domains</option>
              {domains.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="setup-topic" className="text-sm font-semibold text-foreground">
              Topic
            </label>
            <select
              id="setup-topic"
              className={selectClass}
              value={topicId}
              onChange={(e) => setTopicId(e.target.value)}
            >
              <option value="all">All topics in selection</option>
              {domainTopics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <span id="difficulty-label" className="text-sm font-semibold text-foreground">
            Difficulty
          </span>
          <div role="radiogroup" aria-labelledby="difficulty-label" className="mt-2 flex flex-wrap gap-2">
            {DIFFICULTY_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={difficulty === option.value}
                onClick={() => setDifficulty(option.value)}
                className={`rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                  difficulty === option.value
                    ? "border-brand bg-brand-soft text-primary"
                    : "border-input bg-card text-muted-foreground hover:border-brand/50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span id="mode-label" className="text-sm font-semibold text-foreground">
            Practice mode
          </span>
          <div role="radiogroup" aria-labelledby="mode-label" className="mt-2 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              role="radio"
              aria-checked={mode === "practice"}
              onClick={() => setMode("practice")}
              className={`rounded-xl border p-4 text-left transition-colors ${
                mode === "practice" ? "border-brand bg-brand-soft" : "border-input bg-card hover:border-brand/50"
              }`}
            >
              <span className="block text-sm font-bold text-foreground">Practice</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Instant feedback and explanations after each answer.
              </span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={mode === "assessment"}
              onClick={() => setMode("assessment")}
              className={`rounded-xl border p-4 text-left transition-colors ${
                mode === "assessment" ? "border-brand bg-brand-soft" : "border-input bg-card hover:border-brand/50"
              }`}
            >
              <span className="block text-sm font-bold text-foreground">Assessment</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Answers stay hidden until you finish and see your score.
              </span>
            </button>
          </div>
        </div>

        <div>
          <span id="count-label" className="text-sm font-semibold text-foreground">
            Question count
          </span>
          <div role="radiogroup" aria-labelledby="count-label" className="mt-2 flex flex-wrap gap-2">
            {COUNT_OPTIONS.map((option) => {
              const label = option === "max" ? `Max (${available})` : String(option);
              return (
                <button
                  key={String(option)}
                  type="button"
                  role="radio"
                  aria-checked={requestedCount === option}
                  onClick={() => setRequestedCount(option)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                    requestedCount === option
                      ? "border-brand bg-brand-soft text-primary"
                      : "border-input bg-card text-muted-foreground hover:border-brand/50"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
          {available > 0 ? (
            <>
              <strong className="font-semibold text-foreground">{available} reviewed question{available === 1 ? "" : "s"}</strong>{" "}
              match this selection. The quiz will include {effectiveCount} question{effectiveCount === 1 ? "" : "s"}, each appearing only once.
            </>
          ) : (
            <>No reviewed questions match this selection yet. Try widening the domain, topic or difficulty.</>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={startQuiz} disabled={available === 0} className={buttonPrimary}>
            <Play className="h-4 w-4" aria-hidden />
            Start quiz
          </button>
          <Pill tone="brand">{mode === "practice" ? "Explanations after every answer" : "Feedback at the end"}</Pill>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button type="button" onClick={() => void navigate({ to: "/topics" })} className={`${buttonSecondary} border-transparent`}>
          Browse the topic catalogue
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
