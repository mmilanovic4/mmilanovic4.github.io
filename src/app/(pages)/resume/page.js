import { Container, ResumeItem } from "@/components";
import data from "@/content/resume.json";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Résumé",
  description: "Work and education history.",
  openGraph: {
    url: `${BASE_URL}/resume`,
  },
});

export default function Resume() {
  return (
    <Container>
      <div className="mb-8">
        <p className="text-accent mb-3 text-xs"># work</p>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => (
            <ResumeItem key={row.id} item={row} />
          ))}
        </ul>
      </div>

      <div>
        <p className="text-accent mb-3 text-xs"># education</p>
        <ul className="flex flex-col gap-2">
          {data.education.map((row) => (
            <ResumeItem key={row.id} item={row} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
