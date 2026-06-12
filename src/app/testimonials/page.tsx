import type { Metadata } from "next";
import { GoogleReviews } from "@/components/GoogleReviews";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Real Google reviews from DY Electrical Services customers across Logan, Brisbane and the Gold Coast. Verified feedback from the live Google Business Profile.",
  alternates: { canonical: "/testimonials" },
};

export const revalidate = 43200;

export default async function TestimonialsPage() {
  const googleReviews = await getGoogleReviews();

  return (
    <main className="bg-brand-background">
      <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:py-24">
        <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-brand-black">
          Real feedback from customers across Logan, Brisbane &amp; the Gold Coast.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-charcoal/70 md:text-lg">
          These reviews are pulled live from our Google Business Profile —
          unedited, in the words of the people who hired us.
        </p>
      </section>
      <GoogleReviews summary={googleReviews} />
    </main>
  );
}
