"use client";

import { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import PropertyCard, { type PropertyType } from "./PropertyCard";

export default function PropertiesCarousel({
  properties,
}: {
  properties: PropertyType[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    };

    onSelect();

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="mt-10">
      <Carousel
        setApi={setApi}
        className="w-full relative"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {properties.map((p, i) => (
            <CarouselItem
              key={i}
              className="md:basis-3/5 lg:basis-1/2 xl:basis-1/3"
            >
              <PropertyCard
                title={p.title}
                description={p.description}
                image={p.image}
                bathrooms={p.bathrooms}
                bedrooms={p.bedrooms}
                type={p.type}
                price={p.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="border-t border-text-alt/20 flex items-center justify-between py-2 mt-4">
        <span className="hidden md:block text-text-alt text-sm">
          <span className="text-white">{String(current).padStart(2, "0")}</span>{" "}
          of {String(count).padStart(2, "0")}
        </span>
        <Link
          href=""
          className="md:hidden bg-bg-alt py-3 px-5 rounded-md border border-text-alt/20"
        >
          View All Products
        </Link>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => api?.scrollPrev()}
            className={`p-3 rounded-full bg-bg-alt border border-text-alt/20 cursor-pointer  hover:bg-bg-alt/20`}
          >
            <ArrowLeftIcon className="size-5" />
          </button>

          <span className="text-text-alt text-sm md:hidden">
            <span className="text-white">
              {String(current).padStart(2, "0")}
            </span>{" "}
            of {String(count).padStart(2, "0")}
          </span>

          <button
            onClick={() => api?.scrollNext()}
            className={`p-3 rounded-full bg-bg-alt border border-text-alt/20 cursor-pointer hover:bg-bg-alt/20`}
          >
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
