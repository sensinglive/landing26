const footerCols = [
  {
    title: "PRODUTO",
    links: ["Sensor S2 Pro", "Smart Plug P1", "Gateway G1", "Dashboard"],
  },
  {
    title: "EMPRESA",
    links: ["Sobre nós", "Contato", "Blog"],
  },
  {
    title: "LEGAL",
    links: ["Termos de Uso", "Privacidade"],
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-bg-dark px-20 py-12">
      <div className="flex flex-col gap-12">
        {/* Top row */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 max-w-[340px]">
            <span className="font-mono text-sm font-extralight tracking-[0.15em] text-white">
              SENSING
            </span>
            <p className="font-sans text-sm font-normal leading-[1.6] text-white/30">
              Monitoramento inteligente de cadeia fria.
              <br />
              Protegendo vacinas com tecnologia e previsão.
            </p>
          </div>

          <div className="flex gap-20">
            {footerCols.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <span className="text-[10px] font-normal tracking-[0.15em] text-white/25 font-sans">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="font-sans text-[13px] font-normal text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8" />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs font-normal text-white/25">
            © 2026 Sensing. Todos os direitos reservados.
          </span>
          <span className="font-sans text-xs font-normal tracking-[0.08em] text-white/25">
            LGPD
          </span>
        </div>
      </div>
    </footer>
  );
}
