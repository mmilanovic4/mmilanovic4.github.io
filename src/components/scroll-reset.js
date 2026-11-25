"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

// The scroll position of every history entry, so a new page starts at the
// top and Back or Forward returns to where the page was left. The browser's
// own restoration is off: it runs before Next.js has drawn the previous page,
// and after the swipe-back gesture on iPhone it lands in the wrong place.
const positions = new Map();
const entry = () => window.navigation?.currentEntry?.key ?? location.href;

export function ScrollReset() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  // The entry whose page is on screen.
  const shown = useRef(null);

  useEffect(() => {
    history.scrollRestoration = "manual";
    shown.current = entry();
    // Saved as the page is left: on the click that leaves it (capture, so
    // before Next.js handles the link) and on Back or Forward, both while
    // the page is still on screen.
    const save = () => positions.set(shown.current, scrollY);
    // A reload or another site gets the browser's restoration for this entry.
    const onPageHide = () => (history.scrollRestoration = "auto");
    const onPageShow = () => (history.scrollRestoration = "manual");
    addEventListener("click", save, true);
    addEventListener("popstate", save);
    addEventListener("pagehide", onPageHide);
    addEventListener("pageshow", onPageShow);
    return () => {
      removeEventListener("click", save, true);
      removeEventListener("popstate", save);
      removeEventListener("pagehide", onPageHide);
      removeEventListener("pageshow", onPageShow);
    };
  }, []);

  // Before paint, so the page never shows at the old position.
  useLayoutEffect(() => {
    if (pathname === previous.current) return;
    previous.current = pathname;
    shown.current = entry();
    window.scrollTo(0, positions.get(shown.current) ?? 0);
  }, [pathname]);

  return null;
}
