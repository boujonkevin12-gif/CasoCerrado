import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { buildCaseSnapshot } from "@/lib/game-logic";
import { ChatConversation } from "@/components/game/chat-conversation";
import { InvestigationStatus } from "@prisma/client";

type InterrogationParams = { id: string; suspectId: string };

export default async function InterrogatePage({
  params,
}: {
  params: Promise<InterrogationParams>;
}) {
  const { id, suspectId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const investigation = await prisma.investigation.findUnique({
    where: { id },
    select: { userId: true, status: true },
  });
  if (!investigation || investigation.userId !== user.id) notFound();
  if (investigation.status !== InvestigationStatus.EN_CURSO) {
    redirect(`/case/${id}/resultado`);
  }

  const snapshot = await buildCaseSnapshot(id, user.id);
  const suspect = snapshot.suspects.find((s) => s.id === suspectId);
  if (!suspect) notFound();

  const dialogues = snapshot.dialogues.filter((d) => d.suspectId === suspectId);

  return (
    <main className="flex flex-1 flex-col">
      <ChatConversation
        investigationId={id}
        suspect={suspect}
        dialogues={dialogues}
        initialState={{ clueIds: snapshot.state.clueIds, optionIds: snapshot.state.optionIds }}
        backHref={`/case/${id}`}
        caseCode={snapshot.caseInfo.code}
      />
    </main>
  );
}