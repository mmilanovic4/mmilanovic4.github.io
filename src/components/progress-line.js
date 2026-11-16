"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function ProgressLine() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const line = useRef(null);

  useEffect(() => {
    // Tracks the post body only: 0% when its first line slides under the
    // bottom of the sticky bar on mobile (the meter sits on its top edge, so
    // the bar is its offsetParent) or under the line itself on desktop (fixed,
    // so no offsetParent), 100% when its last line reaches the bottom of the
    // screen. Looked up and measured on every scroll: the header hydrates
    // before the page streams in, and media that loads late grows the post.
    const onScroll = () => {
      const article = document.querySelector("article");
      if (!article) return setProgress(0);
      const top = (
        line.current.offsetParent ?? line.current
      ).getBoundingClientRect().bottom;
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
      className="absolute top-[env(safe-area-inset-top)] left-0 z-50 h-1 w-full bg-gray-200 md:fixed md:top-0 md:h-0.5 md:bg-transparent dark:bg-gray-700 md:dark:bg-transparent"
    >
      <div className="bg-accent h-full" style={{ width: `${progress}%` }} />
    </div>
  );
}
