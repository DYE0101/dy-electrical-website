import type { InquiryInput } from "@/lib/lead-schema";
import { toServiceM8Lead } from "@/lib/lead-schema";

export async function createServiceM8Lead(input: InquiryInput) {
  const payload = toServiceM8Lead(input);

  if (process.env.SERVICEM8_ENABLED !== "true") {
    return {
      enabled: false,
      payload,
    };
  }

  // ServiceM8 connection is intentionally disabled until credentials and
  // workflow are approved. Keep this payload shape stable for Phase 2.
  throw new Error("ServiceM8 integration is not configured yet.");
}
