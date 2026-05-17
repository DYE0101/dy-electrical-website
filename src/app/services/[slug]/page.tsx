import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { servicePages } from "@/lib/service-pages";
import { business } from "@/lib/constants";

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
    description: service.summary,
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
      "@type": "ElectricalContractor",
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

        <InquiryForm ctaClicked={`${service.slug}_service_page_form`} />
      </section>
    </main>
  );
}
