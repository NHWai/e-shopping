import Image from "next/image";
import logo from "../../public/nearMe.svg";
import cart from "../../public/cart.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-bgone  flex w-full items-center justify-between bg-gray-100 p-3">
      <div className=" flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <Link href="/">
          <Image src={logo} width={100} height={100} alt="nearme-logo" />
        </Link>
      </div>
      <nav className="hidden justify-evenly gap-3 sm:flex">
        <Link href="/card">Shop</Link>

        <Link href="#">Categories</Link>

        <Link href="#">About Us</Link>

        <Link href="#">Contact</Link>
      </nav>
      <div>
        <Link href="/cart" className="relative">
          <Image src={cart} width={30} height={30} alt="Shopping Cart" />
          {/* <span className="absolute -top-2 left-3">0</span> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
