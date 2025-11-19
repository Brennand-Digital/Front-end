import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import boatsImage from "@/assets/boats.jpg";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";
import patternBlue from "@/assets/pattern-blue.jpg";

const Visite = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="ocean" />
      
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <Card className="bg-cream p-4 md:p-6 rounded-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Acesso</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Para chegar até o parque, os visitantes devem entrar numa embarcação que sai do Marco Zero, o cruzeiro do Estuário do Recife. Navegar no Recife indo até à entrada do parque ou ir de carro pela Avenida Brasília Formosa.
          </p>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <img src={boatsImage} alt="Embarcações" className="rounded-2xl w-full h-28 md:h-32 lg:h-40 object-cover" />
          <img src={ceramicImage} alt="Esculturas" className="rounded-2xl w-full h-28 md:h-32 lg:h-40 object-cover" />
        </div>

        <Card className="bg-ocean text-white p-4 md:p-6 rounded-3xl">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Horários</h3>
          <div className="space-y-2 md:space-y-3">
            <div className="bg-ocean-dark p-3 md:p-4 rounded-xl">
              <p className="font-semibold text-sm md:text-base">Terça a sexta:</p>
              <p className="text-sm md:text-base">10h às 17h</p>
            </div>
            <div className="bg-ocean-dark p-3 md:p-4 rounded-xl">
              <p className="font-semibold text-sm md:text-base">Sábado, domingo e feriados:</p>
              <p className="text-sm md:text-base">9h às 16h</p>
            </div>
          </div>
        </Card>

        <div 
          className="h-40 md:h-48 lg:h-64 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${patternBlue})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="bg-ocean text-white p-4 md:p-6 m-4 md:m-6 rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-2">Atenção</h3>
              <p className="text-sm md:text-base">A última travessia acontece até</p>
              <p className="text-2xl md:text-3xl font-bold">30 MIN</p>
              <p className="text-xs md:text-sm">antes do horário de fechamento do Parque.</p>
            </Card>
          </div>
        </div>

        <div 
          className="h-48 md:h-64 lg:h-80 rounded-3xl"
          style={{
            backgroundImage: `url(${patternBlue})`,
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

export default Visite;
