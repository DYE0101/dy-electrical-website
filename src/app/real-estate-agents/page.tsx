import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { business } from "@/lib/constants";

const faqItems = [
  {
    question: "Do you work directly with real estate agencies?",
    answer:
      "Yes — we work directly with real estate agencies as the primary contact. You book the job, we coordinate with the tenant for access, and you get clear documentation back for your records and the owner.",
  },
  {
    question: "Do you communicate directly with tenants?",
    answer:
      "Yes — we coordinate directly with tenants to book access. We keep the agency and property manager informed without copying them on every exchange.",
  },
  {
    question: "How quickly can you attend urgent fault calls?",
    answer:
      "Same-day attendance is standard for urgent faults across our core service area (Logan, Brisbane Southside, Northern Gold Coast). For genuine electrical emergencies we are available 24/7.",
  },
  {
    question: "Do you provide documentation for the owner and agency?",
    answer:
      "Yes — after every job you receive clear notes covering what was found, what was done, and any follow-up items. Suitable for owner reporting and agency records.",
  },
  {
    question: "Can you handle smoke alarm compliance?",
    answer:
      "Yes. We test and install interconnected photoelectric smoke alarms to Queensland legislation requirements and provide documentation on completion.",
  },
  {
    question: "Do you work with multiple agencies?",
    answer:
      "We work with real estate agencies and property managers of all sizes. We do not require exclusivity agreements — we focus on making every job straightforward regardless of your current trade arrangements.",
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
  title: "Property Manager Electrician | Logan, Brisbane Southside & Gold Coast",
  description:
    "Responsive electrical maintenance for real estate agencies and property managers across Logan, Brisbane Southside and the Northern Gold Coast. We work directly with your agency, coordinate with tenants, and provide clear documentation every time.",
  alternates: { canonical: "/real-estate-agents" },
};

const features = [
  {
    heading: "We work with your agency directly",
    body: "Real estate agencies are our primary contact. You book, we handle the rest — tenant coordination, access, job notes back to you. No chasing required.",
  },
  {
    heading: "Direct tenant communication",
    body: "We coordinate directly with tenants to book access — you don't need to be the go-between. We keep you informed, not copied on every message.",
  },
  {
    heading: "We show up when booked",
    body: "No chasing, no missed appointments without notice. If something changes, we call ahead — not after the fact.",
  },
  {
    heading: "Clear job notes, every time",
    body: "After every job you get a clear record of what was done, what was found and what (if anything) needs follow-up. No ambiguous invoices.",
  },
  {
    heading: "Compliance-ready work",
    body: "Smoke alarm testing, RCD checks, fault repairs — all done to Queensland standards and documented correctly for your records.",
  },
  {
    heading: "Portfolio coverage across South East Queensland",
    body: "We cover Logan, Brisbane Southside and the Northern Gold Coast — one point of contact across your entire portfolio in these areas.",
  },
];

const services = [
  "Tenant fault repairs — responsive attendance",
  "Smoke alarm testing and compliance",
  "RCD and safety switch upgrades",
  "Switchboard inspections",
  "Lighting, power point and fan replacements",
  "End-of-lease and pre-lease electrical checks",
  "Air conditioning electrical support",
  "Urgent fault response",
];

export default function RealEstateAgentsPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Electrical support that makes your job easier.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          We work directly with real estate agencies and property managers —
          responsive scheduling, direct tenant coordination, and clear
          documentation for every job across Logan, Brisbane Southside and the
          Northern Gold Coast.
        </p>
      </section>

      {/* Features + Form */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-16 lg:grid-cols-[1fr_.85fr] lg:py-24">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-black">
              What we do differently
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.heading} className="bg-white p-6">
                  <h3 className="font-heading text-base font-extrabold text-brand-black">
                    {f.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-heading text-2xl font-extrabold text-brand-black">
              Services covered
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
            defaultLeadType="property_manager"
            ctaClicked="real_estate_page_form"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">
            Common questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="bg-white p-6">
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
              Ready to set up a maintenance account?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Send through your portfolio details and we&apos;ll discuss
              coverage and turnaround expectations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
            >
              Get in touch
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
