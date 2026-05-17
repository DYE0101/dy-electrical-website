import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { areaPages } from "@/lib/area-pages";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Areas Serviced | Logan, Brisbane & Gold Coast",
  description:
    "Electrician covering Logan, Brisbane Southside and the Northern Gold Coast for homes, rentals, builders and small businesses. 24/7 emergency callout.",
  alternates: { canonical: "/areas-serviced" },
};

type Region = {
  slug: string;
  name: string;
  intro: string;
  responseTime: string;
  commonJobs: string[];
  suburbs: string[];
};

const regions: Region[] = [
  {
    slug: "logan",
    name: "Logan",
    intro:
      "Our home base. We are based in Bahrs Scrub — central to the Logan corridor. Same-day response is the default, not the exception.",
    responseTime: "Same-day standard — usually within hours",
    commonJobs: [
      "Switchboard upgrades on 1980s and 1990s housing stock",
      "EV chargers in Park Ridge, Yarrabilba and Logan Reserve new builds",
      "Fault finding and storm-damage repairs after Logan summer storms",
      "Aircon installation in Beenleigh, Springwood and Crestmead family homes",
      "Property manager maintenance across Logan rentals",
    ],
    suburbs: [
      "Bahrs Scrub",
      "Beenleigh",
      "Bethania",
      "Browns Plains",
      "Crestmead",
      "Daisy Hill",
      "Eagleby",
      "Hillcrest",
      "Jimboomba",
      "Logan Central",
      "Logan Reserve",
      "Logan Village",
      "Loganholme",
      "Loganlea",
      "Marsden",
      "Meadowbrook",
      "Park Ridge",
      "Shailer Park",
      "Slacks Creek",
      "Springwood",
      "Underwood",
      "Waterford",
      "Windaroo",
      "Yarrabilba",
    ],
  },
  {
    slug: "brisbane-southside",
    name: "Brisbane Southside",
    intro:
      "Regular coverage across the Brisbane south corridor — from inner suburbs like Woolloongabba and South Brisbane out to Mount Gravatt, Sunnybank and Rochedale. We work across older Queenslanders and newer builds with the same standard.",
    responseTime: "Same-day or next-day for most jobs",
    commonJobs: [
      "Older Queenslander rewires and switchboard upgrades",
      "Lighting and power upgrades through renovations",
      "Small commercial fit-out work",
      "EV charger installs in Carindale, Mount Gravatt and Rochedale homes",
      "Property manager maintenance across rentals",
    ],
    suburbs: [
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
    ],
  },
  {
    slug: "northern-gold-coast",
    name: "Northern Gold Coast",
    intro:
      "Strong coverage from Ormeau and Pimpama through to Coomera, Helensvale and Hope Island. Higher-spec homes and acreage properties — cables run to spec, hidden conduit and architectural lighting work are standard requests.",
    responseTime: "Same-day or next-day for most jobs",
    commonJobs: [
      "Three-phase EV charger installs on acreage and luxury homes",
      "Architectural and feature lighting on premium new builds",
      "Switchboard upgrades to support pools, sheds and granny flats",
      "Aircon installs and replacements in Helensvale and Hope Island",
      "Builder rough-in and fit-off on Coomera and Pimpama developments",
    ],
    suburbs: [
      "Coomera",
      "Helensvale",
      "Hope Island",
      "Ormeau",
      "Oxenford",
      "Pimpama",
      "Upper Coomera",
    ],
  },
  {
    slug: "extended-gold-coast",
    name: "Gold Coast — extended coverage",
    intro:
      "We travel into the central and southern Gold Coast on quoted work and emergency callouts. Travel time may apply on smaller jobs — we tell you up front before we book.",
    responseTime: "Booked work and 24/7 emergency callout",
    commonJobs: [
      "Booked installs and upgrades by appointment",
      "Emergency electrical callouts (24/7)",
      "Builder and renovation projects",
    ],
    suburbs: [
      "Burleigh Heads",
      "Mermaid Beach",
      "Robina",
      "Surfers Paradise",
      "Varsity Lakes",
    ],
  },
  {
    slug: "redlands",
    name: "Redlands",
    intro:
      "We attend the Redlands corridor on booked work and emergency callouts. Standard service area for property managers and builders working across south-east Brisbane and the bayside.",
    responseTime: "Booked work and 24/7 emergency callout",
    commonJobs: [
      "Property manager maintenance",
      "Switchboard upgrades and fault finding",
      "Emergency callouts (24/7)",
    ],
    suburbs: ["Capalaba", "Cleveland", "Redland Bay", "Thornlands", "Victoria Point"],
  },
];

