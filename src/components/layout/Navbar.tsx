"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // 1. Import usePathname

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname(); // 2. Get current pathname

  // 3. Automatically close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (
          window.scrollY > lastScrollY &&
          window.scrollY > 100 &&
          !isMenuOpen
        ) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#0B0C1E] z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full mx-auto px-6 md:px-14 h-30 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Threadify Logo"
            width={200}
            height={40}
            className="h-8 md:h-24 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-17 w-full justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-[20px] hover:text-[#D5F334] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="px-14 py-3 rounded-full border border-[#D5F334] text-[#D5F334] text-[16px] font-medium hover:bg-[#D5F334]/5 transition-all"
          >
            LogIn
          </Link>
          <Link
            href="/signup"
            className="px-14 py-3 rounded-full bg-[#D5F334] text-[#0B0C1E] text-[16px] font-bold hover:shadow-[0_0_20px_rgba(213,243,52,0.3)] transition-all"
          >
            SignUp
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#0B0C1E] border-t border-white/10 flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-lg"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              className="text-[#D5F334] text-center py-3 border border-[#D5F334] rounded-full"
            >
              LogIn
            </Link>
            <Link
              href="/signup"
              className="bg-[#D5F334] text-[#0B0C1E] text-center py-3 rounded-full font-bold"
            >
              SignUp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
