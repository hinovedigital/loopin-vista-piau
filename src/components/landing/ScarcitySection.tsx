import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_LINK = "https://wa.me/5589981486496?text=Quero%20garantir%20minha%20vaga%20na%20Loopin%20TV";

const ScarcitySection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(142, 40%, 8%), hsl(142, 50%, 14%))" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[250px] font-display text-primary/5 leading-none">∞</span>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-dark mb-6 max-w-3xl mx-auto leading-tight">
          Vagas limitadas por região — apenas{" "}
          <span className="text-primary">1 anunciante por categoria</span> em cada ponto.
        </h2>
        <p className="text-on-dark/60 text-lg font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Garanta que seu concorrente não ocupe o espaço antes de você.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
          🔒 Garantir Minha Vaga Agora
        </a>
      </div>
    </section>
  );
};

export default ScarcitySection;
