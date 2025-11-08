import BannerImage from "@/public/banner1.jpg";
import Image from "next/image";
import Link from "next/link";
import SliderBtn from "./SliderBtn";

const Hero = () => {
  // for slider button (dummy)-need to handle with state later
  const slides = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
  ];
  return (
    <section className="relative w-full h-[90vh]" aria-label="Hero Section">
      <Image
        src={BannerImage}
        alt=""
        fill
        priority
        className="object-cover  object-[50%_45%]"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white ml:10 md:ml-40">
        <div>
          <h1 className="text-[60px] font-semibold">
            Nurture Your Green Paradise
          </h1>
          <p className="text-[30px] mt-2">Your slogan goes here</p>
        </div>

        {/* Button Group */}
        <div className="flex items-center justify-center gap-10 mt-12">
          <Link
            href="/products"
            className="bgOrange py-6 px-[72px] text-[30px] rounded-full"
          >
            Shop Now
          </Link>
          <button className="bgOrange py-6 px-[72px] text-[30px] rounded-full cursor-pointer">
            Call Now
          </button>
        </div>
      </div>

      {/* Slider change Button */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((slide) => (
          <SliderBtn
            key={slide.id}
            slideNo={slides.length}
            active={slide.active}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
