"use client";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components";

const navItems = [
  { name: "home", href: "/" },
  { name: "résumé", href: "/resume" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="mx-auto w-full max-w-full md:w-125">
      <div className="my-6 px-6 md:px-0">
        <img
          alt="Profile"
          className="h-auto w-full rounded object-cover"
          src="/profile.jpg"
        />
      </div>
      <div className="px-6 md:px-0">
        <h1 className="text-lg font-bold">Miloš Milanović</h1>
        <p className="text-muted text-sm">full-stack web developer</p>
        <div className="my-4 flex gap-4">
          <a
            className="rounded-full bg-gray-200 p-2.5 dark:bg-gray-800"
            href="mailto:mmilanovic016@gmail.com"
            title="Gmail"
          >
            <SiGmail
              style={{ color: "var(--icon-gmail)" }}
              className="size-6 md:size-4"
            />
          </a>
          <a
            className="rounded-full bg-gray-200 p-2.5 dark:bg-gray-800"
            href="https://github.com/mmilanovic4"
            target="_blank"
            title="GitHub"
          >
            <SiGithub
              style={{ color: "var(--icon-github)" }}
              className="size-6 md:size-4"
            />
          </a>
          <a
            className="rounded-full bg-gray-200 p-2.5 dark:bg-gray-800"
            href="https://www.instagram.com/mmilanovic4"
            target="_blank"
            title="Instagram"
          >
            <SiInstagram
              style={{ color: "var(--icon-instagram)" }}
              className="size-6 md:size-4"
            />
          </a>
          <a
            className="rounded-full bg-gray-200 p-2.5 dark:bg-gray-800"
            href="https://www.youtube.com/@mmilanovic4"
            target="_blank"
            title="YouTube"
          >
            <SiYoutube
              style={{ color: "var(--icon-youtube)" }}
              className="size-6 md:size-4"
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
                  className={`border-b-2 py-1 text-sm transition-colors ${
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/")
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
