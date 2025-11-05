const data = {
  work: [
    {
      id: "3",
      name: "LoanQ",
      location: "Sydney, Australia",
      from: 2020,
      to: "now",
    },
    {
      id: "2",
      name: "Salestrekker",
      location: "Sydney, Australia",
      from: 2018,
      to: "now",
    },
    {
      id: "1",
      name: "High-Tech Bridge",
      location: "Geneva, Switzerland",
      from: 2016,
      to: 2018,
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
    },
    {
      id: "2",
      name: "Singidunum University",
      title: "Bachelor of Science in Informatics",
      location: "Belgrade, Serbia",
      from: 2012,
      to: 2016,
    },
    {
      id: "1",
      name: 'ETHS "Nikola Tesla"',
      title: "Computer Technician",
      location: "Belgrade, Serbia",
      from: 2008,
      to: 2012,
    },
  ],
};

export default function Resume() {
  return (
    <>
      <section>
        <h2 className="font-bold mt-8 mb-4">Work</h2>
        <ul className="flex flex-col gap-2">
          {data.work.map((row) => {
            return (
              <li key={row.id}>
                <span className="w-32 inline-block">
                  {row.from} - {row.to}
                </span>
                <span>
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
                <span className="w-32 inline-block">
                  {row.from} - {row.to}
                </span>
                <span>{row.title}</span>
                <span className="ml-32 block">
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
