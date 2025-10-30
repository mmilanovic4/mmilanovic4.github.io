export default function Resume() {
  return (
    <>
      <section>
        <h2 className="font-bold mb-4">Work</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <span className="w-32 inline-block">2020 - now</span>
            <span>
              <strong>LoanQ</strong>, Sydney, Australia
            </span>
          </li>
          <li>
            <span className="w-32 inline-block">2018 - now</span>
            <span>
              <strong>Salestrekker</strong>, Sydney, Australia
            </span>
          </li>
          <li>
            <span className="w-32 inline-block">2016 - 2018</span>
            <span>
              <strong>High-Tech Bridge</strong>, Geneva, Switzerland
            </span>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold my-4">Education</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <span className="w-32 inline-block">2016 - 2018</span>
            <span>Master of Informatics</span>
            <span className="ml-32 block">
              <strong>Singidunum University</strong>, Belgrade, Serbia
            </span>
          </li>
          <li>
            <span className="w-32 inline-block">2012 - 2016</span>
            <span>Bachelor of Science in Informatics</span>
            <span className="ml-32 block">
              <strong>Singidunum University</strong>, Belgrade, Serbia
            </span>
          </li>
          <li>
            <span className="w-32 inline-block">2008 - 2012</span>
            <span>Computer Technician</span>
            <span className="ml-32 block">
              <strong>ETHS "Nikola Tesla</strong>, Belgrade, Serbia
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
