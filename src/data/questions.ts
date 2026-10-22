import type { Difficulty, DomainId, QuizQuestion, ReviewStatus } from "@/types/quiz";
import { topicById } from "./syllabus";
import { batch1Questions } from "./questions-expanded/cloud-concepts-batch-1";

/**
 * Original, manually curated AZ-900 practice questions.
 *
 * Rules applied to every question:
 * - No question reproduces a real certification or Microsoft practice
 *   assessment item; all stems and explanations are original wording.
 * - sourceUrl only ever points to a Microsoft Learn page verified to exist
 *   (HTTP 200 checked at authoring time). Questions without a confirmed
 *   source link are flagged reviewStatus: "needs-verification" with
 *   sourceUrl: null and are excluded from active quizzes until reviewed.
 */

const LEARN = "https://learn.microsoft.com/en-us";

const SOURCES = {
  sharedResponsibility: `${LEARN}/azure/security/fundamentals/shared-responsibility`,
  cloudCompute: `${LEARN}/training/modules/describe-cloud-compute/`,
  cloudConceptsPath: `${LEARN}/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/`,
  cloudServiceTypes: `${LEARN}/training/modules/describe-cloud-service-types/`,
  architecturePath: `${LEARN}/training/paths/azure-fundamentals-describe-azure-architecture-services/`,
  regionsOverview: `${LEARN}/azure/reliability/regions-overview`,
  availabilityZones: `${LEARN}/azure/reliability/availability-zones-overview`,
  armOverview: `${LEARN}/azure/azure-resource-manager/management/overview`,
  containerInstances: `${LEARN}/azure/container-instances/container-instances-overview`,
  availabilitySet: `${LEARN}/azure/virtual-machines/availability-set-overview`,
  functions: `${LEARN}/azure/azure-functions/functions-overview`,
  vnetOverview: `${LEARN}/azure/virtual-network/virtual-networks-overview`,
  expressRoute: `${LEARN}/azure/expressroute/expressroute-introduction`,
  privateEndpoint: `${LEARN}/azure/private-link/private-endpoint-overview`,
  storageIntro: `${LEARN}/azure/storage/common/storage-introduction`,
  accessTiers: `${LEARN}/azure/storage/blobs/access-tiers-overview`,
  storageRedundancy: `${LEARN}/azure/storage/common/storage-redundancy`,
  azCopy: `${LEARN}/azure/storage/common/storage-use-azcopy-v10`,
  dataBox: `${LEARN}/azure/databox/data-box-overview`,
  entraWhatIs: `${LEARN}/entra/fundamentals/whatis`,
  mfaHowItWorks: `${LEARN}/entra/identity/authentication/concept-mfa-howitworks`,
  conditionalAccess: `${LEARN}/entra/identity/conditional-access/overview`,
  rbacOverview: `${LEARN}/azure/role-based-access-control/overview`,
  zeroTrust: `${LEARN}/azure/security/fundamentals/zero-trust`,
  securityFundamentals: `${LEARN}/azure/security/fundamentals/overview`,
  defenderForCloud: `${LEARN}/azure/defender-for-cloud/defender-for-cloud-introduction`,
  costManagement: `${LEARN}/azure/cost-management-billing/cost-management-billing-overview`,
  pricingCalculator: "https://azure.microsoft.com/en-us/pricing/calculator/",
  tagResources: `${LEARN}/azure/azure-resource-manager/management/tag-resources`,
  policyOverview: `${LEARN}/azure/governance/policy/overview`,
  purviewOverview: `${LEARN}/azure/purview/overview`,
  lockResources: `${LEARN}/azure/azure-resource-manager/management/lock-resources`,
  cloudShell: `${LEARN}/azure/cloud-shell/overview`,
  azurePowerShell: `${LEARN}/powershell/azure/what-is-azure-powershell`,
  bicepOverview: `${LEARN}/azure/azure-resource-manager/bicep/overview`,
  azureArc: `${LEARN}/azure/azure-arc/overview`,
  advisor: `${LEARN}/azure/advisor/advisor-overview`,
  serviceHealth: `${LEARN}/azure/service-health/service-health-overview`,
  monitorOverview: `${LEARN}/azure/azure-monitor/overview`,
  logAnalytics: `${LEARN}/azure/azure-monitor/logs/log-analytics-overview`,
  appInsights: `${LEARN}/azure/azure-monitor/app/app-insights-overview`,
  monitorAlerts: `${LEARN}/azure/azure-monitor/alerts/alerts-overview`,
} as const;

interface QuestionSpec {
  id: string;
  topicId: string;
  skillObjective: string;
  difficulty: Difficulty;
  stem: string;
  options: Array<[id: string, text: string]>;
  correctOptionId: string;
  correctExplanation: string;
  optionExplanations: Record<string, string>;
  sourceLabel: string;
  sourceUrl: string | null;
  reviewStatus?: ReviewStatus;
}

function buildQuestion(spec: QuestionSpec): QuizQuestion {
  const topic = topicById.get(spec.topicId);
  if (!topic) {
    throw new Error(`Unknown topicId in seed question ${spec.id}: ${spec.topicId}`);
  }
  return {
    id: spec.id,
    domainId: topic.domainId as DomainId,
    topicId: spec.topicId,
    skillObjective: spec.skillObjective,
    difficulty: spec.difficulty,
    stem: spec.stem,
    options: spec.options.map(([id, text]) => ({ id, text })),
    correctOptionId: spec.correctOptionId,
    correctExplanation: spec.correctExplanation,
    optionExplanations: spec.optionExplanations,
    sourceUrl: spec.sourceUrl,
    sourceLabel: spec.sourceLabel,
    reviewStatus: spec.reviewStatus ?? "reviewed",
  };
}

