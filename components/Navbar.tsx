"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, Sparkles, Image as ImageIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-ink/90 backdrop-blur-md border border-pure-white/10 text-pure-white px-6 py-3 rounded-2xl shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-green-icon.png"
            alt="Beyond D Trips Logo"
            className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-sans text-sm font-medium tracking-wide text-pure-white group-hover:text-terracotta transition-colors uppercase">
            BEYOND D TRIPS
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/horizons" className="flex items-center gap-1.5 hover:text-terracotta transition-colors">
            <Compass className="w-4 h-4" />
            <span>Horizons</span>
          </Link>
          <Link href="/soul-stops" className="flex items-center gap-1.5 hover:text-terracotta transition-colors">
            <Sparkles className="w-4 h-4" />
            <span>Soul Stops</span>
          </Link>
          <Link href="/diaries" className="flex items-center gap-1.5 hover:text-terracotta transition-colors">
            <ImageIcon className="w-4 h-4" />
            <span>Diaries</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-pure-white hover:text-terracotta transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-pure-white/10 flex flex-col gap-4 text-sm font-medium tracking-wide animate-fade-in">
          <Link
            href="/horizons"
            className="flex items-center gap-2 hover:text-terracotta transition-colors py-1"
            onClick={toggleMobileMenu}
          >
            <Compass className="w-5 h-5" />
            <span>Horizons</span>
          </Link>
          <Link
            href="/soul-stops"
            className="flex items-center gap-2 hover:text-terracotta transition-colors py-1"
            onClick={toggleMobileMenu}
          >
            <Sparkles className="w-5 h-5" />
            <span>Soul Stops</span>
          </Link>
          <Link
            href="/diaries"
            className="flex items-center gap-2 hover:text-terracotta transition-colors py-1"
            onClick={toggleMobileMenu}
          >
            <ImageIcon className="w-5 h-5" />
            <span>Diaries</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
