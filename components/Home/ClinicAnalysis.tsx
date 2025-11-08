import ClinicPlant from "@/public/products/plant_clinic.jpg";
import { Camera } from "lucide-react";
import Image from "next/image";

const ClinicAnalysis = () => {
  return (
    <section
      className="mt-36 mb-28 px-38 pb-20 bg-white flex justify-between items-center gap-24"
      aria-label="Plant Clinic Analysis"
    >
      <div className="">
        <h2 className="primary_text text-[52px] font-semibold">
          Plant Clinic Analysis
        </h2>
        <p className="text-black text-[32px] mt-10">
          Upload a photo of your plant and get instant AI-powered diagnosis with
          treatment recommendations from our experts
        </p>
        <button className="bgLightgreen text-white text-[32px] py-5 px-10 rounded-full flex items-center mt-10 cursor-pointer">
          <Camera size={52} />
          <span className="pl-3">Diagnose Your Plant</span>
        </button>
      </div>

      {/* Square Image */}
      <div>
        <div className="w-[450] h-[480] rounded-2xl overflow-hidden relative">
          <Image
            src={ClinicPlant}
            alt="Plant Clinic Analysis"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ClinicAnalysis;
