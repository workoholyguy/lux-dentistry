export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  profile_photo_url?: string;
};

type ReviewsResult =
  | { reviews: GoogleReview[]; rating?: number; total?: number }
  | { reviews: GoogleReview[] };

export async function fetchGoogleReviews(limit = 6): Promise<ReviewsResult> {
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return { reviews: [] };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${encodeURIComponent(
    placeId,
  )}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return { reviews: [] };
    const data = await res.json();
    const reviews: GoogleReview[] = data?.result?.reviews ?? [];
    const trimmed = reviews.slice(0, limit);
    return {
      reviews: trimmed,
      rating: data?.result?.rating,
      total: data?.result?.user_ratings_total,
    };
  } catch (_e) {
    return { reviews: [] };
  }
}

