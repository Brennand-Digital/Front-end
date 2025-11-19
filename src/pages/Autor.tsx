import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import artistaImage from "@/assets/artista.jpg";


const Autor = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="black" />
      
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <Card className="bg-black text-white p-6 md:p-8 rounded-3xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Francisco Brennand</h1>
          <p className="text-base md:text-lg opacity-90">Artista Pernambucano</p>
        </Card>

        <img 
          src={artistaImage} 
          alt="Obra de Brennand" 
          className="w-full h-48 md:h-64 lg:h-80 object-center rounded-3xl object-position-top"
        />

        <Card className="p-4 md:p-6 rounded-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Francisco Brennand (1927-2019) foi um dos mais importantes artistas plásticos brasileiros. Nascido no Recife, dedicou sua vida à criação de esculturas monumentais em cerâmica, pinturas e instalações artísticas que dialogam com temas universais como a criação, a vida e a morte.
          </p>
        </Card>

        <Card className="p-4 md:p-6 rounded-3xl bg-black text-white">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Legado</h2>
          <p className="text-sm md:text-base leading-relaxed">
            O Parque das Esculturas é um dos principais legados do artista, reunindo obras monumentais que transformaram o Marco Zero do Recife em um museu a céu aberto, democratizando o acesso à arte e à cultura.
          </p>
        </Card>

        <footer className="text-center text-xs md:text-sm text-muted-foreground py-3 md:py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Autor;
