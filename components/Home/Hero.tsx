import BannerImage from "@/public/banner1.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src={BannerImage}
        alt="TriGardening Banner"
        fill
        priority
        className="object-cover  object-[50%_45%]"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white ml-40">
        <div>
          <h1 className="text-[60px] font-semibold">
            Nurture Your Green Paradise
          </h1>
          <p className="text-[30px] mt-2">Your slogan goes here</p>
        </div>
        {/* Button Group */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
