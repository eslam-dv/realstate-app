import { getTranslations } from "next-intl/server";
import LinkCard from "@/components/LinkCard";
import {
  BuildingStorefrontIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  SunIcon,
  ChartBarIcon,
  ChartPieIcon,
  CircleStackIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  SparklesIcon,
  SwatchIcon,
  LightBulbIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import HighlightSection from "@/components/HighlightSection";

export default async function ServicesPage() {
  const th = await getTranslations("HomePage");
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-text-alt/20 bg-linear-to-r from-bg-alt to-bg">
        <div className="container container-md mx-auto px-4 py-10 md:py-20">
          <h1 className="text-5xl font-semibold mb-5">
            Elevate Your Real Estate Experience
          </h1>
          <p className="text-text-alt">
            Welcome to Estatein, where our real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams
          </p>
        </div>
      </section>
      {/* Link Cards */}
      <section className="p-4 brdr">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <LinkCard
            text={th("linkCards.find")}
            icon={<BuildingStorefrontIcon className="size-8 text-brand" />}
          />
          <LinkCard
            text={th("linkCards.unlock")}
            icon={<BanknotesIcon className="size-8 text-brand" />}
          />
          <LinkCard
            text={th("linkCards.effortless")}
            icon={<BuildingOffice2Icon className="size-8 text-brand" />}
          />
          <LinkCard
            text={th("linkCards.smart")}
            icon={<SunIcon className="size-8 text-brand" />}
          />
        </div>
      </section>
      {/* Unlock Property Value Section */}
      <section className="container container-md mx-auto py-20 px-4">
        <SectionTitle
          title={"Unlock Property Value"}
          description={
            "Selling your property should be a rewarding experience, and at Estatein, we make sure it is."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <ServiceCard
            icon={<ChartBarIcon className="size-8 text-brand" />}
            title="Valuation Mastery"
            description="Discover the tru worth of your property with our expert valuation services."
          />
          <ServiceCard
            icon={<ChartPieIcon className="size-8 text-brand" />}
            title="Strategic Marketing"
            description="Selling a property requires more than just a listing, it demands a strategic marketing."
          />
          <ServiceCard
            icon={<CircleStackIcon className="size-8 text-brand" />}
            title="Negotiation Wizardry"
            description="Navigating the best deals is an art, and our negotiation experts are masters of it."
          />
          <ServiceCard
            icon={<MegaphoneIcon className="size-8 text-brand" />}
            title="Closing Success"
            description="A successful sale is not complete until the closing. We guid you through the intricate closing process."
          />
          <HighlightSection
            title="Unlock the value of Your Property Today"
            description="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help your achieve the best deal possible for your valuable asset."
            linkHref=""
          />
        </div>
      </section>
      {/* Effortless Property Management Section */}
      <section className="container container-md mx-auto py-20 px-4">
        <SectionTitle
          title={"Effortless Property Management"}
          description={
            "Owning a property sould be a pleasure not a hassle. Estatein's Property Management Service takes the stress out of property ownershhip."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <ServiceCard
            icon={<SquaresPlusIcon className="size-8 text-brand" />}
            title="Tenant Harmony"
            description="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
          />
          <ServiceCard
            icon={<SwatchIcon className="size-8 text-brand" />}
            title="Maintenance Ease"
            description="Say goodbye to propery maintenance headaches. We hardle all aspects of property upkeep."
          />
          <ServiceCard
            icon={<SparklesIcon className="size-8 text-brand" />}
            title="Financial Peace of Mind"
            description="Managing property finances can be complex. Our financial experts take care of rent collection"
          />
          <ServiceCard
            icon={<SunIcon className="size-8 text-brand" />}
            title="Legal Guardian"
            description="Stay compliant with property laws and regulations effortlessly."
          />
          <HighlightSection
            title="Experience Effortless Property Management"
            description="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
            linkHref=""
          />
        </div>
      </section>
      {/* Smart Investments Section */}
      <section className="container container-md mx-auto py-20 px-4">
        <div className="flex flex-col gap-10">
          <SectionTitle
            title={"Smart Investments, Informed Decisions"}
            description={
              "Building a real estate portfolio requires a strategic approach."
            }
          />
          <HighlightSection
            title="Unlock Your Investment Potential"
            description="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership"
            linkHref=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <ServiceCard
            icon={<ChartBarIcon className="size-8 text-brand" />}
            title={"Market Insight"}
            description={
              "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions."
            }
          />
          <ServiceCard
            icon={<FireIcon className="size-8 text-brand" />}
            title={"ROI Assessment"}
            description={
              "Make investment diecisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments."
            }
          />
          <ServiceCard
            icon={<LightBulbIcon className="size-8 text-brand" />}
            title={"Customized Strategies"}
            description={
              "Every investor is unique, and so are their goals. We develop Customized Invesment Strategies tailored to your specific needs."
            }
          />
          <ServiceCard
            icon={<SunIcon className="size-8 text-brand" />}
            title={"Diversification Mastery"}
            description={
              "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments acroos various property types and locations."
            }
          />
        </div>
      </section>
    </>
  );
}
