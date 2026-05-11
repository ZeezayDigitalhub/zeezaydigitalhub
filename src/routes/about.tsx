import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/zeezay-portrait.png";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ZeezayDigital | Ecommerce Marketing Specialist" },
      { name: "description", content: "Meet Abdulazeez Tiamiyu, founder of ZeezayDigital. Shopify growth expert specializing in CRO, SEO, paid ads, and email marketing for ecommerce brands." },
      { property: "og:title", content: "About ZeezayDigital" },
      { property: "og:description", content: "A foundation-first approach to ecommerce growth." },
    ],
  }),
  component: AboutPage,
});

const expertise = [
  "Shopify Marketing", "Shopify SEO", "Shopify Store Design & Redesign",
  "Ecommerce Marketing", "Conversion Rate Optimization (CRO)", "Google Ads",
  "Meta Ads", "Pinterest Marketing", "Product Page Optimization",
  "Sales Funnel Design", "Affiliate Recruitment", "Email Marketing",
  "Klaviyo Email Marketing", "Brevo Email Marketing", "Ecommerce Retention Marketing",
  "Customer Lifecycle Marketing", "Email Automation Setup",
];

const roles = [
  "Digital Marketing Expert",
  "Ecommerce Marketing Specialist",
  "Shopify Growth Expert",
  "CRO Specialist",
  "SEO Strategist",
  "Paid Ads Expert",
  "Email Marketing Specialist",
];

function AboutPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl rounded-3xl" />
              <img src={portrait} alt="Abdulazeez Tiamiyu" className="relative rounded-3xl hairline w-full" width={800} height={1000} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-widest text-primary">About</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Building <span className="text-gradient-gold">elite</span> ecommerce growth engines.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              ZeezayDigital is a premium ecommerce marketing studio led by Abdulazeez Tiamiyu. We work with Shopify store owners, ecommerce brands, Airbnb businesses, and online entrepreneurs ready to grow sales, traffic, conversions, and customer retention with strategy that actually compounds.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don't chase trends. We build systems—across acquisition, conversion, and retention—that turn visitors into buyers and buyers into a community.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="px-3 py-1.5 rounded-full hairline text-xs text-primary">{r}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-primary">Areas of Expertise</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">A complete growth toolkit.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {expertise.map((e, i) => (
              <Reveal key={e} delay={i * 0.02}>
                <div className="flex items-center gap-3 p-4 rounded-xl hairline bg-card/60 hover:border-primary/40 transition">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{e}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold">Let's build something <span className="text-gradient-gold">profitable.</span></h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
