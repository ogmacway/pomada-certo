import guaranteeSeal from "@/assets/guarantee-seal.png";
import logoWhatsapp from "@/assets/logo-whatsapp.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5548992050264", "_blank");
  };

  return <section className="bg-brand-white px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Guarantee Seal */}
        <div className="mx-auto mb-6 sm:mb-8">
          <img src={guaranteeSeal} alt="Selo de Garantia de 7 Dias" className="mx-auto h-24 w-24 sm:h-32 sm:w-32 object-contain" />
        </div>
        
        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-brand-green sm:mb-6 sm:text-3xl md:text-4xl">
          GARANTIA DE 7 DIAS
        </h2>
        
        {/* Copy */}
        <p className="mb-8 text-base leading-relaxed text-brand-green sm:mb-12 sm:text-lg md:text-xl">
          <strong>Sua satisfação é nossa prioridade. Se por qualquer motivo você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento. Sem enrolação!</strong>
        </p>

        {/* WhatsApp Contact Card */}
        <Card className="mx-auto max-w-2xl border-brand-green bg-gradient-to-r from-brand-green/5 to-brand-green-light/5 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <img 
              src={logoWhatsapp} 
              alt="WhatsApp" 
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
            />
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto sm:flex-1"
            >
              FALE COM NOSSA EQUIPE
            </Button>
          </div>
        </Card>
      </div>
    </section>;
};
export default GuaranteeSection;