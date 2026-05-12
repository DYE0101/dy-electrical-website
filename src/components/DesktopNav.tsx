"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
  { id: "services" as const, label: "Services", links: serviceLinks },
  { id: "areas" as const, label: "Areas", links: areaLinks },
  { id: "work" as const, label: "Work With Us", links: workWithUsLinks },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

type DropdownId = (typeof dropdowns)[number]["id"];

export function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);

  const close = () => setActiveDropdown(null);

  return (
    <nav className="hidden items-center gap-6 text-sm font-semibold text-white/72 lg:flex">
      {dropdowns.map((dropdown) => {
        const isOpen = activeDropdown === dropdown.id;
        return (
          <div
            key={dropdown.id}
            className="relative"
            onMouseEnter={() => setActiveDropdown(dropdown.id)}
            onMouseLeave={close}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/72 transition hover:text-white"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() =>
                setActiveDropdown((open) => (open === dropdown.id ? null : dropdown.id))
              }
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
                    onClick={close}
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
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-white">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
