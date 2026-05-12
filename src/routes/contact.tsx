import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { MessageCircle, Linkedin, Calendar, Briefcase, Send, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Consultation | ZeezayDigital" },
      { name: "description", content: "Book a free consultation with ZeezayDigital. Connect via WhatsApp, LinkedIn, Fiverr, Upwork, or Calendly." },
      { property: "og:title", content: "Contact ZeezayDigital" },
      { property: "og:description", content: "Get in touch and start scaling your ecommerce brand." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-primary">Contact</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Let's grow your <span className="text-gradient-gold">store.</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Tell me about your brand, your goals, and where you're stuck. I respond within 24 hours.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl hairline hover:border-primary/40 transition">
                <MessageCircle className="h-5 w-5 text-primary" /><div><div className="text-sm font-medium">WhatsApp</div><div className="text-xs text-muted-foreground">Quick chat</div></div>
              </a>
              <a href="https://www.linkedin.com/in/abdulazeez-tiamiyu-04122a322" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl hairline hover:border-primary/40 transition">
                <Linkedin className="h-5 w-5 text-primary" /><div><div className="text-sm font-medium">LinkedIn</div><div className="text-xs text-muted-foreground">Connect</div></div>
              </a>
              <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl hairline hover:border-primary/40 transition">
                <Briefcase className="h-5 w-5 text-primary" /><div><div className="text-sm font-medium">Fiverr</div><div className="text-xs text-muted-foreground">Hire on Fiverr</div></div>
              </a>
              <a href="https://www.upwork.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl hairline hover:border-primary/40 transition">
                <Briefcase className="h-5 w-5 text-primary" /><div><div className="text-sm font-medium">Upwork</div><div className="text-xs text-muted-foreground">Hire on Upwork</div></div>
              </a>
              <a href="mailto:zeezaydigital@gmail.com" className="col-span-2 flex items-center gap-3 p-4 rounded-xl hairline hover:border-primary/40 transition">
                <Mail className="h-5 w-5 text-primary" /><div><div className="text-sm font-medium">zeezaydigital@gmail.com</div><div className="text-xs text-muted-foreground">Email — replies within 24h</div></div>
              </a>
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="col-span-2 flex items-center gap-3 p-4 rounded-xl bg-primary/10 hairline border-primary/40 hover:bg-primary/20 transition">
                <Calendar className="h-5 w-5 text-primary" /><div><div className="text-sm font-medium">Calendly</div><div className="text-xs text-muted-foreground">Book a free 30-min consultation</div></div>
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-border/60">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow</div>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/zeezaydigital?utm_source=qr" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                <a href="https://x.com/zeezaydigital?s=21" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="X"><Twitter className="h-4 w-4" /></a>
                <a href="https://www.facebook.com/profile.php?id=100087442033222" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
                <a href="https://www.linkedin.com/in/abdulazeez-tiamiyu-04122a322" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full hairline hover:border-primary hover:text-primary transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl glass p-8 space-y-5"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-primary/20 text-primary">
                    <Mail className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">Message received.</h3>
                  <p className="mt-2 text-muted-foreground">I'll be back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Business Name" name="business" />
                    <Select label="Service Needed" name="service" options={["Shopify Marketing","SEO","CRO","Meta Ads","Google Ads","Pinterest","Klaviyo","Brevo","Store Redesign","Full Growth Retainer"]} />
                  </div>
                  <Select label="Budget" name="budget" options={["< $1,000","$1,000–$3,000","$3,000–$7,000","$7,000+"]} />
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                    <textarea name="message" rows={5} required className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Tell me about your store and goals…" />
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <select name={name} className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
