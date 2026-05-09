import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { CTAButton } from "@/components/CTAButton";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Request a Quote",
  description:
    "Request a quote or call DY Electrical Services directly. Licensed electrical work across Logan, Brisbane Southside and the Northern Gold Coast.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-brand-background">
      <section className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 py-16 lg:grid-cols-[.75fr_.8fr] lg:py-24">
        <div>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
            Tell us what needs sorting.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-charcoal/70">
            Send the job details or call directly. Urgent electrical issues are
            best handled by phone so we can understand the situation quickly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={business.phoneHref}>Call {business.phoneDisplay}</CTAButton>
            <CTAButton href="/services" variant="secondary">View Services</CTAButton>
          </div>
        </div>
        <InquiryForm ctaClicked="contact_page_form" />
      </section>
    </main>
  );
}
