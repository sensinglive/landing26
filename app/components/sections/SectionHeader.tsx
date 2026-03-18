"use client";

import { useReveal } from "../../hooks/useReveal";

interface SectionHeaderProps {
  micro: string;
  title: string;
  description?: string;
  dark?: boolean;
  maxWidth?: number;
  titleSize?: "sm" | "md" | "lg";
  centered?: boolean;
}

export default function SectionHeader({
  micro,
  title,
  description,
  dark = false,
  maxWidth = 600,
  titleSize = "md",
  centered = false,
}: SectionHeaderProps) {
  const ref = useReveal();

  const titleSizeClass = {
    sm: "text-[28px] md:text-[32px] lg:text-[40px]",
    md: "text-[32px] md:text-[40px] lg:text-[48px]",
    lg: "text-[36px] md:text-[56px] lg:text-[72px]",
  }[titleSize];

  return (
    <div ref={ref} className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""}`}>
      <span
        className={`reveal text-[10px] font-normal tracking-[0.25em] font-sans ${
          dark ? "text-white/40" : "text-text-tertiary"
        }`}
      >
        {micro}
      </span>
      <h2
        className={`reveal font-mono ${titleSizeClass} font-medium leading-[1.1] ${
          dark ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`reveal font-sans text-sm md:text-base font-normal leading-[1.6] ${
            dark ? "text-white/60" : "text-text-secondary"
          }`}
          style={{ maxWidth: `${maxWidth}px` }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
