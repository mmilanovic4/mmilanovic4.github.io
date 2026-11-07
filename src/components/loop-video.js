"use client";
import { useEffect, useRef } from "react";

// A silent loop that plays like a moving photo. A click or tap pauses and
// resumes it, so motion that starts on its own can always be stopped, and with
// Reduce motion turned on it stays on its first frame until someone asks.
// With `maxHeight` the clip is as wide as the column allows while staying no
// taller than that. The width is worked out from its size up front: before
// its metadata arrives a <video> has no width of its own, so a shrink-to-fit
// box would collapse to nothing and jump open once the clip loads.
export function LoopVideo({ src, alt, width, height, maxHeight, className }) {
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
      className={`mx-auto block max-w-full cursor-pointer ${maxHeight ? "" : "w-fit"}`}
      style={
        maxHeight && {
          width: `min(100%, calc(${maxHeight} * ${width} / ${height}))`,
        }
      }
      onClick={toggle}
    >
      <video
        ref={ref}
        src={src}
        width={width}
        height={height}
        className={`rounded ${className}`}
        autoPlay
        muted
        loop
        playsInline
      />
    </button>
  );
}
