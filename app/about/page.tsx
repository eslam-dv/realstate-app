import {
  SparklesIcon,
  StarIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { AboutStep } from "@/components/AboutStep";
import { EmployeeCard } from "@/components/EmployeeCard";
import StatsComponent from "@/components/StatsComponent";
import { ClientsCarousel } from "@/components/ClientsCarousel";

export default async function AboutPage() {
  const ht = await getTranslations("HomePage.stats");
  const steps = [
    {
      step: "Step 01",
      title: "Discover a World of Possibilities",
      content:
        "Your journey begins with exploring our carefully curated property listings. Using our intuitive search tools, explore properties based on your preferences including location, type, size, and budget.",
    },
    {
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      content:
        "Once you've found properties that catch your eye, save them to your shortlist for easy reference. This allows you to compare and revisit your favorites as you make a decision.",
    },
    {
      step: "Step 03",
      title: "Personalized Guidance",
      content:
        "Have questions about a property or need more information? Our dedicated team is here to provide expert advice, market insights, and guidance every step of the way.",
    },
    {
      step: "Step 04",
      title: "See It for Yourself",
      content:
        "Arrange viewings of the properties you’re interested in. Explore each home in person or through virtual tours, allowing you to get a firsthand feel of your potential new home.",
    },
    {
      step: "Step 05",
      title: "Making Informed Decisions",
      content:
        "Before making an offer, our team will assist you by providing market analysis, property evaluations, and expert advice. We'll ensure you feel informed and confident in your choice.",
    },
    {
      step: "Step 06",
      title: "Getting the Best Deal",
      content:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];
  const clients = [
    {
      since: "2019",
      company: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      whatTheySaid:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      websiteLink: "",
    },
    {
      since: "2018",
      company: "GreenTech Enterprises",
      domain: "Commercial Real Estate",
      category: "Retail Space",
      websiteLink: "",
      whatTheySaid:
        "Estateins's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="container container-md mx-auto flex flex-col md:flex-row-reverse gap-10 py-10 px-4 min-h-[calc(100vh-72px)]">
        <div className="md:basis-1/2 border border-text-alt/20 rounded-md overflow-none  bg-[url('/images/about-abstract.png')] object-cover">
          <Image
            src="/images/about-image.png"
            alt="about"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:basis-1/2 flex flex-col gap-10 justify-around">
          <div>
            <div className="flex items-center gap-2">
              <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
              <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
              <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
            </div>

            <h1 className="text-4xl font-semibold mb-5">Our Journey</h1>
            <p className="text-text-alt">
              Since 1999, we have been helping people find their dream home. We
              are committed to providing exceptional service and delivering the
              best results for our clients.
            </p>
          </div>
          <StatsComponent
            happyCustomers={ht("happyCustomers")}
            propertiesForClients={ht("propertiesForClients")}
            yearsOfExperience={ht("yearsOfExperience")}
          />
        </div>
      </section>
      {/* Our Values */}
      <section className="container container-md mx-auto flex flex-col md:flex-row gap-10 py-10 px-4">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
          </div>
          <h1 className="text-4xl font-semibold mb-5">Our Values</h1>
          <p className="text-text-alt mb-5">
            Our story began with a simple idea: to help people find their dream
            home. We are committed to providing exceptional service and
            delivering the best results for our clients.
          </p>
        </div>
        <div className="brdr grid grid-cols-1 md:grid-cols-2">
          <div className="m-5 pb-5 border-b border-text-alt/20">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
              <span className="inline-block border border-brand rounded-full p-2">
                <StarIcon className="size-7 text-brand" />
              </span>
              Trust
            </h2>
            <p className="text-text-alt">
              Trust is the cornerstone of every successfull real estate
              transaction.
            </p>
          </div>
          <div className="m-5 pb-5 border-b border-text-alt/20">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
              <span className="inline-block border border-brand rounded-full p-2">
                <AcademicCapIcon className="size-7 text-brand" />
              </span>
              Excellence
            </h2>
            <p className="text-text-alt">
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
          <div className="m-5 pb-5 border-b border-text-alt/20 md:border-b-0">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
              <span className="inline-block border border-brand rounded-full p-2">
                <UserGroupIcon className="size-7 text-brand" />
              </span>
              Client-Centric
            </h2>
            <p className="text-text-alt">
              Your dreams and needs are at the center of our universe. We
              listen, and understand
            </p>
          </div>
          <div className="m-5 pb-5">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
              <span className="inline-block border border-brand rounded-full p-2">
                <StarIcon className="size-7 text-brand" />
              </span>
              Our Commitment
            </h2>
            <p className="text-text-alt">
              We are dedicated to providing you with the highest level of
              service professionalism.
            </p>
          </div>
        </div>
      </section>
      {/* Our Achievements */}
      <section className="container container-md mx-auto flex flex-col gap-10 py-10 px-4">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
          </div>
          <h1 className="text-4xl font-semibold mb-5">Our Achievements</h1>
          <p className="text-text-alt mb-5">
            Our story is one of continous growth and evolution. We started as
            small team with big dreams. determined to create a real state
            platform that trancended the ordinary.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="brdr p-5">
            <h2 className="text-2xl font-semibold mb-5">
              3+ Years of Excellence
            </h2>
            <p className="text-text-alt text-sm">
              With over 3 years in the industry we have amassed a wealth of
              knowledge and experience.
            </p>
          </div>
          <div className="brdr p-5">
            <h2 className="text-2xl font-semibold mb-5">Happy Clients</h2>
            <p className="text-text-alt text-sm">
              Our greatest achievement is the satisfaction of our clients. Their
              success stories fuel our passion for what we do.
            </p>
          </div>
          <div className="brdr p-5">
            <h2 className="text-2xl font-semibold mb-5">
              Industry Recognition
            </h2>
            <p className="text-text-alt text-sm">
              We&apos;ve earned the respect of our peers and idustry leaders,
              with accolades and awards that reflect our commitment to
              excellence
            </p>
          </div>
        </div>
      </section>
      {/* Navigating the Estatein */}
      <section className="container container-md mx-auto py-10 px-4">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
          </div>
          <h1 className="text-4xl font-semibold mb-5">
            Navigating the Estatein Experience
          </h1>
          <p className="text-text-alt mb-5">
            At Estatein we&apos;ve designed a straightforward process to help
            you find and purchase your dream property with ease. Here&apos;s a
            step-by-step guide to how it all works
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 mt-5 auto-rows-[1fr]">
          {steps.map((step, indx) => (
            <AboutStep
              step={step.step}
              title={step.title}
              content={step.content}
              key={indx}
              className={indx > 2 ? "hidden md:block" : ""}
            />
          ))}
        </div>
      </section>
      {/* Meet the Team */}
      <section className="container container-md mx-auto py-10 px-4">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
          </div>
          <h1 className="text-4xl font-semibold mb-5">
            Meet the Estatein Team
          </h1>
          <p className="text-text-alt mb-5">
            At Estatein our success is driven by the dedication and expertise of
            our team. Get to know the people behind our mission to make your
            real state dream a reality.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <EmployeeCard
            image="/images/property-1.png"
            name="Max Mitchel"
            role="Founder"
            twitter=""
          />
          <EmployeeCard
            image="/images/property-2.png"
            name="Sarah Johnson"
            role="Chief Real Estate Officer"
            twitter=""
          />
          <EmployeeCard
            image="/images/property-3.png"
            name="David Brown"
            role="Head of Property Managment"
            twitter=""
          />
        </div>
      </section>
      {/* Our Valued Clients */}
      <section className="container container-md mx-auto py-10 px-4">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
            <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
          </div>
          <h1 className="text-4xl font-semibold mb-5">Our Valued Clients</h1>
          <p className="text-text-alt mb-5">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we&apos;ve had the pleasure of serving
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <ClientsCarousel items={clients} />
        </div>
      </section>
    </>
  );
}
