import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { business } from "@/lib/constants";

const faqItems = [
  {
    question: "Do you do both rough-in and fit-off?",
    answer:
      "Yes — we handle the full electrical scope from rough-in through to fit-off, compliance certificates, test results and as-built documentation. You deal with one licensed electrician from start to finish.",
  },
  {
    question: "How far in advance do you need to be booked?",
    answer:
      "For planned projects, 1–2 weeks notice allows us to lock in your stages properly. We are upfront about availability before committing — we do not overbook and fail to deliver.",
  },
  {
    question: "Can you handle EV charging provisions on new builds?",
    answer:
      "Yes — EV provisions (conduit, cabling, future-proofing the switchboard) are best handled at rough-in stage. We can also install and commission EV chargers at fit-off for clients who want the full system ready on handover.",
  },
  {
    question: "What documentation do you provide for handover?",
    answer:
      "Compliance electrical safety certificates (CES), test results for all circuits, switchboard labelling, and as-built notes. Issued promptly so handover is not delayed waiting for paperwork.",
  },
  {
    question: "Do you work on boutique commercial fit-outs?",
    answer:
      "Yes — small commercial fit-outs (offices, clinics, retail spaces) with minimal disruption requirements are within our scope. We quote clearly, work properly and finish without leaving a mess for other trades.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const metadata: Metadata = {
  title: "Builder Electrician Logan & Brisbane",
  description:
    "Electrical contractor for builders and renovators across Logan, Brisbane and the Gold Coast. Rough-ins, fit-offs, switchboards and project support.",
  alternates: { canonical: "/builders" },
};

const features = [
  {
    heading: "Reliable scheduling",
    body: "We commit to dates and we hit them. If something's tight, we tell you early — not the day before fit-off.",
  },
  {
    heading: "Work that passes inspection",
    body: "Cables run neatly, switchboards labelled clearly, fittings finished as if the homeowner is watching. Your finishes deserve electrical that matches.",
  },
  {
    heading: "One licensed point of contact",
    body: "You deal directly with the licensed electrician on the job — not a foreman, not a call centre. Quick decisions, clear answers.",
  },
  {
    heading: "Job-ready documentation",
    body: "CES, test results and as-built notes are sent through promptly so you can sign off and move on.",
  },
];

const stages = [
  {
    title: "Rough-in",
    body: "Cabling, conduit, board location and provisions set up to spec so the trades to follow have what they need.",
  },
  {
    title: "Fit-off",
    body: "Power points, switches, lights, fans and switchboard finishes — installed neatly and tested before handover.",
  },
  {
    title: "Project support",
    body: "Variations, defect rectification, EV provisions, smart wiring, and design tweaks handled without slowing the build.",
  },
];

export default function BuildersPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Electrical work that fits the standard of the build.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          A direct partner path for builders and renovators who need licensed,
          consistent electrical support across premium residential and boutique
          commercial work.
        </p>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-brand-black">
            Why builders work with us
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.heading} className="bg-white p-7">
                <h3 className="font-heading text-lg font-extrabold text-brand-black">
                  {f.heading}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/70">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-brand-black">
            From rough-in to handover
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-brand-charcoal/70">
            Full electrical scope for new builds, knock-down rebuilds,
            renovations and small commercial fit-outs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stages.map((s, i) => (
              <div key={s.title} className="bg-brand-background p-7">
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
                  Stage {i + 1}
                </p>
                <h3 className="mt-2 font-heading text-xl font-extrabold text-brand-black">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-16 lg:grid-cols-[1fr_.9fr] lg:py-24">
          <div>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-brand-black">
              Let&apos;s talk about your next project.
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-charcoal/70">
              Send through the project details — type, scope, suburb and
              expected timing. We&apos;ll come back quickly with availability and
              the right scope of work.
            </p>
            <div className="mt-8 bg-white p-6">
              <p className="font-heading text-sm font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/60">
                Credentials
              </p>
              <ul className="mt-3 space-y-1.5 text-sm font-semibold text-brand-charcoal">
                <li>{business.electricalContractor}</li>
                <li>{business.arcLicence}</li>
                <li>{business.insurance}</li>
                <li>ABN {business.abn}</li>
              </ul>
            </div>
          </div>
          <InquiryForm
            defaultLeadType="builder_partner"
            ctaClicked="builder_page_form"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-brand-black">
            Builder questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="border border-brand-border bg-brand-background p-6">
                <h3 className="font-heading text-base font-extrabold text-brand-black">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/75">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-14 lg:py-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Need an electrician you can rely on?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Call directly or send the project details — fastest way to get
              moving.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Send project details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
