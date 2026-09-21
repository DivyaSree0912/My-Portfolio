"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#projects", id: "projects" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F5F0EB]/90 backdrop-blur-md border-b border-[#E0D9D1]"
          : "bg-transparent",
      )}
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between py-5">
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-[0.2em] text-[#1A1A1A] uppercase transition-colors hover:text-[#6B6560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]"
          >
            Dadi Divya Sree
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[11px] font-medium tracking-[0.18em] text-[#6B6560] uppercase transition-colors hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E0D9D1] text-[#1A1A1A] transition-colors hover:bg-[#EDE8E2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[72px] z-40 bg-[#F5F0EB]/98 backdrop-blur-sm md:hidden"
        >
          <div className="px-6 pt-8">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex w-full items-center py-4 text-2xl font-medium tracking-[-0.02em] text-[#1A1A1A] border-b border-[#E0D9D1] transition-colors hover:text-[#6B6560]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
