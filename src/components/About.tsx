export default function About() {
  return (
    <section id="about" className="py-20">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid md:grid-cols-[3fr_2fr] gap-10">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m a Computer Science student at the{" "}
            <span className="text-foreground">Technical University of Munich</span>{" "}
            (minor in Mathematics), currently in my 6th semester. I&apos;m
            passionate about building software that solves real problems — from
            prediction market platforms to molecular dynamics simulators.
          </p>
          <p>
            As co-founder of{" "}
            <a
              href="https://polysimulator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              PolySimulator
            </a>
            , I developed a full-stack paper-trading platform that serves 1,880+
            registered users. I enjoy working across the stack — from
            low-level C++ simulations to cloud-native web applications.
          </p>
          <p>
            I&apos;m an early adopter of AI-assisted development workflows,
            using GitHub Copilot Agent and MCP integrations extensively in my
            daily work.
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
                B.Sc. Computer Science, Minor in Mathematics
              </p>
              <p className="text-xs text-muted mt-1">
                Oct 2023 — exp. Apr 2027
              </p>
            </div>
            <div className="border-l-2 border-card-border pl-4">
              <p className="text-sm font-medium text-foreground">
                Königin-Luise-Gymnasium Erfurt
              </p>
              <p className="text-sm text-muted">
                Abitur — graduated with distinction (1.2/1.0, GPA equiv. 3.85/4.0)
              </p>
              <p className="text-xs text-muted mt-1">2015 — 2023</p>
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
