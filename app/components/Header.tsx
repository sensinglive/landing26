"use client";

import { useEffect, useState } from "react";

const navItems = ["SOLUÇÕES", "DIFERENCIAIS", "TECNOLOGIA", "CONTATO"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-20 py-6 transition-all duration-500 ${
        scrolled
          ? "bg-bg-page/90 backdrop-blur-md shadow-[0_1px_0_0_#E0E0E0]"
          : "bg-bg-page"
      }`}
    >
      <a
        href="#"
        className="font-mono text-sm font-extralight tracking-[0.15em] text-text-primary"
      >
        SENSING
      </a>

      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link text-xs font-medium tracking-[0.08em] text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <a href="#cta" className="cta-btn border border-text-primary/20 px-5 py-2.5 cursor-pointer">
        <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
          SOLICITAR DEMO ↗
        </span>
      </a>
    </header>
  );
}
