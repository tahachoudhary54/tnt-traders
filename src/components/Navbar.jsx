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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled || mobileMenuOpen
            ? "bg-navy-900/95 backdrop-blur-md border-navy-800 py-3 shadow-lg"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
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
                          "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-500 after:transition-transform after:duration-300",
                          "after:scale-x-0 hover:after:scale-x-100",
                          isActive ? "text-white" : "text-steel-300"
                        )}
                      >
                        {link.name}
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
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation (Full Screen) */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-navy-900 transition-transform duration-500 flex flex-col pt-24 pb-12",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-6 flex-grow flex flex-col justify-center gap-8">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-3xl sm:text-4xl font-bold tracking-wide w-fit transition-all duration-500",
                  "relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-500 after:transition-transform after:duration-300",
                  "after:scale-x-0 hover:after:scale-x-100",
                  isActive
                    ? "text-orange-500"
                    : "text-steel-300 hover:text-white"
                )}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0
                }}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div 
            className="pt-8 w-full transition-all duration-500"
            style={{
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 75}ms` : '0ms',
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0
            }}
          >
            <Link
              href="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-orange-600 text-white px-5 py-4 rounded font-bold tracking-wide hover:bg-orange-500 transition-colors text-lg"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
