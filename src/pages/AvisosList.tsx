import { Card } from "@/components/ui/card";
import api from "@/services/api";
import { useEffect, useState } from "react";

interface Aviso {
  id: string;
  titulo: string;
  descricao: string;
}

const AvisosList = () => {
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

  // Renderização similar ao bloco dinâmico que estava em Avisos.tsx
  return (
    <div className="space-y-4 md:space-y-6">
      {loading && (
        <p className="text-center text-sm md:text-base text-gray-500">Carregando avisos...</p>
      )}
      {!loading && avisos.length > 0 ? (
        avisos.map((aviso) => (
          <Card key={aviso.id} className="bg-sage-dark text-white p-4 md:p-6 rounded-3xl">
            <h2 className="text-lg md:text-xl font-bold mb-2">{aviso.titulo}</h2>
            <p className="text-xs md:text-sm opacity-90">{aviso.descricao}</p>
          </Card>
        ))
      ) : (
        !loading && (
          <p className="text-center text-sm md:text-base text-gray-500">
            Nenhum aviso encontrado.
          </p>
        )
      )}
    </div>
  );
};

export default AvisosList;

