import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceIndividual from "@/assets/service-individual.jpg";
import serviceGroup from "@/assets/service-group.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceWorkshop from "@/assets/service-workshop.jpg";

interface Service {
  id: number;
  title: string;
  price: string;
  pricePromo?: string;
  ctaText: string;
  whatsappLink: string;
  shortDesc: string;
  longDesc: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Sesiones 1:1 de Mindfulness",
    price: "€62 por sesión",
    pricePromo: "€40",
    ctaText: "Agendar mi sesión 1:1",
    whatsappLink: "https://wa.me/34697102947?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20sesiones%201%3A1%20de%20mindfulness",
    shortDesc:
      "Un espacio personalizado para recorrer un programa de 8 semanas que te acompaña a reconectar con tu respiración, tu cuerpo y tus emociones, avanzando hacia una vida más consciente, compasiva y en equilibrio.",
    longDesc:
      "Cada semana trabajaremos un aspecto clave: respiración, fortalezas positivas, reconocimiento del cuerpo y de los sentidos, compasión, empatía, perdón y gratitud. Un recorrido profundo y adaptado a ti.",
    image: serviceIndividual,
  },
  {
    id: 2,
    title: "Sesiones Grupales de Mindfulness",
    price: "€40 por sesión/persona",
    pricePromo: "€26 por sesión/persona",
    ctaText: "Reservar mi lugar",
    whatsappLink: "https://wa.me/34697102947?text=Hola!%20Tengo%20inter%C3%A9s%20en%20las%20sesiones%20grupales%20de%20mindfulness%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n",
    shortDesc:
      "Un espacio reducido de hasta 6 personas para vivir la práctica de forma compartida. A través de la escucha y el intercambio, descubrirás nuevas perspectivas y enriquecerás tu propio proceso.",
    longDesc:
      "Cada semana se combina la práctica guiada con la experiencia de comunidad: aprender de los demás, apoyarse mutuamente y generar un vínculo que multiplica la motivación y el compromiso con el mindfulness.",
    image: serviceGroup,
  },
  {
    id: 3,
    title: "Mindfulness para Empresas",
    price: "A consultar",
    ctaText: "Solicitar propuesta",
    whatsappLink: "https://wa.me/34697102947?text=Hola!%20Quisiera%20conocer%20m%C3%A1s%20sobre%20el%20programa%20de%20mindfulness%20para%20empresas",
    shortDesc:
      "Programa de 8 semanas diseñado para equipos y organizaciones que buscan reducir el estrés, aumentar la productividad y fortalecer las relaciones laborales.",
    longDesc:
      "Los encuentros semanales trabajan habilidades esenciales para el entorno corporativo: respiración para gestionar el estrés, empatía y escucha activa, resolución de conflictos desde la calma y creación de un ambiente laboral más humano y motivador.",
    image: serviceCorporate,
  },
  {
    id: 4,
    title: "Workshop personalizado de Mindfulness",
    price: "A consultar",
    ctaText: "Quiero este taller",
    whatsappLink: "https://wa.me/34697102947?text=Hola!%20Estoy%20interesado%2Fa%20en%20el%20workshop%20de%20mindfulness%20y%20quisiera%20saber%20m%C3%A1s",
    shortDesc:
      "Un taller práctico y vivencial, de manera personalizada para grupos o comunidades que quieran integrar mindfulness a su espacio, para sumergirte en el mindfulness en solo 4 horas, con técnicas que podrás llevar a tu día a día.",
    longDesc:
      "Este workshop se lleva a cabo en colaboración con lugares de yoga, centros de bienestar o instituciones que buscan brindar a su comunidad una experiencia transformadora. Incluye prácticas de respiración, meditación guiada, ejercicios de atención plena y herramientas para integrar el mindfulness en la vida cotidiana.",
    image: serviceWorkshop,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = services.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setExpandedCard(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setExpandedCard(null);
  };

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentIndex);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) / (carouselRef.current.offsetWidth / itemsPerPage);
    const newIndex = Math.round(scrollLeft + walk);
    const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(currentIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) / (carouselRef.current.offsetWidth / itemsPerPage);
    const newIndex = Math.round(scrollLeft + walk);
    const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Explora los caminos hacia tu bienestar
          </h2>
          <p className="text-base md:text-lg text-foreground font-body max-w-2xl mx-auto">
            Cada servicio está diseñado para acompañarte, de forma online, a
            integrar la atención plena en tu vida.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-card p-3 rounded-full shadow-lg disabled:opacity-30 hover:bg-card-alt transition-all duration-300"
                aria-label="Previous services"
              >
                <ChevronLeft className="text-primary" size={24} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-card p-3 rounded-full shadow-lg disabled:opacity-30 hover:bg-card-alt transition-all duration-300"
                aria-label="Next services"
              >
                <ChevronRight className="text-primary" size={24} />
              </button>
            </>
          )}

          {/* Cards Container */}
          <div 
            className="overflow-hidden"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                pointerEvents: isDragging ? 'none' : 'auto',
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`flex-shrink-0 px-2 md:px-4 py-5 transition-all duration-500 ${
                    isMobile ? "w-full" : "w-1/3"
                  } ${
                    expandedCard === service.id ? "scale-105 z-20" : "scale-100"
                  }`}
                >
                  <div
                    className={`bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col ${
                      expandedCard === service.id ? "ring-2 ring-accent" : ""
                    }`}
                    onClick={() => toggleExpand(service.id)}
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="py-5 px-5 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <div className="mb-4">
                        {service.pricePromo ? (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-muted-foreground line-through text-sm">
                              {service.price}
                            </span>
                            <span className="text-accent font-bold text-lg">
                              {service.pricePromo}
                            </span>
                          </div>
                        ) : (
                          <span className="text-accent font-bold text-lg">
                            {service.price}
                          </span>
                        )}
                      </div>
                      <p className="text-foreground font-body mb-4 text-sm md:text-base">
                        {service.shortDesc}
                      </p>
                      {expandedCard === service.id && (
                        <p className="text-foreground font-body mb-4 text-sm md:text-base animate-fadeIn">
                          {service.longDesc}
                        </p>
                      )}
                      <div className="mt-auto space-y-2 flex flex-col items-center">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(service.whatsappLink, "_blank");
                          }}
                          className="px-8 text-sm py-2.5 bg-cta-primary text-cta-primary-foreground hover:bg-cta-primary/90 font-cta font-bold"
                        >
                          {service.ctaText}
                        </Button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(service.id);
                          }}
                          className="w-full text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          {expandedCard === service.id ? "Ver menos" : "Ver más"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="bg-card p-3 rounded-full shadow-lg disabled:opacity-30"
                aria-label="Previous service"
              >
                <ChevronLeft className="text-primary" size={24} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="bg-card p-3 rounded-full shadow-lg disabled:opacity-30"
                aria-label="Next service"
              >
                <ChevronRight className="text-primary" size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
