const tools = [
  {
    k: "Shared memory",
    v: "One versioned memory store per project, synced between two machines. Facts can carry a command that re-checks them, the index stays within the agents' context limits, and nothing is deleted silently.",
  },
  {
    k: "Context keeper",
    v: "Writes a handoff file, warns a session as its context window fills up, and puts the essentials back after the context is compacted.",
  },
  {
    k: "Assignment queue",
    v: "One file per request with its status kept in place, so work survives restarts and handovers between sessions.",
  },
  {
    k: "Session hub",
    v: "Fixed roles and addresses for every session, message receipts, and restarts that don't lose work.",
  },
  {
    k: "Secret guard",
    v: "Redacts credentials from command output, stops agents from reading key files, and sweeps the transcripts every night.",
  },
  {
    k: "Review gate",
    v: "Runs Codex reviews on pull requests one after another and records which commit each review checked.",
  },
  {
    k: "Mail log",
    v: "Every email the agents send me is kept word for word, so a fact stated once can be found again.",
  },
];

export default function AgentTools() {
  return (
    <div className="tools">
      <h3 className="sub">Software we built for the agents</h3>
      <p className="intro">
        Coding agents out of the box forget what they learned, get in each
        other&apos;s way and can see whatever is in their terminal. The tooling
        around them is our own: about 70 scripts and some 10,800 lines in my
        repositories, used every day.
      </p>
      <dl className="skills">
        {tools.map((t) => (
          <div key={t.k} style={{ display: "contents" }}>
            <dt>{t.k}</dt>
            <dd>{t.v}</dd>
          </div>
        ))}
      </dl>
      <p className="src">Size: the agent tooling repository, counted on 21 October 2026.</p>
    </div>
  );
}
