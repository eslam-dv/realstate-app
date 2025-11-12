"use client";
import { useState } from "react";
import NavLink from "./NavLink";
import LocaleSwitcher from "./LocaleSwitcher";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline"

type NavLinkType = {
  href: string;
  label_en: string;
  label_ar: string;
};

type ContactType = {
  href: string;
  label_en: string;
  label_ar: string;
};

interface NavbarMenuProps {
  navLinks: NavLinkType[];
  contact: ContactType;
  locale: string;
}

export default function NavbarMenu({
  navLinks,
  contact,
  locale,
}: NavbarMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        aria-label="Open menu"
        className="p-2"
        onClick={() => setOpen(true)}
      >
        <Bars3Icon className="w-7 h-7 cursor-pointer" />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col">
          <div className="bg-bg-alt p-4 flex justify-between items-center">
            <span className="text-xl font-semibold">{locale === "en" ? "Menu" : "القائمة"}</span>
            <button
              aria-label="Close menu"
              className="p-2"
              onClick={() => setOpen(false)}
            >
              <XCircleIcon className="w-7 h-7 cursor-pointer" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link, i) => (
              <NavLink
                href={link.href}
                key={i}
                className="btn w-full text-center"
                activeClassName="bg-bg font-bold"
                onClick={() => setOpen(false)}
              >
                {locale === "en" ? link.label_en : link.label_ar}
              </NavLink>
            ))}
            <NavLink
              href={contact.href}
              className="btn w-full text-center"
              activeClassName="bg-bg font-bold"
              onClick={() => setOpen(false)}
            >
              {locale === "en" ? contact.label_en : contact.label_ar}
            </NavLink>
            <div className="mt-2 flex justify-center">
              <LocaleSwitcher currentLocale={locale} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
