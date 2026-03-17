import { SectionHeading } from "./About";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

const projects = [
  {
    title: "PolySimulator",
    subtitle: "AI-powered Prediction Market Platform",
    description:
      "Full-stack paper-trading platform for prediction markets (Polymarket API). 1,880+ registered users, 599 MAU, ~6,270 monthly visitors. Built with AI-agent-assisted development using GitHub Copilot.",
    tech: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "Redis",
      "WebSockets",
      "Supabase",
      "Docker",
    ],
    links: {
      live: "https://polysimulator.com",
      github: "https://github.com/Bavariance",
    },
    featured: true,
  },
  {
    title: "Molecular Dynamics Simulator",
    subtitle: "Bachelor Practical Course — TUM",
    description:
      "Group implementation of a molecular dynamics simulator with Lennard-Jones potential and linked-cell algorithm. Performance benchmarking with Valgrind, sanitizers, and systematic testing.",
    tech: ["C++", "CMake", "OpenMP", "GoogleTest", "VTK", "Valgrind", "Doxygen"],
    links: {
      github: "https://github.com/ErikEremenko/MolSim-WS25-GroupB",
    },
    featured: true,
  },
  {
    title: "HackaTUM — IMC Trading Challenge",
    subtitle: "Bavariance Team",
    description:
      "Trading bot with Exchange API integration, automated order management and ensemble model for market price prediction. Built during HackaTUM 2025.",
    tech: ["Python", "Exchange API", "Algorithmic Trading"],
    links: {
      live: "https://devpost.com/software/bavariance-imcity",
      github: "https://github.com/Bavariance/IMCity",
    },
    featured: false,
  },
  {
    title: "Robo.Innovate Hackathon",
    subtitle: "TUM Venture Labs — BMW Team A",
    description:
      "On-premise server setup, training and fine-tuning of deep learning models via imitation learning using the LeRobot framework.",
    tech: ["Python", "Deep Learning", "LeRobot", "Imitation Learning"],
    links: {
      live: "https://unbox-robotics.vercel.app",
    },
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionHeading>Projects</SectionHeading>

      <div className="space-y-6">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <FeaturedProject key={project.title} {...project} />
          ))}
      </div>

      <h3 className="text-lg font-semibold mt-12 mb-4">
        Other Notable Projects
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </section>
  );
}

function FeaturedProject({
  title,
  subtitle,
  description,
  tech,
  links,
}: (typeof projects)[0]) {
  return (
    <div className="group border border-card-border rounded-lg p-6 bg-card hover:bg-card-hover transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3 mt-1">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label={`${title} on GitHub`}
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label={`${title} live`}
            >
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  links,
}: (typeof projects)[0]) {
  return (
    <div className="group border border-card-border rounded-lg p-5 bg-card hover:bg-card-hover transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label={`${title} on GitHub`}
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label={`${title} live`}
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-xs text-muted mb-1">{subtitle}</p>
      <p className="text-xs text-muted leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
