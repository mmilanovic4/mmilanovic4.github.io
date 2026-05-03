import { Container, ResumeItem } from "@/components";
import data from "@/content/resume.json";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Miloš Milanović | Résumé",
  description: "Work and education history.",
});

export default function Resume() {
  return (
    <Container>
      <section className="mb-8">
        <p className="text-accent mb-3 text-xs"># work</p>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => (
            <ResumeItem key={row.id} item={row} />
          ))}
        </ul>
      </section>

      <section>
        <p className="text-accent mb-3 text-xs"># education</p>
        <ul className="flex flex-col gap-2">
          {data.education.map((row) => (
            <ResumeItem key={row.id} item={row} />
          ))}
        </ul>
      </section>
    </Container>
  );
}
