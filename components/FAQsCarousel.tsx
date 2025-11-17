"use client";
import CarouselSection from "./CarouselSection";
import FAQCard from "./FAQCard";

export default function FAQsCarousel({
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
      renderItem={(f) => <FAQCard FAQ={f} />}
    />
  );
}
