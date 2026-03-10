import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_LINK = "https://wa.me/5500000000000";

const FinalCTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(150, 33%, 5%), hsl(142, 40%, 12%))" }}>
      {/* Decorative infinity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[300px] font-display text-primary/5 leading-none">∞</span>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-dark mb-6 max-w-3xl mx-auto leading-tight">
          Não Deixe Sua Concorrência Dominar a <span className="text-primary">Atenção dos Seus Clientes</span>!
        </h2>
        <p className="text-on-dark/60 text-lg font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Garanta seu espaço nos pontos mais estratégicos de São José do Piauí. Entre em contato agora e comece a anunciar ainda esta semana.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta-hero-white text-lg">
          📲 Falar com a Loopin TV no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
