import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/sections/SectionHeader";
import SpecTable from "../components/sections/SpecTable";
import DarkCTA from "../components/sections/DarkCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especificações Técnicas e Data Sheet | sensing.live",
  description:
    "Especificações técnicas de hardware, protocolos de comunicação e plataforma SaaS da solução sensing.live.",
};

const sensorSpecs = [
  { label: "Protocolo de Rede", value: "Zigbee 3.0 (IEEE 802.15.4)" },
  { label: "Interface Visual", value: "Display LCD de alto contraste com atualização a cada 10s" },
  { label: "Faixa de Temperatura (Sonda)", value: "-40°C a +85°C" },
  { label: "Precisão de Temperatura", value: "±0.3°C (em faixa operacional de vacinas)" },
  { label: "Faixa de Umidade", value: "0% a 99.9% RH (±3% de precisão)" },
  { label: "Resolução", value: "0.1°C / 0.1% RH" },
  { label: "Cabo da Sonda", value: "Tipo Flat (Ultra-fino) de 1 metro para preservação de vedação" },
  { label: "Alimentação", value: "2 pilhas AAA (Alcalinas ou Lítio)" },
  { label: "Autonomia Estimada", value: "> 12 meses (reporte por variação de 0.5°C ou 30 min)" },
  { label: "Fixação", value: "Suporte magnético integrado ou adesivo industrial 3M" },
];

const sensorD2Specs = [
  { label: "Protocolo de Rede", value: "Zigbee 3.0 (requer Gateway G1)" },
  { label: "Função", value: "Detecção de abertura e fechamento de portas e janelas de câmaras frias e freezers" },
  { label: "Distância de Acionamento Magnético", value: "≥ 15mm" },
  { label: "Corrente em Repouso", value: "≤ 10µA" },
  { label: "Corrente em Alarme", value: "≤ 160mA" },
  { label: "Tensão de Operação", value: "DC 3V — 2 pilhas LR03/AAA 1.5V Alcalinas" },
  { label: "Tensão Mínima (Alerta de Bateria Fraca)", value: "≤ 2.7V" },
  { label: "Temperatura de Operação", value: "-10°C a +50°C" },
  { label: "Umidade de Operação", value: "Até 95% RH" },
  { label: "Instalação", value: "Fita dupla face ou parafusos (inclusos). Sem ferramentas especiais." },
];

const plugSpecs = [
  { label: "Tensão Operacional", value: "100V - 240V AC (Bivolt Automático)" },
  { label: "Corrente Máxima", value: "16A (contínua) / 20A (pico)" },
  { label: "Padrão de Tomada", value: "NBR 14136 (3 pinos)" },
  { label: "Métricas Coletadas", value: "V (Tensão), A (Corrente), W (Potência Ativa), kWh (Acumulado)" },
  { label: "Frequência de Rede", value: "50Hz / 60Hz" },
  { label: "Consumo Interno", value: "< 0.4W" },
  { label: "Função Roteador", value: "Capacidade de rotear sinal para até 20 dispositivos finais" },
  { label: "Material do Gabinete", value: "Policarbonato Retardante de Chamas (V0)" },
];

const gatewaySpecs = [
  { label: "Processador", value: "ARM Cortex-M4 ou equivalente" },
  { label: "Capacidade de Nós", value: "Até 128 dispositivos (sensores/tomadas) por Gateway" },
  { label: "Conectividade Uplink", value: "Ethernet RJ45 (10/100) + Wi-Fi 2.4GHz (802.11 b/g/n)" },
  { label: "Segurança", value: "Criptografia de Hardware AES-128 bits" },
  { label: "Redundância Celular", value: "Módulo externo 4G/LTE com failover automático (opcional)" },
  { label: "Buffer de Memória", value: "Armazenamento local de até 15.000 logs em modo offline" },
  { label: "Alimentação", value: "DC 5V/1A (via Micro USB)" },
];

