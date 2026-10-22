import merges from "@/data/merges-daily.json";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Mon", "", "Wed", "", "Fri", "", ""];

function level(n: number) {
  if (n === 0) return 0;
  if (n < 10) return 1;
  if (n < 30) return 2;
  if (n < 60) return 3;
  if (n < 100) return 4;
  return 5;
}

function dayAt(i: number) {
  const d = new Date(merges.start + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + i);
  return d;
}

function fmt(d: Date) {
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

// Monthly totals; the first and last months are partial.
function monthly() {
  const out: { key: string; label: string; long: string; n: number }[] = [];
  merges.counts.forEach((n, i) => {
    const d = dayAt(i);
    const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
    const last = out[out.length - 1];
    if (!last || last.key !== key) {
      out.push({
        key,
        label: MONTHS[d.getUTCMonth()],
        long: `${MONTHS_LONG[d.getUTCMonth()]} ${d.getUTCFullYear()}`,
        n: 0,
      });
    }
    out[out.length - 1].n += n;
  });
  return out;
}

function Heatmap() {
  const cell = 14;
  const step = 17;
  const left = 34;
  const top = 46;
  const weeks = Math.ceil(merges.counts.length / 7);
  const width = left + weeks * step;
  const height = top + 7 * step + 34;
  const firstOfMonth: { x: number; label: string; total: number }[] = [];
  const totals = monthly();
  let m = 0;
  merges.counts.forEach((_, i) => {
    const d = dayAt(i);
    if (d.getUTCDate() === 1 || i === 0) {
      firstOfMonth.push({ x: left + Math.floor(i / 7) * step, label: MONTHS[d.getUTCMonth()], total: totals[m].n });
      m += 1;
    }
  });
  const markAt = (iso: string) => {
    const i = Math.round((Date.parse(iso + "T00:00:00Z") - Date.parse(merges.start + "T00:00:00Z")) / 864e5);
    return left + Math.floor(i / 7) * step + cell / 2;
  };
  const marks = [
    { x: markAt("2026-05-01"), t: "Agents write nearly all code" },
    { x: markAt("2026-10-21"), t: "Production moves to London", end: true },
  ];

  return (
    <svg
      className="heat-d"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`Pull requests merged per day from ${fmt(dayAt(0))} to ${fmt(dayAt(merges.counts.length - 1))}, ${merges.total.toLocaleString("en-US")} in total. The monthly totals are in the table below.`}
    >
      {marks.map((mk) => (
        <g key={mk.t}>
          <line className="mk" x1={mk.x} x2={mk.x} y1={8} y2={top - 6} />
          <text className="mk-t" x={mk.end ? mk.x - 6 : mk.x + 6} y={18} textAnchor={mk.end ? "end" : "start"}>
            {mk.t}
          </text>
        </g>
      ))}
      {DAYS.map((d, r) =>
        d ? (
          <text key={r} className="ax" x={0} y={top + r * step + 11}>
            {d}
          </text>
        ) : null,
      )}
      {merges.counts.map((n, i) => {
        const x = left + Math.floor(i / 7) * step;
        const y = top + (i % 7) * step;
        return (
          <rect key={i} className={`c${level(n)}`} x={x} y={y} width={cell} height={cell} rx={3}>
            <title>{`${fmt(dayAt(i))}: ${n} merged`}</title>
          </rect>
        );
      })}
      {firstOfMonth.map((f) => (
        <g key={f.x}>
          <text className="ax" x={f.x} y={top + 7 * step + 14}>
            {f.label}
          </text>
          <text className="mt" x={f.x} y={top + 7 * step + 30}>
            {f.total.toLocaleString("en-US")}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MonthBars() {
  const data = monthly();
  const w = 340;
  const h = 210;
  const base = 172;
  const max = Math.max(...data.map((d) => d.n));
  const bw = (w - 8) / data.length;
  return (
    <svg className="heat-m" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Pull requests merged per month. The monthly totals are in the table below.">
      {data.map((d, i) => {
        const bh = d.n === 0 ? 0 : Math.max(3, (d.n / max) * 140);
        const x = 4 + i * bw + 3;
        return (
          <g key={d.key}>
            {bh > 0 && <rect className="bar" x={x} y={base - bh} width={bw - 6} height={bh} rx={3} />}
            {d.n >= 100 && (
              <text className="mt" x={x + (bw - 6) / 2} y={base - bh - 6} textAnchor="middle">
                {d.n >= 1000 ? `${(d.n / 1000).toFixed(1)}k` : d.n}
              </text>
            )}
            <text className="ax" x={x + (bw - 6) / 2} y={base + 18} textAnchor="middle">
              {d.label.slice(0, 1)}
            </text>
          </g>
        );
      })}
      <text className="ax" x={4} y={h - 2}>Nov 2025</text>
      <text className="ax" x={w - 4} y={h - 2} textAnchor="end">Oct 2026</text>
    </svg>
  );
}

export default function Activity() {
  const data = monthly();
  return (
    <section className="sec" id="activity">
      <div className="wrap">
        <h2>Eleven months of pull requests</h2>
        <p className="intro">
          Every pull request merged into PolySimulator&apos;s main repository, by
          day. Agents open them under my co-founder&apos;s account and mine, and
          since May 2026 they have written nearly all of the code.
        </p>
        <div className="activity">
          <div className="head">
            <span className="big">{merges.total.toLocaleString("en-US")}</span>
            <span className="big-l">
              pull requests merged, {fmt(dayAt(0))} to {fmt(dayAt(merges.counts.length - 1))}
            </span>
          </div>
          <Heatmap />
          <MonthBars />
          <p className="legend" aria-hidden="true">
            Fewer
            <i style={{ background: "var(--heat-0)" }} />
            <i style={{ background: "var(--heat-1)" }} />
            <i style={{ background: "var(--heat-2)" }} />
            <i style={{ background: "var(--heat-3)" }} />
            <i style={{ background: "var(--heat-4)" }} />
            <i style={{ background: "var(--heat-5)" }} />
            More per day
          </p>
          <details className="data">
            <summary>Monthly totals as a table</summary>
            <table>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Merged</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d.key}>
                    <td>{d.long}</td>
                    <td>{d.n.toLocaleString("en-US")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </div>
        <p className="src" style={{ marginTop: 14 }}>
          Source: GitHub, pull requests merged into PolySimulator&apos;s main
          repository by both founders&apos; accounts, counted by UTC date;
          fetched 22 October 2026. November 2025 starts on the 17th and October
          2026 ends on the 21st.
        </p>
      </div>
    </section>
  );
}
