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
      items={items}
      viewAll={viewAll}
      viewAllLink={viewAllLink}
      renderItem={(t) => <TestimonialsCard testimonial={t} />}
    />
  );
}
