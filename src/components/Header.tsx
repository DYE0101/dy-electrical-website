import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { MobileNav } from "@/components/MobileNav";
import { business } from "@/lib/constants";

const serviceLinks = [
  { href: "/services/switchboard-upgrades", label: "Switchboard Upgrades" },
  { href: "/services/ev-chargers", label: "EV Charger Installation" },
  { href: "/services/air-conditioning", label: "Air Conditioning" },
  { href: "/services/fault-finding", label: "Fault Finding & Emergency" },
  { href: "/services/lighting-power", label: "Lighting & Power" },
  { href: "/services", label: "All Services" },
];

const areaLinks = [
  { href: "/areas/logan", label: "Logan" },
  { href: "/areas/brisbane-southside", label: "Brisbane Southside" },
  { href: "/areas/gold-coast", label: "Northern Gold Coast" },
  { href: "/areas/beenleigh", label: "Beenleigh" },
  { href: "/areas/springwood", label: "Springwood" },
  { href: "/areas-serviced", label: "All Areas" },
];

const workWithUsLinks = [
  { href: "/homeowners", label: "Homeowners" },
  { href: "/real-estate-agents", label: "Real Estate & Property Managers" },
  { href: "/builders", label: "Builders" },
  { href: "/commercial-clients", label: "Commercial Clients" },
];

const dropdowns = [
  { id: "services", label: "Services", links: serviceLinks },
  { id: "areas", label: "Areas", links: areaLinks },
  { id: "work", label: "Work With Us", links: workWithUsLinks },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1180px] px-4 items-center justify-between gap-4 lg:min-h-[76px] lg:gap-6">
        <Link
          href="/"
          aria-label={business.name}
          className="focus-ring flex min-w-0 items-center gap-3 rounded-md"
        >
          <Image
            src="/logos/logo-dark-background.jpg"
            alt=""
            aria-hidden="true"
            width={320}
            height={150}
            priority
            fetchPriority="high"
            className="h-auto w-[74px] mix-blend-screen [clip-path:inset(2px_8px_2px_2px)] sm:w-24"
          />
        </Link>

        {/* Desktop nav — CSS hover, no JS */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/72 lg:flex">
          {dropdowns.map((dropdown) => (
            <div key={dropdown.id} className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/72 transition hover:text-white group-hover:text-white"
                aria-haspopup="true"
                tabIndex={0}
              >
                {dropdown.label}
                <ChevronDown
                  className="h-4 w-4 text-white/45 transition group-hover:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className="invisible opacity-0 absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="border border-white/12 bg-brand-black p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
                  {dropdown.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/8 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href={business.phoneHref} variant="dark">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </CTAButton>
          <CTAButton href="/contact?type=homeowner_quote">Request a Quote</CTAButton>
        </div>

        {/* Mobile nav — isolated client component, only hydrates mobile interactivity */}
        <MobileNav />
      </div>
    </header>
  );
}
