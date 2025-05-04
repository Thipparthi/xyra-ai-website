"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 w-full px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex items-center justify-between rounded-xl bg-white/5 backdrop-blur-md px-6 py-4 shadow-md">

          {/* Logo */}
          <div className="flex items-center h-10 w-40">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
            <Link href="/Products" className="text-gray-300 hover:text-white transition">Products</Link>
            <Link href="/Contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl bg-white/5 backdrop-blur-md shadow-md px-6 py-4 space-y-3">
            <Link href="/" className="block text-gray-300 hover:text-white transition">Home</Link>
            <Link href="/about" className="block text-gray-300 hover:text-white transition">About Us</Link>
            <Link href="/Products" className="block text-gray-300 hover:text-white transition">Products</Link>
            <Link href="/Contact" className="block text-gray-300 hover:text-white transition">Contact</Link>
            </div>
          )}
          


      </div>
    </header>
  );
}
