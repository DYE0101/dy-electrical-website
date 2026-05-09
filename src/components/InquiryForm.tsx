"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { inquirySchema, type InquiryInput } from "@/lib/lead-schema";
import { leadTypes, serviceTypes } from "@/lib/constants";
import { suburbs } from "@/lib/suburbs";

const timingOptions = [
  "Flexible",
  "This week",
  "Next week",
  "As soon as practical",
  "Urgent - I will call",
] as const;

type InquiryFormProps = {
  defaultLeadType?: InquiryInput["leadType"];
  ctaClicked?: string;
};

export function InquiryForm({
  defaultLeadType = "homeowner_quote",
  ctaClicked = "homepage_form",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [tracking, setTracking] = useState({
    sourcePage: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      leadType: defaultLeadType,
      serviceType: "Lighting",
      suburb: "Bahrs Scrub",
      ctaClicked,
      company: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTracking({
      sourcePage: window.location.pathname,
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmTerm: params.get("utm_term") ?? "",
      utmContent: params.get("utm_content") ?? "",
    });
  }, []);

  async function onSubmit(values: InquiryInput) {
    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, ...tracking, ctaClicked }),
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
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-white/14 bg-brand-black p-5 text-white shadow-premium sm:p-6">
      <div className="mb-5">
        <h2 className="font-heading text-2xl font-extrabold">Tell us what you need.</h2>
        <p className="mt-2 text-sm leading-6 text-white/68">
          Homeowner jobs are prioritised, with clear routing for commercial,
          property manager and builder enquiries.
        </p>
      </div>

      <div className="grid gap-3">
        <input className="hidden" tabIndex={-1} autoComplete="off" {...register("company")} />

        <label className="grid gap-1 text-sm">
          Name
          <input className="focus-ring min-h-12 rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white placeholder:text-white/45" placeholder="Your name" {...register("name")} />
          {errors.name && <span className="text-xs text-red-200">{errors.name.message}</span>}
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            Phone
            <input className="focus-ring min-h-12 rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white placeholder:text-white/45" placeholder="0477 000 000" {...register("phone")} />
            {errors.phone && <span className="text-xs text-red-200">{errors.phone.message}</span>}
          </label>

          <label className="grid gap-1 text-sm">
            Email
            <input className="focus-ring min-h-12 rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white placeholder:text-white/45" placeholder="you@example.com" {...register("email")} />
            {errors.email && <span className="text-xs text-red-200">{errors.email.message}</span>}
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            Enquiry type
            <select className="focus-ring min-h-12 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white" {...register("leadType")}>
              {leadTypes.map((type) => (
                <option key={type.value} value={type.value} className="text-brand-black">
                  {type.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1 text-sm">
            Service
            <select className="focus-ring min-h-12 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white" {...register("serviceType")}>
              {serviceTypes.map((service) => (
                <option key={service} value={service} className="text-brand-black">
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            Suburb
            <select className="focus-ring min-h-12 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white" {...register("suburb")}>
              {suburbs.map((suburb) => (
                <option key={suburb} value={suburb} className="text-brand-black">
                  {suburb}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1 text-sm">
            Preferred timing
            <select className="focus-ring min-h-12 appearance-none rounded-md border border-white/16 bg-[#1a1a1a] px-3 text-white" {...register("preferredTiming")}>
              {timingOptions.map((timing) => (
                <option key={timing} value={timing} className="text-brand-black">
                  {timing}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-1 text-sm">
          Message
          <textarea className="focus-ring min-h-28 rounded-md border border-white/16 bg-[#1a1a1a] px-3 py-3 text-white placeholder:text-white/45" placeholder="Briefly describe the job." {...register("message")} />
        </label>
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
