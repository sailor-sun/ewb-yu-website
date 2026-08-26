import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- TOP HEADER (WHITE) --- */}
      <header className="bg-white border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

          {/* Logo & Chapter Brand */}
          <div className="flex items-center gap-4">
            <img
              src="/logo-EWB.png"
              alt="EWB Logo"
              className="h-14 w-14 object-contain"
            />

            <div className="h-10 w-[1px] bg-gray-300 hidden sm:block"></div>

            <div>
              <h1 className="font-bold text-lg tracking-wider text-gray-900 leading-none">
                Engineers Without Borders
              </h1>

              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mt-1">
                York University Chapter
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-900">

            <Link
              to="/"
              className="hover:text-york-red transition-colors py-2"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-york-red transition-colors py-2"
            >
              About
            </Link>

            <Link
              to="/events"
              className="hover:text-york-red transition-colors py-2"
            >
              Events
            </Link>

            {/* <Link
              to="/join"
              className="hover:text-york-red transition-colors py-2"
            >
              Join
            </Link> */}

            <Link
              to="/contact"
              className="hover:text-york-red transition-colors py-2"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden flex items-center justify-center p-2 -mr-2 text-gray-900"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Minimalist Action Button */}
          <Link
            to="/join"
            className="hidden md:flex bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-york-red transition-colors items-center gap-2 group"
          >
            Join Us
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-lg z-20 flex flex-col">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-4 border-b border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-york-red hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-4 border-b border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-york-red hover:bg-gray-50 transition-colors"
            >
              About
            </Link>

            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-4 border-b border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-york-red hover:bg-gray-50 transition-colors"
            >
              Events
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-4 border-b border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-york-red hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/join"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-york-red hover:bg-gray-50 transition-colors"
            >
              Join Us →
            </Link>
          </div>
        )}
      </header>

      {/* --- MOVING TEXT NAV BAR (RED MARQUEE) --- */}
      <div className="bg-york-red text-white uppercase tracking-widest font-bold text-xs py-3.5 border-y border-black/10 shadow-sm overflow-hidden relative z-10 select-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">

          <span>★ Engineering Equity</span>
          <span>★ York University</span>
          <span>★ Global Partnerships</span>
          <span>★ Est. 2003</span>
          <span>★ Toronto · Canada</span>

          <span>★ Engineering Equity</span>
          <span>★ York University</span>
          <span>★ Global Partnerships</span>
          <span>★ Est. 2003</span>
          <span>★ Toronto · Canada</span>

          <span>★ Engineering Equity</span>
          <span>★ York University</span>
          <span>★ Global Partnerships</span>
          <span>★ Est. 2003</span>
          <span>★ Toronto · Canada</span>

          <span>★ Engineering Equity</span>
          <span>★ York University</span>
          <span>★ Global Partnerships</span>
          <span>★ Est. 2003</span>
          <span>★ Toronto · Canada</span>

        </div>
      </div>
    </>
  );
}

export default Navbar;
