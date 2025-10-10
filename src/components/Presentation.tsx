import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const Presentation = () => {
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
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon with rotation animation */}
          <div className="flex justify-center mb-6">
            <div className="animate-rotateSubtle">
              <Sparkles size={48} className="text-accent" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-8">
            Mindfulness para transformar tu día a día
          </h2>

          <div className="text-base md:text-lg text-foreground font-body leading-relaxed space-y-4 text-justify">
            <p>
              En Maluhia Mindfulness creemos que el verdadero{" "}
              <span className="font-semibold text-accent">bienestar</span> nace
              cuando dejamos de vivir corriendo entre multitareas y
              preocupaciones, y aprendemos a habitar el{" "}
              <span className="font-semibold text-accent">presente</span>.
              Nuestra misión es acompañar a las personas a reducir las tensiones
              diarias a través de prácticas simples y profundas que reconectan
              con el cuerpo, la respiración y el entorno.
            </p>
            <p>
              Nuestra visión es clara: contribuir a una sociedad que avance hacia
              un bienestar colectivo, donde cada persona pueda vivir con más
              consciencia,{" "}
              <span className="font-semibold text-accent">calma</span> y
              plenitud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
