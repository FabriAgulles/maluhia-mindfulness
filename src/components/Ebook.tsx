import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

const testimonials = [
  {
    id: 1,
    text: "Me ha resultado muy útil, en especial las prácticas informales.",
    author: "Graciela",
  },
  {
    id: 2,
    text: "En solo dos semanas ya notaba menos ansiedad y más claridad mental. Muy fácil de seguir.",
    author: "Andrea",
  },
  {
    id: 3,
    text: "Siempre me costó sostener hábitos, con este ebook logré incorporar Mindfulnees en mi rutina.",
    author: "Fabricio",
  },
];

const Ebook = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="ebook"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card-alt"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`bg-card rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Content Section - Left (larger) */}
            <div className="lg:col-span-3 p-8 md:p-12 order-2 lg:order-1">
              <div className="animate-fadeInUp">
                <p className="text-sm text-muted-foreground mb-2 font-body">
                  Manual de 8 semanas mindfulness
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                  Tu guía esencial de mindfulness en 8 semanas
                </h2>
                <div className="text-foreground font-body mb-8 space-y-4 text-sm md:text-base">
                  <p>
                    Este ebook es una guía práctica y transformadora para
                    incorporar el mindfulness en tu vida. Durante 8 semanas
                    recorrerás ejercicios sencillos pero profundos que te
                    ayudarán a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reducir el estrés y la ansiedad</li>
                    <li>Reconectar con tu respiración, tu cuerpo y tus sentidos</li>
                    <li>Practicar la compasión, la gratitud y el perdón</li>
                    <li>
                      Disfrutar más del presente sin vivir en piloto automático
                    </li>
                  </ul>
                </div>
                <Button
                  onClick={() => window.open("https://hotmart.com/es/marketplace/productos/8-semanas-de-mindfulness/D102428798S", "_blank")}
                  size="lg"
                  className="bg-cta-secondary text-cta-secondary-foreground hover:bg-cta-secondary/90 font-cta font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8"
                >
                  Quiero mi ebook
                </Button>

                {/* Testimonials */}
                <div className="mt-8 md:mt-12">
                  {!isMobile ? (
                    // Desktop: Show all testimonials
                    <div className="grid md:grid-cols-3 gap-4">
                      {testimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-background p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          <Quote
                            className="text-accent mb-2"
                            size={24}
                          />
                          <p className="text-foreground text-sm font-body italic mb-3">
                            "{testimonial.text}"
                          </p>
                          <p className="text-primary font-semibold text-sm">
                            – {testimonial.author}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Mobile: Carousel
                    <div className="relative">
                      <div className="bg-background p-6 rounded-xl shadow-md">
                        <Quote
                          className="text-accent mb-3"
                          size={28}
                        />
                        <p className="text-foreground text-base font-body italic mb-4">
                          "{testimonials[currentTestimonial].text}"
                        </p>
                        <p className="text-primary font-semibold">
                          – {testimonials[currentTestimonial].author}
                        </p>
                      </div>
                      <div className="flex justify-center gap-4 mt-4">
                        <button
                          onClick={prevTestimonial}
                          className="bg-card p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                          aria-label="Previous testimonial"
                        >
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="bg-card p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                          aria-label="Next testimonial"
                        >
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Image Section - Right (smaller) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="h-full min-h-[300px] lg:min-h-full relative">
                <img
                  src={ebookCover}
                  alt="Manual de 8 semanas mindfulness - Ebook cover"
                  className="w-full h-full object-cover lg:object-contain lg:p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
