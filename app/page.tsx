import CategoryOverview from "@/components/Home/CategoryOverview/CategoryOverview";
import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Home/Hero/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <CategoryOverview />
      <FeaturedProducts/>
    </main>
  );
}
