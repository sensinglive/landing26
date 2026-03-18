import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/sections/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | sensing.live",
  description: "Termos e condições gerais de uso da plataforma sensing.live.",
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
          {number}
        </span>
        <h3 className="font-mono text-lg md:text-xl font-medium text-text-primary">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-3 font-sans text-sm font-normal leading-[1.7] text-text-secondary">
        {children}
      </div>
    </div>
  );
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-bg-page">
      <Header />

      {/* Hero */}
      <section className="px-5 md:px-8 lg:px-20 pt-10 md:pt-12 lg:pt-16 pb-8 lg:pb-12">
        <SectionHeader
          micro="LEGAL"
          title="Termos de Uso"
          description="Termos e condições gerais de uso da plataforma sensing.live. Última atualização: março de 2026."
          titleSize="md"
        />
      </section>

      {/* Content */}
      <section className="px-5 md:px-8 lg:px-20 pb-16 lg:pb-24">
        <div className="flex flex-col gap-10 lg:gap-12 max-w-[800px]">

          <Section number="01" title="Das Definições">
            <p>Para fins destes Termos de Uso, aplicam-se as seguintes definições:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li><strong className="text-text-primary">Plataforma:</strong> o sistema de software acessível em sensing.live, incluindo aplicações web e móveis, que permite o monitoramento automatizado de variáveis físicas como temperatura, umidade e consumo elétrico.</li>
              <li><strong className="text-text-primary">Hardware:</strong> os dispositivos físicos fornecidos pela Sensing, incluindo o Sensor de Precisão S2 Pro, o Módulo de Potência P1 (Smart Plug) e o Gateway Coordenador G1.</li>
              <li><strong className="text-text-primary">Usuário:</strong> pessoa física que acessa e utiliza a Plataforma mediante credenciais de acesso.</li>
              <li><strong className="text-text-primary">Cliente:</strong> pessoa jurídica ou órgão público que contrata os serviços da Sensing.</li>
              <li><strong className="text-text-primary">Assinatura:</strong> contrato de licenciamento de uso da Plataforma na modalidade Software as a Service (SaaS).</li>
              <li><strong className="text-text-primary">Dados de Monitoramento:</strong> registros de temperatura, umidade, consumo elétrico e demais variáveis coletados pelos dispositivos de hardware e transmitidos à Plataforma.</li>
            </ul>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="02" title="Do Objeto">
            <p>A plataforma sensing.live é um sistema de monitoramento inteligente de cadeia fria que combina hardware de telemetria (sensores, smart plugs e gateways) com uma plataforma SaaS de análise e gestão de dados.</p>
            <p>A Sensing fornece ferramentas de monitoramento, alertas e relatórios automatizados. A Plataforma é um instrumento de apoio à gestão e <strong className="text-text-primary">não substitui o julgamento profissional</strong> do Usuário ou do Cliente na tomada de decisões operacionais, técnicas ou regulatórias.</p>
            <p>O uso da Plataforma implica a aceitação integral destes Termos de Uso, bem como de todas as políticas e diretrizes que os complementam.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="03" title="Da Criação de Conta e Uso">
            <p>Para utilizar a Plataforma, o Usuário deverá criar uma conta fornecendo dados verídicos e atualizados, incluindo nome completo, e-mail institucional e informações da organização a que está vinculado.</p>
            <p>O login e a senha são pessoais e intransferíveis. O Usuário é integralmente responsável por todas as atividades realizadas em sua conta, devendo comunicar imediatamente à Sensing qualquer uso não autorizado ou suspeita de violação de segurança.</p>
            <p>A Sensing reserva-se o direito de solicitar documentação comprobatória para verificação cadastral e de suspender contas que apresentem informações inverídicas ou incompletas.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="04" title="Da Disponibilidade e Suporte">
            <p>A Plataforma estará disponível 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana, com meta de disponibilidade anual mínima de 99% (noventa e nove por cento), excluídos os períodos de manutenção programada.</p>
            <p>Manutenções programadas serão comunicadas com antecedência mínima de 48 horas por meio da Plataforma ou e-mail cadastrado.</p>
            <p>O suporte técnico está disponível em dias úteis, das 8h às 18h (horário de Brasília), por meio dos canais oficiais de atendimento.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="05" title="Dos Dados e da Lei Geral de Proteção de Dados (LGPD)">
            <p>A Sensing está comprometida com a proteção dos dados pessoais dos Usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).</p>
            <p><strong className="text-text-primary">Dados coletados:</strong> a Plataforma coleta dados de cadastro (nome, e-mail, organização), dados de acesso (endereço IP, navegador, sistema operacional) e dados de monitoramento (temperatura, umidade, telemetria elétrica). Cookies são utilizados para identificação do Usuário e melhoria da experiência de navegação.</p>
            <p><strong className="text-text-primary">Imutabilidade dos registros:</strong> os Dados de Monitoramento são armazenados com log de auditoria (Audit Trail) que impede a alteração manual de registros históricos, garantindo rastreabilidade para fins de conformidade com as normas da Anvisa (RDC 430/2020 e RDC 653/2022).</p>
            <p><strong className="text-text-primary">Direitos do titular:</strong> o Usuário pode exercer seus direitos de acesso, correção, anonimização, portabilidade e eliminação de dados pessoais mediante solicitação ao canal de suporte. Dados de monitoramento vinculados a obrigações regulatórias poderão ser retidos pelo prazo legal aplicável.</p>
            <p><strong className="text-text-primary">Incidentes de segurança:</strong> em caso de incidentes que possam gerar risco ou dano relevante aos titulares, a Sensing comunicará os afetados e a Autoridade Nacional de Proteção de Dados (ANPD) nos prazos estabelecidos pela legislação.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="06" title="Das Práticas Proibidas">
            <p>É vedado ao Usuário:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Utilizar a Plataforma para fins ilícitos ou em desconformidade com estes Termos.</li>
              <li>Realizar engenharia reversa, descompilação ou desmontagem do software ou firmware dos dispositivos de hardware.</li>
              <li>Acessar ou tentar acessar áreas restritas da Plataforma, servidores ou redes sem autorização expressa.</li>
              <li>Utilizar mecanismos automatizados (bots, scrapers, crawlers) para extrair dados da Plataforma.</li>
              <li>Contornar, desabilitar ou interferir em funcionalidades de segurança da Plataforma ou do hardware.</li>
              <li>Compartilhar credenciais de acesso com terceiros não autorizados.</li>
              <li>Adulterar ou manipular dados de monitoramento de qualquer forma.</li>
            </ul>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="07" title="Da Propriedade Intelectual">
            <p>A Plataforma, incluindo seu código-fonte, design, funcionalidades, marca, logotipos, bases de dados e firmware dos dispositivos de hardware, constitui propriedade intelectual exclusiva da Sensing, protegida pela legislação brasileira de propriedade industrial (Lei nº 9.279/1996) e direitos autorais (Lei nº 9.610/1998).</p>
            <p>O Cliente recebe uma licença pessoal, não exclusiva, intransferível e revogável para uso da Plataforma durante a vigência da Assinatura. É proibida a reprodução, distribuição, sublicenciamento ou exploração comercial da Plataforma sem autorização prévia e por escrito da Sensing.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="08" title="Das Responsabilidades e Limitações">
            <p>A Sensing se responsabiliza por manter a Plataforma em funcionamento, realizar atualizações de segurança e garantir a integridade dos Dados de Monitoramento armazenados em seus servidores.</p>
            <p>A Sensing <strong className="text-text-primary">não se responsabiliza</strong> por:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Decisões operacionais, técnicas ou regulatórias tomadas pelo Usuário ou Cliente com base nos dados da Plataforma.</li>
              <li>Interrupções causadas por falha na conexão à internet, problemas em redes locais ou indisponibilidade de serviços de terceiros.</li>
              <li>Danos ao hardware decorrentes de instalação inadequada, mau uso, quedas de energia, descargas elétricas ou condições ambientais fora das especificações técnicas.</li>
              <li>Atrasos ou falhas na entrega de notificações por canais de terceiros (SMS, WhatsApp, e-mail) que estejam fora do controle da Sensing.</li>
              <li>Perdas, danos indiretos, lucros cessantes ou danos morais decorrentes do uso ou da impossibilidade de uso da Plataforma.</li>
            </ul>
            <p>O Usuário concorda em indenizar e manter a Sensing livre de quaisquer reclamações, perdas, danos ou custos decorrentes do uso indevido da Plataforma ou da violação destes Termos.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="09" title="Da Confidencialidade">
            <p>As partes comprometem-se a manter em sigilo todas as informações confidenciais a que tenham acesso em decorrência da relação contratual, pelo prazo mínimo de 3 (três) anos após o término da Assinatura.</p>
            <p>Não se consideram confidenciais informações que sejam de domínio público, que tenham sido recebidas licitamente de terceiros sem restrição de confidencialidade, ou cuja divulgação seja exigida por ordem judicial ou administrativa.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="10" title="Das Modificações dos Termos">
            <p>A Sensing reserva-se o direito de alterar estes Termos de Uso a qualquer momento. As modificações serão comunicadas com antecedência mínima de 30 (trinta) dias por meio da Plataforma e/ou e-mail cadastrado.</p>
            <p>O uso continuado da Plataforma após o prazo de notificação constitui aceitação integral dos novos Termos. Caso o Usuário ou Cliente discorde das alterações, poderá solicitar o encerramento de sua conta, sem ônus, dentro do prazo de notificação.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="11" title="Das Disposições Gerais">
            <p>Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. As partes elegem o foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
            <p>A Sensing e o Cliente comprometem-se a atuar em conformidade com a legislação anticorrupção brasileira (Lei nº 12.846/2013) e demais normas aplicáveis.</p>
            <p>Estes Termos não constituem relação de sociedade, parceria, emprego ou franquia entre a Sensing e o Usuário ou Cliente. A eventual nulidade de qualquer cláusula não prejudicará a validade das demais disposições.</p>
          </Section>

          <div className="h-px bg-divider" />

          <Section number="12" title="Das Declarações Finais">
            <p>Ao utilizar a Plataforma, o Usuário declara que:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Possui capacidade civil plena (18 anos ou mais) ou, sendo menor, utiliza a Plataforma mediante consentimento de responsável legal.</li>
              <li>Manterá a confidencialidade de suas credenciais de acesso e notificará imediatamente qualquer violação de segurança.</li>
              <li>Utilizará a Plataforma exclusivamente para fins lícitos e em conformidade com estes Termos.</li>
              <li>Leu, compreendeu e aceitou integralmente todas as disposições destes Termos de Uso.</li>
            </ul>
          </Section>

          <div className="h-px bg-divider" />

          {/* Company info */}
          <div className="flex flex-col gap-2 py-4">
            <span className="text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans">
              DADOS DA EMPRESA
            </span>
            <p className="font-sans text-sm leading-[1.7] text-text-secondary">
              <strong className="text-text-primary">[RAZÃO SOCIAL]</strong><br />
              CNPJ: [CNPJ]<br />
              [ENDEREÇO]
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
