import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electrician Gold Coast North",
  description:
    "Licensed electrician for the Northern Gold Coast: EV chargers, switchboard upgrades, air conditioning and 24/7 emergency callout across Coomera and Ormeau.",
  alternates: { canonical: "/areas/gold-coast" },
};

const topServices = [
  {
    title: "EV charger installation",
    description:
      "The Northern Gold Coast — especially Helensvale, Hope Island and acreage properties through Coomera and Upper Coomera — is our strongest growth area for EV charger installs. Three-phase, single-phase, precise cable routing and compliance on the day.",
    href: "/services/ev-chargers",
  },
  {
    title: "Air conditioning installation",
    description:
      "ARC-licensed split system and multi-head installs across Coomera, Helensvale, Ormeau and Pimpama. Full install in one visit — refrigeration and electrical under one licence.",
    href: "/services/air-conditioning",
  },
  {
    title: "Switchboard upgrades",
    description:
      "Higher-spec homes and acreage properties on the Northern Gold Coast often need boards upgraded to handle pool equipment, sheds, granny flats and EV charging. We size the board properly and complete it compliantly.",
    href: "/services/switchboard-upgrades",
  },
  {
    title: "Fault finding & 24/7 emergency",
    description:
      "24/7 emergency callout across the Northern Gold Coast. Storm damage, total power loss, tripping that won't reset — diagnosed the first visit. After-hours rates confirmed before we attend.",
    href: "/services/fault-finding",
  },
];

const faqItems = [
  {
    question: "Do you cover the Northern Gold Coast regularly?",
    answer:
      "Yes — Coomera, Upper Coomera, Pimpama, Ormeau, Helensvale, Hope Island and Oxenford are regular coverage. We attend on booked work and 24/7 emergency callouts.",
  },
  {
    question: "What about Surfers Paradise and Burleigh Heads?",
    answer:
      "We attend the central and southern Gold Coast on booked work and emergency callouts. Travel time may apply on smaller jobs south of Helensvale — we confirm before booking.",
  },
  {
    question: "Do you install three-phase EV chargers on the Gold Coast?",
    answer:
      "Yes — three-phase EV charger installs on acreage and premium homes across the Northern Gold Coast are one of our most requested jobs. We assess the existing supply, size the circuit correctly and commission the charger on completion.",
  },
  {
    question: "Can you handle lighting design on new builds and renovations?",
    answer:
      "Yes. For higher-spec homes, renovations and new builds across Helensvale, Hope Island and surrounds, we map lighting circuits, switching layouts and dimming zones before the build locks in — the earlier we are involved, the sharper the result.",
  },
  {
    question: "Are you licensed for Queensland electrical work on the Gold Coast?",
    answer:
      "Yes. Electrical Contractor Licence No. 87141, ARC Licence L179309 and public liability insurance. All work is completed under licence.",
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

export default function GoldCoastPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 pt-6">
          <Breadcrumbs items={[{ label: "Areas Serviced", href: "/areas-serviced" }, { label: "Northern Gold Coast", href: "/areas/gold-coast" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-black text-white">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 lg:py-20">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-gold">
            Northern Gold Coast — service area
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight">
            Licensed electrician for the Northern Gold Coast.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Serving Coomera, Helensvale, Hope Island, Ormeau, Pimpama and
            surrounds. EV charger installation, switchboard upgrades,
            architectural lighting, air conditioning and 24/7 emergency
            callout — for homes that expect a higher standard.
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
              Coomera to Hope Island — full northern corridor
            </span>
          </div>
        </div>
      </section>

      {/* Suburbs strip */}
      <section className="border-b border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-8">
          <p className="mb-4 font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
            Suburbs covered — core area
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Coomera",
              "Upper Coomera",
              "Pimpama",
              "Ormeau",
              "Helensvale",
              "Hope Island",
              "Oxenford",
              "Burleigh Heads",
              "Surfers Paradise",
            ].map((suburb) => (
              <span
                key={suburb}
                className="bg-white px-3 py-1.5 text-sm font-semibold text-brand-charcoal"
              >
                {suburb}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-brand-charcoal/50">
            Central and southern Gold Coast covered on booked work and emergency callouts — confirm availability before booking.
          </p>
        </div>
      </section>

      {/* Why NGC */}
      <section className="bg-brand-surface border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            What Northern Gold Coast homes typically need
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70">
            Higher-spec homes, acreage properties and new corridor developments all have
            electrical requirements that go beyond a standard suburban job.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Three-phase EV charging",
                body: "Premium homes and acreage often run three-phase supply — we use it for 22kW EV chargers that charge in under two hours.",
              },
              {
                heading: "Architectural lighting",
                body: "Feature pendants, concealed strips, outdoor wash lighting and smart dimming — planned and installed precisely, without compromise.",
              },
              {
                heading: "Pool and outdoor circuits",
                body: "Pool pump circuits, outdoor kitchens, shed sub-boards and gate automation — wired properly to AS/NZS standards.",
              },
              {
                heading: "Switchboard upgrades for high-load homes",
                body: "EV charging, ducted aircon, pool equipment and induction cooking all demand capacity. We size the board for the real load, not the minimum.",
              },
              {
                heading: "Builder and developer work",
                body: "Rough-ins, fit-offs and project support on Coomera and Pimpama corridor developments. We commit to dates and hit them.",
              },
              {
                heading: "After-hours response",
                body: "24/7 emergency callout for genuine electrical emergencies. After-hours rates are confirmed before we attend — no surprises.",
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

      {/* Services */}
      <section className="bg-brand-background border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Services across the Northern Gold Coast
          </h2>
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

      {/* FAQ */}
      <section className="bg-brand-surface border-b border-gray-100">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Northern Gold Coast electrical questions
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
              Get a quote for your Gold Coast job.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell us the suburb and what needs doing — we will come back with
              clear advice and a fixed price. Enquiries from the Northern Gold
              Coast are replied to the same business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                24/7 emergency callout across the Northern Gold Coast
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                Lic. No. 87141 · ARC L179309 · Publicly insured
              </p>
            </div>
          </div>
          <InquiryForm ctaClicked="gold_coast_area_page_form" />
        </div>
      </section>
    </main>
  );
}
