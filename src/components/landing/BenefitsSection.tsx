import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: "🔄", title: "Flexibilidade Total", desc: "Altere seu conteúdo quando quiser, sem custo extra." },
  { icon: "🎯", title: "Alcance Segmentado", desc: "Sua mensagem para o público certo, nos locais certos." },
  { icon: "💬", title: "Suporte Local Dedicado", desc: "Atendimento rápido e personalizado pelo WhatsApp." },
  { icon: "🚀", title: "Modernização da Marca", desc: "Posicione-se como empresa inovadora e à frente." },
  { icon: "⚡", title: "Simples de Usar", desc: "Basta enviar sua mídia. Cuidamos de todo o resto." },
  { icon: "📊", title: "Visibilidade Constante", desc: "24h por dia, 7 dias por semana, sem pausas." },
];

const BenefitsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-16">
          Tudo o Que Sua Empresa Precisa Para <span className="text-primary">Ser Vista</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="card-dark space-y-3 hover:border-primary/20 transition-colors">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="font-display text-lg font-bold text-on-dark">{b.title}</h3>
              <p className="text-on-dark/50 font-body">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
