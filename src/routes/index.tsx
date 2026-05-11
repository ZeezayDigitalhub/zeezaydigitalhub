import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag, Mail, Search, Target, BarChart3, Users, ChevronRight, Star } from "lucide-react";
import heroDash from "@/assets/hero-dashboards.jpg";
import portrait from "@/assets/zeezay-portrait.png";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZeezayDigital — Shopify Growth & Ecommerce Marketing" },
      { name: "description", content: "Most ecommerce brands don't have a traffic problem—they have a conversion problem. Premium Shopify, CRO, SEO, ads, and email marketing." },
      { property: "og:title", content: "ZeezayDigital — Shopify Growth Expert" },
      { property: "og:description", content: "Increase visibility, improve conversions, recover lost sales, and scale profitably." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { v: 220, s: "+", l: "Stores Optimized" },
  { v: 18, s: "M+", l: "Revenue Generated", p: "$" },
  { v: 540, s: "+", l: "Campaigns Managed" },
  { v: 97, s: "%", l: "Client Satisfaction" },
];

const services = [
  { icon: ShoppingBag, t: "Shopify Marketing", d: "Conversion-focused store growth from foundation to scale." },
  { icon: Search, t: "SEO Strategy", d: "Shopify and ecommerce SEO that compounds for years." },
  { icon: Target, t: "Paid Ads", d: "Profitable Meta, Google, and Pinterest campaigns." },
  { icon: Mail, t: "Email Marketing", d: "Klaviyo & Brevo flows that recover sales and lift LTV." },
  { icon: TrendingUp, t: "CRO", d: "Data-driven optimization across every revenue page." },
  { icon: Users, t: "Retention", d: "Customer lifecycle systems that keep buyers coming back." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hairline text-xs uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Shopify Growth Specialist
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Most ecommerce brands don't have a traffic problem.{" "}
              <span className="text-gradient-gold">They have a conversion problem.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I help Shopify and ecommerce brands increase visibility, improve conversion rates, recover lost sales, and scale profitably with proven marketing strategies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition-all">
                View Portfolio <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition">
                Book Consultation
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground hover:border-primary/60 transition">
                View Case Studies
              </Link>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <span>Trusted by 220+ ecommerce brands</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden hairline ring-gold">
              <img src={heroDash} alt="Ecommerce growth dashboards" className="w-full h-auto" width={1536} height={1024} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float w-56 hidden md:block">
              <div className="text-xs text-muted-foreground">Conversion Rate</div>
              <div className="font-display text-2xl text-primary">+184%</div>
              <div className="h-1 mt-2 bg-primary/20 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary/40 shimmer" /></div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-float w-48 hidden md:block" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs text-muted-foreground">ROAS</div>
              <div className="font-display text-2xl text-accent">7.4x</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center">
              <Counter to={s.v} suffix={s.s} prefix={s.p} />
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl rounded-3xl" />
              <img src={portrait} alt="Abdulazeez Tiamiyu — ZeezayDigital founder" className="relative rounded-3xl hairline w-full" width={800} height={1000} loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-xs uppercase tracking-widest text-primary">About ZeezayDigital</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">A foundation-first approach to <span className="text-gradient-gold">ecommerce growth.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm a Digital Marketing Expert and Ecommerce Marketing Specialist focused on Shopify growth, conversion rate optimization, SEO strategy, paid acquisition, and high-performance email marketing with Klaviyo and Brevo.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Shopify Growth Expert", "CRO & SEO Specialist", "Paid Ads Strategist", "Klaviyo & Brevo Email Marketing"].map((t) => (
                <li key={t} className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-primary" />{t}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">Read full story <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-28 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-widest text-primary">What I Do</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">End-to-end ecommerce growth.</h2>
              <p className="mt-4 text-muted-foreground">From the moment a visitor lands to the moment they become a repeat customer.</p>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.07}>
                <div className="group relative h-full rounded-2xl glass p-7 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-widest text-primary">Why ZeezayDigital</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built for serious brands.</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { t: "Data-driven strategies", d: "Every decision backed by analytics, not opinions." },
              { t: "Foundation-first", d: "We fix the leaks before scaling spend." },
              { t: "CRO-focused", d: "Conversion is the multiplier on every other channel." },
              { t: "Long-term growth", d: "Built for compounding, not one-off wins." },
              { t: "Transparent reporting", d: "You see exactly what's working and why." },
              { t: "Personalized roadmaps", d: "No copy-paste playbooks—custom to your store." },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.05}>
                <div className="rounded-2xl p-7 hairline bg-card/40 hover:border-primary/40 transition h-full">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-luxe ring-gold p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to scale <span className="text-gradient-gold">profitably?</span></h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Book a consultation and let's audit your store, ads, and email engine.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
