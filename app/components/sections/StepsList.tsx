"use client";

import { useReveal } from "../../hooks/useReveal";

interface Step {
  title: string;
  description: string;
}

interface StepsListProps {
  steps: Step[];
}

export default function StepsList({ steps }: StepsListProps) {
  const ref = useReveal();

  return (
    <div ref={ref} className="flex flex-col w-full max-w-[800px] stagger">
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="reveal flex flex-col gap-2 py-4 md:py-6">
            <h3 className="font-mono text-base md:text-lg lg:text-xl font-extralight text-text-primary">
              {step.title}
            </h3>
            <p className="font-sans text-sm md:text-[15px] font-normal leading-[1.6] text-text-secondary">
              {step.description}
            </p>
          </div>
          {i < steps.length - 1 && <div className="reveal h-px bg-divider" />}
        </div>
      ))}
    </div>
  );
}
