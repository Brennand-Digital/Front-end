import { Menu, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo.png";
import { isAdmin } from "@/utils/auth";

interface HeaderProps {
  variant?: "sage" | "ocean" | "terracotta" | "cream" | "black";
  showSearch?: boolean;
}

export const Header = ({ variant = "sage", showSearch = false }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
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

  // Determinar cor dinâmica do botão de acordo com a página
  const isHome = location.pathname === "/";
  let feedbackBtnClass = "hidden sm:inline-flex ml-2 md:ml-0 px-3 py-2 rounded-lg text-white text-sm font-medium transition-shadow shadow-md";
  if (isHome) {
    feedbackBtnClass += " bg-green-700 hover:bg-green-800";
  } else {
    switch(variant) {
      case "terracotta":
        feedbackBtnClass += " bg-[#cb6647] hover:bg-[#a14829]"; // laranja terracota
        break;
      case "ocean":
        feedbackBtnClass += " bg-blue-700 hover:bg-blue-800";
        break;
      case "sage":
        feedbackBtnClass += " bg-lime-700 hover:bg-lime-800";
        break;
      case "cream":
        feedbackBtnClass += " bg-yellow-900 hover:bg-yellow-800 text-white";
        break;
      case "black":
        feedbackBtnClass += " bg-zinc-900 hover:bg-zinc-700";
        break;
      default:
        feedbackBtnClass += " bg-green-700 hover:bg-green-800";
        break;
    }
  }

  return (
    <header className={`${bgColor} ${textColor} p-3 md:p-4 rounded-2xl mb-4 md:mb-6`}>
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div 
            className="h-8 md:h-10 px-2 md:px-3 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: logoBgColor }}
          >
            <img 
              src={logoImage} 
              alt="Brennand Digital" 
              className="h-6 md:h-8 w-auto"
              style={{ 
                mixBlendMode: "multiply"
              }}
            />
          </div>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-3">
          {/* Botão Feedback */}
          <a
            href="https://forms.gle/ZATNE9Ec3ic5dFGYA"
            target="_blank"
            rel="noopener noreferrer"
            className={feedbackBtnClass}
          >
            Feedback
          </a>
          {/* Ícone de logout (desktop/header) */}
          {localStorage.getItem("brennand_auth") === "true" && (
            <button
              title="Logout"
              onClick={() => {
                localStorage.removeItem("brennand_auth");
                localStorage.removeItem("brennand_token");
                localStorage.removeItem("brennand_email");
                navigate("/auth");
              }}
              className="ml-2 p-2 rounded-full hover:bg-red-100/20 focus:outline-none transition"
              style={{ lineHeight: 0 }}
            >
              <LogOut className="h-6 w-6 text-red-700 hover:text-red-900" />
            </button>
          )}
          
          {/* Menu hambúrguer apenas para mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`${textColor} h-8 w-8 md:h-10 md:w-10 md:hidden`}>
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className={`${bgColor} ${textColor} border-none`}>
              <nav className="flex flex-col gap-6 mt-12">
                <Link to="/" className="text-xl font-semibold hover:opacity-80 transition">
                  Home
                </Link>
                <Link to="/visite" className="text-xl font-semibold hover:opacity-80 transition">
                  Visite
                </Link>
                <Link to="/exposicoes" className="text-xl font-semibold hover:opacity-80 transition">
                  Exposições
                </Link>
                <Link to="/autor" className="text-xl font-semibold hover:opacity-80 transition">
                  O autor
                </Link>
                <Link to="/historia" className="text-xl font-semibold hover:opacity-80 transition">
                  História
                </Link>
                <Link to="/eventos" className="text-xl font-semibold hover:opacity-80 transition">
                  Eventos
                </Link>
                <Link to="/rotas" className="text-xl font-semibold hover:opacity-80 transition">
                  Rotas
                </Link>
                <Link to="/avisos" className="text-xl font-semibold hover:opacity-80 transition">
                  Avisos
                </Link>
                {/* Acesso admin/voltar admin só se for admin */}
                {isAdmin() && (
                  <>
                    <Link
                      to="/admin/avisos"
                      className="text-xl font-bold text-green-200 hover:text-green-100 transition mt-3"
                    >
                      Área Admin
                    </Link>
                    {location.pathname === "/admin/avisos" && (
                      <Link
                        to="/"
                        className="text-xl font-semibold hover:opacity-80 transition text-white/80 mt-1"
                      >
                        Sair da área admin
                      </Link>
                    )}
                  </>
                )}
                {/* Botão de Logout */}
                {localStorage.getItem("brennand_auth") === "true" && (
                  <button
                    className="mt-4 text-xl font-bold text-red-300 bg-red-900/70 rounded-lg py-2 hover:bg-red-700 transition"
                    onClick={() => {
                      localStorage.removeItem("brennand_auth");
                      localStorage.removeItem("brennand_token");
                      localStorage.removeItem("brennand_email");
                      navigate("/auth");
                    }}
                  >
                    Logout
                  </button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
