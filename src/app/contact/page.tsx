import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { CTAButton } from "@/components/CTAButton";
import { business } from "@/lib/constants";
import type { InquiryInput } from "@/lib/lead-schema";

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const LEAD_TYPE_DEFAULTS: Record<string, InquiryInput["leadType"]> = {
  homeowner_quote: "homeowner_quote",
  small_commercial: "small_commercial",
  property_manager: "property_manager",
  builder_partner: "builder_partner",
  general: "general",
};

function getSearchParamValue(
  params: Record<string, string | string[] | undefined>,
  key: string
) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

function getDefaultLeadType(params: Record<string, string | string[] | undefined>) {
  const type = getSearchParamValue(params, "type");
  return type ? LEAD_TYPE_DEFAULTS[type] : undefined;
}

export async function generateMetadata({ searchParams }: ContactPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const hasQueryParams = Object.keys(resolved).length > 0;
  return {
    title: "Contact — Request a Quote",
    description:
      "Request a quote or call DY Electrical Services directly. Licensed electrical work across Logan, Brisbane Southside and the Northern Gold Coast.",
    alternates: { canonical: "/contact" },
    ...(hasQueryParams && { robots: { index: false, follow: true } }),
  };
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolved = await searchParams;
  const defaultLeadType = getDefaultLeadType(resolved);

  return (
    <main className="bg-brand-background">
      <section className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 py-16 lg:grid-cols-[.75fr_.8fr] lg:py-24">
        <div className="min-w-0">
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
            Get a licensed electrician on the job.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-charcoal/70">
            Send the job details or call directly. Urgent electrical issues are
            best handled by phone so we can understand the situation quickly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={business.phoneHref}>Call {business.phoneDisplay}</CTAButton>
            <CTAButton href="/services" variant="secondary">View Services</CTAButton>
          </div>

          <dl className="mt-10 max-w-xl space-y-4 border-t border-brand-border pt-8 text-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-28 shrink-0 font-semibold text-brand-black">Phone</dt>
              <dd className="text-brand-charcoal/75">
                <a href={business.phoneHref} className="hover:text-brand-black">{business.phoneDisplay}</a>
                {" "}— 24/7 for genuine electrical emergencies
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-28 shrink-0 font-semibold text-brand-black">Email</dt>
              <dd className="text-brand-charcoal/75">
                <a href={`mailto:${business.email}`} className="hover:text-brand-black">{business.email}</a>
                {" "}— replied to the same business day
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-28 shrink-0 font-semibold text-brand-black">Based in</dt>
              <dd className="text-brand-charcoal/75">
                Bahrs Scrub QLD 4207 — servicing Logan, Brisbane Southside and
                the Northern Gold Coast ·{" "}
                <a
                  href="https://maps.app.goo.gl/xhxaBNKAbTGF5P9P7"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-black underline decoration-brand-gold/60 underline-offset-4 hover:decoration-brand-black"
                >
                  Find us on Google Maps
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-28 shrink-0 font-semibold text-brand-black">Credentials</dt>
              <dd className="text-brand-charcoal/75">
                {business.electricalContractor} · {business.arcLicence} · {business.insurance} · ABN {business.abn}
              </dd>
            </div>
          </dl>
        </div>
        <InquiryForm defaultLeadType={defaultLeadType} ctaClicked="contact_page_form" />
      </section>
    </main>
  );
}
