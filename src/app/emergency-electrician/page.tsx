import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Droplets, Flame, Phone, PlugZap, Power, ShieldCheck, Zap } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { CTAButton } from "@/components/CTAButton";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Electrician Brisbane & Logan",
  description:
    "24/7 emergency electrician across Logan, Brisbane Southside and the Northern Gold Coast. Burning smells, no power or tripping switchboards — call now.",
  alternates: { canonical: "/emergency-electrician" },
};

const emergencySigns = [
  {
    heading: "Smoke or a burning smell",
    body: "From the switchboard, a power point, a light fitting or an appliance — even if it has stopped. Overheated wiring does not fix itself.",
    icon: Flame,
  },
  {
    heading: "Sparks, arcing or buzzing",
    body: "Visible sparks, or a crackle or hum from an outlet, a switch or the switchboard. Arcing generates serious heat behind the wall.",
    icon: Zap,
  },
  {
    heading: "Power out — but only at your place",
    body: "If the neighbours have power and you don't, the problem is on your property, not the network. That needs an electrician, not a wait.",
    icon: Power,
  },
  {
    heading: "A switch that won't stay on",
    body: "A safety switch or main switch that trips again the moment you reset it. Stop resetting it — it is telling you something is wrong.",
    icon: AlertTriangle,
  },
  {
    heading: "Scorched or hot power points",
    body: "Blackened, discoloured or hot-to-touch outlets and switches mean a connection is overheating where you can't see it.",
    icon: PlugZap,
  },
  {
    heading: "Water into anything electrical",
    body: "Storm water or a leak reaching the switchboard, ceiling fittings or power points puts every circuit it touches at risk.",
    icon: Droplets,
  },
  {
    heading: "Partial power loss",
    body: "Some circuits dead while others still work — often a supply or connection fault, and the kind that gets worse rather than better.",
    icon: Power,
  },
  {
    heading: "A shock or tingle",
    body: "Any shock or tingle from an appliance, a tap or a metal fixture. Treat this as serious, keep everyone away and call immediately.",
    icon: AlertTriangle,
  },
];

const whileYouWait = [
  {
    heading: "Turn off the main switch — if it's safe to reach",
    body: "The main switch is in your switchboard. Turning it off removes power from the whole property while you wait. If reaching it means walking through water or toward smoke, stay clear and leave it to us.",
  },
  {
    heading: "Smoke or flames? Call 000 first",
    body: "If anything is actually burning, get everyone out and call Triple Zero before you call us. We attend once the property is safe to work in — the fire service comes first, every time.",
  },
  {
    heading: "Unplug what you can. Don't keep resetting",
    body: "Unplug appliances on the affected circuit if it is safe to do so. A safety switch that trips straight back off is doing its job — resetting it over and over can turn a contained fault into real damage.",
  },
  {
    heading: "Don't go looking for the fault",
    body: "Stay out of the roof space, away from wet areas and away from the meter box beyond the main switch. Finding the cause is our job — with test equipment, not torchlight.",
  },
];

const whenYouCall = [
  {
    step: "1",
    heading: "You talk to the electrician — not a call centre",
    body: "Describe what is happening and we triage it on the phone at no cost. If it is genuinely dangerous, we will say so and move. If it can safely wait until business hours, we will tell you that too — and you pay standard rates instead of emergency rates.",
  },
  {
    step: "2",
    heading: "The callout rate is confirmed before we leave",
    body: "After-hours and emergency callout rates apply — that is standard across the industry. What is not standard is confirming the rate clearly on the phone before we attend, so nothing about the invoice is decided after the fact.",
  },
  {
    step: "3",
    heading: "Made safe first. Fixed properly second",
    body: "The immediate hazard is isolated first. Then the fault is diagnosed with test equipment and the cause is repaired — not patched, not reset and hoped for. You will know what was found, what was done, and whether anything needs follow-up.",
  },
];

