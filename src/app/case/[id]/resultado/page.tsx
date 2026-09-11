import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { AppHeader } from "@/components/game/app-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClueIcon } from "@/components/game/clue-icon";
import { SceneArt } from "@/components/game/scene-art";
import { formatTime } from "@/lib/utils";
import { InvestigationStatus } from "@prisma/client";
import { beginCase } from "@/app/actions/case-actions";

export default async function CaseResultPage({ params }: PageProps<"/case/[id]/resultado">) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const investigation = await prisma.investigation.findUnique({
    where: { id },
    include: {
      case: { include: { suspects: true, clues: true, accusationChoices: true } },
      clues: { include: { clue: true } },
    },
  });

  if (!investigation || investigation.userId !== user.id) notFound();
  if (investigation.status === InvestigationStatus.EN_CURSO) redirect(`/case/${investigation.id}`);

  const correct = investigation.status === InvestigationStatus.RESUELTO;
  const guilty = investigation.case.suspects.find((s) => s.isGuilty)!;
  const accused = investigation.case.suspects.find((s) => s.id === investigation.accusedSuspectId);
  const rightMotive = investigation.case.accusationChoices.find(
    (c) => c.kind === "MOTIVO" && c.isCorrect,
  );
  const rightMethod = investigation.case.accusationChoices.find(
    (c) => c.kind === "METODO" && c.isCorrect,
  );
  const perfect =
    correct &&
    investigation.accusedMotiveLabel === rightMotive?.label &&
    investigation.accusedMethodLabel === rightMethod?.label;

  const motiveRight = investigation.accusedMotiveLabel === rightMotive?.label;
  const methodRight = investigation.accusedMethodLabel === rightMethod?.label;

  const totalClues = investigation.case.clues.length;
  const foundClues = investigation.clues.length;
  const accuracy = totalClues > 0 ? Math.round((foundClues / totalClues) * 100) : 0;
  const keyClue =
    investigation.clues.find((c) => c.clue.importance === "CLAVE")?.clue ??
    investigation.clues[0]?.clue;

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-hairline">
        <AppHeader username={user.username} level={user.level} caseCode={investigation.case.code} />
        <SceneArt
          scene={investigation.case.scene ?? ""}
          code={investigation.case.code}
          className="h-24 w-full sm:h-32"
        />
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-8 px-6 py-12 text-center">
        <div className="animate-stamp">
          <Badge tone={correct ? "green" : "blood"} className="px-4 py-1.5 text-sm">
            {correct ? "CASE CLOSED" : perfect ? "CASE CLOSED · IM-PER-FECTO" : "CASE FAILED"}
          </Badge>
        </div>

        <div>
          <h1 className="font-display text-4xl text-ink">
            {correct ? "¡Caso resuelto!" : "Esta vez, no."}
          </h1>
          <p className="mt-3 max-w-lg font-display text-lg italic leading-relaxed text-ink-dim">
            {correct
              ? perfect
                ? "Culpable, motivo y método encajaron como una sola pieza."
                : "El culpable cayó, pero algo del cuadro no cerraba del todo."
              : "Acusaste a la persona equivocada. El caso se cierra con otra verdad."}
          </p>
        </div>

        <Card className="w-full text-left">
          <CardContent className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <span className="font-mono-tag text-[11px] text-ink-faint">
                  {correct ? "CULPABLE" : `ACUSASTE A`}
                </span>
                <p className="font-display text-2xl text-ink">{correct ? guilty.name : (accused?.name ?? "—")}</p>
                {!correct && guilty && (
                  <p className="mt-2 text-xs text-ink-faint">
                    El culpable era <span className="text-blood-bright">{guilty.name}</span>.
                  </p>
                )}
              </div>
              <div>
                <span className="font-mono-tag text-[11px] text-ink-faint">EVIDENCIA CLAVE</span>
                {keyClue ? (
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink">
                    <ClueIcon name={keyClue.icon} size={16} className="text-gold" />
                    {keyClue.title}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-ink-faint">Sin evidencias registradas.</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ResultRow
                eyebrow="MOTIVO"
                chosen={investigation.accusedMotiveLabel}
                truth={correct ? (rightMotive?.label ?? "") : null}
                right={motiveRight}
                showTruth={correct}
              />
              <ResultRow
                eyebrow="MÉTODO"
                chosen={investigation.accusedMethodLabel}
                truth={correct ? (rightMethod?.label ?? "") : null}
                right={methodRight}
                showTruth={correct}
              />
            </div>

            <div className="border-t border-hairline pt-4">
              <span className="font-mono-tag text-[11px] text-ink-faint">
                {correct ? "RESOLUCIÓN DEL CASO" : "QUÉ PASÓ EN REALIDAD"}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                {investigation.case.resolutionText}
              </p>
              {correct && (
                <div className="mt-3 flex flex-col gap-1 text-sm">
                  <Detail label="Motivo real" text={investigation.case.motive} />
                  <Detail label="Método real" text={investigation.case.method} />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          <StatBox label="XP" value={`+${investigation.xpEarned}`} />
          <StatBox label="Dinero" value={`+$${investigation.coinsEarned}`} />
          <StatBox label="Tiempo" value={formatTime(investigation.timeSecs ?? 0)} />
          <StatBox label="Pistas" value={`${foundClues}/${totalClues}`} sub={`${accuracy}%`} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {correct ? (
            <Link href="/dashboard">
              <Button variant="gold" size="lg" className="uppercase">
                Siguiente caso
              </Button>
            </Link>
          ) : (
            <form
              action={async () => {
                "use server";
                await beginCase(investigation.caseId);
              }}
            >
              <Button type="submit" variant="primary" size="lg" className="uppercase">
                Volver a intentar
              </Button>
            </form>
          )}
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              Volver al expediente
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <p className="border-l-2 border-gold/40 pl-3">
      <span className="font-mono-tag text-[10px] uppercase tracking-wide text-gold-soft">{label}: </span>
      <span className="text-ink-dim">{text}</span>
    </p>
  );
}

function ResultRow({
  eyebrow,
  chosen,
  truth,
  right,
  showTruth,
}: {
  eyebrow: string;
  chosen: string | null;
  truth: string | null;
  right: boolean;
  showTruth: boolean;
}) {
  return (
    <div className="rounded-sm border border-hairline bg-panel-2 px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="font-mono-tag text-[11px] text-ink-faint">{eyebrow}</span>
        {chosen && (
          <Badge tone={right ? "green" : "blood"}>{right ? "Correcto" : "Incorrecto"}</Badge>
        )}
      </div>
      <p className="mt-1 text-sm text-ink">{chosen ?? "—"}</p>
      {showTruth && truth && !right && (
        <p className="mt-1 text-xs text-ink-faint">El real: {truth}</p>
      )}
    </div>
  );
}

function StatBox({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-1 py-4">
        <span className="font-display text-xl text-ink">{value}</span>
        <span className="font-mono-tag text-[10px] text-ink-faint">
          {label}
          {sub ? ` · ${sub}` : ""}
        </span>
      </CardContent>
    </Card>
  );
}