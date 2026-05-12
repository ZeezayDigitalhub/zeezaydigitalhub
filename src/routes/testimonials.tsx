import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Star, Quote, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Client Reviews | ZeezayDigital" },
      { name: "description", content: "What ecommerce founders say about working with ZeezayDigital — increased sales, higher conversions, better ROAS, and successful email campaigns." },
      { property: "og:title", content: "Client Testimonials — ZeezayDigital" },
      { property: "og:description", content: "Real reviews from Shopify and ecommerce brand owners." },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Olivia M.", role: "Founder, ATELIER NOIR", img: "https://i.pravatar.cc/120?img=47", text: "ZeezayDigital rebuilt our store and email engine from scratch. Conversion is up 3.4× and email is now 34% of revenue. Honestly the best agency partnership we've had." },
  { name: "Daniel K.", role: "CEO, PEAK GEAR", img: "https://i.pravatar.cc/120?img=12", text: "Our ROAS jumped from 1.8x to 4.6x while we scaled spend 7×. The CRO sprint alone paid for the entire engagement in weeks." },
  { name: "Amara O.", role: "Founder, GLOW LAB", img: "https://i.pravatar.cc/120?img=32", text: "Organic traffic went 22× in 8 months. Page-1 rankings on commercial keywords I never thought we'd compete for. SEO that actually drives revenue." },
  { name: "James L.", role: "Owner, URBAN ROAST", img: "https://i.pravatar.cc/120?img=15", text: "The Brevo migration and automations recovered $32k a month we were leaving on the table. Communication is transparent and weekly." },
  { name: "Priya S.", role: "Founder, VELVET BLOOM", img: "https://i.pravatar.cc/120?img=44", text: "Klaviyo flows that finally make sense. Open rates 46%, abandoned cart recovery 19%. Worth every dollar." },
  { name: "Marcus T.", role: "CMO, MAISON BELL", img: "https://i.pravatar.cc/120?img=33", text: "Scaled Meta ads from $30k to $220k/mo with ROAS holding above 4×. Foundation-first approach made the difference." },
];

const videos = [
  { title: "Walker Wood Gifts — Client Review", subtitle: "CRO + Shopify growth case", href: "https://drive.google.com/file/d/1Ue-rX4yI4n0sJvDI-bcH7JwJJbp7Ddr-/view?usp=drive_link" },
  { title: "Walker Wood Gifts — Founder Testimonial", subtitle: "Results & partnership recap", href: "https://drive.google.com/file/d/1jsTgYnALJWnkbyK0e9D29NkNynxpuDZB/view?usp=drive_link" },
];

function TestimonialsPage() {
  return (
    <div>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-primary">Testimonials</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Loved by <span className="text-gradient-gold">serious brands.</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Real founders. Real results. Real revenue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i%3)*0.08}>
              <div className="group relative h-full rounded-2xl glass p-7 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)] transition">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/30" />
                <div className="flex">{[...Array(5)].map((_,k)=><Star key={k} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
                  <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30" loading="lazy" />
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Video <span className="text-gradient-gold">reviews.</span></h2>
            <p className="mt-3 text-center text-muted-foreground">Hear it directly from the founders.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i*0.1}>
                <a href={v.href} target="_blank" rel="noreferrer" className="group block relative rounded-3xl overflow-hidden hairline aspect-video bg-luxe hover:border-primary/60 transition">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="flex flex-col items-center gap-3">
                      <PlayCircle className="h-20 w-20 text-primary group-hover:scale-110 transition drop-shadow-[0_0_30px_oklch(0.82_0.14_85_/_0.6)]" />
                      <div className="font-display text-xl text-center px-4">{v.title}</div>
                      <div className="text-xs text-muted-foreground">{v.subtitle} · Watch on Google Drive</div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
