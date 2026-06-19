import Image from "next/image";
import { Container } from "@/components";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Personal projects.",
  openGraph: {
    url: `${BASE_URL}/projects`,
  },
});

const projects = [
  {
    id: "forge",
    name: "forge",
    description:
      "A minimal Next.js boilerplate with authentication, database and a component library ready to go.",
    stack: ["Next.js", "Better Auth", "Prisma", "PostgreSQL", "shadcn/ui"],
    href: "https://github.com/mmilanovic4/forge",
    logo: "https://raw.githubusercontent.com/mmilanovic4/forge/main/src/app/icon.svg",
  },
  {
    id: "orbx",
    name: "orbx",
    description:
      "A lightweight CLI toolkit for developers — encryption, encoding, network diagnostics and everyday utilities, all from the terminal.",
    stack: ["Go", "Cobra"],
    href: "https://github.com/mmilanovic4/orbx",
    logo: "https://raw.githubusercontent.com/mmilanovic4/orbx/main/logo.svg",
  },
];

export default function Projects() {
  return (
    <Container>
      <p className="text-accent mb-6 text-xs"># projects</p>
      <ul className="flex flex-col gap-3">
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className="flex flex-col items-start gap-2 border-b border-gray-200 pb-4 last:border-b-0 dark:border-gray-700"
            >
              <a
                href={project.href}
                target="_blank"
                className="text-accent inline-flex gap-2 text-sm font-semibold hover:underline"
              >
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={16}
                    height={16}
                  />
                )}
                {project.name}
              </a>
              <p className="text-xs">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent-light text-accent-dark rounded px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
