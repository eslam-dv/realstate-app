"use client";

import CarouselSection from "./CarouselSection";
import { ClientCard } from "./ClientCard";

export const ClientsCarousel = ({ items }: { items: T[] }) => {
  return (
    <CarouselSection
      className="basis-full lg:basis-1/2"
      items={items}
      renderItem={(c) => (
        <ClientCard
          since={c.since}
          company={c.company}
          whatTheySaid={c.whatTheySaid}
          category={c.category}
          websiteLink={c.websiteLink}
          domain={c.domain}
        />
      )}
    />
  );
};
