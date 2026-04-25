const stack = ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Go"];

export default function Home() {
  return (
    <div className="mx-auto mt-8 w-full max-w-full px-4 md:w-125 md:px-0">
      <section className="mb-8">
        <p className="text-accent mb-3 text-xs"># about</p>
        <p className="text-sm leading-loose text-gray-700 dark:text-gray-300">
          Hey, I{"'"}m Miloš - a full-stack web developer based in{" "}
          <span className="text-accent">Belgrade, Serbia</span>. I build web
          apps with a focus on clean code and good UX.
        </p>
      </section>

      <section>
        <p className="text-accent mb-3 text-xs"># stack</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-accent-light text-accent-dark rounded px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
