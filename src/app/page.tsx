import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { InquiryForm } from "@/components/InquiryForm";
import { GoogleReviews } from "@/components/GoogleReviews";
import { getGoogleReviews } from "@/lib/google-reviews";
import { audiencePaths, priorityServices } from "@/lib/services";
import { business } from "@/lib/constants";

export const revalidate = 43200;

export default async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-black text-white">
        <Image
          src="/images/residential-lighting-kitchen.jpg"
          alt="Residential kitchen lighting completed by DY Electrical Services"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[center_58%] opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96)_0%,rgba(10,10,10,0.82)_44%,rgba(10,10,10,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0A0A0A_0%,rgba(10,10,10,0.56)_36%,rgba(10,10,10,0.08)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[650px] w-full max-w-[1180px] px-4 gap-10 py-14 lg:grid-cols-[1fr_390px] lg:items-end lg:py-20">
          <div className="min-w-0">
            <h1 className="max-w-[21rem] break-words font-heading text-[clamp(1.7rem,7.2vw,2rem)] font-extrabold leading-[1.08] sm:max-w-3xl sm:text-[clamp(2.35rem,5.4vw,4.65rem)] sm:leading-[1.04]">
              Licensed Electrician for{" "}
              <br className="sm:hidden" />
              Logan, Brisbane Southside &amp;
              <br className="hidden sm:block" />
              <br className="sm:hidden" />
              the Northern Gold Coast.
            </h1>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-widest text-brand-gold/80">
              One team. One standard. Done Once Done Right.
            </p>
            <p className="mt-4 max-w-[21rem] text-base leading-7 text-white/72 sm:max-w-2xl sm:text-lg sm:leading-8">
              DY Electrical was built on a simple idea — show up, do it right, stand behind it. Every electrician on our team works to the same standard. That&apos;s why we back every job with a lifetime guarantee.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact?type=homeowner_quote" className="sm:min-w-44">
                Request a Quote
              </CTAButton>
              <CTAButton href={business.phoneHref} variant="dark" className="sm:min-w-44">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {business.phoneDisplay}
              </CTAButton>
            </div>

            <p className="mt-8 max-w-[21rem] break-words text-xs leading-5 text-white/68 sm:max-w-full">
              Lic. No. 87141 · ARC L179309 · Publicly Insured · ABN 75 643 388 416
            </p>
          </div>

          <aside className="hidden lg:block rounded-lg border border-white/16 bg-brand-black/78 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
            <h2 className="font-heading text-2xl font-extrabold leading-tight">
              What&apos;s the job?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              For urgent work, call directly. For quotes and planned jobs, use
              the form — the job gets properly scoped before anything is booked.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Home electrical repairs, upgrades and installations.",
                "Rental maintenance and property manager requests.",
                "Small commercial fit-outs and builder enquiries.",
              ].map((item) => (
                <div key={item} className="flex gap-3 border-t border-white/12 pt-4 text-sm text-white/64">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/36" />
                  <span className="min-w-0 break-words">{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Audience paths */}
      <section className="relative -mt-px bg-brand-background pb-20 pt-16 before:pointer-events-none before:absolute before:inset-x-0 before:-top-px before:h-20 before:bg-gradient-to-b before:from-brand-black before:to-brand-background after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:bg-gradient-to-b after:from-brand-background after:to-brand-black">
        <div className="relative z-10 mx-auto grid w-full max-w-[1180px] px-4 gap-4 md:grid-cols-2 xl:grid-cols-[1.18fr_1fr_1fr_1fr]">
          {audiencePaths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.title}
                href={path.href}
                className={`group min-w-0 rounded-lg border p-6 transition hover:-translate-y-1 hover:shadow-premium ${
                  path.featured
                    ? "border-brand-black bg-brand-black text-white shadow-premium"
                    : "border-brand-border bg-white text-brand-charcoal hover:border-brand-black/30"
                }`}
              >
                <div className="mb-5 flex items-center justify-end">
                  <Icon className={`h-5 w-5 ${path.featured ? "text-white/50" : "text-brand-charcoal/40"}`} aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-extrabold">{path.title}</h2>
                <p className={`mt-3 md:min-h-24 text-sm leading-6 ${path.featured ? "text-white/70" : "text-brand-charcoal/68"}`}>
                  {path.description}
                </p>
                <span className={`mt-5 inline-flex items-center text-sm font-extrabold ${path.featured ? "text-white/80" : "text-brand-charcoal/70"}`}>
                  <span className="min-w-0">{path.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-brand-black py-20 text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="mx-auto w-full max-w-[1180px] px-4">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.62fr] lg:items-end">
            <h2 className="max-w-3xl font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight">
              From everyday electrical work to quality upgrades, we take care of the details that matter.
            </h2>
            <p className="text-white/60">
              From switchboards and lighting to air conditioning and EV charging — clear advice, tidy work and no guesswork.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {priorityServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group min-w-0 md:min-h-[250px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.065]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/12 bg-white/6">
                    <Icon className="h-6 w-6 text-white/52" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-extrabold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58 group-hover:text-white/72">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-white/56">
                    View service
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality / proof */}
      <section className="bg-brand-black py-20 text-white">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 lg:grid-cols-[.86fr_.72fr] lg:items-center">
          <div className="relative min-h-[220px] lg:min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
            <Image
              src="/images/architectural-lighting-home.jpg"
              alt="Exterior architectural lighting by DY Electrical Services"
              fill
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight text-white">
              Every job finished the same way — properly.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              We don&apos;t believe &ldquo;good enough&rdquo; is good enough. Every job is
              completed with care, tested where required, with the site left as we found it
              and communicated clearly before we leave — so there are no loose
              ends after handover.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Finished to standard", "Clear communication", "Tested and compliant", "No loose ends"].map((item) => (
                <div key={item} className="border-l-2 border-brand-gold/70 bg-white/[0.045] p-4 text-sm font-semibold text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews summary={googleReviews} transitionFromDark />

      {/* Enquiry */}
      <section className="bg-brand-black py-20 text-white">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 lg:grid-cols-[.8fr_.72fr] lg:items-start">
          <div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight">
              Get the right next step without a long back-and-forth.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              Fill in the form with what you need and where the job is. Most
              enquiries are replied to within the same business day.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-white/52">
              <MapPin className="h-5 w-5 text-white/40 shrink-0" aria-hidden="true" />
              <span>Based near Logan and servicing Brisbane Southside, Logan, the Northern Gold Coast and surrounding suburbs.</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/52">
              <ShieldCheck className="h-5 w-5 text-white/40 shrink-0" aria-hidden="true" />
              <span>Licensed, ARC registered and publicly insured.</span>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
