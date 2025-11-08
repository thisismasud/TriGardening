import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import Rating from "./Rating";

export const ProductCard = ({
  img,
  title,
  subtitle,
  priceRange,
  rating,
  numberOfReviews,
}) => {
  return (
    <article
      className="group relative max-w-[360px] w-full rounded-2xl bg-white shadow-xl overflow-hidden mb-10 md:ml-2"
      aria-label={`Product: ${title}`}
    >
      {/* IMAGE AREA */}
      <div className="relative w-full min-h-[238px] rounded-t-2xl overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover" />

        {/* Add to Cart Overlay */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            bg-white/70
            opacity-0 transition-all duration-300
            group-hover:opacity-100
          "
        >
          <button
            className="
              bg-[#4A7E3F] text-white text-[20px] font-medium 
              py-4 px-12 rounded-lg shadow-lg
              transition duration-300 hover:bg-[#3a6332]
            "
            aria-label={`Add ${title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* MAIN PRODUCT CONTENT */}
      <div className="flex flex-col p-6 transition duration-300 group-hover:opacity-60">
        <h3 className="primary_text text-[22px] font-medium">{title}</h3>
        <p className="text-[#A7A7A7] text-[18px]">{subtitle}</p>

        <p className="orangeText text-[32px] font-semibold mt-3">
          <span aria-hidden="true" className="pr-2">
            ৳
          </span>
          <span className="sr-only">Price:</span>
          {priceRange}
        </p>

        <Rating value={rating} numberOfReviews={numberOfReviews} />

        <AddToCartBtn aria-label={`Add ${title} to cart`} />
      </div>

      {/* VIEW DETAILS BUTTON */}
      <Link
        href="/details"
        aria-label={`View details about ${title}`}
        className="
          absolute bottom-0 left-0 w-full 
          bgLightgreen text-white text-center text-[20px] font-medium
          py-7 cursor-pointer
          translate-y-full
          transition-transform duration-300
          group-hover:translate-y-0
        "
      >
        View Details
      </Link>
    </article>
  );
};
