import Link from "next/link";
import Call from "../Header/Call";
import Cart from "../Header/Cart";
import Profile from "../Header/Profile";
import SearchComp from "../Header/Search";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="flex justify-center items-center sm:gap-20 gap-10 bgGreen min-h-[91px] text-white">
      {/* Logo */}
      <Logo />

      {/* Navbar */}
      <nav
        aria-label="Primary Navigation"
        className="hidden sm:flex gap-20 justify-center items-center text-[22px] font-normal "
      >
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/blog">Plant Clinic</Link>
        <Call />
      </nav>

      {/* Search Bar */}
      <SearchComp />

      {/* Cart */}
      <Cart numberofItems={2} />

      {/* Profile */}
      <Profile />
    </header>
  );
};
export default Header;
