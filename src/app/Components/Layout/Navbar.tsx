import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaRegHeart, FaUser } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TbSmartHome } from "react-icons/tb";
import { LuStore } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-10 shadow-sm bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-black p-2 rounded-full">
            <Image
              src="/mark.logo.png"
              alt="Mark Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-semibold">Mark8</span>
            <span className="text-xs text-gray-500">By Awesomity Lab</span>
          </div>
        </Link>

        {/* Navigation Links (Desktop only) */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          <Link href="/" className="flex items-center gap-1 text-yellow-400 font-semibold">
            <span className="border rounded-md border-yellow-400 p-1">
              <TbSmartHome />
            </span>
            Home
          </Link>
          <Link href="/stores" className="flex items-center gap-1 text-gray-600 hover:text-black">
            <LuStore />
            Stores
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <FaSearch className="text-gray-600 cursor-pointer" />

        <div className="relative flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black">
          <FaShoppingCart />
          <span>My Cart</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full" />
        </div>

        <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black">
          <FaRegHeart />
          <span>Saved</span>
        </div>

        <Link
          href="/open-store"
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-1 px-3 rounded-md transition"
        >
          Open A Store
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-1 border p-2 rounded-md cursor-pointer text-gray-600 hover:text-black"
        >
          <FaUser />
        </Link>
        <span className="flex items-center border p-2 rounded-md text-gray-600 ml-[-8px]">
          <HiOutlineChevronDown />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
