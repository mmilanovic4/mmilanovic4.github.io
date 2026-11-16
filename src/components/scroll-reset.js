"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

// Phones only: every new page starts at the top. Next.js only scrolls when
// the new page's top edge is out of view, so leaving the bottom of a long
// post for a page just a little taller than the screen clamps the scroll to
// that page's bottom, which leaves its top in view, and the page opens at its
// end. Desktop keeps the Next.js behavior. Back and forward are left alone,
// and so is a link to an anchor.
export function ScrollReset() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const popped = useRef(false);

  useEffect(() => {
    const onPopState = () => (popped.current = true);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // A layout effect, so the jump happens before the new page is painted.
  useLayoutEffect(() => {
    if (pathname === previous.current) return;
    previous.current = pathname;
    if (popped.current) {
      popped.current = false;
      return;
    }
    if (window.location.hash) return;
    if (matchMedia("(min-width: 768px)").matches) return;
    // Instant: <html> scrolls smoothly, and the page should not glide up.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
