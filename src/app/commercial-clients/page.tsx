import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electrical for Commercial Clients",
  description:
    "Commercial electrical support for shops, offices, clinics, warehouses and small business sites across Logan, Brisbane Southside and the Northern Gold Coast.",
  alternates: { canonical: "/commercial-clients" },
};

const features = [
  {
    heading: "Minimal disruption",
    body: "We plan work around trading hours, access windows and site requirements so the work stays out of your customers' way.",
  },
  {
    heading: "Sharp commercial finishes",
    body: "Lighting, power, data and switchboard work finished neatly for customer-facing and staff-facing spaces.",
  },
  {
    heading: "Clear scope and communication",
    body: "You get direct communication, practical advice and a clear path from enquiry to completion.",
  },
  {
    heading: "Compliance-aware work",
    body: "Work is tested, labelled and completed by a licensed electrical contractor with the right documentation where required.",
  },
];

const services = [
  "Lighting upgrades for shops, offices and clinics",
  "Power points, circuits and equipment connections",
  "Data cabling and Wi-Fi access points",
  "Switchboard upgrades and safety switch work",
  "Fault finding and urgent repairs",
  "Small commercial fit-out electrical work",
  "Air conditioning electrical support",
  "Maintenance for offices, workshops and tenancies",
];

const faqItems = [
  {
    question: "What types of commercial sites do you work on?",
    answer:
      "We support shops, offices, clinics, workshops, warehouses, small tenancies and boutique commercial fit-outs across our service area.",
  },
  {
    question: "Can you work outside business hours?",
    answer:
      "Yes, where the job requires it. We confirm access, timing and any after-hours requirements before booking the work.",
  },
  {
    question: "Do you handle data cabling as well as electrical work?",
    answer:
      "Yes. We install Cat6 data cabling, wall plates, patch panels and Wi-Fi access points for homes and small commercial spaces.",
  },
  {
    question: "Can you support a fit-out or tenancy change?",
    answer:
      "Yes. We can help with lighting, power, data, switchboard requirements and practical electrical advice during small commercial fit-outs.",
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

export default function CommercialClientsPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Electrical support for commercial clients who need it handled properly.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          Electrical work for shops, offices, clinics, workshops and small
          commercial sites across Logan, Brisbane Southside and the Northern
          Gold Coast.
        </p>
      </section>

      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-16 lg:grid-cols-[1fr_.85fr] lg:py-24">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-black">
              Built for working sites
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.heading} className="bg-white p-6">
                  <h3 className="font-heading text-base font-extrabold text-brand-black">
                    {feature.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-heading text-2xl font-extrabold text-brand-black">
              Commercial work covered
            </h2>
            <ul className="mt-5 space-y-2">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-brand-charcoal/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <InquiryForm
            defaultLeadType="small_commercial"
            ctaClicked="commercial_clients_page_form"
          />
        </div>
      </section>

      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">
            Commercial client questions
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

      <section className="bg-brand-black">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between lg:py-20">
          <div>
            <p className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Need commercial electrical support?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Send the site type, suburb and scope so we can confirm the right
              approach.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?type=small_commercial"
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
            >
              Discuss commercial work
            </Link>
            <a
              href={business.phoneHref}
              className="inline-block border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
