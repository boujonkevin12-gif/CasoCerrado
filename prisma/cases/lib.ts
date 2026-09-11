import { PrismaClient } from "@prisma/client";
import type { CaseDef } from "./types";

/**
 * Crea un caso completo (caso + sospechosos + pistas + ubicaciones +
 * interrogatorios + timeline + deducciones + elecciones de acusación)
 * a partir de una definición declarativa. Conecta todas las referencias
 * por `key` y establece el culpable solo server-side.
 */
export async function createCase(prisma: PrismaClient, def: CaseDef) {
  const kase = await prisma.case.create({
    data: {
      code: def.code,
      slug: def.slug,
      title: def.title,
      intro: def.intro,
      victimName: def.victim.name,
      victimAge: def.victim.age,
      victimJob: def.victim.job,
      place: def.place,
      timeOfCrime: def.timeOfCrime,
      difficulty: def.difficulty,
      order: def.order,
      requiredLevel: def.requiredLevel,
      motive: def.motive,
      method: def.method,
      resolutionText: def.resolutionText,
      xpReward: def.xpReward,
      coinReward: def.coinReward,
      scene: def.scene,
    },
  });

  // Sospechosos
  const suspectIds: Record<string, string> = {};
  for (let i = 0; i < def.suspects.length; i++) {
    const s = def.suspects[i];
    suspectIds[s.key] = (
      await prisma.suspect.create({
        data: {
          caseId: kase.id,
          name: s.name,
          age: s.age,
          job: s.job,
          relationship: s.relationship,
          bio: s.bio,
          avatarColor: s.avatarColor,
          alibi: s.alibi ?? null,
          openingStatement: s.openingStatement ?? null,
          isGuilty: s.key === def.guiltyKey,
          order: s.order ?? i + 1,
        },
      })
    ).id;
  }

  // Culpable (solo server-side, nunca serializado al cliente antes de resolver)
  await prisma.case.update({
    where: { id: kase.id },
    data: { guiltySuspectId: suspectIds[def.guiltyKey] },
  });

  // Pistas
  const clueIds: Record<string, string> = {};
  for (const c of def.clues) {
    clueIds[c.key] = (
      await prisma.clue.create({
        data: {
          caseId: kase.id,
          title: c.title,
          description: c.description,
          icon: c.icon,
          type: c.type,
          importance: c.importance,
          isRedHerring: Boolean(c.isRedHerring),
          locationKey: c.locationKey ?? null,
          implicatesSuspectId: c.implicatesSuspectKey
            ? suspectIds[c.implicatesSuspectKey]
            : null,
        },
      })
    ).id;
  }

  // Ubicaciones + acciones
  for (const loc of def.locations) {
    await prisma.caseLocation.create({
      data: {
        caseId: kase.id,
        key: loc.key,
        name: loc.name,
        description: loc.description,
        order: loc.order ?? 0,
        actions: {
          create: loc.actions.map((a, i) => ({
            label: a.label,
            resultText: a.resultText,
            clueId: a.clueKey ? clueIds[a.clueKey] : null,
            order: a.order ?? i + 1,
          })),
        },
      },
    });
  }

  // Interrogatorios: crear diálogos y opciones; resolver cadenas y pistas
  const optionIds: Record<string, string> = {};
  for (const d of def.dialogues) {
    const dialogue = await prisma.dialogue.create({
      data: {
        suspectId: suspectIds[d.suspectKey],
        question: d.question,
        order: d.order ?? 0,
      },
    });
    for (let i = 0; i < d.options.length; i++) {
      const o = d.options[i];
      const created = await prisma.dialogueOption.create({
        data: {
          dialogueId: dialogue.id,
          kind: o.kind ?? "PREGUNTAR",
          label: o.label,
          responseText: o.responseText,
          requiresClueId: o.requiresClueKey ? clueIds[o.requiresClueKey] : null,
          requiresOptionId: null, // se resuelve en segunda pasada
          unlocksClueId: o.unlocksClueKey ? clueIds[o.unlocksClueKey] : null,
          order: o.order ?? i + 1,
        },
      });
      optionIds[o.key] = created.id;
    }
  }

  // Segunda pasada: resolver requiresOptionId entre todas las opciones
  for (const d of def.dialogues) {
    for (const o of d.options) {
      if (!o.requiresOptionKey) continue;
      const ref = optionIds[o.requiresOptionKey];
      if (!ref) {
        throw new Error(
          `${def.code}: la opción "${o.key}" referencia a una opción inexistente "${o.requiresOptionKey}".`,
        );
      }
      await prisma.dialogueOption.update({
        where: { id: optionIds[o.key] },
        data: { requiresOptionId: ref },
      });
    }
  }

  // Línea temporal
  for (const t of def.timeline) {
    await prisma.timelineEvent.create({
      data: {
        caseId: kase.id,
        time: t.time,
        text: t.text,
        order: t.order ?? 0,
        isPublic: Boolean(t.isPublic),
        revealedByClueId: t.revealedByClueKey ? clueIds[t.revealedByClueKey] : null,
        revealedByOptionId: t.revealedByOptionKey
          ? optionIds[t.revealedByOptionKey]
          : null,
      },
    });
  }

  // Deducciones (conectan pistas + preguntas ya hechas)
  for (const d of def.deductions) {
    await prisma.deduction.create({
      data: {
        caseId: kase.id,
        title: d.title,
        text: d.text,
        requiredClueIds: (d.requiredClueKeys ?? []).map((k) => clueIds[k]),
        requiredOptionIds: (d.requiredOptionKeys ?? []).map((k) => optionIds[k]),
        order: d.order ?? 0,
      },
    });
  }

  // Elecciones de acusación
  const choices = [
    ...def.accusation.motives.map((c, i) => ({
      kind: "MOTIVO" as const,
      label: c.label,
      isCorrect: Boolean(c.isCorrect),
      order: c.order ?? i + 1,
    })),
    ...def.accusation.methods.map((c, i) => ({
      kind: "METODO" as const,
      label: c.label,
      isCorrect: Boolean(c.isCorrect),
      order: c.order ?? i + 1,
    })),
  ];
  await prisma.accusationChoice.createMany({
    data: choices.map((c) => ({ caseId: kase.id, ...c })),
  });

  return { caseId: kase.id, suspectIds, clueIds, optionIds };
}