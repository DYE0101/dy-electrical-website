import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Electrician in Logan, Brisbane Southside & the Northern Gold Coast",
  description:
    "Licensed residential electrical work for homeowners across Logan, Brisbane Southside and the Northern Gold Coast. Switchboards, EV chargers, lighting, fans, air conditioning and fault finding.",
  alternates: { canonical: "/homeowners" },
};

const features = [
  {
    heading: "Clear advice before work starts",
    body: "We explain what needs doing, what can wait and what matters for safety, compliance and future upgrades.",
  },
  {
    heading: "Work that respects your home",
    body: "Neat cable runs, tidy finishes and careful work around finished walls, cabinetry, flooring and paint.",
  },
  {
    heading: "Licensed, tested and documented",
    body: "Work is completed by a licensed electrical contractor, tested properly and documented where required.",
  },
  {
    heading: "Straightforward scheduling",
    body: "We confirm timing, communicate clearly and let you know early if anything needs to change.",
  },
];

const services = [
  "Switchboard upgrades and safety switch work",
  "EV charger installation and dedicated circuits",
  "Lighting, power points and ceiling fans",
  "Split system air conditioning electrical support",
  "Smoke alarm installation and compliance",
  "Data cabling and Wi-Fi access points",
  "Fault finding and urgent repairs",
  "Renovation and extension electrical work",
];

const faqItems = [
  {
    question: "Do you handle small residential jobs as well as larger upgrades?",
    answer:
      "Yes. We handle small repairs, planned upgrades and larger residential scopes across Logan, Brisbane Southside and the Northern Gold Coast.",
  },
  {
    question: "Can you help me decide what work is urgent?",
    answer:
      "Yes. If something is safety-critical, we will say so clearly. If an upgrade can be planned rather than rushed, we will explain that too.",
  },
  {
    question: "Do you work around renovations and other trades?",
    answer:
      "Yes. We regularly support renovations, extensions and fit-offs where timing, sharp finishes and clear communication matter.",
  },
  {
    question: "Are you available for emergency electrical issues?",
    answer:
      "Yes. For genuine electrical emergencies, call directly. Burning smells, water near active circuits, total power loss and repeated tripping that will not reset should be treated seriously.",
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

export default function HomeownersPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Electrical work for homeowners who want it done properly.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          Licensed residential electrical work across Logan, Brisbane Southside
          and the Northern Gold Coast. Clear advice, work done properly and no
          guesswork inside your home.
        </p>
      </section>

      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-16 lg:grid-cols-[1fr_.85fr] lg:py-24">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-black">
              Why homeowners call DY Electrical Services
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
              Residential work covered
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
            defaultLeadType="homeowner_quote"
            ctaClicked="homeowners_page_form"
          />
        </div>
      </section>

      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">
            Homeowner questions
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
              Need electrical work at home?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Send the suburb and job details, or call directly if it is urgent.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?type=homeowner_quote"
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
            >
              Request a quote
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
