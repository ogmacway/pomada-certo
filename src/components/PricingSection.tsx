import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import basicPlanMockup from "@/assets/basic-plan-mockup.png";
import premiumPlanMockup from "@/assets/premium-plan-mockup.png";
const PricingSection = () => {
  return <section id="pricing" className="bg-brand-green px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-brand-yellow mb-8 sm:mb-12">
          ADQUIRA JÁ O SEU ACESSO AO NOSSO ECOSSISTEMA
        </h2>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Basic Plan */}
          <Card className="touch-manipulation border-2 border-brand-green/20 shadow-[var(--shadow-card)]">
            <CardContent className="p-6 sm:p-8">
              {/* Mockup */}
              <div className="mb-4 sm:mb-6">
                 <img src={basicPlanMockup} alt="Manual A Arte de Fazer Pomadas Naturais" className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg" />
              </div>
              
              <h3 className="mb-3 text-lg font-bold text-brand-green sm:mb-4 sm:text-xl">ACESSO COMUM</h3>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-xs text-brand-green/70 sm:text-2xl">
                  De <span className="line-through">R$29,90</span>
                </p>
                <p className="text-2xl font-bold text-brand-green sm:text-5xl">R$ 9,90</p>
                <p className="text-xs text-brand-green/70 sm:text-sm">Pagamento único • Acesso vitalício</p>
              </div>
              
              <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-brand-green flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-brand-green">Manual completo "A Arte de Fazer Pomadas Naturais"</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-brand-green flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-brand-green">Garantia de 7 dias</span>
                </li>
              </ul>
              
              <Button variant="hero" className="w-full text-xs xs:text-sm sm:text-base" size="lg" onClick={() => window.open('https://go.pepperpay.com.br/i7x4b', '_blank')}>
                ESCOLHER ACESSO COMUM
              </Button>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className="touch-manipulation relative border-2 border-brand-yellow shadow-[var(--shadow-card)]">
            {/* Most Popular Badge */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-3 py-1 sm:-top-3 sm:px-4">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-brand-green sm:h-4 sm:w-4" />
                <span className="text-xs font-bold text-brand-green sm:text-sm">MAIS VENDIDO</span>
              </div>
            </div>
            
            <CardContent className="p-6 pt-8 sm:p-8 sm:pt-12">
              {/* Mockup */}
              <div className="mb-4 sm:mb-6">
                 <img src={premiumPlanMockup} alt="Ecossistema Pomadas pra Vida" className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg" />
              </div>
              
              <h3 className="mb-3 text-lg font-bold text-brand-green sm:mb-4 sm:text-xl">ACESSO PREMIUM</h3>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-xs text-brand-green/70 sm:text-2xl">
                  De <span className="line-through">R$ 69,90</span>
                </p>
                <p className="text-2xl font-bold text-brand-green sm:text-5xl">R$29,90</p>
                <p className="text-xs text-brand-green/70 sm:text-sm">Pagamento único • Acesso vitalício</p>
              </div>
              
              <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-bold text-brand-green">✅ TUDO do Plano Comum</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-bold text-brand-green">🌿 Guia Completo do Cultivo de Ervas Medicinais</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-bold text-brand-green">💰 Indicações de Fornecedores</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-bold text-brand-green">📱 Suporte VIP no WhatsApp</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-bold text-brand-green">🎁 Atualizações Mensais VITALÍCIAS</span>
                </li>
                
              </ul>
              
              <Button variant="cta" className="w-full text-xs xs:text-sm sm:text-base" size="lg" onClick={() => window.open('https://go.pepperpay.com.br/zjsrf', '_blank')}>
                ESCOLHER ACESSO PREMIUM
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Payment Methods */}
        <div className="mt-6 text-center sm:mt-8">
          <p className="text-sm text-brand-white sm:text-base font-medium">
            💳 Aceitamos: PIX, Cartão de Crédito, Boleto
          </p>
          <p className="text-sm text-brand-white sm:text-base font-medium mt-2">
            🔒 Pagamento 100% seguro e criptografado
          </p>
        </div>
      </div>
    </section>;
};
export default PricingSection;