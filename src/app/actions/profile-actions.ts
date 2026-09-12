"use server";

import { prisma } from "@/lib/prisma";
import { setSessionUser } from "@/lib/session";
import { ensureUnlockedCases } from "@/lib/game-logic";
import { redirect } from "next/navigation";

export type ProfileFormState = { error?: string };

export async function createProfile(
  _prevState: ProfileFormState,
  formData: FormData,
): Promise<ProfileFormState> {
  const raw = String(formData.get("username") ?? "").trim();
  const username = raw.slice(0, 24);

  if (username.length < 3) {
    return { error: "El nombre de detective debe tener al menos 3 caracteres." };
  }
  if (!/^[a-zA-Z0-9_ ]+$/.test(username)) {
    return { error: "Usá solo letras, números, espacios y guiones bajos." };
  }

  // La identidad del detective es de DISPOSITIVO (cookie httpOnly), no del nombre.
  // Cada navegador crea SU PROPIO expediente aunque repita un nombre ya usado.
  const user = await prisma.user.create({
    data: { username },
    select: { id: true },
  });

  await ensureUnlockedCases(user.id);
  await setSessionUser(user.id);
  redirect("/dashboard");
}