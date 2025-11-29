import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo.png";
import { isAdmin } from "@/utils/auth";

interface SidebarProps {
  variant?: "sage" | "ocean" | "terracotta" | "cream" | "black";
}

export const Sidebar = ({ variant = "sage" }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const bgColor = {
    sage: "bg-sage",
    ocean: "bg-ocean",
    terracotta: "bg-terracotta",
    cream: "bg-cream",
    black: "bg-black",
  }[variant];

  const textColor = variant === "cream" ? "text-foreground" : "text-white";

  // Cores HSL para aplicar no logo via CSS (mesmas cores do header)
  const logoBgColor = {
    sage: "hsl(90, 25%, 45%)",
    ocean: "hsl(200, 85%, 45%)",
    terracotta: "hsl(25, 45%, 50%)",
    cream: "hsl(42, 35%, 90%)",
    black: "hsl(0, 0%, 0%)",
  }[variant];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/visite", label: "Visite" },
    { path: "/exposicoes", label: "Exposições" },
    { path: "/autor", label: "O autor" },
    { path: "/historia", label: "História" },
    { path: "/eventos", label: "Eventos" },
    { path: "/rotas", label: "Rotas" },
    { path: "/avisos", label: "Avisos" },
  ];

  return (
    <aside className={`${bgColor} ${textColor} w-64 fixed left-0 top-0 h-screen flex flex-col p-4 md:p-6 z-50 hidden md:flex`}>
      {/* Logo */}
      <Link to="/" className="mb-8 flex items-center">
        <div 
          className="h-10 md:h-12 px-3 md:px-4 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: logoBgColor }}
        >
          <img 
            src={logoImage} 
            alt="Brennand Digital" 
            className="h-8 md:h-10 w-auto"
            style={{ 
              mixBlendMode: "multiply"
            }}
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                px-4 py-3 rounded-xl transition-all
                ${isActive 
                  ? "bg-white/20 font-semibold" 
                  : "hover:bg-white/10 hover:opacity-80"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      {/* Botão admin e sair admin existentes */}
      {isAdmin() && (
        <>
          <Link
            to="/admin/avisos"
            className={`mt-4 px-4 py-3 rounded-xl bg-green-700 text-white text-center font-bold hover:bg-green-800 transition-all`}
          >
            Área Admin
          </Link>
          {/* Botão para sair da área admin (só na rota admin) */}
          {location.pathname === "/admin/avisos" && (
            <Link
              to="/"
              className="mt-2 px-4 py-3 rounded-xl bg-white/20 text-white text-center font-semibold hover:bg-white/30 transition-all"
            >
              Sair da área admin
            </Link>
          )}
        </>
      )}
      {/* Removido botão de logout da sidebar desktop conforme solicitado */}
    </aside>
  );
};

