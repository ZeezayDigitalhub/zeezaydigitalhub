import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";
import { X, TrendingUp, ArrowRight, Calendar, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import shopify from "@/assets/case-shopify.jpg";
import seo from "@/assets/case-seo.jpg";
import meta from "@/assets/case-meta.jpg";
import klaviyo from "@/assets/case-klaviyo.jpg";
import pinterest from "@/assets/case-pinterest.jpg";
import cro from "@/assets/case-cro.jpg";
import brevo from "@/assets/case-brevo.jpg";
import google from "@/assets/case-google.jpg";
import product from "@/assets/case-product.jpg";
import cart from "@/assets/case-cart.jpg";
import welcome from "@/assets/case-welcome.jpg";
import retention from "@/assets/case-retention.jpg";
import walker1 from "@/assets/walker-wood-1.png";
import walker2 from "@/assets/walker-wood-2.png";
import walker3 from "@/assets/walker-wood-3.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — ZeezayDigital" },
      { name: "description", content: "Real ecommerce growth results: Shopify, SEO, CRO, ads, and email marketing case studies with before/after metrics." },
      { property: "og:title", content: "Portfolio — ZeezayDigital" },
      { property: "og:description", content: "Premium ecommerce case studies and results." },
    ],
  }),
  component: PortfolioPage,
});

type Case = {
  id: string; img: string; title: string; cat: string; client: string; summary: string;
  before: { l: string; v: string }[]; after: { l: string; v: string }[]; results: string[];
};

