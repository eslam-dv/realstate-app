import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingStorefrontIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  SunIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import SectionTitle from "@/components/SectionTitle";
import CarouselSectionWrapper from "@/components/CarouselSectionWrapper";

export default async function Home() {
  const locale = (await getLocale()) || "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  const t = await getTranslations("HomePage");
  const properties = [
    {
      image: "/images/property-1.png",
      title: "Seaside Serenity House",
      description:
        "A stunning 4-bedroom 3-bathroom house in a peacful seaside location",
      bathrooms: 3,
      bedrooms: 4,
      type: "House",
      price: "550,000",
    },
    {
      image: "/images/property-2.png",
      title: "Mountain Retreat Villa",
      description:
        "A luxurious 5-bedroom 4-bathroom villa in a serene mountain location",
      bathrooms: 4,
      bedrooms: 5,
      type: "Villa",
      price: "1,250,000",
    },
    {
      image: "/images/property-3.png",
      title: "Cityscape Oasis Apartment",
      description:
        "A cozy 2-bedroom 1-bathroom apartment in a vibrant city location",
      bathrooms: 1,
      bedrooms: 2,
      type: "Apartment",
      price: "400,000",
    },
    {
      image: "/images/property-4.png",
      title: "Beachfront Retreat Villa",
      description:
        "A stunning 4-bedroom 3-bathroom villa in a peacful seaside location",
      bathrooms: 3,
      bedrooms: 4,
      type: "Villa",
      price: "550,000",
    },
  ];
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
            <div className="bg-bg-alt p-5 rounded-md border border-text-alt/20">
              <p className="text-3xl font-semibold">200+</p>
              <p className="text-text-alt">{t("happyCustomers")}</p>
            </div>
            <div className="bg-bg-alt p-5 rounded-md border border-text-alt/20">
              <p className="text-3xl font-semibold">10k+</p>
              <p className="text-text-alt">{t("propertiesForClients")}</p>
            </div>
            <div className="bg-bg-alt p-5 rounded-md border border-text-alt/20 col-span-2 md:col-span-1 text-center md:text-start">
              <p className="text-3xl font-semibold">16+</p>
              <p className="text-text-alt">{t("yearsOfExperience")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Link cards */}
      <section className="p-4 border border-5 border-bg-alt shadow-[inset_0px_0px_1px_1px_] shadow-text-alt/20 rounded-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="relative bg-bg-alt p-5 rounded-md border border-text-alt/10 text-center flex flex-col gap-5 items-center justify-center">
            <Link href="" className="absolute top-3 right-3">
              <ArrowUpRightIcon className="size-8 text-text-alt/40" />
            </Link>
            <BuildingStorefrontIcon className="size-8 text-brand" />
            <p className="text-lg">{t("linkCards.find")}</p>
          </div>
          <div className="relative bg-bg-alt p-5 rounded-md border border-text-alt/10 text-center flex flex-col gap-5 items-center justify-center">
            <Link href="" className="absolute top-3 right-3">
              <ArrowUpRightIcon className="size-8 text-text-alt/40" />
            </Link>
            <BanknotesIcon className="size-8 text-brand" />
            <p className="text-lg">{t("linkCards.unlock")}</p>
          </div>
          <div className="relative bg-bg-alt p-5 rounded-md border border-text-alt/10 text-center flex flex-col gap-5 items-center justify-center">
            <Link href="" className="absolute top-3 right-3">
              <ArrowUpRightIcon className="size-8 text-text-alt/40" />
            </Link>
            <BuildingOffice2Icon className="size-8 text-brand" />
            <p className="text-lg">{t("linkCards.effortless")}</p>
          </div>
          <div className="relative bg-bg-alt p-5 rounded-md border border-text-alt/10 text-center flex flex-col gap-5 items-center justify-center">
            <Link href="" className="absolute top-3 right-3">
              <ArrowUpRightIcon className="size-8 text-text-alt/40" />
            </Link>
            <SunIcon className="size-8 text-brand" />
            <p className="text-lg">{t("linkCards.smart")}</p>
          </div>
        </div>
      </section>
      {/* Featured Section */}
      <section className="container container-md mx-auto py-20 px-4">
        <SectionTitle
          title={t("featuredSection.title")}
          description={t("featuredSection.description")}
          viewAll={t("featuredSection.viewAll")}
        />

        <CarouselSectionWrapper
          items={properties}
          viewAll={t("featuredSection.viewAll")}
          viewAllLink=""
          direction={direction}
        />
      </section>
      {/* Testimonials Section */}
      <section className="container container-md mx-auto pb-20 px-4">
        <SectionTitle
          title="What Our Clients Say"
          description="Read the success stories and heartful testimonials from our valued
          clients. Discover why they choose Estatein for their real estate
          needs."
          viewAll="View All Testimonials"
        />
      </section>
    </>
  );
}
