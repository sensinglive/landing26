"use client";

import { useReveal } from "../hooks/useReveal";

const risks = [
  {
    title: "Perda de Insumos Públicos",
    desc: "Vacinas descartadas por falha de monitoramento representam desperdício direto de recurso público.",
  },
  {
    title: "Interdição e Multas",
    desc: "Não-conformidade com a RDC 430 da Anvisa pode resultar em interdição da unidade e processo administrativo.",
  },
  {
    title: "Falhas Sem Rastreabilidade",
    desc: "Sem monitoramento contínuo, não há como comprovar que a cadeia fria foi mantida durante uma auditoria.",
  },
  {
    title: "Registro Manual",
    desc: "Planilhas de papel não têm validade legal, estão sujeitas a erro humano e não geram alertas.",
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
            Sua unidade está em conformidade agora?
          </h2>
          <p className="reveal font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[700px]">
            Interdição pela Vigilância Sanitária? Prejuízo financeiro por perda de medicação?? 
            Erros humanos e trabalho manual para monitoramento?! Uma oscilação de temperatura pode levar à perda de centenas de doses de vacina. 
            Mas esse nem é o maior problema... Expor medicamentos a temperturas inadequadas, seja de 1°C por meia hora, pode comprometer a imunidade de uma criança — ESSE É O PROBLEMA REAL QUE EVITAMOS!
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
