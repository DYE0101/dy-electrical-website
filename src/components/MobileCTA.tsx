"use client";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/constants";
import { CTAButton } from "@/components/CTAButton";

export function MobileCTA() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname.startsWith("/blog/")) {
    return null;
  }

  return (
    <>
      {/* Spacer keeps the fixed bar from covering the footer; renders only when the bar does */}
      <div aria-hidden="true" className="h-[calc(76px+env(safe-area-inset-bottom))] md:hidden [html[data-menu-open]_&]:hidden" />
      <div
        className="fixed inset-x-3 z-50 grid grid-cols-2 gap-2 md:hidden [html[data-menu-open]_&]:hidden"
        style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <CTAButton href={business.phoneHref} variant="secondary" className="!bg-white shadow-lg">
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call
        </CTAButton>
        <CTAButton href="/contact?type=homeowner_quote" className="shadow-lg">
          Quote
        </CTAButton>
      </div>
    </>
  );
}
