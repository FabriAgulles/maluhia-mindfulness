import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-card-alt"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8 flex justify-center">
            <div className="bg-accent/10 p-6 rounded-full animate-pulse">
              <MessageCircle size={48} className="text-accent" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Da el primer paso hacia tu equilibrio
          </h1>

          <h2 className="text-lg md:text-xl text-foreground font-body italic mb-8 max-w-2xl mx-auto leading-relaxed">
            Si sientes que es momento de reconectar contigo y encontrar
            más calma en tu día a día, puedes empezar ahora, conversemos con tranquilidad sobre cómo puedo apoyarte en tu proceso de mindfulness y bienestar consciente.
          </h2>

          <Button
            onClick={() =>
              window.open(
                "https://wa.me/34697102947?text=Hola%2C+me+gustaría+recibir+más+información+sobre+las+sesiones+de+mindfulness",
                "_blank"
              )
            }
            size="lg"
            className="bg-cta-primary text-cta-primary-foreground hover:bg-cta-primary/90 font-cta font-bold text-lg md:text-xl px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 mb-8"
          >
            <MessageCircle className="mr-2" size={24} />
            Ir a WhatsApp
          </Button>

          <p className="text-foreground font-body text-sm md:text-base italic max-w-xl mx-auto">
            "Cada mensaje es una oportunidad para comenzar algo nuevo. Si has
            leído algo que resuena contigo, no dudes en escribirme."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
