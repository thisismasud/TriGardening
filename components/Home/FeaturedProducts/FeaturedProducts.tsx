import ComposterFertilizer from "@/public/products/compost_fertilizer.jpg";
import Monstera from "@/public/products/monstera.jpg";
import PruningShears from "@/public/products/prunig_shears.jpg";
import SnakePlant from "@/public/products/snake_plant.jpg";
import ProductCarousel from "./ProductCarousel";

const FeaturedProducts = () => {
  const products = [
    {
      img: Monstera,
      title: "Mostera Dliciosa",
      subtitle: "Indoor Plant",
      priceRange: "2000 - 3,400",
      rating: 5,
      numberOfReviews: 24,
    },
    {
      img: ComposterFertilizer,
      title: "Organic Compost Fertilizer",
      subtitle: "Fertilizer",
      priceRange: "60 - 440",
      rating: 4,
      numberOfReviews: 12,
    },
    {
      img: PruningShears,
      title: "Pruning Shears",
      subtitle: "Equipment",
      priceRange: "180 - 450",
      rating: 4,
      numberOfReviews: 34,
    },
    {
      img: SnakePlant,
      title: "Snake Plant",
      subtitle: "Indoor Plant",
      priceRange: "150 - 500",
      rating: 4,
      numberOfReviews: 35,
    },
    {
      img: ComposterFertilizer,
      title: "Organic Compost Fertilizer",
      subtitle: "Fertilizer",
      priceRange: "60 - 440",
      rating: 4,
      numberOfReviews: 12,
    },
    {
      img: Monstera,
      title: "Mostera Dliciosa",
      subtitle: "Indoor Plant",
      priceRange: "2000 - 3,400",
      rating: 5,
      numberOfReviews: 24,
    },
  ];

  return (
    <section className="mt-24 md:p-20 p-5 bgLightOrange">
      <h2 className="primary_text text-[52px] font-semibold text-center">
        Featured Product
      </h2>

      {/* Client Carousel Component */}
      <ProductCarousel products={products} />
    </section>
  );
};

export default FeaturedProducts;
