import { products } from "@/lib/db";
import ProductCarousel from "../FeaturedProducts/ProductCarousel";

const PopularProduct = () => {
  return (
    <section
      className="mt-24 md:px-20 px-5 bg-white"
      aria-label="Popular Products"
    >
      <h2 className="primary_text text-[52px] font-semibold text-center">
        Popular Products
      </h2>
      <p className="secondary_text text-center font-light text-[26px]">
        Discover our most popular gardening essentials
      </p>

      {/* Client Carousel Component */}
      <ProductCarousel products={products} />
    </section>
  );
};

export default PopularProduct;
