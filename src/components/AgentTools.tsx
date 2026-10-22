const tools = [
  {
    k: "Shared memory",
    v: "One memory store per project, kept in git and synced between two machines every 20 minutes. Its index is generated to stay within the agents' context limit, after an index that had grown too large was silently cut off.",
  },
  {
    k: "Assignment queue",
    v: "Every request becomes a file with its status kept in place. Built after requests were lost when a session's context was compacted.",
  },
  {
    k: "Prior-work check",
    v: "Before starting, a session checks whether the work already exists. Built after two sessions rebuilt the same thing on the same day.",
  },
  {
    k: "Session registry",
    v: "Stable names, roles and message receipts for every session, plus watchers that keep running when a session ends.",
  },
  {
    k: "Secret guard",
    v: "Rewrites commands so credentials are masked in their output, blocks reads of key files, and sweeps the transcripts every night.",
  },
  {
    k: "Review gate",
    v: "Runs a Codex review on a pull request and posts it with the model, commit and transcript hash. It refuses to post without the reviewer's final message, after a full disk once made it report zero findings.",
  },
  {
    k: "Alerts and mail",
    v: "Grafana alerts land in the assignment queue every five minutes, and every email the agents send me is logged word for word.",
  },
];

export default function AgentTools() {
  return (
    <div className="tools">
      <h3 className="sub">Software we built for the agents</h3>
      <p className="intro">
        Coding agents out of the box forget what they learned, get in each
        other&apos;s way and can see whatever is in their terminal. The tooling
        around them is our own, about 70 scripts and 11,000 lines, and several
        pieces exist because something went wrong.
      </p>
      <dl className="skills">
        {tools.map((t) => (
          <div key={t.k} style={{ display: "contents" }}>
            <dt>{t.k}</dt>
            <dd>{t.v}</dd>
          </div>
        ))}
      </dl>
      <p className="src">Size: the agent tooling repository, counted on 22 October 2026.</p>
    </div>
  );
}
