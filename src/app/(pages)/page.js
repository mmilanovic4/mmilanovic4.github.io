import Link from "next/link";
import { Container } from "@/components";
import { stack } from "@/content";

export default function Home() {
  return (
    <Container>
      <div className="mb-8">
        <p className="text-accent mb-3 text-xs"># about</p>
        <p className="text-sm leading-loose md:text-base lg:text-lg">
          Hey, I{"'"}m Miloš — a full-stack web developer based in{" "}
          <span className="text-accent">Belgrade, Serbia</span>. I build web
          apps with a focus on clean code and good UX. You can read my thoughts
          on the web and beyond on{" "}
          <Link
            href="/blog"
            className="text-accent underline underline-offset-[3px] hover:opacity-80"
          >
            my blog
          </Link>
          .
        </p>
      </div>
      <div className="mb-8">
        <p className="text-accent mb-3 text-xs"># stack</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-accent-light text-accent-dark rounded px-2 py-1 text-xs md:text-sm lg:text-base"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-accent mb-3 text-xs"># contact</p>
        <p className="text-sm leading-loose md:text-base lg:text-lg">
          Drop me a message at{" "}
          <a
            href="mailto:hello@milos.fyi"
            className="text-accent underline underline-offset-[3px] hover:opacity-80"
          >
            hello@milos.fyi
          </a>{" "}
          and I{"'"}ll get back to you.
        </p>
      </div>
    </Container>
  );
}
