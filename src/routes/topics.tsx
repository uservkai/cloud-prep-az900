import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { domains, topicsForDomain, STUDY_GUIDE_URL } from "@/data/syllabus";
import { topicCoverage } from "@/services/quiz-service";
import { TopicCard } from "@/components/topic-card";

export const Route = createFileRoute("/topics")({
  head: () => ({
    meta: [
      { title: "Topic catalogue — CloudPrep AZ-900" },
      {
        name: "description",
        content:
          "All three official AZ-900 domains with expandable subtopics, question coverage indicators and one-click practice.",
      },
      { property: "og:title", content: "Topic catalogue — CloudPrep AZ-900" },
      {
        property: "og:description",
        content: "Browse the official AZ-900 syllabus and start practising any topic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Topics,
});

function Topics() {
  const coverage = topicCoverage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Topic catalogue</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        The official AZ-900 domains and topics — skills measured as of{" "}
        <a
          href={STUDY_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 font-semibold text-primary hover:underline"
        >
          July 20, 2026
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
        . Expand a topic to see its official skill objectives.
      </p>

      <div className="mt-8 space-y-10">
        {domains.map((domain) => {
          const domainTopics = topicsForDomain(domain.id);
          const reviewed = domainTopics.reduce((sum, t) => sum + (coverage.get(t.id)?.reviewed ?? 0), 0);
          const pending = domainTopics.reduce((sum, t) => sum + (coverage.get(t.id)?.pending ?? 0), 0);

          return (
            <section key={domain.id} aria-labelledby={`domain-${domain.id}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 id={`domain-${domain.id}`} className="font-display text-xl font-bold text-foreground">
                    {domain.name}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{domain.summary}</p>
                </div>
                <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm">
                  <p className="font-display text-xl font-bold text-foreground">{domain.weight}</p>
                  <p className="text-xs text-muted-foreground">
                    {reviewed} reviewed{pending > 0 ? ` · ${pending} pending` : ""}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {domainTopics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    coverage={coverage.get(topic.id) ?? { reviewed: 0, pending: 0 }}
                    domainWeight={domain.weight}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed bg-card/60 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Question coverage grows as the bank is reviewed and expanded. Questions flagged
          "pending verification" are withheld from quizzes until their source is confirmed.
        </p>
        <Link
          to="/quiz/setup"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start practising
        </Link>
      </div>
    </div>
  );
}
