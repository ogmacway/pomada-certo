import naturalCream from "@/assets/natural-cream.png";
const NatureSection = () => {
  return <section className="bg-brand-green px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Nature Image */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <img src={naturalCream} alt="Pomada natural" className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />
        </div>
        
        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold leading-tight text-brand-yellow sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">A natureza tem tudo o que você precisa</h2>
        
        {/* Subtitle */}
        <p className="mx-auto max-w-4xl text-base leading-relaxed text-brand-white sm:text-lg md:text-xl">
          Esse é um convite para quem valoriza o cuidado natural, busca mais conexão com a terra e quer ter o conhecimento nas mãos para preparar pomadas potentes, com simplicidade e eficácia.
        </p>
      </div>
    </section>;
};
export default NatureSection;