/**
 * CloudPrep AZ-900 — documentation-reviewed question expansion.
 * Original questions; Microsoft Learn references attached to each item.
 * Human subject-matter expert certification has NOT been performed.
 */
import type { DraftQuestion } from "./build-candidates";
import { mapCandidates } from "./build-candidates";

const drafts: DraftQuestion[] = [
  {
    id: "ai26-x066-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "An application incurs more Azure compute charges because it runs for more billable hours, with the VM rate unchanged. What cost driver explains the change? Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Resource usage"],
      ["b", "Cost analysis"],
      ["c", "Outbound data transfer"],
      ["d", "Savings plan for compute"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
    optionExplanations: {
      a: "Correct. Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      b: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Resource usage.",
      c: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Resource usage.",
      d: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Resource usage.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x066-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Consumption of metered resources such as compute time and data operations can affect Azure charges.",
    options: [
      ["a", "Cost analysis"],
      ["b", "Resource usage"],
      ["c", "Outbound data transfer"],
      ["d", "Savings plan for compute"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
    optionExplanations: {
      a: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Resource usage.",
      b: "Correct. Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      c: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Resource usage.",
      d: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Resource usage.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x066-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "A VM retains the same size and region, but its total billable compute hours increase. Which pricing factor increases as a result? Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Savings plan for compute"],
      ["b", "Cost analysis"],
      ["c", "Resource usage"],
      ["d", "Outbound data transfer"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
    optionExplanations: {
      a: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Resource usage.",
      b: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Resource usage.",
      c: "Correct. Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      d: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Resource usage.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x066-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Resource usage'?",
    options: [
      [
        "a",
        "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      ],
      ["b", "Cost Analysis helps users examine, group, and understand Azure charges over time."],
      [
        "c",
        "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      ],
      [
        "d",
        "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
    optionExplanations: {
      a: "Incorrect. That statement describes Savings plan for compute, not Resource usage.",
      b: "Incorrect. That statement describes Cost analysis, not Resource usage.",
      c: "Incorrect. That statement describes Outbound data transfer, not Resource usage.",
      d: "Correct. This is the definition of Resource usage.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x067-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "Two otherwise identical Azure VM configurations have different hourly rates because they run in different Azure regions. Which pricing factor accounts for this? Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure budgets"],
      ["b", "Azure region pricing"],
      ["c", "Azure pricing calculator"],
      ["d", "Reserved instance pricing"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Prices can vary according to the Azure region in which a supported service is deployed.",
    optionExplanations: {
      a: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Azure region pricing.",
      b: "Correct. Prices can vary according to the Azure region in which a supported service is deployed.",
      c: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Azure region pricing.",
      d: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Azure region pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x067-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Prices can vary according to the Azure region in which a supported service is deployed.",
    options: [
      ["a", "Azure budgets"],
      ["b", "Reserved instance pricing"],
      ["c", "Azure region pricing"],
      ["d", "Azure pricing calculator"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Prices can vary according to the Azure region in which a supported service is deployed.",
    optionExplanations: {
      a: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Azure region pricing.",
      b: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Azure region pricing.",
      c: "Correct. Prices can vary according to the Azure region in which a supported service is deployed.",
      d: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Azure region pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x067-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "An architect notices that a particular Azure VM size can have different rates depending on the selected Azure region. Which factor accounts for this? Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure region pricing"],
      ["b", "Azure pricing calculator"],
      ["c", "Reserved instance pricing"],
      ["d", "Azure budgets"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Prices can vary according to the Azure region in which a supported service is deployed.",
    optionExplanations: {
      a: "Correct. Prices can vary according to the Azure region in which a supported service is deployed.",
      b: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Azure region pricing.",
      c: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Azure region pricing.",
      d: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Azure region pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x067-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure region pricing'?",
    options: [
      [
        "a",
        "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
      ],
      [
        "b",
        "Azure's pricing calculator estimates expected service costs before resources are deployed.",
      ],
      [
        "c",
        "Prices can vary according to the Azure region in which a supported service is deployed.",
      ],
      [
        "d",
        "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Prices can vary according to the Azure region in which a supported service is deployed.",
    optionExplanations: {
      a: "Incorrect. That statement describes Reserved instance pricing, not Azure region pricing.",
      b: "Incorrect. That statement describes Azure pricing calculator, not Azure region pricing.",
      c: "Correct. This is the definition of Azure region pricing.",
      d: "Incorrect. That statement describes Azure budgets, not Azure region pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x068-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "A video service anticipates large data transfers from Azure to users on the internet. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Resource tags for cost allocation"],
      ["b", "Savings plan for compute"],
      ["c", "Outbound data transfer"],
      ["d", "Cost analysis"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
    optionExplanations: {
      a: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Outbound data transfer.",
      b: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Outbound data transfer.",
      c: "Correct. Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      d: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Outbound data transfer.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x068-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
    options: [
      ["a", "Cost analysis"],
      ["b", "Resource tags for cost allocation"],
      ["c", "Outbound data transfer"],
      ["d", "Savings plan for compute"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
    optionExplanations: {
      a: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Outbound data transfer.",
      b: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Outbound data transfer.",
      c: "Correct. Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      d: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Outbound data transfer.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x068-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "An app team includes internet-bound data traffic when estimating cloud expenditure. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Resource tags for cost allocation"],
      ["b", "Outbound data transfer"],
      ["c", "Savings plan for compute"],
      ["d", "Cost analysis"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
    optionExplanations: {
      a: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Outbound data transfer.",
      b: "Correct. Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      c: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Outbound data transfer.",
      d: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Outbound data transfer.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x068-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Outbound data transfer'?",
    options: [
      [
        "a",
        "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      ],
      [
        "b",
        "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
      ],
      [
        "c",
        "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      ],
      ["d", "Cost Analysis helps users examine, group, and understand Azure charges over time."],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
    optionExplanations: {
      a: "Incorrect. That statement describes Savings plan for compute, not Outbound data transfer.",
      b: "Incorrect. That statement describes Resource tags for cost allocation, not Outbound data transfer.",
      c: "Correct. This is the definition of Outbound data transfer.",
      d: "Incorrect. That statement describes Cost analysis, not Outbound data transfer.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management",
    sourceLabel: "Microsoft Learn — Cost documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x069-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "A business has predictable long-running compute usage and wants commitment-based savings. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure budgets"],
      ["b", "Resource usage"],
      ["c", "Reserved instance pricing"],
      ["d", "Azure pricing calculator"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
    optionExplanations: {
      a: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Reserved instance pricing.",
      b: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Reserved instance pricing.",
      c: "Correct. Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
      d: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Reserved instance pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    sourceLabel: "Microsoft Learn — Reservations documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x069-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
    options: [
      ["a", "Azure pricing calculator"],
      ["b", "Resource usage"],
      ["c", "Azure budgets"],
      ["d", "Reserved instance pricing"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
    optionExplanations: {
      a: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Reserved instance pricing.",
      b: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Reserved instance pricing.",
      c: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Reserved instance pricing.",
      d: "Correct. Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    sourceLabel: "Microsoft Learn — Reservations documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x069-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "A finance manager compares pay-as-you-go rates with a multi-year capacity commitment. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure pricing calculator"],
      ["b", "Azure budgets"],
      ["c", "Reserved instance pricing"],
      ["d", "Resource usage"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
    optionExplanations: {
      a: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Reserved instance pricing.",
      b: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Reserved instance pricing.",
      c: "Correct. Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
      d: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Reserved instance pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    sourceLabel: "Microsoft Learn — Reservations documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x069-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Reserved instance pricing'?",
    options: [
      [
        "a",
        "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
      ],
      [
        "b",
        "Azure's pricing calculator estimates expected service costs before resources are deployed.",
      ],
      [
        "c",
        "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
      ],
      [
        "d",
        "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure budgets, not Reserved instance pricing.",
      b: "Incorrect. That statement describes Azure pricing calculator, not Reserved instance pricing.",
      c: "Correct. This is the definition of Reserved instance pricing.",
      d: "Incorrect. That statement describes Resource usage, not Reserved instance pricing.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    sourceLabel: "Microsoft Learn — Reservations documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x070-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "A company expects steady compute spending but needs flexibility across eligible compute services. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Cost analysis"],
      ["b", "Savings plan for compute"],
      ["c", "Resource tags for cost allocation"],
      ["d", "Azure region pricing"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
    optionExplanations: {
      a: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Savings plan for compute.",
      b: "Correct. An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      c: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Savings plan for compute.",
      d: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Savings plan for compute.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/savings-plan-overview",
    sourceLabel: "Microsoft Learn — Savings documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x070-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
    options: [
      ["a", "Azure region pricing"],
      ["b", "Savings plan for compute"],
      ["c", "Cost analysis"],
      ["d", "Resource tags for cost allocation"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
    optionExplanations: {
      a: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Savings plan for compute.",
      b: "Correct. An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      c: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Savings plan for compute.",
      d: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Savings plan for compute.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/savings-plan-overview",
    sourceLabel: "Microsoft Learn — Savings documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x070-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "intermediate",
    stem: "A team selects a commitment model based on dollars per hour rather than a particular VM configuration. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Resource tags for cost allocation"],
      ["b", "Savings plan for compute"],
      ["c", "Azure region pricing"],
      ["d", "Cost analysis"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
    optionExplanations: {
      a: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Savings plan for compute.",
      b: "Correct. An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      c: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Savings plan for compute.",
      d: "Incorrect. Cost analysis means: Cost Analysis helps users examine, group, and understand Azure charges over time. The scenario/definition instead requires Savings plan for compute.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/savings-plan-overview",
    sourceLabel: "Microsoft Learn — Savings documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x070-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Savings plan for compute'?",
    options: [
      [
        "a",
        "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
      ],
      [
        "b",
        "Prices can vary according to the Azure region in which a supported service is deployed.",
      ],
      [
        "c",
        "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      ],
      ["d", "Cost Analysis helps users examine, group, and understand Azure charges over time."],
    ],
    correctOptionId: "c",
    correctExplanation:
      "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
    optionExplanations: {
      a: "Incorrect. That statement describes Resource tags for cost allocation, not Savings plan for compute.",
      b: "Incorrect. That statement describes Azure region pricing, not Savings plan for compute.",
      c: "Correct. This is the definition of Savings plan for compute.",
      d: "Incorrect. That statement describes Cost analysis, not Savings plan for compute.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/savings-plan-overview",
    sourceLabel: "Microsoft Learn — Savings documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x071-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Explore the pricing calculator",
    difficulty: "intermediate",
    stem: "A project lead wants a preliminary monthly cost estimate for a new Azure solution. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure budgets"],
      ["b", "Azure pricing calculator"],
      ["c", "Outbound data transfer"],
      ["d", "Resource usage"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure's pricing calculator estimates expected service costs before resources are deployed.",
    optionExplanations: {
      a: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Azure pricing calculator.",
      b: "Correct. Azure's pricing calculator estimates expected service costs before resources are deployed.",
      c: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Azure pricing calculator.",
      d: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Azure pricing calculator.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator",
    sourceLabel: "Microsoft Learn — Pricing documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x071-def",
    topicId: "d3-cost-management",
    skillObjective: "Explore the pricing calculator",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure's pricing calculator estimates expected service costs before resources are deployed.",
    options: [
      ["a", "Resource usage"],
      ["b", "Azure pricing calculator"],
      ["c", "Azure budgets"],
      ["d", "Outbound data transfer"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure's pricing calculator estimates expected service costs before resources are deployed.",
    optionExplanations: {
      a: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Azure pricing calculator.",
      b: "Correct. Azure's pricing calculator estimates expected service costs before resources are deployed.",
      c: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Azure pricing calculator.",
      d: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Azure pricing calculator.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator",
    sourceLabel: "Microsoft Learn — Pricing documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x071-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Explore the pricing calculator",
    difficulty: "intermediate",
    stem: "A startup compares configurations and SKUs before moving production workloads. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure budgets"],
      ["b", "Resource usage"],
      ["c", "Azure pricing calculator"],
      ["d", "Outbound data transfer"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure's pricing calculator estimates expected service costs before resources are deployed.",
    optionExplanations: {
      a: "Incorrect. Azure budgets means: Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption. The scenario/definition instead requires Azure pricing calculator.",
      b: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Azure pricing calculator.",
      c: "Correct. Azure's pricing calculator estimates expected service costs before resources are deployed.",
      d: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Azure pricing calculator.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator",
    sourceLabel: "Microsoft Learn — Pricing documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x071-match",
    topicId: "d3-cost-management",
    skillObjective: "Explore the pricing calculator",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure pricing calculator'?",
    options: [
      [
        "a",
        "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      ],
      [
        "b",
        "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      ],
      [
        "c",
        "Azure's pricing calculator estimates expected service costs before resources are deployed.",
      ],
      [
        "d",
        "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure's pricing calculator estimates expected service costs before resources are deployed.",
    optionExplanations: {
      a: "Incorrect. That statement describes Outbound data transfer, not Azure pricing calculator.",
      b: "Incorrect. That statement describes Resource usage, not Azure pricing calculator.",
      c: "Correct. This is the definition of Azure pricing calculator.",
      d: "Incorrect. That statement describes Azure budgets, not Azure pricing calculator.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator",
    sourceLabel: "Microsoft Learn — Pricing documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x072-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "intermediate",
    stem: "A manager wants to break down spending by service and resource group. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Resource tags for cost allocation"],
      ["b", "Azure region pricing"],
      ["c", "Cost analysis"],
      ["d", "Reserved instance pricing"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Cost Analysis helps users examine, group, and understand Azure charges over time.",
    optionExplanations: {
      a: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Cost analysis.",
      b: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Cost analysis.",
      c: "Correct. Cost Analysis helps users examine, group, and understand Azure charges over time.",
      d: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Cost analysis.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis",
    sourceLabel: "Microsoft Learn — Analysis documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x072-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Cost Analysis helps users examine, group, and understand Azure charges over time.",
    options: [
      ["a", "Azure region pricing"],
      ["b", "Cost analysis"],
      ["c", "Reserved instance pricing"],
      ["d", "Resource tags for cost allocation"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Cost Analysis helps users examine, group, and understand Azure charges over time.",
    optionExplanations: {
      a: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Cost analysis.",
      b: "Correct. Cost Analysis helps users examine, group, and understand Azure charges over time.",
      c: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Cost analysis.",
      d: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Cost analysis.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis",
    sourceLabel: "Microsoft Learn — Analysis documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x072-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "intermediate",
    stem: "A finance analyst investigates which Azure service drove last month's costs. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Cost analysis"],
      ["b", "Resource tags for cost allocation"],
      ["c", "Azure region pricing"],
      ["d", "Reserved instance pricing"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cost Analysis helps users examine, group, and understand Azure charges over time.",
    optionExplanations: {
      a: "Correct. Cost Analysis helps users examine, group, and understand Azure charges over time.",
      b: "Incorrect. Resource tags for cost allocation means: Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs. The scenario/definition instead requires Cost analysis.",
      c: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Cost analysis.",
      d: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Cost analysis.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis",
    sourceLabel: "Microsoft Learn — Analysis documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x072-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Cost analysis'?",
    options: [
      [
        "a",
        "Prices can vary according to the Azure region in which a supported service is deployed.",
      ],
      [
        "b",
        "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
      ],
      ["c", "Cost Analysis helps users examine, group, and understand Azure charges over time."],
      [
        "d",
        "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Cost Analysis helps users examine, group, and understand Azure charges over time.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure region pricing, not Cost analysis.",
      b: "Incorrect. That statement describes Resource tags for cost allocation, not Cost analysis.",
      c: "Correct. This is the definition of Cost analysis.",
      d: "Incorrect. That statement describes Reserved instance pricing, not Cost analysis.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis",
    sourceLabel: "Microsoft Learn — Analysis documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x073-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "intermediate",
    stem: "A department wants an alert as its cloud spend approaches an allocated budget. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Resource usage"],
      ["b", "Savings plan for compute"],
      ["c", "Outbound data transfer"],
      ["d", "Azure budgets"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    optionExplanations: {
      a: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Azure budgets.",
      b: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Azure budgets.",
      c: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Azure budgets.",
      d: "Correct. Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets",
    sourceLabel: "Microsoft Learn — Budgets documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x073-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    options: [
      ["a", "Resource usage"],
      ["b", "Outbound data transfer"],
      ["c", "Savings plan for compute"],
      ["d", "Azure budgets"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    optionExplanations: {
      a: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Azure budgets.",
      b: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Azure budgets.",
      c: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Azure budgets.",
      d: "Correct. Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets",
    sourceLabel: "Microsoft Learn — Budgets documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x073-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "intermediate",
    stem: "A project owner defines a spending threshold to monitor cost overruns. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Resource usage"],
      ["b", "Outbound data transfer"],
      ["c", "Azure budgets"],
      ["d", "Savings plan for compute"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    optionExplanations: {
      a: "Incorrect. Resource usage means: Consumption of metered resources such as compute time and data operations can affect Azure charges. The scenario/definition instead requires Azure budgets.",
      b: "Incorrect. Outbound data transfer means: Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges. The scenario/definition instead requires Azure budgets.",
      c: "Correct. Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
      d: "Incorrect. Savings plan for compute means: An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment. The scenario/definition instead requires Azure budgets.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets",
    sourceLabel: "Microsoft Learn — Budgets documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x073-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure budgets'?",
    options: [
      [
        "a",
        "An Azure savings plan offers discounts for eligible compute usage in exchange for a fixed hourly spending commitment.",
      ],
      [
        "b",
        "Consumption of metered resources such as compute time and data operations can affect Azure charges.",
      ],
      [
        "c",
        "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
      ],
      [
        "d",
        "Sending data from Azure to destinations outside the relevant billing boundary can incur data-transfer charges.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure budgets track spending against thresholds and send alerts; they do not automatically stop Azure resource consumption.",
    optionExplanations: {
      a: "Incorrect. That statement describes Savings plan for compute, not Azure budgets.",
      b: "Incorrect. That statement describes Resource usage, not Azure budgets.",
      c: "Correct. This is the definition of Azure budgets.",
      d: "Incorrect. That statement describes Outbound data transfer, not Azure budgets.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets",
    sourceLabel: "Microsoft Learn — Budgets documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x074-sc1",
    topicId: "d3-cost-management",
    skillObjective: "Describe the purpose of tags",
    difficulty: "intermediate",
    stem: "Multiple departments need to label cloud resources by cost center. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Resource tags for cost allocation"],
      ["b", "Azure region pricing"],
      ["c", "Azure pricing calculator"],
      ["d", "Reserved instance pricing"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
    optionExplanations: {
      a: "Correct. Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
      b: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Resource tags for cost allocation.",
      c: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Resource tags for cost allocation.",
      d: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Resource tags for cost allocation.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",
    sourceLabel: "Microsoft Learn — Tags documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x074-def",
    topicId: "d3-cost-management",
    skillObjective: "Describe the purpose of tags",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
    options: [
      ["a", "Azure region pricing"],
      ["b", "Resource tags for cost allocation"],
      ["c", "Azure pricing calculator"],
      ["d", "Reserved instance pricing"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
    optionExplanations: {
      a: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Resource tags for cost allocation.",
      b: "Correct. Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
      c: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Resource tags for cost allocation.",
      d: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Resource tags for cost allocation.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",
    sourceLabel: "Microsoft Learn — Tags documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x074-sc2",
    topicId: "d3-cost-management",
    skillObjective: "Describe the purpose of tags",
    difficulty: "intermediate",
    stem: "A finance team groups compatible Azure resources by department for reporting. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure region pricing"],
      ["b", "Reserved instance pricing"],
      ["c", "Azure pricing calculator"],
      ["d", "Resource tags for cost allocation"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
    optionExplanations: {
      a: "Incorrect. Azure region pricing means: Prices can vary according to the Azure region in which a supported service is deployed. The scenario/definition instead requires Resource tags for cost allocation.",
      b: "Incorrect. Reserved instance pricing means: Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period. The scenario/definition instead requires Resource tags for cost allocation.",
      c: "Incorrect. Azure pricing calculator means: Azure's pricing calculator estimates expected service costs before resources are deployed. The scenario/definition instead requires Resource tags for cost allocation.",
      d: "Correct. Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",
    sourceLabel: "Microsoft Learn — Tags documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x074-match",
    topicId: "d3-cost-management",
    skillObjective: "Describe the purpose of tags",
    difficulty: "foundational",
    stem: "Which statement best defines 'Resource tags for cost allocation'?",
    options: [
      [
        "a",
        "Prices can vary according to the Azure region in which a supported service is deployed.",
      ],
      [
        "b",
        "Azure Reservations can reduce eligible costs in exchange for a usage commitment for a defined period.",
      ],
      [
        "c",
        "Azure's pricing calculator estimates expected service costs before resources are deployed.",
      ],
      [
        "d",
        "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure resource tags attach metadata such as cost center or owner to help organize resources and allocate costs.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure region pricing, not Resource tags for cost allocation.",
      b: "Incorrect. That statement describes Reserved instance pricing, not Resource tags for cost allocation.",
      c: "Incorrect. That statement describes Azure pricing calculator, not Resource tags for cost allocation.",
      d: "Correct. This is the definition of Resource tags for cost allocation.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",
    sourceLabel: "Microsoft Learn — Tags documentation",
    reviewStatus: "reviewed",
  },
];

export const q_d3_cost_management = mapCandidates(drafts);
