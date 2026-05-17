import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import {
  blogPosts,
  getAllBlogPosts,
  getBlogPost,
  type BlogBlock,
} from "@/lib/blog-posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const BLOG_META_TITLES: Record<string, string> = {
  "when-to-upgrade-your-switchboard": "When to Upgrade Your Switchboard",
  "ev-charger-installation-at-home": "Home EV Charger Installation Guide",
  "what-needs-a-licensed-electrician-in-queensland": "Licensed Electrician Work in Queensland",
  "switchboard-upgrade-cost-brisbane-logan": "Switchboard Upgrade Cost Brisbane & Logan",
  "ev-charger-installation-cost-queensland": "EV Charger Installation Cost Queensland",
  "what-is-an-rcd-safety-switch": "What Is an RCD Safety Switch?",
  "signs-you-need-an-emergency-electrician": "Signs You Need an Emergency Electrician",
  "how-to-choose-an-electrician-brisbane-logan": "How to Choose an Electrician Brisbane & Logan",
  "air-conditioning-installation-what-to-expect": "Split System Air Conditioning Installation",
  "downlight-installation-brisbane-logan": "Downlight Installation Brisbane & Logan",
  "property-manager-electrical-maintenance-guide": "Property Manager Electrical Maintenance Guide",
  "qld-smoke-alarm-laws-2027-logan-brisbane": "Queensland Smoke Alarm Laws 2027",
  "why-does-my-safety-switch-keep-tripping": "Why Does My Safety Switch Keep Tripping?",
};