const specs: QuestionSpec[] = [
  // ───────────────────────── Domain 1 · Describe cloud computing ─────────────────────────
  {
    id: "d1-cc-shared-responsibility-vm",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe the shared responsibility model",
    difficulty: "foundational",
    stem: "A team runs a workload on Azure Virtual Machines. Under the shared responsibility model, which task remains the customer's responsibility?",
    options: [
      ["a", "Classifying and protecting the data placed inside the virtual machines"],
      ["b", "Physically securing the datacenter that hosts the machines"],
      ["c", "Maintaining the hypervisor layer that isolates virtual machines"],
      ["d", "Replacing failed physical server hardware"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "In an IaaS workload such as virtual machines, the cloud provider is responsible for the physical layer (datacenter, hardware, hypervisor), while the customer is responsible for everything they put in the cloud — data classification, guest operating system updates, applications and network controls.",
    optionExplanations: {
      a: "Correct. Data classification and protection always stay with the customer, in every service model.",
      b: "Incorrect. Physical datacenter security is always the cloud provider's responsibility.",
      c: "Incorrect. The hypervisor is part of the provider's infrastructure layer.",
      d: "Incorrect. Hardware maintenance and replacement is handled by the cloud provider.",
    },
    sourceLabel: "Microsoft Learn — Shared responsibility model",
    sourceUrl: SOURCES.sharedResponsibility,
  },
  {
    id: "d1-cc-hybrid-model-use-case",
    topicId: "d1-cloud-computing",
    skillObjective: "Identify appropriate use cases for each cloud model",
    difficulty: "foundational",
    stem: "A company must keep customer records on a local system because of a regulatory requirement, but wants to run analytics workloads in the cloud with on-demand capacity. Which cloud model fits this situation?",
    options: [
      ["a", "Public cloud only"],
      ["b", "Private cloud only"],
      ["c", "Hybrid cloud"],
      ["d", "On-premises only"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "A hybrid cloud combines on-premises infrastructure with a public cloud, letting data stay on-premises for compliance while cloud capacity absorbs flexible workloads such as analytics.",
    optionExplanations: {
      a: "Incorrect. A public cloud model alone would move the regulated data off-premises.",
      b: "Incorrect. A private cloud runs in dedicated infrastructure and does not give the on-demand public cloud capacity described.",
      c: "Correct. Hybrid cloud links on-premises systems with public cloud services, matching both the regulatory and elasticity needs.",
      d: "Incorrect. Fully on-premises would forfeit the cloud's on-demand scaling benefits.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud computing",
    sourceUrl: SOURCES.cloudCompute,
  },
  {
    id: "d1-cc-consumption-model",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe the consumption-based model",
    difficulty: "foundational",
    stem: "Which statement best describes the consumption-based model in the cloud?",
    options: [
      ["a", "A fixed monthly invoice is paid regardless of how many resources were used"],
      [
        "b",
        "Payment is made only for resources actually used, and capacity can be adjusted as demand changes",
      ],
      ["c", "Hardware must be purchased up front and depreciated over several years"],
      ["d", "A one-time licence fee grants unlimited resource usage"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "The consumption-based model is an operational expense (opex) approach: you pay only for what you use, and you can add or remove resources as demand changes, with no upfront capital investment.",
    optionExplanations: {
      a: "Incorrect. A fixed payment regardless of usage describes a capex-style commitment, not consumption billing.",
      b: "Correct. Paying only for actual usage and scaling with demand is the defining trait of the consumption-based model.",
      c: "Incorrect. Buying hardware up front is the capital expenditure model the cloud replaces.",
      d: "Incorrect. Consumption billing tracks usage; it is not an unlimited flat licence.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud computing",
    sourceUrl: SOURCES.cloudCompute,
  },
  {
    id: "d1-cc-pricing-models-capex-opex",
    topicId: "d1-cloud-computing",
    skillObjective: "Compare cloud pricing models",
    difficulty: "foundational",
    stem: "Which comparison of pricing models is correct?",
    options: [
      [
        "a",
        "Capital expenditure pays for compute capacity up front; consumption billing treats it as an operational expense paid as it is used",
      ],
      ["b", "Capital expenditure is billed monthly based on usage meters"],
      ["c", "Consumption billing requires signing a multi-year hardware lease"],
      ["d", "Operational expenditure only applies to on-premises servers"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Capex means spending money up front on physical infrastructure, while opex means spending on services as they are consumed — which is how public cloud consumption billing works.",
    optionExplanations: {
      a: "Correct. Capex is upfront spending on assets; the cloud's consumption model converts this into pay-as-you-go opex.",
      b: "Incorrect. Capex is not usage-metered; usage-based billing is opex.",
      c: "Incorrect. A hardware lease is a capex-style commitment, not consumption billing.",
      d: "Incorrect. Opex applies to any recurring service spend, including cloud services.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud computing",
    sourceUrl: SOURCES.cloudCompute,
  },
  {
    id: "d1-cc-serverless",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe serverless",
    difficulty: "intermediate",
    stem: "Which statement describes serverless computing in Azure?",
    options: [
      ["a", "The developer provisions and patches dedicated virtual machines that run the code"],
      [
        "b",
        "Code runs in response to events, scales automatically, and the developer is abstracted from the underlying infrastructure",
      ],
      ["c", "There are no servers involved at all — computations run without hardware"],
      ["d", "Capacity must be reserved in advance and is billed whether or not it is used"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Serverless still runs on servers, but the provider fully manages the infrastructure. Code executes in response to events, scales automatically, and — in a true consumption model — is not billed while idle.",
    optionExplanations: {
      a: "Incorrect. Provisioning and patching servers is exactly what serverless removes.",
      b: "Correct. Event-driven execution, automatic scaling and infrastructure abstraction define serverless.",
      c: "Incorrect. Servers still exist; the abstraction means the developer never manages them.",
      d: "Incorrect. Pre-reserved, always-billed capacity describes reserved IaaS, not serverless.",
    },
    sourceLabel: "Microsoft Learn — Azure Functions overview",
    sourceUrl: SOURCES.functions,
  },

  // ───────────────────── Domain 1 · Benefits of using cloud services ─────────────────────
  {
    id: "d1-ben-scalability",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "A web application automatically adds server instances during the morning traffic peak and removes them at night. Which cloud benefit does this demonstrate?",
    options: [
      ["a", "Disaster recovery"],
      ["b", "Fault tolerance"],
      ["c", "Scalability"],
      ["d", "Governance"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Scalability is the ability to add or remove resources to match demand. The cloud makes this elastic — capacity follows the workload instead of being sized for a rare peak.",
    optionExplanations: {
      a: "Incorrect. Disaster recovery concerns recovering from catastrophic failures, not day-to-day demand changes.",
      b: "Incorrect. Fault tolerance is about continuing to operate through component failures.",
      c: "Correct. Adding and removing capacity as demand rises and falls is scalability.",
      d: "Incorrect. Governance is about applying policies and standards, not capacity.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud concepts learning path",
    sourceUrl: SOURCES.cloudConceptsPath,
  },
  {
    id: "d1-ben-high-availability",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "Deploying identical workload instances across multiple availability zones in a region primarily supports which benefit?",
    options: [
      ["a", "High availability"],
      ["b", "Cost predictability"],
      ["c", "Consumption-based billing"],
      ["d", "Easier tagging"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Availability zones are physically separate datacenter areas within a region with independent power, cooling and networking. Spreading instances across zones keeps the application available if one zone fails — the essence of high availability.",
    optionExplanations: {
      a: "Correct. Redundancy across availability zones maximises uptime, which is high availability.",
      b: "Incorrect. Cost predictability relates to pricing transparency, not zone spreading.",
      c: "Incorrect. Billing model is unrelated to where instances are placed.",
      d: "Incorrect. Tagging is a resource-organisation feature.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud concepts learning path",
    sourceUrl: SOURCES.cloudConceptsPath,
  },
  {
    id: "d1-ben-reliability-predictability",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "Which pairing of cloud benefits is delivered through service-level agreements (SLAs) together with well-architected, redundant deployments?",
    options: [
      ["a", "Reliability and predictability"],
      ["b", "Shared responsibility and elasticity"],
      ["c", "Deployment speed and licence portability"],
      ["d", "Consumption billing and governance"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "A resilient, well-architected design built on a trustworthy platform makes applications dependable (reliability) and performance/cost outcomes consistent and plannable (predictability). SLAs back this with formal commitments.",
    optionExplanations: {
      a: "Correct. SLAs and resilient architecture are the levers behind reliability and predictability.",
      b: "Incorrect. Shared responsibility is a security model, and elasticity is a scaling trait — neither is the pairing described.",
      c: "Incorrect. SLAs do not concern licence portability.",
      d: "Incorrect. Consumption billing is a pricing model, not an SLA outcome.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud concepts learning path",
    sourceUrl: SOURCES.cloudConceptsPath,
  },
  {
    id: "d1-ben-manageability",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of manageability in the cloud",
    difficulty: "foundational",
    stem: "Which scenario demonstrates the manageability benefit of cloud computing?",
    options: [
      [
        "a",
        "A fleet of resources is provisioned, scaled and monitored consistently through a portal, a command-line interface and templates",
      ],
      ["b", "The provider certifies its datacenters against industry standards"],
      ["c", "Traffic doubles during a sale and the platform absorbs it automatically"],
      ["d", "Data is encrypted automatically at rest in the datacenter"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Manageability in the cloud means two things: management of the cloud (automatic scaling, monitoring, alerting) and management in the cloud (portal, CLI, APIs and templates to provision and configure resources consistently).",
    optionExplanations: {
      a: "Correct. Consistent administration through multiple management tools is cloud manageability.",
      b: "Incorrect. Compliance certifications are part of security and governance, not day-to-day manageability.",
      c: "Incorrect. Automatically absorbing traffic is scalability.",
      d: "Incorrect. Automatic encryption is a security capability.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud concepts learning path",
    sourceUrl: SOURCES.cloudConceptsPath,
  },

  // ───────────────────── Domain 1 · Cloud service types ─────────────────────
  {
    id: "d1-cst-iaas-vm-responsibility",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe infrastructure as a service (IaaS)",
    difficulty: "foundational",
    stem: "A provider manages the physical servers, storage, networking and virtualisation layer. The customer installs the operating system, middleware and application on the rented infrastructure. Which cloud service type is this?",
    options: [
      ["a", "Software as a service (SaaS)"],
      ["b", "Platform as a service (PaaS)"],
      ["c", "Infrastructure as a service (IaaS)"],
      ["d", "Functions as a service (FaaS)"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "IaaS gives the customer the most responsibility and control: the provider runs the physical infrastructure and hypervisor, while the customer manages the operating system and everything above it.",
    optionExplanations: {
      a: "Incorrect. SaaS delivers a finished application; the customer manages nothing but their data and settings.",
      b: "Incorrect. In PaaS the platform (including the OS runtime) is managed by the provider.",
      c: "Correct. Renting raw compute with the customer managing the OS is IaaS.",
      d: "Incorrect. FaaS/serverless abstracts away even more infrastructure than PaaS.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud service types",
    sourceUrl: SOURCES.cloudServiceTypes,
  },
  {
    id: "d1-cst-saas-email",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe software as a service (SaaS)",
    difficulty: "foundational",
    stem: "A company's staff use a cloud-hosted email application. The provider maintains the servers, runtime, application updates and availability, and staff simply sign in and use it. Which service type is this?",
    options: [
      ["a", "IaaS"],
      ["b", "PaaS"],
      ["c", "SaaS"],
      ["d", "On-premises"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "SaaS is a complete application delivered over the internet, with the provider responsible for virtually the entire stack. Users only manage their data and basic settings.",
    optionExplanations: {
      a: "Incorrect. IaaS rents infrastructure the customer builds upon — not a finished application.",
      b: "Incorrect. PaaS hosts the customer's own applications on a managed platform.",
      c: "Correct. A fully managed application consumed by end users is SaaS.",
      d: "Incorrect. On-premises means the organisation runs everything itself.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud service types",
    sourceUrl: SOURCES.cloudServiceTypes,
  },
  {
    id: "d1-cst-paas-webapp",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe platform as a service (PaaS)",
    difficulty: "foundational",
    stem: "A development team publishes a web application to a managed hosting service. They control their code and application configuration, but never see or patch the underlying virtual machines or operating system. Which service type are they using?",
    options: [
      ["a", "PaaS"],
      ["b", "IaaS"],
      ["c", "SaaS"],
      ["d", "On-premises hosting"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "PaaS provides a managed platform for building and deploying applications: the provider handles the infrastructure and OS, and the developer focuses on code and configuration.",
    optionExplanations: {
      a: "Correct. Deploying your own application without managing VMs or OS is the classic PaaS pattern.",
      b: "Incorrect. With IaaS the customer would be patching the OS themselves.",
      c: "Incorrect. SaaS is a finished third-party application, not a place to deploy your own code.",
      d: "Incorrect. On-premises means the team runs the servers themselves.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud service types",
    sourceUrl: SOURCES.cloudServiceTypes,
  },
  {
    id: "d1-cst-iaas-use-case",
    topicId: "d1-cloud-service-types",
    skillObjective:
      "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
    difficulty: "intermediate",
    stem: "Which workload is the most appropriate use case for IaaS?",
    options: [
      [
        "a",
        "A custom application that needs a specifically configured operating system and full control over networking and middleware",
      ],
      ["b", "A department that just wants to use a ready-made email application"],
      ["c", "A microservice that should scale to zero and run only when triggered by events"],
      ["d", "A simple blog the owner wants with zero infrastructure decisions"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "IaaS suits workloads needing maximum control — custom OS configuration, networking and middleware. The trade-off is that the customer takes on more management responsibility.",
    optionExplanations: {
      a: "Correct. Full control over OS and middleware is exactly what IaaS provides.",
      b: "Incorrect. A ready-made application is SaaS.",
      c: "Incorrect. Event-driven scale-to-zero workloads fit serverless (FaaS), not IaaS.",
      d: "Incorrect. Zero-decision publishing is a SaaS or simple PaaS scenario.",
    },
    sourceLabel: "Microsoft Learn — Describe cloud service types",
    sourceUrl: SOURCES.cloudServiceTypes,
  },

  // ─────────────── Domain 2 · Core architectural components of Azure ───────────────
  {
    id: "d2-arch-region-pairs",
    topicId: "d2-core-architecture",
    skillObjective: "Describe Azure regions, region pairs, and sovereign regions",
    difficulty: "intermediate",
    stem: "Which statement correctly describes Azure region pairs?",
    options: [
      [
        "a",
        "Each Azure region is paired with another region within the same geography, and platform updates are rolled out to one region of the pair at a time",
      ],
      [
        "b",
        "Each Azure region is paired with a region in a different geography for legal isolation",
      ],
      ["c", "Region pairs are only available for sovereign regions such as Azure Government"],
      ["d", "A region pair shares the same physical datacenter for faster replication"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Every Azure region is paired with another region within the same geography (typically at least 300 miles apart). Pairing supports high availability and disaster recovery: updates are deployed to one region at a time and some platform-replicated services keep data within the geography.",
    optionExplanations: {
      a: "Correct. Same-geography pairing and staggered update rollouts are defining characteristics of region pairs.",
      b: "Incorrect. Pairs are within the same geography, not across different geographies.",
      c: "Incorrect. Sovereign regions are a separate concept; standard regions are also paired.",
      d: "Incorrect. Pair members are geographically distant to reduce correlated failure risk.",
    },
    sourceLabel: "Microsoft Learn — Azure regions overview",
    sourceUrl: SOURCES.regionsOverview,
  },
  {
    id: "d2-arch-availability-zones",
    topicId: "d2-core-architecture",
    skillObjective: "Describe availability zones",
    difficulty: "foundational",
    stem: "What is an availability zone in Azure?",
    options: [
      ["a", "A separate Azure geography used for data residency"],
      [
        "b",
        "Physically separate datacenter areas within a single Azure region, each with independent power, cooling and networking",
      ],
      ["c", "A logical grouping of subscriptions for billing"],
      ["d", "A second Azure region reserved for disaster recovery"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Availability zones are physically separate zones inside one Azure region. Each has independent infrastructure so a failure in one zone does not take down the others; spreading resources across zones supports high availability.",
    optionExplanations: {
      a: "Incorrect. Geographies are country/continent groupings, not availability zones.",
      b: "Correct. Independent, physically separate zones within a region is the definition of availability zones.",
      c: "Incorrect. Subscription grouping is management groups, not availability zones.",
      d: "Incorrect. A disaster-recovery region relates to region pairs, not availability zones.",
    },
    sourceLabel: "Microsoft Learn — Availability zones overview",
    sourceUrl: SOURCES.availabilityZones,
  },
  {
    id: "d2-arch-hierarchy",
    topicId: "d2-core-architecture",
    skillObjective:
      "Describe the hierarchy of resource groups, subscriptions, and management groups",
    difficulty: "intermediate",
    stem: "Which sequence shows the Azure resource hierarchy from the largest scope down to an individual resource?",
    options: [
      ["a", "Subscription → Management group → Resource group → Resource"],
      ["b", "Management group → Subscription → Resource group → Resource"],
      ["c", "Resource group → Management group → Subscription → Resource"],
      ["d", "Management group → Resource group → Subscription → Resource"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Management groups sit at the top and organise subscriptions; subscriptions contain resource groups; resource groups are logical containers holding individual resources.",
    optionExplanations: {
      a: "Incorrect. Management groups are above subscriptions, not below them.",
      b: "Correct. Management groups contain subscriptions, which contain resource groups, which contain resources.",
      c: "Incorrect. Resource groups cannot contain management groups or subscriptions.",
      d: "Incorrect. Resource groups belong to subscriptions, not to management groups directly.",
    },
    sourceLabel: "Microsoft Learn — Azure Resource Manager overview",
    sourceUrl: SOURCES.armOverview,
  },
  {
    id: "d2-arch-resource-group",
    topicId: "d2-core-architecture",
    skillObjective: "Describe Azure resources and resource groups",
    difficulty: "foundational",
    stem: "What is an Azure resource group?",
    options: [
      ["a", "A physical rack of servers in a datacenter that hosts your VMs"],
      ["b", "A logical container that holds related Azure resources that share the same lifecycle"],
      ["c", "A billing account that can contain multiple subscriptions"],
      ["d", "A network security boundary that blocks all inbound traffic by default"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "A resource group is a logical container for resources deployed together and managed with a shared lifecycle — it can be created, updated or deleted as a unit. It is a management construct, not a physical or network construct.",
    optionExplanations: {
      a: "Incorrect. Resource groups are logical, not physical hardware groupings.",
      b: "Correct. A logical container for related resources with a shared lifecycle is a resource group.",
      c: "Incorrect. Billing accounts and subscriptions are different hierarchy levels.",
      d: "Incorrect. Traffic filtering is handled by network security groups.",
    },
    sourceLabel: "Microsoft Learn — Azure Resource Manager overview",
    sourceUrl: SOURCES.armOverview,
  },
  {
    id: "d2-arch-subscription",
    topicId: "d2-core-architecture",
    skillObjective: "Describe subscriptions",
    difficulty: "foundational",
    stem: "What does an Azure subscription provide?",
    options: [
      [
        "a",
        "A unit of billing and management: it defines which Azure resources can be provisioned and how they are paid for",
      ],
      ["b", "A free tier of services for students only"],
      ["c", "A virtual network that automatically spans all Azure regions"],
      ["d", "An identity store for user accounts and groups"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Each subscription links to an account and billing arrangement and is the scope within which resources are provisioned and managed. Organisations use multiple subscriptions to separate environments, cost centres or access boundaries.",
    optionExplanations: {
      a: "Correct. Billing and provisioning scope is exactly what a subscription provides.",
      b: "Incorrect. Free tiers exist within subscriptions; a subscription is not a student offer.",
      c: "Incorrect. Virtual networks are resources created inside a subscription.",
      d: "Incorrect. The identity store is Microsoft Entra ID, not a subscription.",
    },
    sourceLabel: "Microsoft Learn — Azure Resource Manager overview",
    sourceUrl: SOURCES.armOverview,
  },
  {
    id: "d2-arch-datacenters",
    topicId: "d2-core-architecture",
    skillObjective: "Describe Azure datacenters",
    difficulty: "foundational",
    stem: "How do Azure datacenters relate to Azure regions?",
    options: [
      [
        "a",
        "Each region is a single datacenter, and every datacenter belongs to exactly one subscription",
      ],
      [
        "b",
        "A region is made up of one or more datacenters connected through a low-latency network within the region",
      ],
      ["c", "Datacenters exist only in availability zones and cannot be part of a plain region"],
      ["d", "Each datacenter is managed independently by the customer who deploys there"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure region is a set of datacenters deployed within a defined perimeter and connected by a dedicated regional low-latency network. Datacenters are the physical facilities; regions group and expose them as one deployment area.",
    optionExplanations: {
      a: "Incorrect. Regions can contain multiple datacenters, and datacenters are not tied to subscriptions.",
      b: "Correct. Regions group one or more datacenters connected by a regional low-latency network.",
      c: "Incorrect. Availability zones are made of datacenters within a region, not the other way round.",
      d: "Incorrect. Microsoft operates the datacenters; customers deploy resources, not facilities.",
    },
    sourceLabel: "Official study guide — Azure datacenters (source link pending verification)",
    sourceUrl: null,
    reviewStatus: "needs-verification",
  },

  // ─────────────── Domain 2 · Compute and networking services ───────────────
  {
    id: "d2-cn-containers-vs-vms",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "Which statement correctly compares containers with virtual machines?",
    options: [
      [
        "a",
        "Containers require a full guest operating system per instance, while VMs share the host kernel",
      ],
      [
        "b",
        "Containers share the host operating system and start faster with less overhead, while VMs include their own OS",
      ],
      ["c", "Containers can only run on Windows, while VMs can run any operating system"],
      ["d", "VMs are always cheaper than containers for every workload"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Containers virtualise at the OS level and share the host kernel, making them lightweight and fast to start. Virtual machines virtualise hardware and each carries its own complete guest operating system, giving stronger isolation.",
    optionExplanations: {
      a: "Incorrect. This is reversed — VMs carry full guest operating systems; containers share the host OS.",
      b: "Correct. Shared host OS, faster startup and lower overhead are the core container advantages.",
      c: "Incorrect. Containers run on both Linux and Windows hosts.",
      d: "Incorrect. Cost depends on the workload; there is no universal rule that VMs are cheaper.",
    },
    sourceLabel: "Microsoft Learn — Azure Container Instances overview",
    sourceUrl: SOURCES.containerInstances,
  },
  {
    id: "d2-cn-availability-set",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "A customer wants their virtual machines distributed across separate fault and update domains within a single datacenter so that hardware failures and planned maintenance do not take all VMs down at once. Which VM option should they choose?",
    options: [
      ["a", "Azure Virtual Machine Scale Sets"],
      ["b", "An availability set"],
      ["c", "Azure Virtual Desktop"],
      ["d", "Azure Functions"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Availability sets spread VMs across fault domains (separate power and network) and update domains (staggered maintenance) within a datacenter, protecting against localized failures and host maintenance.",
    optionExplanations: {
      a: "Incorrect. Scale sets are for running groups of identical, auto-scaling VMs — the distribution described here is the availability set's job.",
      b: "Correct. Fault domains and update domains within a datacenter are exactly what an availability set provides.",
      c: "Incorrect. Azure Virtual Desktop delivers user desktops, not VM failure isolation.",
      d: "Incorrect. Azure Functions is serverless compute, unrelated to VM placement.",
    },
    sourceLabel: "Microsoft Learn — Availability sets overview",
    sourceUrl: SOURCES.availabilitySet,
  },
  {
    id: "d2-cn-functions-event-driven",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which Azure compute service is designed to run event-triggered code without provisioning any servers, scaling automatically and stopping billing when idle?",
    options: [
      ["a", "Azure Virtual Machines"],
      ["b", "Azure Virtual Machine Scale Sets"],
      ["c", "Azure Functions"],
      ["d", "Azure Virtual Desktop"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Functions is Azure's serverless compute option: code runs in response to events (HTTP requests, timers, queue messages), scales automatically and uses consumption-based billing.",
    optionExplanations: {
      a: "Incorrect. Virtual Machines require you to provision and manage server instances.",
      b: "Incorrect. Scale Sets still require managing a group of VM instances.",
      c: "Correct. Event-driven, serverless, auto-scaling execution defines Azure Functions.",
      d: "Incorrect. Azure Virtual Desktop provides desktop experiences for users.",
    },
    sourceLabel: "Microsoft Learn — Azure Functions overview",
    sourceUrl: SOURCES.functions,
  },
  {
    id: "d2-cn-vnet-peering",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "Which feature lets two Azure virtual networks in different regions connect with each other privately, so traffic between them travels over the Microsoft backbone network?",
    options: [
      ["a", "Azure VPN Gateway"],
      ["b", "Virtual network peering"],
      ["c", "Azure DNS"],
      ["d", "A network security group"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Virtual network peering connects VNets (including across regions with global peering) through the Microsoft backbone, keeping inter-VNet traffic private without transiting the public internet.",
    optionExplanations: {
      a: "Incorrect. VPN Gateway connects networks over encrypted tunnels across the public internet.",
      b: "Correct. Peering provides private VNet-to-VNet traffic over the Microsoft backbone.",
      c: "Incorrect. Azure DNS handles name resolution, not VNet connectivity.",
      d: "Incorrect. Network security groups filter traffic; they do not link networks.",
    },
    sourceLabel: "Microsoft Learn — Azure Virtual Network overview",
    sourceUrl: SOURCES.vnetOverview,
  },
  {
    id: "d2-cn-expressroute",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "An organisation needs a private, dedicated connection between its on-premises network and Azure where traffic does not travel over the public internet at all. Which option matches this requirement?",
    options: [
      ["a", "Azure VPN Gateway over the public internet"],
      ["b", "Azure DNS"],
      ["c", "ExpressRoute"],
      ["d", "Azure Virtual Desktop"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "ExpressRoute extends the on-premises network into Microsoft cloud services over a private connection provided by a connectivity partner — traffic never crosses the public internet, unlike a site-to-site VPN.",
    optionExplanations: {
      a: "Incorrect. A VPN Gateway tunnels encrypted traffic across the public internet.",
      b: "Incorrect. Azure DNS provides domain name resolution.",
      c: "Correct. ExpressRoute is a private, dedicated connectivity option that bypasses the public internet.",
      d: "Incorrect. Azure Virtual Desktop is a desktop virtualisation service.",
    },
    sourceLabel: "Microsoft Learn — ExpressRoute introduction",
    sourceUrl: SOURCES.expressRoute,
  },
  {
    id: "d2-cn-private-endpoint",
    topicId: "d2-compute-networking",
    skillObjective: "Define public and private endpoints",
    difficulty: "advanced",
    stem: "What is the difference between a public endpoint and a private endpoint for an Azure service?",
    options: [
      [
        "a",
        "A public endpoint resolves to a public IP reachable from the internet, while a private endpoint assigns the service a private IP address inside your virtual network",
      ],
      [
        "b",
        "A public endpoint is faster; a private endpoint adds a separate subscription fee per request",
      ],
      [
        "c",
        "A private endpoint exposes the service on the internet with a shared secret, while a public endpoint requires VPN",
      ],
      ["d", "There is no difference — both terms describe the same connection string"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "A private endpoint uses Azure Private Link to place a network interface with a private IP from your VNet in front of the service, so traffic stays on the private network. The public endpoint is the service's default, internet-reachable address.",
    optionExplanations: {
      a: "Correct. Public IP over the internet versus private IP inside your VNet is the key distinction.",
      b: "Incorrect. The difference is network exposure, not pricing per request.",
      c: "Incorrect. That description is backwards and mixes in unrelated concepts.",
      d: "Incorrect. The two endpoint types are distinct network access paths.",
    },
    sourceLabel: "Microsoft Learn — Private endpoint overview",
    sourceUrl: SOURCES.privateEndpoint,
  },

  // ─────────────── Domain 2 · Storage services ───────────────
  {
    id: "d2-st-blob-vs-files",
    topicId: "d2-storage",
    skillObjective: "Compare Azure Storage services",
    difficulty: "foundational",
    stem: "A team needs to store massive amounts of unstructured data such as images, backups and log files. Which Azure Storage service fits best?",
    options: [
      ["a", "Azure Files"],
      ["b", "Azure Blob Storage"],
      ["c", "Azure Queue Storage"],
      ["d", "Azure managed disks"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Blob Storage is optimised for enormous amounts of unstructured object data — images, documents, backups and logs — accessed over HTTP(S) with REST or SDK tooling.",
    optionExplanations: {
      a: "Incorrect. Azure Files provides managed SMB/NFS file shares, not massive object storage.",
      b: "Correct. Unstructured object data at scale is exactly Blob Storage's purpose.",
      c: "Incorrect. Queue Storage holds messages between application components.",
      d: "Incorrect. Managed disks attach to virtual machines as block storage.",
    },
    sourceLabel: "Microsoft Learn — Azure Storage introduction",
    sourceUrl: SOURCES.storageIntro,
  },
  {
    id: "d2-st-access-tiers",
    topicId: "d2-storage",
    skillObjective: "Describe storage tiers",
    difficulty: "intermediate",
    stem: "Compliance data must be retained for seven years, is almost never read, and retrieval latency of hours is acceptable. Which blob access tier minimises storage cost?",
    options: [
      ["a", "Hot tier"],
      ["b", "Cool tier"],
      ["c", "Archive tier"],
      ["d", "Premium tier"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "The archive tier stores data offline at the lowest cost, with rehydration taking hours. It suits rarely accessed data where retrieval delay is acceptable.",
    optionExplanations: {
      a: "Incorrect. The hot tier has the highest storage price and the lowest access cost — wrong for rarely read data.",
      b: "Incorrect. The cool tier is for infrequently accessed data, but still costs more than archive.",
      c: "Correct. Lowest storage cost with hours-long retrieval is the archive tier.",
      d: "Incorrect. Premium is a high-performance tier, the opposite of cost-minimising for cold data.",
    },
    sourceLabel: "Microsoft Learn — Blob access tiers overview",
    sourceUrl: SOURCES.accessTiers,
  },
  {
    id: "d2-st-redundancy-zrs",
    topicId: "d2-storage",
    skillObjective: "Describe redundancy options",
    difficulty: "intermediate",
    stem: "Which redundancy option keeps a storage account's data synchronously replicated across three availability zones in the primary region?",
    options: [
      ["a", "Locally redundant storage (LRS)"],
      ["b", "Zone-redundant storage (ZRS)"],
      ["c", "Geo-redundant storage (GRS)"],
      ["d", "No replication option works within a single region"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "ZRS replicates synchronously across three availability zones in the primary region, protecting against zonal failure. LRS copies within one zone, and GRS adds a secondary region copy.",
    optionExplanations: {
      a: "Incorrect. LRS copies data within a single physical location in one zone.",
      b: "Correct. Synchronous replication across three zones in the primary region is ZRS.",
      c: "Incorrect. GRS replicates asynchronously to a paired secondary region.",
      d: "Incorrect. ZRS does exactly this within a single region.",
    },
    sourceLabel: "Microsoft Learn — Azure Storage redundancy",
    sourceUrl: SOURCES.storageRedundancy,
  },
  {
    id: "d2-st-azcopy",
    topicId: "d2-storage",
    skillObjective:
      "Identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync",
    difficulty: "foundational",
    stem: "Which tool is a command-line utility designed to copy data to and from Azure Blob and File storage for simple scripting and one-off transfers?",
    options: [
      ["a", "Azure File Sync"],
      ["b", "AzCopy"],
      ["c", "Azure Migrate"],
      ["d", "Azure Monitor"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "AzCopy is a command-line tool built for scripted, high-performance copy operations to and from Azure Blob and File storage.",
    optionExplanations: {
      a: "Incorrect. Azure File Sync centralises an on-premises Windows file server with Azure Files; it is not a copy utility.",
      b: "Correct. AzCopy is the command-line copy tool for Azure Storage.",
      c: "Incorrect. Azure Migrate is a platform for assessing and migrating whole servers and databases.",
      d: "Incorrect. Azure Monitor is a monitoring service.",
    },
    sourceLabel: "Microsoft Learn — AzCopy v10",
    sourceUrl: SOURCES.azCopy,
  },
  {
    id: "d2-st-databox",
    topicId: "d2-storage",
    skillObjective: "Describe migration options, including Azure Migrate and Azure Data Box",
    difficulty: "foundational",
    stem: "An organisation has roughly 80 TB of data to import into Azure, but the available network link is slow and unreliable. Which migration option suits this scenario?",
    options: [
      [
        "a",
        "Azure Data Box — a physical device shipped to the site, filled with data, and returned to Microsoft for import",
      ],
      ["b", "Azure Migrate assessment only"],
      ["c", "Uploading the data over the network with Azure File Sync"],
      ["d", "AzCopy over the WAN, retrying until complete"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Data Box is an offline bulk-transfer appliance: Microsoft ships the device, the customer fills it and ships it back, and the data is imported into Azure without burdening the network.",
    optionExplanations: {
      a: "Correct. Physical appliance transfer is designed exactly for large datasets over constrained networks.",
      b: "Incorrect. Azure Migrate assesses and migrates servers, but its assessment alone does not move bulk data.",
      c: "Incorrect. File Sync continuously syncs a file server; it still depends on the network.",
      d: "Incorrect. With 80 TB over a slow, unreliable link, network transfer would be impractical — that is the problem Data Box solves.",
    },
    sourceLabel: "Microsoft Learn — Azure Data Box overview",
    sourceUrl: SOURCES.dataBox,
  },

  // ─────────────── Domain 2 · Identity, access, and security ───────────────
  {
    id: "d2-is-entra-id",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "foundational",
    stem: "What is Microsoft Entra ID?",
    options: [
      [
        "a",
        "A cloud-based identity and access management service that provides directory services, authentication and access control for Azure and other applications",
      ],
      ["b", "A physical firewall appliance installed in Azure datacenters"],
      ["c", "A virtual networking service that replaces the need for subnets"],
      ["d", "A monitoring tool that audits network latency"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Microsoft Entra ID is Azure's cloud directory service: it manages user identities, authenticates sign-ins and controls access to applications and resources, including every Azure subscription.",
    optionExplanations: {
      a: "Correct. Cloud identity and access management — directory, authentication, access control — is Entra ID.",
      b: "Incorrect. Entra ID is a service, not an appliance.",
      c: "Incorrect. Virtual networking is unrelated to the identity directory.",
      d: "Incorrect. Entra ID is not a monitoring tool.",
    },
    sourceLabel: "Microsoft Learn — What is Microsoft Entra ID?",
    sourceUrl: SOURCES.entraWhatIs,
  },
  {
    id: "d2-is-mfa",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "foundational",
    stem: "Which authentication approach strengthens sign-in by requiring a user to provide a password plus an approval from an authenticator app?",
    options: [
      ["a", "Single sign-on (SSO)"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "Passwordless authentication"],
      ["d", "Role-based access control (RBAC)"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "MFA requires two or more verification elements — something you know, something you have, something you are. Password plus authenticator-app approval combines two of them.",
    optionExplanations: {
      a: "Incorrect. SSO lets one identity sign in to many applications; it does not add verification elements.",
      b: "Correct. Combining a password with an app approval is classic MFA.",
      c: "Incorrect. Passwordless replaces the password entirely rather than pairing it with a second factor.",
      d: "Incorrect. RBAC authorises what an identity may do after authentication.",
    },
    sourceLabel: "Microsoft Learn — How MFA works",
    sourceUrl: SOURCES.mfaHowItWorks,
  },
  {
    id: "d2-is-conditional-access",
    topicId: "d2-identity-security",
    skillObjective: "Describe Microsoft Entra Conditional Access",
    difficulty: "intermediate",
    stem: "Which capability applies if-then policy decisions to sign-ins — for example, requiring MFA when a user signs in from an untrusted location or an unmanaged device?",
    options: [
      ["a", "Azure Policy"],
      ["b", "Microsoft Entra Conditional Access"],
      ["c", "Azure Resource Locks"],
      ["d", "Microsoft Defender for Cloud"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Conditional Access evaluates signals (user, device, location, risk) at sign-in and enforces decisions such as requiring MFA, blocking access, or demanding a compliant device.",
    optionExplanations: {
      a: "Incorrect. Azure Policy governs resource properties, not user sign-ins.",
      b: "Correct. Signal-driven if-then access decisions at sign-in are Conditional Access.",
      c: "Incorrect. Resource locks protect resources from deletion or modification.",
      d: "Incorrect. Defender for Cloud provides security posture management and threat protection.",
    },
    sourceLabel: "Microsoft Learn — Conditional Access overview",
    sourceUrl: SOURCES.conditionalAccess,
  },
  {
    id: "d2-is-rbac",
    topicId: "d2-identity-security",
    skillObjective: "Describe Azure role-based access control (RBAC)",
    difficulty: "foundational",
    stem: "What does Azure role-based access control (RBAC) govern?",
    options: [
      ["a", "Which password complexity rules apply to user accounts"],
      [
        "b",
        "Which actions a security principal can perform on which Azure resources, at which scope",
      ],
      ["c", "Which traffic is allowed through a virtual network firewall"],
      ["d", "Which devices may enrol in mobile device management"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure RBAC assigns role definitions to identities (users, groups, service principals) at a scope (management group, subscription, resource group or resource), controlling the actions they can take on resources.",
    optionExplanations: {
      a: "Incorrect. Password policy is an Entra ID setting, not RBAC.",
      b: "Correct. Who can do what, on which resources, at which scope — that is RBAC.",
      c: "Incorrect. Traffic filtering is network security (NSGs, firewalls), not RBAC.",
      d: "Incorrect. Device enrolment is an endpoint-management concept.",
    },
    sourceLabel: "Microsoft Learn — Azure RBAC overview",
    sourceUrl: SOURCES.rbacOverview,
  },
  {
    id: "d2-is-zero-trust",
    topicId: "d2-identity-security",
    skillObjective: "Describe the concept of Zero Trust",
    difficulty: "intermediate",
    stem: "Which set of principles describes the Zero Trust model?",
    options: [
      ["a", "Trust everything inside the corporate network and only verify external traffic"],
      ["b", "Verify explicitly, use least-privilege access, and assume breach"],
      ["c", "Encrypt only data in transit between datacenters"],
      ["d", "Give every authenticated user administrator rights to reduce support tickets"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Zero Trust removes implicit trust: every request is verified explicitly (identity, device, location), access is least-privilege (just enough, just-in-time), and the design assumes breach by segmenting and limiting blast radius.",
    optionExplanations: {
      a: "Incorrect. That is the traditional perimeter model Zero Trust replaces — internal location grants no trust.",
      b: "Correct. Verify explicitly, least privilege, assume breach are the three Zero Trust principles.",
      c: "Incorrect. Encryption scope is far too narrow to define Zero Trust.",
      d: "Incorrect. Broad admin rights violate least privilege, the opposite of Zero Trust.",
    },
    sourceLabel: "Microsoft Learn — Zero Trust model",
    sourceUrl: SOURCES.zeroTrust,
  },
  {
    id: "d2-is-defense-in-depth",
    topicId: "d2-identity-security",
    skillObjective: "Describe the purpose of the defense-in-depth model",
    difficulty: "foundational",
    stem: "What is the purpose of the defense-in-depth model?",
    options: [
      [
        "a",
        "To concentrate all security spending on the strongest possible single perimeter firewall",
      ],
      [
        "b",
        "To layer multiple security controls at each level so that a failure at one layer does not compromise the whole system",
      ],
      ["c", "To outsource all security controls to the cloud provider"],
      ["d", "To replace identity management with network segmentation alone"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Defense in depth applies successive layers of protection — physical, identity, perimeter, network, compute, application, data — so an attacker defeating one layer still meets the next.",
    optionExplanations: {
      a: "Incorrect. A single point of protection is the opposite of the layered model.",
      b: "Correct. Layered controls at every level, so no single failure is fatal, is defense in depth.",
      c: "Incorrect. Security responsibility is shared, not fully outsourced.",
      d: "Incorrect. Identity is one of the layers; segmentation alone cannot replace it.",
    },
    sourceLabel: "Microsoft Learn — Azure security fundamentals",
    sourceUrl: SOURCES.securityFundamentals,
  },
  {
    id: "d2-is-defender-for-cloud",
    topicId: "d2-identity-security",
    skillObjective: "Describe the purpose of Microsoft Defender for Cloud",
    difficulty: "intermediate",
    stem: "Which service provides a dashboard for security posture management, secure-score recommendations, and workload threat protection across Azure, on-premises and other clouds?",
    options: [
      ["a", "Microsoft Defender for Cloud"],
      ["b", "Azure Advisor"],
      ["c", "Microsoft Entra ID"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Defender for Cloud is a posture-management and workload-protection tool: it assesses resources against security best practices, produces a secure score with recommendations, and detects threats.",
    optionExplanations: {
      a: "Correct. Security posture management plus threat protection across clouds defines Defender for Cloud.",
      b: "Incorrect. Advisor recommends best practices for cost, reliability and operations — not security threat protection.",
      c: "Incorrect. Entra ID is the identity directory service.",
      d: "Incorrect. Service Health reports Azure platform incidents.",
    },
    sourceLabel: "Microsoft Learn — Defender for Cloud introduction",
    sourceUrl: SOURCES.defenderForCloud,
  },

  // ─────────────── Domain 3 · Cost management ───────────────
  {
    id: "d3-cost-factors",
    topicId: "d3-cost-management",
    skillObjective: "Describe factors that can affect costs in Azure",
    difficulty: "foundational",
    stem: "Which factor most directly affects the running cost of an Azure virtual machine?",
    options: [
      ["a", "The name given to the resource group it lives in"],
      ["b", "Its size (vCPUs and memory) and the region it is deployed in"],
      ["c", "The number of tags applied to it"],
      ["d", "The colour theme selected in the Azure portal"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "VM pricing is driven primarily by the size (compute capacity) and the region (regional pricing differs). Software licensing and running hours also matter, but size and region are the dominant factors.",
    optionExplanations: {
      a: "Incorrect. Resource group names have no pricing impact.",
      b: "Correct. Pricing is calculated from the VM size and its region.",
      c: "Incorrect. Tags are free metadata used for organisation and cost tracking.",
      d: "Incorrect. Portal appearance settings do not affect billing.",
    },
    sourceLabel: "Microsoft Learn — Cost Management and Billing overview",
    sourceUrl: SOURCES.costManagement,
  },
  {
    id: "d3-cost-pricing-calculator",
    topicId: "d3-cost-management",
    skillObjective: "Explore the pricing calculator",
    difficulty: "foundational",
    stem: "Which tool should be used to estimate the expected monthly cost of a planned Azure workload before it is ever deployed?",
    options: [
      ["a", "Azure Advisor"],
      ["b", "The Azure pricing calculator"],
      ["c", "Azure Monitor"],
      ["d", "Azure Service Health"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "The pricing calculator lets you configure services and options to estimate costs before deployment, so budgets can be planned in advance.",
    optionExplanations: {
      a: "Incorrect. Advisor gives best-practice recommendations for resources that already exist.",
      b: "Correct. Pre-deployment cost estimates come from the pricing calculator.",
      c: "Incorrect. Azure Monitor collects telemetry from running services.",
      d: "Incorrect. Service Health reports platform incidents and maintenance.",
    },
    sourceLabel: "Azure — Pricing calculator",
    sourceUrl: SOURCES.pricingCalculator,
  },
  {
    id: "d3-cost-cost-management",
    topicId: "d3-cost-management",
    skillObjective: "Describe cost management capabilities in Azure",
    difficulty: "intermediate",
    stem: "After deployment, where can a team analyse historical spending, create budgets and set alerts when costs approach a threshold?",
    options: [
      ["a", "Azure Cost Management"],
      ["b", "Azure Resource Manager templates"],
      ["c", "The Azure pricing calculator"],
      ["d", "Azure Cloud Shell"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cost Management analyses actual and forecast spend, supports budgets with alert conditions, and can export cost data — it is the tool for ongoing cost control after deployment.",
    optionExplanations: {
      a: "Correct. Spend analysis, budgets and alerts after deployment are Cost Management capabilities.",
      b: "Incorrect. ARM templates deploy resources; they do not analyse spend.",
      c: "Incorrect. The pricing calculator estimates future costs before deployment.",
      d: "Incorrect. Cloud Shell is a command-line environment for managing resources.",
    },
    sourceLabel: "Microsoft Learn — Cost Management and Billing overview",
    sourceUrl: SOURCES.costManagement,
  },
  {
    id: "d3-cost-tags",
    topicId: "d3-cost-management",
    skillObjective: "Describe the purpose of tags",
    difficulty: "foundational",
    stem: "What is the primary purpose of applying tags to Azure resources?",
    options: [
      [
        "a",
        "To organise resources with metadata such as cost centre, environment or owner, supporting cost tracking and governance",
      ],
      ["b", "To encrypt the resource's data at rest"],
      ["c", "To assign public IP addresses automatically"],
      ["d", "To restrict which regions the resource can be moved to"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Tags are metadata key/value pairs applied to resources, enabling organised billing reports, grouping, automation and policy compliance — for example tagging by cost centre to track spend.",
    optionExplanations: {
      a: "Correct. Metadata for organisation, cost reporting and governance is what tags provide.",
      b: "Incorrect. Encryption is a security setting, not a tag function.",
      c: "Incorrect. IP addressing is a networking task.",
      d: "Incorrect. Movement restrictions are handled by policy and locks, not tags.",
    },
    sourceLabel: "Microsoft Learn — Tag resources",
    sourceUrl: SOURCES.tagResources,
  },

  // ─────────────── Domain 3 · Governance and compliance ───────────────
  {
    id: "d3-gov-azure-policy",
    topicId: "d3-governance-compliance",
    skillObjective: "Describe the purpose of Azure Policy",
    difficulty: "intermediate",
    stem: "An organisation wants to automatically prevent the creation of virtual machines in unapproved regions and audit resources missing required tags. Which service provides this?",
    options: [
      ["a", "Azure Policy"],
      ["b", "Azure RBAC"],
      ["c", "Azure Monitor"],
      ["d", "Azure Advisor"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Policy defines and enforces rules over resource properties — allowed regions, required tags, permitted SKU sizes — and can deny non-compliant creation while auditing existing resources.",
    optionExplanations: {
      a: "Correct. Enforcing organisational standards over resource properties is Azure Policy's purpose.",
      b: "Incorrect. RBAC controls who may take actions, not what resource properties are allowed.",
      c: "Incorrect. Azure Monitor collects telemetry and logs.",
      d: "Incorrect. Advisor makes recommendations but does not enforce rules.",
    },
    sourceLabel: "Microsoft Learn — Azure Policy overview",
    sourceUrl: SOURCES.policyOverview,
  },
  {
    id: "d3-gov-purview",
    topicId: "d3-governance-compliance",
    skillObjective: "Describe the purpose of Microsoft Purview in Azure",
    difficulty: "intermediate",
    stem: "What is the purpose of Microsoft Purview in the Azure data estate?",
    options: [
      [
        "a",
        "To automatically catalogue, classify and govern data across on-premises and cloud sources",
      ],
      ["b", "To block all inbound internet traffic to a virtual network"],
      ["c", "To compress storage blobs to reduce tier costs"],
      ["d", "To deploy ARM templates across subscriptions"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Purview provides unified data governance: it scans and catalogues data sources, classifies sensitive data and maps data lineage so organisations can manage and protect their data estate.",
    optionExplanations: {
      a: "Correct. Data cataloguing, classification and governance across sources is Purview's role.",
      b: "Incorrect. Traffic filtering is a networking security function.",
      c: "Incorrect. Purview does not compress or re-tier storage.",
      d: "Incorrect. Deploying templates is the job of Azure Resource Manager tooling.",
    },
    sourceLabel: "Microsoft Learn — Microsoft Purview overview",
    sourceUrl: SOURCES.purviewOverview,
  },
  {
    id: "d3-gov-locks",
    topicId: "d3-governance-compliance",
    skillObjective: "Describe the purpose of resource locks",
    difficulty: "foundational",
    stem: "A critical resource group is protected with a CanNotDelete lock. What happens when an administrator with full RBAC permissions tries to delete it?",
    options: [
      ["a", "The deletion succeeds because RBAC permissions override locks"],
      [
        "b",
        "The deletion is blocked until the lock is removed, even though the administrator has delete permission",
      ],
      ["c", "The deletion succeeds but data is archived first"],
      ["d", "The resource group is moved to the archive tier instead of being deleted"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Resource locks apply regardless of RBAC permissions: a CanNotDelete lock blocks deletion (and a ReadOnly lock blocks modification) until an authorised person explicitly removes the lock. Locks guard against accidental changes.",
    optionExplanations: {
      a: "Incorrect. Locks are evaluated separately from RBAC and cannot be overridden by permissions.",
      b: "Correct. The lock must be removed before deletion can proceed.",
      c: "Incorrect. Locks do not archive data.",
      d: "Incorrect. Locks have nothing to do with storage tiers.",
    },
    sourceLabel: "Microsoft Learn — Lock resources",
    sourceUrl: SOURCES.lockResources,
  },
  {
    id: "d3-gov-policy-vs-rbac",
    topicId: "d3-governance-compliance",
    skillObjective: "Describe the purpose of Azure Policy",
    difficulty: "advanced",
    stem: "A team already has full RBAC access to a subscription. Which statement best describes when Azure Policy is still needed?",
    options: [
      ["a", "Policy is redundant — RBAC permissions alone govern everything about resources"],
      [
        "b",
        "Policy controls which resource configurations are allowed — for example limiting regions or requiring tags — regardless of who performs the action",
      ],
      ["c", "Policy is only used to grant users their first permissions"],
      ["d", "Policy replaces network security groups for resource access"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "RBAC answers 'who can do what'; Azure Policy answers 'what resource configurations are allowed'. A user with full permissions can still be denied by policy if a deployment violates organisational rules.",
    optionExplanations: {
      a: "Incorrect. The two govern different things: identity actions versus resource configuration.",
      b: "Correct. Policy enforces configuration standards independently of the actor's permissions.",
      c: "Incorrect. Granting permissions is RBAC's job.",
      d: "Incorrect. NSGs filter network traffic and are unrelated to Azure Policy.",
    },
    sourceLabel: "Microsoft Learn — Azure Policy overview",
    sourceUrl: SOURCES.policyOverview,
  },

  // ─────────────── Domain 3 · Managing and deploying resources ───────────────
  {
    id: "d3-mgmt-cloud-shell",
    topicId: "d3-managing-deploying",
    skillObjective: "Describe Azure Cloud Shell, Azure CLI, and Azure PowerShell",
    difficulty: "foundational",
    stem: "Which option describes Azure Cloud Shell?",
    options: [
      [
        "a",
        "A browser-based shell with Bash or PowerShell preinstalled with Azure tooling, authenticated to your subscription",
      ],
      ["b", "A desktop application that must be installed on Windows only"],
      ["c", "A mobile app for viewing billing invoices"],
      ["d", "A template format for declaring Azure resources"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cloud Shell is an interactive, browser-accessible terminal offering Bash and PowerShell with Azure CLI and Azure PowerShell already installed and authenticated, so resources can be managed from anywhere.",
    optionExplanations: {
      a: "Correct. Browser-based Bash/PowerShell with Azure tooling authenticated to your subscription is Cloud Shell.",
      b: "Incorrect. Cloud Shell runs in the browser and requires no local installation.",
      c: "Incorrect. Billing apps are separate; Cloud Shell manages resources.",
      d: "Incorrect. Template formats are ARM templates/Bicep, not Cloud Shell.",
    },
    sourceLabel: "Microsoft Learn — Azure Cloud Shell overview",
    sourceUrl: SOURCES.cloudShell,
  },
  {
    id: "d3-mgmt-powershell-vs-cli",
    topicId: "d3-managing-deploying",
    skillObjective: "Describe Azure Cloud Shell, Azure CLI, and Azure PowerShell",
    difficulty: "intermediate",
    stem: "Which tool manages Azure resources through PowerShell cmdlets and runs on Windows, Linux and macOS?",
    options: [
      ["a", "Azure PowerShell"],
      ["b", "Azure CLI"],
      ["c", "ARM templates"],
      ["d", "The Azure Resource Manager API"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure PowerShell is a module of cmdlets (New-AzVM, Get-AzResource, …) that runs cross-platform on PowerShell 7+, distinguishing it from the Azure CLI's bash-style commands.",
    optionExplanations: {
      a: "Correct. Cmdlet-based cross-platform Azure management is Azure PowerShell.",
      b: "Incorrect. Azure CLI uses bash-style commands, not PowerShell cmdlets.",
      c: "Incorrect. ARM templates are declarative JSON files, not a shell tool.",
      d: "Incorrect. The ARM API is the underlying control plane, not a command-line tool.",
    },
    sourceLabel: "Microsoft Learn — What is Azure PowerShell?",
    sourceUrl: SOURCES.azurePowerShell,
  },
  {
    id: "d3-mgmt-arm-templates",
    topicId: "d3-managing-deploying",
    skillObjective: "Describe Azure Resource Manager (ARM) and ARM templates",
    difficulty: "intermediate",
    stem: "Which artifact declaratively describes a set of Azure resources in JSON so the same infrastructure can be deployed repeatedly and consistently?",
    options: [
      ["a", "An ARM template"],
      ["b", "An Azure Monitor workbook"],
      ["c", "A resource lock definition"],
      ["d", "A Conditional Access policy"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "ARM templates are JSON files that declaratively define the resources for a deployment. Azure Resource Manager processes them, creating or updating resources consistently and repeatably.",
    optionExplanations: {
      a: "Correct. Declarative JSON infrastructure definitions are ARM templates.",
      b: "Incorrect. Workbooks visualise monitoring data.",
      c: "Incorrect. Locks protect resources from deletion or modification.",
      d: "Incorrect. Conditional Access governs user sign-ins.",
    },
    sourceLabel: "Microsoft Learn — Azure Resource Manager overview",
    sourceUrl: SOURCES.armOverview,
  },
  {
    id: "d3-mgmt-arc",
    topicId: "d3-managing-deploying",
    skillObjective: "Describe the purpose of Azure Arc",
    difficulty: "intermediate",
    stem: "Which service extends Azure management — policy, tagging, monitoring and security — to servers and Kubernetes clusters running on-premises or in other cloud providers?",
    options: [
      ["a", "Azure Arc"],
      ["b", "Azure ExpressRoute"],
      ["c", "Azure Migrate"],
      ["d", "Azure Cost Management"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Arc projects resources outside Azure into the Azure control plane, so hybrid and multi-cloud servers and clusters can be governed with Azure Policy, tags, Defender for Cloud and Monitor.",
    optionExplanations: {
      a: "Correct. Bringing external resources under Azure management is exactly what Arc does.",
      b: "Incorrect. ExpressRoute provides private network connectivity.",
      c: "Incorrect. Azure Migrate assesses and migrates workloads into Azure.",
      d: "Incorrect. Cost Management analyses cloud spending.",
    },
    sourceLabel: "Microsoft Learn — Azure Arc overview",
    sourceUrl: SOURCES.azureArc,
  },
  {
    id: "d3-mgmt-iac",
    topicId: "d3-managing-deploying",
    skillObjective: "Describe infrastructure as code (IaC)",
    difficulty: "foundational",
    stem: "Which benefit does infrastructure as code (IaC) provide for Azure deployments?",
    options: [
      [
        "a",
        "Infrastructure definitions are written once as code, versioned and reviewed, producing consistent and repeatable deployments",
      ],
      ["b", "It guarantees the lowest possible resource cost across all regions"],
      ["c", "It removes the need for any identity management on deployed resources"],
      ["d", "It converts all deployments to happen only through the portal"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "IaC describes infrastructure in declarative code (ARM templates, Bicep, Terraform) that can be stored in source control, reviewed, and applied identically across environments, eliminating manual, error-prone configuration.",
    optionExplanations: {
      a: "Correct. Versioned, reviewed, repeatable infrastructure definitions are the core IaC benefit.",
      b: "Incorrect. IaC does not set prices or guarantee cost minimums.",
      c: "Incorrect. Identity management is still required on deployed resources.",
      d: "Incorrect. IaC is an alternative to manual portal work, not the reverse.",
    },
    sourceLabel: "Microsoft Learn — Bicep (infrastructure as code) overview",
    sourceUrl: SOURCES.bicepOverview,
  },

  // ─────────────── Domain 3 · Monitoring tools ───────────────
  {
    id: "d3-mon-advisor",
    topicId: "d3-monitoring",
    skillObjective: "Describe the purpose of Azure Advisor",
    difficulty: "foundational",
    stem: "Which service analyses deployed Azure resources and delivers personalised best-practice recommendations for cost, security, reliability and operational excellence?",
    options: [
      ["a", "Azure Advisor"],
      ["b", "Azure Service Health"],
      ["c", "Azure Monitor alerts"],
      ["d", "Azure Resource Manager"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Advisor examines your resource configuration and suggests improvements across cost, security, reliability, operational excellence and performance — personalised to your actual deployments.",
    optionExplanations: {
      a: "Correct. Personalised best-practice recommendations are Advisor's purpose.",
      b: "Incorrect. Service Health reports Azure platform incidents and maintenance.",
      c: "Incorrect. Monitor alerts notify on metrics and log conditions.",
      d: "Incorrect. Resource Manager is the deployment and management control plane.",
    },
    sourceLabel: "Microsoft Learn — Azure Advisor overview",
    sourceUrl: SOURCES.advisor,
  },
  {
    id: "d3-mon-service-health",
    topicId: "d3-monitoring",
    skillObjective: "Describe Azure Service Health",
    difficulty: "foundational",
    stem: "Where should an administrator look to find out whether an Azure platform incident or planned maintenance is currently affecting the services they use in their region?",
    options: [
      ["a", "Azure Service Health"],
      ["b", "Azure Advisor"],
      ["c", "Application Insights"],
      ["d", "Azure Policy"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Service Health provides a personalised view of Azure platform health: service issues, planned maintenance and health advisories for the services and regions the customer actually uses.",
    optionExplanations: {
      a: "Correct. Personalised platform incident and maintenance information is Service Health.",
      b: "Incorrect. Advisor gives best-practice recommendations.",
      c: "Incorrect. Application Insights monitors your application's code, not the platform.",
      d: "Incorrect. Policy enforces resource governance rules.",
    },
    sourceLabel: "Microsoft Learn — Azure Service Health overview",
    sourceUrl: SOURCES.serviceHealth,
  },
  {
    id: "d3-mon-log-analytics",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "Within Azure Monitor, which feature provides a workspace where telemetry from Azure and other sources can be queried with the Kusto Query Language (KQL)?",
    options: [
      ["a", "Log Analytics"],
      ["b", "Azure Advisor"],
      ["c", "Azure Service Health"],
      ["d", "Azure Virtual Network"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Log Analytics workspaces collect logs and metrics from Azure resources, VMs and applications, and provide the KQL query environment used for analysis and alerting.",
    optionExplanations: {
      a: "Correct. KQL querying of collected telemetry happens in Log Analytics.",
      b: "Incorrect. Advisor is a recommendation service.",
      c: "Incorrect. Service Health reports platform status.",
      d: "Incorrect. Virtual networks are a networking construct.",
    },
    sourceLabel: "Microsoft Learn — Log Analytics overview",
    sourceUrl: SOURCES.logAnalytics,
  },
  {
    id: "d3-mon-app-insights",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "intermediate",
    stem: "A developer wants to monitor the performance, failures and user experience of a web application's code, including request rates and response times. Which Azure Monitor feature fits?",
    options: [
      ["a", "Azure Monitor Application Insights"],
      ["b", "Azure Resource Manager"],
      ["c", "Azure Service Health"],
      ["d", "Azure Data Box"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Application Insights is the application performance monitoring feature of Azure Monitor: it instruments application code to collect requests, dependencies, exceptions and usage telemetry.",
    optionExplanations: {
      a: "Correct. Code-level performance, failure and usage monitoring is Application Insights.",
      b: "Incorrect. Resource Manager handles deployment and management of resources.",
      c: "Incorrect. Service Health reports platform incidents.",
      d: "Incorrect. Data Box is a physical data-transfer device.",
    },
    sourceLabel: "Microsoft Learn — Application Insights overview",
    sourceUrl: SOURCES.appInsights,
  },
  {
    id: "d3-mon-alerts",
    topicId: "d3-monitoring",
    skillObjective:
      "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
    difficulty: "foundational",
    stem: "An operations team wants to be notified automatically whenever a virtual machine's CPU usage stays above 90% for five minutes. Which Azure Monitor capability should they configure?",
    options: [
      ["a", "Azure Monitor alerts"],
      ["b", "Azure resource locks"],
      ["c", "Azure Tags"],
      ["d", "Azure Storage tiers"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Monitor alerts evaluate metrics or log queries on a schedule and trigger actions — notifications or automation — when the condition, such as sustained high CPU, is met.",
    optionExplanations: {
      a: "Correct. Threshold-based notification rules are Azure Monitor alerts.",
      b: "Incorrect. Locks prevent deletion or modification of resources.",
      c: "Incorrect. Tags organise metadata.",
      d: "Incorrect. Storage tiers control blob access cost trade-offs.",
    },
    sourceLabel: "Microsoft Learn — Azure Monitor alerts overview",
    sourceUrl: SOURCES.monitorAlerts,
  },
];

export const questions: QuizQuestion[] = [...specs.map(buildQuestion), ...batch1Questions];

/** Questions allowed in active quizzes: manually reviewed with a verified source. */
export const reviewedQuestions: QuizQuestion[] = questions.filter(
  (q) => q.reviewStatus === "reviewed" && q.sourceUrl !== null,
);

/** Questions awaiting source verification or content review. */
export const pendingQuestions: QuizQuestion[] = questions.filter(
  (q) => q.reviewStatus !== "reviewed" || q.sourceUrl === null,
);
