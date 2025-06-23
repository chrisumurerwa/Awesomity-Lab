"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch, FaSlidersH, FaChevronRight, FaHeart, FaShoppingCart, FaEnvelope, FaArrowRight } from "react-icons/fa";

const storeColors = [
  "bg-lime-300",
  "bg-gray-200",
  "bg-lime-300",
  "bg-slate-600",
  "bg-gray-200",
  "bg-lime-300",
  "bg-slate-600",
  "bg-gray-200",
  "bg-lime-300",
  "bg-slate-600",
];

const stores = Array.from({ length: 10 }, (_, i) => ({
  name: `Awesome Shop ${i + 1}`,
  products: 134,
  color: storeColors[i],
}));

const products = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: "9,000 Rwf",
  originalPrice: "12,000 Rwf",
}));

const OpenStores: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<number[]>([2]);

  const toggleLike = (productId: number) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-8 gap-6">
      {/* Left side: Product Grid */}
      <div className="flex-1 max-w-5xl flex flex-col gap-6">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
          

          <div className="flex items-center space-x-2">
  <img src="openstore.png" alt="Icon" className="w-6 h-6" />
  <h1 className="text-lg md:text-xl font-bold text-gray-800">
    Recent Products (100)
  </h1>
</div>

          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col justify-end h-64 bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden group"
              >
                {/* Faint background pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200" fill="none"><path d="M0 0L200 200M200 0L0 200" stroke="#A3A3A3" strokeWidth="8"/></svg>
                {/* Card Content (bottom-aligned row) */}
                <div className="relative z-10 flex flex-col justify-end h-full p-4">
                  <div className="flex items-end justify-between w-full mt-auto">
                    {/* Product Info (left) */}
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-700 font-semibold mb-1">{product.name}</span>
                      <div className="flex items-end gap-2">
                        <span className="text-lime-500 font-bold text-base">{product.price}</span>
                        <span className="text-gray-300 text-xs line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                    {/* Buttons (right) */}
                    <div className="flex items-center gap-2 ml-2">
                      <button className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition">
                        <FaShoppingCart className="text-gray-500" />
                      </button>
                      <button
                        onClick={() => toggleLike(product.id)}
                        className={`flex items-center justify-center w-9 h-9 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition ${likedProducts.includes(product.id) ? 'text-lime-400' : 'text-gray-500'}`}
                      >
                        <FaHeart className={likedProducts.includes(product.id) ? 'fill-lime-400' : ''} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-lime-50 transition flex items-center gap-2">
              <span>▼</span> Load More
            </button>
          </div>
        </div>
        {/* Open Your Store Section */}
        <div className="w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            <span className="text-lime-500">Open</span> your Store
          </h2>
          <form className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 w-full md:w-80">
              <FaEnvelope className="text-lime-500 mr-3" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition"
            >
              Submit
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      {/* Right side: Store List Card */}
      <div className="w-full max-w-xs sticky top-8 self-start bg-white rounded-2xl shadow p-4 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-2 text-base font-semibold text-gray-800">
  <img src="/openstore.png" alt="Store Icon" className="w-5 h-5" />
  Top 10 Stores
</div>

        </div>
        {/* Search Bar */}
        <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 mb-4 border border-gray-100">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search a store"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <FaSlidersH className="text-gray-400 ml-2" />
        </div>
        {/* Store List */}
        <div className="flex flex-col gap-2">
          {stores.map((store, idx) => (
            <div
              key={store.name}
              className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 cursor-pointer transition"
            >
              <div className={`w-12 h-12 rounded-lg ${store.color}`}></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 text-base leading-tight">
                  {store.name}
                </div>
                <div className="text-gray-400 text-xs">134 Products</div>
              </div>
              <FaChevronRight className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenStores;