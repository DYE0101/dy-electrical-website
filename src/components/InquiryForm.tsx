"use client";

import { useState, type FormEvent } from "react";
import { Send, Camera, X } from "lucide-react";
import type { InquiryInput } from "@/lib/lead-schema";
import { leadTypes, serviceTypes, type ServiceType } from "@/lib/constants";
import { suburbOptions, type SuburbOption } from "@/lib/suburbs";

const timingOptions = [
  "Flexible",
  "This week",
  "Next week",
  "As soon as practical",
  "Urgent - I will call",
] as const;

type InquiryFormProps = {
  defaultLeadType?: InquiryInput["leadType"];
  defaultServiceType?: ServiceType;
  defaultSuburb?: SuburbOption;
  ctaClicked?: string;
  /** Short variant for tight slots (hero rail): name, phone, email, service, suburb only. */
  compact?: boolean;
  heading?: string;
  subheading?: string;
};

type InquiryErrors = Partial<
  Record<"name" | "phone" | "email" | "serviceType" | "suburb" | "message", string>
>;
type PhotoEntry = { file: File; preview: string };

async function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const maxWidth = 1200;
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("Canvas unavailable")); return; }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.8).split(",")[1]);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Image load failed")); };
    img.src = url;
  });
}

function readFormValue(formData: FormData, key: keyof InquiryInput) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getTrackingFields() {
  const params = new URLSearchParams(window.location.search);

  return {
    sourcePage: window.location.pathname,
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    utmContent: params.get("utm_content") ?? "",
  };
}

function validateInquiry(values: InquiryInput) {
  const errors: InquiryErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (phoneDigits.length < 8) {
    errors.phone = "Please enter a valid Australian phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.serviceType) {
    errors.serviceType = "Please select a service.";
  }

  if (!values.suburb) {
    errors.suburb = "Please select your suburb.";
  }

  if (values.message.trim().length === 0) {
    errors.message = "Please add a few details about the job.";
  }

  return errors;
}

