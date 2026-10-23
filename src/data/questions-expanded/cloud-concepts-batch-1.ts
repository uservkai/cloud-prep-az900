/**
 * CloudPrep AZ-900: Batch 1 — 30 Microsoft Learn cross-checked practice questions.
 * Created with original wording; corrected Azure VM billing ambiguity in #8.
 * The questions were documentation-reviewed on 2026-10-22.
 * Technical audit report: BATCH1_VERIFICATION_REPORT.md
 */
import type { QuizQuestion, DomainId } from "@/types/quiz";
import { topicById } from "../syllabus";

type DraftQuestion = Omit<QuizQuestion, "domainId" | "options"> & {
  options: Array<[id: string, text: string]>;
};

const drafts: DraftQuestion[] = [
  {
    id: "ai26-cc-cloud-definition",
    topicId: "d1-cloud-computing",
    skillObjective: "Define cloud computing",
    difficulty: "foundational",
    stem: "A startup wants to provision computing resources over the internet without buying its own servers. What approach is it adopting?",
    options: [
      ["a", "Cloud computing"],
      ["b", "Local-only virtualization"],
      ["c", "Colocation without managed services"],
      ["d", "Offline batch processing"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cloud computing makes computing services available over a network on demand.",
    optionExplanations: {
      a: "Correct. Cloud computing makes computing services available over a network on demand.",
      b: "Incorrect. Local virtualization alone does not mean resources are offered as internet cloud services.",
      c: "Incorrect. Colocation rents physical space rather than inherently providing on-demand cloud services.",
      d: "Incorrect. Batch processing describes workload scheduling, not a delivery model.",
    },
    sourceLabel: "Microsoft Learn — What is cloud computing",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/3-what-cloud-compute",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-public-model",
    topicId: "d1-cloud-computing",
    skillObjective: "Define cloud models, including public, private, and hybrid",
    difficulty: "foundational",
    stem: "An organization rents compute resources from a provider whose infrastructure is shared among different customers. Which cloud deployment model is described?",
    options: [
      ["a", "Private cloud"],
      ["b", "Hybrid cloud"],
      ["c", "Public cloud"],
      ["d", "Dedicated on-premises cloud"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Public cloud infrastructure is provider-operated and offered to multiple customers.",
    optionExplanations: {
      a: "Incorrect. A private cloud is dedicated to one organization.",
      b: "Incorrect. Hybrid cloud combines distinct environments.",
      c: "Correct. Public cloud infrastructure is provider-operated and offered to multiple customers.",
      d: "Incorrect. On-premises dedicated infrastructure is not the provider-shared public cloud.",
    },
    sourceLabel: "Microsoft Learn — Define cloud models",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-define-cloud-models",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-private-model",
    topicId: "d1-cloud-computing",
    skillObjective: "Identify appropriate use cases for each cloud model",
    difficulty: "intermediate",
    stem: "A research institute requires cloud-style self-service but insists its environment be dedicated exclusively to the institute. Which model best matches?",
    options: [
      ["a", "Public cloud"],
      ["b", "Private cloud"],
      ["c", "Multicloud by definition"],
      ["d", "Serverless-only environment"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "A private cloud provides a dedicated environment for one organization while retaining cloud capabilities.",
    optionExplanations: {
      a: "Incorrect. Public cloud can use shared provider infrastructure.",
      b: "Correct. A private cloud provides a dedicated environment for one organization while retaining cloud capabilities.",
      c: "Incorrect. Multicloud refers to multiple providers or environments, not exclusive tenancy.",
      d: "Incorrect. Serverless is a compute approach, not a cloud deployment model.",
    },
    sourceLabel: "Microsoft Learn — Define cloud models",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-define-cloud-models",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-shared-saas-data",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe the shared responsibility model",
    difficulty: "intermediate",
    stem: "A company uses a SaaS collaboration tool. Who must decide which employees can access confidential company documents stored in it?",
    options: [
      ["a", "The cloud provider alone"],
      ["b", "The building security contractor"],
      ["c", "The hardware manufacturer"],
      ["d", "The customer organization"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "The customer remains responsible for its data, identities, and access decisions even when using SaaS.",
    optionExplanations: {
      a: "Incorrect. The provider manages the service but cannot make all customer data-access decisions.",
      b: "Incorrect. Datacenter security contractors do not govern customer document permissions.",
      c: "Incorrect. Hardware manufacturers do not administer customer identities.",
      d: "Correct. The customer remains responsible for its data, identities, and access decisions even when using SaaS.",
    },
    sourceLabel: "Microsoft Learn — Shared responsibility model",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-shared-paas-code",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe the shared responsibility model",
    difficulty: "intermediate",
    stem: "A team deploys its own application to a managed PaaS offering. Which responsibility normally stays with the team?",
    options: [
      ["a", "Replacing physical disks"],
      ["b", "Patching hypervisor firmware"],
      ["c", "Securing its application code and data"],
      ["d", "Maintaining the datacenter cooling system"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "The customer owns its application code, configuration, and data security in PaaS.",
    optionExplanations: {
      a: "Incorrect. Hardware replacement is the provider’s task.",
      b: "Incorrect. The provider maintains the infrastructure and hypervisor.",
      c: "Correct. The customer owns its application code, configuration, and data security in PaaS.",
      d: "Incorrect. Datacenter cooling is managed by the provider.",
    },
    sourceLabel: "Microsoft Learn — Shared responsibility model",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-opex-spending",
    topicId: "d1-cloud-computing",
    skillObjective: "Compare cloud pricing models",
    difficulty: "foundational",
    stem: "A business pays a variable monthly bill tied to usage instead of buying servers in advance. Which cost classification best describes that cloud expense?",
    options: [
      ["a", "Operational expenditure"],
      ["b", "Capital expenditure on owned servers"],
      ["c", "A compulsory hardware lease"],
      ["d", "A depreciation charge on purchased equipment"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Pay-as-you-go cloud services are ordinarily treated as operating expenses.",
    optionExplanations: {
      a: "Correct. Pay-as-you-go cloud services are ordinarily treated as operating expenses.",
      b: "Incorrect. Buying owned servers represents capital investment.",
      c: "Incorrect. A hardware lease is not the defining feature of usage-based cloud billing.",
      d: "Incorrect. Depreciation concerns purchased capital assets.",
    },
    sourceLabel: "Microsoft Learn — Consumption-based cloud model",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/6-describe-consumption-based-model",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-hybrid-connectivity",
    topicId: "d1-cloud-computing",
    skillObjective: "Identify appropriate use cases for each cloud model",
    difficulty: "intermediate",
    stem: "A manufacturer wants to keep a factory-control system on site but connect it to Azure-hosted reporting services. What model supports the combination?",
    options: [
      ["a", "Only private cloud"],
      ["b", "Hybrid cloud"],
      ["c", "Only public cloud"],
      ["d", "SaaS as a deployment model"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Hybrid cloud connects on-premises and cloud resources into a combined solution.",
    optionExplanations: {
      a: "Incorrect. A private-only approach omits the Azure public-cloud component.",
      b: "Correct. Hybrid cloud connects on-premises and cloud resources into a combined solution.",
      c: "Incorrect. A public-only approach omits the on-site control system.",
      d: "Incorrect. SaaS is a service type, not the deployment model described.",
    },
    sourceLabel: "Microsoft Learn — Define cloud models",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-define-cloud-models",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-elastic-billing",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe the consumption-based model",
    difficulty: "intermediate",
    stem: "A retailer runs a temporary workload on an Azure Virtual Machine. After its promotion ends, the team stops and deallocates the VM. What happens to its compute charges?",
    options: [
      ["a", "All charges remain fixed forever"],
      ["b", "Past usage is refunded automatically"],
      [
        "c",
        "The VM compute charges stop after deallocation, although disks and certain networking resources may still incur charges",
      ],
      ["d", "The provider must buy the retailer new servers"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Deallocating an Azure VM releases its reserved compute capacity, so VM compute charges stop. Merely shutting down the guest OS can leave the VM allocated and billable. Disks and certain networking resources can still incur charges after deallocation.",
    optionExplanations: {
      a: "Incorrect. Usage charges are not necessarily fixed.",
      b: "Incorrect. Providers do not automatically refund legitimate past consumption.",
      c: "Correct. Deallocation ends VM compute charges; shutting down the guest OS alone might not. Attached storage and certain networking resources can continue to cost money.",
      d: "Incorrect. Cloud billing does not require a purchase of new customer-owned servers.",
    },
    sourceLabel: "Microsoft Learn — Azure VM states and billing",
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/states-billing",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-serverless-trigger",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe serverless",
    difficulty: "intermediate",
    stem: "A team needs code to execute whenever a new file arrives in storage without managing a server fleet. Which computing approach most directly fits?",
    options: [
      ["a", "Dedicated physical hosting"],
      ["b", "Manually operated virtual machines"],
      ["c", "Fixed-size on-premises cluster"],
      ["d", "Event-driven serverless functions"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Event-driven serverless functions run code when configured events occur with provider-managed infrastructure.",
    optionExplanations: {
      a: "Incorrect. Dedicated hosting requires more infrastructure management.",
      b: "Incorrect. VMs can process events but require substantially more management.",
      c: "Incorrect. On-premises fixed clusters are not provider-managed serverless.",
      d: "Correct. Event-driven serverless functions run code when configured events occur with provider-managed infrastructure.",
    },
    sourceLabel: "Microsoft Learn — Azure Functions overview",
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-cc-capacity-forecast",
    topicId: "d1-cloud-computing",
    skillObjective: "Describe the consumption-based model",
    difficulty: "foundational",
    stem: "Why can consumption-based cloud billing help a small company avoid provisioning for its theoretical annual traffic peak?",
    options: [
      ["a", "It guarantees all services are always free"],
      ["b", "It lets the company adjust purchased capacity closer to actual demand"],
      ["c", "It eliminates all operational spending"],
      ["d", "It requires permanent ownership of physical hardware"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "On-demand resources allow capacity to track actual workload demand rather than being purchased at peak size upfront.",
    optionExplanations: {
      a: "Incorrect. Cloud services are not all free.",
      b: "Correct. On-demand resources allow capacity to track actual workload demand rather than being purchased at peak size upfront.",
      c: "Incorrect. Cloud usage still incurs operational costs.",
      d: "Incorrect. Cloud consumption does not require owning provider hardware.",
    },
    sourceLabel: "Microsoft Learn — Consumption-based cloud model",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/6-describe-consumption-based-model",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-scale-up-out",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A database workload increases the memory and CPU allocation of one virtual machine. Which scaling action is this?",
    options: [
      ["a", "Scaling out"],
      ["b", "Geo-replication"],
      ["c", "Scaling up"],
      ["d", "Failover"],
    ],
    correctOptionId: "c",
    correctExplanation: "Scaling up increases the capacity of an existing resource.",
    optionExplanations: {
      a: "Incorrect. Scaling out adds more instances.",
      b: "Incorrect. Geo-replication copies data between locations.",
      c: "Correct. Scaling up increases the capacity of an existing resource.",
      d: "Incorrect. Failover switches to an alternate system during disruption.",
    },
    sourceLabel: "Microsoft Learn — High availability and scalability",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-scale-out",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "foundational",
    stem: "A web service increases its capacity from two application instances to six instances. What type of scaling occurred?",
    options: [
      ["a", "Scaling out"],
      ["b", "Scaling up"],
      ["c", "Backup retention"],
      ["d", "Identity federation"],
    ],
    correctOptionId: "a",
    correctExplanation: "Scaling out adds more parallel instances to handle demand.",
    optionExplanations: {
      a: "Correct. Scaling out adds more parallel instances to handle demand.",
      b: "Incorrect. Scaling up increases the power of existing instances.",
      c: "Incorrect. Backup retention concerns data recovery.",
      d: "Incorrect. Identity federation is an authentication concept.",
    },
    sourceLabel: "Microsoft Learn — High availability and scalability",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-zone-failure",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of high availability and scalability in the cloud",
    difficulty: "intermediate",
    stem: "A service remains available when one availability zone experiences a power failure because healthy instances serve traffic from other zones. What benefit is being demonstrated?",
    options: [
      ["a", "Automatic lower pricing"],
      ["b", "Resilience to zonal failure"],
      ["c", "Centralized identity"],
      ["d", "A guaranteed zero-cost service"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Redundant deployment across availability zones improves availability when an individual zone fails.",
    optionExplanations: {
      a: "Incorrect. Redundancy can add cost rather than automatically lowering it.",
      b: "Correct. Redundant deployment across availability zones improves availability when an individual zone fails.",
      c: "Incorrect. Identity management does not itself provide zone redundancy.",
      d: "Incorrect. High availability does not mean the service is free.",
    },
    sourceLabel: "Microsoft Learn — Using availability zones and regions",
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/well-architected/resiliency/regions-availability-zones",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-sla-purpose",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "foundational",
    stem: "What does a cloud service-level agreement most directly communicate?",
    options: [
      ["a", "How customers write their application code"],
      ["b", "How much physical RAM each datacenter owns"],
      ["c", "The number of staff assigned to each customer"],
      ["d", "A provider’s stated service-level commitment and applicable remedies"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "A service-level agreement defines the provider’s service commitments and often service-credit remedies.",
    optionExplanations: {
      a: "Incorrect. An SLA does not prescribe customer code.",
      b: "Incorrect. Provider datacenter inventory is not the SLA purpose.",
      c: "Incorrect. An SLA does not specify staffing allocation.",
      d: "Correct. A service-level agreement defines the provider’s service commitments and often service-credit remedies.",
    },
    sourceLabel: "Microsoft Learn — Understand service-level agreements",
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/reliability/concept-service-level-agreements",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-cost-forecasting",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "Before moving to Azure, a finance team wants to model estimated monthly resource charges. Which cloud benefit is supported by transparent metering and cost-estimation tools?",
    options: [
      ["a", "Physical isolation"],
      ["b", "Elimination of all variation"],
      ["c", "Cost predictability"],
      ["d", "Unlimited free scaling"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Usage estimates and cost tools make cloud expenditure more predictable even though actual charges vary with consumption.",
    optionExplanations: {
      a: "Incorrect. Physical isolation is unrelated to price estimation.",
      b: "Incorrect. Cloud charges can still vary with usage.",
      c: "Correct. Usage estimates and cost tools make cloud expenditure more predictable even though actual charges vary with consumption.",
      d: "Incorrect. Cloud scaling is not universally free.",
    },
    sourceLabel: "Microsoft Learn — Reliability and predictability",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-governance-policy",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of security and governance in the cloud",
    difficulty: "intermediate",
    stem: "A company wants teams to deploy only approved resource configurations across many subscriptions. Which broader cloud benefit does this reflect?",
    options: [
      ["a", "Governance through consistent controls"],
      ["b", "Automatic software licensing for everything"],
      ["c", "Removal of all compliance obligations"],
      ["d", "Unlimited regional availability"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Cloud governance tools can apply centrally defined rules and standards at scale.",
    optionExplanations: {
      a: "Correct. Cloud governance tools can apply centrally defined rules and standards at scale.",
      b: "Incorrect. Policy does not imply every software license is automatic.",
      c: "Incorrect. Customers still have compliance responsibilities.",
      d: "Incorrect. Governance rules do not make all regions offer every service.",
    },
    sourceLabel: "Microsoft Learn — Security and governance benefits",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/4-security-governance-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-manage-cli",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of manageability in the cloud",
    difficulty: "foundational",
    stem: "An administrator deploys identical test environments repeatedly using scripts instead of clicking through setup pages. Which cloud benefit is most visible?",
    options: [
      ["a", "Longer deployment lead times"],
      ["b", "Manageability and repeatability"],
      ["c", "Mandatory manual configuration"],
      ["d", "Inability to audit changes"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Automated commands and templates make environments easier to manage and reproduce.",
    optionExplanations: {
      a: "Incorrect. Automation usually decreases setup effort.",
      b: "Correct. Automated commands and templates make environments easier to manage and reproduce.",
      c: "Incorrect. Scripting reduces rather than requires manual repetition.",
      d: "Incorrect. Automation can improve auditing when appropriately tracked.",
    },
    sourceLabel: "Microsoft Learn — Cloud manageability",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-disaster-recovery",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of reliability and predictability in the cloud",
    difficulty: "intermediate",
    stem: "A company replicates important workloads to a different region so operations can recover after a regional outage. Which reliability practice does this support?",
    options: [
      ["a", "Vertical scaling only"],
      ["b", "Subscription tagging"],
      ["c", "Interactive login"],
      ["d", "Disaster recovery"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Regional replication and recovery planning help restore service after a major disruption.",
    optionExplanations: {
      a: "Incorrect. Vertical scaling does not provide alternate regional recovery.",
      b: "Incorrect. Tags do not replicate workloads.",
      c: "Incorrect. Login alone does not restore workloads.",
      d: "Correct. Regional replication and recovery planning help restore service after a major disruption.",
    },
    sourceLabel: "Microsoft Learn — Reliability and predictability",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-security-not-automatic",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of security and governance in the cloud",
    difficulty: "intermediate",
    stem: "A manager assumes moving an application into Azure eliminates the need to configure access permissions. What is the best correction?",
    options: [
      ["a", "All security duties transfer to Microsoft"],
      ["b", "Permissions are only relevant on-premises"],
      [
        "c",
        "The provider offers security capabilities, but customers still configure access and protect their data",
      ],
      ["d", "Access can be configured only by Microsoft support"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Cloud platforms supply security controls, but customers remain accountable for their identities, data, and permissions.",
    optionExplanations: {
      a: "Incorrect. The shared responsibility model leaves duties with customers.",
      b: "Incorrect. Cloud environments still need access control.",
      c: "Correct. Cloud platforms supply security controls, but customers remain accountable for their identities, data, and permissions.",
      d: "Incorrect. Customers can configure access controls directly.",
    },
    sourceLabel: "Microsoft Learn — Shared responsibility model",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-ben-monitor-automation",
    topicId: "d1-cloud-benefits",
    skillObjective: "Describe the benefits of manageability in the cloud",
    difficulty: "intermediate",
    stem: "An operations team defines a performance threshold that triggers an alert and an automated response. Which advantage is illustrated?",
    options: [
      ["a", "Cloud manageability through monitoring and automation"],
      ["b", "The absence of physical servers anywhere"],
      ["c", "A guarantee that failures cannot occur"],
      ["d", "A requirement to inspect every machine manually"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Managed monitoring, alerts, and automation can reduce routine administration effort.",
    optionExplanations: {
      a: "Correct. Managed monitoring, alerts, and automation can reduce routine administration effort.",
      b: "Incorrect. Cloud systems still operate on physical servers.",
      c: "Incorrect. Alerts do not prevent every failure.",
      d: "Incorrect. Automated responses reduce reliance on manual inspection.",
    },
    sourceLabel: "Microsoft Learn — Cloud manageability",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-iaas-os-patching",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe infrastructure as a service (IaaS)",
    difficulty: "intermediate",
    stem: "A team runs Azure Virtual Machines for a legacy application. Who normally installs updates inside the guest operating system?",
    options: [
      ["a", "Microsoft always does it for every VM"],
      ["b", "The customer operating the virtual machines"],
      ["c", "The physical datacenter landlord"],
      ["d", "The application’s end users collectively"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "In IaaS, the customer manages and patches the guest operating system unless it uses additional managed tooling or services.",
    optionExplanations: {
      a: "Incorrect. The provider manages the underlying infrastructure, not routine customer guest OS administration.",
      b: "Correct. In IaaS, the customer manages and patches the guest operating system unless it uses additional managed tooling or services.",
      c: "Incorrect. The facility owner does not administer the VM guest OS.",
      d: "Incorrect. End users do not collectively patch infrastructure.",
    },
    sourceLabel: "Microsoft Learn — Infrastructure as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-paas-deploy",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe platform as a service (PaaS)",
    difficulty: "foundational",
    stem: "A developer wants to publish application code while the provider manages the operating system and runtime platform. Which model is most appropriate?",
    options: [
      ["a", "IaaS with manual guest OS patching"],
      ["b", "Traditional colocation"],
      ["c", "PaaS"],
      ["d", "Self-owned physical servers"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "PaaS abstracts the operating system and runtime so developers can focus on application code.",
    optionExplanations: {
      a: "Incorrect. IaaS usually leaves OS administration to the customer.",
      b: "Incorrect. Colocation does not automatically provide a managed application platform.",
      c: "Correct. PaaS abstracts the operating system and runtime so developers can focus on application code.",
      d: "Incorrect. Owning servers requires more infrastructure administration.",
    },
    sourceLabel: "Microsoft Learn — Platform as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-saas-config",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe software as a service (SaaS)",
    difficulty: "intermediate",
    stem: "A company subscribes to a hosted CRM. Which activity is the customer most likely to manage?",
    options: [
      ["a", "Replacing the CRM provider’s servers"],
      ["b", "Updating the provider’s hypervisor"],
      ["c", "Installing firmware across the provider’s datacenters"],
      ["d", "Configuring employee roles and business data in the CRM"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "SaaS customers manage their data, user access, and tenant settings while the provider operates the application platform.",
    optionExplanations: {
      a: "Incorrect. Physical equipment maintenance is the provider’s task.",
      b: "Incorrect. Hypervisor updates are handled by the provider.",
      c: "Incorrect. Provider firmware management is outside customer SaaS responsibilities.",
      d: "Correct. SaaS customers manage their data, user access, and tenant settings while the provider operates the application platform.",
    },
    sourceLabel: "Microsoft Learn — Software as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-choice-control",
    topicId: "d1-cloud-service-types",
    skillObjective:
      "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
    difficulty: "intermediate",
    stem: "An organization must install custom kernel-level components in its workload’s guest operating system. Which service type ordinarily offers the required control?",
    options: [
      ["a", "IaaS"],
      ["b", "SaaS"],
      ["c", "Managed office productivity software"],
      ["d", "Standard PaaS web hosting"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "IaaS gives administrators guest OS control needed for specialized software and configuration.",
    optionExplanations: {
      a: "Correct. IaaS gives administrators guest OS control needed for specialized software and configuration.",
      b: "Incorrect. SaaS generally does not expose its server OS.",
      c: "Incorrect. A finished productivity application does not offer guest OS access.",
      d: "Incorrect. PaaS abstracts and manages the host operating system.",
    },
    sourceLabel: "Microsoft Learn — Infrastructure as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-fast-software",
    topicId: "d1-cloud-service-types",
    skillObjective:
      "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
    difficulty: "foundational",
    stem: "A nonprofit wants a ready-to-use video meeting application and does not want to deploy or maintain its code. What service type is the natural fit?",
    options: [
      ["a", "IaaS"],
      ["b", "SaaS"],
      ["c", "PaaS for custom apps"],
      ["d", "Bare-metal hosting"],
    ],
    correctOptionId: "b",
    correctExplanation: "SaaS delivers a complete application consumed directly by users.",
    optionExplanations: {
      a: "Incorrect. IaaS provides infrastructure, not a finished meeting application.",
      b: "Correct. SaaS delivers a complete application consumed directly by users.",
      c: "Incorrect. PaaS is intended to host customer applications.",
      d: "Incorrect. Bare-metal hosting requires server administration.",
    },
    sourceLabel: "Microsoft Learn — Software as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-managed-database",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe platform as a service (PaaS)",
    difficulty: "intermediate",
    stem: "A company selects a fully managed cloud database so staff can concentrate on schemas and queries rather than operating-system maintenance. Which service-model idea is illustrated?",
    options: [
      ["a", "IaaS requiring manual database host upkeep"],
      ["b", "A finished SaaS email product"],
      ["c", "PaaS-style managed platform"],
      ["d", "Private cloud as the only possible deployment"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "A managed database provides a platform service that abstracts much of the server and OS maintenance.",
    optionExplanations: {
      a: "Incorrect. IaaS usually provides raw infrastructure managed by customers.",
      b: "Incorrect. A SaaS email product is a finished end-user application.",
      c: "Correct. A managed database provides a platform service that abstracts much of the server and OS maintenance.",
      d: "Incorrect. Cloud deployment models and service models describe different dimensions.",
    },
    sourceLabel: "Microsoft Learn — Platform as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-security-app",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe platform as a service (PaaS)",
    difficulty: "intermediate",
    stem: "A developer deploys a customer-facing web app to PaaS. What remains a developer responsibility?",
    options: [
      ["a", "Writing and securing the application logic"],
      ["b", "Power supply to the provider’s racks"],
      ["c", "Physical disk replacements"],
      ["d", "The provider’s hypervisor upgrade schedule"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "PaaS removes most infrastructure administration but not responsibility for application code and data.",
    optionExplanations: {
      a: "Correct. PaaS removes most infrastructure administration but not responsibility for application code and data.",
      b: "Incorrect. Datacenter power is managed by the provider.",
      c: "Incorrect. Storage hardware replacements are a provider responsibility.",
      d: "Incorrect. Hypervisor operations are managed by the provider.",
    },
    sourceLabel: "Microsoft Learn — Platform as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-saas-shared",
    topicId: "d1-cloud-service-types",
    skillObjective: "Describe software as a service (SaaS)",
    difficulty: "foundational",
    stem: "Which statement is accurate about a SaaS subscription used by a small business?",
    options: [
      ["a", "The business must purchase the underlying storage arrays"],
      ["b", "The business must patch the provider’s operating systems"],
      ["c", "The provider can never charge by subscription"],
      [
        "d",
        "The provider operates the application, while the business manages users and its content",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "SaaS providers operate the application stack while customers administer their users, content, and settings.",
    optionExplanations: {
      a: "Incorrect. SaaS does not require buying provider hardware.",
      b: "Incorrect. The provider handles its platform OS maintenance.",
      c: "Incorrect. Subscription pricing is common for SaaS.",
      d: "Correct. SaaS providers operate the application stack while customers administer their users, content, and settings.",
    },
    sourceLabel: "Microsoft Learn — Software as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-compare-stack",
    topicId: "d1-cloud-service-types",
    skillObjective:
      "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
    difficulty: "intermediate",
    stem: "Which service-model choice generally leaves the customer with the greatest responsibility for operating systems and middleware?",
    options: [
      ["a", "SaaS"],
      ["b", "IaaS"],
      ["c", "PaaS"],
      ["d", "All three have identical management responsibility"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "IaaS exposes infrastructure and usually leaves customers responsible for OS and middleware.",
    optionExplanations: {
      a: "Incorrect. In SaaS the provider operates most of the stack.",
      b: "Correct. IaaS exposes infrastructure and usually leaves customers responsible for OS and middleware.",
      c: "Incorrect. PaaS provides a managed OS and runtime platform.",
      d: "Incorrect. Responsibility differs significantly across the models.",
    },
    sourceLabel: "Microsoft Learn — Infrastructure as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-types-dont-confuse-hybrid",
    topicId: "d1-cloud-service-types",
    skillObjective:
      "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
    difficulty: "intermediate",
    stem: "A startup uses an off-the-shelf hosted accounting application. The provider handles upgrades and operations. A colleague calls this “hybrid cloud” merely because employees also have laptops. Which classification best describes the application itself?",
    options: [
      ["a", "IaaS"],
      ["b", "Private cloud because employees use laptops"],
      ["c", "SaaS"],
      ["d", "Hybrid cloud because a local device accesses the internet"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "A ready-to-use hosted accounting application is SaaS; using local laptops does not by itself define a hybrid-cloud deployment.",
    optionExplanations: {
      a: "Incorrect. IaaS offers infrastructure rather than a finished application.",
      b: "Incorrect. Client laptops do not establish a private cloud.",
      c: "Correct. A ready-to-use hosted accounting application is SaaS; using local laptops does not by itself define a hybrid-cloud deployment.",
      d: "Incorrect. Hybrid cloud involves connected distinct cloud/on-premises environments, not ordinary web access.",
    },
    sourceLabel: "Microsoft Learn — Software as a service",
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service",
    reviewStatus: "reviewed",
  },
];

export const batch1Questions: QuizQuestion[] = drafts.map((draft) => {
  const topic = topicById.get(draft.topicId);
  if (!topic) throw new Error(`Unknown topic: ${draft.topicId}`);
  return {
    ...draft,
    options: draft.options.map(([id, text]) => ({ id, text })),
    domainId: topic.domainId as DomainId,
  };
});
