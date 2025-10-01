import { Card, CardContent } from "@/components/ui/card";
import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialJoao from "@/assets/testimonial-joao.jpeg";
import testimonialCarlos from "@/assets/testimonial-carlos.jpg";
import testimonialAna from "@/assets/testimonial-ana.jpg";

const testimonials = [
  {
    text: "Incrível! Fiz a pomada para dores nas articulações e funcionou melhor que qualquer remédio que já usei. E o melhor: sei exatamente o que estou aplicando na minha pele.",
    name: "Maria Silva",
    location: "São Paulo, SP",
    verified: "✓ Verificado • dores nas articulações",
    image: testimonialMaria
  },
  {
    text: "Como cuidador da minha mãe idosa, esse conhecimento foi uma benção. As pomadas cicatrizantes ajudaram muito com as escaras. Recomendo de olhos fechados!",
    name: "João Santos",
    location: "Belo Horizonte, MG",
    verified: "✓ Verificado • pomadas cicatrizantes",
    image: testimonialJoao
  },
  {
    text: "Comecei fazendo para uso próprio e agora vendo para as vizinhas. O investimento se pagou na primeira semana! Material muito completo e bem explicado.",
    name: "Ana Costa",
    location: "Recife, PE",
    verified: "✓ Verificado • renda extra",
    image: testimonialAna
  },
  {
    text: "A pomada para hemorroidas salvou minha vida! Evitei a cirurgia usando uma receita natural. Gratidão eterna por compartilhar esse conhecimento ancestral.",
    name: "Carlos Oliveira",
    location: "Curitiba, PR",
    verified: "✓ Verificado • hemorroidas",
    image: testimonialCarlos
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-brand-white px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-8 text-center text-2xl font-bold leading-tight text-brand-green sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
          VEJA O QUE FALAM SOBRE NÓS:
        </h2>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="touch-manipulation border-none bg-gradient-to-br from-brand-green/5 to-brand-green/10 shadow-[var(--shadow-card)]">
              <CardContent className="p-5 sm:p-6">
                {/* Profile Image */}
                <div className="mb-4 flex justify-center">
                  <img 
                    src={testimonial.image} 
                    alt={`Foto de ${testimonial.name}`}
                    className="h-20 w-20 rounded-full object-cover shadow-md sm:h-24 sm:w-24"
                  />
                </div>
                
                <p className="mb-3 text-sm italic leading-relaxed text-brand-green sm:mb-4 sm:text-base">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-brand-green/20 pt-3 sm:pt-4">
                  <p className="text-sm font-bold text-brand-green sm:text-base">{testimonial.name}</p>
                  <p className="text-xs text-brand-green/70 sm:text-sm">{testimonial.location}</p>
                  <p className="mt-1 text-xs font-medium text-brand-green sm:mt-2 sm:text-sm">
                    {testimonial.verified}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;