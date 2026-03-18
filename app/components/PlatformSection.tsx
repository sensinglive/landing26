"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const stats = [
  {
    label: "UNIDADES MONITORADAS",
    value: 47,
    bg: "bg-card-green-dark",
    labelColor: "text-white/40",
    valueColor: "text-white",
  },
  {
    label: "SENSORES ATIVOS",
    value: 186,
    bg: "bg-white border border-divider",
    labelColor: "text-text-tertiary",
    valueColor: "text-text-primary",
  },
  {
    label: "ALERTAS HOJE",
    value: 3,
    bg: "bg-white border border-divider",
    labelColor: "text-text-tertiary",
    valueColor: "text-text-primary",
  },
  {
    label: "UPTIME",
    value: 99.8,
    suffix: "%",
    bg: "bg-card-green-mid",
    labelColor: "text-white/40",
    valueColor: "text-white",
  },
];

function AnimatedStat({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix?: string;
  className: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();
          const isFloat = value % 1 !== 0;

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            setDisplay(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

export default function PlatformSection() {
  const ref = useReveal();

  return (
    <section ref={ref} id="plataforma" className="px-5 md:px-8 lg:px-20 py-12 lg:py-20">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        <span className="reveal text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
          PLATAFORMA
        </span>
        <div className="reveal h-px bg-divider" />

        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-mono text-[36px] md:text-[56px] lg:text-[80px] font-bold leading-[1.05] lg:leading-[0.95] text-text-primary">
            Sua gestão
            <br />
            na palma
            <br />
            da mão.
          </h2>
          <a
            href="#cta"
            className="cta-btn self-start md:self-auto border border-text-primary/20 px-5 py-2.5 cursor-pointer md:mb-2"
          >
            <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
              VER PLATAFORMA ↗
            </span>
          </a>
        </div>

        <p className="reveal font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[600px]">
          Acompanhe todas as suas unidades de saúde em um único painel. Receba
          alertas críticos diretamente no seu WhatsApp e tome decisões baseadas
          em dados, não em suposições.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:flex gap-0 stagger">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`reveal card-hover md:flex-1 flex flex-col gap-3 md:gap-4 p-5 md:p-6 lg:p-8 ${stat.bg}`}
            >
              <span
                className={`text-[10px] font-normal tracking-[0.15em] font-sans ${stat.labelColor}`}
              >
                {stat.label}
              </span>
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                className={`font-mono text-[40px] md:text-[48px] lg:text-[64px] font-extralight leading-none ${stat.valueColor}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
