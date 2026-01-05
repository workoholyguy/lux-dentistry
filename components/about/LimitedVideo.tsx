"use client";

import { useEffect, useRef } from "react";

interface LimitedVideoProps {
  src: string;
  className?: string;
  maxDuration?: number;
}

export default function LimitedVideo({ src, className = "", maxDuration = 97 }: LimitedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= maxDuration) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Ignore play errors (browser autoplay restrictions)
        });
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [maxDuration]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

