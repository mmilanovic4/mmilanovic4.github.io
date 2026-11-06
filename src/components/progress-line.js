"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ProgressLine() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
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
    <div className="absolute -bottom-px left-0 z-50 h-0.5 w-full md:fixed md:top-0 md:bottom-auto">
      <div className="bg-accent h-full" style={{ width: `${progress}%` }} />
    </div>
  );
}
