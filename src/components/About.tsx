export default function About() {
  return (
    <section id="about" className="py-20">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid md:grid-cols-[3fr_2fr] gap-10">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I build software with AI coding agents and run it in production.
          </p>
          <p>
            Since November 2025 my co-founder and I have built{" "}
            <a
              href="https://polysimulator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              PolySimulator
            </a>
            , a paper-trading simulator and trading API for Polymarket. Since
            May 2026 nearly all of its code has been written by AI agents that I
            orchestrate with Claude Code and Codex: sessions with fixed roles, a
            shared memory, AI review before merging, and production alerts
            routed back to the agents. How it works is written up on{" "}
            <a
              href="https://bavariance.com/work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              bavariance.com
            </a>
            .
          </p>
          <p>
            At ING Deutschland I&apos;m a working student in AI Workplace
            Assistance, bringing applied AI and automation to teams across the
            bank.
          </p>
          <p>
            I study Information Systems (Wirtschaftsinformatik) at TUM, after
            six semesters of Computer Science.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Education
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-accent/30 pl-4">
              <p className="text-sm font-medium text-foreground">
                Technical University of Munich
              </p>
              <p className="text-sm text-muted">
                B.Sc. Information Systems (Wirtschaftsinformatik)
              </p>
              <p className="text-xs text-muted mt-1">Since Oct 2026</p>
            </div>
            <div className="border-l-2 border-card-border pl-4">
              <p className="text-sm font-medium text-foreground">
                Technical University of Munich
              </p>
              <p className="text-sm text-muted">
                B.Sc. Computer Science (Informatik), 6 semesters
              </p>
              <p className="text-xs text-muted mt-1">Oct 2023 - Oct 2026</p>
            </div>
            <div className="border-l-2 border-card-border pl-4">
              <p className="text-sm font-medium text-foreground">
                Königin-Luise-Gymnasium Erfurt
              </p>
              <p className="text-sm text-muted">
                Abitur, final grade 1.2 (GPA equiv. 3.85/4.0)
              </p>
              <p className="text-xs text-muted mt-1">2015 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <span>{children}</span>
      <span className="flex-1 h-px bg-card-border" />
    </h2>
  );
}

export { SectionHeading };
