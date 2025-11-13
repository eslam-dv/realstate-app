import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed } from "./icons";

export interface PropertyType {
  title: string;
  description: string;
  image: string;
  price: string;
  bathrooms: number;
  bedrooms: number;
  type: string;
}

export default function PropertyCard({
  title,
  description,
  image,
  price,
  bathrooms,
  bedrooms,
  type,
}: PropertyType) {
  return (
    <div className="border border-text-alt/20 rounded-md p-5 flex flex-col gap-4 select-none">
      <Image
        src={image}
        alt="property"
        width={400}
        height={300}
        className="w-full h-[300px] object-cover rounded-md"
      />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-text-alt text-sm">{description}</p>
      <div className="flex items-center gap-2 w-fit flex-wrap">
        <div className="pill"><Bed className="size-4" />{bedrooms}-Bedroom</div>
        <div className="pill"><Bath className="size-4" />{bathrooms}-Bathroom</div>
        <div className="pill">
          <BuildingOfficeIcon className="size-4" />
          {type}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 flex-row">
        <div>
          <p className="text-text-alt">Price</p>
          <p className="font-medium text-lg">${price}</p>
        </div>
        <Link
          href=""
          className="btn bg-brand hover:bg-brand/80 py-4! md:px-8! font-normal text-sm text-center"
        >
          View Property Details
        </Link>
      </div>
    </div>
  );
}
