import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_LINK = "https://wa.me/5589981486496?text=Olá!%20Quero%20anunciar%20na%20Loopin%20TV";
const VIEWS_PER_HOUR = 15;

const ReachSimulator = () => {
  const ref = useScrollAnimation();
  const [tvs, setTvs] = useState(2);
  const [hours, setHours] = useState(10);

  const monthlyReach = tvs * hours * VIEWS_PER_HOUR * 30;

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-light text-center mb-4">
          Quantas Pessoas Vão <span className="text-primary">Ver Sua Marca</span> por Mês?
        </h2>
        <p className="text-on-light/60 text-center mb-12 font-body">
          Use o simulador abaixo para estimar seu alcance.
        </p>

        <div className="max-w-xl mx-auto bg-primary/5 rounded-3xl p-8 border border-primary/10 space-y-8">
          {/* TVs */}
          <div>
            <label className="block text-on-light font-semibold mb-3 font-body">
              Quantas TVs você quer contratar?
            </label>
            <div className="flex gap-3">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setTvs(n)}
                  className={`flex-1 py-3 rounded-xl font-display font-bold text-lg transition-all ${
                    tvs === n
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background border border-border text-on-light hover:border-primary/40"
                  }`}
                >
                  {n} TV{n > 1 ? "s" : ""}
                </button>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <label className="block text-on-light font-semibold mb-3 font-body">
              Horas movimentadas por dia: <span className="text-primary">{hours}h</span>
            </label>
            <input
              type="range"
              min={4}
              max={16}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-border accent-primary cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted mt-1 font-body">
              <span>4h</span>
              <span>16h</span>
            </div>
          </div>

          {/* Result */}
          <div className="text-center bg-surface-dark rounded-2xl p-6">
            <p className="text-on-dark/60 text-sm font-body mb-2">Alcance estimado mensal</p>
            <p className="font-display text-5xl font-bold text-primary">
              {monthlyReach.toLocaleString("pt-BR")}
            </p>
            <p className="text-on-dark/50 text-sm font-body mt-2">
              pessoas por mês em São José do Piauí
            </p>
            <p className="text-on-dark/40 text-xs font-body mt-3 italic">
              Isso é mais do que qualquer panfleto ou impulsionamento básico no Instagram entrega por esse preço.
            </p>
          </div>

          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
              📲 Quero Começar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachSimulator;
