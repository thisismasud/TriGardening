import ComposterFertilizer from "@/public/products/compost_fertilizer.jpg";
import Monstera from "@/public/products/monstera.jpg";
import PruningShears from "@/public/products/prunig_shears.jpg";
import SnakePlant from "@/public/products/snake_plant.jpg";
import { ProductCard } from "./ProductCard";

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
  ];

  return (
    <section className="mt-24 p-20 bgLightOrange" aria-label="Featured Product">
      <h2 className="primary_text text-[52px] font-semibold text-center">
        Featured Product
      </h2>

      <div className="flex flex-wrap gap-14 justify-center items-center mt-16">
        {products.map((item, i) => (
          <ProductCard
            key={i}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            priceRange={item.priceRange}
            rating={item.rating}
            numberOfReviews={item.numberOfReviews}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
