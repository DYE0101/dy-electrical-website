import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/constants";
import { CTAButton } from "@/components/CTAButton";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto grid w-full max-w-[1180px] px-4 gap-10 py-14 md:grid-cols-[1.4fr_.7fr_.7fr_.7fr]">
        <div>
          <Image
            src="/logos/logo-dark-background.jpg"
            alt="DY Electrical Services"
            width={260}
            height={180}
            className="mb-6 h-auto w-36 mix-blend-screen [clip-path:inset(2px_8px_2px_2px)]"
          />
          <p className="max-w-md text-sm leading-6 text-white/68">
            Precision work, clear communication and no surprises — across
            Brisbane, Logan and the Gold Coast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href={business.phoneHref} variant="dark">
              Call {business.phoneDisplay}
            </CTAButton>
            <CTAButton href="/contact?type=homeowner_quote">Request a Quote</CTAButton>
          </div>
          <div className="mt-8 space-y-1 text-xs text-white/40">
            <p>{business.electricalContractor}</p>
            <p>{business.arcLicence}</p>
            <p>ABN {business.abn}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/services/switchboard-upgrades" className="hover:text-white transition-colors">Switchboard Upgrades</Link></li>
            <li><Link href="/services/ev-chargers" className="hover:text-white transition-colors">EV Charger Installation</Link></li>
            <li><Link href="/services/air-conditioning" className="hover:text-white transition-colors">Air Conditioning</Link></li>
            <li><Link href="/services/fault-finding" className="hover:text-white transition-colors">Fault Finding &amp; Emergency</Link></li>
            <li><Link href="/services/lighting-power" className="hover:text-white transition-colors">Lighting &amp; Power</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors font-semibold">All Services →</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
            Areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/areas/logan" className="hover:text-white transition-colors">Logan</Link></li>
            <li><Link href="/areas/brisbane-southside" className="hover:text-white transition-colors">Brisbane Southside</Link></li>
            <li><Link href="/areas/gold-coast" className="hover:text-white transition-colors">Northern Gold Coast</Link></li>
            <li><Link href="/areas-serviced" className="hover:text-white transition-colors font-semibold">All Areas →</Link></li>
          </ul>
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
            Work With Us
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/homeowners" className="hover:text-white transition-colors">Homeowners</Link></li>
            <li><Link href="/real-estate-agents" className="hover:text-white transition-colors">Real Estate & Property Managers</Link></li>
            <li><Link href="/builders" className="hover:text-white transition-colors">Builders</Link></li>
            <li><Link href="/commercial-clients" className="hover:text-white transition-colors">Commercial Clients</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/12 pt-5 pb-20 md:py-5">
        <div className="mx-auto flex w-full max-w-[1180px] px-4 flex-col gap-2 text-xs text-white/52 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>{business.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
