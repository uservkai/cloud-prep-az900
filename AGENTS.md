<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# CloudPrep AZ-900 — architecture rules

- Question data lives in `src/data/` (syllabus + seed questions) and is strongly typed in `src/types/quiz.ts`; UI never hardcodes question content. Why: a database replaces the seed files without touching components.
- Only `reviewStatus === "reviewed"` questions with a verified Microsoft Learn `sourceUrl` may enter active quizzes — enforced in `src/services/quiz-service.ts`. Why: the brief forbids unverified or invented sources.
- Quiz flow state lives in module stores (`src/store/quiz-session.ts`, `src/store/results-store.ts`) persisted to localStorage; the active session stores only question ids under a versioned key and is validated against the bank on restore, and `/quiz/run` must not redirect before hydration. Why: refresh must resume safely; phase 1 is frontend-only.
- All colors/fonts go through semantic tokens in `src/styles.css`; no hardcoded color utilities in components. Why: keeps the navy/blue design system consistent and theme-safe.
