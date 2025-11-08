import { products } from "@/lib/db";
import ProductCarousel from "./ProductCarousel";

const FeaturedProducts = () => {
  return (
    <section
      className="mt-24 md:p-20 p-5 bgLightOrange"
      aria-label="Featured Products"
    >
      <h2 className="primary_text text-[52px] font-semibold text-center">
        Featured Product
      </h2>

      {/* Client Carousel Component */}
      <ProductCarousel products={products} />
    </section>
  );
};

export default FeaturedProducts;
