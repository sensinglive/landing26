"use client";

import { useReveal } from "../../hooks/useReveal";

interface Stat {
  label: string;
  value: string;
  variant: "dark" | "mid" | "light";
}

interface StatsBarProps {
  stats: Stat[];
}

const variantStyles = {
  dark: {
    bg: "bg-card-green-dark",
    label: "text-white/40",
    value: "text-white",
  },
  mid: {
    bg: "bg-card-green-mid",
    label: "text-white/40",
    value: "text-white",
  },
  light: {
    bg: "bg-white border border-divider",
    label: "text-text-tertiary",
    value: "text-text-primary",
  },
};

export default function StatsBar({ stats }: StatsBarProps) {
  const ref = useReveal();

  return (
    <div ref={ref} className="grid grid-cols-2 md:flex gap-4 stagger">
      {stats.map((stat) => {
        const s = variantStyles[stat.variant];
        return (
          <div
            key={stat.label}
            className={`reveal card-hover md:flex-1 flex flex-col gap-3 md:gap-4 p-5 md:p-6 lg:p-8 ${s.bg}`}
          >
            <span className={`text-[10px] font-normal tracking-[0.15em] font-sans ${s.label}`}>
              {stat.label}
            </span>
            <span className={`font-mono text-[40px] md:text-[48px] lg:text-[64px] font-extralight leading-none ${s.value}`}>
              {stat.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
