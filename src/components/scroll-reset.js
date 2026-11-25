"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

// Every new page starts at the top, like a plain link. Next.js scrolls only
// when the new page is out of view, so otherwise the old scroll position
// carries over. Back and forward keep the browser's restored position.
export function ScrollReset() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const popped = useRef(false);

  useEffect(() => {
    const onPopState = () => (popped.current = true);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Before paint, so the new page never shows at the old position.
  useLayoutEffect(() => {
    // Not on the first load: a reload keeps the browser's position.
    if (pathname === previous.current) return;
    previous.current = pathname;
    if (popped.current) {
      popped.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
