import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { priorityServices, secondaryServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Electrical Services Logan, Brisbane & Gold Coast",
  description:
    "Licensed electrical services across Logan, Brisbane Southside and the Northern Gold Coast for homes, rentals, builders and small businesses.",
  alternates: { canonical: "/services" },
};

const serviceBreakdown = [
  {
    heading: "Residential electrical",
    href: "/contact?type=homeowner_quote",
    cta: "Request a quote",
    services: [
      "Switchboard upgrades and safety inspections",
      "Power point and lighting upgrades",
      "Air conditioning installation (ARC licensed)",
      "EV charger installation and dedicated circuits",
      "Ceiling fan and exhaust fan installation",
      "Data cabling and home network points",
      "Smoke alarm installation and compliance",
      "Rewires and fault finding",
    ],
  },
  {
    heading: "Commercial electrical",
    href: "/contact?type=small_commercial",
    cta: "Discuss your project",
    services: [
      "Office and retail fit-out electrical",
      "LED lighting upgrades and lighting design",
      "Three-phase power and switchboard work",
      "Data cabling and structured cabling",
      "Exit and emergency lighting",
      "Electrical maintenance and fault response",
    ],
  },
  {
    heading: "Property management",
    href: "/real-estate-agents",
    cta: "Learn more",
    services: [
      "Tenant fault repairs — responsive attendance",
      "Smoke alarm testing and compliance",
      "Switchboard inspections and RCD upgrades",
      "Lighting, power point and fan replacements",
      "End-of-lease and pre-lease electrical checks",
      "Direct communication with tenants — no back-and-forth",
    ],
  },
  {
    heading: "Builders & renovations",
    href: "/builders",
    cta: "Partner with us",
    services: [
      "Rough-in and fit-off for new builds and renovations",
      "Architectural lighting design and installation",
      "Switchboard and metering work",
      "EV charging infrastructure",
      "Home automation and smart control wiring",
      "Defect rectification and project support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-brand-background">
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Electrical Services in Logan, Brisbane &amp; the Gold Coast
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          Reliable electrical services for homes, small businesses and managed
          properties — delivered with clear communication, work done properly and
          attention to detail.
        </p>

        {/* Priority service cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {priorityServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-brand-background p-6 transition hover:bg-brand-black"
            >
              <h2 className="font-heading text-2xl font-extrabold text-brand-black group-hover:text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-brand-charcoal/68 group-hover:text-white/70">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Secondary service links */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-center justify-between border border-brand-border bg-white px-5 py-4 transition hover:border-brand-black"
            >
              <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-black">
                {service.title}
              </span>
              <ArrowRight className="h-4 w-4 text-brand-charcoal/30 transition group-hover:translate-x-1 group-hover:text-brand-black" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* Service breakdown */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight text-brand-black">
            What we do
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-brand-charcoal/70">
            Licensed, insured and fully equipped across residential, commercial
            and managed property work.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {serviceBreakdown.map((section) => (
              <div key={section.heading} className="bg-white p-8">
                <h3 className="font-heading text-xl font-extrabold text-brand-black">
                  {section.heading}
                </h3>
                <ul className="mt-5 space-y-2">
                  {section.services.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-brand-charcoal/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={section.href}
                  className="mt-7 inline-block text-sm font-semibold text-brand-gold hover:text-brand-black transition"
                >
                  {section.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-14 lg:py-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Not sure what you need?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Describe the job and we&apos;ll come back with clear advice and a
              fixed price.
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
              href="tel:0477766678"
              className="inline-block border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Call 0477 766 678
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
