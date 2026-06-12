import { ExternalLink, Star } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import type { GoogleReviewSummary } from "@/lib/google-reviews";

type GoogleReviewsProps = {
  summary: GoogleReviewSummary | null;
  transitionFromDark?: boolean;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-brand-gold" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < Math.round(rating) ? "fill-current" : ""}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TrustFallback() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        "Licensed electrical contractor — Licence No. 87141",
        "ARC licensed for split system air conditioning",
        "Based in Bahrs Scrub, servicing Logan, Brisbane Southside and the Northern Gold Coast",
        "Clear scope, tidy finishes and practical advice before work starts",
      ].map((item) => (
        <div key={item} className="min-w-0 break-words border-l-2 border-brand-black/20 bg-brand-surface p-4 text-sm font-semibold text-brand-charcoal/72">
          {item}
        </div>
      ))}
    </div>
  );
}

export function GoogleReviews({
  summary,
  transitionFromDark = false,
}: GoogleReviewsProps) {
  const reviews = summary?.reviews ?? [];
  const transitionClass = transitionFromDark
    ? "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-20 before:bg-gradient-to-b before:from-brand-black before:to-brand-background"
    : "";

  return (
    <section className={`relative bg-brand-background py-20 ${transitionClass}`}>
      <div className="relative mx-auto w-full max-w-[1180px] px-4">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.52fr] lg:items-end">
          <div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight text-brand-black">
              Trusted by homeowners, property managers and local businesses.
            </h2>
            {summary?.rating && summary.userRatingCount ? (
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-charcoal/70">
                <Stars rating={summary.rating} />
                <span>
                  {summary.rating.toFixed(1)} from {summary.userRatingCount} Google reviews
                </span>
              </div>
            ) : null}
          </div>

          <div className="lg:text-right">
            {summary?.googleMapsUri ? (
              <CTAButton href={summary.googleMapsUri} variant="secondary">
                View Google Profile
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </CTAButton>
            ) : null}
          </div>
        </div>

        {reviews.length > 0 ? (
          <>
            <div className="grid gap-4 md:grid-cols-3">
              {reviews.slice(0, 3).map((review) => (
                <article key={review.id} className="min-w-0 rounded-lg border border-black/8 bg-brand-surface p-6">
                  <Stars rating={review.rating} />
                  <p className="mt-5 break-words text-base leading-7 text-brand-charcoal/76">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/8 pt-4 text-sm">
                    {review.authorUri ? (
                      <a
                        href={review.authorUri}
                        className="font-extrabold text-brand-black underline-offset-4 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {review.authorName}
                      </a>
                    ) : (
                      <span className="font-extrabold text-brand-black">{review.authorName}</span>
                    )}
                    {review.reviewUri ? (
                      <a
                        href={review.reviewUri}
                        className="inline-flex items-center gap-1 text-brand-charcoal/54 hover:text-brand-black"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-brand-charcoal/54">{review.relativeTime}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs text-brand-charcoal/48">
              Google reviews are returned by relevance. Author names are shown from Google user attribution.
            </p>
          </>
        ) : (
          <TrustFallback />
        )}
      </div>
    </section>
  );
}
