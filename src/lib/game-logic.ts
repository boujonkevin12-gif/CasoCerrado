import "server-only";
import { prisma } from "@/lib/prisma";
import { InvestigationStatus } from "@prisma/client";
import { levelFromTotalXp } from "@/lib/xp";
import type {
  CaseSnapshot,
  ClientAccusationChoice,
  ClientClue,
  ClientDialogue,
  ClientDeduction,
  ClientLocation,
  ClientLocationAction,
  ClientSuspect,
  ClientTimelineEvent,
  GrantedAchievement,
} from "@/lib/game-types";

const statusError = () => new Error("Esta investigación ya terminó.");
const notYours = () => new Error("No tenés acceso a esta investigación.");

async function assertOwned(investigationId: string, userId: string) {
  const investigation = await prisma.investigation.findUniqueOrThrow({
    where: { id: investigationId },
  });
  if (investigation.userId !== userId) throw notYours();
  if (investigation.status !== InvestigationStatus.EN_CURSO) throw statusError();
  return investigation;
}

/** Devuelve la investigación activa (o la última) de un usuario para un caso, creándola si no existe. */
export async function startInvestigation(userId: string, caseId: string) {
  const existing = await prisma.investigation.findFirst({
    where: { userId, caseId, status: InvestigationStatus.EN_CURSO },
  });
  if (existing) return existing;

  return prisma.investigation.create({
    data: { userId, caseId, status: InvestigationStatus.EN_CURSO },
  });
}

// ---------------------------------------------------------------------------
// SNAPSHOT (payload sanitizado para el cliente)
// ---------------------------------------------------------------------------

async function loadCaseInvestigation(investigationId: string, userId: string) {
  const investigation = await assertOwned(investigationId, userId);
  const full = await prisma.investigation.findUniqueOrThrow({
    where: { id: investigationId },
    include: {
      case: {
        include: {
          suspects: { orderBy: { order: "asc" } },
          locations: {
            orderBy: { order: "asc" },
            include: { actions: { orderBy: { order: "asc" } } },
          },
          clues: true,
          timelineEvents: { orderBy: { order: "asc" } },
          deductions: { orderBy: { order: "asc" } },
          accusationChoices: { orderBy: { order: "asc" } },
        },
      },
      clues: true,
      deductions: true,
    },
  });
  return { investigation, full };
}

