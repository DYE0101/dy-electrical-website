import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Licensed Electrician Logan & Brisbane",
  description:
    "DY Electrical Services is a licensed electrical contractor based in Logan, servicing Brisbane Southside and the Northern Gold Coast. Residential, commercial and property management electrical work — done properly.",
  alternates: { canonical: "/about" },
};

const credentials = [
  business.electricalContractor,
  business.arcLicence,
  business.insurance,
  `ABN ${business.abn}`,
];

const values = [
  {
    heading: "Clear communication",
    body: "You'll know what's happening, when, and why — before anything is touched. No surprises on the day, no mystery on the invoice.",
  },
  {
    heading: "Clean workmanship",
    body: "Every job is finished as if it's going into our own home. Cables are run neatly, finishes are respected, and the site is left clean.",
  },
  {
    heading: "Reliable attendance",
    body: "We show up when we say we will. For property managers and builders especially, that's not optional — it's the baseline.",
  },
  {
    heading: "Honest advice",
    body: "If the job doesn't need doing, we'll tell you. If there's a better approach, we'll say so. Trust is built over time and we're not interested in shortcuts.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dayne Yetman",
  jobTitle: "Licensed Electrician & Director",
  worksFor: {
    "@type": "Electrician",
    name: business.name,
    url: business.domain,
  },
  url: `${business.domain}/about`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bahrs Scrub",
    addressRegion: "QLD",
    postalCode: "4207",
    addressCountry: "AU",
  },
  knowsAbout: [
    "Electrical installations",
    "Switchboard upgrades",
    "EV charger installation",
    "Air conditioning installation",
    "Fault finding and emergency electrical",
    "Residential electrical work",
    "Commercial electrical work",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "QBCC Electrical Contractor Licence",
      credentialCategory: "Licence",
      recognizedBy: {
        "@type": "Organization",
        name: "Queensland Building and Construction Commission",
        alternateName: "QBCC",
      },
      identifier: "87141",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ARC Refrigeration Handling Licence",
      credentialCategory: "Licence",
      identifier: "L179309",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Licensed electrical work with precision, care and no surprises.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          DY Electrical Services is a licensed electrical contractor based in
          Logan, servicing homes, businesses and managed properties across
          Brisbane Southside and the Northern Gold Coast.
        </p>
      </section>

      {/* Story */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-brand-black">
                Built on doing the job properly.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-brand-charcoal/80">
                <p>
                  DY Electrical Services was founded by Dayne Yetman — a fully
                  licensed electrician with hands-on experience across
                  residential, commercial and property management electrical
                  work.
                </p>
                <p>
                  The business was built around a straightforward idea: deliver
                  electrical work that is done properly, communicated clearly,
                  and finished to a standard worth being proud of. No cutting
                  corners, no vague quotes, no chasing for updates.
                </p>
                <p>
                  Operating out of Logan with coverage across Brisbane Southside
                  and the Northern Gold Coast, we work with homeowners,
                  property managers, builders and small businesses who need
                  electrical work handled without the back-and-forth.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="flex flex-col justify-start">
              <h3 className="font-heading text-lg font-extrabold text-brand-black">
                Licences &amp; credentials
              </h3>
              <ul className="mt-5 divide-y divide-gray-200 bg-white">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="px-5 py-4 text-sm font-semibold text-brand-charcoal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-charcoal/50">
                Licence details can be verified through the Queensland Building
                and Construction Commission (QBCC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-brand-black">
            How we work
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-brand-charcoal/70">
            These aren&apos;t values on a wall. They&apos;re the standard every
            job is held to.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.heading} className="bg-brand-background p-7">
                <h3 className="font-heading text-lg font-extrabold text-brand-black">
                  {v.heading}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/70">
                  {v.body}
                </p>
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
              Ready to get started?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Tell us about the job and we&apos;ll come back with clear advice
              and a fixed price.
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
