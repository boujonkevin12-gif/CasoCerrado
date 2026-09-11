/*
  Warnings:

  - Added the required column `method` to the `cases` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccusationChoiceKind" AS ENUM ('MOTIVO', 'METODO');

-- AlterTable
ALTER TABLE "case_locations" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "cases" ADD COLUMN     "heroImageUrl" TEXT,
ADD COLUMN     "method" TEXT NOT NULL,
ADD COLUMN     "scene" TEXT;

-- AlterTable
ALTER TABLE "clues" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "dialogue_options" ADD COLUMN     "requiresOptionId" TEXT;

-- AlterTable
ALTER TABLE "investigations" ADD COLUMN     "accusedMethodLabel" TEXT,
ADD COLUMN     "accusedMotiveLabel" TEXT,
ADD COLUMN     "answeredDialogueOptionIds" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "suspects" ADD COLUMN     "alibi" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "openingStatement" TEXT;

-- CreateTable
CREATE TABLE "timeline_events" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "revealedByClueId" TEXT,
    "revealedByOptionId" TEXT,

    CONSTRAINT "timeline_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deductions" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "requiredClueIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "requiredOptionIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "deductions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investigation_deductions" (
    "id" TEXT NOT NULL,
    "investigationId" TEXT NOT NULL,
    "deductionId" TEXT NOT NULL,
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investigation_deductions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accusation_choices" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "kind" "AccusationChoiceKind" NOT NULL,
    "label" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "accusation_choices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investigation_deductions_investigationId_deductionId_key" ON "investigation_deductions"("investigationId", "deductionId");

-- AddForeignKey
ALTER TABLE "dialogue_options" ADD CONSTRAINT "dialogue_options_requiresOptionId_fkey" FOREIGN KEY ("requiresOptionId") REFERENCES "dialogue_options"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeline_events" ADD CONSTRAINT "timeline_events_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeline_events" ADD CONSTRAINT "timeline_events_revealedByClueId_fkey" FOREIGN KEY ("revealedByClueId") REFERENCES "clues"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeline_events" ADD CONSTRAINT "timeline_events_revealedByOptionId_fkey" FOREIGN KEY ("revealedByOptionId") REFERENCES "dialogue_options"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deductions" ADD CONSTRAINT "deductions_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investigation_deductions" ADD CONSTRAINT "investigation_deductions_investigationId_fkey" FOREIGN KEY ("investigationId") REFERENCES "investigations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investigation_deductions" ADD CONSTRAINT "investigation_deductions_deductionId_fkey" FOREIGN KEY ("deductionId") REFERENCES "deductions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accusation_choices" ADD CONSTRAINT "accusation_choices_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
