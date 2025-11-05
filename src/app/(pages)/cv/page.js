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

export default function CV() {
  return (
    <>
      <section>
        <h2 className="font-bold mt-8 mb-4">Work</h2>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => {
            return (
              <li className="flex" key={row.id}>
                <span className="w-32 inline-block text-gray-500">
                  {row.from} - {row.to}
                </span>
                <span className="inline-flex items-center">
                  <img
                    className="inline-block mr-2 w-4"
                    alt={row.name}
                    src={row.img}
                  />
                  <strong>{row.name}</strong>, {row.location}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2 className="font-bold mt-8 mb-4">Education</h2>
        <ul className="flex flex-col gap-2">
          {data.education.map((row) => {
            return (
              <li key={row.id}>
                <span className="w-32 inline-block text-gray-500">
                  {row.from} - {row.to}
                </span>
                <span>{row.title}</span>
                <span className="ml-32 inline-flex items-center">
                  <img
                    className="inline-block mr-2 w-4"
                    alt={row.name}
                    src={row.img}
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
