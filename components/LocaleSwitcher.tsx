"use client";

import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { switchLocale } from "@/lib/locale";

export default function LocaleSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const toggleLocale = currentLocale === "en" ? "ar" : "en";
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() =>
        startTransition(() => switchLocale(toggleLocale, pathname))
      }
      className="hover:underline cursor-pointer"
    >
      {toggleLocale === "en" ? "English" : "العربية"}
    </button>
  );
}
