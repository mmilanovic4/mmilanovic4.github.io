import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const links = [
  {
    href: "mailto:mmilanovic016@gmail.com",
    title: "Gmail",
    icon: SiGmail,
    color: "var(--icon-gmail)",
  },
  {
    href: "https://github.com/mmilanovic4",
    title: "GitHub",
    icon: SiGithub,
    color: "var(--icon-github)",
    external: true,
  },
  {
    href: "https://www.instagram.com/mmilanovic4",
    title: "Instagram",
    icon: SiInstagram,
    color: "var(--icon-instagram)",
    external: true,
  },
  {
    href: "https://www.youtube.com/@mmilanovic4",
    title: "YouTube",
    icon: SiYoutube,
    color: "var(--icon-youtube)",
    external: true,
  },
];

export function SocialLinks() {
  return (
    <div className="my-4 flex flex-wrap gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            title={link.title}
            className="rounded-full bg-gray-200 p-2.5 dark:bg-gray-800"
            {...(link.external ? { target: "_blank" } : {})}
          >
            <Icon style={{ color: link.color }} className="size-6 md:size-4" />
          </a>
        );
      })}
    </div>
  );
}
