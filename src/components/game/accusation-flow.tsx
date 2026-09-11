"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, Check } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { confirmAccusation } from "@/app/actions/case-actions";
import { pushAchievementToasts } from "@/components/game/achievement-toast";
import { SuspectPortrait } from "@/components/game/suspect-portrait";
import type { ClientAccusationChoice, ClientSuspect } from "@/lib/game-types";

export function AccusationFlow({
  investigationId,
  suspects,
  motives,
  methods,
  onClose,
}: {
  investigationId: string;
  suspects: ClientSuspect[];
  motives: ClientAccusationChoice[];
  methods: ClientAccusationChoice[];
  onClose: () => void;
}) {
  const [step, setStep] = React.useState<"sospechoso" | "motivo" | "metodo" | "confirmar">("sospechoso");
  const [suspect, setSuspect] = React.useState<ClientSuspect | null>(null);
  const [motive, setMotive] = React.useState<ClientAccusationChoice | null>(null);
  const [method, setMethod] = React.useState<ClientAccusationChoice | null>(null);
  const [pending, startTransition] = React.useTransition();
  const router = useRouter();

  function selectSuspect(s: ClientSuspect) {
    setSuspect(s);
    setStep("motivo");
  }

  function selectMotive(m: ClientAccusationChoice) {
    setMotive(m);
    setStep("metodo");
  }

  function selectMethod(m: ClientAccusationChoice) {
    setMethod(m);
    setStep("confirmar");
  }

  function submit() {
    if (!suspect || !motive || !method) return;
    startTransition(async () => {
      try {
        const result = await confirmAccusation(investigationId, suspect.id, motive.id, method.id);
        if (result.newlyGranted.length > 0) pushAchievementToasts(result.newlyGranted);
        router.push(`/case/${investigationId}/resultado`);
      } catch {
        // La acusación falló a nivel de servidor; se muestra el modal igual.
      }
    });
  }

  const titles: Record<string, string> = {
    sospechoso: "¿A quién acusás?",
    motivo: "¿Cuál fue su motivo?",
    metodo: "¿Cómo lo hizo?",
    confirmar: "Confirmar acusación",
  };

  return (
    <Modal open onClose={onClose} eyebrow="ACUSACIÓN" title={titles[step]} wide>
      <div className="flex flex-col gap-5">
        {step !== "sospechoso" && (
          <button
            onClick={() => setStep(step === "motivo" ? "sospechoso" : step === "metodo" ? "motivo" : "metodo")}
            className="flex w-fit items-center gap-1 text-xs text-ink-faint transition-colors hover:text-gold-soft cursor-pointer"
            disabled={pending}
          >
            <ArrowLeft size={13} /> Atrás
          </button>
        )}

        {step === "sospechoso" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {suspects.map((s) => (
              <button
                key={s.id}
                onClick={() => selectSuspect(s)}
                className="flex items-center gap-3 rounded-sm border border-hairline-strong bg-panel-3 px-4 py-3 text-left transition-colors hover:border-blood-bright/60 cursor-pointer"
              >
                <SuspectPortrait name={s.name} color={s.avatarColor} size={40} />
                <div className="flex flex-col">
                  <span className="text-sm text-ink">{s.name}</span>
                  <span className="text-xs text-ink-faint">{s.job}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {step === "motivo" && (
          <ChoiceGrid choices={motives} onPick={selectMotive} pending={pending} />
        )}

        {step === "metodo" && (
          <ChoiceGrid choices={methods} onPick={selectMethod} pending={pending} />
        )}

        {step === "confirmar" && suspect && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-sm border border-hairline-strong bg-panel-3 px-4 py-3">
              <SuspectPortrait name={suspect.name} color={suspect.avatarColor} size={40} />
              <div className="flex flex-1 flex-col">
                <span className="text-xs text-ink-faint">CULPABLE</span>
                <span className="text-sm text-ink">{suspect.name}</span>
              </div>
              <Check size={16} className="text-gold-soft" />
            </div>
            <div className="flex items-center justify-between gap-3 rounded-sm border border-hairline-strong bg-panel-3 px-4 py-3">
              <span className="text-sm text-ink">
                Motivo: <span className="text-ink-dim">{motive?.label}</span>
              </span>
              <Check size={16} className="text-gold-soft" />
            </div>
            <div className="flex items-center justify-between gap-3 rounded-sm border border-hairline-strong bg-panel-3 px-4 py-3">
              <span className="text-sm text-ink">
                Método: <span className="text-ink-dim">{method?.label}</span>
              </span>
              <Check size={16} className="text-gold-soft" />
            </div>

            <div className="flex items-start gap-2 text-xs text-ink-faint">
              <AlertTriangle size={14} className="mt-0.5 shrink-0 text-blood-bright" />
              <p>
                Esta decisión no puede deshacerse. El caso se cierra apenas confirmes: culpable,
                motivo y método quedan asentados en tu expediente.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setStep("metodo")} disabled={pending}>
                Revisar
              </Button>
              <Button variant="primary" className="flex-1 uppercase" disabled={pending} onClick={submit}>
                {pending ? "Cerrando caso..." : "Confirmar acusación"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

function ChoiceGrid({
  choices,
  onPick,
  pending,
}: {
  choices: ClientAccusationChoice[];
  onPick: (c: ClientAccusationChoice) => void;
  pending: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {choices.map((c) => (
        <button
          key={c.id}
          onClick={() => onPick(c)}
          disabled={pending}
          className="rounded-sm border border-hairline-strong bg-panel-3 px-4 py-3 text-left text-sm text-ink transition-colors hover:border-gold/50 hover:text-gold-soft cursor-pointer disabled:opacity-40"
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}