import { Card, CardContent } from "@/components/ui/card";
import depoimento1 from "@/assets/depoimento1.jpg";
import depoimento2 from "@/assets/depoimento2.jpg";
import depoimento3 from "@/assets/depoimento3.jpg";
import depoimento4 from "@/assets/depoimento4.jpg";

const testimonials = [
  {
    image: depoimento1,
    alt: "Depoimento sobre pomada antibacteriana para unha"
  },
  {
    image: depoimento2,
    alt: "Depoimento de Sirleide Santos sobre pomada para tosse"
  },
  {
    image: depoimento3,
    alt: "Depoimento de Dryca Santos mostrando resultados na pele"
  },
  {
    image: depoimento4,
    alt: "Depoimento sobre pomadas milagrosas e resultados com alergias"
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
            <Card key={index} className="touch-manipulation overflow-hidden border-none bg-gradient-to-br from-brand-green/5 to-brand-green/10 shadow-[var(--shadow-card)]">
              <CardContent className="p-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-full h-auto object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;