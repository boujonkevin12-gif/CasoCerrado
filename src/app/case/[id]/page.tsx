import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { buildCaseSnapshot } from "@/lib/game-logic";
import { AppHeader } from "@/components/game/app-header";
import { CaseBoard } from "@/components/game/case-board";
import { SceneArt } from "@/components/game/scene-art";
import { InvestigationStatus } from "@prisma/client";

export default async function CasePage({ params }: PageProps<"/case/[id]">) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const investigation = await prisma.investigation.findUniqueOrThrow({
    where: { id },
    select: { userId: true, status: true, caseId: true, id: true },
  });
  if (investigation.userId !== user.id) notFound();

  if (investigation.status !== InvestigationStatus.EN_CURSO) {
    redirect(`/case/${investigation.id}/resultado`);
  }

  const snapshot = await buildCaseSnapshot(id, user.id);

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-hairline">
        <AppHeader username={user.username} level={user.level} caseCode={snapshot.caseInfo.code} />
        <SceneArt
          scene={snapshot.caseInfo.scene}
          code={snapshot.caseInfo.code}
          className="h-28 w-full sm:h-40"
        />
      </div>
      <CaseBoard investigationId={id} snapshot={snapshot} />
    </main>
  );
}