/** Fact-card-derived questions, reviewed against Microsoft Learn on 2026-10-22. */
import type { DomainId, QuizQuestion } from "@/types/quiz";
import { topicById } from "../../syllabus";

export type DraftQuestion = Omit<QuizQuestion, "domainId" | "options"> & {
  options: Array<[id: string, text: string]>;
};

export function mapCandidates(drafts: DraftQuestion[]): QuizQuestion[] {
  return drafts.map((draft) => {
    const topic = topicById.get(draft.topicId);
    if (!topic) throw new Error(`Unknown topic ID: ${draft.topicId}`);
    return {
      ...draft,
      options: draft.options.map(([id, text]) => ({ id, text })),
      domainId: topic.domainId as DomainId,
    };
  });
}