export function InquiryForm({
  defaultLeadType = "homeowner_quote",
  defaultServiceType,
  defaultSuburb,
  ctaClicked = "homepage_form",
  compact = false,
  heading = "Tell us what you need.",
  subheading = "Homeowner jobs are prioritised, with clear routing for commercial, property manager and builder enquiries.",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [photos, setPhotos] = useState<PhotoEntry[]>([]);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const slots = 3 - photos.length;
    const toAdd = files.slice(0, slots).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...toAdd]);
    e.target.value = "";
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values: InquiryInput = {
      name: readFormValue(formData, "name"),
      phone: readFormValue(formData, "phone"),
      email: readFormValue(formData, "email"),
      leadType: readFormValue(formData, "leadType") as InquiryInput["leadType"],
      serviceType: readFormValue(formData, "serviceType") as InquiryInput["serviceType"],
      suburb: readFormValue(formData, "suburb") as InquiryInput["suburb"],
      preferredTiming: readFormValue(formData, "preferredTiming"),
      message: readFormValue(formData, "message"),
      botField: readFormValue(formData, "botField"),
      ctaClicked,
      ...getTrackingFields(),
    };
    const nextErrors = validateInquiry(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const compressedPhotos = (
        await Promise.all(
          photos.map(async (p) => {
            try {
              return { filename: p.file.name, content: await compressImage(p.file) };
            } catch {
              return null;
            }
          })
        )
      ).filter((p): p is { filename: string; content: string } => p !== null);

      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          ...(compressedPhotos.length > 0 ? { photos: compressedPhotos } : {}),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        emailSent?: boolean;
      } | null;

      if (!response.ok || !result?.ok || result.emailSent === false) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setPhotos((prev) => { prev.forEach((p) => URL.revokeObjectURL(p.preview)); return []; });
      form.reset();
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", {
          event_category: "enquiry_form",
          event_label: ctaClicked,
          service_type: values.serviceType,
        });
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="min-w-0 rounded-lg border border-white/14 bg-brand-black p-5 text-white shadow-premium sm:p-6">
      <div className="mb-5">
        <h2 className="font-heading text-2xl font-extrabold">{heading}</h2>
        <p className="mt-2 text-sm leading-6 text-white/68">{subheading}</p>
      </div>

      <div className="grid min-w-0 gap-3">
        <input className="hidden" tabIndex={-1} autoComplete="off" name="botField" />

        <label className="grid min-w-0 gap-1 text-sm">
          Name
          <input name="name" autoComplete="name" required minLength={2} className="focus-ring min-h-12 w-full min-w-0 rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white placeholder:text-white/55" placeholder="Your name" />
          {errors.name && <span className="text-xs text-red-200">{errors.name}</span>}
        </label>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <label className="grid min-w-0 gap-1 text-sm">
            Phone
            <input name="phone" type="tel" autoComplete="tel" required minLength={8} className="focus-ring min-h-12 w-full min-w-0 rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white placeholder:text-white/55" placeholder="0477 000 000" />
            {errors.phone && <span className="text-xs text-red-200">{errors.phone}</span>}
          </label>

          <label className="grid min-w-0 gap-1 text-sm">
            Email
            <input name="email" type="email" autoComplete="email" required className="focus-ring min-h-12 w-full min-w-0 rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white placeholder:text-white/55" placeholder="you@example.com" />
            {errors.email && <span className="text-xs text-red-200">{errors.email}</span>}
          </label>
        </div>

        <div className={`grid min-w-0 gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
          {compact ? (
            <input type="hidden" name="leadType" value={defaultLeadType} />
          ) : (
            <label className="grid min-w-0 gap-1 text-sm">
              Enquiry type
              <select name="leadType" defaultValue={defaultLeadType} className="focus-ring min-h-12 w-full min-w-0 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white [color-scheme:dark]">
                {leadTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-[#1a1a1a] text-white">
                    {type.label}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="grid min-w-0 gap-1 text-sm">
            Service
            <select name="serviceType" required defaultValue={defaultServiceType ?? ""} className="focus-ring min-h-12 w-full min-w-0 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white [color-scheme:dark]">
              <option value="" disabled className="bg-[#1a1a1a] text-white">
                Select a service
              </option>
              {serviceTypes.map((service) => (
                <option key={service} value={service} className="bg-[#1a1a1a] text-white">
                  {service}
                </option>
              ))}
            </select>
            {errors.serviceType && <span className="text-xs text-red-200">{errors.serviceType}</span>}
          </label>
        </div>

        <div className={`grid min-w-0 gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
          <label className="grid min-w-0 gap-1 text-sm">
            Suburb
            <select name="suburb" required defaultValue={defaultSuburb ?? ""} className="focus-ring min-h-12 w-full min-w-0 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white [color-scheme:dark]">
              <option value="" disabled className="bg-[#1a1a1a] text-white">
                Select your suburb
              </option>
              {suburbOptions.map((suburb) => (
                <option key={suburb} value={suburb} className="bg-[#1a1a1a] text-white">
                  {suburb}
                </option>
              ))}
            </select>
            {errors.suburb && <span className="text-xs text-red-200">{errors.suburb}</span>}
          </label>

          {!compact && (
            <label className="grid min-w-0 gap-1 text-sm">
              Preferred timing
              <select name="preferredTiming" defaultValue="" className="focus-ring min-h-12 w-full min-w-0 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white [color-scheme:dark]">
                <option value="" className="bg-[#1a1a1a] text-white">
                  Select timing
                </option>
                {timingOptions.map((timing) => (
                  <option key={timing} value={timing} className="bg-[#1a1a1a] text-white">
                    {timing}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        <label className="grid min-w-0 gap-1 text-sm">
          Message
          <textarea name="message" required maxLength={1200} className="focus-ring min-h-28 w-full min-w-0 rounded-md border border-white/16 bg-[#1a1a1a] px-3 py-3 text-white placeholder:text-white/55" placeholder="Briefly describe the job — what needs doing and where in the property." />
          {errors.message && <span className="text-xs text-red-200">{errors.message}</span>}
        </label>

        {!compact && (
        <div className="grid gap-2 text-sm">
          <div>
            <span className="text-white">Photos</span>
            <span className="ml-2 text-xs text-white/50">Optional — up to 3, helps us quote accurately</span>
          </div>

          {photos.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {photos.map((photo, i) => (
                <div key={i} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.preview} alt={`Photo ${i + 1}`} className="h-16 w-16 rounded-md object-cover border border-white/16" />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-black border border-white/20 text-white/70 hover:text-white transition"
                    aria-label={`Remove photo ${i + 1}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {photos.length < 3 && (
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={handlePhotoChange}
              />
              <div className="flex min-h-11 items-center gap-2 rounded-md border border-dashed border-white/20 bg-[#1a1a1a] px-3 text-white/50 transition hover:border-white/40 hover:text-white/75">
                <Camera className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-sm">{photos.length === 0 ? "Add photos" : "Add more photos"}</span>
              </div>
            </label>
          )}
        </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-white px-5 text-sm font-extrabold text-brand-black transition hover:bg-brand-goldHighlight disabled:cursor-wait disabled:opacity-70"
      >
        <Send className="mr-2 h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "success" && (
        <p className="mt-3 rounded-md border border-green-300/30 bg-green-300/10 p-3 text-sm text-green-100">
          We&apos;ve received your enquiry. If the job is urgent, calling is still the fastest path.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 rounded-md border border-red-300/30 bg-red-300/10 p-3 text-sm text-red-100">
          Something went wrong. Please call us directly if the job is time-sensitive.
        </p>
      )}
    </form>
  );
}
