import type { SyllabusDomain, SyllabusTopic } from "@/types/quiz";

/**
 * Official AZ-900 syllabus as published in the Microsoft study guide,
 * "Skills measured as of July 20, 2026":
 * https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
 * Skill objective names are copied verbatim from the official outline.
 */

export const STUDY_GUIDE_URL =
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900";

export const domains: SyllabusDomain[] = [
  {
    id: "cloud-concepts",
    name: "Describe cloud concepts",
    weight: "25–30%",
    summary:
      "Cloud computing, the shared responsibility model, cloud models, the consumption-based model, benefits of cloud services, and IaaS / PaaS / SaaS.",
    guideUrl: STUDY_GUIDE_URL,
  },
  {
    id: "architecture-services",
    name: "Describe Azure architecture and services",
    weight: "35–40%",
    summary:
      "Core architectural components of Azure, compute and networking services, storage services, and identity, access, and security.",
    guideUrl: STUDY_GUIDE_URL,
  },
  {
    id: "management-governance",
    name: "Describe Azure management and governance",
    weight: "30–35%",
    summary:
      "Cost management, governance and compliance, tools for managing and deploying resources, and monitoring tools.",
    guideUrl: STUDY_GUIDE_URL,
  },
];

export const topics: SyllabusTopic[] = [
  // Domain 1 — Describe cloud concepts
  {
    id: "d1-cloud-computing",
    domainId: "cloud-concepts",
    name: "Describe cloud computing",
    skills: [
      "Define cloud computing",
      "Describe the shared responsibility model",
      "Define cloud models, including public, private, and hybrid",
      "Identify appropriate use cases for each cloud model",
      "Describe the consumption-based model",
      "Compare cloud pricing models",
      "Describe serverless",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
  },
  {
    id: "d1-cloud-benefits",
    domainId: "cloud-concepts",
    name: "Describe the benefits of using cloud services",
    skills: [
      "Describe the benefits of high availability and scalability in the cloud",
      "Describe the benefits of reliability and predictability in the cloud",
      "Describe the benefits of security and governance in the cloud",
      "Describe the benefits of manageability in the cloud",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
  },
  {
    id: "d1-cloud-service-types",
    domainId: "cloud-concepts",
    name: "Describe cloud service types",
    skills: [
      "Describe infrastructure as a service (IaaS)",
      "Describe platform as a service (PaaS)",
      "Describe software as a service (SaaS)",
      "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
  },
  // Domain 2 — Describe Azure architecture and services
  {
    id: "d2-core-architecture",
    domainId: "architecture-services",
    name: "Describe the core architectural components of Azure",
    skills: [
      "Describe Azure regions, region pairs, and sovereign regions",
      "Describe availability zones",
      "Describe Azure datacenters",
      "Describe Azure resources and resource groups",
      "Describe subscriptions",
      "Describe management groups",
      "Describe the hierarchy of resource groups, subscriptions, and management groups",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
  },
  {
    id: "d2-compute-networking",
    domainId: "architecture-services",
    name: "Describe Azure compute and networking services",
    skills: [
      "Compare compute types, including containers, virtual machines, and functions",
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
      "Describe the resources required for virtual machines",
      "Describe application hosting options, including web apps, containers, and virtual machines",
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
      "Define public and private endpoints",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
  },
  {
    id: "d2-storage",
    domainId: "architecture-services",
    name: "Describe Azure storage services",
    skills: [
      "Compare Azure Storage services",
      "Describe storage tiers",
      "Describe redundancy options",
      "Describe storage account options and storage types",
      "Identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync",
      "Describe migration options, including Azure Migrate and Azure Data Box",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction",
  },
  {
    id: "d2-identity-security",
    domainId: "architecture-services",
    name: "Describe Azure identity, access, and security",
    skills: [
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
      "Describe external identities in Azure",
      "Describe Microsoft Entra Conditional Access",
      "Describe Azure role-based access control (RBAC)",
      "Describe the concept of Zero Trust",
      "Describe the purpose of the defense-in-depth model",
      "Describe the purpose of Microsoft Defender for Cloud",
    ],
    studyUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
  },
  // Domain 3 — Describe Azure management and governance
  {
    id: "d3-cost-management",
    domainId: "management-governance",
    name: "Describe cost management in Azure",
    skills: [
      "Describe factors that can affect costs in Azure",
      "Explore the pricing calculator",
      "Describe cost management capabilities in Azure",
      "Describe the purpose of tags",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/azure/cost-management-billing/cost-management-billing-overview",
  },
  {
    id: "d3-governance-compliance",
    domainId: "management-governance",
    name: "Describe features and tools in Azure for governance and compliance",
    skills: [
      "Describe the purpose of Microsoft Purview in Azure",
      "Describe the purpose of Azure Policy",
      "Describe the purpose of resource locks",
    ],
    studyUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview",
  },
  {
    id: "d3-managing-deploying",
    domainId: "management-governance",
    name: "Describe features and tools for managing and deploying Azure resources",
    skills: [
      "Describe the Azure portal",
      "Describe Azure Cloud Shell, Azure CLI, and Azure PowerShell",
      "Describe the purpose of Azure Arc",
      "Describe infrastructure as code (IaC)",
      "Describe Azure Resource Manager (ARM) and ARM templates",
    ],
    studyUrl:
      "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
  },
  {
    id: "d3-monitoring",
    domainId: "management-governance",
    name: "Describe monitoring tools in Azure",
    skills: [
      "Describe the purpose of Azure Advisor",
      "Describe Azure Service Health",
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    ],
    studyUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview",
  },
];

export const domainById = new Map(domains.map((d) => [d.id, d]));
export const topicById = new Map(topics.map((t) => [t.id, t]));

export function topicsForDomain(domainId: string): SyllabusTopic[] {
  return topics.filter((t) => t.domainId === domainId);
}

export function domainName(domainId: string): string {
  return domainById.get(domainId as never)?.name ?? "Unknown domain";
}

export function topicName(topicId: string): string {
  return topicById.get(topicId)?.name ?? "Unknown topic";
}
