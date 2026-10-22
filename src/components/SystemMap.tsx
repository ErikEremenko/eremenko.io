import AgentTools from "./AgentTools";

const roles = ["Operations", "Business and finance", "Research", "Websites"];

const pipeline = [
  { t: "Pull request", s: "written by an agent" },
  { t: "AI review", s: "on most code changes" },
  { t: "Staging", s: "agents merge here" },
  { t: "Production", s: "releases approved by one of us", gate: true },
];

const points = [
  {
    h: "Fixed roles",
    p: "Each agent session owns one area, such as operations, business or a website, and hands work to the others instead of redoing it.",
  },
  {
    h: "A shared memory",
    p: "Every session starts from the same versioned notes. When an agent gets something wrong, it writes down what happened and, where it can, turns that into an automatic check.",
  },
  {
    h: "Review before merging",
    p: "Most code changes get an AI review before they merge into staging. Production releases need one of us; during an incident, agents act in production under a standing permission from us.",
  },
  {
    h: "Measured, not assumed",
    p: "In a one-week sample of 553 merged changes, one in four needed a follow-up fix within 48 hours. Review time, not writing code, became the bottleneck.",
  },
];

export default function SystemMap() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <h2>How I work</h2>
        <p className="intro">
          PolySimulator is built and run by a small team of AI agents. I set
          the direction and design the controls around them. Production
          releases need my co-founder or me.
        </p>

        <div className="map">
          <svg
            viewBox="0 0 960 384"
            role="img"
            aria-labelledby="map-t map-d"
          >
            <title id="map-t">How the agent team around PolySimulator works</title>
            <desc id="map-d">
              I give goals to agent sessions with fixed roles. They share a
              versioned memory. Their code goes through pull requests, AI
              review and staging; production releases need one of us. Alerts
              go back to the operations session, and I get briefings by email.
            </desc>
            <defs>
              <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path className="ah" d="M0 0 L10 5 L0 10 z" />
              </marker>
              <marker id="ahA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path className="ah-acc" d="M0 0 L10 5 L0 10 z" />
              </marker>
            </defs>

            {/* Me */}
            <rect className="n-me" x="0" y="138" width="160" height="104" rx="10" />
            <text className="t-inv" x="18" y="172">Me</text>
            <text className="t-inv2" x="18" y="198">Sets direction,</text>
            <text className="t-inv2" x="18" y="216">approves releases</text>

            <path className="w" d="M160 166 H256" markerEnd="url(#ah)" />
            <text className="lbl" x="208" y="156" textAnchor="middle">goals</text>
            <path className="w" d="M260 214 H164" markerEnd="url(#ah)" strokeDasharray="4 3" />
            <text className="lbl" x="208" y="236" textAnchor="middle">briefings</text>

            {/* Agent sessions */}
            <rect className="grp" x="260" y="16" width="320" height="276" rx="12" />
            <text className="t" x="280" y="46">Agent sessions</text>
            <text className="s" x="280" y="66">Claude Code and Codex, each in a fixed role</text>
            {roles.map((r, i) => (
              <g key={r}>
                <rect className="n-role" x="280" y={84 + i * 42} width="280" height="34" rx="7" />
                <text className="t" x="296" y={106 + i * 42}>{r}</text>
              </g>
            ))}
            <text className="s" x="280" y="272">They message each other directly.</text>

            {/* Shared memory */}
            <path className="w" d="M420 292 V312" />
            <rect className="n" x="260" y="312" width="320" height="64" rx="10" />
            <text className="t" x="280" y="339">Shared memory</text>
            <text className="s" x="280" y="359">Versioned, synced every 20 minutes</text>

            {/* Delivery pipeline */}
            <path className="w-acc" d="M580 95 H620 V57 H656" markerEnd="url(#ahA)" />
            {pipeline.map((p, i) => {
              const y = 34 + i * 82;
              return (
                <g key={p.t}>
                  <rect className={p.gate ? "n-gate" : "n"} x="660" y={y} width="300" height="50" rx="9" />
                  <text className="t" x="678" y={y + 22}>{p.t}</text>
                  <text className="s" x="678" y={y + 40}>{p.s}</text>
                  {i < pipeline.length - 1 && (
                    <path className="w-acc" d={`M810 ${y + 50} V${y + 80}`} markerEnd="url(#ahA)" />
                  )}
                </g>
              );
            })}

            {/* Alerts loop back to operations */}
            <path className="w" d="M660 296 H612 V112 H564" markerEnd="url(#ah)" strokeDasharray="4 3" />
            <text className="lbl" x="604" y="214" textAnchor="end">alerts</text>
          </svg>

          <div className="map-list">
            <ol>
              <li>
                <b>Me</b>Set the direction and approve production releases.
              </li>
              <li>
                <b>Agent sessions</b>Claude Code and Codex in fixed roles:
                operations, business and finance, research, websites. They
                message each other directly.
              </li>
              <li>
                <b>Shared memory</b>Versioned notes and lessons, synced across
                machines every 20 minutes.
              </li>
              <li>
                <b>Pull request, AI review, staging</b>An agent writes the
                change, most code changes get an AI review, and agents merge
                into staging.
              </li>
              <li>
                <b>Production</b>Releases need one of us. Alerts go back to
                the operations session, and I get briefings by email.
              </li>
            </ol>
          </div>
        </div>

        <ul className="points">
          {points.map((p) => (
            <li key={p.h}>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </li>
          ))}
        </ul>
        <p className="src">
          Sources: our pull-request records. Review coverage: the 30 days to
          16 October 2026. Follow-up fixes: 553 pull requests merged between 29
          August and 4 September 2026.{" "}
          <a className="link" href="https://bavariance.com/work">
            More on bavariance.com
          </a>
        </p>
        <AgentTools />
      </div>
    </section>
  );
}
