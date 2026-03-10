import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_LINK = "https://wa.me/5589981486496?text=Olá!%20Tenho%20interesse%20em%20anunciar%20na%20Loopin%20TV";

const plans = [
  { name: "Básico", tvs: 1, price: 60, perTv: 60, featured: false },
  { name: "Crescimento", tvs: 2, price: 80, perTv: 40, featured: false },
  { name: "Impacto", tvs: 3, price: 100, perTv: 33.33, featured: true, badge: "Melhor Custo-Benefício 🏆" },
];

const premiumPlan = {
  name: "Máximo Impacto",
   desc: "3 TVs + 1 Telão de LED (HS Imports)",
  price: 150 as number | null,
  badge: "Maior Alcance 🚀",
  includes: [
    "Exibição 24h/dia, 7 dias/semana",
    "1 Telão de LED externo na fachada da HS Imports",
    "Maior visibilidade da cidade",
    "Atualização de conteúdo via WhatsApp",
    "Suporte local dedicado",
  ],
  exclusive: "Exclusivo — apenas 1 vaga disponível",
};

const includes = [
  "Exibição 24h/dia, 7 dias/semana",
  "Atualização de conteúdo via WhatsApp",
  "Suporte local dedicado",
  "Flexibilidade para alterar anúncios",
];

const PricingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="planos" className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-4">
          Planos Simples e <span className="text-primary">Acessíveis</span>
        </h2>
        <p className="text-on-dark/50 text-center mb-16 font-body text-lg">
          Publicidade profissional por menos do que você imagina
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border relative transition-all ${
                plan.featured
                  ? "bg-surface-dark-elevated border-primary/50 scale-[1.02] md:scale-105"
                  : "card-dark"
              }`}
              style={plan.featured ? { boxShadow: "0 0 40px hsla(142, 71%, 45%, 0.2)" } : {}}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <div className="text-center space-y-4">
                <h3 className="font-display text-xl font-bold text-on-dark">{plan.name}</h3>
                <p className="text-on-dark/50 font-body">{plan.tvs} TV{plan.tvs > 1 ? "s" : ""}</p>
                <div>
                  <span className="font-display text-4xl font-bold text-primary">R$ {plan.price}</span>
                  <span className="text-on-dark/40 font-body">/mês</span>
                </div>
                <p className="text-on-dark/40 text-sm font-body">
                  R$ {plan.perTv.toFixed(2).replace(".", ",")}/TV
                </p>

                <ul className="text-left space-y-2 pt-4 border-t border-on-dark/10">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-dark/60 text-sm font-body">
                      <span className="text-primary">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.featured ? "btn-cta w-full text-base" : "btn-cta-outline w-full text-base"}
                >
                  Contratar via WhatsApp
                </a>
              </div>
            </div>
          ))}

          {/* Premium Plan */}
          <div
            className="rounded-2xl p-8 relative transition-all bg-surface-dark-elevated"
            style={{
              border: "2px solid transparent",
              backgroundClip: "padding-box",
              boxShadow: "0 0 40px hsla(45, 90%, 50%, 0.2), inset 0 0 0 2px hsla(45, 90%, 50%, 0.5)",
            }}
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap" style={{ background: "linear-gradient(135deg, hsl(45, 90%, 50%), hsl(35, 90%, 45%))", color: "hsl(35, 90%, 10%)" }}>
              {premiumPlan.badge}
            </span>
            <div className="text-center space-y-4">
              <h3 className="font-display text-xl font-bold" style={{ color: "hsl(45, 90%, 60%)" }}>{premiumPlan.name}</h3>
              <p className="text-on-dark/50 font-body text-sm">{premiumPlan.desc}</p>
              <div>
                <span className="font-display text-3xl font-bold" style={{ color: "hsl(45, 90%, 60%)" }}>Consulte</span>
                <span className="text-on-dark/40 font-body text-sm block mt-1">Valor sob consulta</span>
              </div>

              <ul className="text-left space-y-2 pt-4 border-t border-on-dark/10">
                {premiumPlan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-on-dark/60 text-sm font-body">
                    <span className="text-primary">✅</span>
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm font-body font-semibold" style={{ color: "hsl(45, 90%, 60%)" }}>
                  <span>🏆</span>
                  {premiumPlan.exclusive}
                </li>
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full font-semibold text-base transition-all duration-300"
                style={{ background: "linear-gradient(135deg, hsl(45, 90%, 50%), hsl(35, 90%, 45%))", color: "hsl(35, 90%, 10%)" }}
              >
                Contratar via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-on-dark/60 font-body bg-surface-dark-elevated rounded-xl p-6 border border-primary/10">
            💡 Por apenas <strong className="text-primary">R$20 a mais</strong> que o plano de 2 TVs, você ganha uma TV extra e reduz o custo por TV em <strong className="text-primary">16%</strong> — triplicando seu alcance!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
