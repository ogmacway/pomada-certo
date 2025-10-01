import footerOintment from "@/assets/footer-ointment.png";

const FooterSection = () => {
  return (
    <footer className="bg-brand-green px-3 py-6 sm:px-4 sm:py-8">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Footer Image */}
        <div className="mb-4 flex justify-center">
          <img 
            src={footerOintment} 
            alt="Pomada natural" 
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
          />
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-brand-white sm:text-2xl">
          Pomadas pra Vida
        </h3>
        <p className="mb-3 text-sm text-brand-white/80 sm:mb-4 sm:text-base">
          Resgatando a sabedoria ancestral das plantas medicinais
        </p>
        <p className="text-xs leading-relaxed text-brand-white/60 sm:text-sm">
          © 2025 Pomadas pra Vida. Todos os direitos reservados. • Este produto não substitui acompanhamento médico.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;