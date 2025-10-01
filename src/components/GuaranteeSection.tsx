import guaranteeSeal from "@/assets/guarantee-seal.png";
const GuaranteeSection = () => {
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
        <p className="text-base leading-relaxed text-brand-green sm:text-lg md:text-xl">
          <strong>Sua satisfação é nossa prioridade. Se por qualquer motivo você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento. Sem enrolação!</strong>
        </p>
      </div>
    </section>;
};
export default GuaranteeSection;