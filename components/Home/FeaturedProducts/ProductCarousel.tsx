"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

const ProductCarousel = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="relative flex items-center mt-16">
      {/* Left Button */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className={`w-12 h-12 rounded-full flex-center transition
          ${
            canScrollPrev
              ? "border-2 border-green-800 primary_text text-[32px]"
              : "border-2 border-gray-300 text-gray-300 text-[32px] cursor-not-allowed"
          }`}
      >
        ‹
      </button>

      {/* Embla Viewport */}
      <div className="overflow-hidden flex-1 mx-4" ref={emblaRef}>
        <div className="flex gap-3">
          {products.map((item, i) => (
            <div
              key={i}
              className="
                shrink-0
                w-full           /* default: 1 slide */
                sm:w-1/2        /* small screens: 2 slides */
                lg:w-1/4        /* large screens: 4 slides */
              "
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className={`w-12 h-12 rounded-full flex-center transition
          ${
            canScrollNext
              ? "border-2 border-green-800 primary_text text-[32px]"
              : "border-2 border-gray-400 text-gray-400 text-[32px] cursor-not-allowed"
          }`}
      >
        ›
      </button>
    </div>
  );
};

export default ProductCarousel;
