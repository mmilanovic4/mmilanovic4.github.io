"use client";
import { useEffect, useRef } from "react";

// A silent loop that plays like a moving photo. A click or tap pauses and
// resumes it, so motion that starts on its own can always be stopped, and with
// Reduce motion turned on it stays on its first frame until someone asks.
export function LoopVideo({ src, alt, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      ref.current.pause();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <button
      type="button"
      aria-label={`Play or pause: ${alt}`}
      className="mx-auto block w-fit max-w-full cursor-pointer"
      onClick={toggle}
    >
      <video
        ref={ref}
        src={src}
        className={`rounded ${className}`}
        autoPlay
        muted
        loop
        playsInline
      />
    </button>
  );
}
