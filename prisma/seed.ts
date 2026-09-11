import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { createCase } from "./cases/lib";
import { case001 } from "./cases/001-el-robo-del-museo";
import { case002 } from "./cases/002-la-caja-fuerte-vacia";
import { case003 } from "./cases/003-la-habitacion-314";
import { case004 } from "./cases/004-el-ultimo-tren";
import { case005 } from "./cases/005-la-llamada-de-las-2137";
import { case006 } from "./cases/006-el-incendio-del-almacen";
import { case007 } from "./cases/007-el-velero-a-la-deriva";
import { case008 } from "./cases/008-el-silencio-del-director";
import { case009 } from "./cases/009-la-carta-anonima";
import { case010 } from "./cases/010-el-saboteador-del-puente";

const prisma = new PrismaClient();

async function main() {
  console.log("Sembrando CASEFILE v2...");

  // Limpieza (orden por dependencias)
  await prisma.investigationDeduction.deleteMany();
  await prisma.investigationClue.deleteMany();
  await prisma.investigation.deleteMany();
  await prisma.timelineEvent.deleteMany();
  await prisma.deduction.deleteMany();
  await prisma.accusationChoice.deleteMany();
  await prisma.dialogueOption.deleteMany();
  await prisma.dialogue.deleteMany();
  await prisma.caseLocationAction.deleteMany();
  await prisma.caseLocation.deleteMany();
  await prisma.clue.deleteMany();
  await prisma.suspect.deleteMany();
  await prisma.userCaseUnlock.deleteMany();
  await prisma.userAchievement.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.case.deleteMany();

  // ---------------------------------------------------------------------
  // LOGROS
  // ---------------------------------------------------------------------
  await prisma.achievement.createMany({
    data: [
      { key: "primer_caso", title: "Primer caso", description: "Resolviste tu primera investigación.", icon: "FileCheck" },
      { key: "primer_caso_perfecto", title: "Ojo clínico", description: "Resolviste un caso con todas las deducciones.", icon: "Sparkles" },
      { key: "cinco_casos", title: "Veterano", description: "Resolviste 5 casos.", icon: "BadgeCheck" },
      { key: "diez_pistas", title: "Sabueso", description: "Encontraste 10 pistas en total.", icon: "Search" },
      { key: "detective_experto", title: "Detective experto", description: "Alcanzaste el nivel 5.", icon: "Trophy" },
      { key: "acusacion_perfecta", title: "Rigor absoluto", description: "Acusaste con el culpable, el motivo y el método correctos.", icon: "Target" },
      { key: "primera_deduccion", title: "Conexión", description: "Uniste la primera conclusión con tus evidencias.", icon: "Network" },
    ],
  });

  // ---------------------------------------------------------------------
  // CASOS (biblioteca)
  // ---------------------------------------------------------------------
  const cases = [
    case001,
    case002,
    case003,
    case004,
    case005,
    case006,
    case007,
    case008,
    case009,
    case010,
  ];

  for (const def of cases) {
    await createCase(prisma, def);
    console.log(`  ✓ ${def.code} — ${def.title}`);
  }

  console.log("Listo. Biblioteca de casos sembrada con éxito.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });