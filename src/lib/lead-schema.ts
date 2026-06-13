import { z } from "zod";
import { leadTypes, serviceTypes } from "@/lib/constants";
import { suburbOptions } from "@/lib/suburbs";

const leadTypeValues = leadTypes.map((type) => type.value) as [
  (typeof leadTypes)[number]["value"],
  ...(typeof leadTypes)[number]["value"][],
];

const serviceTypeValues = serviceTypes as unknown as [
  (typeof serviceTypes)[number],
  ...(typeof serviceTypes)[number][],
];

const suburbValues = suburbOptions as unknown as [
  (typeof suburbOptions)[number],
  ...(typeof suburbOptions)[number][],
];

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(8, "Please enter a valid Australian phone number."),
  leadType: z.enum(leadTypeValues),
  serviceType: z.enum(serviceTypeValues),
  suburb: z.enum(suburbValues),
  preferredTiming: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please add a few details about the job.").max(1200),
  sourcePage: z.string().trim().max(240).optional().or(z.literal("")),
  ctaClicked: z.string().trim().max(120).optional().or(z.literal("")),
  utmSource: z.string().trim().max(120).optional().or(z.literal("")),
  utmMedium: z.string().trim().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().trim().max(120).optional().or(z.literal("")),
  utmTerm: z.string().trim().max(120).optional().or(z.literal("")),
  utmContent: z.string().trim().max(120).optional().or(z.literal("")),
  botField: z.string().optional(),
  company: z.string().optional(),
  photos: z.array(z.object({
    filename: z.string().max(255),
    content: z.string(),
  })).max(3).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export function normaliseAustralianPhone(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");

  if (digits.startsWith("+61")) {
    return digits;
  }

  if (digits.startsWith("61")) {
    return `+${digits}`;
  }

  if (digits.startsWith("0")) {
    return `+61${digits.slice(1)}`;
  }

  return digits;
}

export function toServiceM8Lead(input: InquiryInput) {
  return {
    contact_name: input.name,
    contact_email: input.email,
    contact_phone: normaliseAustralianPhone(input.phone),
    job_type: input.serviceType,
    job_address_suburb: input.suburb,
    lead_type: input.leadType,
    preferred_timing: input.preferredTiming || null,
    notes: input.message || null,
    source_page: input.sourcePage || null,
    cta_clicked: input.ctaClicked || null,
    utm: {
      source: input.utmSource || null,
      medium: input.utmMedium || null,
      campaign: input.utmCampaign || null,
      term: input.utmTerm || null,
      content: input.utmContent || null,
    },
    submitted_at: new Date().toISOString(),
  };
}
