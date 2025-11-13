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
import { useTranslations } from "next-intl";

type Props<T> = {
  items: T[];
  renderItemAction: (item: T) => React.ReactNode;
  viewAll: string;
  viewAllLink: string;
  direction: "ltr" | "rtl";
};

export default function CarouselSection({
  items,
  renderItemAction,
  viewAll,
  viewAllLink,
  direction,
}: Props<T>) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const t = useTranslations("HomePage");

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
        opts={{ loop: true, direction }}
      >
        <CarouselContent>
          {items.map((p, i) => (
            <CarouselItem
              key={i}
              className="md:basis-3/5 lg:basis-1/2 xl:basis-1/3"
            >
              {renderItemAction(p)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="border-t border-text-alt/20 flex items-center justify-between py-2 mt-4">
        <span className="hidden md:block text-text-alt text-sm">
          <span className="text-white">{String(current).padStart(2, "0")}</span>{" "}
          {t("of")} {String(count).padStart(2, "0")}
        </span>
        <Link
          href={viewAllLink}
          className="md:hidden bg-bg-alt py-3 px-5 rounded-md border border-text-alt/20"
        >
          {viewAll}
        </Link>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => api?.scrollPrev()}
            className={`p-3 rounded-full bg-bg-alt border border-text-alt/20 cursor-pointer  hover:bg-bg-alt/20`}
          >
            {direction === "ltr" ? (
              <ArrowLeftIcon className="size-5" />
            ) : (
              <ArrowRightIcon className="size-5" />
            )}
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
            {direction === "ltr" ? (
              <ArrowRightIcon className="size-5" />
            ) : (
              <ArrowLeftIcon className="size-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
