import Image from "next/image";
import { Container } from "@/components";
import { projects } from "@/content";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Personal projects.",
  openGraph: {
    url: `${BASE_URL}/projects`,
  },
});

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
                className="text-accent inline-flex items-center gap-2 text-sm font-semibold hover:underline md:text-base lg:text-lg"
              >
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={20}
                    height={20}
                    className="h-4 w-4 shrink-0 lg:h-5 lg:w-5"
                  />
                )}
                {project.name}
              </a>
              <p className="text-xs md:text-sm lg:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent-light text-accent-dark rounded px-2 py-1 text-xs md:text-sm"
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
