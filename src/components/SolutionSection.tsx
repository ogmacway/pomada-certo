import { Button } from "@/components/ui/button";
import solutionMockup from "@/assets/solution-mockup.png";

const SolutionSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-brand-green px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-brand-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
          A SOLUÇÃO ESTÁ AQUI!
        </h2>
        
        {/* Subtitle */}
        <h3 className="mb-6 text-xl font-bold text-brand-yellow sm:mb-8 sm:text-2xl md:text-3xl">
          Conheça "POMADAS PRA VIDA"
        </h3>
        
        {/* Copy */}
        <p className="mx-auto mb-8 max-w-4xl text-base leading-relaxed text-brand-white sm:mb-12 sm:text-lg md:text-xl">
          Um ecossistema completo que resgata a sabedoria ancestral e ensina você a criar suas próprias pomadas medicinais com segurança e eficácia.
        </p>
        
        {/* Solution Image */}
        <div className="mb-8 flex justify-center sm:mb-12">
          <img 
            src={solutionMockup} 
            alt="A Arte de Fazer Pomadas Naturais" 
            className="w-full max-w-2xl rounded-lg shadow-2xl"
          />
        </div>
        
        {/* CTA Button */}
        <div className="w-full max-w-md mx-auto">
          <Button 
            variant="hero" 
            size="xl" 
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl"
            onClick={scrollToPricing}
          >
            QUERO FAZER POMADAS NATURAIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;