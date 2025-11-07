import CategoryOverview from "@/components/Home/CategoryOverview/CategoryOverview";
import Hero from "@/components/Home/Hero/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <Hero />
        <CategoryOverview/>
      </main>
    </div>
  );
}
