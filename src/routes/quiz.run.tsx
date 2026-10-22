import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Flag } from "lucide-react";
import { topicName } from "@/data/syllabus";
import { isChoiceCorrect } from "@/services/quiz-service";
import { quizStore, useQuizSession } from "@/store/quiz-session";
import { FeedbackPanel, OptionList } from "@/components/question-card";
import { buttonPrimary, buttonSecondary, Pill, ProgressBar } from "@/components/ui";

export const Route = createFileRoute("/quiz/run")({
  head: () => ({
    meta: [
      { title: "Quiz — CloudPrep AZ-900" },
      {
        name: "description",
        content: "Answer AZ-900 practice questions one at a time with instant explanations.",
      },
      { property: "og:title", content: "Quiz — CloudPrep AZ-900" },
      {
        property: "og:description",
        content: "AZ-900 practice quiz in progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizRun,
});

function QuizRun() {
  const navigate = useNavigate();
  const session = useQuizSession();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!session) {
      setRedirecting(true);
      void navigate({ to: "/quiz/setup" });
    }
  }, [session, navigate]);

  if (!session || session.questions.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-sm text-muted-foreground">
          {redirecting ? "Taking you to quiz setup…" : "No active quiz."}
        </p>
        <Link to="/quiz/setup" className={`${buttonPrimary} mt-4`}>
          Go to quiz setup
        </Link>
      </div>
    );
  }

  const question = session.questions[session.index];
  const isPractice = session.config.mode === "practice";
  const chosen = session.choices[question.id] ?? null;
  const submittedChoice = session.submitted[question.id] ?? null;
  const showFeedback = isPractice && submittedChoice !== null;
  const atLast = session.index === session.questions.length - 1;
  const answeredCount = Object.keys(session.submitted).length;
  const unanswered = session.questions.length - answeredCount;

  function handlePrimary() {
    if (isPractice && !showFeedback) {
      quizStore.submitCurrent();
      return;
    }
    if (atLast) {
      finishQuiz();
    } else {
      quizStore.next();
    }
  }

  function finishQuiz() {
    const result = quizStore.finish();
    if (result) {
      void navigate({ to: "/quiz/results", search: { result: result.id } });
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Progress header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-sm font-bold text-foreground">
          Question {session.index + 1} of {session.questions.length}
        </p>
        <div className="flex items-center gap-2">
          <Pill tone="neutral">{topicName(question.topicId)}</Pill>
          <Pill tone={isPractice ? "brand" : "warning"}>
            {isPractice ? "Practice" : "Assessment"}
          </Pill>
        </div>
      </div>
      <ProgressBar
        className="mt-3"
        value={session.index + 1}
        max={session.questions.length}
        label={`Question ${session.index + 1} of ${session.questions.length}`}
      />

      {/* Question navigator dots */}
      <nav aria-label="Question navigation" className="mt-4 flex flex-wrap gap-1.5">
        {session.questions.map((q, i) => {
          const submitted = session.submitted[q.id];
          const chosenForDot = submitted ?? session.choices[q.id];
          let state = "idle";
          if (submitted) {
            state = isChoiceCorrect(q, submitted) ? "correct" : "incorrect";
          } else if (chosenForDot) {
            state = "selected";
          }
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => quizStore.goTo(i)}
              aria-label={`Go to question ${i + 1}${submitted ? " (answered)" : ""}`}
              aria-current={i === session.index ? "true" : undefined}
              className={`h-7 w-7 rounded-lg text-xs font-bold transition-colors ${
                i === session.index
                  ? "bg-primary text-primary-foreground"
                  : state === "correct"
                    ? "bg-success-soft text-success"
                    : state === "incorrect"
                      ? "bg-danger-soft text-danger"
                      : state === "selected"
                        ? "bg-brand-soft text-primary"
                        : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </nav>

      {/* Question card */}
      <article className="mt-6 rounded-2xl border bg-card p-6 shadow-sm">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {question.difficulty} · {question.skillObjective}
          </p>
          <h2 className="mt-2 font-display text-lg font-bold leading-relaxed text-foreground sm:text-xl">
            {question.stem}
          </h2>
        </header>

        <OptionList
          question={question}
          selected={chosen}
          disabled={showFeedback || (!isPractice && submittedChoice !== null)}
          onSelect={(optionId) => quizStore.choose(question.id, optionId)}
        />

        {showFeedback ? (
          <FeedbackPanel question={question} chosenOptionId={submittedChoice} />
        ) : null}

        {!isPractice && unanswered > 0 && atLast ? (
          <p className="mt-4 text-sm text-danger">
            {unanswered} question{unanswered === 1 ? "" : "s"} not answered — unanswered questions count as incorrect.
          </p>
        ) : null}

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => quizStore.prev()}
            disabled={session.index === 0}
            className={`${buttonSecondary} px-4`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Previous
          </button>

          <div className="flex flex-wrap items-center gap-3">
            {isPractice ? (
              <button
                type="button"
                onClick={handlePrimary}
                disabled={!showFeedback && chosen === null}
                className={buttonPrimary}
              >
                {showFeedback ? (
                  atLast ? (
                    <>
                      Finish & see results
                      <Flag className="h-4 w-4" aria-hidden />
                    </>
                  ) : (
                    <>
                      Next question
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </>
                  )
                ) : (
                  "Submit answer"
                )}
              </button>
            ) : (
              <>
                {!atLast ? (
                  <button type="button" onClick={() => quizStore.next()} className={buttonPrimary}>
                    Next
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                ) : null}
                <button type="button" onClick={finishQuiz} className={buttonSecondary}>
                  <Flag className="h-4 w-4" aria-hidden />
                  Finish & grade
                </button>
              </>
            )}
          </div>
        </footer>
      </article>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {isPractice
          ? "Your answer is locked once submitted — explanations appear immediately."
          : "You can change your answer before finishing. Feedback is revealed at the end."}
      </p>
    </div>
  );
}
