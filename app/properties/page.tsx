import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  MapPinIcon,
  HomeModernIcon,
  BanknotesIcon,
  CalendarIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import {
  locationOptions,
  propertyTypeOptions,
  pricingRangeOptions,
  propertySizeOptions,
  builtYearOptions,
  properties,
} from "../../lib/db";
import SectionTitle from "@/components/SectionTitle";
import PropertiesCarousel from "@/components/PropertyCarousel";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    location?: string;
    type?: string;
    price?: string;
    size?: string;
    builtYear?: string;
  }>;
}) {
  const t = await getTranslations("PropertiesPage");
  const params = await searchParams;
  const search = params.search?.toLowerCase() || "";
  const location = params.location?.toLowerCase() || "";
  const type = params.type?.toLowerCase() || "";
  const price = params.price || "";
  const size = params.size || "";
  const builtYear = params.builtYear ? Number(params.builtYear) : undefined;

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search);
    const matchesLocation =
      !location || p.location.split(",")[0].trim().toLowerCase() === location;
    const matchesType = !type || p.type.toLowerCase() === type;
    const priceNum = Number(p.price.replace(/,/g, ""));
    let matchesPrice = true;
    if (price === "Under 500,000") matchesPrice = priceNum < 500000;
    else if (price === "500,000 - 1,000,000")
      matchesPrice = priceNum >= 500000 && priceNum <= 1000000;
    else if (price === "Over 1,000,000") matchesPrice = priceNum > 1000000;
    let matchesSize = true;
    if (size === "1-2 Bedrooms")
      matchesSize = p.bedrooms >= 1 && p.bedrooms <= 2;
    else if (size === "3-4 Bedrooms")
      matchesSize = p.bedrooms >= 3 && p.bedrooms <= 4;
    else if (size === "5+ Bedrooms") matchesSize = p.bedrooms >= 5;
    const matchesYear = !builtYear || p.builtYear === builtYear;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesPrice &&
      matchesSize &&
      matchesYear
    );
  });
  return (
    <>
      <section className="border-b border-text-alt/20 bg-linear-to-r from-bg-alt to-bg">
        <div className="container container-md mx-auto px-4 py-10 md:py-20">
          <h1 className="text-5xl font-semibold mb-5">{t("hero.title")}</h1>
          <p className="text-text-alt">{t("hero.description")}</p>
        </div>
      </section>
      <section className="relative container container-md mx-auto px-4 py-10">
        <div className="md:absolute -top-10 left-0 right-0 z-5">
          <form method="get">
            <div className="brdr flex px-3 py-2 items-center justify-between md:w-2/3 mx-auto bg-bg">
              <input
                type="search"
                name="search"
                placeholder={t("searchForm.searchPlaceholder")}
                className="outline-none basis-2/3"
                defaultValue={params.search || ""}
              />
              <button
                className="flex items-center gap-2 px-3 py-3 bg-brand rounded-md cursor-pointer hover:bg-brand/80"
                type="submit"
              >
                <MagnifyingGlassIcon className="size-5" />
                <span className="hidden md:block">
                  {t("searchForm.findButton")}
                </span>
              </button>
              <Link href="/properties" className="p-3 bg-bg-alt rounded-md">
                <TrashIcon className="size-5 md:hidden block" />
                <span className="hidden md:block text-sm">
                  {t("searchForm.clearFilters")}
                </span>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-bg-alt flex-wrap rounded-md px-3 py-4 w-full md:w-fit mx-auto">
              <div className="flex items-center gap-2 border border-text-alt/20 rounded-md px-3 py-4 text-text-alt w-full md:w-fit bg-bg">
                <MapPinIcon className="size-5" />
                <select
                  name="location"
                  id="location"
                  className=" border-l rtl:border-l-0 rtl:border-r border-text-alt/20 px-2 w-full md:w-fit cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("searchForm.filters.location")}
                  </option>
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc.toLowerCase()}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 border border-text-alt/20 rounded-md px-3 py-4 text-text-alt w-full md:w-fit bg-bg">
                <HomeModernIcon className="size-5" />
                <select
                  name="type"
                  id="property-type"
                  className=" border-l rtl:border-l-0 rtl:border-r border-text-alt/20 px-2 w-full md:w-fit cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("searchForm.filters.propertyType")}
                  </option>
                  {propertyTypeOptions.map((type) => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 border border-text-alt/20 rounded-md px-3 py-4 text-text-alt w-full md:w-fit bg-bg">
                <BanknotesIcon className="size-5" />
                <select
                  name="price"
                  id="pricing-range"
                  className=" border-l rtl:border-l-0 rtl:border-r border-text-alt/20 px-2 w-full md:w-fit cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("searchForm.filters.pricingRange")}
                  </option>
                  {pricingRangeOptions.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 border border-text-alt/20 rounded-md px-3 py-4 text-text-alt w-full md:w-fit bg-bg">
                <CubeIcon className="size-5" />
                <select
                  name="size"
                  id="property-size"
                  className=" border-l rtl:border-l-0 rtl:border-r border-text-alt/20 px-2 w-full md:w-fit cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("searchForm.filters.propertySize")}
                  </option>
                  {propertySizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 border border-text-alt/20 rounded-md px-3 py-4 text-text-alt w-full md:w-fit bg-bg">
                <CalendarIcon className="size-5" />
                <select
                  name="builtYear"
                  id="built-year"
                  className="border-l rtl:border-l-0 rtl:border-r border-text-alt/20 px-2 w-full md:w-fit cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("searchForm.filters.builtYear")}
                  </option>
                  {builtYearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 md:mt-40">
          <SectionTitle
            title={t("portfolioSection.title")}
            description={t("portfolioSection.description")}
          />
          <PropertiesCarousel items={filteredProperties} />
        </div>
      </section>
      <section className="container container-md mx-auto px-4 py-10">
        <SectionTitle
          title={t("contactSection.title")}
          description={t("contactSection.description")}
        />
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 border border-text-alt/20 rounded-md p-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name">
              {t("contactSection.form.firstName.label")}
            </label>
            <input
              id="first-name"
              className="input"
              type="string"
              placeholder={t("contactSection.form.firstName.placeholder")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="last-name">
              {t("contactSection.form.lastName.label")}
            </label>
            <input
              id="last-name"
              className="input"
              type="string"
              placeholder={t("contactSection.form.lastName.placeholder")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              {t("contactSection.form.email.label")}
            </label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder={t("contactSection.form.email.placeholder")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">
              {t("contactSection.form.phone.label")}
            </label>
            <input
              id="phone"
              className="input"
              type="text"
              pattern="[0-9]{11,14}"
              placeholder={t("contactSection.form.phone.placeholder")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">
              {t("contactSection.form.location.label")}
            </label>
            <select id="location" className="input" defaultValue="">
              <option value="" disabled>
                {t("contactSection.form.location.placeholder")}
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="property-type">
              {t("contactSection.form.propertyType.label")}
            </label>
            <select id="property-type" className="input" defaultValue="">
              <option value="" disabled>
                {t("contactSection.form.propertyType.placeholder")}
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bathrooms">
              {t("contactSection.form.bathrooms.label")}
            </label>
            <select id="bathrooms" className="input" defaultValue="">
              <option value="" disabled>
                {t("contactSection.form.bathrooms.placeholder")}
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bedrooms">
              {t("contactSection.form.bedrooms.label")}
            </label>
            <select id="bedrooms" className="input" defaultValue="">
              <option value="" disabled className="text-text-alt">
                {t("contactSection.form.bedrooms.placeholder")}
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2 col-span-full">
            <label htmlFor="message">
              {t("contactSection.form.message.label")}
            </label>
            <textarea
              rows={5}
              id="message"
              name="message"
              className="input"
              placeholder={t("contactSection.form.message.placeholder")}
            />
          </div>
          <div className="flex items-center justify-between col-span-full">
            <div className="flex gap-2">
              <input type="checkbox" id="terms" className="bg-bg-alt" />
              <label htmlFor="terms" className="text-text-alt">
                {t("contactSection.form.terms.label")}{" "}
                <Link className="underline" href="">
                  {t("contactSection.form.terms.termsOfUse")}
                </Link>{" "}
                <Link className="underline" href="">
                  {t("contactSection.form.terms.privacyPolicy")}
                </Link>
              </label>
            </div>
            <button className="btn bg-brand text-white hover:bg-brand/80">
              {t("contactSection.form.submit")}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
