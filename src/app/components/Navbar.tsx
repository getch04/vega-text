"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#0D8AFF]">
              VegaText
            </Link>
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
              <div className="px-6 py-4 space-y-4">
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-[#0D8AFF]"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="block text-gray-700 hover:text-[#0D8AFF]"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <Link
                  href="/faq"
                  className="block text-gray-700 hover:text-[#0D8AFF]"
                  onClick={handleLinkClick}
                >
                  FAQ
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-700 hover:text-[#0D8AFF]"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
                <Link
                  href="https://wa.me/251906616636"
                  target="_blank"
                  className="block w-full mt-4 px-4 py-2 text-center text-white bg-[#0D8AFF] rounded-full hover:bg-blue-600"
                  onClick={handleLinkClick}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#0D8AFF]">
            VegaText
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-[#0D8AFF] transition-colors">
              About
            </Link>
            <Link href="/#services" className="text-gray-600 hover:text-[#0D8AFF] transition-colors">
              Services
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-[#0D8AFF] transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#0D8AFF] transition-colors">
              Contact
            </Link>
            <Link
              href="https://wa.me/251906616636"
              target="_blank"
              className="bg-[#0D8AFF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/about"
                className="block text-gray-700 hover:text-[#0D8AFF]"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/#services"
                className="block text-gray-700 hover:text-[#0D8AFF]"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/faq"
                className="block text-gray-700 hover:text-[#0D8AFF]"
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-[#0D8AFF]"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link
                href="https://wa.me/251906616636"
                target="_blank"
                className="block w-full mt-4 px-4 py-2 text-center text-white bg-[#0D8AFF] rounded-full hover:bg-blue-600"
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}