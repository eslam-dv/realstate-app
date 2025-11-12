import { getLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";

export default async function Navbar() {
  const locale = await getLocale();

  const navLinks = [
    { href: "/", label_en: "Home", label_ar: "الرئيسية" },
    { href: "/about", label_en: "About Us", label_ar: "من نحن" },
    { href: "/properties", label_en: "Properties", label_ar: "العقارات" },
    { href: "/services", label_en: "Services", label_ar: "الخدمات" },
  ];

  const contact = {
    href: "/contact",
    label_en: "Contact Us",
    label_ar: "اتصل بنا",
  };

  const Brand = { en: "Estatein", ar: "إستيتين" };

  return (
    <header className="bg-bg-alt py-4 px-4 md:px-0">
      <div className="container container-md mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={30} height={30} />
          <h1 className="text-2xl font-semibold">
            {locale === "en" ? Brand.en : Brand.ar}
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <NavLink
              href={link.href}
              key={i}
              className="btn hover:bg-bg"
              activeClassName="bg-bg font-bold"
            >
              {locale === "en" ? link.label_en : link.label_ar}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <NavLink
            href="/contact"
            className="btn hover:bg-bg"
            activeClassName="bg-bg font-bold"
          >
            {locale === "en" ? contact.label_en : contact.label_ar}
          </NavLink>
          <LocaleSwitcher currentLocale={locale} />
        </div>

        <NavMenu navLinks={navLinks} contact={contact} locale={locale} />
      </div>
    </header>
  );
}
