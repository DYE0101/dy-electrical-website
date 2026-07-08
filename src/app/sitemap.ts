import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";
import { servicePages } from "@/lib/service-pages";
import { blogPosts } from "@/lib/blog-posts";
import { areaPages } from "@/lib/area-pages";

const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/emergency-electrician", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/areas-serviced", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/areas/logan", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/areas/brisbane-southside", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/areas/gold-coast", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/homeowners", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/real-estate-agents", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/builders", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/commercial-clients", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is set ONLY where we can state it accurately (blog posts).
  // Google uses lastmod only when it is "consistently and verifiably accurate";
  // stamping build time on every URL each deploy teaches it to ignore ours.
  const serviceRoutes = servicePages.map((service) => ({
    url: `${business.domain}/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${business.domain}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${business.domain}${path}`,
    priority,
    changeFrequency,
  }));

  const suburbRoutes = areaPages.map((area) => ({
    url: `${business.domain}/areas/${area.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticEntries, ...serviceRoutes, ...suburbRoutes, ...blogRoutes];
}
