const GOOGLE_PLACE_DETAILS_URL = "https://places.googleapis.com/v1/places";

const GOOGLE_REVIEW_FIELD_MASK = [
  "displayName",
  "googleMapsUri",
  "rating",
  "userRatingCount",
  "reviews",
].join(",");

type GoogleLocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GooglePlaceReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: GoogleLocalizedText;
  rating?: number;
  authorAttribution?: GoogleAuthorAttribution;
  publishTime?: string;
  googleMapsUri?: string;
};

type GooglePlaceDetailsResponse = {
  displayName?: GoogleLocalizedText;
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
};

export type GoogleReview = {
  id: string;
  authorName: string;
  authorUri?: string;
  text: string;
  rating: number;
  relativeTime?: string;
  reviewUri?: string;
};

export type GoogleReviewSummary = {
  placeName: string;
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
};

function getGooglePlacesConfig() {
  const rawPlaceId = process.env.GOOGLE_PLACE_ID;

  return {
    apiKey: process.env.GOOGLE_PLACES_API_KEY,
    placeId: rawPlaceId?.replace(/^places\//, ""),
  };
}

function normaliseReview(review: GooglePlaceReview, index: number): GoogleReview | null {
  const text = review.text?.text?.trim();
  const authorName = review.authorAttribution?.displayName?.trim();

  if (!text || !authorName || typeof review.rating !== "number") {
    return null;
  }

  return {
    id: review.name ?? `${authorName}-${index}`,
    authorName,
    authorUri: review.authorAttribution?.uri,
    text,
    rating: review.rating,
    relativeTime: review.relativePublishTimeDescription,
    reviewUri: review.googleMapsUri,
  };
}

export async function getGoogleReviews(): Promise<GoogleReviewSummary | null> {
  const { apiKey, placeId } = getGooglePlacesConfig();

  if (!apiKey || !placeId) {
    return null;
  }

  const url = new URL(`${GOOGLE_PLACE_DETAILS_URL}/${placeId}`);
  url.searchParams.set("languageCode", "en-AU");
  url.searchParams.set("regionCode", "AU");

  try {
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": GOOGLE_REVIEW_FIELD_MASK,
      },
      next: {
        revalidate: 60 * 60 * 12,
      },
    });

    if (!response.ok) {
      console.error("Google Places review fetch failed", {
        status: response.status,
        statusText: response.statusText,
      });
      return null;
    }

    const place = (await response.json()) as GooglePlaceDetailsResponse;
    const reviews = (place.reviews ?? [])
      .map(normaliseReview)
      .filter((review): review is GoogleReview => Boolean(review));

    return {
      placeName: place.displayName?.text ?? "DY Electrical Services",
      googleMapsUri: place.googleMapsUri,
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      reviews,
    };
  } catch (error) {
    console.error("Google Places review fetch threw an error", error);
    return null;
  }
}
