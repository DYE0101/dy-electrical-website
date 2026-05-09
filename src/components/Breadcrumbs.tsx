import Link from "next/link";
import { business } from "@/lib/constants";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const all = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${business.domain}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-charcoal/50">
        {all.map((item, idx) => (
          <span key={item.href} className="flex items-center gap-2">
            {idx > 0 && <span aria-hidden="true">/</span>}
            {idx < all.length - 1 ? (
              <Link href={item.href} className="hover:text-brand-black transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-charcoal/80" aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
