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
              Experta en Mindfulness y gestión emocional
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
  Durante años trabajé gestionando equipos y procesos en entornos exigentes. Observaba la
  misma escena repetirse una y otra vez: personas corriendo, mentes saturadas, cuerpos
  tensos, días que pasaban sin ser realmente vividos. Y, sin darme cuenta, yo también estaba
  ahí.
</p>

<p>
  Habitando una vida que iba en{" "}
  <span className="font-semibold text-accent">automático</span>.
</p>

<p>
  La ansiedad, la autoexigencia y el ruido mental se volvieron parte de mi rutina. Mi cuerpo
  pedía pausa, pero mi mente seguía acelerada. Cuando me mudé de Argentina a España, ese
  desajuste interno se hizo más evidente. No era solo un cambio de país, necesitaba un
  cambio de ritmo, de mirada, de forma de{" "}
  <span className="font-semibold text-accent">habitar</span> mi vida.
</p>

<p>
  Entonces apareció el mindfulness.
</p>

<p>
  Al principio, fue una búsqueda silenciosa: entender mi mente, volver a sentir mi cuerpo,
  recuperar pequeñas presencias que había perdido. Cada práctica se convirtió en una puerta
  hacia mí misma. Aprendí a{" "}
  <span className="font-semibold text-accent">respirar</span> de nuevo, a caminar con conciencia, a reconocer mis{" "}
  <span className="font-semibold text-accent">sentidos</span>, a frenar el piloto automático y a encontrar{" "}
  <span className="font-semibold text-accent">calma</span> donde antes solo había tensión.
</p>

<p>
  Ese camino personal fue mi punto de inflexión.
</p>

<p>
  Hoy, a través de Maluhia Mindfulness, acompaño a personas y equipos que, como yo,
  sienten que la vida se vuelve demasiado rápida. Los guío con prácticas terrenales,
  sensoriales y simples para que puedan reconectar con su bienestar, su calma y su manera
  auténtica de estar en el mundo.
</p>

<p>
  Porque todos podemos vivir con más presencia, gratitud y equilibrio.
</p>

<p>
  Solo necesitamos un espacio para volver a nosotros mismos y dar el primer paso.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
