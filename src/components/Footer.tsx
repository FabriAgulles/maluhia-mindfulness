import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Logo */}
          <div className="font-heading text-lg font-semibold text-primary">
            Maluhia Mindfulness
          </div>

          {/* Slogan */}
          <div className="font-body italic text-foreground">
            Disfruta el aquí y ahora.
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground">
            © Maluhia Mindfulness - Todos los derechos reservados
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/maluhiamindfulness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/maluhia-mindfulness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@maluhiamindfulness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Credits */}
          <div className="text-muted-foreground">
            Hecho por{" "}
            <a
              href="https://t2xlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              t2xlabs
            </a>{" "}
            con{" "}
            <a
              href="https://t2xlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-110 transition-transform"
            >
              ❤️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
