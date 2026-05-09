import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/lib/constants";

const topLinks = [
  { label: "Switchboard Upgrades", href: "/services/switchboard-upgrades" },
  { label: "EV Charger Installation", href: "/services/ev-chargers" },
  { label: "Fault Finding & Emergency", href: "/services/fault-finding" },
  { label: "Air Conditioning", href: "/services/air-conditioning" },
  { label: "Electrician Logan", href: "/areas/logan" },
  { label: "Electrician Brisbane Southside", href: "/areas/brisbane-southside" },
];

export default function NotFound() {
  return (
    <main className="bg-brand-background">
      <section className="mx-auto flex w-full max-w-[1180px] flex-col items-start px-4 py-20 lg:py-32">
        <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/40">
          404
        </p>
        <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Page not found.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-brand-charcoal/70">
          The page you were looking for doesn&apos;t exist or has moved. Try
          one of the links below, or call us directly if it&apos;s urgent.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-block bg-brand-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-charcoal"
          >
            Back to home
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center border border-brand-black/20 bg-white px-7 py-3.5 text-sm font-semibold text-brand-black transition hover:border-brand-black"
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>

        <div className="mt-16 w-full border-t border-brand-border pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal/50">
            Popular pages
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between border border-brand-border bg-white px-5 py-4 text-sm font-semibold text-brand-charcoal transition hover:border-brand-black hover:text-brand-black"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
