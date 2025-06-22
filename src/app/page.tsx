"use client";

import Navbar from "./Components/Layout/Navbar";
import { SlidersHorizontal } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import OpenStores from "./Components/Layout/OpenStores";  
import Footer from "./Components/Layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <section className="bg-[#1B2430] text-white py-16 px-4 md:px-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to <span className="text-lime-400">Mark8</span>
          </h1>
          <p className="text-gray-300 mt-2 text-lg">12,932 Products</p>

          {/* Search Bar */}
          <div className="mt-8 mx-auto w-full max-w-2xl bg-[#2A323C] rounded-xl flex items-center px-4 py-3 shadow-md">
            <FaSearch className="text-lime-400 text-xl mr-4" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
            />
            <SlidersHorizontal className="text-white text-xl cursor-pointer" />
          </div>

          {/* Filter Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="px-5 py-2 border border-white rounded-full bg-white text-black font-medium">
              All
            </button>
            <button className="px-5 py-2 border border-gray-400 text-gray-300 rounded-full hover:border-white hover:text-white">
              Vectors
            </button>
            <button className="px-5 py-2 border border-gray-400 text-gray-300 rounded-full hover:border-white hover:text-white">
              Icons
            </button>
            <button className="px-5 py-2 border border-gray-400 text-gray-300 rounded-full hover:border-white hover:text-white">
              Backgrounds
            </button>
          </div>
        </section>
      </main>

      <OpenStores />
      <Footer />
    </div>
  );
}
