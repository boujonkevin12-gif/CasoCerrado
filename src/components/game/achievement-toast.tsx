"use client";

import * as React from "react";
import { toast } from "sonner";
import { Award, X } from "lucide-react";
import type { GrantedAchievement } from "@/lib/game-types";

function renderAchievementToast(id: string | number, a: GrantedAchievement) {
  return (
    <div className="flex w-full items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/10">
        <Award size={18} className="text-gold-soft" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-mono-tag text-[10px] uppercase tracking-widest text-gold-soft">
          Logro desbloqueado
        </div>
        <div className="truncate text-sm font-medium text-ink">{a.title}</div>
        <div className="mt-0.5 line-clamp-2 text-xs leading-snug text-ink-dim">
          {a.description}
        </div>
      </div>
      <button
        aria-label="Cerrar"
        onClick={() => toast.dismiss(id)}
        className="rounded-sm p-1 text-ink-faint transition-colors hover:bg-panel-3 hover:text-ink cursor-pointer"
      >
        <X size={14} />
      </button>
    </div>
  );
}

/**
 * Encola los logros recién ganados como toasts con cierre manual.
 * sonner encola visualmente; cada uno se auto-oculta a los ~3.8 s.
 */
export function pushAchievementToasts(achievements: GrantedAchievement[]) {
  for (const a of achievements) {
    toast.custom((t) => renderAchievementToast(t, a), {
      duration: 3800,
      position: "bottom-right",
    });
  }
}

/** Componente watcher: dispara los toasts de logros al montarse (sirve para páginas SSR como el resultado). */
export function AchievementToastWatcher({
  achievements,
}: {
  achievements: GrantedAchievement[];
}) {
  const fired = React.useRef(false);
  React.useEffect(() => {
    if (fired.current || achievements.length === 0) return;
    fired.current = true;
    pushAchievementToasts(achievements);
  }, [achievements]);
  return null;
}