export async function buildCaseSnapshot(investigationId: string, userId: string): Promise<CaseSnapshot> {
  const { investigation, full } = await loadCaseInvestigation(investigationId, userId);
  const kase = full.case;

  const suspects: ClientSuspect[] = kase.suspects.map((s) => ({
    id: s.id,
    name: s.name,
    age: s.age,
    job: s.job,
    relationship: s.relationship,
    bio: s.bio,
    avatarColor: s.avatarColor,
    alibi: s.alibi,
    openingStatement: s.openingStatement,
  }));

  const locations: ClientLocation[] = kase.locations.map((loc) => ({
    id: loc.id,
    key: loc.key,
    name: loc.name,
    description: loc.description,
    imageUrl: loc.imageUrl,
    actions: loc.actions.map(
      (a): ClientLocationAction => ({ id: a.id, label: a.label, order: a.order }),
    ),
  }));

  const dialogues = await prisma.dialogue.findMany({
    where: { suspectId: { in: kase.suspects.map((s) => s.id) } },
    orderBy: { order: "asc" },
    include: { options: { orderBy: { order: "asc" } } },
  });
  const clientDialogues: ClientDialogue[] = dialogues.map((d) => ({
    id: d.id,
    suspectId: d.suspectId,
    question: d.question,
    options: d.options.map((o) => ({
      id: o.id,
      kind: o.kind,
      label: o.label,
      requiresClueId: o.requiresClueId,
      requiresOptionId: o.requiresOptionId,
      unlocksClueId: o.unlocksClueId,
      order: o.order,
    })),
  }));

  const discoveredIds = new Set(full.clues.map((c) => c.clueId));
  const knownClues: ClientClue[] = kase.clues
    .filter((c) => discoveredIds.has(c.id))
    .map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      icon: c.icon,
      type: c.type,
      locationKey: c.locationKey,
    }));

  const answeredOptionIds = new Set(investigation.answeredDialogueOptionIds);
  const visibleTimeline: ClientTimelineEvent[] = kase.timelineEvents
    .filter(
      (t) => t.isPublic || (t.revealedByClueId && discoveredIds.has(t.revealedByClueId)) || (t.revealedByOptionId && answeredOptionIds.has(t.revealedByOptionId)),
    )
    .map((t) => ({ id: t.id, time: t.time, text: t.text, order: t.order }));

  const unlockedDeductionIds = new Set(full.deductions.map((d) => d.deductionId));
  const deductions: ClientDeduction[] = kase.deductions.map((d) => ({
    id: d.id,
    title: d.title,
    text: d.text,
    requiredClueIds: d.requiredClueIds,
    requiredOptionIds: d.requiredOptionIds,
    order: d.order,
  }));

  const motives: ClientAccusationChoice[] = [];
  const methods: ClientAccusationChoice[] = [];
  for (const c of kase.accusationChoices) {
    const safe = { id: c.id, label: c.label, order: c.order };
    if (c.kind === "MOTIVO") motives.push(safe);
    else methods.push(safe);
  }

  return {
    caseInfo: {
      code: kase.code,
      title: kase.title,
      intro: kase.intro,
      scene: kase.scene ?? "",
      victimName: kase.victimName,
      victimAge: kase.victimAge,
      victimJob: kase.victimJob,
      place: kase.place,
      timeOfCrime: kase.timeOfCrime,
      totalClues: kase.clues.length,
    },
    suspects,
    locations,
    dialogues: clientDialogues,
    timeline: visibleTimeline,
    deductions,
    discoveredClues: knownClues,
    accusation: { motives, methods },
    state: {
      clueIds: [...discoveredIds],
      optionIds: [...answeredOptionIds],
      deductionIds: [...unlockedDeductionIds],
    },
  };
}

// ---------------------------------------------------------------------------
// ACCIONES DE UBICACIÓN
// ---------------------------------------------------------------------------

export async function performLocationAction(
  investigationId: string,
  actionId: string,
  userId: string,
) {
  const investigation = await assertOwned(investigationId, userId);
  void investigation;

  const action = await prisma.caseLocationAction.findUniqueOrThrow({
    where: { id: actionId },
    include: { clue: true },
  });

  let clueDiscovered: ClientClue | null = null;
  if (action.clueId) {
    const already = await prisma.investigationClue.findUnique({
      where: { investigationId_clueId: { investigationId, clueId: action.clueId } },
    });
    if (!already) {
      await prisma.investigationClue.create({
        data: { investigationId, clueId: action.clueId },
      });
      if (action.clue) {
        clueDiscovered = {
          id: action.clue.id,
          title: action.clue.title,
          description: action.clue.description,
          icon: action.clue.icon,
          type: action.clue.type,
          locationKey: action.clue.locationKey,
        };
      }
    }
  }

  const newlyGranted = await grantAchievementsIfNeeded(investigation.userId);
  return { resultText: action.resultText, clueDiscovered, newlyGranted };
}

// ---------------------------------------------------------------------------
// INTERROGATORIO (chat)
// ---------------------------------------------------------------------------

