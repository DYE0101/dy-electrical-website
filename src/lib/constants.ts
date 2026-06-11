export const business = {
  name: "DY Electrical Services",
  legalName: "DY Electrical Services Pty Ltd",
  tagline: "Don't D.I.Y - Call DY Electrical Services",
  phoneDisplay: "0477 766 678",
  phoneInternational: "+61 477 766 678",
  phoneHref: "tel:0477766678",
  email: "hello@dyelectricalservices.com.au",
  domain: "https://www.dyelectricalservices.com.au",
  address: "12 Orchard Avenue, Bahrs Scrub QLD 4207",
  abn: "75 643 388 416",
  electricalContractor: "Electrical Contractor No. 87141",
  arcLicence: "ARC Licence L179309",
  insurance: "Public Liability Insurance held",
  serviceArea: "Brisbane, Logan and the Gold Coast",
};

export const leadTypes = [
  { value: "homeowner_quote", label: "Homeowner quote" },
  { value: "small_commercial", label: "Small commercial enquiry" },
  { value: "property_manager", label: "Property manager maintenance" },
  { value: "builder_partner", label: "Builder partnership" },
  { value: "general", label: "General enquiry" },
] as const;

export const serviceTypes = [
  "Lighting",
  "Switchboard upgrades",
  "Air conditioning",
  "EV chargers",
  "Smoke alarms",
  "Oven & cooktop",
  "Ceiling fans",
  "Data cabling",
  "Home automation",
  "Commercial fit-out",
  "Fault finding",
  "Other",
] as const;

export type ServiceType = (typeof serviceTypes)[number];
