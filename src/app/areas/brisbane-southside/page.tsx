import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electrician Brisbane Southside",
  description:
    "Licensed electrician for Brisbane Southside: switchboards, EV chargers, renovations and 24/7 emergency callout from Mount Gravatt to Sunnybank.",
  alternates: { canonical: "/areas/brisbane-southside" },
};

const topServices = [
  {
    title: "Switchboard upgrades",
    description:
      "Queenslanders and older Brisbane south homes frequently have undersized or ceramic-fuse boards that fail compliance checks during renovations. We upgrade to spec, test every circuit and issue the compliance certificate.",
    href: "/services/switchboard-upgrades",
  },
  {
    title: "EV charger installation",
    description:
      "Carindale, Rochedale, Mount Gravatt and Eight Mile Plains are among the strongest EV charger request suburbs in our Brisbane south coverage. Dedicated RCBO-protected circuits, proper load assessment, compliance cert on completion.",
    href: "/services/ev-chargers",
  },
  {
    title: "Lighting & power upgrades",
    description:
      "Renovation work through Woolloongabba, South Brisbane and the inner south often involves running new circuits through old Queenslander timber frames — work that needs care and experience to execute properly.",
    href: "/services/lighting-power",
  },
  {
    title: "Fault finding & 24/7 emergency",
    description:
      "24/7 emergency callout across Brisbane Southside for power loss, tripping switchboards and burning smells. Diagnosed the first visit wherever possible.",
    href: "/services/fault-finding",
  },
];

const faqItems = [
  {
    question: "Do you cover Brisbane Southside regularly?",
    answer:
      "Yes — Mount Gravatt, Sunnybank, Eight Mile Plains, Rochedale, Carindale, Woolloongabba, South Brisbane and surrounding suburbs are regular coverage. We attend on both booked work and emergency callouts.",
  },
  {
    question: "Can you handle electrical work on old Queenslanders?",
    answer:
      "Yes. Older Queenslander homes have their own quirks — timber frames, subfloor access, original wiring runs, older switchboards. We assess the existing installation before starting and work through it methodically rather than working around it.",
  },
  {
    question: "Are you licensed for Brisbane electrical work?",
    answer:
      "Yes. We hold Electrical Contractor Licence No. 87141, ARC Licence L179309 and public liability insurance. Every job is completed under licence.",
  },
  {
    question: "How long does a Brisbane Southside job take to book?",
    answer:
      "For most booked work, same-day or next-day scheduling is available. For larger quoted projects like switchboard upgrades or EV installs, we usually schedule within the same week.",
  },
  {
    question: "Do you offer 24/7 emergency callout in Brisbane Southside?",
    answer:
      "Yes — total power loss, smoke, burning smells, repeated tripping, storm damage to active circuits. We respond to genuine electrical emergencies across Brisbane Southside at any hour. After-hours rates apply and are confirmed before we attend.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BrisbaneSouthsidePage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 pt-6">
          <Breadcrumbs items={[{ label: "Areas Serviced", href: "/areas-serviced" }, { label: "Brisbane Southside", href: "/areas/brisbane-southside" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-black text-white">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 lg:py-20">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-gold">
            Brisbane Southside — service area
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight">
            Licensed electrician for Brisbane Southside.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Serving Mount Gravatt, Sunnybank, Woolloongabba, Rochedale,
            Carindale and surrounding suburbs. Switchboard upgrades, EV
            chargers, renovation electrical work and 24/7 emergency callout —
            the same licensed electrician for every job.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?type=homeowner_quote"
              className="focus-ring inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-br from-[#C4A45A] via-brand-goldHighlight to-brand-gold px-7 text-sm font-extrabold text-brand-black shadow-[inset_0_-2px_0_rgba(10,10,10,0.18),0_10px_26px_rgba(176,145,76,0.24)] transition hover:brightness-110"
            >
              Request a quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-xs text-white/52">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Lic. No. 87141 · ARC L179309
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              24/7 emergency callout
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Based: Bahrs Scrub QLD — 20 min from Mount Gravatt
            </span>
          </div>
        </div>
      </section>

      {/* Suburbs strip */}
      <section className="border-b border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-8">
          <p className="mb-4 font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
            Suburbs covered
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Carina",
              "Carindale",
              "Eight Mile Plains",
              "Mansfield",
              "Mount Gravatt",
              "Rochedale",
              "South Brisbane",
              "Sunnybank",
              "Upper Mount Gravatt",
              "Woolloongabba",
            ].map((suburb) => (
              <span
                key={suburb}
                className="bg-white px-3 py-1.5 text-sm font-semibold text-brand-charcoal"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-surface border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Electrical services across Brisbane Southside
          </h2>
          <p className="mt-3 max-w-2xl text-base text-brand-charcoal/70">
            From inner south renovations to outer south new builds — the same standard of work.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {topServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-brand-border bg-brand-background p-6 transition hover:-translate-y-0.5 hover:border-brand-black"
              >
                <h3 className="font-heading text-xl font-extrabold text-brand-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/70">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-charcoal/70">
                  View service
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-background border-b border-gray-100">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Brisbane Southside electrical questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="bg-white p-6">
                <h3 className="font-heading text-lg font-extrabold text-brand-black">
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

      {/* Enquiry */}
      <section className="bg-brand-black">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 py-16 lg:grid-cols-[.8fr_.72fr] lg:py-24 lg:items-start">
          <div className="text-white">
            <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Get a quote for your Brisbane Southside job.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell us the suburb and what needs doing — we will come back with
              clear advice and a fixed price. Most enquiries are replied to the
              same business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                24/7 emergency callout across Brisbane Southside
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                Lic. No. 87141 · ARC L179309 · Public Liability Insurance held
              </p>
            </div>
          </div>
          <InquiryForm ctaClicked="brisbane_southside_area_page_form" />
        </div>
      </section>
    </main>
  );
}
