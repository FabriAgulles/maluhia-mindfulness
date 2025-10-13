import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meditation.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 md:pt-24 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block order-1">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <img
                src={heroImage}
                alt="Peaceful meditation scene"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm md:text-base text-muted-foreground mb-4 font-body">
                Maluhia Mindfulness
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Un espacio para habitar la calma y reencontrarte contigo mismo.
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-8 md:mb-12 font-body font-light italic">
                "Respira, sonríe y vuelve al presente, ahí es donde tu vida sucede."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("servicios")}
                  size="lg"
                  className="bg-cta-primary text-cta-primary-foreground hover:bg-cta-primary/90 font-cta font-bold text-base md:text-lg px-4 sm:px-8 py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  Descubre los servicios
                </Button>
                <Button
                  onClick={() => scrollToSection("ebook")}
                  size="lg"
                  className="bg-cta-secondary text-cta-secondary-foreground hover:bg-cta-secondary/90 font-cta font-bold text-base md:text-lg px-4 sm:px-8 py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  Comienza el Ebook 8 semanas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
