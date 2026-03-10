import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: "🔄", title: "Flexibilidade Total", desc: "Altere seu conteúdo quando quiser, sem custo extra." },
  { icon: "🎯", title: "Alcance Segmentado", desc: "Sua mensagem para o público certo, nos locais certos." },
  { icon: "💬", title: "Suporte Local Dedicado", desc: "Atendimento rápido e personalizado pelo WhatsApp." },
  { icon: "🚀", title: "Modernização da Marca", desc: "Posicione-se como empresa inovadora e à frente." },
  { icon: "⚡", title: "Simples de Usar", desc: "Basta enviar sua mídia. Cuidamos de todo o resto." },
  { icon: "📊", title: "Visibilidade Constante", desc: "8 horas por dia, 7 dias por semana, sem pausas." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BenefitsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-16">
          Tudo o Que Sua Empresa Precisa Para <span className="text-primary">Ser Vista</span>
        </h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              whileHover={{ scale: 1.04, borderColor: "hsl(142, 71%, 45%)" }}
              className="card-dark space-y-3 hover:border-primary/20 transition-colors cursor-default"
            >
              <div className="text-3xl">{b.icon}</div>
              <h3 className="font-display text-lg font-bold text-on-dark">{b.title}</h3>
              <p className="text-on-dark/50 font-body">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
