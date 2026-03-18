import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/sections/SectionHeader";
import CardGrid from "../components/sections/CardGrid";
import StepsList from "../components/sections/StepsList";
import StatsBar from "../components/sections/StatsBar";
import DarkCTA from "../components/sections/DarkCTA";

const useCases = [
  {
    micro: "HOSPITAIS",
    title: "Hospitais & Clínicas",
    description:
      "Controle rigoroso de temperatura para bancos de sangue, medicamentos termolábeis e amostras laboratoriais com alertas em tempo real.",
    variant: "dark" as const,
  },
  {
    micro: "SAÚDE PÚBLICA",
    title: "Postos de Saúde",
    description:
      "Monitoramento contínuo de vacinas e imunobiológicos em unidades básicas de saúde, com conformidade ANVISA integrada.",
    variant: "mid" as const,
  },
  {
    micro: "VAREJO FARMACÊUTICO",
    title: "Redes de Farmácias",
    description:
      "Gestão centralizada de temperatura em múltiplas unidades com dashboards unificados e relatórios automáticos por filial.",
    variant: "light" as const,
  },
];

const steps = [
  {
    title: "01 — Instale o Sensor",
    description:
      "Fixe o sensor na câmara fria, freezer ou geladeira. Instalação plug-and-play sem necessidade de técnico especializado.",
  },
  {
    title: "02 — Conecte à Rede",
    description:
      "O sensor se conecta automaticamente via Wi-Fi ou rede móvel. Sem cabos, sem configuração complexa.",
  },
  {
    title: "03 — Configure Alertas",
    description:
      "Defina faixas de temperatura e receba notificações via SMS, e-mail ou WhatsApp quando algo sair do padrão.",
  },
  {
    title: "04 — Monitore em Tempo Real",
    description:
      "Acompanhe dashboards ao vivo com histórico completo, gráficos e status de cada equipamento monitorado.",
  },
  {
    title: "05 — Receba Relatórios",
    description:
      "Relatórios automáticos de conformidade ANVISA, exportáveis em PDF, com assinatura digital e rastreabilidade completa.",
  },
];

const stats = [
  { label: "UPTIME", value: "99.8%", variant: "dark" as const },
  { label: "TEMPO DE ALERTA", value: "< 2min", variant: "light" as const },
  { label: "UNIDADES", value: "500+", variant: "mid" as const },
  { label: "MONITORAMENTO", value: "24/7", variant: "light" as const },
];

export default function SolucoesPage() {
  return (
    <main className="min-h-screen bg-bg-page">
      <Header />

      {/* Hero */}
      <section className="px-5 md:px-8 lg:px-20 pt-10 md:pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="flex flex-col gap-6 md:gap-8">
          <SectionHeader
            micro="SOLUÇÕES"
            title="Monitoramento inteligente para cada cenário."
            description="A Sensing se adapta a diferentes contextos de uso — de hospitais a redes de farmácias — garantindo precisão, rastreabilidade e conformidade em cada etapa da cadeia do frio."
            titleSize="md"
          />
          <a
            href="#cta"
            className="cta-btn inline-flex items-center self-start border border-text-primary/20 px-5 py-2.5 cursor-pointer"
          >
            <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-text-primary">
              AGENDAR DEMO ↗
            </span>
          </a>
        </div>
      </section>

      {/* Use Cases Cards */}
      <section className="px-5 md:px-8 lg:px-20 pb-12 lg:pb-20">
        <CardGrid cards={useCases} />
      </section>

      {/* Como Funciona */}
      <section className="px-5 md:px-8 lg:px-20 py-12 lg:py-20 flex flex-col items-center">
        <div className="flex flex-col gap-8 md:gap-10 items-center w-full">
          <SectionHeader
            micro="COMO FUNCIONA"
            title="Da instalação ao alerta em 10 minutos."
            description="Um processo simples e rápido para proteger o que importa."
            titleSize="sm"
            centered
          />
          <StepsList steps={steps} />
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 md:px-8 lg:px-20 py-12 lg:py-20">
        <StatsBar stats={stats} />
      </section>

      {/* Dark CTA */}
      <DarkCTA
        title="Comece a proteger seu estoque hoje."
        description="Fale com nosso time e descubra como a Sensing pode transformar a gestão de temperatura na sua operação."
        buttonText="AGENDAR DEMO ↗"
        buttonHref="/solucoes#cta"
      />

      <Footer />
    </main>
  );
}
