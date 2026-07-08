"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/constants";
import { CTAButton } from "@/components/CTAButton";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

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

const mobileMenuGroups = [
  { label: "Services", links: serviceLinks },
  { label: "Areas", links: areaLinks },
  { label: "Work With Us", links: workWithUsLinks },
];

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileOpenGroup(null);
  };

  // Lock background scroll while the menu is open. The data attribute lets
  // MobileCTA (outside the header's stacking context, so z-index can't help)
  // hide itself while the menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.dataset.menuOpen = "true";
    return () => {
      document.documentElement.style.overflow = previous;
      delete document.documentElement.dataset.menuOpen;
    };
  }, [isMenuOpen]);

  const toggleMobileGroup = (label: string) => {
    setMobileOpenGroup((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2 lg:hidden">
        <Link
          href={business.phoneHref}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/16 bg-white/8 text-white"
          aria-label={`Call ${business.name}`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/16 bg-white/8 text-white"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-[60] overflow-y-auto border-t border-white/10 bg-brand-black px-4 pb-8 pt-3">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={closeMenu}
              className="focus-ring flex min-h-12 items-center justify-between rounded-md px-3 text-sm font-bold text-white/78 hover:bg-white/8 hover:text-white"
            >
              Home
              <ArrowRight className="h-4 w-4 text-brand-goldHighlight" aria-hidden="true" />
            </Link>
            {mobileMenuGroups.map((group) => {
              const isGroupOpen = mobileOpenGroup === group.label;
              return (
                <div key={group.label} className="border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => toggleMobileGroup(group.label)}
                    className="focus-ring flex min-h-12 w-full items-center justify-between rounded-md px-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/50 hover:text-white/80"
                    aria-expanded={isGroupOpen}
                  >
                    {group.label}
                    <ChevronDown
                      className={`h-4 w-4 text-brand-goldHighlight transition-transform duration-200 ${isGroupOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isGroupOpen && (
                    <div className="grid gap-1 pb-2">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMenu}
                          className="focus-ring flex min-h-11 items-center justify-between rounded-md px-5 text-sm font-bold text-white/78 hover:bg-white/8 hover:text-white"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4 text-brand-goldHighlight" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="focus-ring flex min-h-12 items-center justify-between rounded-md px-3 text-sm font-bold text-white/78 hover:bg-white/8 hover:text-white"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-brand-goldHighlight" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
            <CTAButton href="/contact?type=homeowner_quote" className="w-full">
              Request a Quote
            </CTAButton>
            <CTAButton href={business.phoneHref} variant="dark" className="w-full">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
}
