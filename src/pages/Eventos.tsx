import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";
import patternSage from "@/assets/pattern-sage.jpg";

const Eventos = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="sage" />
      
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <Card className="bg-sage text-white p-6 md:p-8 rounded-3xl text-center">
          <Calendar className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold">Eventos</h1>
        </Card>

        <Card className="p-4 md:p-6 rounded-3xl">
          <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="bg-ocean text-white rounded-xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl font-bold">15</div>
              <div className="text-xs md:text-sm">MAR</div>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-1">Visita Guiada Especial</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Acompanhamento com curador especializado pelas principais obras do parque.
              </p>
            </div>
          </div>
        </Card>

        <img 
          src={ceramicImage} 
          alt="Evento" 
          className="w-full h-40 md:h-48 lg:h-64 object-cover rounded-3xl"
        />

        <Card className="p-4 md:p-6 rounded-3xl">
          <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="bg-terracotta text-white rounded-xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl font-bold">22</div>
              <div className="text-xs md:text-sm">ABR</div>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-1">Workshop de Cerâmica</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Aprenda técnicas básicas de modelagem em cerâmica inspiradas na obra de Brennand.
              </p>
            </div>
          </div>
        </Card>

        <div 
          className="h-40 md:h-48 lg:h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternSage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="p-4 md:p-6 rounded-3xl">
          <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="bg-sage text-white rounded-xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl font-bold">10</div>
              <div className="text-xs md:text-sm">MAI</div>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-1">Encontro Cultural</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Mesa redonda sobre arte contemporânea e o legado de Francisco Brennand.
              </p>
            </div>
          </div>
        </Card>

        <footer className="text-center text-xs md:text-sm text-muted-foreground py-3 md:py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Eventos;
