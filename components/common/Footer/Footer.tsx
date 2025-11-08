import Link from "next/link";
import Address from "./Address";
import Categories from "./Categories";
import CopyrightComponent from "./Copyright";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="bgGreen px-20 mt-20 py-10">
      <section className="flex flex-row justify-around py-20 ">
        {/* logo and slogan */}
        <div aria-label="Brand">
          <Link href="/">
            <h2 className="text-white text-[40px] font-normal pl-10">
              TriGardening
            </h2>
          </Link>

          <p className="text-white text-[32px] font-normal pl-10">
            Your Slogan Goes here
          </p>
        </div>

        {/* Quick Links */}
        <QuickLinks />

        {/* Categories */}
        <Categories />

        <Address />
      </section>
      {/* Divider line */}
      <div className="border-b border-[#f5f5dc] w-[90%] mx-auto" />
      <CopyrightComponent />
    </footer>
  );
};

export default Footer;
