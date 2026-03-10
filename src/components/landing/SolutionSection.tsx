import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: "📋", num: "01", title: "Escolha Seu Plano", desc: "Selecione 1, 2 ou 3 TVs conforme sua estratégia e orçamento." },
  { icon: "📤", num: "02", title: "Envie Sua Mídia", desc: "Mande seu anúncio (imagem, vídeo ou texto) pelo WhatsApp. Nossa equipe cuida da exibição otimizada nas telas." },
  { icon: "🚀", num: "03", title: "Sua Marca no Ar!", desc: "Publicidade exibida 8 horas por dia, 7 dias por semana nos pontos mais movimentados de São José do Piauí." },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-16">
          Como <span className="text-primary">Funciona</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="card-dark text-center space-y-4">
              <div className="text-4xl">{step.icon}</div>
              <span className="text-primary font-display text-sm font-bold">{step.num}</span>
              <h3 className="font-display text-xl font-bold text-on-dark">{step.title}</h3>
              <p className="text-on-dark/60 font-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
