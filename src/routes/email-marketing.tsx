import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Mail, Send, Inbox, Heart, ShoppingCart, Repeat, Newspaper } from "lucide-react";
import emailFlow from "@/assets/email-flow.jpg";
import klaviyo from "@/assets/case-klaviyo.jpg";
import brevo from "@/assets/case-brevo.jpg";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/email-marketing")({
  head: () => ({
    meta: [
      { title: "Email Marketing — Klaviyo & Brevo Specialist | ZeezayDigital" },
      { name: "description", content: "Recover lost sales, increase repeat purchases, and maximize LTV with high-converting email marketing strategies powered by Klaviyo and Brevo." },
      { property: "og:title", content: "Email Marketing & Customer Retention" },
      { property: "og:description", content: "Klaviyo & Brevo email automation for ecommerce growth." },
    ],
  }),
  component: EmailPage,
});

const flows = [
  { icon: Heart, t: "Welcome Series", d: "First-impression sequences that convert subscribers into buyers within 7 days." },
  { icon: ShoppingCart, t: "Abandoned Cart", d: "Multi-touch recovery with dynamic discount logic and SMS follow-up." },
  { icon: Repeat, t: "Post-Purchase", d: "Education, cross-sell, and review requests on autopilot." },
  { icon: Newspaper, t: "Newsletter Calendar", d: "Editorial campaigns that build brand love and revenue." },
  { icon: Send, t: "VIP & Loyalty", d: "Tiered programs that reward your best customers and lift LTV." },
  { icon: Inbox, t: "Win-Back & Sunset", d: "Re-activate dormant subscribers and protect deliverability." },
];

function EmailPage() {
  return (
    <div>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-primary">Email & Retention</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Turn email into your <span className="text-gradient-gold">most profitable channel.</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I help ecommerce brands recover lost sales, increase repeat purchases, and maximize customer lifetime value using high-converting email marketing strategies with Klaviyo and Brevo.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition">
                Book Email Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition">
                See Email Case Studies
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden hairline ring-gold">
              <img src={emailFlow} alt="Email automation flow diagram" className="w-full" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[{v:32,s:"%",l:"Avg revenue from email"},{v:46,s:"%",l:"Open rate uplift"},{v:19,s:"%",l:"Cart recovery rate"},{v:154,s:"%",l:"LTV growth"}].map((s,i) => (
            <Reveal key={i} delay={i*0.08}><Counter to={s.v} suffix={s.s} /><div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div></Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">Flows that pay for themselves.</h2>
              <p className="mt-3 text-muted-foreground">Every flow is designed, written, and engineered for revenue — not vanity opens.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flows.map((f, i) => (
              <Reveal key={f.t} delay={i*0.05}>
                <div className="group rounded-2xl glass p-7 h-full hover:border-primary/50 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)] transition">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          {[{img:klaviyo,t:"Klaviyo Specialist",d:"Advanced segmentation, predictive analytics, and revenue-optimized flows."},
            {img:brevo,t:"Brevo Specialist",d:"Brevo automations, transactional, and full-stack campaign delivery."}].map((b,i) => (
            <Reveal key={b.t} delay={i*0.1}>
              <div className="rounded-3xl overflow-hidden hairline group">
                <div className="aspect-[16/10] overflow-hidden"><img src={b.img} alt={b.t} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" /></div>
                <div className="p-7 bg-card/60">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-2xl font-semibold">{b.t}</h3>
                  <p className="mt-2 text-muted-foreground">{b.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold">Let's audit your <span className="text-gradient-gold">email engine.</span></h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition">
              Get a free email audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
