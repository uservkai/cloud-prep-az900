/**
 * Strongly typed question schema for CloudPrep AZ-900.
 * Data (syllabus + questions) is kept separate from UI so a database can
 * replace the seed files without touching components.
 */

export type DomainId =
  | "cloud-concepts"
  | "architecture-services"
  | "management-governance";

export type Difficulty = "foundational" | "intermediate" | "advanced";

export type ReviewStatus = "reviewed" | "needs-verification";

export type PracticeMode = "practice" | "assessment";

export interface SyllabusDomain {
  id: DomainId;
  name: string;
  /** Official weight as published in the study guide, e.g. "25–30%". */
  weight: string;
  summary: string;
  guideUrl: string;
}

export interface SyllabusTopic {
  id: string;
  domainId: DomainId;
  name: string;
  /** Skill objectives copied verbatim from the official study guide outline. */
  skills: string[];
  studyUrl: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  domainId: DomainId;
  topicId: string;
  /** Skill objective from the official outline this question measures. */
  skillObjective: string;
  difficulty: Difficulty;
  stem: string;
  options: QuizOption[];
  correctOptionId: string;
  correctExplanation: string;
  /** Why each option is right or wrong, keyed by option id. */
  optionExplanations: Record<string, string>;
  /** Confirmed official Microsoft Learn link, or null when pending verification. */
  sourceUrl: string | null;
  sourceLabel: string;
  reviewStatus: ReviewStatus;
}

export type CountSelection = number | "max";

export interface QuizConfig {
  domainId: DomainId | "all";
  topicId: string | "all";
  difficulty: Difficulty | "mixed";
  mode: PracticeMode;
  requestedCount: CountSelection;
}

export interface QuizSession {
  id: string;
  startedAt: string;
  config: QuizConfig;
  questions: QuizQuestion[];
  /** Current question position (0-based). */
  index: number;
  /** Selected (not yet submitted) option id per question id. */
  choices: Record<string, string>;
  /** Submitted, graded option id per question id. */
  submitted: Record<string, string>;
  /** Practice mode: feedback panel is visible for the current question. */
  showFeedback: boolean;
}

export interface QuizResultItem {
  questionId: string;
  chosenOptionId: string | null;
  correct: boolean;
}

export interface TopicBreakdown {
  correct: number;
  total: number;
}

export interface QuizResult {
  id: string;
  completedAt: string;
  config: QuizConfig;
  mode: PracticeMode;
  total: number;
  correct: number;
  incorrect: number;
  topicBreakdown: Record<string, TopicBreakdown>;
  items: QuizResultItem[];
}
