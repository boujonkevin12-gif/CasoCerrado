"use server";

import { getCurrentUser } from "@/lib/session";
import {
  startInvestigation,
  performLocationAction,
  askQuestion,
  unlockDeduction,
  accuseSuspect,
  getInvestigationState as getInvestigationStateLogic,
} from "@/lib/game-logic";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/");
  return user;
}

export async function beginCase(caseId: string) {
  const user = await requireUser();
  const investigation = await startInvestigation(user.id, caseId);
  redirect(`/case/${investigation.id}`);
}

export async function runLocationAction(investigationId: string, actionId: string) {
  const user = await requireUser();
  const result = await performLocationAction(investigationId, actionId, user.id);
  revalidatePath(`/case/${investigationId}`);
  return result;
}

export async function askQuestionAction(investigationId: string, optionId: string) {
  const user = await requireUser();
  const result = await askQuestion(investigationId, optionId, user.id);
  return result;
}

export async function unlockDeductionAction(investigationId: string, deductionId: string) {
  const user = await requireUser();
  const result = await unlockDeduction(investigationId, deductionId, user.id);
  revalidatePath(`/case/${investigationId}`);
  return result;
}

export async function confirmAccusation(
  investigationId: string,
  suspectId: string,
  motiveChoiceId: string,
  methodChoiceId: string,
) {
  const user = await requireUser();
  const result = await accuseSuspect(investigationId, suspectId, motiveChoiceId, methodChoiceId, user.id);
  revalidatePath(`/case/${investigationId}`);
  return result;
}

export async function getInvestigationState(investigationId: string) {
  const user = await requireUser();
  return getInvestigationStateLogic(investigationId, user.id);
}