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
      items={items}
      viewAll={viewAll}
      viewAllLink={viewAllLink}
      renderItem={(f) => <FAQCard FAQ={f} />}
    />
  );
}