const whatsappSpecs = [
  { label: "Protocolo de Alerta", value: "Notificação via WhatsApp Business API (Verificado)" },
  { label: "Latência de Envio", value: "< 10 segundos após detecção do evento crítico" },
  { label: "Estrutura do Alerta", value: "Nome do Equipamento, Localização, Valor de Excursão e Horário" },
  { label: "Fluxo de Escalonamento", value: "Disparo hierárquico (Técnico → Gestor → Diretor) caso não haja confirmação de leitura" },
  { label: "Interatividade", value: "Botões de ação rápida para 'Reconhecer Alerta' ou 'Abrir Chamado de Manutenção'" },
];

function SubSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
          {number}
        </span>
        <h3 className="font-mono text-xl md:text-2xl font-extralight text-text-primary">
          {title}
        </h3>
        {description && (
          <p className="font-sans text-sm font-normal leading-[1.6] text-text-secondary max-w-[700px]">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-1 pl-4 border-l-2 border-card-green-mid">
          <span className="font-mono text-sm font-medium text-text-primary">{item.title}</span>
          <p className="font-sans text-sm font-normal leading-[1.6] text-text-secondary">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function DatasheetPage() {
  return (
    <main className="min-h-screen bg-bg-page">
      <Header />

      {/* Hero */}
      <section className="px-5 md:px-8 lg:px-20 pt-10 md:pt-12 lg:pt-16 pb-8 lg:pb-12">
        <SectionHeader
          micro="DATA SHEET"
          title="Ecossistema Sensing.live"
          description="Especificações técnicas de hardware, protocolos de comunicação, lógica analítica da plataforma SaaS e arquitetura de notificações."
          titleSize="md"
        />
      </section>

      {/* Section 1: Hardware */}
      <section className="px-5 md:px-8 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-normal tracking-[0.25em] text-card-green-mid font-sans">
              SEÇÃO 01
            </span>
            <h2 className="font-mono text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] text-text-primary">
              Hardware: Monitoramento e Telemetria
            </h2>
          </div>

          <SubSection
            number="1.1"
            title="Sensor de Precisão S2 Pro"
            description="Termo-Higrômetro com Sonda — nó de extremidade responsável pela coleta de dados ambientais. Arquitetura com sonda externa para instalação fora da zona de blindagem metálica."
          >
            <SpecTable rows={sensorSpecs} />
          </SubSection>

          <div className="h-px bg-divider" />

          <SubSection
            number="1.2"
            title="Sensor de Porta D2"
            description="Sensor de Contato Magnético Zigbee — nó de extremidade para detecção de abertura e fechamento de portas de câmaras frias, geladeiras e freezers. Integrado ao ecossistema Zigbee via Gateway G1."
          >
            <SpecTable rows={sensorD2Specs} />
          </SubSection>

          <div className="h-px bg-divider" />

          <SubSection
            number="1.3"
            title="Módulo de Potência P1"
            description="Smart Plug & Zigbee Router — dispositivo de dupla função: coletor de telemetria elétrica para manutenção preditiva e roteador de malha para expansão da rede Zigbee."
          >
            <SpecTable rows={plugSpecs} />
          </SubSection>

          <div className="h-px bg-divider" />

          <SubSection
            number="1.4"
            title="Gateway Coordenador G1"
            description="Hub & Edge Gateway — núcleo de inteligência local que coordena a rede mesh e gerencia o uplink de dados."
          >
            <SpecTable rows={gatewaySpecs} />
          </SubSection>
        </div>
      </section>

      {/* Section 2: Plataforma SaaS */}
      <section className="bg-bg-page px-5 md:px-8 lg:px-20 py-12 lg:py-16 border-t border-divider">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-normal tracking-[0.25em] text-card-green-mid font-sans">
              SEÇÃO 02
            </span>
            <h2 className="font-mono text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] text-text-primary">
              Plataforma SaaS: Inteligência e Compliance
            </h2>
            <p className="font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-[700px]">
              A plataforma sensing.live processa os dados brutos e os transforma em informações acionáveis para gestão de ativos e conformidade sanitária.
            </p>
          </div>

          <SubSection number="2.1" title="Lógica Analítica de Energia (NILM)">
            <BulletList
              items={[
                {
                  title: "Cálculo de Duty Cycle",
                  desc: "Monitoramento do tempo de ativação do compressor com precisão de segundo. Alertas automáticos para ciclos acima de 70% (fadiga de isolamento).",
                },
                {
                  title: "Análise de Inrush Current",
                  desc: "Registro do pico de corrente na partida do motor. Desvios >20% da linha de base geram alerta de 'Risco de Travamento Mecânico'.",
                },
                {
                  title: "Monitoramento de Degelo",
                  desc: "Detecção de assinatura térmica de resistências de degelo. A ausência de consumo no período programado gera alerta de 'Risco de Congelamento de Evaporador'.",
                },
              ]}
            />
          </SubSection>

          <div className="h-px bg-divider" />

          <SubSection number="2.2" title="Gestão de Relatórios e Auditoria">
            <BulletList
              items={[
                {
                  title: "Conformidade Anvisa",
                  desc: "Relatórios automáticos seguindo as normas RDC 430/2020 e RDC 653/2022.",
                },
                {
                  title: "Imutabilidade",
                  desc: "Dados armazenados em bancos de dados com log de auditoria (Audit Trail), impedindo a alteração manual de registros térmicos históricos.",
                },
                {
                  title: "Exportação",
                  desc: "Suporte a formatos PDF (assinado digitalmente), CSV e JSON.",
                },
              ]}
            />
          </SubSection>
        </div>
      </section>

      {/* Section 3: WhatsApp API */}
      <section className="px-5 md:px-8 lg:px-20 py-12 lg:py-16 border-t border-divider">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-normal tracking-[0.25em] text-card-green-mid font-sans">
              SEÇÃO 03
            </span>
            <h2 className="font-mono text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] text-text-primary">
              Integração WhatsApp API
            </h2>
            <p className="font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-[700px]">
              O sistema de alertas utiliza a infraestrutura oficial da Meta para garantir a entrega de notificações críticas em tempo real.
            </p>
          </div>
          <SpecTable rows={whatsappSpecs} />
        </div>
      </section>

      {/* Section 4: Topologia Mesh */}
      <section className="px-5 md:px-8 lg:px-20 py-12 lg:py-16 border-t border-divider">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-normal tracking-[0.25em] text-card-green-mid font-sans">
              SEÇÃO 04
            </span>
            <h2 className="font-mono text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.1] text-text-primary">
              Topologia da Solução (Mesh Networking)
            </h2>
            <p className="font-sans text-sm md:text-base font-normal leading-[1.6] text-text-secondary max-w-[700px]">
              A solução sensing.live utiliza o protocolo Zigbee 3.0 em topologia de malha (mesh).
            </p>
          </div>
          <BulletList
            items={[
              {
                title: "Sensores (End Devices)",
                desc: "Coletam dados e enviam para o roteador mais próximo.",
              },
              {
                title: "Smart Plugs (Routers)",
                desc: "Amplificam o sinal e garantem que o dado ignore barreiras metálicas e paredes de alvenaria.",
              },
              {
                title: "Gateway (Coordinator)",
                desc: "Centraliza a malha e transmite via TLS/SSL para a nuvem da sensing.live.",
              },
            ]}
          />
        </div>
      </section>

      {/* Notes */}
      <section className="px-5 md:px-8 lg:px-20 py-8 lg:py-12 border-t border-divider">
        <div className="flex flex-col gap-4 max-w-[700px]">
          <span className="text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
            OBSERVAÇÕES
          </span>
          <p className="font-sans text-sm font-normal leading-[1.6] text-text-secondary">
            <strong className="text-text-primary font-medium">Certificações:</strong> Todos os componentes são compatíveis com as normas da Anatel para radiofrequência.
          </p>
          <p className="font-sans text-sm font-normal leading-[1.6] text-text-secondary">
            <strong className="text-text-primary font-medium">Suporte:</strong> Documentação completa da API REST para integração com sistemas legados (ERP/HIS) de prefeituras e hospitais.
          </p>
        </div>
      </section>

      {/* Dark CTA */}
      <DarkCTA
        title="Quer ver na prática?"
        description="Agende uma demonstração técnica e conheça o ecossistema Sensing.live em funcionamento."
        buttonText="AGENDAR DEMO ↗"
      />

      <Footer />
    </main>
  );
}
