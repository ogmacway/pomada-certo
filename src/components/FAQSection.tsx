import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos PIX , cartão de crédito e boleto bancário. Todos os pagamentos são processados com segurança através de plataformas criptografadas."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se você não ficar 100% satisfeito com o conteúdo, basta solicitar o reembolso pela própria plataforma da compra e seu dinheiro retorna de forma integral em, um dia útil. Sem perguntas, sem complicações!"
  },
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim! Uma vez que você adquire o material, o acesso é seu para sempre. Você pode consultar quando quiser, quantas vezes precisar."
  },
  {
    question: "É fácil encontrar os ingredientes das receitas?",
    answer: "Sim! Todas as receitas utilizam ingredientes naturais que você encontra facilmente em farmácias de manipulação, lojas de produtos naturais, supermercados ou até mesmo no seu quintal."
  },
  {
    question: "Preciso ter experiência prévia para fazer as pomadas?",
    answer: "Não! O material foi desenvolvido para qualquer nível de expêriencia na área. Cada receita vem com passo a passo detalhado, dicas de segurança e explicações sobre as propriedades de cada ingrediente."
  },
  {
    question: "As pomadas realmente funcionam?",
    answer: "Sim! São receitas baseadas no conhecimento tradicional milenar de ervas medicinais, algumas das quais são validadas pela própria ciência moderna. Milhares de pessoas já comprovaram a eficácia."
  },
  {
    question: "Posso usar as pomadas para vender?",
    answer: "Sim! Muitas pessoas usam esse conhecimento para gerar renda extra fazendo e vendendo pomadas artesanais. O material incluí dicas sobre como começar seu próprio negócio."
  }
];

const FAQSection = () => {
  return (
    <section className="bg-brand-green px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-yellow sm:mb-12 sm:text-3xl md:text-4xl">
          PERGUNTAS FREQUENTES
        </h2>
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="touch-manipulation rounded-lg bg-brand-white/10 backdrop-blur-sm border-none"
            >
              <AccordionTrigger className="px-4 py-3 text-left text-base font-bold text-brand-white hover:no-underline hover:bg-brand-white/5 sm:px-6 sm:py-4 sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-sm leading-relaxed text-brand-white sm:px-6 sm:pb-4 sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;