const CASES: Case[] = [
  { id: "1", img: shopify, title: "Luxury Fashion Store Redesign", cat: "Store Redesign", client: "ATELIER NOIR", summary: "Complete Shopify rebuild with conversion-first UX, premium product storytelling, and optimized checkout.",
    before: [{l:"Conversion",v:"0.9%"},{l:"AOV",v:"$84"},{l:"Bounce",v:"68%"}],
    after: [{l:"Conversion",v:"3.4%"},{l:"AOV",v:"$162"},{l:"Bounce",v:"31%"}],
    results: ["+278% conversion rate","+93% AOV","2.1× monthly revenue in 90 days"] },
  { id: "2", img: seo, title: "Skincare Brand SEO Growth", cat: "Shopify SEO", client: "GLOW LAB", summary: "Technical SEO + content engine targeting high-intent product and ingredient keywords.",
    before: [{l:"Organic",v:"2.1k/mo"},{l:"Keywords",v:"180"},{l:"Revenue",v:"$3.2k"}],
    after: [{l:"Organic",v:"48k/mo"},{l:"Keywords",v:"3,400"},{l:"Revenue",v:"$71k"}],
    results: ["22× organic traffic in 8 months","Page-1 for 240+ commercial keywords","$71k/mo organic revenue"] },
  { id: "3", img: walker1, title: "Walker Wood Gifts — CRO & Order Volume Lift", cat: "CRO Optimization", client: "WALKER WOOD GIFTS", summary: "Conversion rate optimization on a multi-channel Shopify + eBay store: PDP rebuild, checkout fixes, fulfillment-status surfacing, and abandoned-checkout recovery — taking weekly orders from a trickle to consistent multi-order days across Online Store and eBay.",
    before: [{l:"Weekly Orders",v:"6"},{l:"AOV",v:"$184"},{l:"Cart→Pay",v:"42%"}],
    after: [{l:"Weekly Orders",v:"38"},{l:"AOV",v:"$327"},{l:"Cart→Pay",v:"79%"}],
    results: ["6.3× weekly order volume","+78% AOV across Online Store + eBay","Cart-to-payment up to 79%","100% paid + fulfilled rate maintained at scale"] },
  { id: "4", img: meta, title: "Meta Ads Scale to 7-Figures", cat: "Ads Campaigns", client: "MAISON BELL", summary: "Creative testing system + structured account architecture taking spend from $30k → $220k/mo.",
    before: [{l:"ROAS",v:"1.8x"},{l:"Spend",v:"$30k"}],
    after: [{l:"ROAS",v:"4.6x"},{l:"Spend",v:"$220k"}],
    results: ["7.3× scaled spend profitably","ROAS held above 4.2x for 6 months","$1.01M in attributed revenue"] },
  { id: "5", img: klaviyo, title: "Klaviyo Revenue Engine", cat: "Klaviyo Automation", client: "VELVET BLOOM", summary: "Full Klaviyo rebuild: 14 flows, segmentation, and weekly campaign calendar.",
    before: [{l:"Email %",v:"6%"},{l:"Open Rate",v:"18%"}],
    after: [{l:"Email %",v:"34%"},{l:"Open Rate",v:"46%"}],
    results: ["Email = 34% of total revenue","+155% open rate","$48k/mo from automations alone"] },
  { id: "6", img: brevo, title: "Brevo Migration & Lift", cat: "Brevo Campaigns", client: "URBAN ROAST", summary: "Migrated from Mailchimp to Brevo and rebuilt the entire automation stack.",
    before: [{l:"CTR",v:"1.1%"},{l:"Revenue",v:"$4k"}],
    after: [{l:"CTR",v:"4.6%"},{l:"Revenue",v:"$32k"}],
    results: ["8× monthly email revenue","+318% CTR","Reduced unsubscribe rate by 62%"] },
  { id: "7", img: google, title: "Google Ads + PMax", cat: "Ads Campaigns", client: "NORDIC HOME", summary: "Shopping feed cleanup, PMax structure, and conversion-rate-aware bidding.",
    before: [{l:"ROAS",v:"2.1x"},{l:"CPA",v:"$58"}],
    after: [{l:"ROAS",v:"5.4x"},{l:"CPA",v:"$22"}],
    results: ["+157% ROAS","CPA cut by 62%","Scaled spend 3.4×"] },
  { id: "8", img: pinterest, title: "Pinterest Discovery Engine", cat: "Pinterest Marketing", client: "BLOOM & PETAL", summary: "Pin design system + idea pin pipeline driving evergreen traffic to PDPs.",
    before: [{l:"Sessions",v:"1.2k"},{l:"Sales",v:"$900"}],
    after: [{l:"Sessions",v:"38k"},{l:"Sales",v:"$24k"}],
    results: ["31× monthly Pinterest sessions","$24k/mo attributed sales","Top-3 brand in niche on Pinterest"] },
  { id: "9", img: product, title: "PDP Conversion Overhaul", cat: "Product Optimization", client: "LUMA SKIN", summary: "Rewrote 60 PDPs with new image system, social proof, and bundle logic.",
    before: [{l:"PDP CR",v:"2.2%"},{l:"AOV",v:"$48"}],
    after: [{l:"PDP CR",v:"6.1%"},{l:"AOV",v:"$92"}],
    results: ["+177% PDP conversion","+92% AOV","Reduced returns 28%"] },
  { id: "10", img: cart, title: "Abandoned Cart Recovery", cat: "Email Marketing Campaigns", client: "WILD ROUTE", summary: "3-email + SMS abandoned cart flow with dynamic discounts.",
    before: [{l:"Recovery",v:"4%"},{l:"Revenue",v:"$2.1k"}],
    after: [{l:"Recovery",v:"19%"},{l:"Revenue",v:"$18.4k"}],
    results: ["Recovered $18.4k/mo","+375% recovery rate","Sub 30-min response time"] },
  { id: "11", img: welcome, title: "Welcome Flow Conversion", cat: "Email Marketing Campaigns", client: "CASA AURA", summary: "5-step welcome series with brand story, social proof, and tiered offer.",
    before: [{l:"Sub→Buyer",v:"6%"},{l:"AOV",v:"$54"}],
    after: [{l:"Sub→Buyer",v:"24%"},{l:"AOV",v:"$78"}],
    results: ["4× subscriber-to-buyer rate","First-purchase AOV up 44%","Flow generating $11k/mo"] },
  { id: "12", img: retention, title: "Customer Retention System", cat: "Ecommerce Marketing", client: "ORE & OAK", summary: "Lifecycle messaging, VIP tier, win-back, and replenishment sequences.",
    before: [{l:"Repeat %",v:"18%"},{l:"LTV",v:"$112"}],
    after: [{l:"Repeat %",v:"41%"},{l:"LTV",v:"$284"}],
    results: ["Repeat rate 2.3×","LTV +154%","Win-back recovered 8% of churned"] },
];

const cats = ["All","Shopify SEO","Store Redesign","CRO Optimization","Ecommerce Marketing","Ads Campaigns","Pinterest Marketing","Product Optimization","Email Marketing Campaigns","Klaviyo Automation","Brevo Campaigns"];

const POOL = [shopify, seo, meta, klaviyo, pinterest, cro, brevo, google, product, cart, welcome, retention];

function getGallery(c: Case): string[] {
  const idx = CASES.findIndex((x) => x.id === c.id);
  return [c.img, POOL[(idx + 4) % POOL.length], POOL[(idx + 7) % POOL.length]];
}

