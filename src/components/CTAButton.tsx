import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-extrabold transition";
  const variants = {
    primary:
      "bg-gradient-to-br from-[#C4A45A] via-brand-goldHighlight to-brand-gold text-brand-black shadow-[inset_0_-2px_0_rgba(10,10,10,0.18),0_10px_26px_rgba(176,145,76,0.24)] hover:brightness-110",
    secondary:
      "border border-brand-border bg-white/70 text-brand-black hover:border-brand-gold",
    dark: "border border-white/20 bg-white/8 text-white hover:border-brand-goldHighlight",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
