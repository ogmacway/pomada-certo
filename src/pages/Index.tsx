import HeroSection from "@/components/HeroSection";
import NatureSection from "@/components/NatureSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NatureSection />
      <PainPointsSection />
      <SolutionSection />
      <TargetAudienceSection />
      <FeaturesSection />
      <GuaranteeSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
