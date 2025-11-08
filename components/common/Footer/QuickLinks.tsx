import Link from "next/link";

const QuickLinks = () => {
  return (
    <nav
      className="flex flex-col text-white"
      aria-labelledby="quick-links-heading"
    >
      <h3 id="quick-links-heading" className="text-[28px] mb-10 font-semibold">
        Quick Links
      </h3>
      <div className="text-[26px] flex flex-col gap-3">
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/shippings">Shippings</Link>
        <Link href="/referel-program">Referral Program</Link>
      </div>
    </nav>
  );
};

export default QuickLinks;
