import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: "📺", label: "3 TVs estratégicas instaladas" },
  { icon: "👥", label: "Centenas de visualizações/dia" },
  { icon: "🏪", label: "Empresas locais já anunciando" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-light text-center mb-16">
          Quem Está Por Trás da <span className="text-primary">Loopin TV</span>?
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-on-light/70 text-lg font-body leading-relaxed">
            Somos uma empresa local, de São José do Piauí, criada para ajudar os negócios da nossa cidade a crescerem com publicidade moderna e acessível. Acreditamos que toda empresa — pequena ou grande — merece ser vista. Por isso criamos um modelo simples, eficaz e com o melhor custo-benefício do mercado local.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-primary/5 rounded-xl px-5 py-3 border border-primary/10">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-semibold text-on-light font-body text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
