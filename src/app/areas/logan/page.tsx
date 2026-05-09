import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electrician Logan | Licensed Local Electrical Services",
  description:
    "Licensed electrician based in Logan. Switchboard upgrades, EV charger installation, air conditioning, fault finding and 24/7 emergency callout across the Logan corridor. Based at Bahrs Scrub.",
  alternates: { canonical: "/areas/logan" },
};

const topServices = [
  {
    title: "Switchboard upgrades",
    description:
      "Most Logan homes built before 2000 are running old ceramic-fuse boards. We replace them with modern RCD-protected switchboards — tested, compliant and done in a day.",
    href: "/services/switchboard-upgrades",
  },
  {
    title: "EV charger installation",
    description:
      "New builds in Park Ridge, Logan Reserve and Yarrabilba are among the highest EV charger request areas we cover. Dedicated circuits, clean cable runs, compliance cert on completion.",
    href: "/services/ev-chargers",
  },
  {
    title: "Air conditioning installation",
    description:
      "ARC-licensed split system and multi-head installs across Beenleigh, Springwood, Crestmead and the wider Logan corridor. One contractor for the refrigeration and the electrical.",
    href: "/services/air-conditioning",
  },
  {
    title: "Fault finding & 24/7 emergency",
    description:
      "Same-day fault finding across Logan. Tripping boards, dead circuits, burning smells — diagnosed the first visit. 24/7 emergency callout for genuine electrical emergencies.",
    href: "/services/fault-finding",
  },
];

const faqItems = [
  {
    question: "How quickly can you get to Logan?",
    answer:
      "We are based in Bahrs Scrub — central to the Logan corridor. For booked jobs, same-day scheduling is the standard. For 24/7 emergencies, we respond as fast as safely possible.",
  },
  {
    question: "Do you cover the whole Logan LGA?",
    answer:
      "Yes — Beenleigh, Springwood, Browns Plains, Logan Central, Meadowbrook, Crestmead, Park Ridge, Jimboomba, Yarrabilba, Logan Reserve, Loganholme, Daisy Hill, Slacks Creek, Underwood, Waterford, Windaroo and surrounding suburbs.",
  },
  {
    question: "Are you licensed for Logan electrical work?",
    answer:
      "Yes. We hold Electrical Contractor Licence 87141 issued by the Queensland Building and Construction Commission (QBCC), ARC Licence L179309, and public liability insurance.",
  },
  {
    question: "Do you work on older Logan homes with ceramic fuse boards?",
    answer:
      "Yes — switchboard upgrades on pre-1990s Logan housing stock are one of our most common jobs. We assess the existing board, quote the upgrade, and complete it in a single visit wherever possible.",
  },
  {
    question: "Can you do emergency electrical work in Logan after hours?",
    answer:
      "Yes. We run 24/7 emergency callout for genuine electrical emergencies — total power loss, smoke, burning smells, repeated tripping, storm damage to active circuits. After-hours rates apply and are confirmed before we attend.",
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

export default function LoganPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 pt-6">
          <Breadcrumbs items={[{ label: "Areas Serviced", href: "/areas-serviced" }, { label: "Logan", href: "/areas/logan" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-black text-white">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 lg:py-20">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-gold">
            Logan — your local area
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight">
            Licensed electrician for Logan.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Based in Bahrs Scrub, central to the Logan corridor. Switchboard
            upgrades, EV chargers, air conditioning, fault finding and 24/7
            emergency callout — the same licensed electrician for every job.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?type=homeowner_quote"
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
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
              Based: Bahrs Scrub QLD 4207
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-background border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Electrical services across Logan
          </h2>
          <p className="mt-3 max-w-2xl text-base text-brand-charcoal/70">
            The most common electrical jobs in Logan — done properly, the first time.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {topServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-brand-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-black"
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

      {/* Local proof */}
      <section className="bg-brand-surface border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Why Logan homeowners choose DY Electrical Services
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "We are local",
                body: "Bahrs Scrub — a short drive from Beenleigh, Springwood and Logan Central. We are not booking from a call centre two suburbs away.",
              },
              {
                heading: "Same-day availability",
                body: "For most booked Logan jobs, same-day or next-day scheduling is the norm. We do not push Logan residents to the back of a three-week queue.",
              },
              {
                heading: "Licensed and insured",
                body: "QBCC Electrical Contractor Licence 87141 and ARC Licence L179309. Publicly insured. Every job under licence — no unlicensed electrical work, ever.",
              },
              {
                heading: "One contractor for everything",
                body: "Switchboards, EV chargers, aircon, fault finding — handled by the same licensed electrician. No passing between tradespeople, no gaps in responsibility.",
              },
              {
                heading: "24/7 emergency callout",
                body: "Power loss, burning smells, repeated tripping — we respond to genuine emergencies across Logan at any hour. After-hours rates are confirmed before we attend.",
              },
              {
                heading: "No surprises on the invoice",
                body: "Jobs are quoted clearly before work starts. If scope changes on site, we discuss it first. The invoice matches what was agreed.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="border-l-2 border-brand-gold bg-brand-background px-5 py-5"
              >
                <p className="font-heading text-base font-extrabold text-brand-black">
                  {item.heading}
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-background border-b border-gray-100">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Logan electrical questions
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

      {/* Enquiry + CTA */}
      <section className="bg-brand-black">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 py-16 lg:grid-cols-[.8fr_.72fr] lg:py-24 lg:items-start">
          <div className="text-white">
            <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Get a quote for your Logan job.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell us the suburb and what needs doing — we will come back with
              clear advice and a fixed price. Most Logan enquiries are replied
              to the same business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                Based in Bahrs Scrub QLD
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                24/7 emergency callout across Logan
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                Lic. No. 87141 · ARC L179309 · Publicly insured
              </p>
            </div>
          </div>
          <InquiryForm ctaClicked="logan_area_page_form" />
        </div>
      </section>
    </main>
  );
}
