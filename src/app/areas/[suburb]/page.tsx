import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { areaPages, getAreaPage } from "@/lib/area-pages";
import { business } from "@/lib/constants";

type SuburbPageProps = {
  params: Promise<{ suburb: string }>;
};

export function generateStaticParams() {
  return areaPages.map((area) => ({ suburb: area.slug }));
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const { suburb } = await params;
  const area = getAreaPage(suburb);

  if (!area) return {};

  return {
    title: `Electrician ${area.suburb} | DY Electrical`,
    description: `Licensed electrician in ${area.suburb}, ${area.region}: switchboards, EV chargers, air conditioning, fault finding and 24/7 emergency callout.`,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `Electrician ${area.suburb} | DY Electrical`,
      description: `Licensed electrician in ${area.suburb}. 24/7 emergency callout across ${area.region}.`,
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
    },
  };
}

const services = [
  { title: "Switchboard upgrades", href: "/services/switchboard-upgrades" },
  { title: "EV charger installation", href: "/services/ev-chargers" },
  { title: "Air conditioning installation", href: "/services/air-conditioning" },
  { title: "Fault finding & 24/7 emergency", href: "/services/fault-finding" },
  { title: "Lighting & power upgrades", href: "/services/lighting-power" },
];

export default async function SuburbPage({ params }: SuburbPageProps) {
  const { suburb } = await params;
  const area = getAreaPage(suburb);

  if (!area) notFound();

  const faqItems = [
    {
      question: `How quickly can you get to ${area.suburb}?`,
      answer: `We are based in Bahrs Scrub — ${area.driveTime} from ${area.suburb}. For booked jobs, same-day or next-day scheduling is standard. For 24/7 emergencies we respond as fast as safely possible.`,
    },
    {
      question: `Are you licensed to do electrical work in ${area.suburb}?`,
      answer: `Yes. We hold Electrical Contractor Licence No. 87141 and ARC Licence L179309, covering all electrical and refrigeration work across Queensland including ${area.suburb} and the wider ${area.region} area.`,
    },
    {
      question: `Do you cover ${area.topSuburbs?.[0] ?? "nearby suburbs"} as well as ${area.suburb}?`,
      answer: `Yes — we service ${area.suburb} and surrounding suburbs including ${(area.topSuburbs ?? []).join(", ")}. If you're nearby, just ask — we'll confirm coverage when you get in touch.`,
    },
    {
      question: `Do you do emergency electrical callouts in ${area.suburb} after hours?`,
      answer: `Yes. We run 24/7 emergency callout for genuine electrical emergencies across ${area.suburb} and the ${area.region} area. After-hours rates apply and are confirmed before we attend.`,
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

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Electrician ${area.suburb}`,
    provider: {
      "@type": "Electrician",
      name: business.name,
      telephone: business.phoneDisplay,
      url: business.domain,
      "@id": `${business.domain}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: area.suburb,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.region,
      },
    },
    description: `Licensed electrical services for ${area.suburb} residents — switchboard upgrades, EV charger installation, air conditioning, fault finding and 24/7 emergency callout.`,
  };

  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localSchema]) }}
      />

      {/* Breadcrumb */}
      <div className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 pt-6">
          <Breadcrumbs
            items={[
              { label: "Areas Serviced", href: "/areas-serviced" },
              { label: area.suburb, href: `/areas/${area.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-black text-white">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 lg:py-20">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-gold">
            {area.suburb} — {area.region}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight">
            Licensed electrician for {area.suburb}.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            {area.localNote} Switchboard upgrades, EV chargers, air
            conditioning, fault finding and 24/7 emergency callout — the same
            licensed electrician for every job.
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
              {area.driveTime} from our base
            </span>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="border-b border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-14">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
            Electrical work in {area.suburb}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-charcoal/70">
            {area.housingNote}
          </p>
          {area.topSuburbs && (
            <p className="mt-4 text-sm text-brand-charcoal/60">
              We also regularly service:{" "}
              {area.topSuburbs.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < area.topSuburbs!.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-14">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
            Services available in {area.suburb}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between border border-brand-border bg-brand-background px-5 py-4 transition hover:border-brand-black"
              >
                <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-black">
                  {service.title}
                </span>
                <ArrowRight className="h-4 w-4 text-brand-charcoal/40 transition group-hover:translate-x-1 group-hover:text-brand-black" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[920px] px-4 py-14">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
            {area.suburb} electrical questions
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
              Get a quote for your {area.suburb} job.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell us the suburb and what needs doing — we&apos;ll come back
              with clear advice and a fixed price. Most enquiries are replied to
              the same business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                {area.driveTime} from our base in Bahrs Scrub
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                24/7 emergency callout across {area.region}
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/40 shrink-0" aria-hidden="true" />
                Lic. No. 87141 · ARC L179309 · Publicly insured
              </p>
            </div>
          </div>
          <InquiryForm defaultSuburb={area.suburb} ctaClicked={`${area.slug}_area_page_form`} />
        </div>
      </section>
    </main>
  );
}
