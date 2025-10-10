import { useEffect, useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
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
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Title, Subtitle, Photo (Desktop) */}
          <div
            className={`order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 text-center md:text-left">
              Sobre mí
            </h2>
            <p className="text-lg md:text-xl text-foreground font-body mb-6 text-center md:text-left">
              Experta en Mindfulness, Psicología Positiva y Gestión Emocional
              (IEPP – España), con más de 3 años acompañando a personas y
              equipos hacia un bienestar más consciente.
            </p>
            <div className="flex justify-center md:justify-start">
              <img
                src={profilePhoto}
                alt="Experta en Mindfulness - Profile"
                className="rounded-2xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Description */}
          <div
            className={`order-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="text-foreground font-body text-sm md:text-base leading-relaxed space-y-4 text-justify">
              <p>
                Durante mis años gestionando personas en el mundo corporativo,
                fui testigo del impacto que el estrés, la falta de atención
                plena y la desconexión emocional tienen en las personas y los
                equipos. Esa experiencia despertó en mí la necesidad de buscar
                herramientas más profundas y humanas para acompañar el bienestar
                integral.
              </p>
              <p>
                Así nació mi camino hacia el mindfulness y la psicología
                positiva. Me formé en el IEPP de España, donde descubrí que la
                verdadera transformación comienza cuando aprendemos a habitar el
                presente con consciencia, compasión y equilibrio. Hoy me dedico a
                acompañar a personas y organizaciones a cultivar la atención
                plena como un recurso esencial para la vida diaria, el bienestar
                emocional y el desarrollo personal.
              </p>
              <p>
                Cada sesión, taller o programa que diseño está pensado desde la
                escucha, la conexión y el respeto por cada proceso individual.
                Porque creo profundamente que cuando nos detenemos, respiramos y
                volvemos al presente, podemos transformar nuestro día a día y, con
                ello, nuestra vida.
              </p>
              <p>
                Si sientes que ha llegado el momento de reconectar contigo mismo
                y encontrar más calma, será un honor acompañarte a dar el primer
                paso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
