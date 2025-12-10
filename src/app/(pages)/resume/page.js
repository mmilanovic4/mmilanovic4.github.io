import Image from "next/image";

const data = {
  work: [
    {
      id: "3",
      name: "LoanQ",
      location: "Sydney, Australia",
      from: 2020,
      to: "now",
      img: "/cv/loanq.ico",
    },
    {
      id: "2",
      name: "Salestrekker",
      location: "Sydney, Australia",
      from: 2018,
      to: "now",
      img: "/cv/salestrekker.ico",
    },
    {
      id: "1",
      name: "High-Tech Bridge",
      location: "Geneva, Switzerland",
      from: 2016,
      to: 2018,
      img: "/cv/htbridge.ico",
    },
  ],
  education: [
    {
      id: "3",
      name: "Singidunum University",
      title: "Master of Informatics",
      location: "Belgrade, Serbia",
      from: 2016,
      to: 2018,
      img: "/cv/singidunum.ico",
    },
    {
      id: "2",
      name: "Singidunum University",
      title: "Bachelor of Science in Informatics",
      location: "Belgrade, Serbia",
      from: 2012,
      to: 2016,
      img: "/cv/singidunum.ico",
    },
    {
      id: "1",
      name: 'ETHS "Nikola Tesla"',
      title: "Computer Technician",
      location: "Belgrade, Serbia",
      from: 2008,
      to: 2012,
      img: "/cv/tesla.ico",
    },
  ],
};

export const metadata = {
  title: "Miloš Milanović | Résumé",
};

export default function CV() {
  return (
    <>
      <section className="mx-2 md:mx-0">
        <h2 className="mt-8 mb-4 font-bold">Work</h2>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => {
            return (
              <li className="flex flex-col md:flex-row" key={row.id}>
                <span className="inline-block w-32 text-gray-500">
                  {row.from} - {row.to}
                </span>
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
                <span className="inline-block w-32 text-gray-500">
                  {row.from} - {row.to}
                </span>
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
