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
import { AboutValueItem } from "@/components/AboutValueItem";
import { AchievementItem } from "@/components/AchievementItem";

export default async function AboutPage() {
  const homeT = await getTranslations("HomePage.stats");
  const aboutT = await getTranslations("AboutPage");

  // Achievements section
  const achievementItems = [0, 1, 2].map((i) => ({
    title: aboutT(`achievements.items.${i}.title`),
    description: aboutT(`achievements.items.${i}.description`),
  }));

  // Navigating section
  const steps = [0, 1, 2, 3, 4, 5].map((i) => ({
    step: aboutT(`navigating.steps.${i}.step`),
    title: aboutT(`navigating.steps.${i}.title`),
    content: aboutT(`navigating.steps.${i}.content`),
  }));

  // Clients section
  const clients = [0, 1].map((i) => ({
    since: aboutT(`clientsSection.clients.${i}.since`),
    company: aboutT(`clientsSection.clients.${i}.company`),
    domain: aboutT(`clientsSection.clients.${i}.domain`),
    category: aboutT(`clientsSection.clients.${i}.category`),
    whatTheySaid: aboutT(`clientsSection.clients.${i}.whatTheySaid`),
    websiteLink: aboutT(`clientsSection.clients.${i}.websiteLink`),
  }));

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

            <h1 className="text-4xl font-semibold mb-5">
              {aboutT("hero.title")}
            </h1>
            <p className="text-text-alt">{aboutT("hero.description")}</p>
          </div>
          <StatsComponent
            happyCustomers={homeT("happyCustomers")}
            propertiesForClients={homeT("propertiesForClients")}
            yearsOfExperience={homeT("yearsOfExperience")}
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
          <h1 className="text-4xl font-semibold mb-5">
            {aboutT("values.title")}
          </h1>
          <p className="text-text-alt mb-5">{aboutT("values.description")}</p>
        </div>
        <div className="brdr grid grid-cols-1 md:grid-cols-2">
          <AboutValueItem
            icon={<StarIcon className="size-7 text-brand" />}
            title={aboutT("values.items.0.title")}
            description={aboutT("values.items.0.description")}
          />
          <AboutValueItem
            icon={<AcademicCapIcon className="size-7 text-brand" />}
            title={aboutT("values.items.1.title")}
            description={aboutT("values.items.1.description")}
          />
          <AboutValueItem
            icon={<UserGroupIcon className="size-7 text-brand" />}
            title={aboutT("values.items.2.title")}
            description={aboutT("values.items.2.description")}
            className="md:border-b-0"
          />
          <AboutValueItem
            icon={<StarIcon className="size-7 text-brand" />}
            title={aboutT("values.items.3.title")}
            description={aboutT("values.items.3.description")}
            className="md:border-b-0"
          />
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
          <h1 className="text-4xl font-semibold mb-5">
            {aboutT("achievements.title")}
          </h1>
          <p className="text-text-alt mb-5">
            {aboutT("achievements.description")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {achievementItems.map((a, idx) => (
            <AchievementItem
              key={idx}
              title={a.title}
              description={a.description}
            />
          ))}
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
            {aboutT("navigating.title")}
          </h1>
          <p className="text-text-alt mb-5">
            {aboutT("navigating.description")}
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
            {aboutT("team.title")}
          </h1>
          <p className="text-text-alt mb-5">{aboutT("team.description")}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <EmployeeCard
            image="/images/property-1.png"
            name={aboutT("team.members.0.name")}
            role={aboutT("team.members.0.role")}
            twitter=""
          />
          <EmployeeCard
            image="/images/property-2.png"
            name={aboutT("team.members.1.name")}
            role={aboutT("team.members.1.role")}
            twitter=""
          />
          <EmployeeCard
            image="/images/property-3.png"
            name={aboutT("team.members.2.name")}
            role={aboutT("team.members.2.role")}
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
          <h1 className="text-4xl font-semibold mb-5">
            {aboutT("clientsSection.title")}
          </h1>
          <p className="text-text-alt mb-5">
            {aboutT("clientsSection.description")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <ClientsCarousel items={clients} />
        </div>
      </section>
    </>
  );
}
