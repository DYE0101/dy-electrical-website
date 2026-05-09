import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Electrical Guides & Articles | DY Electrical Services",
  description:
    "Practical electrical guides for homeowners, property managers and builders across Logan, Brisbane Southside and the Northern Gold Coast. Switchboards, EV charging, compliance and more.",
  alternates: { canonical: "/blog" },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-brand-background">
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Electrical guides &amp; articles.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          Plain-English answers to the questions homeowners, property managers
          and builders ask us most. Written by a licensed electrician — not a
          marketing team.
        </p>
      </section>

      {/* Post list */}
      <section className="border-t border-gray-100 bg-brand-background">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white p-7 transition hover:bg-brand-black"
              >
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50 group-hover:text-white/50">
                  {post.category} · {post.readingMinutes} min read
                </p>
                <h2 className="mt-4 font-heading text-2xl font-extrabold leading-tight text-brand-black group-hover:text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal/70 group-hover:text-white/70">
                  {post.description}
                </p>
                <p className="mt-5 text-xs text-brand-charcoal/50 group-hover:text-white/50">
                  {formatDate(post.publishedAt)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-black">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-14 lg:py-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Need an electrician, not an article?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Tell us about the job and we&apos;ll come back with clear advice
              and a fixed price.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-gold/80"
            >
              Request a quote
            </Link>
            <a
              href="tel:0477766678"
              className="inline-block border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Call 0477 766 678
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
