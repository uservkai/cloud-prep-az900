/**
 * CloudPrep AZ-900 — documentation-reviewed question expansion.
 * Original questions; Microsoft Learn references attached to each item.
 * Human subject-matter expert certification has NOT been performed.
 */
import type { DraftQuestion } from "./build-candidates";
import { mapCandidates } from "./build-candidates";

const drafts: DraftQuestion[] = [
  {
    id: "ai26-x034-sc1",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "A small piece of code must run when a queue message arrives, without dedicated VM management. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure VPN Gateway"],
      ["b", "Azure App Service"],
      ["c", "Azure Functions"],
      ["d", "Virtual Machine Scale Sets"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
    optionExplanations: {
      a: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Azure Functions.",
      b: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Azure Functions.",
      c: "Correct. Azure Functions executes event-driven code without requiring developers to manage servers directly.",
      d: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Azure Functions.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    sourceLabel: "Microsoft Learn — Function documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x034-def",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Functions executes event-driven code without requiring developers to manage servers directly.",
    options: [
      ["a", "Virtual Machine Scale Sets"],
      ["b", "Azure App Service"],
      ["c", "Azure Functions"],
      ["d", "Azure VPN Gateway"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
    optionExplanations: {
      a: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Azure Functions.",
      b: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Azure Functions.",
      c: "Correct. Azure Functions executes event-driven code without requiring developers to manage servers directly.",
      d: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Azure Functions.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    sourceLabel: "Microsoft Learn — Function documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x034-sc2",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "A developer wants an event-triggered process managed by a serverless platform. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Virtual Machine Scale Sets"],
      ["b", "Azure App Service"],
      ["c", "Azure VPN Gateway"],
      ["d", "Azure Functions"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
    optionExplanations: {
      a: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Azure Functions.",
      b: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Azure Functions.",
      c: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Azure Functions.",
      d: "Correct. Azure Functions executes event-driven code without requiring developers to manage servers directly.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    sourceLabel: "Microsoft Learn — Function documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x034-match",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Functions'?",
    options: [
      [
        "a",
        "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      ],
      ["b", "Azure App Service is a managed platform for hosting web applications and web APIs."],
      [
        "c",
        "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      ],
      [
        "d",
        "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure VPN Gateway, not Azure Functions.",
      b: "Incorrect. That statement describes Azure App Service, not Azure Functions.",
      c: "Incorrect. That statement describes Virtual Machine Scale Sets, not Azure Functions.",
      d: "Correct. This is the definition of Azure Functions.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    sourceLabel: "Microsoft Learn — Function documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x035-sc1",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "A team needs a short-lived container job without deploying a cluster. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Availability sets"],
      ["b", "Azure Container Instances"],
      ["c", "Containers"],
      ["d", "Azure ExpressRoute"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
    optionExplanations: {
      a: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires Azure Container Instances.",
      b: "Correct. Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
      c: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires Azure Container Instances.",
      d: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Azure Container Instances.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x035-def",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
    options: [
      ["a", "Containers"],
      ["b", "Availability sets"],
      ["c", "Azure ExpressRoute"],
      ["d", "Azure Container Instances"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
    optionExplanations: {
      a: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires Azure Container Instances.",
      b: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires Azure Container Instances.",
      c: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Azure Container Instances.",
      d: "Correct. Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x035-sc2",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "A developer launches a standalone container in Azure with minimal orchestration. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Availability sets"],
      ["b", "Azure Container Instances"],
      ["c", "Containers"],
      ["d", "Azure ExpressRoute"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
    optionExplanations: {
      a: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires Azure Container Instances.",
      b: "Correct. Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
      c: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires Azure Container Instances.",
      d: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Azure Container Instances.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x035-match",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Container Instances'?",
    options: [
      [
        "a",
        "Containers package an application and its dependencies in a portable, isolated runtime.",
      ],
      [
        "b",
        "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
      ],
      [
        "c",
        "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
      ],
      [
        "d",
        "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
      ],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
    optionExplanations: {
      a: "Incorrect. That statement describes Containers, not Azure Container Instances.",
      b: "Correct. This is the definition of Azure Container Instances.",
      c: "Incorrect. That statement describes Azure ExpressRoute, not Azure Container Instances.",
      d: "Incorrect. That statement describes Availability sets, not Azure Container Instances.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x036-sc1",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "An application needs administrator access to its Windows Server guest OS. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Functions"],
      ["b", "Azure virtual machines"],
      ["c", "Virtual network"],
      ["d", "Azure Virtual Desktop"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
    optionExplanations: {
      a: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires Azure virtual machines.",
      b: "Correct. Azure VMs offer configurable virtualized compute with control over the guest operating system.",
      c: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Azure virtual machines.",
      d: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires Azure virtual machines.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x036-def",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure VMs offer configurable virtualized compute with control over the guest operating system.",
    options: [
      ["a", "Azure virtual machines"],
      ["b", "Virtual network"],
      ["c", "Azure Virtual Desktop"],
      ["d", "Azure Functions"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
    optionExplanations: {
      a: "Correct. Azure VMs offer configurable virtualized compute with control over the guest operating system.",
      b: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Azure virtual machines.",
      c: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires Azure virtual machines.",
      d: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires Azure virtual machines.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x036-sc2",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "intermediate",
    stem: "A vendor's legacy installer requires a self-managed virtual machine. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Virtual Desktop"],
      ["b", "Azure Functions"],
      ["c", "Virtual network"],
      ["d", "Azure virtual machines"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
    optionExplanations: {
      a: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires Azure virtual machines.",
      b: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires Azure virtual machines.",
      c: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Azure virtual machines.",
      d: "Correct. Azure VMs offer configurable virtualized compute with control over the guest operating system.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x036-match",
    topicId: "d2-compute-networking",
    skillObjective: "Compare compute types, including containers, virtual machines, and functions",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure virtual machines'?",
    options: [
      [
        "a",
        "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
      ],
      [
        "b",
        "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
      ],
      [
        "c",
        "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
      ],
      [
        "d",
        "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure Virtual Desktop, not Azure virtual machines.",
      b: "Incorrect. That statement describes Azure Functions, not Azure virtual machines.",
      c: "Correct. This is the definition of Azure virtual machines.",
      d: "Incorrect. That statement describes Virtual network, not Azure virtual machines.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x037-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "A service needs a scalable pool of similar virtual machines. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "VM disk resource"],
      ["b", "Virtual Machine Scale Sets"],
      ["c", "Azure Container Instances"],
      ["d", "VNet peering"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
    optionExplanations: {
      a: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Virtual Machine Scale Sets.",
      b: "Correct. VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      c: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Virtual Machine Scale Sets.",
      d: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Virtual Machine Scale Sets.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    sourceLabel: "Microsoft Learn — Vmset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x037-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
    options: [
      ["a", "VNet peering"],
      ["b", "Virtual Machine Scale Sets"],
      ["c", "Azure Container Instances"],
      ["d", "VM disk resource"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
    optionExplanations: {
      a: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Virtual Machine Scale Sets.",
      b: "Correct. VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      c: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Virtual Machine Scale Sets.",
      d: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Virtual Machine Scale Sets.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    sourceLabel: "Microsoft Learn — Vmset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x037-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "A team automatically increases and decreases the number of app VMs in its fleet. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Container Instances"],
      ["b", "Virtual Machine Scale Sets"],
      ["c", "VM disk resource"],
      ["d", "VNet peering"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
    optionExplanations: {
      a: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Virtual Machine Scale Sets.",
      b: "Correct. VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      c: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Virtual Machine Scale Sets.",
      d: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Virtual Machine Scale Sets.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    sourceLabel: "Microsoft Learn — Vmset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x037-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "foundational",
    stem: "Which statement best defines 'Virtual Machine Scale Sets'?",
    options: [
      [
        "a",
        "An Azure VM commonly uses managed disks for its operating system and persistent data.",
      ],
      [
        "b",
        "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
      ],
      [
        "c",
        "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      ],
      ["d", "Virtual network peering connects Azure VNets over the Microsoft backbone network."],
    ],
    correctOptionId: "c",
    correctExplanation:
      "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
    optionExplanations: {
      a: "Incorrect. That statement describes VM disk resource, not Virtual Machine Scale Sets.",
      b: "Incorrect. That statement describes Azure Container Instances, not Virtual Machine Scale Sets.",
      c: "Correct. This is the definition of Virtual Machine Scale Sets.",
      d: "Incorrect. That statement describes VNet peering, not Virtual Machine Scale Sets.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    sourceLabel: "Microsoft Learn — Vmset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x038-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "An architect wants separate fault and update domains for several VMs. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure virtual machines"],
      ["b", "Azure VPN Gateway"],
      ["c", "Availability sets"],
      ["d", "Network interface resource"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    optionExplanations: {
      a: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Availability sets.",
      b: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Availability sets.",
      c: "Correct. Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
      d: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Availability sets.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    sourceLabel: "Microsoft Learn — Availset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x038-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    options: [
      ["a", "Azure virtual machines"],
      ["b", "Network interface resource"],
      ["c", "Azure VPN Gateway"],
      ["d", "Availability sets"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    optionExplanations: {
      a: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Availability sets.",
      b: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Availability sets.",
      c: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Availability sets.",
      d: "Correct. Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    sourceLabel: "Microsoft Learn — Availset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x038-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "A company minimizes disruption to colocated VMs by grouping them for separate maintenance domains. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure virtual machines"],
      ["b", "Azure VPN Gateway"],
      ["c", "Network interface resource"],
      ["d", "Availability sets"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    optionExplanations: {
      a: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Availability sets.",
      b: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Availability sets.",
      c: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Availability sets.",
      d: "Correct. Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    sourceLabel: "Microsoft Learn — Availset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x038-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "foundational",
    stem: "Which statement best defines 'Availability sets'?",
    options: [
      [
        "a",
        "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
      ],
      ["b", "A network interface connects a virtual machine to an Azure virtual network."],
      [
        "c",
        "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
      ],
      [
        "d",
        "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
    optionExplanations: {
      a: "Correct. This is the definition of Availability sets.",
      b: "Incorrect. That statement describes Network interface resource, not Availability sets.",
      c: "Incorrect. That statement describes Azure virtual machines, not Availability sets.",
      d: "Incorrect. That statement describes Azure VPN Gateway, not Availability sets.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    sourceLabel: "Microsoft Learn — Availset documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x039-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "Employees need remotely accessible Windows desktops maintained centrally. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Virtual Desktop"],
      ["b", "Azure ExpressRoute"],
      ["c", "Virtual Machine Scale Sets"],
      ["d", "Azure App Service"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    optionExplanations: {
      a: "Correct. Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
      b: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Azure Virtual Desktop.",
      c: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Azure Virtual Desktop.",
      d: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Azure Virtual Desktop.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    sourceLabel: "Microsoft Learn — Avd documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x039-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    options: [
      ["a", "Virtual Machine Scale Sets"],
      ["b", "Azure App Service"],
      ["c", "Azure ExpressRoute"],
      ["d", "Azure Virtual Desktop"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    optionExplanations: {
      a: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Azure Virtual Desktop.",
      b: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Azure Virtual Desktop.",
      c: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Azure Virtual Desktop.",
      d: "Correct. Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    sourceLabel: "Microsoft Learn — Avd documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x039-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "intermediate",
    stem: "An organization provides a virtualized desktop experience to staff working from home. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure ExpressRoute"],
      ["b", "Virtual Machine Scale Sets"],
      ["c", "Azure App Service"],
      ["d", "Azure Virtual Desktop"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    optionExplanations: {
      a: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Azure Virtual Desktop.",
      b: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Azure Virtual Desktop.",
      c: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Azure Virtual Desktop.",
      d: "Correct. Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    sourceLabel: "Microsoft Learn — Avd documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x039-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure Virtual Desktop'?",
    options: [
      ["a", "Azure App Service is a managed platform for hosting web applications and web APIs."],
      [
        "b",
        "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
      ],
      [
        "c",
        "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      ],
      [
        "d",
        "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure App Service, not Azure Virtual Desktop.",
      b: "Incorrect. That statement describes Azure ExpressRoute, not Azure Virtual Desktop.",
      c: "Incorrect. That statement describes Virtual Machine Scale Sets, not Azure Virtual Desktop.",
      d: "Correct. This is the definition of Azure Virtual Desktop.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    sourceLabel: "Microsoft Learn — Avd documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x040-sc1",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "intermediate",
    stem: "An administrator identifies the resource holding the operating system files of a VM. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Containers"],
      ["b", "VM disk resource"],
      ["c", "Availability sets"],
      ["d", "Azure Functions"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure VM commonly uses managed disks for its operating system and persistent data.",
    optionExplanations: {
      a: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires VM disk resource.",
      b: "Correct. An Azure VM commonly uses managed disks for its operating system and persistent data.",
      c: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires VM disk resource.",
      d: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires VM disk resource.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x040-def",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? An Azure VM commonly uses managed disks for its operating system and persistent data.",
    options: [
      ["a", "Containers"],
      ["b", "VM disk resource"],
      ["c", "Availability sets"],
      ["d", "Azure Functions"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure VM commonly uses managed disks for its operating system and persistent data.",
    optionExplanations: {
      a: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires VM disk resource.",
      b: "Correct. An Azure VM commonly uses managed disks for its operating system and persistent data.",
      c: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires VM disk resource.",
      d: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires VM disk resource.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x040-sc2",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "intermediate",
    stem: "A VM needs a persistent storage volume for its boot operating system. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Availability sets"],
      ["b", "VM disk resource"],
      ["c", "Containers"],
      ["d", "Azure Functions"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "An Azure VM commonly uses managed disks for its operating system and persistent data.",
    optionExplanations: {
      a: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires VM disk resource.",
      b: "Correct. An Azure VM commonly uses managed disks for its operating system and persistent data.",
      c: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires VM disk resource.",
      d: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires VM disk resource.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x040-match",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "foundational",
    stem: "Which statement best defines 'VM disk resource'?",
    options: [
      [
        "a",
        "Containers package an application and its dependencies in a portable, isolated runtime.",
      ],
      [
        "b",
        "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
      ],
      [
        "c",
        "An Azure VM commonly uses managed disks for its operating system and persistent data.",
      ],
      [
        "d",
        "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "An Azure VM commonly uses managed disks for its operating system and persistent data.",
    optionExplanations: {
      a: "Incorrect. That statement describes Containers, not VM disk resource.",
      b: "Incorrect. That statement describes Azure Functions, not VM disk resource.",
      c: "Correct. This is the definition of VM disk resource.",
      d: "Incorrect. That statement describes Availability sets, not VM disk resource.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
    sourceLabel: "Microsoft Learn — Arch documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x041-sc1",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "intermediate",
    stem: "A VM must communicate on a subnet through a defined virtual network attachment. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Container Instances"],
      ["b", "Azure Virtual Desktop"],
      ["c", "Virtual network"],
      ["d", "Network interface resource"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "A network interface connects a virtual machine to an Azure virtual network.",
    optionExplanations: {
      a: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Network interface resource.",
      b: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires Network interface resource.",
      c: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Network interface resource.",
      d: "Correct. A network interface connects a virtual machine to an Azure virtual network.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x041-def",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? A network interface connects a virtual machine to an Azure virtual network.",
    options: [
      ["a", "Azure Virtual Desktop"],
      ["b", "Azure Container Instances"],
      ["c", "Network interface resource"],
      ["d", "Virtual network"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "A network interface connects a virtual machine to an Azure virtual network.",
    optionExplanations: {
      a: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires Network interface resource.",
      b: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Network interface resource.",
      c: "Correct. A network interface connects a virtual machine to an Azure virtual network.",
      d: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Network interface resource.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x041-sc2",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "intermediate",
    stem: "A developer identifies the Azure component used to attach a VM to a VNet. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Container Instances"],
      ["b", "Azure Virtual Desktop"],
      ["c", "Network interface resource"],
      ["d", "Virtual network"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "A network interface connects a virtual machine to an Azure virtual network.",
    optionExplanations: {
      a: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Network interface resource.",
      b: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires Network interface resource.",
      c: "Correct. A network interface connects a virtual machine to an Azure virtual network.",
      d: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Network interface resource.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x041-match",
    topicId: "d2-compute-networking",
    skillObjective: "Describe the resources required for virtual machines",
    difficulty: "foundational",
    stem: "Which statement best defines 'Network interface resource'?",
    options: [
      [
        "a",
        "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
      ],
      [
        "b",
        "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
      ],
      [
        "c",
        "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
      ],
      ["d", "A network interface connects a virtual machine to an Azure virtual network."],
    ],
    correctOptionId: "d",
    correctExplanation:
      "A network interface connects a virtual machine to an Azure virtual network.",
    optionExplanations: {
      a: "Incorrect. That statement describes Virtual network, not Network interface resource.",
      b: "Incorrect. That statement describes Azure Virtual Desktop, not Network interface resource.",
      c: "Incorrect. That statement describes Azure Container Instances, not Network interface resource.",
      d: "Correct. This is the definition of Network interface resource.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x042-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "intermediate",
    stem: "A team wants to deploy a web API without patching web-host virtual machines. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "VM disk resource"],
      ["b", "VNet peering"],
      ["c", "Azure App Service"],
      ["d", "Azure virtual machines"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure App Service is a managed platform for hosting web applications and web APIs.",
    optionExplanations: {
      a: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Azure App Service.",
      b: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Azure App Service.",
      c: "Correct. Azure App Service is a managed platform for hosting web applications and web APIs.",
      d: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Azure App Service.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    sourceLabel: "Microsoft Learn — Appservice documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x042-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure App Service is a managed platform for hosting web applications and web APIs.",
    options: [
      ["a", "Azure virtual machines"],
      ["b", "Azure App Service"],
      ["c", "VM disk resource"],
      ["d", "VNet peering"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure App Service is a managed platform for hosting web applications and web APIs.",
    optionExplanations: {
      a: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Azure App Service.",
      b: "Correct. Azure App Service is a managed platform for hosting web applications and web APIs.",
      c: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Azure App Service.",
      d: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Azure App Service.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    sourceLabel: "Microsoft Learn — Appservice documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x042-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "intermediate",
    stem: "Developers need managed hosting for their web application with minimal infrastructure duties. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure App Service"],
      ["b", "VM disk resource"],
      ["c", "Azure virtual machines"],
      ["d", "VNet peering"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure App Service is a managed platform for hosting web applications and web APIs.",
    optionExplanations: {
      a: "Correct. Azure App Service is a managed platform for hosting web applications and web APIs.",
      b: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Azure App Service.",
      c: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Azure App Service.",
      d: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Azure App Service.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    sourceLabel: "Microsoft Learn — Appservice documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x042-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure App Service'?",
    options: [
      [
        "a",
        "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
      ],
      ["b", "Virtual network peering connects Azure VNets over the Microsoft backbone network."],
      ["c", "Azure App Service is a managed platform for hosting web applications and web APIs."],
      [
        "d",
        "An Azure VM commonly uses managed disks for its operating system and persistent data.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure App Service is a managed platform for hosting web applications and web APIs.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure virtual machines, not Azure App Service.",
      b: "Incorrect. That statement describes VNet peering, not Azure App Service.",
      c: "Correct. This is the definition of Azure App Service.",
      d: "Incorrect. That statement describes VM disk resource, not Azure App Service.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    sourceLabel: "Microsoft Learn — Appservice documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x043-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "intermediate",
    stem: "Developers need to run consistent application packages across development and cloud environments. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Network interface resource"],
      ["b", "Azure VPN Gateway"],
      ["c", "Containers"],
      ["d", "Virtual Machine Scale Sets"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Containers package an application and its dependencies in a portable, isolated runtime.",
    optionExplanations: {
      a: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Containers.",
      b: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Containers.",
      c: "Correct. Containers package an application and its dependencies in a portable, isolated runtime.",
      d: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Containers.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x043-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Containers package an application and its dependencies in a portable, isolated runtime.",
    options: [
      ["a", "Azure VPN Gateway"],
      ["b", "Network interface resource"],
      ["c", "Containers"],
      ["d", "Virtual Machine Scale Sets"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Containers package an application and its dependencies in a portable, isolated runtime.",
    optionExplanations: {
      a: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Containers.",
      b: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Containers.",
      c: "Correct. Containers package an application and its dependencies in a portable, isolated runtime.",
      d: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Containers.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x043-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "intermediate",
    stem: "A team packages a service with its runtime libraries but shares host OS capabilities. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Containers"],
      ["b", "Network interface resource"],
      ["c", "Virtual Machine Scale Sets"],
      ["d", "Azure VPN Gateway"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Containers package an application and its dependencies in a portable, isolated runtime.",
    optionExplanations: {
      a: "Correct. Containers package an application and its dependencies in a portable, isolated runtime.",
      b: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Containers.",
      c: "Incorrect. Virtual Machine Scale Sets means: VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances. The scenario/definition instead requires Containers.",
      d: "Incorrect. Azure VPN Gateway means: Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet. The scenario/definition instead requires Containers.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x043-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe application hosting options, including web apps, containers, and virtual machines",
    difficulty: "foundational",
    stem: "Which statement best defines 'Containers'?",
    options: [
      [
        "a",
        "Containers package an application and its dependencies in a portable, isolated runtime.",
      ],
      [
        "b",
        "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      ],
      ["c", "A network interface connects a virtual machine to an Azure virtual network."],
      [
        "d",
        "VM Scale Sets manage a group of load-balanced VMs and support scaling the number of instances.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Containers package an application and its dependencies in a portable, isolated runtime.",
    optionExplanations: {
      a: "Correct. This is the definition of Containers.",
      b: "Incorrect. That statement describes Azure VPN Gateway, not Containers.",
      c: "Incorrect. That statement describes Network interface resource, not Containers.",
      d: "Incorrect. That statement describes Virtual Machine Scale Sets, not Containers.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    sourceLabel: "Microsoft Learn — Aci documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x044-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "A company needs a logically isolated network for its Azure workloads. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Availability sets"],
      ["b", "Azure App Service"],
      ["c", "Azure ExpressRoute"],
      ["d", "Virtual network"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
    optionExplanations: {
      a: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires Virtual network.",
      b: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Virtual network.",
      c: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Virtual network.",
      d: "Correct. Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x044-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
    options: [
      ["a", "Availability sets"],
      ["b", "Virtual network"],
      ["c", "Azure ExpressRoute"],
      ["d", "Azure App Service"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
    optionExplanations: {
      a: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires Virtual network.",
      b: "Correct. Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
      c: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Virtual network.",
      d: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Virtual network.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x044-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "An architect defines IP address spaces and subnets for connected Azure services. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure App Service"],
      ["b", "Virtual network"],
      ["c", "Availability sets"],
      ["d", "Azure ExpressRoute"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
    optionExplanations: {
      a: "Incorrect. Azure App Service means: Azure App Service is a managed platform for hosting web applications and web APIs. The scenario/definition instead requires Virtual network.",
      b: "Correct. Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
      c: "Incorrect. Availability sets means: Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption. The scenario/definition instead requires Virtual network.",
      d: "Incorrect. Azure ExpressRoute means: Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider. The scenario/definition instead requires Virtual network.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x044-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which statement best defines 'Virtual network'?",
    options: [
      [
        "a",
        "Availability sets distribute Azure VMs across fault and update domains to reduce simultaneous interruption.",
      ],
      ["b", "Azure App Service is a managed platform for hosting web applications and web APIs."],
      [
        "c",
        "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
      ],
      [
        "d",
        "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
    optionExplanations: {
      a: "Incorrect. That statement describes Availability sets, not Virtual network.",
      b: "Incorrect. That statement describes Azure App Service, not Virtual network.",
      c: "Incorrect. That statement describes Azure ExpressRoute, not Virtual network.",
      d: "Correct. This is the definition of Virtual network.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    sourceLabel: "Microsoft Learn — Vnet documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x045-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "Two Azure virtual networks must communicate privately without building an internet VPN. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Virtual Desktop"],
      ["b", "Azure Functions"],
      ["c", "Containers"],
      ["d", "VNet peering"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    optionExplanations: {
      a: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires VNet peering.",
      b: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires VNet peering.",
      c: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires VNet peering.",
      d: "Correct. Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    sourceLabel: "Microsoft Learn — Peering documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x045-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    options: [
      ["a", "VNet peering"],
      ["b", "Azure Functions"],
      ["c", "Containers"],
      ["d", "Azure Virtual Desktop"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    optionExplanations: {
      a: "Correct. Virtual network peering connects Azure VNets over the Microsoft backbone network.",
      b: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires VNet peering.",
      c: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires VNet peering.",
      d: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires VNet peering.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    sourceLabel: "Microsoft Learn — Peering documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x045-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "Two teams want direct connectivity between separate Azure VNets. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure Functions"],
      ["b", "Containers"],
      ["c", "Azure Virtual Desktop"],
      ["d", "VNet peering"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    optionExplanations: {
      a: "Incorrect. Azure Functions means: Azure Functions executes event-driven code without requiring developers to manage servers directly. The scenario/definition instead requires VNet peering.",
      b: "Incorrect. Containers means: Containers package an application and its dependencies in a portable, isolated runtime. The scenario/definition instead requires VNet peering.",
      c: "Incorrect. Azure Virtual Desktop means: Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users. The scenario/definition instead requires VNet peering.",
      d: "Correct. Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    sourceLabel: "Microsoft Learn — Peering documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x045-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which statement best defines 'VNet peering'?",
    options: [
      [
        "a",
        "Azure Virtual Desktop delivers virtual Windows desktops and applications from Azure to users.",
      ],
      [
        "b",
        "Containers package an application and its dependencies in a portable, isolated runtime.",
      ],
      ["c", "Virtual network peering connects Azure VNets over the Microsoft backbone network."],
      [
        "d",
        "Azure Functions executes event-driven code without requiring developers to manage servers directly.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Virtual network peering connects Azure VNets over the Microsoft backbone network.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure Virtual Desktop, not VNet peering.",
      b: "Incorrect. That statement describes Containers, not VNet peering.",
      c: "Correct. This is the definition of VNet peering.",
      d: "Incorrect. That statement describes Azure Functions, not VNet peering.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    sourceLabel: "Microsoft Learn — Peering documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x046-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "A branch office needs a site-to-site encrypted connection to its Azure VNet. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure Container Instances"],
      ["b", "Virtual network"],
      ["c", "Azure VPN Gateway"],
      ["d", "VM disk resource"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
    optionExplanations: {
      a: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Azure VPN Gateway.",
      b: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Azure VPN Gateway.",
      c: "Correct. Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      d: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Azure VPN Gateway.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    sourceLabel: "Microsoft Learn — Vpn documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x046-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
    options: [
      ["a", "Azure Container Instances"],
      ["b", "Azure VPN Gateway"],
      ["c", "Virtual network"],
      ["d", "VM disk resource"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
    optionExplanations: {
      a: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Azure VPN Gateway.",
      b: "Correct. Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      c: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Azure VPN Gateway.",
      d: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Azure VPN Gateway.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    sourceLabel: "Microsoft Learn — Vpn documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x046-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "A company links its on-premises network with Azure through an IPsec-based VPN. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "VM disk resource"],
      ["b", "Virtual network"],
      ["c", "Azure VPN Gateway"],
      ["d", "Azure Container Instances"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
    optionExplanations: {
      a: "Incorrect. VM disk resource means: An Azure VM commonly uses managed disks for its operating system and persistent data. The scenario/definition instead requires Azure VPN Gateway.",
      b: "Incorrect. Virtual network means: Azure Virtual Network provides private network isolation and connectivity for Azure resources. The scenario/definition instead requires Azure VPN Gateway.",
      c: "Correct. Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      d: "Incorrect. Azure Container Instances means: Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster. The scenario/definition instead requires Azure VPN Gateway.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    sourceLabel: "Microsoft Learn — Vpn documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x046-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure VPN Gateway'?",
    options: [
      [
        "a",
        "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
      ],
      [
        "b",
        "An Azure VM commonly uses managed disks for its operating system and persistent data.",
      ],
      [
        "c",
        "Azure Virtual Network provides private network isolation and connectivity for Azure resources.",
      ],
      [
        "d",
        "Azure Container Instances runs containers on demand without managing VM hosts or a Kubernetes cluster.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure VPN Gateway connects networks through encrypted tunnels, often over the public internet.",
    optionExplanations: {
      a: "Correct. This is the definition of Azure VPN Gateway.",
      b: "Incorrect. That statement describes VM disk resource, not Azure VPN Gateway.",
      c: "Incorrect. That statement describes Virtual network, not Azure VPN Gateway.",
      d: "Incorrect. That statement describes Azure Container Instances, not Azure VPN Gateway.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    sourceLabel: "Microsoft Learn — Vpn documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x047-sc1",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "A company requires dedicated private connectivity rather than a VPN over the public internet. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure ExpressRoute"],
      ["b", "VNet peering"],
      ["c", "Network interface resource"],
      ["d", "Azure virtual machines"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
    optionExplanations: {
      a: "Correct. Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
      b: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Azure ExpressRoute.",
      c: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Azure ExpressRoute.",
      d: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Azure ExpressRoute.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    sourceLabel: "Microsoft Learn — Express documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x047-def",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
    options: [
      ["a", "Azure virtual machines"],
      ["b", "Azure ExpressRoute"],
      ["c", "VNet peering"],
      ["d", "Network interface resource"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
    optionExplanations: {
      a: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Azure ExpressRoute.",
      b: "Correct. Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
      c: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Azure ExpressRoute.",
      d: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Azure ExpressRoute.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    sourceLabel: "Microsoft Learn — Express documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x047-sc2",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "intermediate",
    stem: "An enterprise works with a carrier to connect its datacenter privately to Azure. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "VNet peering"],
      ["b", "Azure virtual machines"],
      ["c", "Network interface resource"],
      ["d", "Azure ExpressRoute"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
    optionExplanations: {
      a: "Incorrect. VNet peering means: Virtual network peering connects Azure VNets over the Microsoft backbone network. The scenario/definition instead requires Azure ExpressRoute.",
      b: "Incorrect. Azure virtual machines means: Azure VMs offer configurable virtualized compute with control over the guest operating system. The scenario/definition instead requires Azure ExpressRoute.",
      c: "Incorrect. Network interface resource means: A network interface connects a virtual machine to an Azure virtual network. The scenario/definition instead requires Azure ExpressRoute.",
      d: "Correct. Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    sourceLabel: "Microsoft Learn — Express documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x047-match",
    topicId: "d2-compute-networking",
    skillObjective:
      "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure ExpressRoute'?",
    options: [
      ["a", "A network interface connects a virtual machine to an Azure virtual network."],
      ["b", "Virtual network peering connects Azure VNets over the Microsoft backbone network."],
      [
        "c",
        "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
      ],
      [
        "d",
        "Azure VMs offer configurable virtualized compute with control over the guest operating system.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Azure ExpressRoute provides private connectivity from on-premises networks to Microsoft cloud services through a connectivity provider.",
    optionExplanations: {
      a: "Incorrect. That statement describes Network interface resource, not Azure ExpressRoute.",
      b: "Incorrect. That statement describes VNet peering, not Azure ExpressRoute.",
      c: "Correct. This is the definition of Azure ExpressRoute.",
      d: "Incorrect. That statement describes Azure virtual machines, not Azure ExpressRoute.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    sourceLabel: "Microsoft Learn — Express documentation",
    reviewStatus: "reviewed",
  },
];

export const q_d2_compute_networking = mapCandidates(drafts);
