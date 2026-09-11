"use client";

import { Modal } from "@/components/ui/modal";
import { ClueIcon } from "@/components/game/clue-icon";
import type { ClientClue } from "@/lib/game-types";

const typeLabel: Record<string, string> = {
  FISICA: "Evidencia física",
  TESTIMONIO: "Testimonio",
  DOCUMENTO: "Documento",
  DIGITAL: "Registro digital",
};

export function ClueModal({ clue, onClose }: { clue: ClientClue; onClose: () => void }) {
  return (
    <Modal open onClose={onClose} eyebrow="EVIDENCIA" title={clue.title}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-hairline-strong bg-panel-3">
            <ClueIcon name={clue.icon} size={22} className="text-gold" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-ink-faint">{typeLabel[clue.type] ?? clue.type}</span>
            {clue.locationKey && (
              <span className="font-mono-tag text-[10px] uppercase tracking-wider text-gold-soft">
                Hallazgo · {clue.locationKey}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-ink-dim">
          {clue.description || "Todavía se está analizando esta evidencia."}
        </p>
      </div>
    </Modal>
  );
}