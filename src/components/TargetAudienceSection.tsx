import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const targetAudience = [
  "Deseja fazer seus próprios produtos terapêuticos em casa: Quer produzir pomadas medicinais com funções específicas: alívio de dores, hidratação profunda, cuidado com a pele, entre outros.",
  "Cuida de idosos, profissionais da saúde natural: Pessoas que enfrentam problemas de saúde específicos e iniciantes em fitoterapia e medicina natural.",
  "Não aguenta mais gastar com produtos caros e industrializados: Prefere uma alternativa acessível, sem ingredientes artificiais e com total controle sobre o que estão aplicando no corpo.",
  "Ama o universo das ervas, plantas medicinais e saberes ancestrais: Quer resgatar o conhecimento natural de forma prática, com receitas testadas, explicações claras e orientações passo a passo.",
  "Busca gerar renda extra com algo natural e feito à mão: Ideal para quem quer começar uma produção artesanal para vender pomadas naturais com responsabilidade e conhecimento.",
  "É para todos que desejam resgatar a conexão com a natureza, Cuidando da saúde de maneira simples, eficaz e natural. Se você se identifica com essa visão, \"A Arte de Fazer Pomadas Naturais\" é o que você estava procurando."
];

const TargetAudienceSection = () => {
  const renderText = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex === -1) return <span className="text-brand-white">{text}</span>;
    
    const beforeColon = text.substring(0, colonIndex);
    const afterColon = text.substring(colonIndex + 1);
    
    return (
      <>
        <span className="font-bold text-brand-yellow">{beforeColon}</span>
        <span className="text-brand-yellow">:</span>
        <span className="text-brand-white">{afterColon}</span>
      </>
    );
  };

  return (
    <section className="bg-brand-white px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-8 text-center text-2xl font-bold leading-tight text-brand-green sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
          NOSSO ECOSSISTEMA É PRA QUEM...
        </h2>
        
        {/* Target Audience Cards */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targetAudience.map((item, index) => (
            <Card key={index} className="touch-manipulation border-2 border-brand-yellow bg-brand-green shadow-[var(--shadow-card)]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow sm:h-6 sm:w-6" />
                  <p className="text-sm leading-relaxed sm:text-base">{renderText(item)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;