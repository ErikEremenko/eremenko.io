const experience = [
  {
    d: "Nov 2025 – now",
    r: "Co-founder",
    o: "PolySimulator, Munich",
    p: "Product, architecture and the agent system that builds and runs it.",
  },
  {
    d: "Jul – Dec 2026",
    r: "Working Student, AI Workplace Assistance",
    o: "ING Deutschland, COO Digital Office",
    p: "Applied AI and automation for teams across the bank, including internal software built with AI coding agents.",
  },
];

const education = [
  {
    d: "Since Oct 2026",
    r: "B.Sc. Information Systems",
    o: "Technical University of Munich (Wirtschaftsinformatik)",
  },
  {
    d: "Oct 2023 – Oct 2026",
    r: "B.Sc. Computer Science",
    o: "Technical University of Munich (Informatik), six semesters",
  },
  {
    d: "2015 – 2023",
    r: "Abitur, final grade 1.2",
    o: "Königin-Luise-Gymnasium Erfurt",
  },
  {
    d: "2022 – 2023",
    r: "Data Science Bootcamp; Applied Edge AI",
    o: "Hasso Plattner Institute, certificates",
  },
];

function List({ items }: { items: { d: string; r: string; o: string; p?: string }[] }) {
  return (
    <ol>
      {items.map((it) => (
        <li key={it.r}>
          <span className="d">{it.d}</span>
          <div>
            <span className="r">{it.r}</span>
            <span className="o">{it.o}</span>
            {it.p && <p>{it.p}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Timeline() {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <h2>Experience and education</h2>
        <div className="tl">
          <div>
            <h3>Experience</h3>
            <List items={experience} />
          </div>
          <div>
            <h3>Education</h3>
            <List items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
