import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="font-heading text-xl md:text-2xl font-semibold text-primary">
              Maluhia Mindfulness
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("ebook")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Ebook
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Contacto
              </button>
              <Button
                onClick={() => window.open("https://wa.me/34697102947?text=Hola%2C+me+gustaría+recibir+más+información+sobre+las+sesiones+de+mindfulness", "_blank")}
                className="bg-cta-primary text-cta-primary-foreground hover:bg-cta-primary/90 font-cta font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Agendar Sesión
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 md:top-20 right-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-64 bg-card border-l border-border z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-left text-foreground hover:text-primary transition-colors duration-300 py-2"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-left text-foreground hover:text-primary transition-colors duration-300 py-2"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("ebook")}
            className="text-left text-foreground hover:text-primary transition-colors duration-300 py-2"
          >
            Ebook
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-left text-foreground hover:text-primary transition-colors duration-300 py-2"
          >
            Contacto
          </button>
          <Button
            onClick={() => window.open("https://wa.me/34697102947?text=Hola%2C+me+gustaría+recibir+más+información+sobre+las+sesiones+de+mindfulness", "_blank")}
            className="mt-4 bg-cta-primary text-cta-primary-foreground hover:bg-cta-primary/90 font-cta font-bold"
          >
            Agendar Sesión
          </Button>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
