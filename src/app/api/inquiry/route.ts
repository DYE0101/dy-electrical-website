import { NextResponse } from "next/server";
import { business, leadTypes } from "@/lib/constants";
import { inquirySchema, normaliseAustralianPhone, toServiceM8Lead } from "@/lib/lead-schema";
import { getResend } from "@/lib/resend";
import { createServiceM8Lead } from "@/lib/servicem8";

const subjectLabels: Record<string, string> = {
  homeowner_quote: "Homeowner Quote",
  small_commercial: "Commercial Enquiry",
  property_manager: "Property Manager",
  builder_partner: "Builder Partner",
  general: "General Enquiry",
};

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = inquirySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid enquiry details." },
      { status: 400 },
    );
  }

  const input = parsed.data;

  if (input.botField || input.company) {
    return NextResponse.json({ ok: true, spam: true });
  }

  const leadPayload = toServiceM8Lead(input);
  // ServiceM8 must never block the email: the lead is lost if this route 500s.
  let serviceM8Result: { enabled: boolean } = { enabled: false };
  try {
    serviceM8Result = await createServiceM8Lead(input);
  } catch (error) {
    console.error("ServiceM8 lead creation failed — continuing with email delivery", { error });
  }
  const leadLabel =
    subjectLabels[input.leadType] ??
    leadTypes.find((type) => type.value === input.leadType)?.label ??
    "Website Enquiry";

  const message = [
    `Lead type: ${leadLabel}`,
    `Name: ${input.name}`,
    `Phone: ${normaliseAustralianPhone(input.phone)}`,
    `Email: ${input.email}`,
    `Service: ${input.serviceType}`,
    `Suburb: ${input.suburb}`,
    `Preferred timing: ${input.preferredTiming || "Not supplied"}`,
    "",
    "Message:",
    input.message || "Not supplied",
    "",
    "Tracking:",
    `Source page: ${input.sourcePage || "Not supplied"}`,
    `CTA clicked: ${input.ctaClicked || "Not supplied"}`,
    `UTM source: ${input.utmSource || "Not supplied"}`,
    `UTM medium: ${input.utmMedium || "Not supplied"}`,
    `UTM campaign: ${input.utmCampaign || "Not supplied"}`,
    `UTM term: ${input.utmTerm || "Not supplied"}`,
    `UTM content: ${input.utmContent || "Not supplied"}`,
    "",
    "ServiceM8-ready payload:",
    JSON.stringify(leadPayload, null, 2),
  ].join("\n");

  const resend = getResend();

  if (!resend) {
    console.error("DY Electrical Services enquiry could not send because Resend is not configured", {
      leadPayload,
      serviceM8Result,
    });

    return NextResponse.json({
      ok: false,
      emailSent: false,
      serviceM8Enabled: serviceM8Result.enabled,
      error: "Email delivery is not configured.",
    }, { status: 503 });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "website@dyelectricalservices.com.au",
      to: process.env.LEADS_TO_EMAIL ?? business.email,
      replyTo: input.email,
      subject: `[${leadLabel}] ${input.name} - ${input.suburb}`,
      text: message,
      ...(input.photos && input.photos.length > 0
        ? {
            attachments: input.photos.map((p) => ({
              filename: p.filename,
              content: p.content,
            })),
          }
        : {}),
    });

    return NextResponse.json({
      ok: true,
      emailSent: true,
      serviceM8Enabled: serviceM8Result.enabled,
    });
  } catch (error) {
    console.error("Resend failed for DY Electrical Services enquiry", {
      error,
      leadPayload,
      serviceM8Result,
    });

    return NextResponse.json({
      ok: false,
      emailSent: false,
      serviceM8Enabled: serviceM8Result.enabled,
      warning: "Lead logged but email delivery failed.",
    }, { status: 502 });
  }
}
