import { SectionHeading } from "./About";

const experiences = [
  {
    title: "Co-founder",
    org: "PolySimulator",
    period: "Nov 2025 — Present",
    description:
      "Built a paper-trading simulator, trading API and order-book data platform for Polymarket with my co-founder. I orchestrate the AI coding agents that write nearly all of the code. In October 2026 we moved production from the US to London with an 11-minute maintenance window.",
  },
  {
    title: "Working Student, AI Workplace Assistance",
    org: "ING Deutschland, COO Digital Office",
    period: "Jul 2026 — Dec 2026",
    description:
      "Applied AI and automation for teams across the bank, including internal software built with AI coding agents.",
  },
];

const certifications = [
  {
    title: "Applied Edge AI: Deep Learning Outside of the Cloud",
    org: "Hasso Plattner Institut",
    date: "Oct 2022",
    link: "https://open.hpi.de/verify/xelop-lycuk-copat-ruvin-gypyn",
  },
  {
    title: "Data Science Bootcamp",
    org: "Hasso Plattner Institut",
    date: "Jul 2023",
    link: "https://open.hpi.de/verify/xebef-mynal-gosud-kimat-rovov",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-6 mb-12">
        {experiences.map((exp) => (
          <div key={exp.title} className="border-l-2 border-accent/30 pl-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-sm font-semibold text-foreground">
                {exp.title}
              </h3>
              <span className="text-xs text-muted font-mono">{exp.period}</span>
            </div>
            <p className="text-sm text-accent/80 mb-1">{exp.org}</p>
            <p className="text-sm text-muted leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4">Certifications</h3>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
          >
            <div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {cert.title}
              </a>
              <span className="text-sm text-muted"> — {cert.org}</span>
            </div>
            <span className="text-xs text-muted font-mono">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
