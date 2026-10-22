import type { SyllabusTopic } from "@/types/quiz";
import type { TopicCoverage } from "@/services/quiz-service";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Lock } from "lucide-react";
import { Pill, ProgressBar } from "@/components/ui";

export function TopicCard({
  topic,
  coverage,
  domainWeight,
}: {
  topic: SyllabusTopic;
  coverage: TopicCoverage;
  domainWeight: string;
}) {
  const hasQuestions = coverage.reviewed > 0;

  return (
    <article className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-display text-base font-semibold text-foreground">{topic.name}</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            {coverage.reviewed} reviewed question{coverage.reviewed === 1 ? "" : "s"}
            {coverage.pending > 0 ? ` · ${coverage.pending} pending verification` : ""}
          </p>
        </div>
        <Pill tone="brand">{domainWeight} domain</Pill>
      </div>

      <div className="mt-4">
        <ProgressBar
          value={coverage.reviewed}
          max={Math.max(coverage.reviewed + coverage.pending, 1)}
          tone={hasQuestions ? "success" : "warning"}
          label={`Question coverage for ${topic.name}`}
        />
      </div>

      <details className="group mt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/60">
          Skill objectives from the official outline
          <ChevronDown
            className="h-4 w-4 transition-transform group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <ul className="mt-2 space-y-1.5 px-2 pb-1">
          {topic.skills.map((skill) => (
            <li key={skill} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
              {skill}
            </li>
          ))}
        </ul>
      </details>

      <div className="mt-4">
        {hasQuestions ? (
          <Link
            to="/quiz/setup"
            search={{ topicId: topic.id }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Practise this topic
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-xl border border-dashed px-4 py-2 text-sm font-medium text-muted-foreground">
            <Lock className="h-4 w-4" aria-hidden />
            Questions pending review
          </span>
        )}
      </div>
    </article>
  );
}
