import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import api from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Aviso {
  id: string;
  titulo: string;
  descricao: string;
}

const AdminAvisos = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const fetchAvisos = async () => {
    setLoading(true);
    try {
      const response = await api.get("/avisos");
      setAvisos(response.data);
    } catch (error) {
      toast.error("Erro ao buscar avisos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvisos();
  }, []);

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !descricao) {
      toast.error("Preencha título e descrição");
      return;
    }
    try {
      if (editId) {
        // PUT para editar aviso - envia id, titulo e descricao (envia tudo)
        await api.put(`/avisos/${editId}`, { id: editId, titulo, descricao });
        toast.success("Aviso editado com sucesso!");
        setEditId(null);
      } else {
        // POST para criar - envia apenas titulo e descricao
        await api.post("/avisos", { titulo, descricao });
        toast.success("Aviso criado!");
      }
      setTitulo("");
      setDescricao("");
      fetchAvisos();
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao salvar aviso");
      }
    }
  };

  const handleEditar = (aviso: Aviso) => {
    setEditId(aviso.id);
    setTitulo(aviso.titulo);
    setDescricao(aviso.descricao);
  };

  const handleCancelar = () => {
    setEditId(null);
    setTitulo("");
    setDescricao("");
  };

  const handleDeletar = async (id: string) => {
    if (!window.confirm("Tem certeza que deseja deletar este aviso?")) return;
    try {
      await api.delete(`/avisos/${id}`);
      toast.success("Aviso removido!");
      fetchAvisos();
    } catch {
      toast.error("Erro ao remover aviso");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administração de Avisos</h1>

      {/* Formulário novo aviso / editar */}
      <form onSubmit={handleSalvar} className="space-y-3 mb-6">
        <Input
          placeholder="Título"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <Input
          placeholder="Descrição"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />
        <div className="flex gap-2">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            {editId ? "Salvar alteração" : "Adicionar aviso"}
          </Button>
          {editId && (
            <Button type="button" onClick={handleCancelar} variant="outline">Cancelar</Button>
          )}
        </div>
      </form>

      {/* Listagem de avisos */}
      {loading ? (
        <p>Carregando avisos...</p>
      ) : (
        avisos.length > 0 ? (
          avisos.map(aviso => (
            <Card key={aviso.id} className="mb-2 p-3">
              <div className="flex flex-col gap-1">
                <strong>{aviso.titulo}</strong>
                <span className="text-sm text-muted-foreground">{aviso.descricao}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button size="sm" onClick={() => handleEditar(aviso)} variant="secondary">
                  Editar
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDeletar(aviso.id)}>
                  Deletar
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <p>Nenhum aviso encontrado.</p>
        )
      )}
    </div>
  );
};

export default AdminAvisos;
