import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";
import heroBackground from "@/assets/hero-background.jpg";
const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen bg-brand-green px-3 py-8 sm:px-4 sm:py-12 md:py-20 overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-brand-green/80"></div>
      
      {/* Content */}
      <div className="relative z-10">{/* Note: content will be wrapped in this div */}
      <div className="container mx-auto max-w-6xl text-center">
        {/* Headline */}
        <h1 className="mb-4 text-3xl font-bold leading-tight text-brand-yellow sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
          POMADAS PRA VIDA
        </h1>
        
        {/* Subheadline */}
        <h2 className="mb-8 text-lg font-bold leading-tight text-brand-white sm:mb-12 sm:text-xl md:text-2xl lg:text-3xl">
          APRENDA A FAZER POMADAS NATURAIS EM CASA
        </h2>
        
        {/* Hero Mockup */}
        <div className="mb-8 flex justify-center sm:mb-12">
          <img src={heroMockup} alt="A Arte de Fazer Pomadas Naturais" className="w-full max-w-md rounded-lg shadow-2xl" />
        </div>
        
        {/* Copy */}
        <div className="mx-auto mb-6 max-w-4xl sm:mb-8">
          <p className="mb-4 text-base leading-relaxed text-brand-white sm:mb-6 sm:text-lg md:text-xl">
            Mesmo que você nunca tenha feito antes, aprenda o passo a passo para extrair o poder curativo das plantas e melhorar sua saúde!
          </p>
          
          
        </div>
        
        {/* CTA Button */}
        <div className="mb-4 sm:mb-6 w-full max-w-md mx-auto">
          
        </div>
        
        {/* Trust indicators */}
        
      </div>
      </div>
    </section>;
};
export default HeroSection;