export async function askQuestion(
  investigationId: string,
  optionId: string,
  userId: string,
) {
  const investigation = await assertOwned(investigationId, userId);

  const option = await prisma.dialogueOption.findUniqueOrThrow({
    where: { id: optionId },
  });

  if (option.requiresClueId) {
    const owned = await prisma.investigationClue.findUnique({
      where: {
        investigationId_clueId: { investigationId, clueId: option.requiresClueId },
      },
    });
    if (!owned) {
      throw new Error("Necesitás encontrar esa evidencia antes de poder mostrarla.");
    }
  }

  if (option.requiresOptionId && !investigation.answeredDialogueOptionIds.includes(option.requiresOptionId)) {
    throw new Error("Todavía no se puede hacer esa pregunta.");
  }

  const answered = investigation.answeredDialogueOptionIds.includes(option.id);
  if (!answered) {
    await prisma.investigation.update({
      where: { id: investigationId },
      data: { answeredDialogueOptionIds: { push: option.id } },
    });
  }

  // Algunas opciones destapan una pista nueva (ej. la persona entrega un objeto).
  let clueUnlocked: ClientClue | null = null;
  if (option.unlocksClueId) {
    const already = await prisma.investigationClue.findUnique({
      where: {
        investigationId_clueId: {
          investigationId,
          clueId: option.unlocksClueId,
        },
      },
    });
    if (!already) {
      await prisma.investigationClue.create({
        data: { investigationId, clueId: option.unlocksClueId },
      });
      const clue = await prisma.clue.findUniqueOrThrow({ where: { id: option.unlocksClueId } });
      clueUnlocked = {
        id: clue.id,
        title: clue.title,
        description: clue.description,
        icon: clue.icon,
        type: clue.type,
        locationKey: clue.locationKey,
      };
    }
  }

  const newlyGranted = await grantAchievementsIfNeeded(investigation.userId);
  return { responseText: option.responseText, clueUnlocked, newlyGranted };
}

// ---------------------------------------------------------------------------
// DEDUCCIONES
// ---------------------------------------------------------------------------

export async function unlockDeduction(
  investigationId: string,
  deductionId: string,
  userId: string,
) {
  const investigation = await assertOwned(investigationId, userId);

  const deduction = await prisma.deduction.findUniqueOrThrow({ where: { id: deductionId } });
  if (deduction.caseId !== investigation.caseId) {
    throw new Error("Esa deducción no pertenece a este caso.");
  }

  const requiredClueIds = deduction.requiredClueIds;
  if (requiredClueIds.length > 0) {
    const owned = await prisma.investigationClue.count({
      where: { investigationId, clueId: { in: requiredClueIds } },
    });
    if (owned !== requiredClueIds.length) {
      throw new Error("Aún no tenés todas las evidencias para conectar esta conclusión.");
    }
  }

  const requiredOptionIds = deduction.requiredOptionIds;
  if (requiredOptionIds.some((id) => !investigation.answeredDialogueOptionIds.includes(id))) {
    throw new Error("Todavía falta información de un interrogatorio para conectar esta conclusión.");
  }

  await prisma.investigationDeduction.upsert({
    where: { investigationId_deductionId: { investigationId, deductionId } },
    update: {},
    create: { investigationId, deductionId },
  });

  const newlyGranted = await grantAchievementsIfNeeded(investigation.userId);

  return {
    deduction: {
      id: deduction.id,
      title: deduction.title,
      text: deduction.text,
      requiredClueIds: deduction.requiredClueIds,
      requiredOptionIds: deduction.requiredOptionIds,
      order: deduction.order,
    },
    newlyGranted,
  };
}

// ---------------------------------------------------------------------------
// ACUSACIÓN
// ---------------------------------------------------------------------------

