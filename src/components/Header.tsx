"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/constants";
import { CTAButton } from "@/components/CTAButton";

const links = [
  { href: "/", label: "Home" },
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

const dropdowns = [
  { id: "services", label: "Services", links: serviceLinks },
  { id: "areas", label: "Areas", links: areaLinks },
  { id: "work", label: "Work With Us", links: workWithUsLinks },
] as const;

const mobileMenuGroups = [
  { label: "Services", links: serviceLinks },
  { label: "Areas", links: areaLinks },
  { label: "Work With Us", links: workWithUsLinks },
] as const;

type DropdownId = (typeof dropdowns)[number]["id"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileOpenGroup(null);
  };

  const toggleMobileGroup = (label: string) => {
    setMobileOpenGroup((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1180px] px-4 items-center justify-between gap-4 lg:min-h-[76px] lg:gap-6">
        <Link
          href="/"
          aria-label={business.name}
          className="focus-ring flex min-w-0 items-center gap-3 rounded-md"
          onClick={closeMenu}
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

        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/72 lg:flex">
          {dropdowns.map((dropdown) => {
            const isOpen = activeDropdown === dropdown.id;

            return (
              <div
                key={dropdown.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(dropdown.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/72 transition hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setActiveDropdown((open) => (open === dropdown.id ? null : dropdown.id))}
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`h-4 w-4 text-white/45 transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 transition ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="border border-white/12 bg-brand-black p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
                    {dropdown.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/8 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          {links.slice(1).map((link) => (
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
      </div>

      <div
        id="mobile-navigation"
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="border-t border-white/10 bg-brand-black px-4 pb-5 pt-3 shadow-[0_28px_60px_rgba(0,0,0,0.36)]">
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
            {links.slice(1).map((link) => (
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
    </header>
  );
}
