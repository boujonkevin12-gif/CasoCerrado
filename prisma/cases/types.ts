import type {
  Difficulty,
  ClueType,
  ClueImportance,
  DialogueOptionKind,
} from "@prisma/client";

/**
 * Definición completa de un caso.
 * La lógica interna (quién lo hizo, cómo, por qué, timeline) se declara
 * acá de forma declarativa; el resto de la app juega solo con estos datos.
 */
export type CaseDef = {
  code: string;
  slug: string;
  title: string;
  intro: string;
  scene: string;
  victim: { name: string; age: number; job: string };
  place: string;
  timeOfCrime: string;
  difficulty: Difficulty;
  order: number;
  requiredLevel: number;
  motive: string;
  method: string;
  resolutionText: string;
  xpReward: number;
  coinReward: number;
  guiltyKey: string;

  suspects: SuspectDef[];
  locations: LocationDef[];
  clues: ClueDef[];
  dialogues: DialogueDef[];
  timeline: TimelineDef[];
  deductions: DeductionDef[];
  accusation: {
    motives: ChoiceDef[];
    methods: ChoiceDef[];
  };
};

export type SuspectDef = {
  key: string;
  name: string;
  age: number;
  job: string;
  relationship: string;
  bio: string;
  avatarColor: string;
  alibi?: string;
  openingStatement?: string;
  isGuilty?: boolean;
  order?: number;
};

export type LocationDef = {
  key: string;
  name: string;
  description: string;
  order?: number;
  actions: {
    label: string;
    resultText: string;
    clueKey?: string;
    order?: number;
  }[];
};

export type ClueDef = {
  key: string;
  title: string;
  description: string;
  icon: string;
  type: ClueType;
  importance: ClueImportance;
  isRedHerring?: boolean;
  locationKey?: string;
  implicatesSuspectKey?: string;
};

export type DialogueDef = {
  suspectKey: string;
  question: string;
  order?: number;
  options: OptionDef[];
};

export type OptionDef = {
  key: string;
  kind?: DialogueOptionKind;
  label: string;
  responseText: string;
  requiresClueKey?: string;
  requiresOptionKey?: string;
  unlocksClueKey?: string;
  order?: number;
};

export type TimelineDef = {
  time: string;
  text: string;
  order?: number;
  isPublic?: boolean;
  revealedByClueKey?: string;
  revealedByOptionKey?: string;
};

export type DeductionDef = {
  title: string;
  text: string;
  requiredClueKeys?: string[];
  requiredOptionKeys?: string[];
  order?: number;
};

export type ChoiceDef = {
  label: string;
  isCorrect?: boolean;
  order?: number;
};