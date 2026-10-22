const skills = [
  {
    k: "AI engineering",
    v: "Claude Code and Codex CLI, multi-agent orchestration, agent memory and context design, review gates, MCP servers",
  },
  {
    k: "Software",
    v: "Python (FastAPI), TypeScript, React and Next.js, SQL and PostgreSQL, Redis, WebSockets, C++ with OpenMP; also C, Java and OCaml",
  },
  {
    k: "Operations",
    v: "Docker, GitHub Actions, Cloudflare (R2, Workers), AWS, Grafana, Prometheus and Loki, database migrations, incident analysis",
  },
  {
    k: "Data and ML",
    v: "Real-time capture pipelines, NumPy, pandas, Matplotlib, online learning, imitation learning with LeRobot",
  },
  {
    k: "Languages",
    v: "German and Russian (native), English (C1), French (DELF B1)",
  },
];

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.k} style={{ display: "contents" }}>
              <dt>{s.k}</dt>
              <dd>{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
