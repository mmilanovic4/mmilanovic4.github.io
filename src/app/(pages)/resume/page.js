import { ResumeItem } from "@/components";
import data from "@/content/resume.json";

export const metadata = {
  title: "Miloš Milanović | Résumé",
};

export default function Resume() {
  return (
    <div className="mx-auto mt-8 w-full max-w-full px-4 md:w-125 md:px-0">
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
    </div>
  );
}
