import { SectionHeading } from "./About";

const skillCategories = [
  {
    label: "AI & LLM Tools",
    skills: [
      "GitHub Copilot Agent",
      "LLM Dev Workflows",
      "MCP Development",
      "LeRobot",
    ],
  },
  {
    label: "Languages",
    skills: ["Python", "C", "C++", "Java", "OCaml", "TypeScript", "JavaScript"],
  },
  {
    label: "Web & API",
    skills: ["REST API", "WebSockets", "Node.js", "Next.js", "Full-Stack"],
  },
  {
    label: "Cloud & Infra",
    skills: [
      "AWS (Lambda, S3, EC2)",
      "Cloudflare",
      "Google Cloud",
      "Hetzner",
      "Fly.io",
      "Dokploy",
    ],
  },
  {
    label: "Databases",
    skills: ["Supabase (PostgreSQL)", "Redis", "SQL"],
  },
  {
    label: "DevOps & Build",
    skills: [
      "Git",
      "Docker",
      "CMake",
      "Bash",
      "CI/CD (GitHub Actions)",
      "OpenMP",
    ],
  },
  {
    label: "Observability",
    skills: ["Prometheus", "Grafana", "Loki", "PostHog", "MS Clarity"],
  },
  {
    label: "Math & Data",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <SectionHeading>Skills</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold text-foreground mb-2">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 rounded border border-card-border text-muted hover:text-foreground hover:border-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-card-border">
        <h3 className="text-sm font-semibold text-foreground mb-2">
          Languages
        </h3>
        <p className="text-sm text-muted">
          German (native) · English (C1) · Russian (native) · French (DELF B1)
        </p>
      </div>
    </section>
  );
}
