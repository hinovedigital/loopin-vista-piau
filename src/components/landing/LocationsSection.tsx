import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import hsImportsLogo from "@/assets/hs_imports.png";
import authenticLogo from "@/assets/authentic_academia.png";

const locations = [
  {
    name: "HS Imports",
    desc: "Área comercial movimentada — onde os compradores já estão. Máxima exposição para seu negócio.",
    logo: hsImportsLogo,
  },
  {
    name: "Authentic Academia",
    desc: "Fluxo diário constante de alunos e visitantes — sua marca vista por quem cuida da saúde.",
    logo: authenticLogo,
  },
  {
    name: "Acesso Principal da Cidade",
    desc: "Passagem obrigatória de quem entra e sai de São José do Piauí.",
    logo: null,
  },
];

const upcoming = "🚧 Estamos em processo de expandir para novos pontos estratégicos na cidade. Em breve, mais locais disponíveis!";

const LocationsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-light text-center mb-4">
          Onde Sua Marca Vai <span className="text-primary">Aparecer</span>?
        </h2>
        <p className="text-on-light/60 text-center text-lg mb-16 max-w-2xl mx-auto font-body">
          Nossas TVs estão instaladas em parceiros estratégicos da cidade — onde seu público já está.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center space-y-4 hover:border-primary/30 transition-colors">
              {loc.logo ? (
                <div className="w-20 h-20 rounded-full bg-background border border-border mx-auto flex items-center justify-center overflow-hidden">
                  <img src={loc.logo} alt={loc.name} className="w-16 h-16 object-contain" />
                </div>
              ) : (
                <div className="text-3xl">📍</div>
              )}
              <h3 className="font-display text-lg font-bold text-on-light">{loc.name}</h3>
              <p className="text-on-light/60 font-body">{loc.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-primary font-semibold mt-12 text-lg">
          ✨ Sua marca presente nos pontos de maior movimento da cidade
        </p>
        <p className="text-center text-on-light/60 font-body mt-4 max-w-2xl mx-auto bg-primary/5 border border-primary/10 rounded-xl p-4">
          {upcoming}
        </p>
      </div>
    </section>
  );
};

export default LocationsSection;
