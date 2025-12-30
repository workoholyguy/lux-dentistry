/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import { useEffect, useState } from "react";

const videoSources = [
  "/AsianWomanExplaineTheTreatment.mp4",
  "/CleaningBraces.mp4",
  "/ClickingDentalEquipment.mp4",
  "/WomanSmilingDuringProcidure.mp4",
  "/WomanTeethCloseUp.mp4",
  "/femaleClosedEyesUndergoingProcedure.mp4",
  "/LadyExplainingthexray.mp4",
];

export default function HeroVideoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (videoSources.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videoSources.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentSrc = videoSources[index] ?? videoSources[0];

  return (
    <section className="relative isolate overflow-hidden bg-navy text-softBg">
      <div className="absolute inset-0">
        <video
          key={currentSrc}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={currentSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-slateBlue/70 to-nearBlack/70 opacity-90" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(200,167,92,0.18), transparent 35%), radial-gradient(circle at 80% 10%, rgba(200,167,92,0.12), transparent 30%), radial-gradient(circle at 50% 70%, rgba(63,83,120,0.16), transparent 32%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-8 px-6 py-16 md:min-h-[78vh]">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
          Calm, Modern Dentistry
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-softBg md:text-5xl">
          Comprehensive dental care with clarity and comfort at every step.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-silver md:text-lg">
          Preventive, restorative, cosmetic, and emergency care delivered with clear guidance,
          thoughtful technology, and a serene environment tailored to you.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Book Appointment
          </a>
          <a
            href="tel:6787737354"
            className="rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

