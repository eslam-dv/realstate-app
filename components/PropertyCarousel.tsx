"use client";
import CarouselSection from "./CarouselSection";
import PropertyCard from "./PropertyCard";

export default function PropertiesCarousel({
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
      renderItem={(p) => <PropertyCard property={p} />}
    />
  );
}
