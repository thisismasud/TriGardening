import LogoSrc from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src={LogoSrc} priority height={30} width={60} alt="TriGardening" />
      <span className="text-white text-[25px] md:text-[32px] font-semibold">
        TriGardening
      </span>
    </Link>
  );
};

export default Logo;
