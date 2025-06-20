"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

// Simple product type
interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
}

const OpenStore: React.FC = () => {
  // State for liked products (yellow heart)
  const [likedProducts, setLikedProducts] = useState<number[]>([2]); // Product 2 is liked by default

  // Our 9 products
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: "9,000 Rwf",
      originalPrice: "12,000 Rwf"
    },
    {
      id: 2,
      name: "Product 2", 
      price: "9,000 Rwf",
      originalPrice: "12,000 Rwf"
    },
    {
      id: 3,
      name: "Product 3",
      price: "9,000 Rwf", 
      originalPrice: "12,000 Rwf"
    },
    {
      id: 4,
      name: "Product 4",
      price: "9,000 Rwf",
      originalPrice: "12,000 Rwf"
    },
    {
      id: 5,
      name: "Product 5", 
      price: "9,000 Rwf",
      originalPrice: "12,000 Rwf"
    },
    {
      id: 6,
      name: "Product 6",
      price: "9,000 Rwf", 
      originalPrice: "12,000 Rwf"
    },
    {
      id: 7,
      name: "Product 7",
      price: "9,000 Rwf",
      originalPrice: "12,000 Rwf"
    },
    {
      id: 8,
      name: "Product 8", 
      price: "9,000 Rwf",
      originalPrice: "12,000 Rwf"
    },
    {
      id: 9,
      name: "Product 9",
      price: "9,000 Rwf", 
      originalPrice: "12,000 Rwf"
    }
  ];

  // Function to toggle like
  const toggleLike = (productId: number) => {
    if (likedProducts.includes(productId)) {
      // Remove from liked
      setLikedProducts(likedProducts.filter(id => id !== productId));
    } else {
      // Add to liked
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
            <Image src="/openstore.png" alt="" width={40} height={40} className="rounded-full" />
          <h1 className="text-xl font-semibold text-gray-800">
            Recent Products (100)
          </h1>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            {/* Product Image Area (Empty Gray Box) */}
            <div className="bg-gray-100 rounded-xl h-48 mb-4"></div>

            {/* Product Info */}
            <div className="flex items-end justify-between">
              {/* Left Side - Product Name and Price */}
              <div>
                <h3 className="text-gray-800 font-medium mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-semibold">
                    {product.price}
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>

              {/* Right Side - Buttons */}
              <div className="flex gap-2">
                {/* Add to Cart Button */}
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </button>

                {/* Like Button */}
                <button 
                  onClick={() => toggleLike(product.id)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      likedProducts.includes(product.id) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenStore;