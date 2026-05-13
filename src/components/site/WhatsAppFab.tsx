import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppFab() {
  const href = "https://wa.me/16822965077";
  const label = "Chat on WhatsApp · +1 (682) 296-5077";
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center pointer-events-none">
      <span
        role="tooltip"
        className={`mr-3 px-3 py-2 rounded-full bg-card border border-border text-xs font-medium shadow-lg transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:block ${
          open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        {label}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onTouchStart={() => setOpen((v) => !v)}
        className="pointer-events-auto relative inline-grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
        <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </a>
    </div>
  );
}
