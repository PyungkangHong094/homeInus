"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <img src="/logo.png" alt="HOME IN US" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                홈
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                서비스
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                포트폴리오
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                회사소개
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                문의
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-orange-600 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-900 hover:text-orange-600 block px-3 py-2 text-base font-medium"
            >
              홈
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium"
            >
              서비스
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium"
            >
              포트폴리오
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium"
            >
              회사소개
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium"
            >
              문의
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
