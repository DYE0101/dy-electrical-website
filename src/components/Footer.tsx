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
            alt="DY Electrical Services logo"
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
          <div className="mt-8 space-y-1 text-xs text-white/60">
            <p>{business.electricalContractor}</p>
            <p>{business.arcLicence}</p>
            <p>ABN {business.abn}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/services/switchboard-upgrades" className="hover:text-white transition-colors">Switchboard Upgrades</Link></li>
            <li><Link href="/services/ev-chargers" className="hover:text-white transition-colors">EV Charger Installation</Link></li>
            <li><Link href="/services/air-conditioning" className="hover:text-white transition-colors">Air Conditioning</Link></li>
            <li><Link href="/services/fault-finding" className="hover:text-white transition-colors">Fault Finding &amp; Emergency</Link></li>
            <li><Link href="/services/lighting-power" className="hover:text-white transition-colors">Lighting &amp; Power</Link></li>
            <li><Link href="/services/data-cabling" className="hover:text-white transition-colors">Data Cabling</Link></li>
            <li><Link href="/services/ceiling-fans" className="hover:text-white transition-colors">Ceiling Fans</Link></li>
            <li><Link href="/services/smoke-alarms" className="hover:text-white transition-colors">Smoke Alarms</Link></li>
            <li><Link href="/services/oven-installation" className="hover:text-white transition-colors">Oven &amp; Cooktop</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors font-semibold">All Services →</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
            Areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/areas/logan" className="hover:text-white transition-colors">Logan</Link></li>
            <li><Link href="/areas/brisbane-southside" className="hover:text-white transition-colors">Brisbane Southside</Link></li>
            <li><Link href="/areas/gold-coast" className="hover:text-white transition-colors">Northern Gold Coast</Link></li>
            <li><Link href="/areas/beenleigh" className="hover:text-white transition-colors">Beenleigh</Link></li>
            <li><Link href="/areas/springwood" className="hover:text-white transition-colors">Springwood</Link></li>
            <li><Link href="/areas/loganholme" className="hover:text-white transition-colors">Loganholme</Link></li>
            <li><Link href="/areas/browns-plains" className="hover:text-white transition-colors">Browns Plains</Link></li>
            <li><Link href="/areas/yarrabilba" className="hover:text-white transition-colors">Yarrabilba</Link></li>
            <li><Link href="/areas/park-ridge" className="hover:text-white transition-colors">Park Ridge</Link></li>
            <li><Link href="/areas/sunnybank" className="hover:text-white transition-colors">Sunnybank</Link></li>
            <li><Link href="/areas/mount-gravatt" className="hover:text-white transition-colors">Mount Gravatt</Link></li>
            <li><Link href="/areas/coomera" className="hover:text-white transition-colors">Coomera</Link></li>
            <li><Link href="/areas/ormeau" className="hover:text-white transition-colors">Ormeau</Link></li>
            <li><Link href="/areas-serviced" className="hover:text-white transition-colors font-semibold">All Areas →</Link></li>
          </ul>
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
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
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
            Work With Us
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/homeowners" className="hover:text-white transition-colors">Homeowners</Link></li>
            <li><Link href="/real-estate-agents" className="hover:text-white transition-colors">Real Estate & Property Managers</Link></li>
            <li><Link href="/builders" className="hover:text-white transition-colors">Builders</Link></li>
            <li><Link href="/commercial-clients" className="hover:text-white transition-colors">Commercial Clients</Link></li>
          </ul>
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
            Guides
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li><Link href="/blog/when-to-upgrade-your-switchboard" className="hover:text-white transition-colors">Switchboard Upgrade Signs</Link></li>
            <li><Link href="/blog/switchboard-upgrade-cost-brisbane-logan" className="hover:text-white transition-colors">Switchboard Upgrade Cost</Link></li>
            <li><Link href="/blog/ev-charger-installation-at-home" className="hover:text-white transition-colors">Home EV Charger Guide</Link></li>
            <li><Link href="/blog/ev-charger-installation-cost-queensland" className="hover:text-white transition-colors">EV Charger Cost</Link></li>
            <li><Link href="/blog/what-needs-a-licensed-electrician-in-queensland" className="hover:text-white transition-colors">Licensed Electrical Work</Link></li>
            <li><Link href="/blog/what-is-an-rcd-safety-switch" className="hover:text-white transition-colors">RCD Safety Switches</Link></li>
            <li><Link href="/blog/signs-you-need-an-emergency-electrician" className="hover:text-white transition-colors">Emergency Electrician Signs</Link></li>
            <li><Link href="/blog/how-to-choose-an-electrician-brisbane-logan" className="hover:text-white transition-colors">Choosing an Electrician</Link></li>
            <li><Link href="/blog/air-conditioning-installation-what-to-expect" className="hover:text-white transition-colors">Air Conditioning Install</Link></li>
            <li><Link href="/blog/downlight-installation-brisbane-logan" className="hover:text-white transition-colors">Downlight Installation</Link></li>
            <li><Link href="/blog/property-manager-electrical-maintenance-guide" className="hover:text-white transition-colors">Property Manager Maintenance</Link></li>
            <li><Link href="/blog/qld-smoke-alarm-laws-2027-logan-brisbane" className="hover:text-white transition-colors">Queensland Smoke Alarm Laws</Link></li>
            <li><Link href="/blog/why-does-my-safety-switch-keep-tripping" className="hover:text-white transition-colors">Safety Switch Keeps Tripping</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/12 pt-5 pb-20 md:py-5">
        <div className="mx-auto flex w-full max-w-[1180px] px-4 flex-col gap-2 text-xs text-white/52 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
            {" · "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </span>
          <span>{business.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
