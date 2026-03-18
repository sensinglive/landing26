"use client";

import { useReveal } from "../../hooks/useReveal";

interface DarkCTAProps {
  micro?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function DarkCTA({
  micro = "PRÓXIMO PASSO",
  title,
  description,
  buttonText = "SOLICITAR DEMO ↗",
  buttonHref = "#cta",
}: DarkCTAProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-bg-dark px-5 md:px-8 lg:px-20 py-14 md:py-16 lg:py-20">
      <div className="flex flex-col gap-6 md:gap-8">
        <span className="reveal text-[10px] font-normal tracking-[0.25em] text-white/40 font-sans">
          {micro}
        </span>
        <h2 className="reveal font-mono text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.05] lg:leading-[0.95] text-white">
          {title}
        </h2>
        <p className="reveal font-sans text-sm md:text-base font-normal leading-[1.6] text-white/60 max-w-[600px]">
          {description}
        </p>
        <a
          href={buttonHref}
          className="reveal cta-btn inline-flex items-center self-start border border-white/20 px-5 py-2.5 cursor-pointer"
        >
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-white">
            {buttonText}
          </span>
        </a>
      </div>
    </section>
  );
}
