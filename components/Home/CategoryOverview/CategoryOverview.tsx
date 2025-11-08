import Equipment from "@/public/icons/equipment.png";
import Fertilizers from "@/public/icons/fertilizers.png";
import Medicine from "@/public/icons/medicine.png";
import Plants from "@/public/icons/plants.png";
import Category from "./Category";

const CategoryOverview = () => {
  return (
    <section className="mt-10 px-20" aria-label="Category Overview">
      <h2 className="primary_text text-[52px] font-semibold text-center">
        Shop by Category
      </h2>
      {/* categories */}
      <div className="flex flex-wrap gap-20 mt-10">
        <Category
          img={Plants}
          title="Plants"
          subtitle="Indoor & Outdoor Plants for every space"
        />
        <Category
          img={Medicine}
          title="Medicine"
          subtitle="Natural Plant Care Solutions"
        />
        <Category
          img={Equipment}
          title="Equipment"
          subtitle="Professional Gardening tools"
        />
        <Category
          img={Fertilizers}
          title="Fertilizers"
          subtitle="Safe & effective plant
          protection"
        />
      </div>
    </section>
  );
};

export default CategoryOverview;
