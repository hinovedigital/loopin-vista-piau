import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_LINK = "https://wa.me/5589981486496?text=Olá!%20Tenho%20interesse%20em%20anunciar%20na%20Loopin%20TV";

const without = [
  "Empresa paga panfletos e não sabe quantas pessoas viram",
  "Sem presença física nos pontos movimentados",
  "Concorrência mais vista",
  "Faturamento limitado",
];

const withLoopin = [
  "Marca exibida 24/7 nos pontos estratégicos da cidade",
  "Conteúdo atualizado facilmente via WhatsApp",
  "Reconhecimento de marca crescendo",
  "Mais clientes entrando",
];

const BeforeAfterSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-16">
          A diferença que a <span className="text-primary">Loopin TV</span> faz
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
          {/* Without */}
          <div className="card-dark border-destructive/30 space-y-4">
            <h3 className="font-display text-lg font-bold text-on-dark/60">
              ❌ Sem Loopin TV
            </h3>
            <p className="text-on-dark/40 text-sm">@empresalocal_sjpi</p>
            <ul className="space-y-3">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-2 text-on-dark/50 font-body">
                  <span className="text-destructive/60 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With — offset down */}
          <div className="card-dark border-primary/40 space-y-4 md:mt-6 relative z-10" style={{ boxShadow: "0 0 30px hsla(142, 71%, 45%, 0.15)" }}>
            <h3 className="font-display text-lg font-bold text-primary">
              ✅ Com Loopin TV
            </h3>
            <p className="text-on-dark/40 text-sm">@empresalocal_sjpi</p>
            <ul className="space-y-3">
              {withLoopin.map((item) => (
                <li key={item} className="flex items-start gap-2 text-on-dark/80 font-body">
                  <span className="text-primary mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            ⚡ Quero Aparecer Para Mais Clientes
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
