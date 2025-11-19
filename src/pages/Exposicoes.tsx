import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import patternTerracotta from "@/assets/pattern-terracotta.jpg";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";
import boatsImage from "@/assets/boats.jpg";
import colunaImage from "@/assets/coluna.jpg";

const Exposicoes = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="terracotta" />
      
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <Card className="bg-cream p-4 md:p-6 rounded-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Exposições</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Localizado no Bairro do Recife, lugar epicentro da arte local, o Espaço Esculturas Francisco Brennand vai além de Coluna de Cristal com 32 metros de altura, topo da Coluna de Cristal de arte e o mais querido na parte de cima e mais querido na parte superior.
          </p>
        </Card>

        <div 
          className="h-48 md:h-64 lg:h-80 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="bg-terracotta p-4 md:p-6 rounded-3xl overflow-hidden">
          <img src={colunaImage} alt="Coluna de Cristal" className="w-full h-40 md:h-48 lg:h-64 object-cover rounded-2xl mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Coluna de Cristal</h3>
          <p className="text-sm md:text-base text-white/90">
            Com 32 metros de altura, topo da Coluna de Cristal é uma das espaço caneta cristal. No corpo da estrutura, há quatro remos de casco e o mais querido na parte de cima e mais querido na parte superior.
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <img src={boatsImage} alt="Detalhe 1" className="rounded-2xl w-full h-28 md:h-32 lg:h-40 object-cover" />
          <img src={ceramicImage} alt="Detalhe 2" className="rounded-2xl w-full h-28 md:h-32 lg:h-40 object-cover" />
        </div>

        <Card className="bg-cream p-4 md:p-6 rounded-3xl">
          <p className="text-sm md:text-base text-muted-foreground">
            Para o artista, o ovo é como uma pedra que gera a vida quando é evocado. Para Brennand, é o símbolo maior da reprodução e da criação. Essa responsabilidade com a criação é tão séria que ele diz que os animais representados como oviparas, como pássaros, tartarugas e até peixes, são sempre evitárias, como pássaros, tartarugas e outros peixes.
          </p>
        </Card>

        <div 
          className="h-48 md:h-64 lg:h-80 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <footer className="text-center text-xs md:text-sm text-muted-foreground py-3 md:py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Exposicoes;
