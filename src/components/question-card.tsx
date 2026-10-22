import { Check, CircleAlert, ExternalLink, X } from "lucide-react";
import type { QuizQuestion } from "@/types/quiz";
import { topicName } from "@/data/syllabus";
import { Pill } from "@/components/ui";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function OptionList({
  question,
  selected,
  disabled,
  onSelect,
}: {
  question: QuizQuestion;
  selected: string | null;
  disabled: boolean;
  onSelect: (optionId: string) => void;
}) {
  return (
    <fieldset className="mt-5">
      <legend className="sr-only">Answer options</legend>
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selected === option.id;
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border bg-card p-4 transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand-soft has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring ${
                disabled ? "cursor-not-allowed opacity-70" : "hover:border-brand/50"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={isSelected}
                disabled={disabled}
                onChange={() => onSelect(option.id)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold ${
                  isSelected ? "border-brand bg-brand text-white" : "border-border bg-muted text-foreground"
                }`}
              >
                {LETTERS[i] ?? "?"}
              </span>
              <span className="text-sm leading-relaxed text-foreground">{option.text}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function FeedbackPanel({
  question,
  chosenOptionId,
}: {
  question: QuizQuestion;
  chosenOptionId: string | null;
}) {
  const isCorrect = chosenOptionId !== null && chosenOptionId === question.correctOptionId;

  return (
    <section
      aria-live="polite"
      className={`mt-6 rounded-2xl border p-5 ${
        isCorrect ? "border-success/40 bg-success-soft" : "border-danger/40 bg-danger-soft"
      }`}
    >
      <div className="flex items-center gap-2">
        {isCorrect ? (
          <>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success text-white">
              <Check className="h-4 w-4" aria-hidden />
            </span>
            <p className="font-display text-base font-bold text-foreground">Correct</p>
          </>
        ) : (
          <>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-danger text-white">
              <X className="h-4 w-4" aria-hidden />
            </span>
            <p className="font-display text-base font-bold text-foreground">Not quite</p>
          </>
        )}
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <h4 className="text-sm font-bold text-foreground">Why the right answer is right</h4>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {question.correctExplanation}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-foreground">Every option, explained</h4>
          <ul className="mt-2 space-y-2">
            {question.options.map((option, i) => {
              const isThisCorrect = option.id === question.correctOptionId;
              const isChosen = option.id === chosenOptionId;
              return (
                <li
                  key={option.id}
                  className={`rounded-xl border bg-card p-3 ${
                    isThisCorrect ? "border-success/50" : isChosen ? "border-danger/50" : "border-border"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isThisCorrect ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    ) : isChosen ? (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden />
                    ) : (
                      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {LETTERS[i] ?? "?"}. {option.text}
                        {isChosen ? <span className="ml-2 font-normal text-muted-foreground">(your answer)</span> : null}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {question.optionExplanations[option.id]}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-border/60 pt-3 text-xs text-muted-foreground">
          <Pill tone="neutral">{topicName(question.topicId)}</Pill>
          <span>Skill: {question.skillObjective}</span>
          {question.sourceUrl ? (
            <a
              href={question.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              {question.sourceLabel}
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          ) : (
            <span className="italic">{question.sourceLabel}</span>
          )}
        </div>
      </div>
    </section>
  );
}
