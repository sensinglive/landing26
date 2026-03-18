"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "SOLUÇÕES", href: "/solucoes" },
  { label: "DIFERENCIAIS", href: "/#diferenciais" },
  { label: "TECNOLOGIA", href: "/#tecnologia" },
  { label: "CONTATO", href: "/#cta" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between px-5 md:px-8 lg:px-20 py-4 md:py-6 transition-all duration-500 ${
          scrolled
            ? "bg-bg-page/90 backdrop-blur-md shadow-[0_1px_0_0_#E0E0E0]"
            : "bg-bg-page"
        }`}
      >
        <a href="/">
          <img src="/sensing_26_logo_f.svg" alt="Sensing" className="h-6 md:h-8" />
        </a>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-xs font-medium tracking-[0.08em] text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cta" className="hidden md:flex cta-btn border border-text-primary/20 px-5 py-2.5 cursor-pointer">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
            AGENDAR DEMO ↗
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-text-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-bg-page pt-20 px-5 flex flex-col gap-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-2xl font-extralight tracking-[0.08em] text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="cta-btn inline-flex items-center self-start border border-text-primary/20 px-5 py-3 cursor-pointer"
          >
            <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
              AGENDAR DEMO ↗
            </span>
          </a>
        </div>
      )}
    </>
  );
}
