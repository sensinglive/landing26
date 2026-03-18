"use client";

import { useReveal } from "../../hooks/useReveal";

interface Card {
  micro: string;
  title: string;
  description: string;
  variant: "dark" | "mid" | "light";
}

interface CardGridProps {
  cards: Card[];
}

const variantStyles = {
  dark: {
    bg: "bg-card-green-dark",
    micro: "text-white/40",
    title: "text-white",
    desc: "text-white/60",
  },
  mid: {
    bg: "bg-card-green-mid",
    micro: "text-white/40",
    title: "text-white",
    desc: "text-white/60",
  },
  light: {
    bg: "bg-card-green-light",
    micro: "text-card-green-dark",
    title: "text-card-green-dark",
    desc: "text-[#0D4F4F80]",
  },
};

export default function CardGrid({ cards }: CardGridProps) {
  const ref = useReveal();

  return (
    <div ref={ref} className="flex flex-col md:flex-row gap-4 stagger">
      {cards.map((card) => {
        const s = variantStyles[card.variant];
        return (
          <div
            key={card.title}
            className={`reveal card-hover flex-1 flex flex-col justify-between p-5 md:p-6 lg:p-8 min-h-[240px] md:min-h-[300px] ${s.bg}`}
          >
            <div className="flex flex-col gap-1">
              <span className={`text-[10px] font-normal tracking-[0.25em] font-sans ${s.micro}`}>
                {card.micro}
              </span>
              <h3 className={`font-mono text-lg md:text-xl lg:text-[22px] font-bold leading-[1.1] ${s.title}`}>
                {card.title}
              </h3>
            </div>
            <p className={`font-sans text-sm font-normal leading-[1.6] ${s.desc}`}>
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
