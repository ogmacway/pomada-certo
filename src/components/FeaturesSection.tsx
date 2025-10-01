import { Card, CardContent } from "@/components/ui/card";
import bonusAtualizacoes from "@/assets/bonus-atualizacoes.png";
import bonusGuiaErvas from "@/assets/bonus-guia-ervas.png";
import bonusWhatsapp from "@/assets/bonus-whatsapp.png";
import bonusOndeEncontrar from "@/assets/bonus-onde-encontrar.png";
import bonusEtiquetas from "@/assets/bonus-etiquetas.png";
const recipes = ["Pomada Cicatrizante e Bactericida", "Pomada para Alívio de Picadas de Insetos", "Pomada para Tratamento de Hemorroidas", "Pomada Descongestionante \"Respire Melhor\"", "Pomada Anti-inflamatória para Dores Musculares", "Pomada Hidratante para Pele Seca e Calcanhar Rachado", "Pomada para Queimaduras", "Pomada Antifúngica para Unhas", "Pomada para Dor nas Articulações", "Pomada para Assaduras", "Pomada Anti-viral para Herpes", "Bálsamo para Pernas Cansadas"];
const FeaturesSection = () => {
  return <section className="bg-brand-green px-3 py-12 sm:px-4 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-8 text-center text-2xl font-bold leading-tight text-brand-white sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">O QUE VOCÊ VAI ENCONTRAR:</h2>
        
        {/* Features Cards */}
        <div className="space-y-6 sm:space-y-8">
          {/* First Card */}
          <Card className="touch-manipulation border-none bg-brand-white/10 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-brand-yellow sm:mb-4 sm:text-2xl">
                CONHECIMENTO PROFUNDO SOBRE POMADAS NATURAIS
              </h3>
              <p className="text-sm leading-relaxed text-brand-white sm:text-base">
                Oferecemos uma compreensão abrangente sobre a criação de pomadas usando plantas medicinais. Desde o preparo até a aplicação, você aprenderá tudo o que precisa saber para criar produtos naturais de alta qualidade.
              </p>
            </CardContent>
          </Card>
          
          {/* Second Card with Recipes */}
          <Card className="touch-manipulation border-none bg-brand-white/10 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-brand-yellow sm:mb-4 sm:text-2xl">
                RECEITAS EXCLUSIVAS E EFICAZES
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-brand-white sm:mb-6 sm:text-base">
                Descubra uma coleção de receitas de pomadas naturais, cuidadosamente elaboradas para atender a diversas necessidades. Entre as receitas incluídas estão:
              </p>
              
              {/* Recipes List */}
              <div className="mb-4 grid gap-2 sm:mb-6 sm:gap-3 sm:grid-cols-2">
                {recipes.map((recipe, index) => <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow sm:mt-2 sm:h-2 sm:w-2"></div>
                    <p className="text-sm text-brand-white sm:text-base">{recipe}</p>
                  </div>)}
              </div>
              
              <p className="text-sm leading-relaxed text-brand-white sm:text-base">
                Cada receita é acompanhada de instruções detalhadas para garantir o melhor resultado e proporcionar o alívio necessário para toda a família.
              </p>
            </CardContent>
          </Card>
          
          {/* Bonus Section Title */}
          <h3 className="mb-6 text-center text-2xl font-bold text-brand-yellow sm:mb-8 sm:text-3xl md:text-4xl">
            BÔNUS ESPECIAIS
          </h3>

          {/* Bonus Cards */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {/* Bonus 1 - Atualizações Mensais */}
            <Card className="touch-manipulation border-none bg-brand-yellow/20 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
                <img src={bonusAtualizacoes} alt="Ícone de atualizações mensais" className="h-24 w-24 sm:h-32 sm:w-32" />
                <h3 className="text-lg font-bold text-brand-white sm:text-xl">
                  ATUALIZAÇÕES MENSAIS
                </h3>
              </CardContent>
            </Card>

            {/* Bonus 2 - Guia do Cultivo */}
            <Card className="touch-manipulation border-none bg-brand-yellow/20 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
                <img src={bonusGuiaErvas} alt="Guia do cultivo de ervas medicinais" className="h-40 w-40 sm:h-48 sm:w-48" />
                <h3 className="text-lg font-bold text-brand-white sm:text-xl">
                  GUIA DO CULTIVO DE ERVAS MEDICINAIS
                </h3>
              </CardContent>
            </Card>

            {/* Bonus 3 - Suporte WhatsApp */}
            <Card className="touch-manipulation border-none bg-brand-yellow/20 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
                <img src={bonusWhatsapp} alt="Suporte VIP no WhatsApp" className="h-24 w-24 sm:h-32 sm:w-32" />
                <h3 className="text-lg font-bold text-brand-white sm:text-xl">
                  SUPORTE VIP NO WHATSAPP
                </h3>
              </CardContent>
            </Card>

            {/* Bonus 4 - Dicas Secretas */}
            <Card className="touch-manipulation border-none bg-brand-yellow/20 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
                <img src={bonusOndeEncontrar} alt="Dicas de onde encontrar produtos e economizar" className="h-40 w-40 sm:h-48 sm:w-48" />
                <h3 className="text-lg font-bold text-brand-white sm:text-xl">
                  Dicas secretas: ONDE ENCONTRAR PRODUTOS E ECONOMIZAR COM INGREDIENTES
                </h3>
              </CardContent>
            </Card>

            {/* Bonus 5 - Etiquetas para Pomadas */}
            <Card className="touch-manipulation border-none bg-brand-yellow/20 backdrop-blur-sm sm:col-span-2 sm:mx-auto sm:max-w-md">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
                <img src={bonusEtiquetas} alt="Etiquetas para pomadas" className="h-40 w-40 sm:h-48 sm:w-48" />
                <h3 className="text-lg font-bold text-brand-white sm:text-xl">
                  ETIQUETAS PARA POMADAS
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;