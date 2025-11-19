import { Sidebar } from "@/components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();

  // Determina a cor da sidebar baseado na rota
  const getVariant = () => {
    if (location.pathname === "/visite") return "ocean";
    if (location.pathname === "/exposicoes" || location.pathname === "/rotas" || location.pathname === "/historia") return "terracotta";
    if (location.pathname === "/autor" || location.pathname === "/avisos") return "black";
    if (location.pathname === "/eventos") return "sage";
    return "sage"; // default
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar variant={getVariant()} />
      <main className="flex-1 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

