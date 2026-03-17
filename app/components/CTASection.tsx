"use client";

import { useReveal } from "../hooks/useReveal";

export default function CTASection() {
  const ref = useReveal();

  return (
    <section ref={ref} id="cta" className="bg-card-green-dark px-20 py-24">
      <div className="flex flex-col gap-16">
        <span className="reveal text-[10px] font-normal tracking-[0.25em] text-white/40 font-sans">
          PRÓXIMO PASSO
        </span>
        <div className="reveal h-px bg-white/10" />
        <h2 className="reveal font-mono text-[88px] font-bold leading-[0.95] text-white">
          Não espere o
          <br />
          alarme tocar.
        </h2>
        <p className="reveal font-sans text-lg font-normal leading-[1.6] text-white/60">
          Junte-se à evolução do monitoramento de cadeia fria.
        </p>

        {/* Form */}
        <form
          className="reveal flex gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Nome"
            className="flex-1 h-14 px-5 bg-transparent border border-white/20 text-white font-sans text-sm placeholder:text-white/30 focus:border-white/50 transition-colors"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="flex-1 h-14 px-5 bg-transparent border border-white/20 border-l-0 text-white font-sans text-sm placeholder:text-white/30 focus:border-white/50 transition-colors"
          />
          <input
            type="text"
            placeholder="Instituição / Cidade"
            className="flex-1 h-14 px-5 bg-transparent border border-white/20 border-l-0 text-white font-sans text-sm placeholder:text-white/30 focus:border-white/50 transition-colors"
          />
          <button
            type="submit"
            className="flex-1 h-14 px-5 bg-white flex items-center justify-center gap-2 cursor-pointer hover:bg-white/90 transition-colors"
          >
            <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
              FALAR COM ESPECIALISTA
            </span>
            <span className="font-sans text-base font-bold text-text-primary">
              ↗
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
