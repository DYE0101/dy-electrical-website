import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { InquiryForm } from "@/components/InquiryForm";
import { audiencePaths, priorityServices } from "@/lib/services";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dark Luxury Concept",
  description:
    "Dark luxury homepage concept for DY Electrical Services website direction comparison.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const proofPoints = [
  {
    label: "Licensed",
    detail: business.electricalContractor,
    icon: ShieldCheck,
  },
  {
    label: "Home-first",
    detail: "Fast quote path for residential work",
    icon: Home,
  },
  {
    label: "Clear next steps",
    detail: "Call, quote, manager or builder paths",
    icon: Clock,
  },
];

export default function DarkConceptPage() {
  return (
    <main className="bg-brand-black text-white">
      <section className="relative isolate min-h-[760px] overflow-hidden">
        <Image
          src="/images/architectural-lighting-home.jpg"
          alt="Exterior architectural lighting by DY Electrical Services"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.86)_42%,rgba(10,10,10,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0A0A0A_0%,rgba(10,10,10,0)_54%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1180px] px-4 gap-10 pb-14 pt-16 lg:grid-cols-[1fr_.58fr] lg:items-end lg:pb-20 lg:pt-28">
          <div>
            <Link
              href="/"
              className="focus-ring mb-8 inline-flex rounded-md border border-white/18 bg-white/8 px-3 py-2 text-xs font-bold text-white/70 hover:border-brand-goldHighlight"
            >
              View warm-premium homepage
            </Link>
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-goldHighlight">
              Dark luxury concept
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.8rem,7.4vw,5.6rem)] font-extrabold leading-[1.02]">
              Electrical work with a sharper standard from the first call.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              A more dramatic direction for DY Electrical Services: cinematic,
              premium and builder-friendly, while still giving homeowners a
              direct quote path.
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

            <div className="mt-8 flex flex-wrap gap-2">
              {[business.electricalContractor, business.arcLicence, business.insurance].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/14 bg-white/8 px-3 py-2 text-xs font-semibold text-white/68"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <aside className="rounded-lg border border-brand-goldHighlight/35 bg-brand-black/82 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-goldHighlight">
              Concept emphasis
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold">
              Premium, precise, less casual.
            </h2>
            <div className="mt-6 grid gap-4">
              {proofPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="flex gap-3 border-t border-white/12 pt-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-brand-goldHighlight" aria-hidden="true" />
                    <div>
                      <strong className="font-heading text-sm font-extrabold">
                        {point.label}
                      </strong>
                      <p className="mt-1 text-sm text-white/62">{point.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111] py-10">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-4 md:grid-cols-4">
          {[
            "Homeowners stay the priority",
            "Sharper builder credibility",
            "Stronger black/gold brand signal",
            "More dramatic first impression",
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm text-white/68">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-goldHighlight" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-[1180px] px-4">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.56fr] lg:items-end">
            <div>
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-goldHighlight">
                Audience paths
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,4vw,3.35rem)] font-extrabold leading-tight">
                Direct paths without watering down the premium feel.
              </h2>
            </div>
            <p className="text-white/62">
              This version leans more professional and dramatic. It may appeal
              more strongly to builders and premium homeowners, but risks
              feeling less warm to everyday residential visitors.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audiencePaths.map((path) => {
              const Icon = path.icon;
              return (
                <Link
                  key={path.title}
                  href={path.href}
                  className={`group rounded-lg border p-6 transition hover:-translate-y-1 ${
                    path.featured
                      ? "border-brand-goldHighlight/60 bg-white text-brand-black"
                      : "border-white/12 bg-white/5 text-white hover:border-brand-goldHighlight"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-end">
                    <Icon className="h-5 w-5 text-white/44" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold">{path.title}</h3>
                  <p
                    className={`mt-3 min-h-24 text-sm leading-6 ${
                      path.featured ? "text-brand-charcoal/70" : "text-white/62"
                    }`}
                  >
                    {path.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-extrabold text-brand-goldHighlight">
                    {path.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-background py-20 text-brand-charcoal">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 lg:grid-cols-[.86fr_.72fr] lg:items-start">
          <div>
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-gold">
              Homeowner conversion
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight text-brand-black">
              The dark version still needs a warm landing zone.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-charcoal/70">
              To keep homeowners comfortable, this concept moves into a lighter
              service section quickly. That gives the brand a luxury opening
              without making the whole experience feel too heavy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {priorityServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="border-t-2 border-brand-gold bg-white p-5 transition hover:bg-brand-black hover:text-white"
                  >
                    <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" />
                    <h3 className="mt-5 font-heading text-xl font-extrabold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-brand-charcoal/68">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-black/10 shadow-premium">
              <Image
                src="/images/residential-lighting-kitchen.jpg"
                alt="Interior residential lighting work"
                fill
                sizes="(min-width: 1024px) 460px, 92vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg border border-brand-border bg-white p-5">
              <div className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                <p className="text-sm leading-6 text-brand-charcoal/70">
                  Recommendation: if this dark version wins, keep the hero dark
                  but use warm off-white sections for services and the enquiry
                  flow so homeowners do not feel pushed into a corporate space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 lg:grid-cols-[.78fr_.72fr] lg:items-start">
          <div>
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-goldHighlight">
              Lead system
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight">
              Same backend thinking, more premium front door.
            </h2>
            <p className="mt-5 text-white/68">
              The dark concept uses the same enquiry architecture: tagged lead
              types, Australian phone normalization, suburb dropdown, email
              routing, and ServiceM8-ready payloads kept disabled until
              approved.
            </p>
          </div>

          <InquiryForm ctaClicked="dark_concept_form" />
        </div>
      </section>
    </main>
  );
}
