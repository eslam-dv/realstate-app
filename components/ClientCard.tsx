import { BoltIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function ClientCard({
  since,
  company,
  websiteLink,
  domain,
  category,
  whatTheySaid,
}: {
  since: string;
  company: string;
  websiteLink: string;
  domain: string;
  category: string;
  whatTheySaid: string;
}) {
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-5 brdr p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-alt">{since}</p>
          <h3 className="text-2xl">{company}</h3>
        </div>
        <Link
          href={websiteLink}
          className="btn border border-text-alt/20 bg-bg-alt hover:bg-bg"
        >
          {locale === "en" ? "Visit Website" : "زُر الموقع"}
        </Link>
      </div>
      <div className="flex items-center justify-between gap-10">
        <div>
          <p className="text-sm text-text-alt flex items-center gap-1">
            <Squares2X2Icon className="size-5" />
            {locale === "en" ? "Domain" : "المجال"}
          </p>
          <p>{domain}</p>
        </div>
        <div className="border-l border-text-alt/20 pl-2">
          <p className="text-sm text-text-alt flex items-center gap-1">
            <BoltIcon className="size-5" />{" "}
            {locale === "en" ? "Category" : "الفئة"}
          </p>
          <p>{category}</p>
        </div>
      </div>
      <div className="border border-text-alt/20 p-5 rounded-md">
        <p className="text-text-alt">
          {locale === "en" ? "What They Said" : "آرائهم"} 🤗
        </p>
        <p>{whatTheySaid}</p>
      </div>
    </div>
  );
}
