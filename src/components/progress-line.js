"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function ProgressLine() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const line = useRef(null);

  useEffect(() => {
    // Tracks the post body only: 0% when its first line slides under the
    // line itself (the sticky bar on mobile, the viewport top on desktop),
    // 100% when its last line reaches the bottom of the screen. Looked up and
    // measured on every scroll: the header hydrates before the page streams
    // in, and media that loads late grows the post.
    const onScroll = () => {
      const article = document.querySelector("article");
      if (!article) return setProgress(0);
      const top = line.current.getBoundingClientRect().bottom;
      const { top: start, height } = article.getBoundingClientRect();
      const total = height - (window.innerHeight - top);
      const read = top - start;
      setProgress(total > 0 ? Math.min(Math.max(read / total, 0), 1) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <div
      ref={line}
      className="absolute -bottom-px left-0 z-50 h-0.5 w-full md:fixed md:top-0 md:bottom-auto"
    >
      <div className="bg-accent h-full" style={{ width: `${progress}%` }} />
    </div>
  );
}
