import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/constants";

const MobileCTA = dynamic(() =>
  import("@/components/MobileCTA").then((m) => ({ default: m.MobileCTA }))
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "Licensed Electrician Logan, Brisbane Southside & Northern Gold Coast | DY Electrical Services",
    template: "%s | DY Electrical Services",
  },
  description:
    "DY Electrical Services provides licensed electrical work across Logan, Brisbane Southside and the Northern Gold Coast. 24/7 emergency callout, work done properly and communication without the runaround for homeowners, property managers, builders and local businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Licensed Electrician Logan, Brisbane & Gold Coast | DY Electrical Services",
    description:
      "Licensed electrician across Logan, Brisbane Southside and the Northern Gold Coast. 24/7 emergency callout. Work done properly, communication without the runaround.",
    url: business.domain,
    siteName: business.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DY Electrical Services — Licensed Electrician Logan, Brisbane & Gold Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensed Electrician Logan, Brisbane & Gold Coast | DY Electrical Services",
    description:
      "24/7 emergency callout. Work done properly, communication without the runaround, across Logan, Brisbane Southside and the Northern Gold Coast.",
    images: ["/images/og-default.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${business.domain}/#business`,
  name: business.name,
  legalName: business.name,
  description:
    "Licensed electrician serving Logan, Brisbane Southside and the Northern Gold Coast. 24/7 emergency callout, residential, commercial, property management and builder electrical work.",
  url: business.domain,
  telephone: business.phoneInternational,
  email: business.email,
  image: `${business.domain}/images/architectural-lighting-home.jpg`,
  logo: `${business.domain}/logos/logo-primary-horizontal.jpg`,
  hasMap: "https://maps.app.goo.gl/xhxaBNKAbTGF5P9P7",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Orchard Avenue",
    addressLocality: "Bahrs Scrub",
    addressRegion: "QLD",
    postalCode: "4207",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.7269,
    longitude: 153.1781,
  },
  areaServed: [
    { "@type": "City", name: "Logan" },
    { "@type": "City", name: "Beenleigh" },
    { "@type": "City", name: "Springwood" },
    { "@type": "City", name: "Brisbane" },
    { "@type": "City", name: "Gold Coast" },
    { "@type": "AdministrativeArea", name: "Brisbane Southside" },
    { "@type": "AdministrativeArea", name: "Northern Gold Coast" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 emergency callout",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Switchboard upgrades",
          url: `${business.domain}/services/switchboard-upgrades`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EV charger installation",
          url: `${business.domain}/services/ev-chargers`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air conditioning installation",
          url: `${business.domain}/services/air-conditioning`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fault finding and emergency electrical",
          url: `${business.domain}/services/fault-finding`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lighting and power upgrades",
          url: `${business.domain}/services/lighting-power`,
        },
      },
    ],
  },
  identifier: [
    { "@type": "PropertyValue", name: "ABN", value: business.abn },
    { "@type": "PropertyValue", name: "Electrical Contractor", value: "87141" },
    { "@type": "PropertyValue", name: "ARC Licence", value: "L179309" },
  ],
  sameAs: [
    "https://www.facebook.com/dyelectricalservices",
    "https://maps.app.goo.gl/xhxaBNKAbTGF5P9P7"
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${business.domain}/#website`,
  name: business.name,
  url: business.domain,
  description: "Licensed electrician serving Logan, Brisbane Southside and the Northern Gold Coast.",
  publisher: { "@id": `${business.domain}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${business.domain}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${inter.variable} ${montserrat.variable} font-body antialiased pb-[calc(76px+env(safe-area-inset-bottom))] md:pb-0`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, webSiteSchema]) }}
        />
        <Header />
        {children}
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
