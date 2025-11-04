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
    if (pathname === "/") {
      e.preventDefault();
      // Scroll to next section
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
    // Otherwise, let the Link handle navigation to /
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#about";
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  const navLinks = [
    { label: "Portfolio", href: "/products" },
  ];

  const rightNavLinks = [
    { label: "Content", href: "/content" },
  ];

  // Always show background on non-home pages, or when scrolled on home page
  const isHomePage = pathname === "/";
  const shouldShowBackground = !isHomePage || scrolled;

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
        <div className="flex items-center justify-center h-24 gap-16 md:gap-28 lg:gap-40">
          {/* Left nav links */}
          <div className="flex items-center gap-14 md:gap-20 lg:gap-24">
            {/* About link with scroll behavior */}
            <button
              onClick={handleAboutClick}
              className={cn(
                "text-base md:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300",
                "bg-gradient-to-r from-white via-white to-white bg-clip-text",
                "hover:from-primary hover:via-white hover:to-primary",
                "[text-shadow:_0_0_10px_rgba(255,255,255,0.3)]",
                "text-transparent"
              )}
            >
              About
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base md:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300",
                  "bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent",
                  "hover:from-primary hover:via-white hover:to-primary",
                  "[text-shadow:_0_0_10px_rgba(255,255,255,0.3)]"
                )}
                style={{
                  filter: pathname === link.href ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))" : "none"
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center name */}
          <Link
            href="/"
            onClick={handleArsumClick}
            className="text-base md:text-lg font-display font-bold uppercase tracking-[0.2em] transition-all duration-300 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent hover:from-primary hover:via-white hover:to-primary [text-shadow:_0_0_10px_rgba(255,255,255,0.3)]"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
            }}
          >
            ARSUM
          </Link>

          {/* Right nav links */}
          <div className="flex items-center gap-14 md:gap-20 lg:gap-24">
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base md:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300",
                  "bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent",
                  "hover:from-primary hover:via-white hover:to-primary",
                  "[text-shadow:_0_0_10px_rgba(255,255,255,0.3)]"
                )}
                style={{
                  filter: pathname === link.href ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))" : "none"
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact link with scroll behavior */}
            <button
              onClick={handleContactClick}
              className={cn(
                "text-base md:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300",
                "bg-gradient-to-r from-white via-white to-white bg-clip-text",
                "hover:from-primary hover:via-white hover:to-primary",
                "[text-shadow:_0_0_10px_rgba(255,255,255,0.3)]",
                "text-transparent"
              )}
            >
              Contact
            </button>

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
