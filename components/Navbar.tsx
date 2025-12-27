"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArsumClick = (e: React.MouseEvent) => {
    // ARSUM always goes to the main page (/about)
    // No special scroll behavior
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    if (pathname === "/about") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/about#about";
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/about") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/about#contact";
    }
  };

  const navLinks = [
    { label: "About", href: "/about", onClick: handleAboutClick },
    { label: "Portfolio", href: "/" },
    { label: "Content", href: "/content" },
    { label: "Contact", href: "/about#contact", onClick: handleContactClick },
  ];

  // Always show background on all pages (portfolio is now at /)
  const shouldShowBackground = true;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        shouldShowBackground
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center h-24">
          {/* All nav links in order: ARSUM, About, Portfolio, Content, Contact */}
          <div className="flex items-center gap-14 md:gap-20 lg:gap-24">
            {/* ARSUM name first with glow */}
            <Link
              href="/about"
              onClick={handleArsumClick}
              className="text-base md:text-lg font-display font-bold uppercase tracking-[0.2em] transition-all duration-300 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent hover:from-primary hover:via-white hover:to-primary [text-shadow:_0_0_10px_rgba(255,255,255,0.3)]"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))"
              }}
            >
              ARSUM
            </Link>

            {/* All other nav links without active state glow */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.onClick}
                className={cn(
                  "text-base md:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300",
                  "bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent",
                  "hover:from-primary hover:via-white hover:to-primary",
                  "[text-shadow:_0_0_10px_rgba(255,255,255,0.3)]"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
