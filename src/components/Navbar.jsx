"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRODUCTS", href: "/products" },
  { name: "INDUSTRIES", href: "/industries" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-md border-navy-800 py-3 shadow-lg"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-steel-200 transition-colors">
              T&T TRADERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-semibold tracking-wide transition-all hover:text-orange-500 relative py-2",
                        isActive ? "text-white" : "text-steel-300"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-t"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/request-quote"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide transition-colors"
            >
              REQUEST A QUOTE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-orange-500 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-navy-900 border-b border-navy-800 transition-all duration-300 origin-top overflow-hidden shadow-2xl",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-3 text-base font-semibold tracking-wide rounded-md transition-colors",
                  isActive
                    ? "text-orange-500 bg-navy-800/50"
                    : "text-steel-300 hover:bg-navy-800 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-3">
            <Link
              href="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-orange-600 text-white px-5 py-3 rounded font-bold tracking-wide hover:bg-orange-500 transition-colors"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
