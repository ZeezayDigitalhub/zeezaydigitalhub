import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/email-marketing", label: "Email" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground font-display font-bold shadow-[var(--shadow-gold)]">Z</div>
          <span className="font-display text-xl tracking-tight">
            Zeezay<span className="text-gradient-gold">Digital</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://www.instagram.com/zeezaydigital" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/abdulazeez-tiamiyu-04122a322" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          <a href="https://www.facebook.com/profile.php?id=100087442033222&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-gold)] transition-all"
          >
            Book Consultation
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
