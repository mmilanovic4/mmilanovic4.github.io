import { Container } from "@/components";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Miloš Milanović | Projects",
  description: "Personal projects.",
  openGraph: {
    url: "https://mmilanovic4.github.io/projects",
  },
});

const projects = [
  {
    id: "orbx",
    name: "orbx",
    description:
      "A lightweight CLI toolkit for developers — encryption, encoding, network diagnostics and everyday utilities, all from the terminal.",
    stack: ["Go", "Cobra"],
    href: "https://github.com/mmilanovic4/orbx",
  },
  {
    id: "jarvis-ui",
    name: "jarvis-ui",
    description:
      "A local AI assistant interface powered by Ollama — persistent conversations, model switching and voice input, all running privately on your machine.",
    stack: ["Next.js", "Ollama", "SQLite", "shadcn/ui"],
    href: "https://github.com/mmilanovic4/jarvis-ui",
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
              className="flex flex-col gap-2 border-b border-gray-200 pb-4 last:border-b-0 dark:border-gray-800"
            >
              <a
                href={project.href}
                target="_blank"
                className="text-accent text-sm font-semibold hover:underline"
              >
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
