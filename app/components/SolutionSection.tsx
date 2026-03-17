"use client";

import { useReveal } from "../hooks/useReveal";

const cards = [
  {
    micro: "MONITORAMENTO",
    title: "Visibilidade Total",
    desc: "Sensor S2 Pro com display LCD e sonda externa. Sua equipe confere a temperatura num relance, sem precisar abrir a porta ou acessar o sistema.",
    bg: "bg-card-green-dark",
    textMicro: "text-white/50",
    textTitle: "text-white",
    textDesc: "text-white/80",
  },
  {
    micro: "INTELIGÊNCIA",
    title: "Manutenção Preditiva",
    desc: "Monitoramos a saúde elétrica do equipamento. Nossa IA detecta se o compressor está trabalhando demais ou se o degelo falhou — antes da temperatura sair do controle.",
    bg: "bg-card-green-mid",
    textMicro: "text-white/50",
    textTitle: "text-white",
    textDesc: "text-white/80",
  },
  {
    micro: "CONECTIVIDADE",
    title: "Conectividade Inabalável",
    desc: "Internet caiu? Energia acabou? A Sensing continua operando. Bateria interna e redundância celular automática garantem que seus dados nunca parem de chegar.",
    bg: "bg-card-green-light",
    textMicro: "text-[#0D4F4F80]",
    textTitle: "text-card-green-dark",
    textDesc: "text-[#0D4F4FCC]",
  },
  {
    micro: "INFRAESTRUTURA",
    title: "Tecnologia Mesh Zigbee 3.0",
    desc: "Rede em malha que ignora as paredes de metal das geladeiras. O dado sai do sensor e chega ao sistema com 100% de estabilidade, sem quedas de sinal.",
    bg: "bg-card-green-dark",
    textMicro: "text-white/50",
    textTitle: "text-white",
    textDesc: "text-white/80",
  },
];

export default function SolutionSection() {
  const ref = useReveal();

  return (
    <section ref={ref} id="diferenciais" className="px-20 py-20">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="reveal text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
            DIFERENCIAIS
          </span>
          <h2 className="reveal font-mono text-[40px] font-medium leading-[1.1] text-text-primary">
            Por que a Sensing é a escolha de gestores inteligentes?
          </h2>
        </div>

        {/* Card grid */}
        <div className="flex flex-col gap-0 stagger">
          {/* Row 1 */}
          <div className="flex gap-0">
            {cards.slice(0, 2).map((card) => (
              <div
                key={card.title}
                className={`reveal card-hover flex-1 flex flex-col gap-3 p-8 h-[280px] ${card.bg}`}
              >
                <span
                  className={`text-[10px] font-normal tracking-[0.25em] font-sans ${card.textMicro}`}
                >
                  {card.micro}
                </span>
                <h3
                  className={`font-mono text-[22px] font-extralight ${card.textTitle}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-sans text-sm font-normal leading-[1.6] ${card.textDesc}`}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex gap-0">
            {cards.slice(2, 4).map((card) => (
              <div
                key={card.title}
                className={`reveal card-hover flex-1 flex flex-col gap-3 p-8 h-[280px] ${card.bg}`}
              >
                <span
                  className={`text-[10px] font-normal tracking-[0.25em] font-sans ${card.textMicro}`}
                >
                  {card.micro}
                </span>
                <h3
                  className={`font-mono text-[22px] font-extralight ${card.textTitle}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-sans text-sm font-normal leading-[1.6] ${card.textDesc}`}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
