import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/34697102947?text=Hola%2C+me+gustaría+recibir+más+información+sobre+las+sesiones+de+mindfulness",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-cta-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
