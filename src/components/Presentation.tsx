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
  En Maluhia Mindfulness creemos que el{" "}
  <span className="font-semibold text-accent">bienestar</span> real nace cuando dejamos de vivir en
  automático y empezamos a habitar nuestra vida con{" "}
  <span className="font-semibold text-accent">presencia</span>. No se trata de agregar más
  tareas, ni de técnicas complejas. Se trata de volver al cuerpo, a los sentidos, a la respiración.
</p>

<p>
  Acompañamos a personas que buscan reducir ansiedad, estrés, tensión mental y
  desconexión, a través de prácticas simples, sensoriales y terrenales basadas en mindfulness
  cotidiano y neurociencia accesible.
</p>

<p>
  Cada encuentro, cada práctica y cada guía es una invitación a descubrir tus propias
  fortalezas internas, cultivar <span className="font-semibold text-accent">calma</span> sin presión y{" "}
  <span className="font-semibold text-accent">transformar</span> la forma en la que vives, sientes
  y te relacionas con tu entorno.
</p>

<p>
  Nuestra visión es clara: contribuir a un bienestar colectivo donde cada persona pueda vivir
  con más consciencia, presencia y plenitud. Una vida más lenta. Más humana. Más habitada.
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
