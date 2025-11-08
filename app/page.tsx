import CategoryOverview from "@/components/Home/CategoryOverview/CategoryOverview";
import ClinicAnalysis from "@/components/Home/ClinicAnalysis";
import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Home/Hero/Hero";
import PopularProducts from "@/components/Home/PopularProducts/PopularProducts";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <CategoryOverview />
      <FeaturedProducts />
      <PopularProducts />
      <ClinicAnalysis/>
    </main>
  );
}
