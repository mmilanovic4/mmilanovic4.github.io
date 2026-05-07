"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialLinks, ThemeToggle } from "@/components";

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
    <header className="mx-auto w-full max-w-full md:w-125">
      <div className="my-6 px-6 md:px-0">
        <div className="relative" style={{ aspectRatio: "4/3" }}>
          <Image
            alt="Profile"
            className="h-auto w-full rounded object-cover"
            src="/profile.jpg"
            fill
            priority
          />
        </div>
      </div>
      <div className="px-6 md:px-0">
        <h1 className="text-lg font-bold">Miloš Milanović</h1>
        <p className="text-muted text-sm">full-stack web developer</p>
        <SocialLinks />
        <hr className="border-gray-200 dark:border-gray-800" />

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

        <hr className="border-gray-200 dark:border-gray-800" />
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
        style={{ paddingTop: "max(1.5rem, env(safe-area-inset-top))" }}
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
                  className={`w-full border-b-2 py-1 text-sm transition-colors ${
                    isNavItemActive(pathname, item)
                      ? "border-accent text-accent"
                      : "hover:text-accent text-muted border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
