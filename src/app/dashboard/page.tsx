import Link from "next/link";
import { BadgeDollarSign, Flame, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { ensureUnlockedCases } from "@/lib/game-logic";
import { xpProgress } from "@/lib/xp";
import { ProfileForm } from "@/components/game/profile-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge, ProgressBar, SectionLabel } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppHeader } from "@/components/game/app-header";
import { SceneArt } from "@/components/game/scene-art";
import { InvestigationStatus } from "@prisma/client";
import { beginCase } from "@/app/actions/case-actions";

const difficultyLabel: Record<string, string> = {
  FACIL: "Fácil",
  MEDIO: "Medio",
  DIFICIL: "Difícil",
  EXPERTO: "Experto",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <span className="font-mono-tag text-xs text-ink-faint">NUEVO EXPEDIENTE</span>
        <h1 className="font-display text-3xl text-ink">Presentate como detective</h1>
        <p className="max-w-sm text-sm text-ink-dim">
          No necesitás contraseña: tu progreso se guarda con este nombre en este dispositivo.
        </p>
        <ProfileForm />
      </main>
    );
  }

  await ensureUnlockedCases(user.id);

  const unlocks = await prisma.userCaseUnlock.findMany({
    where: { userId: user.id },
    include: { case: true },
    orderBy: { case: { order: "asc" } },
  });

  const investigations = await prisma.investigation.findMany({
    where: { userId: user.id },
    orderBy: { startedAt: "desc" },
    include: { case: true },
  });

  const solvedCaseIds = new Set(
    investigations.filter((i) => i.status === InvestigationStatus.RESUELTO).map((i) => i.caseId),
  );

  const allCases = await prisma.case.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });

  const activeByCase: Record<string, string> = {};
  for (const inv of investigations) {
    if (!activeByCase[inv.caseId] && inv.status === InvestigationStatus.EN_CURSO) {
      activeByCase[inv.caseId] = inv.id;
    }
  }
  const unlockedIds = new Set(unlocks.map((u) => u.caseId));
  const library = allCases.map((c) => {
    const solved = solvedCaseIds.has(c.id);
    const idActive = activeByCase[c.id];
    const unlocked = unlockedIds.has(c.id);
    return { case: c, solved, idActive, unlocked };
  });

  const nextCase =
    unlocks.map((u) => u.case).find((c) => !solvedCaseIds.has(c.id)) ??
    allCases.find((c) => !solvedCaseIds.has(c.id));
  const activeInvestigation = nextCase
    ? investigations.find(
        (i) => i.caseId === nextCase.id && i.status === InvestigationStatus.EN_CURSO,
      )
    : undefined;

  const lastInvestigation = investigations[0];
  const progress = xpProgress(user.xp);
  const totalAttempts = user.casesSolved + user.casesFailed;
  const accuracy = totalAttempts > 0 ? Math.round((user.casesSolved / totalAttempts) * 100) : 0;

  return (
    <main className="flex flex-1 flex-col">
      <AppHeader username={user.username} level={user.level} />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-10">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatTile icon={Sparkles} label="XP" value={`${user.xp}`} sub={`Nivel ${user.level}`} />
          <StatTile icon={BadgeDollarSign} label="Dinero" value={`$${user.coins}`} />
          <StatTile icon={ShieldCheck} label="Casos resueltos" value={`${user.casesSolved}`} />
          <StatTile icon={Gauge} label="Precisión" value={`${accuracy}%`} />
        </section>

        <section>
          <SectionLabel>PROGRESO DE NIVEL</SectionLabel>
          <div className="mt-3 flex items-center gap-4">
            <ProgressBar value={progress.percent} className="flex-1" />
            <span className="font-mono-tag text-xs text-ink-faint shrink-0">
              {progress.toNext} XP para el nivel {progress.level + 1}
            </span>
          </div>
        </section>

        <section>
          <SectionLabel>CASO DISPONIBLE</SectionLabel>
          <Card className="mt-3">
            {nextCase ? (
              <>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <div className="font-mono-tag text-[11px] text-ink-faint">
                      {nextCase.code}
                    </div>
                    <h2 className="font-display text-2xl text-ink">{nextCase.title}</h2>
                  </div>
                  <Badge tone="blood">{difficultyLabel[nextCase.difficulty]}</Badge>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-ink-dim">{nextCase.intro}</p>
                  <div className="flex items-center justify-between">
                    <Badge tone={activeInvestigation ? "gold" : "neutral"}>
                      {activeInvestigation ? "Investigación en curso" : "Disponible"}
                    </Badge>
                    <form
                      action={async () => {
                        "use server";
                        await beginCase(nextCase.id);
                      }}
                    >
                      <Button type="submit" variant="primary" className="uppercase">
                        {activeInvestigation ? "Continuar caso" : "Comenzar caso"}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="py-10 text-center">
                <p className="font-display text-xl text-ink">
                  Resolviste todos los casos disponibles.
                </p>
                <p className="mt-2 text-sm text-ink-dim">
                  Subí de nivel para desbloquear el próximo expediente.
                </p>
              </CardContent>
            )}
          </Card>
        </section>

        <section>
          <SectionLabel>BIBLIOTECA DE CASOS</SectionLabel>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {library.map(({ case: c, solved, idActive, unlocked }) => {
              const locked = !unlocked && !solved;
              return (
                <Card key={c.id} className="flex flex-col overflow-hidden">
                  <SceneArt scene={c.scene ?? ""} code={c.code} className="h-20 w-full border-b border-hairline" />
                  <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-tag text-[10px] text-ink-faint">{c.code}</span>
                      <div className="flex items-center gap-2">
                        <Badge tone="neutral" className="text-[10px]">
                          {difficultyLabel[c.difficulty]}
                        </Badge>
                        {locked && (
                          <Badge tone="neutral" className="text-[10px]">
                            Nivel {c.requiredLevel}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <h3 className="font-display text-lg leading-tight text-ink">{c.title}</h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-ink-dim">{c.intro}</p>
                    <div className="mt-2 flex items-center gap-2">
                      {solved ? (
                        <Badge tone="green">Resuelto</Badge>
                      ) : idActive ? (
                        <Badge tone="gold">En curso</Badge>
                      ) : locked ? (
                        <Badge tone="neutral">Bloqueado</Badge>
                      ) : (
                        <Badge tone="neutral">Disponible</Badge>
                      )}
                      <div className="ml-auto">
                        {idActive ? (
                          <Link href={`/case/${idActive}`}>
                            <Button variant="outline" size="sm">
                              Continuar
                            </Button>
                          </Link>
                        ) : locked || solved ? null : (
                          <form
                            action={async () => {
                              "use server";
                              await beginCase(c.id);
                            }}
                          >
                            <Button type="submit" variant="outline" size="sm">
                              Comenzar
                            </Button>
                          </form>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-ink-faint">
                <Flame size={14} className="text-gold" />
                <span className="font-mono-tag text-[11px]">MEJOR RACHA</span>
              </div>
              <span className="font-display text-2xl text-ink">{user.bestStreak}</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-1">
              <span className="font-mono-tag text-[11px] text-ink-faint">
                ÚLTIMA INVESTIGACIÓN
              </span>
              <span className="font-display text-lg text-ink">
                {lastInvestigation ? lastInvestigation.case.title : "Sin actividad todavía"}
              </span>
              {lastInvestigation && (
                <Badge
                  tone={
                    lastInvestigation.status === InvestigationStatus.RESUELTO
                      ? "green"
                      : lastInvestigation.status === InvestigationStatus.FALLIDO
                        ? "blood"
                        : "gold"
                  }
                  className="mt-1 w-fit"
                >
                  {lastInvestigation.status === InvestigationStatus.RESUELTO
                    ? "Resuelto"
                    : lastInvestigation.status === InvestigationStatus.FALLIDO
                      ? "Fallido"
                      : "En curso"}
                </Badge>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-1">
              <span className="font-mono-tag text-[11px] text-ink-faint">PRÓXIMO NIVEL</span>
              <span className="font-display text-2xl text-ink">Nivel {progress.level + 1}</span>
              <span className="text-xs text-ink-dim">{progress.toNext} XP restantes</span>
            </CardContent>
          </Card>
        </section>

        <Link href="/profile" className="self-start text-xs text-ink-faint hover:text-gold-soft">
          Ver perfil completo del detective →
        </Link>
      </div>
    </main>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Sparkles;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-1">
        <Icon size={16} className="text-gold" strokeWidth={1.5} />
        <span className="font-display text-2xl text-ink">{value}</span>
        <span className="font-mono-tag text-[10px] text-ink-faint">
          {label}
          {sub ? ` · ${sub}` : ""}
        </span>
      </CardContent>
    </Card>
  );
}
