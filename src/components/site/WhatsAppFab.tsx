import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const href = "https://wa.me/16822965077";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span className="hidden sm:block mr-3 px-3 py-2 rounded-full bg-card hairline text-xs font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition shadow-lg">
        Chat on WhatsApp · +1 (682) 296-5077
      </span>
      <span className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
        <span className="relative h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition">
          <MessageCircle className="h-6 w-6" />
        </span>
      </span>
    </a>
  );
}