const BLOG_META_DESCRIPTIONS: Record<string, string> = {
  "when-to-upgrade-your-switchboard":
    "Know when a switchboard upgrade is overdue in Logan, Brisbane or the Gold Coast: safety switches, ceramic fuses, warning signs and install steps.",
  "ev-charger-installation-at-home":
    "What to check before installing a home EV charger in Logan, Brisbane or the Gold Coast: circuit capacity, charger location and cost factors.",
  "what-needs-a-licensed-electrician-in-queensland":
    "Plain-English guide to what Queensland electrical work needs a licensed electrician and what homeowners can safely do themselves.",
  "switchboard-upgrade-cost-brisbane-logan":
    "Switchboard upgrade costs in Brisbane and Logan: what affects price, what is included and what to check before booking an electrician.",
  "ev-charger-installation-cost-queensland":
    "Home EV charger installation costs in Queensland: what changes the price, what is included and how to avoid common installation traps.",
  "what-is-an-rcd-safety-switch":
    "RCD safety switches explained: how they differ from circuit breakers and why Queensland homes need proper protection on modern circuits.",
  "signs-you-need-an-emergency-electrician":
    "How to tell when an electrical problem needs a 24/7 emergency electrician and what to do safely while waiting for help.",
  "how-to-choose-an-electrician-brisbane-logan":
    "What to check before booking an electrician in Brisbane or Logan: licensing, quotes, communication and red flags.",
  "air-conditioning-installation-what-to-expect":
    "What a proper split system air conditioning installation includes, how long it takes and what to ask before booking.",
  "downlight-installation-brisbane-logan":
    "Downlight installation in Brisbane and Logan: LED retrofits, ceiling checks, dimming, layout and what to ask before booking.",
  "property-manager-electrical-maintenance-guide":
    "Electrical maintenance guide for Queensland property managers: smoke alarms, safety switches, tenant faults and portfolio maintenance.",
  "qld-smoke-alarm-laws-2027-logan-brisbane":
    "Queensland smoke alarm laws for 2027: what Logan and Brisbane south homeowners need, where alarms go and when compliance is required.",
  "why-does-my-safety-switch-keep-tripping":
    "A safety switch that keeps tripping points to a fault somewhere in your circuits. How to isolate the cause, when to reset, and when to call an electrician.",
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const metaTitle = BLOG_META_TITLES[post.slug] ?? post.title;
  const metaDescription = BLOG_META_DESCRIPTIONS[post.slug] ?? post.description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Dayne Yetman"],
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [{ url: "/images/og-default.jpg", alt: metaTitle }],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function renderBlock(block: BlogBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="mt-14 border-t border-black/10 pt-8 font-heading text-[1.65rem] font-extrabold leading-tight text-brand-black md:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={idx}
          className="mt-5 max-w-[68ch] text-[1.03rem] leading-8 text-brand-charcoal/84 md:text-lg md:leading-8"
        >
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="mt-6 grid gap-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-md border border-black/8 bg-brand-surface px-4 py-3 text-base leading-7 text-brand-charcoal/84"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={idx}
          className="mt-8 rounded-r-md border border-l-4 border-black/8 border-l-brand-gold bg-brand-surface px-5 py-5 text-base font-semibold italic leading-7 text-brand-charcoal/82 shadow-[0_12px_34px_rgba(10,10,10,0.06)]"
        >
          {block.text}
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: `${business.domain}/images/og-default.jpg`,
    author: {
      "@type": "Person",
      name: "Dayne Yetman",
      jobTitle: "Licensed Electrician",
      url: `${business.domain}/about`,
      identifier: "Electrical Contractor No. 87141",
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.domain,
      logo: {
        "@type": "ImageObject",
        url: `${business.domain}/logos/logo-dark-background.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${business.domain}/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-brand-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article hero */}
      <section className="mx-auto w-full max-w-[780px] px-4 pt-8 lg:pt-12">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-semibold text-brand-charcoal/60 transition hover:text-brand-black"
        >
          ← All articles
        </Link>
        <p className="mt-8 font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
          {post.category} · {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight text-brand-black">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-brand-charcoal/60">
          Published {formatDate(post.publishedAt)}
        </p>
      </section>

      {/* Article body */}
      <article className="mx-auto w-full max-w-[780px] px-4 pb-16 lg:pb-24">
        <p className="mt-10 border-l-2 border-brand-gold pl-5 font-heading text-lg font-semibold leading-8 text-brand-charcoal md:text-xl md:leading-9">
          {post.description}
        </p>
        <div className="mt-3">
          {post.body.map((block, idx) => renderBlock(block, idx))}
        </div>

        {post.relatedService && (
          <div className="mt-14 border border-brand-gold/30 bg-white px-6 py-6">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50">
              Related service
            </p>
            <Link
              href={`/services/${post.relatedService.slug}`}
              className="group mt-2 flex items-center justify-between gap-4 transition"
            >
              <span className="font-heading text-lg font-extrabold text-brand-black group-hover:text-brand-gold">
                {post.relatedService.label}
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
            </Link>
          </div>
        )}
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-brand-background">
          <div className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-20">
            <h2 className="font-heading text-2xl font-extrabold text-brand-black">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white p-7 transition hover:bg-brand-black"
                >
                  <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-brand-charcoal/50 group-hover:text-white/50">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-extrabold leading-tight text-brand-black group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-charcoal/70 group-hover:text-white/70">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA strip */}
      <section className="bg-brand-black">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-4 py-14 md:flex-row md:items-center md:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Need a licensed electrician to check it properly?
            </p>
            <p className="mt-3 text-base leading-7 text-white/72">
              Send a few details or call directly. We&apos;ll tell you what needs a
              licensed electrician, what can wait, and what the next step should be.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/contact?source=blog&topic=${post.slug}`}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-br from-[#C4A45A] via-brand-goldHighlight to-brand-gold px-6 text-sm font-extrabold text-brand-black shadow-[inset_0_-2px_0_rgba(10,10,10,0.18),0_10px_26px_rgba(176,145,76,0.24)] transition hover:brightness-110"
            >
              Request a quote
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={business.phoneHref}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 text-sm font-extrabold text-white transition hover:border-white/50"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
