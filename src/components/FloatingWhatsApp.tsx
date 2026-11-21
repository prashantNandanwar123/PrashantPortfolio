import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918390535956?text=Hello%20Prashant%2C%20I%20would%20like%20to%20discuss%20a%20project.";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Prashant on WhatsApp"
    title="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
  >
    <MessageCircle size={29} strokeWidth={2.4} />
    <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
      <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
    </span>
  </a>
);

export default FloatingWhatsApp;
