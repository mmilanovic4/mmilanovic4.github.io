import { ResumeItem } from "@/components/resume-item";
import data from "@/data/resume.json";

export const metadata = {
  title: "Miloš Milanović | Résumé",
};

export default function Resume() {
  return (
    <div className="mx-auto max-w-full md:w-125">
      <section>
        <h2 className="mt-8 mb-4 font-bold">Work</h2>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => {
            return <ResumeItem key={row.id} item={row} />;
          })}
        </ul>
      </section>
      <section>
        <h2 className="mt-8 mb-4 font-bold">Education</h2>
        <ul className="flex flex-col gap-2">
          {data.education.map((row) => {
            return <ResumeItem key={row.id} item={row} />;
          })}
        </ul>
      </section>
    </div>
  );
}
