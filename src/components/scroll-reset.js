"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

// Starts every new page at the top of the document. Next.js scrolls to the
// new page's own top edge, under the header, and only when that edge is out
// of view: on desktop a page opened from the nav lands past the photo, and
// leaving the bottom of a long post for a page just a little taller than the
// screen clamps the scroll to that page's bottom, which leaves its top in
// view, so the page opens at its end. Rendered after the page in the layout,
// so this runs after Next.js has scrolled and has the last word. Back and
// forward are left alone, and so is a link to an anchor.
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
    // Instant: <html> scrolls smoothly, and the page should not glide up.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
