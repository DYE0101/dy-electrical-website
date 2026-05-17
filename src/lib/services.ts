import {
  BatteryCharging,
  Building2,
  Fan,
  Home,
  Lightbulb,
  Network,
  PlugZap,
  ShieldCheck,
  Siren,
  Wind,
} from "lucide-react";

export const priorityServices = [
  {
    title: "Switchboard upgrades",
    description:
      "Safety-focused switchboard upgrades for older homes, renovations and new circuits — licensed, tested and compliant.",
    icon: ShieldCheck,
    href: "/services/switchboard-upgrades",
  },
  {
    title: "EV charger installation",
    description:
      "Home and three-phase EV charger installation, dedicated RCBO-protected circuits and cable runs to spec.",
    icon: BatteryCharging,
    href: "/services/ev-chargers",
  },
  {
    title: "Air conditioning installation",
    description:
      "ARC-licensed split system and multi-head install, servicing and full electrical support — one ticket, one contractor.",
    icon: Fan,
    href: "/services/air-conditioning",
  },
  {
    title: "Fault finding & 24/7 emergency",
    description:
      "Tripping boards, dead circuits, burning smells. 24/7 emergency callout across Logan, Brisbane Southside and the Northern Gold Coast.",
    icon: Siren,
    href: "/services/fault-finding",
  },
] as const;

export const secondaryServices = [
  {
    title: "Lighting & power upgrades",
    description:
      "Downlights, feature lighting, additional power points and full lighting design — precise installation, sharp finishes.",
    icon: Lightbulb,
    href: "/services/lighting-power",
  },
  {
    title: "Data cabling",
    description:
      "Cat6 structured cabling, patch panels and Wi-Fi access point installation for homes and small commercial spaces.",
    icon: Network,
    href: "/services/data-cabling",
  },
  {
    title: "Ceiling fan installation",
    description:
      "New and replacement ceiling fan installation — remote controls, light kits and proper balancing on completion.",
    icon: Wind,
    href: "/services/ceiling-fans",
  },
  {
    title: "Smoke alarm compliance",
    description:
      "Queensland-compliant photoelectric smoke alarm installation for rental properties and owner-occupied homes.",
    icon: ShieldCheck,
    href: "/services/smoke-alarms",
  },
] as const;

export const audiencePaths = [
  {
    title: "For Homeowners",
    description:
      "Electrical upgrades and repairs without the guesswork. Clear advice, precise workmanship, and reliable electrical work for homes across Logan, Brisbane Southside and the Northern Gold Coast.",
    href: "/homeowners",
    cta: "For homeowners",
    icon: Home,
    featured: true,
  },
  {
    title: "Commercial Clients",
    description:
      "Tidy electrical work for shops, offices, clinics and small commercial spaces that need minimal disruption.",
    href: "/commercial-clients",
    cta: "Discuss commercial work",
    icon: Building2,
    featured: false,
  },
  {
    title: "For Real Estate & Property Managers",
    description:
      "Electrical sorted, without the back-and-forth. We work directly with your agency, coordinate with tenants, attend when booked, and send clear job notes and invoices without being chased.",
    href: "/real-estate-agents",
    cta: "Request support",
    icon: PlugZap,
    featured: false,
  },
  {
    title: "For Builders & Renovators",
    description:
      "Electrical work that keeps the build moving. Rough-ins, fit-offs, upgrades and project support for custom homes, renovations and small commercial fit-outs.",
    href: "/builders",
    cta: "Partner with us",
    icon: Lightbulb,
    featured: false,
  },
] as const;
