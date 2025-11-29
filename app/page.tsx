import { getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  BuildingStorefrontIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  SunIcon,
} from "@heroicons/react/24/solid";
import SectionTitle from "@/components/SectionTitle";
import PropertiesCarousel from "@/components/PropertyCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQsCarousel from "@/components/FAQsCarousel";
import { properties, testimonials, faqs } from "@/lib/db";
import StatsComponent from "@/components/StatsComponent";
import LinkCard from "@/components/LinkCard";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row-reverse min-h-[calc(100vh-72px)]">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/home-image.png"
            alt="skyscraper"
            width={600}
            height={600}
            className="object-cover w-full h-1/2 md:h-full"
          />
        </div>
        <div className="flex flex-col items-center gap-10 justify-center py-10 w-full md:w-1/2 px-4">
          <h1 className="text-5xl font-semibold">{t("title")}</h1>
          <p className="text-text-alt">{t("description")}</p>
          <div className="flex flex-col md:flex-row items-start gap-5 w-full">
            <button className="px-6 py-3 border border-text-alt/20 rounded-md cursor-pointer hover:bg-bg-alt/90 w-full md:w-fit">
              {t("learnMore")}
            </button>{" "}
            <button className="px-6 py-3 bg-brand rounded-md cursor-pointer hover:bg-brand/80  w-full md:w-fit">
              {t("browseProperties")}
            </button>
          </div>
          <StatsComponent
            yearsOfExperience={t("stats.yearsOfExperience")}
            happyCustomers={t("stats.happyCustomers")}
            propertiesForClients={t("stats.propertiesForClients")}
          />
        </div>
      </section>
      {/* Link cards */}
      <section className="p-4 brdr">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <LinkCard
            text={t("linkCards.find")}
            icon={<BuildingStorefrontIcon className="size-8 text-brand" />}
          />
          <LinkCard
            text={t("linkCards.unlock")}
            icon={<BanknotesIcon className="size-8 text-brand" />}
          />
          <LinkCard
            text={t("linkCards.effortless")}
            icon={<BuildingOffice2Icon className="size-8 text-brand" />}
          />
          <LinkCard
            text={t("linkCards.smart")}
            icon={<SunIcon className="size-8 text-brand" />}
          />
        </div>
      </section>
      {/* Featured Section */}
      <section className="container container-md mx-auto py-20 px-4">
        <SectionTitle
          title={t("featuredSection.title")}
          description={t("featuredSection.description")}
          viewAll={t("featuredSection.viewAll")}
          viewAllLink="#"
        />

        <PropertiesCarousel
          items={properties}
          viewAll={t("featuredSection.viewAll")}
          viewAllLink=""
        />
      </section>
      {/* Testimonials Section */}
      <section className="container container-md mx-auto pb-20 px-4">
        <SectionTitle
          title={t("testimonialsSection.title")}
          description={t("testimonialsSection.description")}
          viewAll={t("testimonialsSection.viewAll")}
          viewAllLink="#"
        />

        <TestimonialsCarousel
          items={testimonials}
          viewAll={t("testimonialsSection.viewAll")}
          viewAllLink=""
        />
      </section>
      {/* FAQs Section */}
      <section className="container container-md mx-auto pb-20 px-4">
        <SectionTitle
          title={t("FAQsSection.title")}
          description={t("FAQsSection.description")}
          viewAll={t("FAQsSection.viewAll")}
          viewAllLink="#"
        />

        <FAQsCarousel
          items={faqs}
          viewAll={t("FAQsSection.viewAll")}
          viewAllLink=""
        />
      </section>
    </>
  );
}