export async function accuseSuspect(
  investigationId: string,
  accusedSuspectId: string,
  motiveChoiceId: string,
  methodChoiceId: string,
  userId: string,
) {
  const investigation = await assertOwned(investigationId, userId);

  const full = await prisma.investigation.findUniqueOrThrow({
    where: { id: investigationId },
    include: {
      case: { include: { suspects: true, accusationChoices: true, clues: true } },
      clues: true,
    },
  });

  const guilty = full.case.suspects.find((s) => s.isGuilty);
  if (!guilty) throw new Error("Este caso no tiene un culpable configurado.");

  const motive = full.case.accusationChoices.find(
    (c) => c.id === motiveChoiceId && c.kind === "MOTIVO",
  );
  const method = full.case.accusationChoices.find(
    (c) => c.id === methodChoiceId && c.kind === "METODO",
  );
  if (!motive || !method) {
    throw new Error("Elegí un motivo y un método para acusar.");
  }

  const suspectCorrect = guilty.id === accusedSuspectId;
  const motiveCorrect = motive.isCorrect;
  const methodCorrect = method.isCorrect;
  const perfect = suspectCorrect && motiveCorrect && methodCorrect;

  const totalClues = full.case.clues.length;
  const foundClues = full.clues.length;
  const timeSecs = Math.max(1, Math.round((Date.now() - investigation.startedAt.getTime()) / 1000));

  const baseXp = full.case.xpReward;
  const baseCoins = full.case.coinReward;
  const clueRatio = totalClues > 0 ? foundClues / totalClues : 0;

  const xpEarned = suspectCorrect
    ? Math.round(baseXp * (0.6 + 0.4 * clueRatio) + (perfect ? baseXp * 0.15 : 0))
    : Math.round(baseXp * 0.15);
  const coinsEarned = suspectCorrect
    ? Math.round(baseCoins * (0.6 + 0.4 * clueRatio) + (perfect ? baseCoins * 0.15 : 0))
    : Math.round(baseCoins * 0.15);

  const user = await prisma.user.findUniqueOrThrow({ where: { id: investigation.userId } });
  const newTotalXp = user.xp + xpEarned;
  const newLevel = levelFromTotalXp(newTotalXp);
  const newStreak = suspectCorrect ? user.currentStreak + 1 : 0;

  await prisma.$transaction([
    prisma.investigation.update({
      where: { id: investigationId },
      data: {
        status: suspectCorrect ? InvestigationStatus.RESUELTO : InvestigationStatus.FALLIDO,
        finishedAt: new Date(),
        accusedSuspectId,
        accusedMotiveLabel: motive.label,
        accusedMethodLabel: method.label,
        timeSecs,
        xpEarned,
        coinsEarned,
      },
    }),
    prisma.user.update({
      where: { id: investigation.userId },
      data: {
        xp: newTotalXp,
        coins: user.coins + coinsEarned,
        level: newLevel,
        casesSolved: suspectCorrect ? user.casesSolved + 1 : user.casesSolved,
        casesFailed: suspectCorrect ? user.casesFailed : user.casesFailed + 1,
        currentStreak: newStreak,
        bestStreak: Math.max(user.bestStreak, newStreak),
        bestTimeSecs:
          suspectCorrect && (!user.bestTimeSecs || timeSecs < user.bestTimeSecs)
            ? timeSecs
            : user.bestTimeSecs,
      },
    }),
  ]);

  const newlyGranted = await grantAchievementsIfNeeded(investigation.userId);

  return {
    correct: suspectCorrect,
    perfect,
    motiveCorrect,
    methodCorrect,
    guiltyName: guilty.name,
    caseMotive: full.case.motive,
    caseMethod: full.case.method,
    resolutionText: full.case.resolutionText,
    xpEarned,
    coinsEarned,
    foundClues,
    totalClues,
    timeSecs,
    newlyGranted,
  };
}

// ---------------------------------------------------------------------------
// ESTADO (para sincronizar el cliente tras navegar entre páginas)
// ---------------------------------------------------------------------------

export async function getInvestigationState(investigationId: string, userId: string) {
  const investigation = await assertOwned(investigationId, userId);
  const [discovered, deductions] = await Promise.all([
    prisma.investigationClue.findMany({
      where: { investigationId },
      include: { clue: true },
      orderBy: { discoveredAt: "asc" },
    }),
    prisma.investigationDeduction.findMany({ where: { investigationId } }),
  ]);

  const clues: ClientClue[] = discovered.map(({ clue }) => ({
    id: clue.id,
    title: clue.title,
    description: clue.description,
    icon: clue.icon,
    type: clue.type,
    locationKey: clue.locationKey,
  }));

  return {
    clueIds: discovered.map((d) => d.clueId),
    optionIds: investigation.answeredDialogueOptionIds,
    deductionIds: deductions.map((d) => d.deductionId),
    clues,
  };
}

