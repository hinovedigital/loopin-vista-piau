import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pains = [
  "Panfletos que ninguém lê",
  "Anúncios online caros e difíceis de configurar",
  "Sua marca não aparece onde seus clientes estão",
  "Concorrência tomando a atenção do seu público",
];

const ProblemSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-light text-center mb-16">
          Sua empresa ainda está <span className="text-primary">invisível</span> para quem passa na rua?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="space-y-5">
            {pains.map((pain) => (
              <div key={pain} className="flex items-start gap-3">
                <span className="text-destructive text-xl mt-0.5">✕</span>
                <p className="text-on-light/80 text-lg font-body">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-6xl text-primary/30 font-display mb-4">∞</div>
            <p className="text-on-light text-lg font-body leading-relaxed">
              A <strong className="text-primary">Loopin TV</strong> coloca sua marca nos lugares certos, para as pessoas certas, no momento certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
