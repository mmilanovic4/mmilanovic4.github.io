"use client";
import Image from "next/image";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "home", href: "/" },
  { name: "résumé", href: "/resume" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="mx-auto w-full max-w-full px-4 md:w-125 md:px-0">
      <div className="mt-8 mb-6 flex items-center gap-4">
        <Image
          alt="Profile"
          className="rounded-md"
          loading="eager"
          src="/profile.jpg"
          width={64}
          height={64}
          style={{ objectFit: "cover", width: 64, height: 64 }}
        />
        <div>
          <h1 className="text-lg font-bold">Miloš Milanović</h1>
          <p className="text-muted text-sm">full-stack web developer</p>
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <a href="mailto:mmilanovic016@gmail.com" title="Gmail">
          <SiGmail
            style={{ color: "var(--icon-gmail)" }}
            className="size-5 md:size-4"
          />
        </a>
        <a href="https://github.com/mmilanovic4" target="_blank" title="GitHub">
          <SiGithub
            style={{ color: "var(--icon-github)" }}
            className="size-5 md:size-4"
          />
        </a>
        <a
          href="https://www.instagram.com/mmilanovic4"
          target="_blank"
          title="Instagram"
        >
          <SiInstagram
            style={{ color: "var(--icon-instagram)" }}
            className="size-5 md:size-4"
          />
        </a>
        <a
          href="https://www.youtube.com/@mmilanovic4"
          target="_blank"
          title="YouTube"
        >
          <SiYoutube
            style={{ color: "var(--icon-youtube)" }}
            className="size-5 md:size-4"
          />
        </a>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <nav className="my-4">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`border-b-2 pb-1 text-sm transition-colors ${
                  item.href === pathname
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
    </header>
  );
}
