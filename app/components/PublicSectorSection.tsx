"use client";

import { useReveal } from "../hooks/useReveal";

const features = [
  {
    num: "01",
    title: "Economia de Erário",
    desc: "Evite o desperdício de dinheiro público com vacinas perdidas.",
  },
  {
    num: "02",
    title: "Relatórios Automáticos",
    desc: "Gere logs imutáveis para auditorias em um clique.",
  },
  {
    num: "03",
    title: "Instalação Plug & Play",
    desc: "Sem reformas ou obras. Em 10 minutos, sua unidade está monitorada.",
  },
];

export default function PublicSectorSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-bg-dark px-20 py-20">
      <div className="flex flex-col gap-16">
        <span className="reveal text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
          SETOR PÚBLICO
        </span>
        <div className="reveal h-px bg-white/10" />
        <h2 className="reveal font-mono text-[72px] font-bold leading-[0.95] text-white">
          Ideal para
          <br />
          Prefeituras e
          <br />
          Órgãos Públicos.
        </h2>
        <p className="reveal font-sans text-base font-normal leading-[1.6] text-white/60 max-w-[600px]">
          A Sensing foi desenhada para a realidade do setor público brasileiro.
          Proteção do erário, conformidade automática e instalação em minutos.
        </p>

        {/* Features list */}
        <div className="flex flex-col stagger">
          {features.map((feat) => (
            <div
              key={feat.num}
              className="reveal flex items-center justify-between py-6 border-t border-white/10 last:border-b"
            >
              <span className="font-mono text-xs font-extralight text-white/25">
                {feat.num}
              </span>
              <h3 className="font-mono text-xl font-extralight text-white">
                {feat.title}
              </h3>
              <p className="font-sans text-sm font-normal text-white/50 max-w-[400px]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
