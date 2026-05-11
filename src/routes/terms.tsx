import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ZeezayDigital" },
      { name: "description", content: "Terms of service for ZeezayDigital — payment, scope, revisions, and delivery policies." },
      { property: "og:title", content: "Terms of Service — ZeezayDigital" },
      { property: "og:description", content: "Project terms, payment, and delivery policies." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { t: "Upfront Payment Policy", d: "Upfront payment is mandatory before the commencement of any project. Project work will only begin after payment confirmation. This helps secure commitment, reserve project time, and ensure smooth delivery." },
  { t: "Project Scope Agreement", d: "All deliverables, milestones, and timelines are agreed in writing before kickoff. Both parties acknowledge the documented scope as the source of truth for the engagement." },
  { t: "Commencement", d: "No work begins without confirmed payment. Work officially starts on the date payment clears and all required materials have been received." },
  { t: "Revisions", d: "Revisions are provided based on the agreed package. Each package includes a defined number of revision rounds detailed in the proposal." },
  { t: "Out-of-Scope Requests", d: "Additional requests outside the original scope may require extra charges. A change-order will be sent for approval before any out-of-scope work is performed." },
  { t: "Delivery Timeline", d: "Delivery timeline starts after all required materials and payment are received. Delays in providing materials, content, or feedback may extend the timeline accordingly." },
  { t: "Confidentiality", d: "All client materials, brand assets, data, and strategy are treated as strictly confidential and used only for the purpose of fulfilling the engagement." },
  { t: "Refund Policy", d: "Because work is reserved time and resources, payments are non-refundable once a project has commenced. Unstarted milestones may be discussed on a case-by-case basis." },
];

function TermsPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-primary/15 text-primary"><ShieldCheck className="h-6 w-6" /></div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold">Terms of <span className="text-gradient-gold">Service.</span></h1>
            <p className="mt-4 text-muted-foreground">Last updated: November 2025</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          {sections.map((s, i) => (
            <Reveal key={s.t} delay={i*0.04}>
              <div className="rounded-2xl glass p-7">
                <h2 className="text-xl font-semibold text-primary">{i+1}. {s.t}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="rounded-2xl bg-luxe ring-gold p-8 text-center">
              <p className="text-sm text-muted-foreground">By engaging with ZeezayDigital you acknowledge and accept these terms.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
