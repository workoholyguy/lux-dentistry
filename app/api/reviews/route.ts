import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/googleReviews";

export async function GET() {
  const data = await fetchGoogleReviews(6);
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;
  return NextResponse.json({ ...data, placeId });
}

