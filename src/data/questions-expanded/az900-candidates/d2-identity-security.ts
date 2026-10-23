/**
 * CloudPrep AZ-900 — documentation-reviewed question expansion.
 * Original questions; Microsoft Learn references attached to each item.
 * Human subject-matter expert certification has NOT been performed.
 */
import type { DraftQuestion } from "./build-candidates";
import { mapCandidates } from "./build-candidates";

const drafts: DraftQuestion[] = [
  {
    id: "ai26-x057-sc1",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "intermediate",
    stem: "A company centrally manages cloud sign-ins for employees. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Conditional Access"],
      ["b", "Microsoft Entra ID"],
      ["c", "Microsoft Entra Domain Services"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
    optionExplanations: {
      a: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires Microsoft Entra ID.",
      b: "Correct. Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      c: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Microsoft Entra ID.",
      d: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Microsoft Entra ID.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    sourceLabel: "Microsoft Learn — Entra documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x057-def",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
    options: [
      ["a", "Conditional Access"],
      ["b", "Microsoft Entra ID"],
      ["c", "Microsoft Entra Domain Services"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
    optionExplanations: {
      a: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires Microsoft Entra ID.",
      b: "Correct. Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      c: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Microsoft Entra ID.",
      d: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Microsoft Entra ID.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    sourceLabel: "Microsoft Learn — Entra documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x057-sc2",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "intermediate",
    stem: "A team needs a cloud identity provider for organizational applications. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Single sign-on (SSO)"],
      ["b", "Conditional Access"],
      ["c", "Microsoft Entra ID"],
      ["d", "Microsoft Entra Domain Services"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
    optionExplanations: {
      a: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Microsoft Entra ID.",
      b: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires Microsoft Entra ID.",
      c: "Correct. Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      d: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Microsoft Entra ID.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    sourceLabel: "Microsoft Learn — Entra documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x057-match",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "foundational",
    stem: "Which statement best defines 'Microsoft Entra ID'?",
    options: [
      [
        "a",
        "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      ],
      [
        "b",
        "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
      ],
      [
        "c",
        "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      ],
      [
        "d",
        "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      ],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
    optionExplanations: {
      a: "Correct. This is the definition of Microsoft Entra ID.",
      b: "Incorrect. That statement describes Single sign-on (SSO), not Microsoft Entra ID.",
      c: "Incorrect. That statement describes Microsoft Entra Domain Services, not Microsoft Entra ID.",
      d: "Incorrect. That statement describes Conditional Access, not Microsoft Entra ID.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    sourceLabel: "Microsoft Learn — Entra documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x058-sc1",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "intermediate",
    stem: "An older application needs managed LDAP and domain-join features without maintaining domain controllers. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Microsoft Entra Domain Services"],
      ["b", "Azure RBAC"],
      ["c", "External identities"],
      ["d", "Multifactor authentication (MFA)"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
    optionExplanations: {
      a: "Correct. Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      b: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Microsoft Entra Domain Services.",
      c: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Microsoft Entra Domain Services.",
      d: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Microsoft Entra Domain Services.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/domain-services/overview",
    sourceLabel: "Microsoft Learn — Domainservices documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x058-def",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
    options: [
      ["a", "Azure RBAC"],
      ["b", "Microsoft Entra Domain Services"],
      ["c", "External identities"],
      ["d", "Multifactor authentication (MFA)"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
    optionExplanations: {
      a: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Microsoft Entra Domain Services.",
      b: "Correct. Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      c: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Microsoft Entra Domain Services.",
      d: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Microsoft Entra Domain Services.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/domain-services/overview",
    sourceLabel: "Microsoft Learn — Domainservices documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x058-sc2",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "intermediate",
    stem: "A legacy workload depends on Kerberos authentication and Windows domain services in Azure. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Microsoft Entra Domain Services"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "Azure RBAC"],
      ["d", "External identities"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
    optionExplanations: {
      a: "Correct. Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      b: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Microsoft Entra Domain Services.",
      c: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Microsoft Entra Domain Services.",
      d: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Microsoft Entra Domain Services.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/domain-services/overview",
    sourceLabel: "Microsoft Learn — Domainservices documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x058-match",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
    difficulty: "foundational",
    stem: "Which statement best defines 'Microsoft Entra Domain Services'?",
    options: [
      [
        "a",
        "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
      ],
      [
        "b",
        "MFA requires two or more authentication factors, reducing reliance on a password alone.",
      ],
      [
        "c",
        "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      ],
      [
        "d",
        "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
    optionExplanations: {
      a: "Incorrect. That statement describes External identities, not Microsoft Entra Domain Services.",
      b: "Incorrect. That statement describes Multifactor authentication (MFA), not Microsoft Entra Domain Services.",
      c: "Correct. This is the definition of Microsoft Entra Domain Services.",
      d: "Incorrect. That statement describes Azure RBAC, not Microsoft Entra Domain Services.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/domain-services/overview",
    sourceLabel: "Microsoft Learn — Domainservices documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x059-sc1",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "intermediate",
    stem: "Employees must confirm a sign-in with an additional factor besides their password. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Zero Trust"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "Conditional Access"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "MFA requires two or more authentication factors, reducing reliance on a password alone.",
    optionExplanations: {
      a: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires Multifactor authentication (MFA).",
      b: "Correct. MFA requires two or more authentication factors, reducing reliance on a password alone.",
      c: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires Multifactor authentication (MFA).",
      d: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Multifactor authentication (MFA).",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    sourceLabel: "Microsoft Learn — Mfa documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x059-def",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? MFA requires two or more authentication factors, reducing reliance on a password alone.",
    options: [
      ["a", "Conditional Access"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "Single sign-on (SSO)"],
      ["d", "Zero Trust"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "MFA requires two or more authentication factors, reducing reliance on a password alone.",
    optionExplanations: {
      a: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires Multifactor authentication (MFA).",
      b: "Correct. MFA requires two or more authentication factors, reducing reliance on a password alone.",
      c: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Multifactor authentication (MFA).",
      d: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires Multifactor authentication (MFA).",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    sourceLabel: "Microsoft Learn — Mfa documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x059-sc2",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "intermediate",
    stem: "An admin secures accounts using a credential plus a separate authenticator challenge. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Conditional Access"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "Zero Trust"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "MFA requires two or more authentication factors, reducing reliance on a password alone.",
    optionExplanations: {
      a: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires Multifactor authentication (MFA).",
      b: "Correct. MFA requires two or more authentication factors, reducing reliance on a password alone.",
      c: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires Multifactor authentication (MFA).",
      d: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Multifactor authentication (MFA).",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    sourceLabel: "Microsoft Learn — Mfa documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x059-match",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "foundational",
    stem: "Which statement best defines 'Multifactor authentication (MFA)'?",
    options: [
      [
        "a",
        "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
      ],
      [
        "b",
        "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      ],
      [
        "c",
        "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      ],
      [
        "d",
        "MFA requires two or more authentication factors, reducing reliance on a password alone.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "MFA requires two or more authentication factors, reducing reliance on a password alone.",
    optionExplanations: {
      a: "Incorrect. That statement describes Single sign-on (SSO), not Multifactor authentication (MFA).",
      b: "Incorrect. That statement describes Zero Trust, not Multifactor authentication (MFA).",
      c: "Incorrect. That statement describes Conditional Access, not Multifactor authentication (MFA).",
      d: "Correct. This is the definition of Multifactor authentication (MFA).",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    sourceLabel: "Microsoft Learn — Mfa documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x060-sc1",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "intermediate",
    stem: "An employee signs in once and accesses several linked business applications. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Single sign-on (SSO)"],
      ["b", "External identities"],
      ["c", "Azure RBAC"],
      ["d", "Microsoft Defender for Cloud"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    optionExplanations: {
      a: "Correct. Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
      b: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Single sign-on (SSO).",
      c: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Single sign-on (SSO).",
      d: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Single sign-on (SSO).",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on",
    sourceLabel: "Microsoft Learn — Sso documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x060-def",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    options: [
      ["a", "Microsoft Defender for Cloud"],
      ["b", "Azure RBAC"],
      ["c", "External identities"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    optionExplanations: {
      a: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Single sign-on (SSO).",
      b: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Single sign-on (SSO).",
      c: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Single sign-on (SSO).",
      d: "Correct. Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on",
    sourceLabel: "Microsoft Learn — Sso documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x060-sc2",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "intermediate",
    stem: "A company wants fewer repeated login prompts across connected services. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Microsoft Defender for Cloud"],
      ["b", "External identities"],
      ["c", "Azure RBAC"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    optionExplanations: {
      a: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Single sign-on (SSO).",
      b: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Single sign-on (SSO).",
      c: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Single sign-on (SSO).",
      d: "Correct. Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on",
    sourceLabel: "Microsoft Learn — Sso documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x060-match",
    topicId: "d2-identity-security",
    skillObjective:
      "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
    difficulty: "foundational",
    stem: "Which statement best defines 'Single sign-on (SSO)'?",
    options: [
      [
        "a",
        "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      ],
      [
        "b",
        "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
      ],
      [
        "c",
        "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
      ],
      [
        "d",
        "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
      ],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure RBAC, not Single sign-on (SSO).",
      b: "Correct. This is the definition of Single sign-on (SSO).",
      c: "Incorrect. That statement describes External identities, not Single sign-on (SSO).",
      d: "Incorrect. That statement describes Microsoft Defender for Cloud, not Single sign-on (SSO).",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on",
    sourceLabel: "Microsoft Learn — Sso documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x061-sc1",
    topicId: "d2-identity-security",
    skillObjective: "Describe external identities in Azure",
    difficulty: "intermediate",
    stem: "A partner company employee needs controlled guest access to a shared project. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Microsoft Entra ID"],
      ["b", "Zero Trust"],
      ["c", "Conditional Access"],
      ["d", "External identities"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
    optionExplanations: {
      a: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires External identities.",
      b: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires External identities.",
      c: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires External identities.",
      d: "Correct. Microsoft Entra external identities enable secure collaboration with users outside an organization.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview",
    sourceLabel: "Microsoft Learn — Extern documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x061-def",
    topicId: "d2-identity-security",
    skillObjective: "Describe external identities in Azure",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Microsoft Entra external identities enable secure collaboration with users outside an organization.",
    options: [
      ["a", "Conditional Access"],
      ["b", "Microsoft Entra ID"],
      ["c", "External identities"],
      ["d", "Zero Trust"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
    optionExplanations: {
      a: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires External identities.",
      b: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires External identities.",
      c: "Correct. Microsoft Entra external identities enable secure collaboration with users outside an organization.",
      d: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires External identities.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview",
    sourceLabel: "Microsoft Learn — Extern documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x061-sc2",
    topicId: "d2-identity-security",
    skillObjective: "Describe external identities in Azure",
    difficulty: "intermediate",
    stem: "An organization invites an external consultant to use a selected application. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "External identities"],
      ["b", "Zero Trust"],
      ["c", "Microsoft Entra ID"],
      ["d", "Conditional Access"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
    optionExplanations: {
      a: "Correct. Microsoft Entra external identities enable secure collaboration with users outside an organization.",
      b: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires External identities.",
      c: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires External identities.",
      d: "Incorrect. Conditional Access means: Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions. The scenario/definition instead requires External identities.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview",
    sourceLabel: "Microsoft Learn — Extern documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x061-match",
    topicId: "d2-identity-security",
    skillObjective: "Describe external identities in Azure",
    difficulty: "foundational",
    stem: "Which statement best defines 'External identities'?",
    options: [
      [
        "a",
        "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      ],
      [
        "b",
        "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
      ],
      [
        "c",
        "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      ],
      [
        "d",
        "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      ],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
    optionExplanations: {
      a: "Incorrect. That statement describes Zero Trust, not External identities.",
      b: "Correct. This is the definition of External identities.",
      c: "Incorrect. That statement describes Conditional Access, not External identities.",
      d: "Incorrect. That statement describes Microsoft Entra ID, not External identities.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview",
    sourceLabel: "Microsoft Learn — Extern documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x062-sc1",
    topicId: "d2-identity-security",
    skillObjective: "Describe Microsoft Entra Conditional Access",
    difficulty: "intermediate",
    stem: "An organization requires MFA when users sign in from risky situations. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Conditional Access"],
      ["b", "Microsoft Defender for Cloud"],
      ["c", "Azure RBAC"],
      ["d", "Microsoft Entra Domain Services"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
    optionExplanations: {
      a: "Correct. Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      b: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Conditional Access.",
      c: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Conditional Access.",
      d: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Conditional Access.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    sourceLabel: "Microsoft Learn — Ca documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x062-def",
    topicId: "d2-identity-security",
    skillObjective: "Describe Microsoft Entra Conditional Access",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
    options: [
      ["a", "Microsoft Defender for Cloud"],
      ["b", "Azure RBAC"],
      ["c", "Conditional Access"],
      ["d", "Microsoft Entra Domain Services"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
    optionExplanations: {
      a: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Conditional Access.",
      b: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Conditional Access.",
      c: "Correct. Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      d: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Conditional Access.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    sourceLabel: "Microsoft Learn — Ca documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x062-sc2",
    topicId: "d2-identity-security",
    skillObjective: "Describe Microsoft Entra Conditional Access",
    difficulty: "intermediate",
    stem: "Security teams enforce access controls using user, device, or sign-in risk signals. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Azure RBAC"],
      ["b", "Microsoft Defender for Cloud"],
      ["c", "Conditional Access"],
      ["d", "Microsoft Entra Domain Services"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
    optionExplanations: {
      a: "Incorrect. Azure RBAC means: Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes. The scenario/definition instead requires Conditional Access.",
      b: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Conditional Access.",
      c: "Correct. Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      d: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Conditional Access.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    sourceLabel: "Microsoft Learn — Ca documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x062-match",
    topicId: "d2-identity-security",
    skillObjective: "Describe Microsoft Entra Conditional Access",
    difficulty: "foundational",
    stem: "Which statement best defines 'Conditional Access'?",
    options: [
      [
        "a",
        "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      ],
      [
        "b",
        "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      ],
      [
        "c",
        "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
      ],
      [
        "d",
        "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Conditional Access evaluates identity signals and can apply policies such as MFA or blocking based on conditions.",
    optionExplanations: {
      a: "Incorrect. That statement describes Azure RBAC, not Conditional Access.",
      b: "Incorrect. That statement describes Microsoft Entra Domain Services, not Conditional Access.",
      c: "Incorrect. That statement describes Microsoft Defender for Cloud, not Conditional Access.",
      d: "Correct. This is the definition of Conditional Access.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    sourceLabel: "Microsoft Learn — Ca documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x063-sc1",
    topicId: "d2-identity-security",
    skillObjective: "Describe Azure role-based access control (RBAC)",
    difficulty: "intermediate",
    stem: "A help-desk worker needs read-only access to one resource group. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Azure RBAC"],
      ["b", "Microsoft Entra ID"],
      ["c", "Zero Trust"],
      ["d", "Multifactor authentication (MFA)"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
    optionExplanations: {
      a: "Correct. Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      b: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires Azure RBAC.",
      c: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires Azure RBAC.",
      d: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Azure RBAC.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
    sourceLabel: "Microsoft Learn — Rbac documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x063-def",
    topicId: "d2-identity-security",
    skillObjective: "Describe Azure role-based access control (RBAC)",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
    options: [
      ["a", "Azure RBAC"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "Zero Trust"],
      ["d", "Microsoft Entra ID"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
    optionExplanations: {
      a: "Correct. Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      b: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Azure RBAC.",
      c: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires Azure RBAC.",
      d: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires Azure RBAC.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
    sourceLabel: "Microsoft Learn — Rbac documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x063-sc2",
    topicId: "d2-identity-security",
    skillObjective: "Describe Azure role-based access control (RBAC)",
    difficulty: "intermediate",
    stem: "Administrators assign least-privilege Azure resource permissions based on job roles. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Zero Trust"],
      ["b", "Azure RBAC"],
      ["c", "Multifactor authentication (MFA)"],
      ["d", "Microsoft Entra ID"],
    ],
    correctOptionId: "b",
    correctExplanation:
      "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
    optionExplanations: {
      a: "Incorrect. Zero Trust means: Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation. The scenario/definition instead requires Azure RBAC.",
      b: "Correct. Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      c: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Azure RBAC.",
      d: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires Azure RBAC.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
    sourceLabel: "Microsoft Learn — Rbac documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x063-match",
    topicId: "d2-identity-security",
    skillObjective: "Describe Azure role-based access control (RBAC)",
    difficulty: "foundational",
    stem: "Which statement best defines 'Azure RBAC'?",
    options: [
      [
        "a",
        "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      ],
      [
        "b",
        "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      ],
      [
        "c",
        "MFA requires two or more authentication factors, reducing reliance on a password alone.",
      ],
      [
        "d",
        "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Azure role-based access control grants permissions to Azure resources through role assignments at defined scopes.",
    optionExplanations: {
      a: "Incorrect. That statement describes Zero Trust, not Azure RBAC.",
      b: "Incorrect. That statement describes Microsoft Entra ID, not Azure RBAC.",
      c: "Incorrect. That statement describes Multifactor authentication (MFA), not Azure RBAC.",
      d: "Correct. This is the definition of Azure RBAC.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
    sourceLabel: "Microsoft Learn — Rbac documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x064-sc1",
    topicId: "d2-identity-security",
    skillObjective: "Describe the concept of Zero Trust",
    difficulty: "intermediate",
    stem: "A security strategy requires verifying every access request regardless of network location. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "Single sign-on (SSO)"],
      ["b", "Microsoft Defender for Cloud"],
      ["c", "Zero Trust"],
      ["d", "Microsoft Entra Domain Services"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
    optionExplanations: {
      a: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Zero Trust.",
      b: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Zero Trust.",
      c: "Correct. Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      d: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Zero Trust.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/zero-trust",
    sourceLabel: "Microsoft Learn — Zerotrust documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x064-def",
    topicId: "d2-identity-security",
    skillObjective: "Describe the concept of Zero Trust",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
    options: [
      ["a", "Microsoft Defender for Cloud"],
      ["b", "Microsoft Entra Domain Services"],
      ["c", "Zero Trust"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
    optionExplanations: {
      a: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Zero Trust.",
      b: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Zero Trust.",
      c: "Correct. Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      d: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Zero Trust.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/zero-trust",
    sourceLabel: "Microsoft Learn — Zerotrust documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x064-sc2",
    topicId: "d2-identity-security",
    skillObjective: "Describe the concept of Zero Trust",
    difficulty: "intermediate",
    stem: "An architect rejects the idea that users are automatically trusted inside the corporate network. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Zero Trust"],
      ["b", "Microsoft Entra Domain Services"],
      ["c", "Microsoft Defender for Cloud"],
      ["d", "Single sign-on (SSO)"],
    ],
    correctOptionId: "a",
    correctExplanation:
      "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
    optionExplanations: {
      a: "Correct. Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      b: "Incorrect. Microsoft Entra Domain Services means: Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads. The scenario/definition instead requires Zero Trust.",
      c: "Incorrect. Microsoft Defender for Cloud means: Defender for Cloud provides security posture management and workload protection capabilities for cloud environments. The scenario/definition instead requires Zero Trust.",
      d: "Incorrect. Single sign-on (SSO) means: Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins. The scenario/definition instead requires Zero Trust.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/zero-trust",
    sourceLabel: "Microsoft Learn — Zerotrust documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x064-match",
    topicId: "d2-identity-security",
    skillObjective: "Describe the concept of Zero Trust",
    difficulty: "foundational",
    stem: "Which statement best defines 'Zero Trust'?",
    options: [
      [
        "a",
        "Microsoft Entra Domain Services provides managed domain services such as LDAP, Kerberos, and domain join for compatible workloads.",
      ],
      [
        "b",
        "Single sign-on lets a user authenticate once and access multiple authorized applications without repeated sign-ins.",
      ],
      [
        "c",
        "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
      ],
      [
        "d",
        "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
      ],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Zero Trust assumes no implicit trust and verifies access requests with least privilege and continuous evaluation.",
    optionExplanations: {
      a: "Incorrect. That statement describes Microsoft Entra Domain Services, not Zero Trust.",
      b: "Incorrect. That statement describes Single sign-on (SSO), not Zero Trust.",
      c: "Incorrect. That statement describes Microsoft Defender for Cloud, not Zero Trust.",
      d: "Correct. This is the definition of Zero Trust.",
    },
    sourceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/zero-trust",
    sourceLabel: "Microsoft Learn — Zerotrust documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x065-sc1",
    topicId: "d2-identity-security",
    skillObjective: "Describe the purpose of Microsoft Defender for Cloud",
    difficulty: "intermediate",
    stem: "A team needs security recommendations and threat protection for its Azure workloads. Choose the most specific concept or Azure service for this scenario.",
    options: [
      ["a", "External identities"],
      ["b", "Microsoft Entra ID"],
      ["c", "Multifactor authentication (MFA)"],
      ["d", "Microsoft Defender for Cloud"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    optionExplanations: {
      a: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Microsoft Defender for Cloud.",
      b: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires Microsoft Defender for Cloud.",
      c: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Microsoft Defender for Cloud.",
      d: "Correct. Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction",
    sourceLabel: "Microsoft Learn — Defender documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x065-def",
    topicId: "d2-identity-security",
    skillObjective: "Describe the purpose of Microsoft Defender for Cloud",
    difficulty: "foundational",
    stem: "Which term is defined by this statement? Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    options: [
      ["a", "Microsoft Entra ID"],
      ["b", "Multifactor authentication (MFA)"],
      ["c", "External identities"],
      ["d", "Microsoft Defender for Cloud"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    optionExplanations: {
      a: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires Microsoft Defender for Cloud.",
      b: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Microsoft Defender for Cloud.",
      c: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Microsoft Defender for Cloud.",
      d: "Correct. Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction",
    sourceLabel: "Microsoft Learn — Defender documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x065-sc2",
    topicId: "d2-identity-security",
    skillObjective: "Describe the purpose of Microsoft Defender for Cloud",
    difficulty: "intermediate",
    stem: "Cloud administrators assess misconfigurations and security posture across subscriptions. Select the most specifically applicable term, tool, or service.",
    options: [
      ["a", "Microsoft Entra ID"],
      ["b", "External identities"],
      ["c", "Multifactor authentication (MFA)"],
      ["d", "Microsoft Defender for Cloud"],
    ],
    correctOptionId: "d",
    correctExplanation:
      "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    optionExplanations: {
      a: "Incorrect. Microsoft Entra ID means: Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications. The scenario/definition instead requires Microsoft Defender for Cloud.",
      b: "Incorrect. External identities means: Microsoft Entra external identities enable secure collaboration with users outside an organization. The scenario/definition instead requires Microsoft Defender for Cloud.",
      c: "Incorrect. Multifactor authentication (MFA) means: MFA requires two or more authentication factors, reducing reliance on a password alone. The scenario/definition instead requires Microsoft Defender for Cloud.",
      d: "Correct. Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction",
    sourceLabel: "Microsoft Learn — Defender documentation",
    reviewStatus: "reviewed",
  },
  {
    id: "ai26-x065-match",
    topicId: "d2-identity-security",
    skillObjective: "Describe the purpose of Microsoft Defender for Cloud",
    difficulty: "foundational",
    stem: "Which statement best defines 'Microsoft Defender for Cloud'?",
    options: [
      [
        "a",
        "Microsoft Entra external identities enable secure collaboration with users outside an organization.",
      ],
      [
        "b",
        "Microsoft Entra ID is Microsoft's cloud identity and access management service for users and applications.",
      ],
      [
        "c",
        "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
      ],
      [
        "d",
        "MFA requires two or more authentication factors, reducing reliance on a password alone.",
      ],
    ],
    correctOptionId: "c",
    correctExplanation:
      "Defender for Cloud provides security posture management and workload protection capabilities for cloud environments.",
    optionExplanations: {
      a: "Incorrect. That statement describes External identities, not Microsoft Defender for Cloud.",
      b: "Incorrect. That statement describes Microsoft Entra ID, not Microsoft Defender for Cloud.",
      c: "Correct. This is the definition of Microsoft Defender for Cloud.",
      d: "Incorrect. That statement describes Multifactor authentication (MFA), not Microsoft Defender for Cloud.",
    },
    sourceUrl:
      "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction",
    sourceLabel: "Microsoft Learn — Defender documentation",
    reviewStatus: "reviewed",
  },
];

export const q_d2_identity_security = mapCandidates(drafts);
