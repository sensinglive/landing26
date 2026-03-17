export default function Hero() {
  return (
    <section className="px-20 pt-16 pb-20">
      <div className="flex flex-col gap-8">
        <h1 className="hero-enter font-mono text-[88px] font-bold leading-[0.95] tracking-tight text-text-primary max-w-[1280px]">
          DORMIR TRANQUILO ENQUANTO SUAS VACINAS ESTÃO SEGURAS.
        </h1>

        <p className="hero-enter hero-enter-delay-1 font-sans text-base font-normal leading-[1.6] text-text-secondary max-w-[640px]">
          A única solução de monitoramento de cadeia fria que não apenas registra
          o passado, mas prevê o futuro. Proteja seu estoque, automatize sua
          conformidade com a Anvisa e evite perdas milionárias com inteligência
          preditiva.
        </p>

        <a
          href="#cta"
          className="hero-enter hero-enter-delay-2 cta-btn inline-flex items-center self-start border border-text-primary/20 px-5 py-2.5 cursor-pointer"
        >
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
            PROTEGER MEU ESTOQUE ↗
          </span>
        </a>
      </div>
    </section>
  );
}
