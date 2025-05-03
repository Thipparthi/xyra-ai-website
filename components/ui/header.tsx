"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-4 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
       <div className="relative flex items-center justify-between rounded-xl bg-white/5 backdrop-blur-md px-6 py-5 shadow-md">
     
          {/* Logo (resized) */}
          <div className="flex items-center">
            <div className="h-12 w-44">
              <Logo />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition">Sign In</Link>
            <Link href="/register" className="px-4 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 transition">Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
