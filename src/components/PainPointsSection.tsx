import { Card, CardContent } from "@/components/ui/card";
import naturalCream from "@/assets/natural-cream.png";
const painPoints = [{
  title: "VOCÊ APLICA ALGO NA PELE E NEM SABER O QUÊ?",
  highlight: "CHEGA DE QUÍMICAS DESCONHECIDAS!",
  copy: "Pare de usar produtos cheios de ingredientes que você não consegue nem pronunciar."
}, {
  title: "DORES NO CORPO OU NAS JUNTAS?",
  highlight: "SOLUÇÃO NATURAL E EFICAZ!",
  copy: "Com poucos ingredientes, você faz um bálsamo natural e reconfortante."
}, {
  title: "CANSOU DE GASTAR COM POMADAS CARAS?",
  highlight: "ECONOMIZE FAZENDO EM CASA!",
  copy: "Aprenda a fazer suas próprias pomadas com ingredientes naturais e baratos."
}, {
  title: "FERIDAS QUE DEMORAM PARA FECHAR?",
  highlight: "PARE DE SOFRER!",
  copy: "Você pode fazer uma pomada cicatrizante em casa com ervas simples."
}, {
  title: "PEQUENAS QUEIMADURAS EM CASA?",
  highlight: "NÃO FIQUE ARDENDO!",
  copy: "Você pode fazer um bálsamo calmante usando barbatimão."
}, {
  title: "NARIZ ENTUPIDO E SENSAÇÃO PESADA?",
  highlight: "RESPIRE MELHOR!",
  copy: "Aprenda a fazer uma pomada descongestionante com cânfora."
}, {
  title: "PICADAS, COCEIRAS, VERMELHIDÃO OU IRRITAÇÃO?",
  highlight: "PROTEJA QUEM VOCÊ AMA!",
  copy: "Existe uma forma natural de acalmar sua pele com babosa, e você pode preparar em casa."
}, {
  title: "PÉS RACHADOS E PERNAS PESADAS?",
  highlight: "SUPER HIDRATAÇÃO!",
  copy: "Faça um bálsamo para sua pele usando melaleuca."
}, {
  title: "LÁBIOS SENSÍVEIS E ASSADURAS FREQUENTES?",
  highlight: "ISSO NINGUÉM MERECE!",
  copy: "Uma pomada feita de camomila vai suavizar e proteger."
}];
const PainPointsSection = () => {
  return <section className="bg-brand-white px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Image above title */}
        <div className="mb-6 flex justify-center sm:mb-8">
          
        </div>
        
        {/* Title */}
        <h2 className="mb-8 text-center text-2xl font-bold leading-tight text-brand-green sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
          Vamos ser realistas... Quantas vezes você já viveu isso?
        </h2>
        
        {/* Pain Points Grid */}
        <div className="mb-8 grid gap-4 sm:mb-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => <Card key={index} className="border-none bg-brand-green shadow-[var(--shadow-card)] touch-manipulation">
              <CardContent className="p-4 sm:p-6">
                <h3 className="mb-2 text-sm font-bold leading-tight text-brand-yellow sm:mb-3 sm:text-base lg:text-lg">
                  {point.title}
                </h3>
                <h4 className="mb-3 text-sm font-bold text-brand-white sm:mb-4 sm:text-base" style={{ textShadow: 'var(--text-glow)' }}>
                  {point.highlight}
                </h4>
                <p className="text-sm leading-relaxed text-brand-white sm:text-base">
                  {point.copy}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        {/* CTA Text */}
        <div className="text-center">
          <p className="text-lg font-bold leading-tight text-brand-green sm:text-xl md:text-2xl">
            CHEGOU A HORA DE TOMAR UMA DECISÃO QUE VAI MUDAR SUA VIDA!
          </p>
        </div>
      </div>
    </section>;
};
export default PainPointsSection;