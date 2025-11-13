"use client";
import CarouselSection from "./CarouselSection";
import PropertyCard from "./PropertyCard";

export default function CarouselSectionWrapper({
  items,
  viewAll,
  viewAllLink,
  direction
}: {
  items: T[];
  viewAll: string;
  viewAllLink: string;
  direction: "ltr" | "rtl";
}) {
  return (
    <CarouselSection
      items={items}
      viewAll={viewAll}
      viewAllLink={viewAllLink}
      direction={direction}
      renderItemAction={(p) => (
        <PropertyCard
          title={p.title}
          description={p.description}
          image={p.image}
          bathrooms={p.bathrooms}
          bedrooms={p.bedrooms}
          type={p.type}
          price={p.price}
        />
      )}
    />
  );
}
