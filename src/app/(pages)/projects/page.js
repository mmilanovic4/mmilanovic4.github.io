export const metadata = { title: "Miloš Milanović | Projects" };

const projects = [
  {
    id: "orbx",
    name: "orbx",
    description:
      "A lightweight CLI toolkit for developers — encryption, encoding, network diagnostics and everyday utilities, all from the terminal.",
    stack: ["Go", "Cobra"],
    href: "https://github.com/mmilanovic4/orbx",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto mt-8 w-full max-w-full px-4 md:w-125 md:px-0">
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
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
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
    </div>
  );
}