const faqItems = [
  {
    question: "How quickly can you get to me?",
    answer:
      "It depends on where you are and where we are when you call — so we give you an honest arrival window on the phone rather than a slogan. DY Electrical Services is based in Bahrs Scrub, so Logan suburbs are usually the fastest response, with Brisbane Southside and the Northern Gold Coast close behind. While you wait, we help you make the situation safe over the phone — which for most emergencies matters more than the minutes saved on travel.",
  },
  {
    question: "Do you charge more for after-hours and emergency callouts?",
    answer:
      "Yes — after-hours and emergency callout rates apply, as they do across the industry. The difference is that the rate is confirmed with you on the phone before we attend, so nothing on the invoice comes as a surprise. And if the problem can safely wait until business hours, we will tell you that on the phone too — sometimes the right advice is that you do not need an emergency callout at all.",
  },
  {
    question: "How do I know if it's a genuine emergency or something that can wait?",
    answer:
      "Smoke, burning smells, sparks, shocks or tingles, water into the switchboard, or a main switch that will not stay on — treat all of those as emergencies and call straight away. A single dead power point, a light that flickers occasionally, or a breaker that tripped once and reset without drama can usually wait for a booked visit at standard rates. If you are not sure, call anyway — the phone triage costs nothing and we will give you a straight answer.",
  },
  {
    question: "The whole street has lost power — should I still call you?",
    answer:
      "Check first: if the street lights are out and the neighbours are dark too, the outage is on the network side, and Energex handles that — call them on 13 62 62 or check their outage map. If the neighbours have power and you don't, or only part of your property is dead, the fault is on your side of the connection and that is exactly what we attend. If you are unsure which it is, call us and we will help you work it out.",
  },
  {
    question: "There's a burning smell but no smoke — what should I do right now?",
    answer:
      "Turn the main switch off at the switchboard if it is safe to reach, unplug appliances near the smell, and keep people away from the area. Do not open up walls or ceiling spaces looking for the source. A burning smell with no visible smoke usually means insulation or a connection overheating out of sight — it needs to be found with test equipment, not by nose. If smoke or flames appear at any point, get out and call 000 first.",
  },
  {
    question: "I'm a tenant or property manager — can you attend a rental emergency?",
    answer:
      "Yes. We work with property managers and agencies across Logan, Brisbane Southside and the Northern Gold Coast, and we regularly attend tenant emergencies. Tenants can call us directly for a genuine safety issue; for the work itself we coordinate approval with your property manager or agency, then send clear job notes and the invoice straight to them — without the back-and-forth.",
  },
  {
    question: "Which areas do you cover at night and on weekends?",
    answer:
      "The same coverage as business hours: Logan (including Beenleigh, Loganholme, Springwood, Browns Plains, Yarrabilba and Park Ridge), Brisbane Southside (including Sunnybank, Mount Gravatt and Eight Mile Plains) and the Northern Gold Coast (including Coomera, Ormeau and Pimpama). We are based in Bahrs Scrub, so we are genuinely local to the whole service area — not dispatching from the other side of the city.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `24/7 Emergency Electrician by ${business.name}`,
  serviceType: "Emergency electrician",
  provider: {
    "@type": "Electrician",
    name: business.name,
    telephone: business.phoneInternational,
    url: business.domain,
  },
  areaServed: ["Logan", "Brisbane Southside", "Northern Gold Coast"],
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: business.phoneInternational,
      contactType: "emergency",
      availableLanguage: "en",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  },
  description:
    "24/7 emergency electrical callout across Logan, Brisbane Southside and the Northern Gold Coast — burning smells, power loss, tripping switchboards, storm damage and electric shocks.",
};