// ---------------------------------------------------------------------------
// LOGROS
// ---------------------------------------------------------------------------

async function grantAchievementsIfNeeded(userId: string): Promise<GrantedAchievement[]> {
  const [user, totalCluesFound, totalDeductions, resolvedInvestigations] = await Promise.all([
    prisma.user.findUniqueOrThrow({ where: { id: userId } }),
    prisma.investigationClue.count({ where: { investigation: { userId } } }),
    prisma.investigationDeduction.count({ where: { investigation: { userId } } }),
    prisma.investigation.findMany({
      where: { userId, status: InvestigationStatus.RESUELTO },
      select: {
        accusedSuspectId: true,
        accusedMotiveLabel: true,
        accusedMethodLabel: true,
        case: {
          select: {
            guiltySuspectId: true,
            _count: { select: { deductions: true } },
            accusationChoices: {
              where: { isCorrect: true },
              select: { kind: true, label: true },
            },
          },
        },
        deductions: { select: { deductionId: true } },
      },
    }),
  ]);

  const needed: string[] = ["primer_caso"];
  if (totalDeductions >= 1) needed.push("primera_deduccion");
  if (user.casesSolved >= 5) needed.push("cinco_casos");
  if (totalCluesFound >= 10) needed.push("diez_pistas");
  if (user.level >= 5) needed.push("detective_experto");

  const perfect = resolvedInvestigations.some((i) => {
    const rightMotive = i.case.accusationChoices.find((c) => c.kind === "MOTIVO")?.label;
    const rightMethod = i.case.accusationChoices.find((c) => c.kind === "METODO")?.label;
    return (
      i.accusedSuspectId === i.case.guiltySuspectId &&
      i.accusedMotiveLabel === rightMotive &&
      i.accusedMethodLabel === rightMethod
    );
  });
  if (perfect) needed.push("acusacion_perfecta");

  const allDeductionsOnACase = resolvedInvestigations.some(
    (i) => i.case._count.deductions > 0 && i.deductions.length >= i.case._count.deductions,
  );
  if (allDeductionsOnACase) needed.push("primer_caso_perfecto");

  const already = await prisma.userAchievement.findMany({
    where: { userId },
    select: { achievement: { select: { key: true } } },
  });
  const ownedKeys = new Set(already.map((a) => a.achievement.key));
  const toGrant = needed.filter((k) => !ownedKeys.has(k));
  if (toGrant.length === 0) return [];

  const achievements = await prisma.achievement.findMany({
    where: { key: { in: toGrant } },
  });
  await Promise.all(
    achievements.map((a) =>
      prisma.userAchievement.upsert({
        where: { userId_achievementId: { userId, achievementId: a.id } },
        update: {},
        create: { userId, achievementId: a.id },
      }),
    ),
  );

  return achievements.map((a) => ({
    key: a.key,
    title: a.title,
    description: a.description,
    icon: a.icon,
  }));
}

/** Se asegura de que el usuario tenga desbloqueado el primer caso disponible según su nivel. */
export async function ensureUnlockedCases(userId: string) {
  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const eligibleCases = await prisma.case.findMany({
    where: { isActive: true, requiredLevel: { lte: user.level } },
    orderBy: { order: "asc" },
  });

  const unlocks = await prisma.userCaseUnlock.findMany({ where: { userId } });
  const unlockedIds = new Set(unlocks.map((u) => u.caseId));

  const missing = eligibleCases.filter((c) => !unlockedIds.has(c.id));
  if (missing.length > 0) {
    await prisma.userCaseUnlock.createMany({
      data: missing.map((c) => ({ userId, caseId: c.id })),
      skipDuplicates: true,
    });
  }
}