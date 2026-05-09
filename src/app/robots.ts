import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/concept-dark", "/api/"],
    },
    sitemap: `${business.domain}/sitemap.xml`,
  };
}
