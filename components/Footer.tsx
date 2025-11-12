import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BxlFacebook, TwitterXFill, LogoLinkedin, YoutubeSolid } from "./icons";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border border-t border-text-alt/20">
      <div className="container container-md mx-auto py-10 px-4 md:px-0 flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={30} height={30} />
            <h1 className="text-2xl font-semibold">{t("brand")}</h1>
          </Link>
          <label
            htmlFor="foot-email"
            className="flex items-center gap-1 p-3 border border-text-alt/20 rounded-md w-fit"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <input
              id="foot-email"
              type="email"
              placeholder={t("emailPlaceholder")}
              className="outline-none"
            />
            <button type="submit">
              <PaperAirplaneIcon className="h-5 w-5 cursor-pointer" />
            </button>
          </label>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center md:items-start text-center lg:text-start justify-items-center">
          <div className="w-fit h-fit">
            <h3 className="text-text-alt">{t("sections.home")}</h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("homeLinks.hero")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("homeLinks.features")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("homeLinks.properties")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("homeLinks.testimonials")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("homeLinks.faqs")}</Link>
              </li>
            </ul>
          </div>
          <div className="w-fit h-fit">
            <h3 className="text-text-alt">{t("sections.about")}</h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("aboutLinks.story")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("aboutLinks.works")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("aboutLinks.how")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("aboutLinks.team")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("aboutLinks.clients")}</Link>
              </li>
            </ul>
          </div>
          <div className="w-fit h-fit">
            <h3 className="text-text-alt">{t("sections.properties")}</h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("propertiesLinks.portfolio")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("propertiesLinks.categories")}</Link>
              </li>
            </ul>
          </div>
          <div className="w-fit h-fit">
            <h3 className="text-text-alt">{t("sections.services")}</h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("servicesLinks.valuation")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("servicesLinks.marketing")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("servicesLinks.negotiation")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("servicesLinks.closing")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("servicesLinks.management")}</Link>
              </li>
            </ul>
          </div>
          <div className="w-fit h-fit">
            <h3 className="text-text-alt">{t("sections.contact")}</h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("contactLinks.form")}</Link>
              </li>
              <li className="hover:text-brand cursor-pointer">
                <Link href="">{t("contactLinks.offices")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-bg-alt">
        <div className="container container-md mx-auto py-4 px-4 md:px-0 flex flex-col md:flex-row-reverse gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link
              href=""
              className="text-3xl p-1 rounded-full bg-bg hover:text-brand"
            >
              <BxlFacebook />
            </Link>
            <Link
              href=""
              className="text-2xl p-1.5 rounded-full bg-bg hover:text-brand"
            >
              <TwitterXFill />
            </Link>
            <Link
              href=""
              className="text-2xl p-1.5 rounded-full bg-bg hover:text-brand"
            >
              <LogoLinkedin />
            </Link>
            <Link
              href=""
              className="text-2xl p-1.5 rounded-full bg-bg hover:text-brand"
            >
              <YoutubeSolid />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 text-center">
            <p>{t("copyright")}</p>
            <Link href="" className="hover:underline">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
