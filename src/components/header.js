import Image from "next/image";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center px-4">
      <div className="my-4">
        <Image
          alt="Profile"
          className="rounded"
          loading="eager"
          src="/profile.jpg"
          width={500}
          height={375}
        />
      </div>
      <h1 className="mb-2 text-center">Miloš Milanović</h1>
      <p className="text-center font-light">
        Full-stack web developer based in Belgrade, Serbia.
      </p>
      <div className="my-4 flex gap-4">
        <a href="mailto:mmilanovic016@gmail.com">
          <SiGmail className="text-[#EA4335]" />
        </a>
        <a href="https://github.com/mmilanovic4" target="_blank">
          <SiGithub className="text-[#181717]" />
        </a>
        <a href="https://www.instagram.com/mmilanovic4/" target="_blank">
          <SiInstagram className="text-[#FF0069]" />
        </a>
        <a href="https://www.youtube.com/@mmilanovic4" target="_blank">
          <SiYoutube className="text-[#FF0000]" />
        </a>
      </div>
      <nav className="mt-2">
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/resume">Résumé</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
