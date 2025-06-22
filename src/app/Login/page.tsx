"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaLock, FaEye, FaArrowRight } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-8" style={{backgroundImage: 'linear-gradient(120deg, #f7f8fa 60%, #f3f4f6 100%)'}}>
      {/* Login Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden mb-12">
        {/* Left Branding Section */}
        <div className="hidden md:flex flex-col justify-between bg-gray-50 p-8 w-1/2">
          <div className="flex flex-col items-start w-full ml-2 mt-2">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
              <Image src="/mark.logo.png" alt="Mark8 Logo" width={48} height={48} />
            </div>
            <h1 className="text-2xl font-bold mb-1">Mark8</h1>
            <p className="text-gray-500 mb-6">By Awesomity Lab</p>
          </div>
          <div className="text-xs text-gray-400 ml-2 mb-2">© 2024 Awesomity Lab</div>
        </div>
        {/* Right Login Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Email</label>
              <div className="flex items-center bg-gray-100 rounded-md px-4 py-3">
                <FaEnvelope className="text-lime-500 mr-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Password</label>
              <div className="flex items-center bg-gray-100 rounded-md px-4 py-3">
                <FaLock className="text-lime-500 mr-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="focus:outline-none ml-2"
                  tabIndex={-1}
                >
                  <FaEye className="text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <a href="#" className="text-gray-700 font-medium underline hover:text-lime-600 text-sm">Forgot Password?</a>
              <button
                type="submit"
                className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-md transition text-base"
              >
                Login <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Registration Section */}
      <div className="w-full max-w-3xl bg-white border border-gray-100 rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="font-semibold text-gray-800 text-base">New Here?</span>
          <div className="text-gray-500 text-sm">Create an account</div>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-8 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 transition"
        >
          Register Here <FaArrowRight className="text-lime-500" />
        </a>
      </div>
    </div>
  );
}









