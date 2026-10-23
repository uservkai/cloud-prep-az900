/**
 * CloudPrep AZ-900 — documentation-reviewed question expansion.
 * Original questions; Microsoft Learn references attached to each item.
 * Human subject-matter expert certification has NOT been performed.
 */
import type { DraftQuestion } from "./build-candidates";
import { mapCandidates } from "./build-candidates";

const drafts: DraftQuestion[] = [
  {
    id: "ai26-x096-sc1",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "intermediate",
    stem: "A subscription owner wants personalized recommendations for improving deployed Azure resources. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Log Analytics"],
      ["b", "Azure status"],
      ["c", "Azure Advisor"],
      ["d", "Advisor reliability recommendations"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
    optionExplanations: {
      a: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure Advisor.",
      b: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Azure Advisor.",
      c: "Correct. Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
      d: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Advisor.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x096-def",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
    options: [
      ["a", "Azure Advisor"],
      ["b", "Azure status"],
      ["c", "Log Analytics"],
      ["d", "Advisor reliability recommendations"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
    optionExplanations: {
      a: "Correct. Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
      b: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Azure Advisor.",
      c: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure Advisor.",
      d: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Advisor.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x096-sc2",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "intermediate",
    stem: "A cloud architect reviews suggestions to reduce resource costs and improve reliability. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Advisor reliability recommendations"],
      ["b", "Log Analytics"],
      ["c", "Azure status"],
      ["d", "Azure Advisor"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
    optionExplanations: {
      a: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Advisor.",
      b: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure Advisor.",
      c: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Azure Advisor.",
      d: "Correct. Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x096-match",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Advisor'?",
    options: [
      [
        "a",
        "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
      ],
      [
        "b",
        "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      ],
      [
        "c",
        "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      ],
      [
        "d",
        "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
    optionExplanations: {
      a: "Correct. This is the definition of Azure Advisor.",
      b: "Incorrect. That statement describes Advisor reliability recommendations, not Azure Advisor.",
      c: "Incorrect. That statement describes Azure status, not Azure Advisor.",
      d: "Incorrect. That statement describes Log Analytics, not Azure Advisor.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x097-sc1",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "intermediate",
    stem: "A finance team looks for cloud resources that may be downsized to save money. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Monitor metrics"],
      ["b", "Resource Health"],
      ["c", "Advisor cost recommendations"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
    optionExplanations: {
      a: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Advisor cost recommendations.",
      b: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Advisor cost recommendations.",
      c: "Correct. Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      d: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Advisor cost recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x097-def",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
    options: [
      ["a", "Advisor cost recommendations"],
      ["b", "Azure Monitor metrics"],
      ["c", "Azure Service Health"],
      ["d", "Resource Health"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
    optionExplanations: {
      a: "Correct. Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      b: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Advisor cost recommendations.",
      c: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Advisor cost recommendations.",
      d: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Advisor cost recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x097-sc2",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "intermediate",
    stem: "An administrator wants recommendations for reducing avoidable Azure expenditure. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Advisor cost recommendations"],
      ["b", "Azure Service Health"],
      ["c", "Resource Health"],
      ["d", "Azure Monitor metrics"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
    optionExplanations: {
      a: "Correct. Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      b: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Advisor cost recommendations.",
      c: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Advisor cost recommendations.",
      d: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Advisor cost recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x097-match",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which statement best defines 'Advisor cost recommendations'?",
    options: [
      [
        "a",
        "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
      ],
      [
        "b",
        "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
      ],
      [
        "c",
        "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      ],
      [
        "d",
        "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure Advisor, not Advisor cost recommendations.",
      b: "Incorrect. That statement describes Azure Service Health, not Advisor cost recommendations.",
      c: "Incorrect. That statement describes Resource Health, not Advisor cost recommendations.",
      d: "Correct. This is the definition of Advisor cost recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x098-sc1",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "intermediate",
    stem: "A team wants recommendations about architecture choices that could improve availability. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Advisor reliability recommendations"],
      ["b", "Advisor cost recommendations"],
      ["c", "Azure status"],
      ["d", "Azure Monitor metrics"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
    optionExplanations: {
      a: "Correct. Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      b: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Advisor reliability recommendations.",
      c: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Advisor reliability recommendations.",
      d: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Advisor reliability recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x098-def",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
    options: [
      ["a", "Advisor cost recommendations"],
      ["b", "Advisor reliability recommendations"],
      ["c", "Azure Monitor metrics"],
      ["d", "Azure status"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
    optionExplanations: {
      a: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Advisor reliability recommendations.",
      b: "Correct. Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      c: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Advisor reliability recommendations.",
      d: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Advisor reliability recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x098-sc2",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "intermediate",
    stem: "A cloud operator reviews reliability improvement suggestions for its resources. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Advisor reliability recommendations"],
      ["b", "Advisor cost recommendations"],
      ["c", "Azure status"],
      ["d", "Azure Monitor metrics"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
    optionExplanations: {
      a: "Correct. Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      b: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Advisor reliability recommendations.",
      c: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Advisor reliability recommendations.",
      d: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Advisor reliability recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x098-match",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which statement best defines 'Advisor reliability recommendations'?",
    options: [
      [
        "a",
        "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      ],
      [
        "b",
        "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      ],
      [
        "c",
        "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      ],
      [
        "d",
        "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
    optionExplanations: {
      a: "Incorrect. That statement describes Advisor cost recommendations, not Advisor reliability recommendations.",
      b: "Incorrect. That statement describes Azure status, not Advisor reliability recommendations.",
      c: "Incorrect. That statement describes Azure Monitor metrics, not Advisor reliability recommendations.",
      d: "Correct. This is the definition of Advisor reliability recommendations.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    sourceLabel: "Microsoft Learn — Advisor documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x099-sc1",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "intermediate",
    stem: "An operator wants to know whether a provider-side Azure incident affects subscribed services. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Resource Health"],
      ["b", "Azure Service Health"],
      ["c", "Azure Monitor logs"],
      ["d", "Advisor reliability recommendations"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
    optionExplanations: {
      a: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Azure Service Health.",
      b: "Correct. Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
      c: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Azure Service Health.",
      d: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Service Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x099-def",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
    options: [
      ["a", "Resource Health"],
      ["b", "Advisor reliability recommendations"],
      ["c", "Azure Service Health"],
      ["d", "Azure Monitor logs"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
    optionExplanations: {
      a: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Azure Service Health.",
      b: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Service Health.",
      c: "Correct. Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
      d: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Azure Service Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x099-sc2",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "intermediate",
    stem: "An IT team checks scheduled maintenance events relevant to its Azure resources. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Resource Health"],
      ["b", "Advisor reliability recommendations"],
      ["c", "Azure Monitor logs"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
    optionExplanations: {
      a: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Azure Service Health.",
      b: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Service Health.",
      c: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Azure Service Health.",
      d: "Correct. Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x099-match",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Service Health'?",
    options: [
      [
        "a",
        "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
      ],
      [
        "b",
        "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      ],
      [
        "c",
        "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      ],
      [
        "d",
        "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
    optionExplanations: {
      a: "Correct. This is the definition of Azure Service Health.",
      b: "Incorrect. That statement describes Resource Health, not Azure Service Health.",
      c: "Incorrect. That statement describes Azure Monitor logs, not Azure Service Health.",
      d: "Incorrect. That statement describes Advisor reliability recommendations, not Azure Service Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x100-sc1",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "intermediate",
    stem: "A user without a subscription wants to check broad service status across Azure. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Log Analytics"],
      ["b", "Azure Monitor metrics"],
      ["c", "Azure status"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
    optionExplanations: {
      a: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure status.",
      b: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Azure status.",
      c: "Correct. Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      d: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Azure status.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x100-def",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
    options: [
      ["a", "Azure Service Health"],
      ["b", "Log Analytics"],
      ["c", "Azure status"],
      ["d", "Azure Monitor metrics"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
    optionExplanations: {
      a: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Azure status.",
      b: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure status.",
      c: "Correct. Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      d: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Azure status.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x100-sc2",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "intermediate",
    stem: "A developer views a public dashboard for widespread Azure platform issues. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Monitor metrics"],
      ["b", "Log Analytics"],
      ["c", "Azure status"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
    optionExplanations: {
      a: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Azure status.",
      b: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure status.",
      c: "Correct. Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      d: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Azure status.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x100-match",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure status'?",
    options: [
      [
        "a",
        "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
      ],
      [
        "b",
        "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      ],
      [
        "c",
        "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      ],
      [
        "d",
        "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
      ],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
    optionExplanations: {
      a: "Incorrect. That statement describes Log Analytics, not Azure status.",
      b: "Correct. This is the definition of Azure status.",
      c: "Incorrect. That statement describes Azure Monitor metrics, not Azure status.",
      d: "Incorrect. That statement describes Azure Service Health, not Azure status.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    sourceLabel: "Microsoft Learn — Health documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x101-sc1",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "intermediate",
    stem: "An operator investigates whether one particular virtual machine is currently available. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Monitor logs"],
      ["b", "Azure Advisor"],
      ["c", "Resource Health"],
      ["d", "Azure status"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
    optionExplanations: {
      a: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Resource Health.",
      b: "Incorrect. Azure Advisor means: Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security. The scenario/definition instead requires Resource Health.",
      c: "Correct. Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      d: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Resource Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview",
    sourceLabel: "Microsoft Learn — Resourcehealth documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x101-def",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
    options: [
      ["a", "Azure Monitor logs"],
      ["b", "Azure status"],
      ["c", "Resource Health"],
      ["d", "Azure Advisor"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
    optionExplanations: {
      a: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Resource Health.",
      b: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Resource Health.",
      c: "Correct. Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      d: "Incorrect. Azure Advisor means: Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security. The scenario/definition instead requires Resource Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview",
    sourceLabel: "Microsoft Learn — Resourcehealth documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x101-sc2",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "intermediate",
    stem: "A support team examines health information specific to its Azure resource. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Resource Health"],
      ["b", "Azure Advisor"],
      ["c", "Azure Monitor logs"],
      ["d", "Azure status"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
    optionExplanations: {
      a: "Correct. Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      b: "Incorrect. Azure Advisor means: Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security. The scenario/definition instead requires Resource Health.",
      c: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Resource Health.",
      d: "Incorrect. Azure status means: Azure Status provides a broad public view of Azure service health rather than personalized service impact details. The scenario/definition instead requires Resource Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview",
    sourceLabel: "Microsoft Learn — Resourcehealth documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x101-match",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Which statement best defines 'Resource Health'?",
    options: [
      [
        "a",
        "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      ],
      [
        "b",
        "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
      ],
      [
        "c",
        "Azure Status provides a broad public view of Azure service health rather than personalized service impact details.",
      ],
      [
        "d",
        "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
    optionExplanations: {
      a: "Correct. This is the definition of Resource Health.",
      b: "Incorrect. That statement describes Azure Advisor, not Resource Health.",
      c: "Incorrect. That statement describes Azure status, not Resource Health.",
      d: "Incorrect. That statement describes Azure Monitor logs, not Resource Health.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview",
    sourceLabel: "Microsoft Learn — Resourcehealth documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x102-sc1",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "A team graphs processor utilization over the last several hours. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Monitor metrics"],
      ["b", "Resource Health"],
      ["c", "Log Analytics"],
      ["d", "Advisor cost recommendations"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
    optionExplanations: {
      a: "Correct. Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      b: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Azure Monitor metrics.",
      c: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure Monitor metrics.",
      d: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Azure Monitor metrics.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-monitor/metrics/data-platform-metrics",
    sourceLabel: "Microsoft Learn — Metrics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x102-def",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
    options: [
      ["a", "Log Analytics"],
      ["b", "Azure Monitor metrics"],
      ["c", "Resource Health"],
      ["d", "Advisor cost recommendations"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
    optionExplanations: {
      a: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure Monitor metrics.",
      b: "Correct. Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      c: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Azure Monitor metrics.",
      d: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Azure Monitor metrics.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-monitor/metrics/data-platform-metrics",
    sourceLabel: "Microsoft Learn — Metrics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x102-sc2",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "An operator inspects time-stamped numerical performance measurements. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Log Analytics"],
      ["b", "Advisor cost recommendations"],
      ["c", "Azure Monitor metrics"],
      ["d", "Resource Health"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
    optionExplanations: {
      a: "Incorrect. Log Analytics means: Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL). The scenario/definition instead requires Azure Monitor metrics.",
      b: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Azure Monitor metrics.",
      c: "Correct. Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      d: "Incorrect. Resource Health means: Azure Resource Health reports the health of individual Azure resources and factors affecting their availability. The scenario/definition instead requires Azure Monitor metrics.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-monitor/metrics/data-platform-metrics",
    sourceLabel: "Microsoft Learn — Metrics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x102-match",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Monitor metrics'?",
    options: [
      [
        "a",
        "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      ],
      [
        "b",
        "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
      ],
      [
        "c",
        "Azure Resource Health reports the health of individual Azure resources and factors affecting their availability.",
      ],
      [
        "d",
        "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
    optionExplanations: {
      a: "Incorrect. That statement describes Advisor cost recommendations, not Azure Monitor metrics.",
      b: "Incorrect. That statement describes Log Analytics, not Azure Monitor metrics.",
      c: "Incorrect. That statement describes Resource Health, not Azure Monitor metrics.",
      d: "Correct. This is the definition of Azure Monitor metrics.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/azure-monitor/metrics/data-platform-metrics",
    sourceLabel: "Microsoft Learn — Metrics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x103-sc1",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "An engineer needs to collect and retain diagnostic records from several Azure workloads in a central log data store. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Monitor logs"],
      ["b", "Advisor reliability recommendations"],
      ["c", "Azure Monitor metrics"],
      ["d", "Azure Advisor"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
    optionExplanations: {
      a: "Correct. Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      b: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Monitor logs.",
      c: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Azure Monitor logs.",
      d: "Incorrect. Azure Advisor means: Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security. The scenario/definition instead requires Azure Monitor logs.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs",
    sourceLabel: "Microsoft Learn — Logs documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x103-def",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
    options: [
      ["a", "Azure Monitor logs"],
      ["b", "Azure Monitor metrics"],
      ["c", "Azure Advisor"],
      ["d", "Advisor reliability recommendations"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
    optionExplanations: {
      a: "Correct. Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      b: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Azure Monitor logs.",
      c: "Incorrect. Azure Advisor means: Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security. The scenario/definition instead requires Azure Monitor logs.",
      d: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Monitor logs.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs",
    sourceLabel: "Microsoft Learn — Logs documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x103-sc2",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "A support analyst needs a queryable store of application events for investigation. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Monitor logs"],
      ["b", "Advisor reliability recommendations"],
      ["c", "Azure Monitor metrics"],
      ["d", "Azure Advisor"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
    optionExplanations: {
      a: "Correct. Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      b: "Incorrect. Advisor reliability recommendations means: Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources. The scenario/definition instead requires Azure Monitor logs.",
      c: "Incorrect. Azure Monitor metrics means: Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates. The scenario/definition instead requires Azure Monitor logs.",
      d: "Incorrect. Azure Advisor means: Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security. The scenario/definition instead requires Azure Monitor logs.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs",
    sourceLabel: "Microsoft Learn — Logs documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x103-match",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Monitor logs'?",
    options: [
      [
        "a",
        "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      ],
      [
        "b",
        "Azure Advisor suggests improvements for cost, performance, reliability, operational excellence, and security.",
      ],
      [
        "c",
        "Azure Monitor metrics capture numerical time-series measurements such as CPU usage and request rates.",
      ],
      [
        "d",
        "Azure Advisor reliability recommendations identify possible actions to improve the resiliency and availability of Azure resources.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
    optionExplanations: {
      a: "Correct. This is the definition of Azure Monitor logs.",
      b: "Incorrect. That statement describes Azure Advisor, not Azure Monitor logs.",
      c: "Incorrect. That statement describes Azure Monitor metrics, not Azure Monitor logs.",
      d: "Incorrect. That statement describes Advisor reliability recommendations, not Azure Monitor logs.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs",
    sourceLabel: "Microsoft Learn — Logs documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x104-sc1",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "An administrator runs KQL queries over collected diagnostic records. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Service Health"],
      ["b", "Azure Monitor logs"],
      ["c", "Log Analytics"],
      ["d", "Advisor cost recommendations"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
    optionExplanations: {
      a: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Log Analytics.",
      b: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Log Analytics.",
      c: "Correct. Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
      d: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Log Analytics.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    sourceLabel: "Microsoft Learn — Loganalytics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x104-def",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
    options: [
      ["a", "Log Analytics"],
      ["b", "Advisor cost recommendations"],
      ["c", "Azure Monitor logs"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
    optionExplanations: {
      a: "Correct. Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
      b: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Log Analytics.",
      c: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Log Analytics.",
      d: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Log Analytics.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    sourceLabel: "Microsoft Learn — Loganalytics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x104-sc2",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "An operations analyst explores centralized workspace logs with a query editor. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Service Health"],
      ["b", "Advisor cost recommendations"],
      ["c", "Azure Monitor logs"],
      ["d", "Log Analytics"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
    optionExplanations: {
      a: "Incorrect. Azure Service Health means: Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions. The scenario/definition instead requires Log Analytics.",
      b: "Incorrect. Advisor cost recommendations means: Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources. The scenario/definition instead requires Log Analytics.",
      c: "Incorrect. Azure Monitor logs means: Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources. The scenario/definition instead requires Log Analytics.",
      d: "Correct. Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    sourceLabel: "Microsoft Learn — Loganalytics documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x104-match",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "Which statement best defines 'Log Analytics'?",
    options: [
      [
        "a",
        "Azure Monitor Logs collects and stores telemetry in Log Analytics workspaces for querying and investigating events across resources.",
      ],
      [
        "b",
        "Azure Advisor cost recommendations identify ways to reduce eligible Azure spending, such as rightsizing underutilized resources.",
      ],
      [
        "c",
        "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
      ],
      [
        "d",
        "Azure Service Health reports Azure incidents, planned maintenance, and health advisories relevant to services and regions.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Log Analytics is the Azure portal tool for writing and running queries over Azure Monitor Logs data using Kusto Query Language (KQL).",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure Monitor logs, not Log Analytics.",
      b: "Incorrect. That statement describes Advisor cost recommendations, not Log Analytics.",
      c: "Correct. This is the definition of Log Analytics.",
      d: "Incorrect. That statement describes Azure Service Health, not Log Analytics.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    sourceLabel: "Microsoft Learn — Loganalytics documentation",
    reviewStatus: "reviewed",
  },
];

export const q_d3_monitoring = mapCandidates(drafts);
