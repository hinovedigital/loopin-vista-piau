import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Maria S.",
    biz: "Loja de Roupas",
    quote: "Desde que comecei a anunciar na Loopin TV, **meu movimento aumentou visivelmente**. As pessoas chegam já sabendo o que eu vendo!",
  },
  {
    name: "João P.",
    biz: "Restaurante",
    quote: "Achei que seria caro, mas por **R$100 consigo aparecer em 3 pontos da cidade**. Vale muito a pena!",
  },
  {
    name: "Ana L.",
    biz: "Salão de Beleza",
    quote: "O atendimento é excelente e **atualizar meu anúncio é super fácil**. Só mando no WhatsApp e pronto.",
  },
];

function renderQuote(quote: string) {
  const parts = quote.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-primary">{part}</strong> : part
  );
}

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-16">
          Quem Já Anuncia na <span className="text-primary">Loopin TV</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-on-dark font-body">{t.name}</p>
                  <p className="text-on-dark/50 text-sm font-body">{t.biz}</p>
                </div>
              </div>
              <div className="text-primary text-sm">⭐⭐⭐⭐⭐</div>
              <p className="text-on-dark/70 font-body leading-relaxed italic">
                "{renderQuote(t.quote)}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