export default function EmergencyElectricianPage() {
  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, serviceSchema]) }}
      />

      {/* Hero — call-first */}
      <section className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-goldHighlight">
            Available now · 24 hours, 7 days
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-white">
            24/7 emergency electrician for Logan, Brisbane Southside &amp; the
            Northern Gold Coast.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            No power, a burning smell, a switchboard that won&apos;t stay on —
            call now and you speak to a licensed electrician, not an answering
            service. We help you make it safe on the phone, confirm the callout
            rate up front, then get to you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={business.phoneHref} className="whitespace-nowrap px-7">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay} now
            </CTAButton>
            <CTAButton href="#emergency-enquiry" variant="dark" className="whitespace-nowrap px-7">
              Not urgent? Send an enquiry
            </CTAButton>
          </div>
          <p className="mt-6 text-xs font-semibold text-white/50">
            {business.electricalContractor} · {business.arcLicence} · Public
            Liability Insurance held
          </p>
        </div>
      </section>

      {/* Call now if */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
        <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
          Call now if you can see any of these
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-charcoal/70">
          These are the faults where waiting until morning is the wrong move.
          If any of them are happening at your place, call — the phone triage
          costs nothing.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {emergencySigns.map((sign) => (
            <div key={sign.heading} className="border-l-2 border-brand-gold/60 bg-white p-5">
              <sign.icon className="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-base font-extrabold text-brand-black">
                {sign.heading}
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                {sign.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* While you wait */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
              While you wait for us
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-brand-charcoal/70">
              Most electrical emergencies can be made safe in the first two
              minutes — from the switchboard, without touching the fault
              itself. We walk you through this on the phone as well.
            </p>
            <div className="mt-8 space-y-5">
              {whileYouWait.map((item, index) => (
                <div key={item.heading} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-black font-heading text-sm font-extrabold text-brand-goldHighlight">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-brand-black">
                      {item.heading}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-brand-charcoal/70">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
              What happens when you call
            </h2>
            <div className="mt-8 space-y-5">
              {whenYouCall.map((item) => (
                <div key={item.heading} className="bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-gold">
                    Step {item.step}
                  </p>
                  <h3 className="mt-2 font-heading text-base font-extrabold text-brand-black">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas + who turns up */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
            Where we attend, 24/7
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-charcoal/70">
            Emergency coverage is the same day and night. DY Electrical
            Services is owner-operated and based in Bahrs Scrub, Logan — so the
            electrician who answers the phone is the licensed contractor who
            turns up at your door, at 2pm or 2am.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Link href="/areas/logan" className="group border border-brand-border bg-white p-6 transition hover:border-brand-gold">
              <h3 className="font-heading text-lg font-extrabold text-brand-black">
                Logan
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                Our home base — usually the fastest response. Beenleigh,
                Loganholme, Springwood, Browns Plains, Yarrabilba, Park Ridge
                and surrounds.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-gold group-hover:text-brand-goldShadow">
                Emergency electrician Logan →
              </span>
            </Link>
            <Link href="/areas/brisbane-southside" className="group border border-brand-border bg-white p-6 transition hover:border-brand-gold">
              <h3 className="font-heading text-lg font-extrabold text-brand-black">
                Brisbane Southside
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                Sunnybank, Mount Gravatt, Eight Mile Plains and the southside
                corridor — minutes up the motorway from our Logan base.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-gold group-hover:text-brand-goldShadow">
                Emergency electrician Brisbane Southside →
              </span>
            </Link>
            <Link href="/areas/gold-coast" className="group border border-brand-border bg-white p-6 transition hover:border-brand-gold">
              <h3 className="font-heading text-lg font-extrabold text-brand-black">
                Northern Gold Coast
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                Coomera, Ormeau, Pimpama and the northern corridor — covered
                around the clock, not just when the schedule suits.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-gold group-hover:text-brand-goldShadow">
                Emergency electrician Northern Gold Coast →
              </span>
            </Link>
          </div>

          <div className="mt-10 max-w-3xl border-l-2 border-brand-gold/60 bg-white p-6">
            <h3 className="font-heading text-base font-extrabold text-brand-black">
              Fault that comes and goes, rather than an emergency?
            </h3>
            <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
              A circuit that fails sometimes, a breaker that trips once a week,
              a safety switch with a pattern to it — that is methodical{" "}
              <Link href="/services/fault-finding" className="font-semibold text-brand-gold hover:text-brand-goldShadow">
                fault finding
              </Link>{" "}
              at standard rates, not an emergency callout. If it is your safety
              switch, start with our guide to{" "}
              <Link href="/blog/why-does-my-safety-switch-keep-tripping" className="font-semibold text-brand-gold hover:text-brand-goldShadow">
                why safety switches keep tripping
              </Link>
              . And if the emergency turned out to be a smoke alarm chirping at
              3am, we do{" "}
              <Link href="/services/smoke-alarms" className="font-semibold text-brand-gold hover:text-brand-goldShadow">
                smoke alarm compliance
              </Link>{" "}
              too.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-brand-surface">
        <div className="mx-auto w-full max-w-[920px] px-4 py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
            Emergency callout questions
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

      {/* Non-urgent enquiry */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-16 lg:grid-cols-[1fr_.85fr] lg:py-20">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
              Not an emergency? Tell us the job instead.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-brand-charcoal/70">
              If it can wait for a booked visit, send the details and we will
              come back with clear advice and honest timing — at standard
              rates, without the after-hours loading. For anything on the list
              above, skip the form and call{" "}
              <a href={business.phoneHref} className="font-semibold text-brand-gold hover:text-brand-goldShadow">
                {business.phoneDisplay}
              </a>
              .
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Straight answer on whether it is urgent or can wait",
                "Attended by the licensed contractor, not a rostered subcontractor",
                "The cause fixed and explained — not reset and hoped for",
                "Written record of what was found and what was done",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-charcoal/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-brand-charcoal/50">
              <ShieldCheck className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {business.electricalContractor} · {business.arcLicence} · Public
              Liability Insurance held
            </p>
          </div>
          <div id="emergency-enquiry" className="scroll-mt-24">
            <InquiryForm
              defaultServiceType="Fault finding"
              ctaClicked="emergency_page_form"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
