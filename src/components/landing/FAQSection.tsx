import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quais formatos de mídia são aceitos?", a: "Aceitamos imagens (JPG, PNG), vídeos (MP4) e artes em formato digital. Pode nos enviar pelo WhatsApp e nossa equipe otimiza para as telas." },
  { q: "Posso alterar meu anúncio depois de contratar?", a: "Sim! Você pode atualizar seu conteúdo a qualquer momento, sem custo adicional. Basta nos enviar a nova mídia via WhatsApp." },
  { q: "Como funciona o pagamento?", a: "O pagamento é mensal e combinado diretamente com nossa equipe via WhatsApp. Aceitamos Pix e transferência." },
  { q: "Onde ficam as TVs instaladas?", a: "Nossas TVs estão instaladas na HS Imports, na Authentic Academia e no acesso principal de São José do Piauí — pontos com alto fluxo de pessoas." },
  { q: "Quanto tempo leva para meu anúncio entrar no ar?", a: "Após o pagamento e envio da mídia, seu anúncio entra no ar em até 24 horas." },
  { q: "Vale a pena para minha empresa pequena?", a: "Com planos a partir de R$ 60/mês, o investimento é menor do que a maioria das alternativas tradicionais, com alcance muito maior e resultado mensurável." },
];

const FAQSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-dark noise-bg py-24">
      <div className="container mx-auto px-6 animate-on-scroll" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark text-center mb-16">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-dark border-surface-dark-elevated">
                <AccordionTrigger className="text-on-dark font-semibold font-body text-left hover:text-primary hover:no-underline px-2">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-on-dark/60 font-body leading-relaxed px-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
