"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useRef } from "react";
import { ProgressLine, SocialLinks, ThemeToggle } from "@/components";
import { AUTHOR } from "@/lib/metadata";

const navItems = [
  { name: "home", href: "/" },
  { name: "résumé", href: "/resume" },
  { name: "projects", href: "/projects" },
  { name: "uses", href: "/uses" },
  { name: "blog", href: "/blog" },
];

const isNavItemActive = (pathname, item) => {
  if (item.href === "/") {
    return !navItems
      .filter((i) => i.href !== "/")
      .some((i) => pathname === i.href || pathname.startsWith(i.href + "/"));
  }
  return pathname === item.href || pathname.startsWith(item.href + "/");
};

export function Header() {
  // From the rendered route, not the URL: GitHub Pages serves the 404 at any
  // address, so /blog/typo must still match the prerendered 404 (home active).
  const pathname = `/${useSelectedLayoutSegments()
    .filter((segment) => !segment.startsWith("("))
    .join("/")}`;
  const drawer = useRef(null);

  const closing = useRef(false);

  // Both ways run the same 200ms slide and backdrop fade, driven by
  // [data-out] (off-screen) rather than by CSS alone: a closed dialog leaves
  // the top layer at once, so the exit has to finish before close() (keeping
  // it there needs CSS `overlay`, which Safari lacks), and the entry starts
  // from [data-out] once that has been painted.
  const openDrawer = () => {
    const dialog = drawer.current;
    dialog.dataset.out = "";
    dialog.showModal();
    // showModal() focuses [ close ], and iOS Safari rings it even after a
    // tap. Focusing the dialog itself still announces "Menu, dialog" and the
    // next Tab reaches [ close ].
    dialog.focus();
    // Safari only slides from a position it has painted: dropping the mark
    // in the same frame, even after a forced style read, made it pop in.
    // Two frames make sure the off-screen one reached the screen.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (!closing.current) delete dialog.dataset.out;
      }),
    );
  };

  const closeDrawer = () => {
    const dialog = drawer.current;
    if (!dialog.open || closing.current) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches)
      return dialog.close();
    closing.current = true;
    dialog.dataset.out = "";
    setTimeout(() => {
      // Closed first, then unmarked: the other way round it would slide
      // back in for a frame.
      dialog.close();
      delete dialog.dataset.out;
      closing.current = false;
    }, 200);
  };

  // On a blog post the article title owns the <h1>, so the site name steps down.
  // A tag page is a list like /blog, so it keeps the name as its <h1>.
  const isPost =
    pathname.startsWith("/blog/") && !pathname.startsWith("/blog/tags/");
  const Name = isPost ? "p" : "h1";

  return (
    <>
      <header className="w-full">
        <div className="mt-6 mb-8 px-6 md:px-0">
          <div
            className="relative overflow-hidden rounded"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              alt="Profile"
              className="rounded object-cover"
              src="/profile-800.webp"
              srcSet="/profile-480.webp 480w, /profile-800.webp 800w, /profile-1000.webp 1000w"
              sizes="(min-width: 1024px) 800px, (min-width: 768px) 640px, calc(100vw - 48px)"
              width={1000}
              height={750}
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="px-6 md:px-0">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="Home"
                className="h-8 w-8 shrink-0 rounded dark:invert"
              />
            </Link>
            <div>
              <Name className="text-lg leading-tight font-bold">{AUTHOR}</Name>
              <p className="text-muted mt-0.5 text-sm leading-tight">
                full-stack web developer
              </p>
            </div>
          </div>
          <div className="mt-5">
            <SocialLinks />
          </div>
          <hr className="mt-5 border-gray-200 dark:border-gray-700" />

          {/* Desktop nav */}
          <nav className="my-4 hidden md:block">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`border-b-2 py-1 text-sm transition-colors select-none ${
                      isNavItemActive(pathname, item)
                        ? "border-accent text-accent"
                        : "hover:text-accent text-muted border-transparent"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="ml-auto">
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          <hr className="hidden border-gray-200 md:block dark:border-gray-700" />
        </div>

        {/* Drawer: a modal dialog moves focus inside, keeps it there, closes on
          Escape and makes the page behind inert. It slides in and out over
          200ms while the backdrop fades, easing out on the way in and in on
          the way out: one motion, played forwards and back. */}
        <dialog
          ref={drawer}
          aria-label="Menu"
          tabIndex={-1}
          // The content fills the dialog, so a click on the dialog itself is a
          // click on the backdrop.
          onClick={(e) => e.target === e.currentTarget && closeDrawer()}
          onCancel={(e) => {
            // Escape: animate out like every other way of closing.
            e.preventDefault();
            closeDrawer();
          }}
          className="top-0 right-0 left-auto h-full max-h-none w-64 translate-x-full bg-white shadow-lg transition-[translate] duration-200 ease-out outline-none backdrop:bg-black/30 backdrop:transition-opacity backdrop:duration-200 backdrop:ease-out open:translate-x-0 data-out:translate-x-full data-out:ease-in data-out:backdrop:opacity-0 data-out:backdrop:ease-in motion-reduce:transition-none motion-reduce:backdrop:transition-none dark:bg-gray-950"
        >
          <div className="flex h-full flex-col px-8 pt-[max(1.5rem,env(safe-area-inset-top))] pb-6">
            <button
              onClick={closeDrawer}
              // Padding the negative margins take back: a 44px target around
              // 16px of text, sitting exactly where the text alone would.
              className="text-muted hover:text-accent -mx-3.5 -mt-3.5 mb-4.5 cursor-pointer self-end p-3.5 text-xs transition-colors select-none"
              aria-label="Close menu"
            >
              [ close ]
            </button>
            <nav>
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.href} className="flex w-full">
                    <Link
                      href={item.href}
                      onClick={closeDrawer}
                      className="w-full py-1 text-sm select-none"
                    >
                      <span
                        className={`border-b-2 ${
                          isNavItemActive(pathname, item)
                            ? "text-accent border-accent"
                            : "text-muted border-transparent"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </dialog>
      </header>

      {/* Mobile bar: a sibling of <header>, not a child, so it sticks for the
          whole page -- sticky only holds within its parent. Its bottom border
          doubles as the reading progress track on a post. From md up the
          wrappers drop out and the progress line pins to the viewport top.
          The 4px of padding under the border, taken back by the margin so
          nothing below moves, is a strip of page background: without it an
          image scrolling under the bar touches the line and reads as its
          own top edge. */}
      <div className="bg-page sticky top-0 z-40 -mb-1 px-6 pt-[env(safe-area-inset-top)] pb-1 md:contents">
        <div className="relative border-b border-gray-200 py-4 md:contents dark:border-gray-700">
          <div className="flex items-center justify-between md:hidden">
            <button
              onClick={openDrawer}
              className="text-muted hover:text-accent -m-3.5 cursor-pointer p-3.5 text-xs transition-colors select-none"
              aria-label="Open menu"
            >
              [ menu ]
            </button>
            <ThemeToggle />
          </div>
          {isPost && <ProgressLine />}
        </div>
      </div>
    </>
  );
}
