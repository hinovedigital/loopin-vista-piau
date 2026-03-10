import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const locations = [
  { name: "Ponto Turístico Central", desc: "Alto fluxo de visitantes e moradores durante todo o dia." },
  { name: "Área Comercial Movimentada", desc: "Onde os compradores já estão — máxima exposição para seu negócio." },
  { name: "Local de Grande Fluxo", desc: "Passagem obrigatória de centenas de pessoas diariamente." },
];

const LocationsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-light text-center mb-4">
          Onde Sua Marca Vai <span className="text-primary">Aparecer</span>?
        </h2>
        <p className="text-on-light/60 text-center text-lg mb-16 max-w-2xl mx-auto font-body">
          Nossas TVs estão instaladas em pontos turísticos e estratégicos da cidade — onde seu público já está.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center space-y-4 hover:border-primary/30 transition-colors">
              <div className="text-3xl">📍</div>
              <h3 className="font-display text-lg font-bold text-on-light">{loc.name}</h3>
              <p className="text-on-light/60 font-body">{loc.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-primary font-semibold mt-12 text-lg">
          ✨ Centenas de visualizações por dia em cada ponto
        </p>
      </div>
    </section>
  );
};

export default LocationsSection;
