import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground font-display font-bold">Z</div>
            <span className="font-display text-xl">Zeezay<span className="text-gradient-gold">Digital</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Premium ecommerce growth, conversion optimization, and high-performance email marketing for serious Shopify brands.
          </p>
          <a href="mailto:zeezaydigital@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Mail className="h-4 w-4" /> zeezaydigital@gmail.com
          </a>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/zeezaydigital?utm_source=qr" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="https://x.com/zeezaydigital?s=21" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="X"><Twitter className="h-4 w-4" /></a>
            <a href="https://www.facebook.com/profile.php?id=100087442033222" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/abdulazeez-tiamiyu-04122a322" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Shopify Marketing</Link></li>
            <li><Link to="/services" className="hover:text-primary">CRO & SEO</Link></li>
            <li><Link to="/services" className="hover:text-primary">Meta & Google Ads</Link></li>
            <li><Link to="/email-marketing" className="hover:text-primary">Klaviyo & Brevo</Link></li>
            <li><Link to="/services" className="hover:text-primary">Store Redesign</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Ecommerce growth strategies, weekly.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="email" placeholder="you@brand.com" className="w-full pl-9 pr-3 py-2.5 rounded-full bg-input border border-border text-sm focus:outline-none focus:border-primary" />
            </div>
            <button className="px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-gold)] transition">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-2">
          <p>© 2020 ZeezayDigital. All Rights Reserved.</p>
          <p>Crafted for ecommerce brands that scale.</p>
        </div>
      </div>
    </footer>
  );
}
