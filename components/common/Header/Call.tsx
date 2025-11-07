import { Phone } from "lucide-react";

const Call = () => {
  return (
    <button className="px-4 py-2 bgOrange flex-center gap-2 rounded-xl cursor-pointer">
      <Phone size={20} />
      <span className="text-[22px]">Call Now</span>
    </button>
  );
};

export default Call;
