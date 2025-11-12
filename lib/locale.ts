"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function switchLocale(
  locale: "en" | "ar",
  pathname: string = "/",
) {
  const store = await cookies();

  store.set("locale", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });

  redirect(pathname);
}
