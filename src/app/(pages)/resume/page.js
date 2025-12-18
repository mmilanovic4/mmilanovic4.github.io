import Image from "next/image";
import data from "@/data/resume.json";

export const metadata = {
  title: "Miloš Milanović | Résumé",
};

export default function Resume() {
  return (
    <>
      <section className="mx-2 md:mx-0">
        <h2 className="mt-8 mb-4 font-bold">Work</h2>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => {
            return (
              <li className="flex flex-col md:flex-row" key={row.id}>
                <time
                  className="inline-block w-32 text-gray-500"
                  dateTime={`${row.from}-01-01`}
                >
                  {row.from} - {row.to}
                </time>
                <span className="inline-flex items-center">
                  <Image
                    className="mr-2 inline-block w-4"
                    alt={row.name}
                    src={row.img}
                    width={16}
                    height={16}
                  />
                  <strong>{row.name}</strong>, {row.location}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="mx-2 md:mx-0">
        <h2 className="mt-8 mb-4 font-bold">Education</h2>
        <ul className="flex flex-col gap-2">
          {data.education.map((row) => {
            return (
              <li className="flex flex-col md:list-item" key={row.id}>
                <time
                  className="inline-block w-32 text-gray-500"
                  dateTime={`${row.from}-01-01`}
                >
                  {row.from} - {row.to}
                </time>
                <span>{row.title}</span>
                <span className="ml-0 inline-block items-center overflow-hidden text-ellipsis whitespace-nowrap md:ml-32 md:inline-flex">
                  <Image
                    className="mr-2 inline-block w-4"
                    alt={row.name}
                    src={row.img}
                    width={16}
                    height={16}
                  />
                  <strong>{row.name}</strong>, {row.location}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
