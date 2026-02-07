"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C4956A] flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="font-semibold text-[#191919] text-lg tracking-tight">
              Claude Builder Club
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-600 hover:text-[#191919] transition-colors">
              About
            </a>
            <a href="#capabilities" className="text-sm text-gray-600 hover:text-[#191919] transition-colors">
              What We Build
            </a>
            <a href="#events" className="text-sm text-gray-600 hover:text-[#191919] transition-colors">
              Events
            </a>
            <a href="#community" className="text-sm text-gray-600 hover:text-[#191919] transition-colors">
              Community
            </a>
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-[#191919] px-5 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors"
            >
              Join the Club
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#191919]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-sm text-gray-600 hover:text-[#191919] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#capabilities" className="text-sm text-gray-600 hover:text-[#191919] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                What We Build
              </a>
              <a href="#events" className="text-sm text-gray-600 hover:text-[#191919] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Events
              </a>
              <a href="#community" className="text-sm text-gray-600 hover:text-[#191919] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Community
              </a>
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-[#191919] px-5 py-2.5 text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join the Club
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
