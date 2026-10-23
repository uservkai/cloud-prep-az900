/* eslint-disable prettier/prettier */

import { ExternalLink } from "lucide-react";
import { STUDY_GUIDE_URL } from "@/data/syllabus";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-display text-sm font-bold text-foreground">
          CloudPrep AZ-900
        </p>

        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Unofficial AZ-900 preparation tool. Not affiliated with or endorsed
          by Microsoft. All questions are original and none are reproduced
          from Microsoft certification exams or Microsoft practice
          assessments.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={STUDY_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Official AZ-900 study guide (skills measured)
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>

          <span className="text-muted-foreground">
            Syllabus outline sourced from Microsoft Learn · July 20, 2026
            version
          </span>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Built for the 1MillionDevs Vibe Coding Hackathon. No account is
          required to practise. Guest quiz results are stored locally in your
          browser, while signed-in learners can save and synchronize their
          results to their CloudPrep account.
        </p>
      </div>
    </footer>
  );
}
