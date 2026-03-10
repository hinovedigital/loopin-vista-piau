import logo from "@/assets/logo_transparente.png";

const WHATSAPP_LINK = "https://wa.me/5589981486496?text=Olá!%20Quero%20anunciar%20na%20Loopin%20TV";

const HeroSection = () => {
  return (
    <section className="section-dark noise-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative infinity */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[400px] font-display text-primary/5 select-none pointer-events-none leading-none">
        ∞
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 px-6 py-6">
          <div className="container mx-auto flex items-center gap-3">
            <img src={logo} alt="Loopin TV" className="w-10 h-10" />
            <span className="font-display text-xl font-bold text-on-dark">
              loopin<span className="text-primary">.tv</span>
            </span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center pt-16">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark-elevated text-primary text-sm font-medium border border-primary/20">
              📺 Digital Signage em São José do Piauí
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-on-dark leading-[1.1]">
              Sua Marca Aparece para{" "}
              <span className="text-primary">Quem Compra</span> em São José do
              Piauí
            </h1>

            <p className="text-lg text-on-dark/70 max-w-lg font-body leading-relaxed">
              Anuncie nas TVs estratégicas da cidade e seja visto por centenas
              de clientes todos os dias — por menos de R$ 2 por dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
                📲 Quero Anunciar Agora
              </a>
              <a href="#planos" className="btn-cta-outline border-on-dark/30 text-on-dark/80 hover:bg-on-dark/10 hover:text-on-dark">
                Ver os Planos ↓
              </a>
            </div>

            <div className="flex items-center gap-6 text-on-dark/50 text-sm pt-2">
              <span>📸 49 seguidores no Instagram</span>
              <span>•</span>
              <span>🏪 Empresas locais já anunciando</span>
            </div>
          </div>

          {/* TV Mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-[420px] h-[260px] rounded-2xl border-4 border-on-dark/20 bg-surface-dark-elevated flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center p-6">
                  <div className="text-center space-y-3">
                    <p className="text-primary font-display font-bold text-2xl">🍔 Lanchonete do João</p>
                    <p className="text-on-dark/80 font-body text-sm">Combo Família — R$ 39,90</p>
                    <p className="text-on-dark/50 font-body text-xs">Rua Principal, 123 • Peça pelo WhatsApp!</p>
                  </div>
                </div>
              </div>
              {/* TV Stand */}
              <div className="w-24 h-3 bg-on-dark/20 rounded-b-lg mx-auto" />
              <div className="w-40 h-2 bg-on-dark/10 rounded-full mx-auto mt-1" />
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
