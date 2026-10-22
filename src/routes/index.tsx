import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenCheck, ClipboardList, LineChart, ArrowRight, ShieldCheck } from "lucide-react";
import heroCloud from "@/assets/hero-cloud.jpg";
import { domains } from "@/data/syllabus";
import { reviewedQuestions } from "@/data/questions";
import { buttonHero, buttonSecondary, Pill } from "@/components/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CloudPrep AZ-900 — Understand Azure, don't just memorise answers",
      },
      {
        name: "description",
        content:
          "Assessment-first AZ-900 practice: original questions across all three official domains, instant explanations for every option, mistake review and progress feedback.",
      },
      { property: "og:title", content: "CloudPrep AZ-900 — Understand Azure, don't just memorise answers" },
      {
        property: "og:description",
        content:
          "Original AZ-900 practice questions with instant, option-by-option explanations. Unofficial Azure Fundamentals preparation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Practise with purpose",
      body: "Pick an official domain or topic, question count, difficulty and a mode — then answer one question at a time.",
    },
    {
      icon: BookOpenCheck,
      title: "Learn from every answer",
      body: "Immediately after submitting, see why the right answer is right — and why each wrong option is wrong — with the official skill and source attached.",
    },
    {
      icon: LineChart,
      title: "Close your knowledge gaps",
      body: "Results break down accuracy by topic, wrong answers collect in a mistakes review, and every quiz is calculated from your real responses.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <Pill className="border-white/20 bg-white/10 text-white">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Unofficial AZ-900 prep · 1MillionDevs Vibe Coding Hackathon
            </Pill>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Understand Azure.
              <span className="block text-gradient-brand">Don't just memorise answers.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              CloudPrep is an assessment-first study companion for the Azure Fundamentals exam:
              original questions, an explanation for every single option, and targeted practice on
              exactly the concepts you miss.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quiz/setup" className={buttonHero}>
                Start practising
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/topics"
                className={`${buttonSecondary} border-white/25 bg-white/10 text-white hover:bg-white/20`}
              >
                View topics
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/60">
              Unofficial AZ-900 preparation tool. Not affiliated with or endorsed by Microsoft.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <img
              src={heroCloud}
              alt="Abstract illustration of a glowing cloud connected to a network of nodes"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Coverage strip — real counts from the question bank */}
      <section className="mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-1 gap-4 rounded-2xl border bg-card p-6 shadow-lg sm:grid-cols-3">
          <div className="text-center">
            <dt className="text-sm font-medium text-muted-foreground">Official syllabus domains</dt>
            <dd className="mt-1 font-display text-3xl font-bold text-foreground">{domains.length}</dd>
          </div>
          <div className="text-center">
            <dt className="text-sm font-medium text-muted-foreground">Official topics covered</dt>
            <dd className="mt-1 font-display text-3xl font-bold text-foreground">12</dd>
          </div>
          <div className="text-center">
            <dt className="text-sm font-medium text-muted-foreground">Reviewed practice questions</dt>
            <dd className="mt-1 font-display text-3xl font-bold text-foreground">
              {reviewedQuestions.length}
            </dd>
          </div>
        </dl>
      </section>

      {/* Domains */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Three official domains, exactly as measured
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Topics follow the official AZ-900 study guide, skills measured as of July 20, 2026. Skill
          names are quoted verbatim from the outline — never invented.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {domains.map((domain, i) => (
            <Link
              key={domain.id}
              to="/topics"
              className="group rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Pill tone="brand">{domain.weight} of the exam</Pill>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {i + 1}. {domain.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{domain.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                Explore topics
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Built around understanding, not answer keys
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border bg-background p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <step.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
