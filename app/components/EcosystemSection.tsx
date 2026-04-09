"use client";

import { useReveal } from "../hooks/useReveal";

const ecosystemCards = [
  {
    num: "01 — SENSOR",
    title: "O Olho",
    name: "Sensor S2 Pro",
    desc: "Monitora temperatura e umidade com precisão cirúrgica e display local. Sua equipe confere os dados num relance, sem abrir a porta.",
    bg: "bg-card-green-dark",
    catColor: "text-white/50",
    titleColor: "text-white",
    nameColor: "text-white",
    descColor: "text-white/80",
  },
  {
    num: "02 — SENSOR",
    title: "A Tela",
    name: "Sensor D2",
    desc: "Conectividade WiFi independente sem necessidade de Gateway. Display LCD para leitura imediata no ponto. Ideal para ambientes com Wi-Fi disponível.",
    bg: "bg-bg-dark",
    catColor: "text-white/50",
    titleColor: "text-white",
    nameColor: "text-white",
    descColor: "text-white/80",
  },
  {
    num: "03 — PLUG",
    title: "O Ouvido",
    name: "Smart Plug P1",
    desc: "Analisa o consumo elétrico e amplifica o sinal da rede em toda a unidade. Detecta falhas antes que aconteçam.",
    bg: "bg-card-green-mid",
    catColor: "text-white/50",
    titleColor: "text-white",
    nameColor: "text-white",
    descColor: "text-white/80",
  },
  {
    num: "04 — GATEWAY",
    title: "O Coração",
    name: "Gateway G1",
    desc: "Coordena tudo e garante que, aconteça o que acontecer, a informação chegue até você com segurança total.",
    bg: "bg-card-green-light",
    catColor: "text-black/40",
    titleColor: "text-text-primary",
    nameColor: "text-text-primary",
    descColor: "text-black/65",
  },
];

export default function EcosystemSection() {
  const ref = useReveal();

  return (
    <section ref={ref} id="tecnologia" className="px-5 md:px-8 lg:px-20 py-12 lg:py-20">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        <span className="reveal text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
          ECOSSISTEMA
        </span>
        <div className="reveal h-px bg-divider" />
        <h2 className="reveal font-mono text-[36px] md:text-[56px] lg:text-[80px] font-bold leading-[1.05] lg:leading-[0.95] text-text-primary">
          O Ecossistema
          <br />
          Sensing.
        </h2>
        <p className="reveal font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[600px]">
          Quatro componentes integrados que garantem monitoramento contínuo e
          confiável da sua cadeia fria.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-0 stagger">
          {ecosystemCards.map((card) => (
            <div
              key={card.title}
              className={`reveal card-hover flex-1 flex flex-col justify-between p-5 md:p-6 lg:p-8 min-h-[260px] md:min-h-[320px] ${card.bg}`}
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`text-[10px] font-normal tracking-[0.15em] font-sans ${card.catColor}`}
                >
                  {card.num}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3
                  className={`font-mono text-xl md:text-2xl lg:text-[28px] font-extralight ${card.titleColor}`}
                >
                  {card.title}
                </h3>
                <span
                  className={`font-sans text-sm font-bold tracking-[0.08em] ${card.nameColor}`}
                >
                  {card.name}
                </span>
                <p
                  className={`font-sans text-sm font-normal leading-[1.6] ${card.descColor}`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
