import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-park.jpg";
import patternTerracotta from "@/assets/pattern-terracotta.jpg";

const Historia = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="terracotta" />
      
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <div 
          className="h-48 md:h-64 lg:h-80 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white">História</h1>
          </div>
        </div>

        <Card className="p-4 md:p-6 rounded-3xl">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">O Parque das Esculturas</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
            Inaugurado em 2000, o Parque das Esculturas Francisco Brennand é um marco cultural para Pernambuco e para o Brasil. Localizado no Bairro do Recife, o espaço reúne obras monumentais do artista em um ambiente que une arte, arquitetura e natureza.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            O parque representa a materialização do sonho de Francisco Brennand de criar um espaço público onde suas esculturas pudessem ser apreciadas livremente, promovendo o encontro entre arte e povo.
          </p>
        </Card>

        <div 
          className="h-40 md:h-48 lg:h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="p-4 md:p-6 rounded-3xl bg-terracotta-light">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Marco Zero</h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            O Marco Zero do Recife, onde está localizado o parque, é o ponto de fundação da cidade. A escolha deste local por Brennand simboliza a conexão entre passado e presente, tradição e inovação, consolidando o Recife como polo cultural do Nordeste.
          </p>
        </Card>

        <footer className="text-center text-xs md:text-sm text-muted-foreground py-3 md:py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Historia;
