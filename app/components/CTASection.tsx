"use client";

import { useState, type FormEvent } from "react";
import { useReveal } from "../hooks/useReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function CTASection() {
  const ref = useReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setErrorMsg("Preencha nome e e-mail.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, institution }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setInstitution("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  }

  return (
    <section ref={ref} id="cta" className="bg-card-green-dark px-5 md:px-8 lg:px-20 py-14 md:py-20 lg:py-24">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        <span className="reveal text-[10px] font-normal tracking-[0.25em] text-white/40 font-sans">
          PRÓXIMO PASSO
        </span>
        <div className="reveal h-px bg-white/10" />
        <h2 className="reveal font-mono text-[36px] md:text-[56px] lg:text-[88px] font-bold leading-[1.05] lg:leading-[0.95] text-white">
          Comece em
          <br />
          minutos. Sem
          <br className="hidden lg:block" />
          obra. Sem TI.
        </h2>
        <p className="reveal font-sans text-base md:text-lg font-normal leading-[1.6] text-white/60">
          Agende uma demonstração e veja como funciona na prática.
        </p>

        {status === "success" ? (
          <div className="flex items-center h-14 px-5 bg-white/10 border border-white/20">
            <p className="font-sans text-sm text-white">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          </div>
        ) : (
          <form className="reveal flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-0">
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full md:flex-1 h-12 md:h-14 px-5 bg-transparent border border-white/20 text-white font-sans text-sm placeholder:text-white/30 focus:border-white/50 transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:flex-1 h-12 md:h-14 px-5 bg-transparent border border-white/20 border-t-0 md:border-t md:border-l-0 text-white font-sans text-sm placeholder:text-white/30 focus:border-white/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Instituição / Cidade"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="w-full md:flex-1 h-12 md:h-14 px-5 bg-transparent border border-white/20 border-t-0 md:border-t md:border-l-0 text-white font-sans text-sm placeholder:text-white/30 focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full md:flex-1 h-12 md:h-14 px-5 bg-white flex items-center justify-center gap-2 cursor-pointer hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="font-sans text-[12px] md:text-[13px] font-bold tracking-[0.08em] text-text-primary">
                  {status === "loading" ? "ENVIANDO..." : "FALAR COM ESPECIALISTA"}
                </span>
                {status !== "loading" && (
                  <span className="font-sans text-base font-bold text-text-primary">
                    ↗
                  </span>
                )}
              </button>
            </div>

            {status === "error" && (
              <p className="font-sans text-sm text-red-400">{errorMsg}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
