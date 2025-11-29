import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Visite from "./pages/Visite";
import Exposicoes from "./pages/Exposicoes";
import Rotas from "./pages/Rotas";
import Avisos from "./pages/Avisos";
import Autor from "./pages/Autor";
import Historia from "./pages/Historia";
import Eventos from "./pages/Eventos";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";
import { MainLayout } from "@/components/MainLayout";
import api from "./services/api";
import AdminAvisos from "./pages/AdminAvisos";

const queryClient = new QueryClient();

const App = () => {
  // ✅ useEffect agora está dentro do componente
  useEffect(() => {
    api
      .get("/usuarios") // endpoint de teste
      .then((response) => {
        console.log("✅ Conexão com o back funcionando!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("❌ Erro ao conectar com o back:", error);
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 🔓 Rota pública (login/cadastro) */}
            <Route path="/auth" element={<Auth />} />

            {/* 🔒 Rotas protegidas */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="visite" element={<Visite />} />
              <Route path="exposicoes" element={<Exposicoes />} />
              <Route path="rotas" element={<Rotas />} />
              <Route path="avisos" element={<Avisos />} />
              <Route path="autor" element={<Autor />} />
              <Route path="historia" element={<Historia />} />
              <Route path="eventos" element={<Eventos />} />
            </Route>

            {/* Admin: rota exclusiva de avisos */}
            <Route
              path="/admin/avisos"
              element={
                <ProtectedRoute onlyAdmin>
                  <AdminAvisos />
                </ProtectedRoute>
              }
            />

            {/* 🚨 Página não encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
