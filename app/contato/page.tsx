"use client";

import { useState, type FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Status = "idle" | "loading" | "success" | "error";

const infoCards = [
  {
    micro: "E-MAIL",
    title: "contato@sensing.live",
    bg: "bg-card-green-dark",
    microColor: "text-white/40",
    titleColor: "text-white",
  },
  {
    micro: "ESCRITÓRIO",
    title: "Florianópolis/SC, Vitória/ES",
    bg: "bg-card-green-light",
    microColor: "text-card-green-dark",
    titleColor: "text-card-green-dark",
  },
];

const faqs = [
  {
    q: "Como funciona a integração com sensores IoT?",
    a: "A Sensing conecta-se via protocolo Zigbee 3.0 em topologia de malha (mesh). A integração com sistemas legados é feita via API REST e não requer desenvolvimento adicional.",
  },
  {
    q: "Qual o tempo de implementação da plataforma?",
    a: "O tempo médio de implementação é de 4 a 8 semanas, dependendo da complexidade do projeto e do número de sensores envolvidos.",
  },
  {
    q: "A plataforma atende aos requisitos da LGPD?",
    a: "Sim. Todos os dados são armazenados em servidores no Brasil e seguem rigorosamente as diretrizes da Lei Geral de Proteção de Dados.",
  },
  {
    q: "É possível personalizar dashboards e relatórios?",
    a: "Sim. A plataforma oferece dashboards totalmente customizáveis, com gráficos interativos, exportação de relatórios em PDF e alertas configuráveis.",
  },
];

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setErrorMsg("Nome e e-mail são obrigatórios.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, institution, message }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar.");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setInstitution("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  }

  return (
    <main className="min-h-screen bg-bg-page">
      <Header />

      {/* Hero */}
      <section className="px-5 md:px-8 lg:px-20 pt-10 md:pt-12 lg:pt-16 pb-8 lg:pb-16">
        <div className="flex flex-col gap-8">
          <span className="text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
            CONTATO
          </span>
          <h1 className="font-mono text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] lg:leading-[0.95] text-text-primary">
            Fale com a
            <br />
            equipe Sensing.
          </h1>
          <p className="font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-full md:max-w-[600px]">
            Tire suas dúvidas, agende uma demonstração ou solicite uma proposta
            personalizada para sua instituição.
          </p>
        </div>
      </section>

      <div className="h-px bg-divider" />

      {/* Form + Info */}
      <section className="px-5 md:px-8 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Form column */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
                FORMULÁRIO
              </span>
              <h2 className="font-mono text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] text-text-primary">
                Solicite uma
                <br />
                demo gratuita.
              </h2>
            </div>

            {status === "success" ? (
              <div className="flex items-center h-14 px-5 bg-card-green-dark/10 border border-card-green-mid/30">
                <p className="font-sans text-sm text-text-primary">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-0" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 px-5 bg-white/30 border border-divider text-text-primary font-sans text-sm placeholder:text-text-tertiary focus:border-text-secondary transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail corporativo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 px-5 bg-white/30 border border-divider border-t-0 text-text-primary font-sans text-sm placeholder:text-text-tertiary focus:border-text-secondary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-14 px-5 bg-white/30 border border-divider border-t-0 text-text-primary font-sans text-sm placeholder:text-text-tertiary focus:border-text-secondary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Instituição / Cidade"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="h-14 px-5 bg-white/30 border border-divider border-t-0 text-text-primary font-sans text-sm placeholder:text-text-tertiary focus:border-text-secondary transition-colors"
                />
                <textarea
                  placeholder="Mensagem (opcional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="p-5 bg-white/30 border border-divider border-t-0 text-text-primary font-sans text-sm placeholder:text-text-tertiary focus:border-text-secondary transition-colors resize-none"
                />

                {status === "error" && (
                  <p className="font-sans text-sm text-red-500 mt-3">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 w-full md:w-[280px] h-14 bg-white border border-divider flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
                    {status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                  </span>
                  {status !== "loading" && (
                    <span className="font-sans text-[13px] font-bold text-text-primary">↗</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info cards column */}
          <div className="w-full lg:w-[440px] flex flex-col gap-0">
            {infoCards.map((card) => (
              <div
                key={card.micro}
                className={`flex flex-col gap-3 p-6 lg:p-8 ${card.bg}`}
              >
                <span className={`text-[10px] font-normal tracking-[0.25em] font-sans ${card.microColor}`}>
                  {card.micro}
                </span>
                <span className={`font-mono text-base md:text-lg font-extralight ${card.titleColor}`}>
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-bg-dark px-5 md:px-8 lg:px-20 py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <span className="text-[10px] font-normal tracking-[0.25em] text-white/40 font-sans">
              FAQ
            </span>
            <h2 className="font-mono text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[0.95] text-white">
              Perguntas
              <br />
              Frequentes.
            </h2>
            <p className="font-sans text-sm md:text-base font-normal leading-[1.6] text-white/60">
              Respostas para as dúvidas mais comuns sobre a plataforma Sensing.
            </p>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <div className="flex flex-col gap-4 py-6">
                  <h3 className="font-sans text-base md:text-lg font-semibold text-white">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-sm font-normal leading-[1.6] text-white/50">
                    {faq.a}
                  </p>
                </div>
                {i < faqs.length - 1 && <div className="h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-card-green-dark px-5 md:px-8 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 max-w-full md:max-w-[600px]">
            <h2 className="font-mono text-2xl md:text-[32px] font-bold text-white">
              Pronto para transformar sua gestão?
            </h2>
            <p className="font-sans text-sm md:text-base font-normal leading-[1.6] text-white/60">
              Agende uma demonstração gratuita e descubra como a Sensing pode
              ajudar sua instituição.
            </p>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 bg-white h-14 px-8 cursor-pointer hover:bg-white/90 transition-colors self-start md:self-auto"
          >
            <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
              AGENDAR DEMO
            </span>
            <span className="font-sans text-[13px] font-bold text-text-primary">↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
