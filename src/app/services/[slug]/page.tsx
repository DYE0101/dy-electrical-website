import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { servicePages } from "@/lib/service-pages";
import { business } from "@/lib/constants";
import type { InquiryInput } from "@/lib/lead-schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

const SERVICE_META_TITLES: Record<string, string> = {
  "switchboard-upgrades": "Switchboard Upgrades Brisbane & Logan",
  "ev-chargers": "EV Charger Installation Brisbane & Logan",
  "fault-finding": "24/7 Emergency Electrician Brisbane & Logan",
  "air-conditioning": "Air Conditioning Installation Logan & Brisbane",
  "smoke-alarms": "Smoke Alarm Installation Brisbane & Logan",
  "oven-installation": "Oven & Cooktop Installation Brisbane & Logan",
  "lighting-power": "Lighting & Power Upgrades Brisbane & Logan",
  "data-cabling": "Data Cabling & Networking Logan & Brisbane",
  "ceiling-fans": "Ceiling Fan Installation Brisbane & Logan",
};

const SERVICE_META_DESCRIPTIONS: Record<string, string> = {
  "switchboard-upgrades":
    "Switchboard upgrades for older homes, renovations, EV chargers and new circuits across Logan, Brisbane Southside and the Northern Gold Coast.",
  "ev-chargers":
    "EV charger installation across Logan, Brisbane Southside and the Northern Gold Coast with dedicated circuits, load checks and tidy cable runs.",
  "air-conditioning":
    "ARC-licensed split system installation and electrical support for homes and small commercial spaces across Logan, Brisbane Southside and the Gold Coast.",
  "fault-finding":
    "24/7 emergency electrician for Logan, Brisbane Southside and the Northern Gold Coast. Fault finding for tripping boards, dead circuits and burning smells.",
  "lighting-power":
    "Lighting, downlight and power point upgrades across Logan, Brisbane Southside and the Northern Gold Coast with tidy cable runs and sharp finishes.",
  "data-cabling":
    "Structured data cabling for Logan, Brisbane Southside and Northern Gold Coast homes and small businesses: Cat6, patch panels and Wi-Fi access points.",
  "ceiling-fans":
    "Ceiling fan installation and replacement across Logan, Brisbane Southside and the Northern Gold Coast with new wiring, controls and balancing.",
  "smoke-alarms":
    "Smoke alarm installation and compliance across Logan, Brisbane Southside and the Northern Gold Coast for rentals and owner-occupied homes.",
  "oven-installation":
    "Oven and cooktop installation across Logan, Brisbane Southside and the Northern Gold Coast with dedicated circuits and compliance certification.",
};

const SERVICE_FORM_DEFAULTS: Record<string, InquiryInput["serviceType"]> = {
  "switchboard-upgrades": "Switchboard upgrades",
  "ev-chargers": "EV chargers",
  "fault-finding": "Fault finding",
  "air-conditioning": "Air conditioning",
  "smoke-alarms": "Smoke alarms",
  "oven-installation": "Oven & cooktop",
  "lighting-power": "Lighting",
  "data-cabling": "Data cabling",
  "ceiling-fans": "Ceiling fans",
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: SERVICE_META_TITLES[service.slug] ?? service.title,
    description: SERVICE_META_DESCRIPTIONS[service.slug] ?? service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} by ${business.name}`,
    provider: {
      "@type": "Electrician",
      name: business.name,
      telephone: business.phoneDisplay,
      url: business.domain,
    },
    areaServed: ["Logan", "Brisbane Southside", "Northern Gold Coast"],
    description: service.summary,
  };

  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, serviceSchema]) }}
      />
      <div className="mx-auto w-full max-w-[1180px] px-4 pt-6">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title, href: `/services/${service.slug}` }]} />
      </div>
      <section className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 py-10 lg:grid-cols-[.82fr_.68fr] lg:py-16">
        <div>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-charcoal/70">
            {service.summary}
          </p>

          <div className="mt-7 max-w-2xl rounded-lg border border-brand-border bg-white p-5 shadow-sm">
            <p className="font-heading text-xl font-extrabold text-brand-black">
              Need this sorted?
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
              Send the job details or call now if it is urgent. We&apos;ll give
              clear advice before anything is booked.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="#service-enquiry"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-gold px-5 text-sm font-extrabold text-white transition hover:bg-brand-gold/80"
              >
                Request a quote
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-border px-5 text-sm font-extrabold text-brand-black transition hover:border-brand-black"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </div>
            <p className="mt-3 text-xs font-semibold text-brand-charcoal/50">
              {business.electricalContractor} · {business.arcLicence} · Public Liability Insurance held
            </p>
          </div>

          {service.intro ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70">
              {service.intro}
            </p>
          ) : null}

          {service.serviceFocus ? (
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-extrabold text-brand-black">
                What this covers
              </h2>
              <ul className="mt-5 space-y-3">
                {service.serviceFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-l-2 border-brand-gold/60 bg-white px-4 py-3 text-sm leading-6 text-brand-charcoal/80"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-black">
              Common questions
            </h2>
            <div className="mt-5 space-y-4">
              {service.faq.map((item) => (
                <article key={item.question} className="border border-brand-border bg-white p-5">
                  <h3 className="font-heading text-lg font-extrabold text-brand-black">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-charcoal/70">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div id="service-enquiry" className="scroll-mt-24">
          <InquiryForm
            defaultServiceType={SERVICE_FORM_DEFAULTS[service.slug]}
            ctaClicked={`${service.slug}_service_page_form`}
          />
        </div>
      </section>
    </main>
  );
}
