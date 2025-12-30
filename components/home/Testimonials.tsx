"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GoogleReview } from "@/lib/googleReviews";

const fallbackTestimonials = [
  { quote: "Clear explanations and a calm experience throughout my visit.", name: "Sara M." },
  { quote: "Modern technology and a team that genuinely listens.", name: "David R." },
  { quote: "Comfortable care with every step outlined before treatment.", name: "Nina L." },
];

type TestimonialItem = GoogleReview | { quote: string; name: string };

export default function Testimonials() {
  const [reviews, setReviews] = useState<TestimonialItem[]>(fallbackTestimonials);
  const [placeId, setPlaceId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews?.length) {
          setReviews(data.reviews);
        }
        if (data.placeId) {
          setPlaceId(data.placeId);
        }
      })
      .catch(() => {
        // Keep fallback testimonials on error
      });
  }, []);

  const duplicatedReviews = [...reviews, ...reviews];
  const googleMapsUrl = placeId
    ? `https://www.google.com/maps/place/?q=place_id:${placeId}&hl=en`
    : "https://maps.app.goo.gl/xoVXZiRTS4o9VTz97";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Testimonials</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">What patients say</h2>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-scroll-testimonials gap-4">
            {duplicatedReviews.map((item, idx) => {
              const fullText = ("text" in item ? item.text : item.quote) ?? "";
              const authorName = "author_name" in item ? item.author_name : ("name" in item ? item.name : "Patient");
              
              return (
                <div
                  key={`${authorName}-${idx}`}
                  className="w-[320px] flex-shrink-0 flex flex-col gap-3 rounded border border-silver/40 bg-white p-4 text-sm leading-6 text-charcoal shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {"profile_photo_url" in item && item.profile_photo_url ? (
                        <Image
                          src={item.profile_photo_url}
                          alt={`${authorName} profile`}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-silver/40" />
                      )}
                      <span className="font-semibold text-nearBlack">
                        {authorName}
                      </span>
                    </div>
                    {"rating" in item && item.rating ? (
                      <div className="flex items-center gap-1" aria-label={`Rated ${item.rating} out of 5`}>
                        <span className="text-gold text-base font-semibold">{item.rating.toFixed(1)}</span>
                        <span className="text-gold text-sm">★</span>
                      </div>
                    ) : null}
                  </div>
                  <p className="text-charcoal leading-relaxed line-clamp-5">{fullText}</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gold transition hover:text-goldSoft"
                  >
                    Read more →
                  </a>
                  {"relative_time_description" in item && item.relative_time_description ? (
                    <span className="text-xs text-silver">{item.relative_time_description}</span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

