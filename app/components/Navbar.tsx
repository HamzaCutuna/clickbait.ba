import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="flex items-center">
            <Link href="/" className="hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/logo.png"
                alt="Clickbait Logo"
                width={500}
                height={500}
                className="w-50 h-auto"
              />
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/#usluge" className="text-gray-700 hover:text-[#0C363C] transition-all duration-200 hover:scale-105">Usluge</Link>
            <Link href="/#o-nama" className="text-gray-700 hover:text-[#0C363C] transition-all duration-200 hover:scale-105">O nama</Link>
            <Link href="/#radovi" className="text-gray-700 hover:text-[#0C363C] transition-all duration-200 hover:scale-105">Radovi</Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#0C363C] transition-all duration-200 hover:scale-105">Blog</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/kontakt" className="bg-gradient-to-r from-[#0C363C] to-teal-600 text-white px-6 py-2 rounded-xl hover:from-[#0C363C]/90 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Zatraži ponudu
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Otvori meni"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {menuOpen ? (
                <Cross1Icon className="w-6 h-6 text-[#0C363C]" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 text-[#0C363C]" />
              )}
            </button>
          </div>
          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-xl border-b border-gray-100 z-50 animate-fade-in-up">
              <div className="flex flex-col items-center py-4 space-y-2">
                <Link href="/#usluge" className="w-full text-center py-2 text-gray-700 hover:text-[#0C363C] font-semibold" onClick={() => setMenuOpen(false)}>Usluge</Link>
                <Link href="/#o-nama" className="w-full text-center py-2 text-gray-700 hover:text-[#0C363C] font-semibold" onClick={() => setMenuOpen(false)}>O nama</Link>
                <Link href="/#radovi" className="w-full text-center py-2 text-gray-700 hover:text-[#0C363C] font-semibold" onClick={() => setMenuOpen(false)}>Radovi</Link>
                <Link href="/blog" className="w-full text-center py-2 text-gray-700 hover:text-[#0C363C] font-semibold" onClick={() => setMenuOpen(false)}>Blog</Link>
                <Link href="/kontakt" className="w-full text-center py-2 mt-2 bg-gradient-to-r from-[#0C363C] to-teal-600 text-white rounded-xl font-semibold hover:from-[#0C363C]/90 hover:to-teal-500 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                  Zatraži ponudu
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 