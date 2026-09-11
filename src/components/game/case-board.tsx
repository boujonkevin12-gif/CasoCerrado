"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  CalendarClock,
  MessagesSquare,
  Network,
  ScrollText,
  Search as SearchIcon,
  Users,
  Lock,
  Link2,
} from "lucide-react";
import {
  runLocationAction,
  unlockDeductionAction,
  getInvestigationState,
} from "@/app/actions/case-actions";
import { pushAchievementToasts } from "@/components/game/achievement-toast";
import type {
  CaseSnapshot,
  ClientClue,
  ClientLocation,
  ClientSuspect,
} from "@/lib/game-types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClueIcon } from "@/components/game/clue-icon";
import { ClueModal } from "@/components/game/clue-modal";
import { AccusationFlow } from "@/components/game/accusation-flow";
import { SuspectPortrait } from "@/components/game/suspect-portrait";

type Tab = "sospechosos" | "ubicaciones" | "evidencias" | "cronologia" | "deducciones";

export function CaseBoard({
  investigationId,
  snapshot,
}: {
  investigationId: string;
  snapshot: CaseSnapshot;
}) {
  const { caseInfo, suspects, locations, timeline, deductions } = snapshot;

  const [tab, setTab] = React.useState<Tab>("sospechosos");
  const [clues, setClues] = React.useState<ClientClue[]>(snapshot.discoveredClues);
  const [clueIds, setClueIds] = React.useState<Set<string>>(new Set(snapshot.state.clueIds));
  const [optionIds, setOptionIds] = React.useState<Set<string>>(new Set(snapshot.state.optionIds));
  const [unlockedDeductionIds, setUnlockedDeductionIds] = React.useState<Set<string>>(
    new Set(snapshot.state.deductionIds),
  );
  const [doneActions, setDoneActions] = React.useState<Set<string>>(new Set());
  const [selectedLocationId, setSelectedLocationId] = React.useState<string | null>(
    locations[0]?.id ?? null,
  );
  const [actionFeedback, setActionFeedback] = React.useState<Record<string, string>>({});
  const [inspectingClue, setInspectingClue] = React.useState<ClientClue | null>(null);
  const [accusing, setAccusing] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  // Sincroniza el estado real de la investigación con el servidor (pistas/preguntas hechas).
  React.useEffect(() => {
    let alive = true;
    getInvestigationState(investigationId).then((state) => {
      if (!alive) return;
      setClues(state.clues);
      setClueIds(new Set(state.clueIds));
      setOptionIds(new Set(state.optionIds));
      setUnlockedDeductionIds(new Set(state.deductionIds));
    });
    return () => {
      alive = false;
    };
  }, [investigationId]);

  const selectedLocation = locations.find((l) => l.id === selectedLocationId) ?? null;

  function addClue(clue: ClientClue) {
    setClues((prev) => (prev.some((c) => c.id === clue.id) ? prev : [...prev, clue]));
    setClueIds((prev) => new Set(prev).add(clue.id));
  }

  function handleAction(actionId: string) {
    startTransition(async () => {
      try {
        const result = await runLocationAction(investigationId, actionId);
        setDoneActions((prev) => new Set(prev).add(actionId));
        setActionFeedback((prev) => ({ ...prev, [actionId]: result.resultText }));
        if (result.clueDiscovered) {
          addClue(result.clueDiscovered);
          toast.success(`Nueva evidencia: ${result.clueDiscovered.title}`, {
            description: "Se agregó al expediente.",
          });
        }
        if (result.newlyGranted.length > 0) pushAchievementToasts(result.newlyGranted);
      } catch {
        toast.error("No se pudo completar la acción. Probá de nuevo.");
      }
    });
  }

  function handleUnlock(deductionId: string) {
    startTransition(async () => {
      try {
        const result = await unlockDeductionAction(investigationId, deductionId);
        setUnlockedDeductionIds((prev) => new Set(prev).add(deductionId));
        if (result.newlyGranted.length > 0) pushAchievementToasts(result.newlyGranted);
      } catch {
        toast.error("Todavía te falta información para conectar esa conclusión.");
      }
    });
  }

  function deductionReady(d: { requiredClueIds: string[]; requiredOptionIds: string[] }) {
    return (
      d.requiredClueIds.every((id) => clueIds.has(id)) &&
      d.requiredOptionIds.every((id) => optionIds.has(id))
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-8 pb-28">
      <Card className="animate-fade-up">
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono-tag text-[11px] text-ink-faint">{caseInfo.code}</span>
              <h1 className="font-display text-3xl text-ink">{caseInfo.title}</h1>
            </div>
            <Badge tone="blood">INVESTIGACIÓN EN CURSO</Badge>
          </div>
          <p className="text-sm leading-relaxed text-ink-dim">{caseInfo.intro}</p>
          <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 font-mono-tag text-[11px] text-ink-faint">
            <span>VÍCTIMA: {caseInfo.victimName}, {caseInfo.victimAge} · {caseInfo.victimJob}</span>
            <span>LUGAR: {caseInfo.place}</span>
            <span>HORA: {caseInfo.timeOfCrime}</span>
          </div>
          {timeline.length > 0 && (
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono-tag text-[11px] text-ink-faint">
              <span className="text-gold/70">CRONOLOGÍA PARCIAL DISPONIBLE</span>
            </div>
          )}
        </CardContent>
      </Card>

      <nav className="flex flex-wrap gap-2 border-b border-hairline pb-3">
        <TabButton active={tab === "sospechosos"} onClick={() => setTab("sospechosos")} icon={Users}>
          Sospechosos
        </TabButton>
        <TabButton active={tab === "ubicaciones"} onClick={() => setTab("ubicaciones")} icon={SearchIcon}>
          Pistas
        </TabButton>
        <TabButton active={tab === "evidencias"} onClick={() => setTab("evidencias")} icon={ScrollText}>
          Evidencias ({clues.length}/{caseInfo.totalClues})
        </TabButton>
        <TabButton active={tab === "cronologia"} onClick={() => setTab("cronologia")} icon={CalendarClock}>
          Cronología
        </TabButton>
        <TabButton active={tab === "deducciones"} onClick={() => setTab("deducciones")} icon={Network}>
          Deducciones ({unlockedDeductionIds.size}/{deductions.length})
        </TabButton>
      </nav>

      {tab === "sospechosos" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-up">
          {suspects.map((s) => (
            <Card key={s.id} className="h-full">
              <CardContent className="flex flex-col gap-3">
                <div className="flex gap-4">
                  <SuspectPortrait name={s.name} color={s.avatarColor} size={52} />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg text-ink">{s.name}</h3>
                      <span className="font-mono-tag text-[10px] text-ink-faint">{s.age} AÑOS</span>
                    </div>
                    <span className="text-xs text-gold-soft">{s.job}</span>
                    <span className="text-xs text-ink-faint">{s.relationship}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-dim">{s.bio}</p>
                {s.alibi && (
                  <p className="border-l-2 border-hairline-strong pl-3 text-xs leading-relaxed text-ink-dim">
                    <span className="font-mono-tag text-[10px] text-ink-faint">ALIBI DECLARADO: </span>
                    {s.alibi}
                  </p>
                )}
                <Link
                  href={`/case/${investigationId}/interrogar/${s.id}`}
                  className="mt-auto"
                >
                  <Button variant="secondary" size="sm" className="w-full justify-center normal-case">
                    <MessagesSquare size={14} />
                    Interrogar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tab === "ubicaciones" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr] animate-fade-up">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocationId(loc.id)}
                className={`shrink-0 rounded-sm border px-4 py-3 text-left text-sm transition-colors cursor-pointer ${
                  selectedLocationId === loc.id
                    ? "border-gold/60 bg-panel-2 text-gold-soft"
                    : "border-hairline text-ink-dim hover:border-hairline-strong"
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          {selectedLocation && (
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <h3 className="font-display text-xl text-ink">{selectedLocation.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                    {selectedLocation.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {selectedLocation.actions.map((action) => (
                    <div key={action.id}>
                      <Button
                        variant={doneActions.has(action.id) ? "outline" : "secondary"}
                        size="sm"
                        disabled={pending}
                        onClick={() => handleAction(action.id)}
                        className="w-full justify-start normal-case"
                      >
                        <SearchIcon size={14} />
                        {action.label}
                      </Button>
                      {actionFeedback[action.id] && (
                        <p className="mt-2 border-l-2 border-hairline-strong pl-3 text-sm leading-relaxed text-ink-dim animate-fade-up">
                          {actionFeedback[action.id]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {tab === "evidencias" && (
        <div className="animate-fade-up">
          {clues.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center text-sm text-ink-dim">
                Todavía no encontraste evidencias. Recorré las ubicaciones del caso.
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {clues.map((c) => (
                <button key={c.id} onClick={() => setInspectingClue(c)} className="cursor-pointer">
                  <Card className="h-full transition-colors hover:border-gold/50">
                    <CardContent className="flex flex-col items-center gap-2 py-5 text-center">
                      <ClueIcon name={c.icon} size={22} className="text-gold" strokeWidth={1.5} />
                      <span className="text-xs text-ink">{c.title}</span>
                      <span className="font-mono-tag text-[10px] text-ink-faint">{typeLabel(c.type)}</span>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === "cronologia" && (
        <div className="animate-fade-up">
          {timeline.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center text-sm text-ink-dim">
                La línea temporal se completa cuando encontrás evidencias y avanzás en los
                interrogatorios.
              </CardContent>
            </Card>
          ) : (
            <ol className="flex flex-col gap-0 border-l border-hairline">
              {timeline.map((t) => (
                <li key={t.id} className="relative pb-5 pl-5">
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border border-gold/60 bg-void" />
                  <div className="font-mono-tag text-[11px] text-gold-soft">{t.time}</div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-dim">{t.text}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {tab === "deducciones" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-up">
          {deductions.map((d) => {
            const unlocked = unlockedDeductionIds.has(d.id);
            const ready = deductionReady(d);
            return (
              <Card key={d.id} className={unlocked ? "border-gold/40" : ""}>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg text-ink">{d.title}</h3>
                    {unlocked ? (
                      <Badge tone="gold">CONECTADA</Badge>
                    ) : (
                      <Badge tone="neutral">POR CONECTAR</Badge>
                    )}
                  </div>
                  {unlocked ? (
                    <p className="text-sm leading-relaxed text-ink-dim">{d.text}</p>
                  ) : (
                    <>
                      <p className="text-xs italic text-ink-faint">
                        Necesitás reunir las piezas dispersas para llegar a esta conclusión.
                      </p>
                      <Button
                        variant={ready ? "primary" : "outline"}
                        size="sm"
                        disabled={pending || !ready}
                        onClick={() => handleUnlock(d.id)}
                        className="w-full justify-center normal-case"
                      >
                        {ready ? <Link2 size={13} /> : <Lock size={13} />}
                        {ready ? "Conectar deducción" : "Piezas insuficientes"}
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-hairline bg-void/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <span className="font-mono-tag text-[11px] text-ink-faint">
            {clues.length} / {caseInfo.totalClues} PISTAS ENCONTRADAS
          </span>
          <Button variant="primary" className="uppercase" onClick={() => setAccusing(true)}>
            Acusar
          </Button>
        </div>
      </div>

      {inspectingClue && (
        <ClueModal clue={inspectingClue} onClose={() => setInspectingClue(null)} />
      )}

      {accusing && (
        <AccusationFlow
          investigationId={investigationId}
          suspects={suspects}
          motives={snapshot.accusation.motives}
          methods={snapshot.accusation.methods}
          onClose={() => setAccusing(false)}
        />
      )}
    </div>
  );
}

function typeLabel(type: string) {
  const labels: Record<string, string> = {
    FISICA: "Física",
    TESTIMONIO: "Testimonio",
    DOCUMENTO: "Documento",
    DIGITAL: "Digital",
  };
  return labels[type] ?? type;
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Users;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors cursor-pointer ${
        active ? "bg-panel-2 text-gold-soft" : "text-ink-dim hover:text-ink"
      }`}
    >
      <Icon size={15} />
      {children}
    </button>
  );
}