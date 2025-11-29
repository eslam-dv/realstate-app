import Link from "next/link";

interface HighlightSectionProps {
  title: string;
  description: string;
  linkHref: string;
}

export default function HighlightSection({
  title,
  description,
  linkHref,
}: HighlightSectionProps) {
  return (
    <div className="md:col-span-2 bg-[url('/images/about-abstract.png')] rounded-md">
      <div className="bg-bg-alt/80 h-full w-full p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <Link
            href={linkHref}
            className="bg-bg px-6 py-4 rounded-md border border-text-alt/20 text-center hover:bg-bg-alt"
          >
            Learn More
          </Link>
        </div>
        <p className="hidden md:block text-text-alt text-sm mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
