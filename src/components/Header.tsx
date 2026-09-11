"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Apps", href: "/apps" },
    { name: "Engineering", href: "/engineering" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/80 border-b border-cardBorder backdrop-blur-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-sm tracking-wider hover:text-accent transition-colors flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          GAURAV SHUKLA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-mono tracking-widest transition-colors relative uppercase ${
                  isActive ? "text-accent" : "text-zinc-400 hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTAs (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/Gaurav_Shukla_Senior_Mobile_Application_Engineer.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full text-xs font-mono tracking-wider hover:border-accent hover:text-accent transition-all hover:shadow-[0_0_15px_rgba(0,255,102,0.1)]"
          >
            <FileText className="w-3.5 h-3.5" />
            DOWNLOAD CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 text-zinc-400 hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background/95 border-b border-cardBorder backdrop-blur-lg md:hidden z-40"
          >
            <nav className="flex flex-col p-6 gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-mono tracking-widest uppercase border-b border-zinc-900 pb-2 flex items-center justify-between ${
                      isActive ? "text-accent" : "text-zinc-400 hover:text-foreground"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </Link>
                );
              })}

              <a
                href="/Gaurav_Shukla_Senior_Mobile_Application_Engineer.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs font-mono tracking-wider transition-all"
                onClick={handleLinkClick}
              >
                <FileText className="w-4 h-4" />
                DOWNLOAD CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
