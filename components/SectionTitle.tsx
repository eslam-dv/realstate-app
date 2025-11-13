import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  viewAll: string;
};

export default function SectionTitle({
  title,
  description,
  viewAll,
}: Props) {
  return (
    <>
      <div className="flex items-center gap-2">
        <SparklesIcon className="size-8 text-text-alt/30 mb-2" />
        <SparklesIcon className="size-6 text-text-alt/30 mb-2" />
        <SparklesIcon className="size-4 text-text-alt/30 mb-2" />
      </div>
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="md:basis-2/3 text-text-alt">{description}</p>
        <Link
          href=""
          className="hidden md:block bg-bg-alt py-3 px-5 rounded-md border border-text-alt/20 hover:bg-bg"
        >
          {viewAll}
        </Link>
      </div>
    </>
  );
}
