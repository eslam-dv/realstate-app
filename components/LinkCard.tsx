import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function LinkCard({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative bg-bg-alt p-5 rounded-md border border-text-alt/10 text-center flex flex-col gap-5 items-center justify-center">
      <Link href="" className="absolute top-3 right-3">
        <ArrowUpRightIcon className="size-8 text-text-alt/40" />
      </Link>
      {icon}
      <p className="text-lg">{text}</p>
    </div>
  );
}
