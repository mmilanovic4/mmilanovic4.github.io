"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialLinks, ThemeToggle } from "@/components";
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mt-6 mb-8 px-6 md:px-0">
        <div
          className="relative overflow-hidden rounded"
          style={{ aspectRatio: "4/3" }}
        >
          <img
            alt="Profile"
            className="rounded object-cover"
            src="/profile.jpg"
          />
        </div>
      </div>
      <div className="px-6 md:px-0">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8 shrink-0 rounded dark:invert"
            />
          </Link>
          <div>
            <h1 className="text-lg leading-tight font-bold">{AUTHOR}</h1>
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
                  className={`border-b-2 py-1 text-sm transition-colors ${
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

        {/* Mobile nav */}
        <div className="my-4 flex items-center justify-between md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-muted hover:text-accent cursor-pointer text-xs transition-colors select-none"
            aria-label="Open menu"
          >
            [ menu ]
          </button>
          <ThemeToggle />
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-64 flex-col bg-white px-8 py-6 shadow-lg transition-transform dark:bg-gray-950 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-muted hover:text-accent mb-8 cursor-pointer self-end text-xs transition-colors select-none"
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
                  onClick={() => setOpen(false)}
                  className={`w-full py-1 text-sm`}
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
    </header>
  );
}
