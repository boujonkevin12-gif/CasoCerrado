/**
 * DTO de lo que se envía al cliente. Regla de oro: NUNCA serializamos
 * `isGuilty`, `implicatesSuspectId`, `importance` de pistas ni
 * `isCorrect` de las opciones de acusación antes de resolver.
 */

export type ClientSuspect = {
  id: string;
  name: string;
  age: number;
  job: string;
  relationship: string;
  bio: string;
  avatarColor: string;
  alibi: string | null;
  openingStatement: string | null;
};

export type ClientLocationAction = {
  id: string;
  label: string;
  order: number;
};

export type ClientLocation = {
  id: string;
  key: string;
  name: string;
  description: string;
  imageUrl: string | null;
  actions: ClientLocationAction[];
};

export type ClientClue = {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: string;
  locationKey: string | null;
};

export type ClientDialogueOption = {
  id: string;
  kind: "PREGUNTAR" | "MOSTRAR_EVIDENCIA" | "ACUSAR_CONTRADICCION" | "CONTINUAR";
  label: string;
  requiresClueId: string | null;
  requiresOptionId: string | null;
  unlocksClueId: string | null;
  order: number;
};

export type ClientDialogue = {
  id: string;
  suspectId: string;
  question: string;
  options: ClientDialogueOption[];
};

export type ClientTimelineEvent = {
  id: string;
  time: string;
  text: string;
  order: number;
};

export type ClientDeduction = {
  id: string;
  title: string;
  text: string;
  requiredClueIds: string[];
  requiredOptionIds: string[];
  order: number;
};

export type ClientAccusationChoice = {
  id: string;
  label: string;
  order: number;
};

export type CaseInfo = {
  code: string;
  title: string;
  intro: string;
  scene: string;
  victimName: string;
  victimAge: number;
  victimJob: string;
  place: string;
  timeOfCrime: string;
  totalClues: number;
};

/** Estado de la investigación en curso, sanitizado y listo para render. */
export type CaseSnapshot = {
  caseInfo: CaseInfo;
  suspects: ClientSuspect[];
  locations: ClientLocation[];
  dialogues: ClientDialogue[];
  timeline: ClientTimelineEvent[];
  deductions: ClientDeduction[];
  discoveredClues: ClientClue[];
  accusation: {
    motives: ClientAccusationChoice[];
    methods: ClientAccusationChoice[];
  };
  state: {
    clueIds: string[];
    optionIds: string[];
    deductionIds: string[];
  };
};

/** Logro recién ganado, para mostrar el toast (cola y auto-dismiss en el cliente). */
export type GrantedAchievement = {
  key: string;
  title: string;
  description: string;
  icon: string;
};