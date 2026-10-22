/** All 416 expansion questions are documentation-reviewed and eligible after integration. */
import type { QuizQuestion } from "@/types/quiz";
import { q_d1_cloud_computing } from "./d1-cloud-computing";
import { q_d1_cloud_benefits } from "./d1-cloud-benefits";
import { q_d1_cloud_service_types } from "./d1-cloud-service-types";
import { q_d2_core_architecture } from "./d2-core-architecture";
import { q_d2_compute_networking } from "./d2-compute-networking";
import { q_d2_storage } from "./d2-storage";
import { q_d2_identity_security } from "./d2-identity-security";
import { q_d3_cost_management } from "./d3-cost-management";
import { q_d3_governance_compliance } from "./d3-governance-compliance";
import { q_d3_managing_deploying } from "./d3-managing-deploying";
import { q_d3_monitoring } from "./d3-monitoring";

export const expansionCandidateQuestions: QuizQuestion[] = [
  ...q_d1_cloud_computing,
  ...q_d1_cloud_benefits,
  ...q_d1_cloud_service_types,
  ...q_d2_core_architecture,
  ...q_d2_compute_networking,
  ...q_d2_storage,
  ...q_d2_identity_security,
  ...q_d3_cost_management,
  ...q_d3_governance_compliance,
  ...q_d3_managing_deploying,
  ...q_d3_monitoring,
];
