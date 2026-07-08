import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import { business } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1180px] px-4 items-center justify-between gap-4 lg:min-h-[76px] lg:gap-6">
        <Link
          href="/"
          aria-label={business.name}
          className="focus-ring flex min-w-0 items-center gap-3 rounded-md"
        >
          <Image
            src="/logos/logo-dark-background.jpg"
            alt="DY Electrical Services logo"
            width={320}
            height={150}
            priority
            fetchPriority="high"
            className="h-auto w-[74px] mix-blend-screen [clip-path:inset(2px)] sm:w-24"
          />
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href={business.phoneHref} variant="dark">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </CTAButton>
          <CTAButton href="/contact?type=homeowner_quote">Request a Quote</CTAButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
