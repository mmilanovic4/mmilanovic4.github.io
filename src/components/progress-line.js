"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ProgressLine() {
  const [progress, setProgress] = useState(0);
  const [offset, setOffset] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const viewport = window.visualViewport;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      const ratio = max > 0 ? scrollTop / max : 0;
      setProgress(Math.min(Math.max(ratio, 0), 1) * 100);

      // Safari anchors `fixed` to the layout viewport, which iOS sizes for
      // minimised toolbars. Reaching the bottom of a post expands them again,
      // so the layout top -- and the line with it -- slips behind the URL bar.
      // The visual viewport is the part actually on screen; offsetTop is how
      // far down from the layout top that starts.
      if (viewport) setOffset(viewport.offsetTop);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    viewport?.addEventListener("scroll", onScroll);
    viewport?.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      viewport?.removeEventListener("scroll", onScroll);
      viewport?.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-0.5 w-full"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="bg-accent h-full" style={{ width: `${progress}%` }} />
    </div>
  );
}
