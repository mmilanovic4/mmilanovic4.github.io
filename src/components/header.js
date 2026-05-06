"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialLinks, ThemeToggle } from "@/components";

const navItems = [
  { name: "home", href: "/" },
  { name: "résumé", href: "/resume" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/blog" },
];

const isNavItemActive = (pathname, item) => {
  console?.log({ pathname, item });
  if (item.href === "/") {
    return !navItems
      .filter((i) => i.href !== "/")
      .some((i) => pathname === i.href || pathname.startsWith(i.href + "/"));
  }
  return pathname === item.href || pathname.startsWith(item.href + "/");
};

export function Header() {
  const pathname = usePathname();
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
        <nav className="my-4">
          <ul className="flex flex-wrap gap-6">
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
        <hr className="border-gray-200 dark:border-gray-800" />
      </div>
    </header>
  );
}