function parseNum(s: string): number | null {
  const m = s.match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

function delta(b: string, a: string): string | null {
  const bn = parseNum(b); const an = parseNum(a);
  if (bn === null || an === null || bn === 0) return null;
  const pct = ((an - bn) / bn) * 100;
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${Math.round(pct)}%`;
}

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Case | null>(null);
  const [gIdx, setGIdx] = useState(0);
  const visible = filter === "All" ? CASES : CASES.filter((c) => c.cat === filter);
  const gallery = open ? getGallery(open) : [];

  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-primary">Portfolio</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Real ecommerce <span className="text-gradient-gold">results.</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Selected case studies with before/after metrics across SEO, CRO, ads, and email marketing.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition ${filter === c ? "bg-primary text-primary-foreground" : "hairline text-muted-foreground hover:text-primary hover:border-primary/40"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.08}>
              <button onClick={() => { setOpen(c); setGIdx(0); }} className="group text-left w-full h-full">
                <div className="rounded-2xl overflow-hidden hairline bg-card/40 hover:border-primary/50 transition hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/20 text-primary backdrop-blur">{c.cat}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.client}</div>
                    <h3 className="mt-2 text-lg font-semibold group-hover:text-primary transition">{c.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm">
                      <TrendingUp className="h-4 w-4" /> View case study
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md grid place-items-start justify-center p-4 overflow-y-auto" onClick={() => setOpen(null)}>
          <div className="relative max-w-4xl w-full bg-card rounded-3xl hairline overflow-hidden my-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} className="absolute top-4 right-4 z-20 h-9 w-9 grid place-items-center rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition" aria-label="Close"><X className="h-4 w-4" /></button>

            {/* Gallery */}
            <div className="relative aspect-[16/9] bg-background overflow-hidden">
              <img key={gallery[gIdx]} src={gallery[gIdx]} alt={`${open.title} screenshot ${gIdx + 1}`} className="w-full h-full object-cover animate-fade-in" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
              <button onClick={() => setGIdx((gIdx - 1 + gallery.length) % gallery.length)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-background/70 hover:bg-primary hover:text-primary-foreground backdrop-blur transition"><ChevronLeft className="h-5 w-5" /></button>
              <button onClick={() => setGIdx((gIdx + 1) % gallery.length)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-background/70 hover:bg-primary hover:text-primary-foreground backdrop-blur transition"><ChevronRight className="h-5 w-5" /></button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {gallery.map((_, i) => (
                  <button key={i} onClick={() => setGIdx(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === gIdx ? "w-6 bg-primary" : "w-1.5 bg-foreground/40 hover:bg-foreground/70"}`} />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="px-8 pt-4 flex gap-2">
              {gallery.map((src, i) => (
                <button key={i} onClick={() => setGIdx(i)} className={`relative h-16 w-24 rounded-lg overflow-hidden hairline transition ${i === gIdx ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}>
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="p-8">
              <span className="text-xs uppercase tracking-widest text-primary">{open.cat}</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">{open.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{open.client}</p>
              <p className="mt-4 text-muted-foreground">{open.summary}</p>

              {/* Before / After with deltas */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 hairline bg-background/40">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Before</div>
                  <div className="space-y-2">
                    {open.before.map((b) => (<div key={b.l} className="flex justify-between text-sm"><span className="text-muted-foreground">{b.l}</span><span className="font-mono">{b.v}</span></div>))}
                  </div>
                </div>
                <div className="rounded-2xl p-5 hairline ring-gold bg-primary/5">
                  <div className="text-xs uppercase tracking-widest text-primary mb-3 flex items-center gap-1.5"><Sparkles className="h-3 w-3" /> After</div>
                  <div className="space-y-2">
                    {open.after.map((a, i) => {
                      const b = open.before[i];
                      const d = b ? delta(b.v, a.v) : null;
                      return (
                        <div key={a.l} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{a.l}</span>
                          <span className="flex items-center gap-2">
                            <span className="font-mono text-primary font-semibold">{a.v}</span>
                            {d && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/15 text-primary">{d}</span>}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">Results</div>
                <ul className="space-y-2">
                  {open.results.map((r) => (<li key={r} className="flex items-center gap-2 text-sm"><ArrowRight className="h-4 w-4 text-primary shrink-0" />{r}</li>))}
                </ul>
              </div>

              {/* Strong CTA */}
              <div className="mt-8 rounded-2xl p-6 md:p-7 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent hairline ring-gold">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">Want results like {open.client}?</div>
                    <h4 className="text-lg md:text-xl font-bold">Book a free 30-min growth consultation.</h4>
                    <p className="text-sm text-muted-foreground mt-1">Audit your funnel, ads, and email — leave with a custom growth plan.</p>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-[var(--shadow-gold)] hover:scale-105 transition whitespace-nowrap"
                  >
                    <Calendar className="h-4 w-4" /> Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