const localFaq = [
  {
    question: "Do you charge a callout fee?",
    answer:
      "Standard callouts inside our core service area (Logan, Brisbane Southside, Northern Gold Coast) are quoted as part of the job. Emergency and after-hours callouts have a separate callout rate which is confirmed before we attend.",
  },
  {
    question: "Are you really available 24/7?",
    answer:
      "Yes — for genuine electrical emergencies (smoke, burning smells, total power loss, repeated tripping that won't reset, water damage to active circuits) we take calls outside business hours across our full service area.",
  },
  {
    question: "What if my suburb isn't listed?",
    answer:
      "Call or send an enquiry. If we're not the right fit for the location we'll say so up front rather than waste your time. We regularly travel beyond the listed suburbs for booked work.",
  },
  {
    question: "Do you charge to travel between regions?",
    answer:
      "For booked installs and quoted work, travel is included in the price. For very small jobs in extended-coverage areas (central and southern Gold Coast, Redlands) a travel charge may apply — we confirm before we book.",
  },
  {
    question: "Where are you based?",
    answer:
      "Bahrs Scrub QLD — central to the Logan corridor, which means fast response across Logan, easy reach into Brisbane Southside and direct access down to the Northern Gold Coast via the M1.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: localFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AreasServicedPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Licensed electrician across Logan, Brisbane Southside &amp; the Northern Gold Coast.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          Based in Bahrs Scrub — central to the Logan corridor. From there
          we run the full service area: Logan, Brisbane
          Southside, the Northern Gold Coast, and extended coverage across the
          central Gold Coast and Redlands. 24/7 emergency callout across the
          full area.
        </p>

        {/* Trust strip */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 border-l-2 border-brand-gold bg-brand-background px-4 py-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
            <div>
              <p className="font-heading text-sm font-extrabold text-brand-black">Fully licensed</p>
              <p className="text-xs text-brand-charcoal/70">{business.electricalContractor} · {business.arcLicence}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-2 border-brand-gold bg-brand-background px-4 py-4">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
            <div>
              <p className="font-heading text-sm font-extrabold text-brand-black">24/7 emergency</p>
              <p className="text-xs text-brand-charcoal/70">After-hours callout across the full service area</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-2 border-brand-gold bg-brand-background px-4 py-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
            <div>
              <p className="font-heading text-sm font-extrabold text-brand-black">Local base</p>
              <p className="text-xs text-brand-charcoal/70">Bahrs Scrub QLD — central Logan corridor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Region breakdown */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24 space-y-16">
          {regions.map((region) => (
            <article key={region.slug} id={region.slug}>
              <div className="grid gap-8 lg:grid-cols-[.6fr_1fr]">
                <div>
                  <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
                    {region.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-brand-charcoal/70 md:text-base">
                    {region.intro}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 border-l-2 border-brand-gold bg-white px-3 py-2 text-xs font-semibold text-brand-charcoal">
                    <Clock className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                    {region.responseTime}
                  </p>
                </div>

                <div>
                  <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
                    Common jobs in {region.name}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {region.commonJobs.map((job) => (
                      <li
                        key={job}
                        className="flex items-start gap-3 text-sm leading-6 text-brand-charcoal/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
                  Suburbs covered
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                  {region.suburbs.map((suburb) => (
                    <div
                      key={suburb}
                      className="bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal"
                    >
                      {suburb}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Suburb pages */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
              Popular local electrician pages
            </h2>
            <p className="mt-3 text-sm leading-6 text-brand-charcoal/70 md:text-base">
              Choose a suburb page for local service notes, common electrical
              work in the area and nearby suburbs covered by DY Electrical Services.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areaPages.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group border border-brand-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-black"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal/50">
                  {area.region}
                </p>
                <h3 className="mt-2 font-heading text-xl font-extrabold text-brand-black">
                  Electrician {area.suburb}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/70">
                  {area.driveTime} from Bahrs Scrub. {area.localNote}
                </p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold text-brand-charcoal/70">
                  View suburb page
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service quick links */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Common service requests across the area
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-charcoal/70 md:text-base">
            The same standard of work, across every region we cover.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Switchboard upgrades", href: "/services/switchboard-upgrades" },
              { title: "EV charger installation", href: "/services/ev-chargers" },
              { title: "Air conditioning install", href: "/services/air-conditioning" },
              { title: "Fault finding & 24/7 emergency", href: "/services/fault-finding" },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-brand-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-black"
              >
                <p className="font-heading text-base font-extrabold text-brand-black">
                  {service.title}
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-brand-charcoal/70">
                  View service
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-brand-black md:text-4xl">
            Service area questions
          </h2>
          <div className="mt-8 space-y-4">
            {localFaq.map((item) => (
              <article key={item.question} className="bg-white p-6">
                <h3 className="font-heading text-lg font-extrabold text-brand-black">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/75">{item.answer}</p>
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
              Need an electrician in your area?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Tell us the suburb and the job — we&apos;ll confirm availability
              and come back with a clear price.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
            >
              Request a quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
