"use client";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-3 font-libre ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Logo h="25" w="25"/>
        </div>

        {/* Center: Nav links (Desktop) / Agency Name (Mobile) */}
        <div className="hidden md:flex gap-6 tracking-wide text-sm">
          <a href="#about" className="hover:opacity-50">About</a>
          <a href="#blog" className="hover:opacity-50">Blog</a>
          <a href="#gallery" className="hover:opacity-50">Gallery</a>
        </div>
        <div className="md:hidden text-sm ">Veena's Gallery</div>

        {/* Right: Agency Name (Desktop) / Hamburger Menu (Mobile) */}
        <div className="hidden md:block  font-medium text-sm ">
          Veena's Gallery
        </div>

        <button
          className="md:hidden hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon
            <svg
              className="w-6 h-6 transition-transform duration-2000"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // 🍔 Hamburger icon
            <svg
              className="w-6 h-6 transition-transform duration-2000"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 pb-2 space-y-2 text-center text-sm absolute left-1/2 transform -translate-x-1/2 bg-white w-full">
          <a href="#about" className="block hover:opacity-50">
            About
          </a>
          <a href="#blog" className="block hover:opacity-50">
            Blog
          </a>
          <a href="#gallery" className="block hover:opacity-50">
            Gallery
          </a>
          
        </div>
      )}
    </nav>
  );
}
