import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

interface HeaderProps {
  variant?: "sage" | "ocean" | "terracotta" | "cream" | "black";
  showSearch?: boolean;
}

export const Header = ({ variant = "sage", showSearch = false }: HeaderProps) => {
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
          {showSearch && (
            <div className="hidden sm:block max-w-xs w-48 md:w-64">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-70 ${variant === "cream" ? "text-foreground" : "text-white"}`} />
                <Input
                  placeholder="Buscar"
                  className={`pl-10 text-sm md:text-base ${
                    variant === "cream" 
                      ? "bg-white/80 border-foreground/20 text-foreground placeholder:text-foreground/50" 
                      : variant === "black"
                      ? "bg-white/10 border-white/20 text-white placeholder:text-white/70"
                      : "bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  }`}
                />
              </div>
            </div>
          )}
          
          {!showSearch && <Search className={`h-4 w-4 md:h-5 md:w-5 ${variant === "cream" ? "text-foreground" : "text-white"}`} />}
          
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
