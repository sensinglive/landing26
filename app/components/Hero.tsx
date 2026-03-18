export default function Hero() {
  return (
    <section className="px-5 md:px-8 lg:px-20 pt-10 md:pt-12 lg:pt-16 pb-12 lg:pb-20">
      <div className="flex flex-col gap-6 md:gap-8">
        <h1 className="hero-enter font-mono text-[36px] md:text-[56px] lg:text-[88px] font-bold leading-[1.05] lg:leading-[0.95] tracking-tight text-text-primary">
          DORMIR TRANQUILO ENQUANTO SUAS VACINAS ESTÃO SEGURAS.
        </h1>

        <p className="hero-enter hero-enter-delay-1 font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[640px]">
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
