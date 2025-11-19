import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import boatsImage from "@/assets/boats.jpg";
import patternTerracotta from "@/assets/pattern-terracotta.jpg";

const Rotas = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="terracotta" />
      
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <img 
          src={boatsImage} 
          alt="Embarcações" 
          className="w-full h-40 md:h-48 lg:h-64 object-cover rounded-3xl"
        />

        <Card className="bg-terracotta-light p-4 md:p-6 rounded-3xl text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Rotas</h2>
          <p className="text-sm md:text-base mb-3 md:mb-4">
            Existem 11 embarcações obedecem a uma padronização simples, com caiações em poliéster e cobertura e fardamento para os barqueiros (catamarãs).
          </p>
          <p className="text-sm md:text-base">
            As embarcações são simples de madeira, mas todos os 11 barcos foram vistoriados e aprovados pela Marinha e estão regulamentados para a travessia marítima.
          </p>
        </Card>

        <div 
          className="rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card className="bg-terracotta-light/95 backdrop-blur p-4 md:p-6 m-4 md:m-6 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Capacidade</h3>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-4xl md:text-5xl font-bold">10</div>
                <div className="text-xs md:text-sm">
                  <p className="font-semibold">pessoas</p>
                  <p>De 1 passageiro a 1 barqueiro</p>
                  <p className="text-xs opacity-80">Muitos dos barcos aprovados</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-4xl md:text-5xl font-bold">3</div>
                <div className="text-xs md:text-sm">
                  <p className="font-semibold">Em média</p>
                  <p className="text-2xl md:text-3xl">min</p>
                  <p className="text-xs opacity-80">Todos pedem coletes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-4xl md:text-5xl font-bold">10</div>
                <div className="text-xs md:text-sm">
                  <p className="font-semibold">coletes</p>
                  <p className="text-xs opacity-80">em cada barco</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

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

export default Rotas;
