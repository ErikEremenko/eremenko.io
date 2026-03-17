import { SectionHeading } from "./About";

const experiences = [
  {
    title: "Co-Founder & Developer",
    org: "Bavariance (in founding)",
    period: "Dec 2025 — Present",
    description:
      "Building PolySimulator, an AI-powered prediction market paper-trading platform. Full-stack development with AI-agent-assisted workflows.",
  },
  {
    title: "Bachelor Practical: Molecular Simulation",
    org: "TU Munich",
    period: "Oct 2025 — Feb 2026",
    description:
      "Group implementation of a molecular dynamics simulator. Collaborative PR workflow with mentor reviews and sprint demos.",
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
