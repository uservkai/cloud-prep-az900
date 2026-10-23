/**
 * CloudPrep AZ-900 — documentation-reviewed question expansion.
 * Original questions; Microsoft Learn references attached to each item.
 * Human subject-matter expert certification has NOT been performed.
 */
import type { DraftQuestion } from "./build-candidates";
import { mapCandidates } from "./build-candidates";

const drafts: DraftQuestion[] = [
  {
    id: "ai26-x009-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A web service adds identical app instances behind its front end during a traffic spike. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Horizontal scaling"],
      ["b", "Fault tolerance"],
      ["c", "Disaster recovery"],
      ["d", "Vertical scaling"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Capacity grows by adding more instances or nodes rather than enlarging one machine.",
    optionExplanations: {
      a: "Correct. Capacity grows by adding more instances or nodes rather than enlarging one machine.",
      b: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Horizontal scaling.",
      c: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires Horizontal scaling.",
      d: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Horizontal scaling.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x009-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Capacity grows by adding more instances or nodes rather than enlarging one machine.",
    options: [
      ["a", "Disaster recovery"],
      ["b", "Fault tolerance"],
      ["c", "Vertical scaling"],
      ["d", "Horizontal scaling"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Capacity grows by adding more instances or nodes rather than enlarging one machine.",
    optionExplanations: {
      a: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires Horizontal scaling.",
      b: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Horizontal scaling.",
      c: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Horizontal scaling.",
      d: "Correct. Capacity grows by adding more instances or nodes rather than enlarging one machine.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x009-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A team handles a larger workload by increasing the number of running servers. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Horizontal scaling"],
      ["b", "Fault tolerance"],
      ["c", "Vertical scaling"],
      ["d", "Disaster recovery"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Capacity grows by adding more instances or nodes rather than enlarging one machine.",
    optionExplanations: {
      a: "Correct. Capacity grows by adding more instances or nodes rather than enlarging one machine.",
      b: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Horizontal scaling.",
      c: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Horizontal scaling.",
      d: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires Horizontal scaling.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x009-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Horizontal scaling'?",
    options: [
      [
        "a",
        "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
      ],
      [
        "b",
        "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      ],
      ["c", "Capacity grows by adding more instances or nodes rather than enlarging one machine."],
      [
        "d",
        "A plan and technical capability restore service after a major disruption or site loss.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Capacity grows by adding more instances or nodes rather than enlarging one machine.",
    optionExplanations: {
      a: "Incorrect. That statement describes Vertical scaling, not Horizontal scaling.",
      b: "Incorrect. That statement describes Elasticity, not Horizontal scaling.",
      c: "Correct. This is the definition of Horizontal scaling.",
      d: "Incorrect. That statement describes Disaster recovery, not Horizontal scaling.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x010-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A database VM gets additional memory and processor capacity rather than extra copies. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Vertical scaling"],
      ["b", "Performance predictability"],
      ["c", "Fault tolerance"],
      ["d", "High availability"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    optionExplanations: {
      a: "Correct. Capacity grows by increasing resources such as CPU or memory on an existing instance.",
      b: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Vertical scaling.",
      c: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Vertical scaling.",
      d: "Incorrect. High availability means: Architecture aims to keep an application accessible despite outages or component failures. The scenario/definition instead requires Vertical scaling.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x010-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    options: [
      ["a", "Fault tolerance"],
      ["b", "High availability"],
      ["c", "Performance predictability"],
      ["d", "Vertical scaling"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    optionExplanations: {
      a: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Vertical scaling.",
      b: "Incorrect. High availability means: Architecture aims to keep an application accessible despite outages or component failures. The scenario/definition instead requires Vertical scaling.",
      c: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Vertical scaling.",
      d: "Correct. Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x010-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A team upgrades one VM size to handle a more demanding workload. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "High availability"],
      ["b", "Performance predictability"],
      ["c", "Fault tolerance"],
      ["d", "Vertical scaling"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    optionExplanations: {
      a: "Incorrect. High availability means: Architecture aims to keep an application accessible despite outages or component failures. The scenario/definition instead requires Vertical scaling.",
      b: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Vertical scaling.",
      c: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Vertical scaling.",
      d: "Correct. Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x010-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Vertical scaling'?",
    options: [
      [
        "a",
        "Architecture aims to keep an application accessible despite outages or component failures.",
      ],
      [
        "b",
        "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
      ],
      [
        "c",
        "A system continues operating when an individual component fails through redundant design.",
      ],
      [
        "d",
        "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
      ],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
    optionExplanations: {
      a: "Incorrect. That statement describes High availability, not Vertical scaling.",
      b: "Correct. This is the definition of Vertical scaling.",
      c: "Incorrect. That statement describes Fault tolerance, not Vertical scaling.",
      d: "Incorrect. That statement describes Performance predictability, not Vertical scaling.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x011-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "An application uses redundant instances so users remain connected when one instance fails. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Disaster recovery"],
      ["b", "Elasticity"],
      ["c", "High availability"],
      ["d", "Horizontal scaling"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Architecture aims to keep an application accessible despite outages or component failures.",
    optionExplanations: {
      a: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires High availability.",
      b: "Incorrect. Elasticity means: Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size. The scenario/definition instead requires High availability.",
      c: "Correct. Architecture aims to keep an application accessible despite outages or component failures.",
      d: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires High availability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x011-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Architecture aims to keep an application accessible despite outages or component failures.",
    options: [
      ["a", "Disaster recovery"],
      ["b", "High availability"],
      ["c", "Horizontal scaling"],
      ["d", "Elasticity"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Architecture aims to keep an application accessible despite outages or component failures.",
    optionExplanations: {
      a: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires High availability.",
      b: "Correct. Architecture aims to keep an application accessible despite outages or component failures.",
      c: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires High availability.",
      d: "Incorrect. Elasticity means: Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size. The scenario/definition instead requires High availability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x011-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A retailer wants to reduce downtime by eliminating a single point of failure. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Disaster recovery"],
      ["b", "Elasticity"],
      ["c", "High availability"],
      ["d", "Horizontal scaling"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Architecture aims to keep an application accessible despite outages or component failures.",
    optionExplanations: {
      a: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires High availability.",
      b: "Incorrect. Elasticity means: Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size. The scenario/definition instead requires High availability.",
      c: "Correct. Architecture aims to keep an application accessible despite outages or component failures.",
      d: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires High availability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x011-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'High availability'?",
    options: [
      [
        "a",
        "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      ],
      ["b", "Capacity grows by adding more instances or nodes rather than enlarging one machine."],
      [
        "c",
        "Architecture aims to keep an application accessible despite outages or component failures.",
      ],
      [
        "d",
        "A plan and technical capability restore service after a major disruption or site loss.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Architecture aims to keep an application accessible despite outages or component failures.",
    optionExplanations: {
      a: "Incorrect. That statement describes Elasticity, not High availability.",
      b: "Incorrect. That statement describes Horizontal scaling, not High availability.",
      c: "Correct. This is the definition of High availability.",
      d: "Incorrect. That statement describes Disaster recovery, not High availability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x012-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A workload doubles capacity for a busy hour then removes the unused capacity. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Performance predictability"],
      ["b", "Vertical scaling"],
      ["c", "Elasticity"],
      ["d", "Fault tolerance"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
    optionExplanations: {
      a: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Elasticity.",
      b: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Elasticity.",
      c: "Correct. Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      d: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Elasticity.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x012-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
    options: [
      ["a", "Elasticity"],
      ["b", "Fault tolerance"],
      ["c", "Vertical scaling"],
      ["d", "Performance predictability"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
    optionExplanations: {
      a: "Correct. Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      b: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Elasticity.",
      c: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Elasticity.",
      d: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Elasticity.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x012-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "An online service varies cloud resources as request volume changes over the day. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Elasticity"],
      ["b", "Performance predictability"],
      ["c", "Fault tolerance"],
      ["d", "Vertical scaling"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
    optionExplanations: {
      a: "Correct. Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      b: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Elasticity.",
      c: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Elasticity.",
      d: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Elasticity.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x012-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Elasticity'?",
    options: [
      [
        "a",
        "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
      ],
      [
        "b",
        "A system continues operating when an individual component fails through redundant design.",
      ],
      [
        "c",
        "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
      ],
      [
        "d",
        "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
    optionExplanations: {
      a: "Incorrect. That statement describes Vertical scaling, not Elasticity.",
      b: "Incorrect. That statement describes Fault tolerance, not Elasticity.",
      c: "Incorrect. That statement describes Performance predictability, not Elasticity.",
      d: "Correct. This is the definition of Elasticity.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x013-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "A service keeps processing requests even after a compute node unexpectedly goes down. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Horizontal scaling"],
      ["b", "Vertical scaling"],
      ["c", "Disaster recovery"],
      ["d", "Fault tolerance"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "A system continues operating when an individual component fails through redundant design.",
    optionExplanations: {
      a: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires Fault tolerance.",
      b: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Fault tolerance.",
      c: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires Fault tolerance.",
      d: "Correct. A system continues operating when an individual component fails through redundant design.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x013-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? A system continues operating when an individual component fails through redundant design.",
    options: [
      ["a", "Disaster recovery"],
      ["b", "Fault tolerance"],
      ["c", "Horizontal scaling"],
      ["d", "Vertical scaling"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "A system continues operating when an individual component fails through redundant design.",
    optionExplanations: {
      a: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires Fault tolerance.",
      b: "Correct. A system continues operating when an individual component fails through redundant design.",
      c: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires Fault tolerance.",
      d: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Fault tolerance.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x013-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "A team designs its system to keep functioning during a hardware component failure. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Horizontal scaling"],
      ["b", "Fault tolerance"],
      ["c", "Vertical scaling"],
      ["d", "Disaster recovery"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "A system continues operating when an individual component fails through redundant design.",
    optionExplanations: {
      a: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires Fault tolerance.",
      b: "Correct. A system continues operating when an individual component fails through redundant design.",
      c: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Fault tolerance.",
      d: "Incorrect. Disaster recovery means: A plan and technical capability restore service after a major disruption or site loss. The scenario/definition instead requires Fault tolerance.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x013-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Fault tolerance'?",
    options: [
      ["a", "Capacity grows by adding more instances or nodes rather than enlarging one machine."],
      [
        "b",
        "Architecture aims to keep an application accessible despite outages or component failures.",
      ],
      [
        "c",
        "A plan and technical capability restore service after a major disruption or site loss.",
      ],
      [
        "d",
        "A system continues operating when an individual component fails through redundant design.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "A system continues operating when an individual component fails through redundant design.",
    optionExplanations: {
      a: "Incorrect. That statement describes Horizontal scaling, not Fault tolerance.",
      b: "Incorrect. That statement describes High availability, not Fault tolerance.",
      c: "Incorrect. That statement describes Disaster recovery, not Fault tolerance.",
      d: "Correct. This is the definition of Fault tolerance.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x014-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "A firm needs a process to recover its application following a regional disaster. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Vertical scaling"],
      ["b", "Performance predictability"],
      ["c", "Disaster recovery"],
      ["d", "Elasticity"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "A plan and technical capability restore service after a major disruption or site loss.",
    optionExplanations: {
      a: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Disaster recovery.",
      b: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Disaster recovery.",
      c: "Correct. A plan and technical capability restore service after a major disruption or site loss.",
      d: "Incorrect. Elasticity means: Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size. The scenario/definition instead requires Disaster recovery.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x014-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? A plan and technical capability restore service after a major disruption or site loss.",
    options: [
      ["a", "Elasticity"],
      ["b", "Vertical scaling"],
      ["c", "Performance predictability"],
      ["d", "Disaster recovery"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "A plan and technical capability restore service after a major disruption or site loss.",
    optionExplanations: {
      a: "Incorrect. Elasticity means: Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size. The scenario/definition instead requires Disaster recovery.",
      b: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Disaster recovery.",
      c: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Disaster recovery.",
      d: "Correct. A plan and technical capability restore service after a major disruption or site loss.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x014-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "A company documents restoration steps and recovery targets for a major outage. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Elasticity"],
      ["b", "Disaster recovery"],
      ["c", "Performance predictability"],
      ["d", "Vertical scaling"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "A plan and technical capability restore service after a major disruption or site loss.",
    optionExplanations: {
      a: "Incorrect. Elasticity means: Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size. The scenario/definition instead requires Disaster recovery.",
      b: "Correct. A plan and technical capability restore service after a major disruption or site loss.",
      c: "Incorrect. Performance predictability means: Cloud planning and monitoring help forecast workload performance requirements and outcomes. The scenario/definition instead requires Disaster recovery.",
      d: "Incorrect. Vertical scaling means: Capacity grows by increasing resources such as CPU or memory on an existing instance. The scenario/definition instead requires Disaster recovery.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x014-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Disaster recovery'?",
    options: [
      [
        "a",
        "A plan and technical capability restore service after a major disruption or site loss.",
      ],
      [
        "b",
        "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
      ],
      [
        "c",
        "Capacity grows by increasing resources such as CPU or memory on an existing instance.",
      ],
      [
        "d",
        "Capacity adjusts up or down with demand instead of remaining permanently provisioned at peak size.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "A plan and technical capability restore service after a major disruption or site loss.",
    optionExplanations: {
      a: "Correct. This is the definition of Disaster recovery.",
      b: "Incorrect. That statement describes Performance predictability, not Disaster recovery.",
      c: "Incorrect. That statement describes Vertical scaling, not Disaster recovery.",
      d: "Incorrect. That statement describes Elasticity, not Disaster recovery.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x015-sc1",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "A team sizes and measures resources so expected workload responsiveness remains consistent. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Performance predictability"],
      ["b", "Horizontal scaling"],
      ["c", "High availability"],
      ["d", "Fault tolerance"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
    optionExplanations: {
      a: "Correct. Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
      b: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires Performance predictability.",
      c: "Incorrect. High availability means: Architecture aims to keep an application accessible despite outages or component failures. The scenario/definition instead requires Performance predictability.",
      d: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Performance predictability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x015-def",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
    options: [
      ["a", "Performance predictability"],
      ["b", "Horizontal scaling"],
      ["c", "High availability"],
      ["d", "Fault tolerance"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
    optionExplanations: {
      a: "Correct. Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
      b: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires Performance predictability.",
      c: "Incorrect. High availability means: Architecture aims to keep an application accessible despite outages or component failures. The scenario/definition instead requires Performance predictability.",
      d: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Performance predictability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x015-sc2",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "An architect chooses capacity based on observed demand and expected throughput. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Fault tolerance"],
      ["b", "High availability"],
      ["c", "Horizontal scaling"],
      ["d", "Performance predictability"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
    optionExplanations: {
      a: "Incorrect. Fault tolerance means: A system continues operating when an individual component fails through redundant design. The scenario/definition instead requires Performance predictability.",
      b: "Incorrect. High availability means: Architecture aims to keep an application accessible despite outages or component failures. The scenario/definition instead requires Performance predictability.",
      c: "Incorrect. Horizontal scaling means: Capacity grows by adding more instances or nodes rather than enlarging one machine. The scenario/definition instead requires Performance predictability.",
      d: "Correct. Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x015-match",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Performance predictability'?",
    options: [
      [
        "a",
        "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
      ],
      [
        "b",
        "A system continues operating when an individual component fails through redundant design.",
      ],
      ["c", "Capacity grows by adding more instances or nodes rather than enlarging one machine."],
      [
        "d",
        "Architecture aims to keep an application accessible despite outages or component failures.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cloud planning and monitoring help forecast workload performance requirements and outcomes.",
    optionExplanations: {
      a: "Correct. This is the definition of Performance predictability.",
      b: "Incorrect. That statement describes Fault tolerance, not Performance predictability.",
      c: "Incorrect. That statement describes Horizontal scaling, not Performance predictability.",
      d: "Incorrect. That statement describes High availability, not Performance predictability.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    sourceLabel: "Microsoft Learn — Benefits documentation",
    reviewStatus: "reviewed",
  },
];

export const q_d1_cloud_benefits = mapCandidates(drafts);
