import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  ShoppingBag, Search, PaintBucket, BarChart3, Wrench, Megaphone, Target,
  Image as ImageIcon, FileText, GitMerge, Users, Mail, Send, RefreshCcw,
  Heart, Repeat, Inbox, ShoppingCart, Newspaper, TrendingUp, ArrowRight, Layers,
  Globe, Music2, Magnet, Store
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shopify, CRO, SEO, Ads, Email | ZeezayDigital" },
      { name: "description", content: "Full-spectrum ecommerce marketing: Shopify growth, SEO, CRO, Google & Meta ads, Pinterest, Klaviyo & Brevo email automation, retention." },
      { property: "og:title", content: "Services — ZeezayDigital" },
      { property: "og:description", content: "End-to-end ecommerce growth services." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Ecommerce & Website Marketing",
    items: [
      { icon: TrendingUp, t: "Ecommerce Marketing", d: "Full-funnel growth for any ecommerce brand — Shopify, WooCommerce, BigCommerce, custom stores." },
      { icon: Globe, t: "Website Marketing", d: "Marketing for any website or brand — service businesses, SaaS, bookings, leads, and sales." },
      { icon: ShoppingBag, t: "Shopify Marketing", d: "Full-funnel growth strategy purpose-built for Shopify." },
      { icon: Search, t: "Shopify SEO", d: "Technical, on-page, and content SEO that ranks and converts." },
      { icon: PaintBucket, t: "Store Design & Redesign", d: "Premium store experiences engineered for conversion." },
      { icon: BarChart3, t: "Ecommerce SEO", d: "Category, collection, and product-level visibility." },
      { icon: Wrench, t: "CRO", d: "A/B testing, UX, and funnel optimization that compounds." },
    ],
  },
  {
    title: "Paid Acquisition",
    items: [
      { icon: ShoppingBag, t: "Google Merchant Center", d: "Feed setup, optimization, and Shopping ads ready to scale." },
      { icon: Megaphone, t: "Google Ads", d: "Search, Performance Max, and retargeting at strong ROAS." },
      { icon: Target, t: "Meta Ads", d: "Profitable Facebook & Instagram acquisition campaigns." },
      { icon: Music2, t: "TikTok Ads", d: "Creator-led TikTok campaigns that drive viral, profitable growth." },
      { icon: Store, t: "TikTok Shop", d: "TikTok Shop setup, optimization, and affiliate-driven sales." },
      { icon: ImageIcon, t: "Pinterest Marketing", d: "Visual discovery campaigns for evergreen traffic." },
      { icon: FileText, t: "Product Page Optimization", d: "Pages that turn browsers into buyers." },
      { icon: GitMerge, t: "Sales Funnel Design", d: "Offer architecture and funnels that maximize AOV." },
      { icon: Magnet, t: "Lead Magnet Design", d: "High-converting lead magnets that grow your list and pipeline." },
      { icon: Users, t: "Affiliate Recruitment", d: "Partner programs that drive scalable revenue." },
    ],
  },
  {
    title: "Email & Retention",
    items: [
      { icon: Mail, t: "Email Marketing", d: "Strategy, design, copy, and deliverability done right." },
      { icon: Send, t: "Klaviyo Email Marketing", d: "Advanced segmentation and revenue-driving flows." },
      { icon: Inbox, t: "Brevo Email Marketing", d: "Brevo campaigns and automations that convert." },
      { icon: RefreshCcw, t: "Email Automation", d: "Lifecycle automations that run 24/7." },
      { icon: Heart, t: "Welcome Flows", d: "First-impression sequences that convert subscribers." },
      { icon: ShoppingCart, t: "Abandoned Cart Recovery", d: "Recover up to 30% of lost checkout revenue." },
      { icon: Repeat, t: "Post-Purchase Sequences", d: "Increase repeat rate and lifetime value." },
      { icon: Newspaper, t: "Newsletter Campaigns", d: "Editorial campaigns that build brand and revenue." },
      { icon: TrendingUp, t: "Customer Retention", d: "VIP, win-back, and loyalty systems." },
      { icon: Layers, t: "Email Conversion Optimization", d: "Subject lines, design, and CTAs tested for lift." },
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-primary">Services</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Premium ecommerce <span className="text-gradient-gold">growth services.</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A complete suite of services to acquire, convert, and retain customers across every channel that matters.
            </p>
          </Reveal>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className={`py-16 ${gi % 2 === 0 ? "bg-card/30 border-y border-border/60" : ""}`}>
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold">{g.title}</h2>
              <div className="mt-2 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            </Reveal>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.items.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.04}>
                  <div className="group relative h-full rounded-2xl glass p-7 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)] overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold">Need a custom <span className="text-gradient-gold">growth plan?</span></h2>
            <p className="mt-4 text-muted-foreground">Tell me about your store and goals — I'll send back a tailored proposal.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition">
              Request a proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
