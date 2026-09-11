"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, Crosshair, Lock, Send, Star } from "lucide-react";
import { askQuestionAction } from "@/app/actions/case-actions";
import { pushAchievementToasts } from "@/components/game/achievement-toast";
import { ClueModal } from "@/components/game/clue-modal";
import { SuspectPortrait } from "@/components/game/suspect-portrait";
import type { ClientClue, ClientDialogue, ClientDialogueOption, ClientSuspect } from "@/lib/game-types";
import { cn } from "@/lib/utils";

type Msg = {
  id: string;
  role: "investigador" | "sospechoso" | "sistema";
  text: string;
  time: string;
  clue?: ClientClue;
};

function nowTime() {
  return new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
}

export function ChatConversation({
  investigationId,
  suspect,
  dialogues,
  initialState,
  backHref,
  caseCode,
}: {
  investigationId: string;
  suspect: ClientSuspect;
  dialogues: ClientDialogue[];
  initialState: { clueIds: string[]; optionIds: string[] };
  backHref: string;
  caseCode: string;
}) {
  const [messages, setMessages] = React.useState<Msg[]>(() => {
    const initial: Msg[] = [];
    if (suspect.openingStatement) {
      initial.push({
        id: "opening",
        role: "sospechoso",
        text: suspect.openingStatement,
        time: nowTime(),
      });
    }
    initial.push({
      id: "intro",
      role: "sistema",
      text: "Podés hacer una pregunta por turno. Cuando tengas una evidencia, mostrarla puede hacerlo cambiar de versión.",
      time: nowTime(),
    });
    return initial;
  });
  const [optionIds, setOptionIds] = React.useState<Set<string>>(new Set(initialState.optionIds));
  const [clueIds, setClueIds] = React.useState<Set<string>>(new Set(initialState.clueIds));
  const [cluesFound, setCluesFound] = React.useState<ClientClue[]>([]);
  const [inspectingClue, setInspectingClue] = React.useState<ClientClue | null>(null);
  const [pending, startTransition] = React.useTransition();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const allOptions = dialogues.flatMap(
    (d) => d.options.map((o) => ({ ...o, question: d.question })) ?? [],
  );

  function optionAvailable(o: ClientDialogueOption) {
    const clueOk = !o.requiresClueId || clueIds.has(o.requiresClueId);
    const chainOk = !o.requiresOptionId || optionIds.has(o.requiresOptionId);
    return clueOk && chainOk;
  }

  function ask(o: ClientDialogueOption) {
    if (pending || optionIds.has(o.id)) return;
    startTransition(async () => {
      const askedId = `${o.id}-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        { id: askedId, role: "investigador", text: o.label, time: nowTime() },
      ]);
      try {
        const result = await askQuestionAction(investigationId, o.id);
        setOptionIds((prev) => new Set(prev).add(o.id));
        setMessages((prev) => [
          ...prev,
          { id: `${o.id}-resp`, role: "sospechoso", text: result.responseText, time: nowTime() },
        ]);
        if (result.clueUnlocked) {
          setCluesFound((prev) =>
            prev.some((c) => c.id === result.clueUnlocked!.id) ? prev : [...prev, result.clueUnlocked!],
          );
          setClueIds((prev) => new Set(prev).add(result.clueUnlocked!.id));
          setMessages((prev) => [
            ...prev,
            {
              id: `${o.id}-clue`,
              role: "sistema",
              time: nowTime(),
              text: `Evidencia obtenida:`,
              clue: result.clueUnlocked!,
            },
          ]);
        }
        if (result.newlyGranted.length > 0) pushAchievementToasts(result.newlyGranted);
      } catch {
        setMessages((prev) => [
          ...prev,
          { id: `${o.id}-err`, role: "sistema", time: nowTime(), text: "No se puede hacer eso todavía." },
        ]);
      }
    });
  }

  const remaining = allOptions.filter((o) => !optionIds.has(o.id));

  return (
    <div className="mx-auto flex h-[100dvh] w-full max-w-6xl flex-col md:flex-row">
      {/* Dossier lateral */}
      <aside className="flex shrink-0 flex-col gap-4 border-b border-hairline bg-panel/60 p-4 md:w-80 md:border-b-0 md:border-r md:overflow-y-auto">
        <div className="flex items-center gap-3">
          <SuspectPortrait name={suspect.name} color={suspect.avatarColor} size={48} />
          <div className="flex flex-col">
            <span className="font-display text-lg text-ink">{suspect.name}</span>
            <span className="text-xs text-gold-soft">{suspect.job}</span>
          </div>
          <CloseChat backHref={backHref} />
        </div>

        <div className="hidden flex-col gap-3 md:flex">
          <DossierRow label="RELACIÓN" value={suspect.relationship} />
          <DossierRow label="EDAD" value={`${suspect.age} años`} />
          <div>
            <span className="font-mono-tag text-[10px] text-ink-faint">FICHA</span>
            <p className="mt-1 text-sm leading-relaxed text-ink-dim">{suspect.bio}</p>
          </div>
          {suspect.alibi && (
            <div>
              <span className="font-mono-tag text-[10px] text-ink-faint">ALIBI DECLARADO</span>
              <p className="mt-1 border-l-2 border-hairline-strong pl-3 text-sm leading-relaxed text-ink-dim">
                {suspect.alibi}
              </p>
            </div>
          )}
          <div className="rounded-sm border border-hairline bg-panel-2 px-3 py-2 text-xs text-ink-faint">
            Tomá nota de lo que promete y de lo que sostiene. Las contradicciones se arman solas.
          </div>
        </div>
      </aside>

      {/* Chat */}
      <section className="flex h-full min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <Link
              href={backHref}
              className="flex items-center gap-1 text-xs text-ink-faint transition-colors hover:text-gold-soft shrink-0"
            >
              <ArrowLeft size={14} /> Investigación
            </Link>
            <span className="truncate font-mono-tag text-[11px] text-ink-faint">
              {caseCode} · INTERROGATORIO
            </span>
          </div>
          <span className="shrink-0 rounded-sm border border-blood-bright/40 bg-blood/15 px-2 py-0.5 font-mono-tag text-[10px] uppercase text-red-300">
            Conversación
          </span>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 scrollbar-thin">
          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            {messages.map((m) => (
              <ChatBubble key={m.id} msg={m} onInspect={() => m.clue && setInspectingClue(m.clue)} />
            ))}
          </div>
        </div>

        {/* Input de preguntas */}
        <div className="border-t border-hairline bg-void/95">
          <div className="mx-auto max-w-2xl px-4 py-3">
            {remaining.length === 0 ? (
              <div className="rounded-sm border border-hairline bg-panel-2 px-4 py-3 text-center text-xs text-ink-faint">
                {suspect.name.split(" ")[0]} no tiene más preguntas por responder por ahora.
              </div>
            ) : (
              <>
                <div className="mb-2 flex items-center gap-2 font-mono-tag text-[10px] uppercase tracking-wider text-ink-faint">
                  <ChevronLeft size={12} className="text-gold/70" />
                  Línea de preguntas
                  <span className="h-px flex-1 bg-hairline" />
                </div>
                <div className="flex max-h-44 flex-col gap-2 overflow-y-auto pr-1 scrollbar-thin">
                  {dialogues.map((d) => {
                    const groupOptions = d.options.filter((o) => !optionIds.has(o.id));
                    if (groupOptions.length === 0) return null;
                    return (
                      <div key={d.id} className="flex flex-col gap-1.5">
                        <p className="text-xs italic text-ink-dim">&ldquo;{d.question}&rdquo;</p>
                        <div className="flex flex-wrap gap-2">
                          {groupOptions.map((o) => {
                            const available = optionAvailable(o);
                            return (
                              <button
                                key={o.id}
                                disabled={pending || !available}
                                onClick={() => ask(o)}
                                className={cn(
                                  "flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-left text-xs transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-40",
                                  available
                                    ? o.kind === "ACUSAR_CONTRADICCION"
                                      ? "border-blood-bright/60 bg-blood/15 text-ink hover:bg-blood/25"
                                      : "border-hairline-strong bg-panel-2 text-ink hover:border-gold/50 hover:text-gold-soft"
                                    : "border-hairline text-ink-faint",
                                )}
                              >
                                {available ? (
                                  o.kind === "ACUSAR_CONTRADICCION" ? (
                                    <Crosshair size={12} className="text-blood-bright" />
                                  ) : o.kind === "MOSTRAR_EVIDENCIA" ? (
                                    <Star size={12} className="text-gold-soft" />
                                  ) : (
                                    <Send size={11} className="text-gold/70" />
                                  )
                                ) : (
                                  <Lock size={11} />
                                )}
                                {o.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {inspectingClue && <ClueModal clue={inspectingClue} onClose={() => setInspectingClue(null)} />}
    </div>
  );
}

function ChatBubble({ msg, onInspect }: { msg: Msg; onInspect: () => void }) {
  if (msg.role === "sistema") {
    return (
      <div className="flex justify-center">
        <div className="max-w-md rounded-sm border-l-2 border-blood-bright/50 bg-panel-2 px-3 py-2 text-center text-xs text-ink-dim">
          {msg.clue ? (
            <button onClick={onInspect} className="cursor-pointer text-gold-soft underline-offset-2 hover:underline">
              {msg.text} {msg.clue.title}
            </button>
          ) : (
            msg.text
          )}
        </div>
      </div>
    );
  }
  const isInvestigator = msg.role === "investigador";
  return (
    <div className={cn("flex", isInvestigator ? "justify-end" : "justify-start")}>
      <div className={cn("max-w-[85%] md:max-w-[75%]")}>
        <div
          className={cn(
            "rounded-sm border px-3 py-2 text-sm leading-relaxed shadow-sm",
            isInvestigator
              ? "border-gold/40 bg-blood/20 text-ink"
              : "border-hairline-strong bg-panel-2 text-ink-dim",
          )}
        >
          {msg.text}
        </div>
        <div
          className={cn(
            "mt-1 font-mono-tag text-[10px] text-ink-faint",
            isInvestigator ? "text-right" : "text-left",
          )}
        >
          {isInvestigator ? "VOS" : "SOSPECHOSO"} · {msg.time}
        </div>
      </div>
    </div>
  );
}

function DossierRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="font-mono-tag text-[10px] text-ink-faint">{label}</span>
      <span className="text-xs text-ink">{value}</span>
    </div>
  );
}

function CloseChat({ backHref }: { backHref: string }) {
  return (
    <Link
      href={backHref}
      className="ml-auto rounded-sm border border-hairline px-2.5 py-1.5 text-xs text-ink-dim transition-colors hover:border-gold/50 hover:text-gold-soft md:hidden"
      aria-label="Volver a la investigación"
    >
      Salir
    </Link>
  );
}