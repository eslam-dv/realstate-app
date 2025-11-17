"use client";
import CarouselSection from "./CarouselSection";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsCarousel({
  items,
  viewAll,
  viewAllLink,
}: {
  items: T[];
  viewAll: string;
  viewAllLink: string;
}) {
  return (
    <CarouselSection
      className="md:basis-3/5 lg:basis-1/2 xl:basis-1/3"
      items={items}
      viewAll={viewAll}
      viewAllLink={viewAllLink}
      renderItem={(t) => <TestimonialsCard testimonial={t} />}
    />
  );
}
