-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('FACIL', 'MEDIO', 'DIFICIL', 'EXPERTO');

-- CreateEnum
CREATE TYPE "ClueType" AS ENUM ('FISICA', 'TESTIMONIO', 'DOCUMENTO', 'DIGITAL');

-- CreateEnum
CREATE TYPE "ClueImportance" AS ENUM ('BAJA', 'MEDIA', 'ALTA', 'CLAVE');

-- CreateEnum
CREATE TYPE "DialogueOptionKind" AS ENUM ('PREGUNTAR', 'MOSTRAR_EVIDENCIA', 'ACUSAR_CONTRADICCION', 'CONTINUAR');

-- CreateEnum
CREATE TYPE "InvestigationStatus" AS ENUM ('EN_CURSO', 'RESUELTO', 'FALLIDO');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "casesSolved" INTEGER NOT NULL DEFAULT 0,
    "casesFailed" INTEGER NOT NULL DEFAULT 0,
    "bestStreak" INTEGER NOT NULL DEFAULT 0,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "bestTimeSecs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cases" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "victimName" TEXT NOT NULL,
    "victimAge" INTEGER NOT NULL,
    "victimJob" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "timeOfCrime" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL DEFAULT 'FACIL',
    "order" INTEGER NOT NULL DEFAULT 0,
    "requiredLevel" INTEGER NOT NULL DEFAULT 1,
    "guiltySuspectId" TEXT,
    "motive" TEXT NOT NULL,
    "resolutionText" TEXT NOT NULL,
    "xpReward" INTEGER NOT NULL DEFAULT 300,
    "coinReward" INTEGER NOT NULL DEFAULT 150,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_case_unlocks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_case_unlocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suspects" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "job" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "avatarColor" TEXT NOT NULL DEFAULT '#8a8a8a',
    "isGuilty" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "suspects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_locations" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "case_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_location_actions" (
    "id" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "resultText" TEXT NOT NULL,
    "clueId" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "case_location_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clues" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT 'Search',
    "type" "ClueType" NOT NULL DEFAULT 'FISICA',
    "importance" "ClueImportance" NOT NULL DEFAULT 'MEDIA',
    "isRedHerring" BOOLEAN NOT NULL DEFAULT false,
    "locationKey" TEXT,
    "implicatesSuspectId" TEXT,

    CONSTRAINT "clues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dialogues" (
    "id" TEXT NOT NULL,
    "suspectId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "dialogues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dialogue_options" (
    "id" TEXT NOT NULL,
    "dialogueId" TEXT NOT NULL,
    "kind" "DialogueOptionKind" NOT NULL DEFAULT 'PREGUNTAR',
    "label" TEXT NOT NULL,
    "responseText" TEXT NOT NULL,
    "requiresClueId" TEXT,
    "unlocksClueId" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "dialogue_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investigations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "status" "InvestigationStatus" NOT NULL DEFAULT 'EN_CURSO',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),
    "accusedSuspectId" TEXT,
    "timeSecs" INTEGER,
    "xpEarned" INTEGER,
    "coinsEarned" INTEGER,

    CONSTRAINT "investigations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investigation_clues" (
    "id" TEXT NOT NULL,
    "investigationId" TEXT NOT NULL,
    "clueId" TEXT NOT NULL,
    "discoveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investigation_clues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievements" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT 'Award',

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_achievements" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_achievements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "cases_code_key" ON "cases"("code");

-- CreateIndex
CREATE UNIQUE INDEX "cases_slug_key" ON "cases"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "user_case_unlocks_userId_caseId_key" ON "user_case_unlocks"("userId", "caseId");

-- CreateIndex
CREATE UNIQUE INDEX "case_locations_caseId_key_key" ON "case_locations"("caseId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "case_location_actions_clueId_key" ON "case_location_actions"("clueId");

-- CreateIndex
CREATE UNIQUE INDEX "investigation_clues_investigationId_clueId_key" ON "investigation_clues"("investigationId", "clueId");

-- CreateIndex
CREATE UNIQUE INDEX "achievements_key_key" ON "achievements"("key");

-- CreateIndex
CREATE UNIQUE INDEX "user_achievements_userId_achievementId_key" ON "user_achievements"("userId", "achievementId");

-- AddForeignKey
ALTER TABLE "user_case_unlocks" ADD CONSTRAINT "user_case_unlocks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_case_unlocks" ADD CONSTRAINT "user_case_unlocks_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suspects" ADD CONSTRAINT "suspects_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_locations" ADD CONSTRAINT "case_locations_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_location_actions" ADD CONSTRAINT "case_location_actions_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "case_locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_location_actions" ADD CONSTRAINT "case_location_actions_clueId_fkey" FOREIGN KEY ("clueId") REFERENCES "clues"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clues" ADD CONSTRAINT "clues_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clues" ADD CONSTRAINT "clues_implicatesSuspectId_fkey" FOREIGN KEY ("implicatesSuspectId") REFERENCES "suspects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dialogues" ADD CONSTRAINT "dialogues_suspectId_fkey" FOREIGN KEY ("suspectId") REFERENCES "suspects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dialogue_options" ADD CONSTRAINT "dialogue_options_dialogueId_fkey" FOREIGN KEY ("dialogueId") REFERENCES "dialogues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dialogue_options" ADD CONSTRAINT "dialogue_options_requiresClueId_fkey" FOREIGN KEY ("requiresClueId") REFERENCES "clues"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dialogue_options" ADD CONSTRAINT "dialogue_options_unlocksClueId_fkey" FOREIGN KEY ("unlocksClueId") REFERENCES "clues"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investigations" ADD CONSTRAINT "investigations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investigations" ADD CONSTRAINT "investigations_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investigation_clues" ADD CONSTRAINT "investigation_clues_investigationId_fkey" FOREIGN KEY ("investigationId") REFERENCES "investigations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investigation_clues" ADD CONSTRAINT "investigation_clues_clueId_fkey" FOREIGN KEY ("clueId") REFERENCES "clues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievements" ADD CONSTRAINT "user_achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievements" ADD CONSTRAINT "user_achievements_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
