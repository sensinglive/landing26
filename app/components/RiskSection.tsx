"use client";

import { useReveal } from "../hooks/useReveal";

const risks = [
  {
    title: "Prejuízos Financeiros",
    desc: "Perda de insumos de alto custo por falhas de monitoramento que poderiam ter sido evitadas.",
  },
  {
    title: "Riscos Jurídicos",
    desc: "Multas pesadas e interdições da Vigilância Sanitária por não-conformidade com normas da Anvisa.",
  },
  {
    title: "Falhas Invisíveis",
    desc: "Sua geladeira pode estar prestes a quebrar agora, e você só vai descobrir quando a temperatura subir.",
  },
  {
    title: "Trabalho Manual",
    desc: "Sua equipe perdendo tempo precioso preenchendo planilhas de papel que podem conter erros.",
  },
];

export default function RiskSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="px-5 md:px-8 lg:px-20 py-12 lg:py-20">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="reveal text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
            O RISCO
          </span>
          <h2 className="reveal font-mono text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] text-text-primary">
            O custo do &ldquo;eu não sabia&rdquo; é alto demais.
          </h2>
          <p className="reveal font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[700px]">
            Você sabia que uma oscilação de 2 graus pode invalidar um lote
            inteiro de vacinas?
          </p>
        </div>

        {/* Risk list */}
        <div className="flex flex-col stagger">
          <div className="reveal h-px bg-divider" />
          {risks.map((risk) => (
            <div key={risk.title}>
              <div className="reveal flex flex-col gap-2 py-4 md:py-6">
                <h3 className="font-mono text-base md:text-lg lg:text-xl font-extralight text-text-primary">
                  {risk.title}
                </h3>
                <p className="font-sans text-sm md:text-[15px] font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[700px]">
                  {risk.desc}
                </p>
              </div>
              <div className="reveal h-px bg-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
