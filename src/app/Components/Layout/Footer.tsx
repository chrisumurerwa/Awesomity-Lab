"use client";
import React from 'react';
import Image from 'next/image';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
            <Image
              src="/mark.logo.png"
              alt="Mark Logo"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <span className="font-medium text-gray-800 text-sm">Mark8</span>
        </div>

        {/* Center - Copyright */}
        <div className="text-xs text-gray-500">
          ©2024. Mark8 By Awesomity Ltd
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex items-center gap-2">
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;