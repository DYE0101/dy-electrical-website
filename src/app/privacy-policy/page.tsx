import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | DY Electrical Services",
  description:
    "How DY Electrical Services collects, uses and protects your personal information — enquiry details, photos and website analytics — and how to contact us.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "12 June 2026";

function PolicySection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-[0.95rem] leading-7 text-brand-charcoal/80">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-background">
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight text-brand-black">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-brand-charcoal/60">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 text-base leading-7 text-brand-charcoal/80">
            {business.legalName} (ABN {business.abn}) (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This
            policy explains what personal information we collect through this
            website and in the course of providing electrical services, how we
            use it, who we share it with, and how you can contact us about it.
            We handle personal information in line with the Privacy Act 1988
            (Cth) and the Australian Privacy Principles.
          </p>

          <PolicySection heading="What we collect">
            <p>
              When you submit an enquiry through this website, we collect the
              details you provide:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your name, phone number and email address</li>
              <li>
                Your suburb, the type of service you&rsquo;re asking about, your
                preferred timing and your message
              </li>
              <li>
                Any photos you choose to attach to your enquiry (for example,
                photos of a switchboard or fault)
              </li>
            </ul>
            <p>
              We also collect personal information directly when you call,
              email or message us, and in the normal course of quoting,
              scheduling and completing work — such as your property address
              and details of the work performed.
            </p>
            <p>
              When you browse this website, limited technical data is collected
              automatically — see &ldquo;Cookies and analytics&rdquo; below.
              Enquiry submissions also record the page you enquired from and,
              where you arrived via an ad or campaign link, basic campaign
              tracking parameters. This helps us understand which pages and
              campaigns our enquiries come from.
            </p>
          </PolicySection>

          <PolicySection heading="How we use your information">
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to your enquiry and provide quotes</li>
              <li>To schedule, perform and follow up electrical work</li>
              <li>
                To keep records we are required to hold as a licensed
                electrical contractor, and for invoicing and accounting
              </li>
              <li>
                To understand how visitors use our website so we can improve it
                and measure our marketing
              </li>
            </ul>
            <p>
              We do not sell personal information, and we do not use it for
              third-party marketing.
            </p>
          </PolicySection>

          <PolicySection heading="Who we share it with">
            <p>
              We share personal information only with the service providers we
              use to run the business, and only to the extent needed:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Email delivery</strong> — website enquiries are
                delivered to us as email via a transactional email provider
                (currently Resend)
              </li>
              <li>
                <strong>Website hosting</strong> — this website is hosted on
                Vercel
              </li>
              <li>
                <strong>Analytics</strong> — Google Analytics (see below)
              </li>
              <li>
                <strong>Business systems</strong> — job management, quoting,
                invoicing and accounting software used to manage your job
              </li>
            </ul>
            <p>
              We may also disclose personal information where required by law,
              or to our professional advisers and insurers where reasonably
              necessary.
            </p>
          </PolicySection>

          <PolicySection heading="Overseas disclosure">
            <p>
              Some of the providers above (including our hosting, email
              delivery and analytics providers) store or process data on
              servers located outside Australia, including in the United
              States. We use reputable providers with their own privacy and
              security commitments, but information handled by them is subject
              to the laws of those countries.
            </p>
          </PolicySection>

          <PolicySection heading="Cookies and analytics">
            <p>
              We use Google Analytics 4 to understand how visitors find and use
              this website — for example, which pages are visited and whether
              an enquiry was submitted. Google Analytics uses cookies and
              collects technical data such as device type, browser, approximate
              location and pages viewed. It does not give us your name or
              contact details.
            </p>
            <p>
              You can opt out of Google Analytics using Google&rsquo;s{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-gold underline underline-offset-2 hover:text-brand-black transition-colors"
              >
                browser opt-out add-on
              </a>
              , or block cookies in your browser settings. The website works
              without analytics cookies.
            </p>
          </PolicySection>

          <PolicySection heading="Storage, security and retention">
            <p>
              Enquiries are delivered to our business email and stored in the
              systems described above. We take reasonable steps to protect
              personal information from misuse, interference, loss and
              unauthorised access — including access controls on our accounts
              and the use of established, security-conscious providers.
            </p>
            <p>
              We keep personal information for as long as needed to deliver our
              services and to meet our legal obligations — including electrical
              safety, taxation and business record-keeping requirements — and
              then take reasonable steps to delete or de-identify it.
            </p>
          </PolicySection>

          <PolicySection heading="Access, correction and complaints">
            <p>
              You can ask us at any time to access or correct the personal
              information we hold about you, or ask us to delete information we
              no longer need to keep. Contact us using the details below and we
              will respond within a reasonable time.
            </p>
            <p>
              If you have a concern about how we have handled your personal
              information, contact us first and we will work to resolve it. If
              you are not satisfied with our response, you can complain to the
              Office of the Australian Information Commissioner (OAIC) at{" "}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-gold underline underline-offset-2 hover:text-brand-black transition-colors"
              >
                oaic.gov.au
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection heading="Changes to this policy">
            <p>
              We may update this policy from time to time as our services or
              providers change. The current version will always be published on
              this page, with the date it was last updated shown at the top.
            </p>
          </PolicySection>

          <PolicySection heading="Contact us">
            <p>
              {business.legalName}
              <br />
              ABN {business.abn}
              <br />
              {business.address}
            </p>
            <p>
              Phone:{" "}
              <a
                href={business.phoneHref}
                className="font-semibold text-brand-gold hover:text-brand-black transition-colors"
              >
                {business.phoneDisplay}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${business.email}`}
                className="font-semibold text-brand-gold hover:text-brand-black transition-colors"
              >
                {business.email}
              </a>
            </p>
            <p>
              <Link
                href="/contact"
                className="font-semibold text-brand-gold underline underline-offset-2 hover:text-brand-black transition-colors"
              >
                Or send us a message through the contact page →
              </Link>
            </p>
          </PolicySection>
        </div>
      </section>
    </main>
  );
}
