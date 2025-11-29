import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import sculptureDramatic from "@/assets/sculpture-dramatic.jpg";
import patternSage from "@/assets/pattern-sage.jpg";
import api from "@/services/api";
import { useEffect, useState } from "react";
import AvisosList from "./AvisosList";

interface Aviso {
  id: string;
  titulo: string;
  descricao: string;
}

const Avisos = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const response = await api.get("/avisos");
        setAvisos(response.data);
      } catch (error) {
        console.error("Erro ao buscar avisos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvisos();
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Header variant="black" />
      <div className="space-y-4 md:space-y-6 pb-6 md:pb-8">
        <div
          className="h-40 md:h-48 lg:h-64 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${sculptureDramatic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Avisos</h1>
          </div>
        </div>
        {/* Lista de avisos extraída para componente separado */}
        <AvisosList />
        {/* Mantém o conteúdo fixo original abaixo */}
        <div
          className="h-40 md:h-48 lg:h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternSage})`,
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

export default Avisos;
