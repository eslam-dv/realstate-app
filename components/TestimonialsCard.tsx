import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type TestimonialType = {
  rating: number;
  comment: string;
  details: string;
  name: string;
  image: string;
  location: string;
};

export default function TestimonialsCard({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  const { rating, comment, details, name, image, location } = testimonial;
  return (
    <div className="flex flex-col gap-5 border border-text-alt/20 rounded-md p-7 select-none">
      <div className="flex gap-2 items-center">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="bg-bg-alt p-2 rounded-full">
            <StarIcon className="size-6 text-yellow-500" />
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold">{comment}</h3>
      <p className="text-sm">{details}</p>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          width={50}
          height={50}
          alt={`${name}'s image`}
          className="rounded-full overflow-hidden"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-text-alt">{location}</p>
        </div>
      </div>
    </div>
  );
}
