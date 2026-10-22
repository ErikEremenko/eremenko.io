"use client";

import { useState } from "react";
import data from "@/data/merges-daily.json";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Mon", "", "Wed", "", "Fri", "", ""];
const n = (x: number) => x.toLocaleString("en-US");
const sum = (a: readonly number[]) => a.reduce((s, x) => s + x, 0);
const both = data.commits_me.map((x, i) => x + data.commits_co[i]);
// Index of 1 March 2026 in the daily series.
const MARCH = Math.round((Date.parse("2026-03-01") - Date.parse(data.start)) / 864e5);

const COMMIT_SRC =
  "Source: git history of PolySimulator's main repository, commits without merges and without bot commits, by author and UTC date; fetched 22 October 2026.";

const VIEWS = {
  mine: {
    tab: "My commits",
    counts: data.commits_me,
    unit: "commits",
    label: `commits under my name, by me and, since May 2026, mostly by my agents; ${n(
      sum(data.commits_me.slice(0, MARCH)),
    )} of them before March`,
    src: COMMIT_SRC,
  },
  both: {
    tab: "Both founders",
    counts: both,
    unit: "commits",
    label: `commits by the two founders: ${n(sum(data.commits_me))} under my name, ${n(
      sum(data.commits_co),
    )} under my co-founder's`,
    src: COMMIT_SRC,
  },
  prs: {
    tab: "Merged pull requests",
    counts: data.counts,
    unit: "merged",
    label: `pull requests merged: ${n(data.erik)} from my account, ${n(data.cofounder)} from my co-founder's and ${data.other} from GitHub's Copilot agent`,
    src: "Source: GitHub, every pull request merged into PolySimulator's main repository, by the account that opened it and UTC merge date; fetched 22 October 2026.",
  },
} as const;

type ViewKey = keyof typeof VIEWS;

function level(x: number) {
  if (x === 0) return 0;
  if (x < 10) return 1;
  if (x < 30) return 2;
  if (x < 60) return 3;
  if (x < 100) return 4;
  return 5;
}

function dayAt(i: number) {
  const d = new Date(data.start + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + i);
  return d;
}

function fmt(d: Date) {
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

// Monthly totals; the first and last months are partial.
function monthly(counts: readonly number[]) {
  const out: { key: string; label: string; long: string; n: number }[] = [];
  counts.forEach((x, i) => {
    const d = dayAt(i);
    const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
    const last = out[out.length - 1];
    if (!last || last.key !== key) {
      out.push({ key, label: MONTHS[d.getUTCMonth()], long: `${MONTHS_LONG[d.getUTCMonth()]} ${d.getUTCFullYear()}`, n: 0 });
    }
    out[out.length - 1].n += x;
  });
  return out;
}

function Heatmap({ counts, unit }: { counts: readonly number[]; unit: string }) {
  const cell = 14;
  const step = 17;
  const left = 34;
  const top = 56;
  const weeks = Math.ceil(counts.length / 7);
  const width = left + weeks * step;
  const height = top + 7 * step + 34;
  const totals = monthly(counts);
  const firstOfMonth: { x: number; label: string; total: number }[] = [];
  let m = 0;
  counts.forEach((_, i) => {
    const d = dayAt(i);
    if (d.getUTCDate() === 1 || i === 0) {
      firstOfMonth.push({ x: left + Math.floor(i / 7) * step, label: MONTHS[d.getUTCMonth()], total: totals[m].n });
      m += 1;
    }
  });
  const markAt = (iso: string) => {
    const i = Math.round((Date.parse(iso + "T00:00:00Z") - Date.parse(data.start + "T00:00:00Z")) / 864e5);
    return left + Math.floor(i / 7) * step + cell / 2;
  };
  const marks = [
    { x: markAt("2026-03-02"), t: "Pull requests from March" },
    { x: markAt("2026-07-31"), t: "Recorder goes live", end: true },
    { x: markAt("2026-10-21"), t: "Production moves to London", end: true },
  ];
  // The quiet weeks in summer were exams.
  const exams = { x1: markAt("2026-06-22") - cell / 2, x2: markAt("2026-07-30") + cell / 2 };

  return (
    <svg
      className="heat-d"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`${unit} per day from ${fmt(dayAt(0))} to ${fmt(dayAt(counts.length - 1))}, ${n(sum(counts))} in total. The monthly totals are in the table below.`}
    >
      {marks.map((mk) => (
        <g key={mk.t}>
          <line className="mk" x1={mk.x} x2={mk.x} y1={6} y2={top - 6} />
          <text className="mk-t" x={mk.end ? mk.x - 6 : mk.x + 6} y={18} textAnchor={mk.end ? "end" : "start"}>
            {mk.t}
          </text>
        </g>
      ))}
      <g>
        <path className="mk" fill="none" d={`M${exams.x1} ${top - 4} V${top - 9} H${exams.x2} V${top - 4}`} />
        <text className="mk-t" x={(exams.x1 + exams.x2) / 2} y={top - 14} textAnchor="middle">
          Exams
        </text>
      </g>
      {DAYS.map((d, r) =>
        d ? (
          <text key={r} className="ax" x={0} y={top + r * step + 11}>
            {d}
          </text>
        ) : null,
      )}
      {counts.map((x, i) => (
        <rect key={i} className={`c${level(x)}`} x={left + Math.floor(i / 7) * step} y={top + (i % 7) * step} width={cell} height={cell} rx={3}>
          <title>{`${fmt(dayAt(i))}: ${x} ${unit}`}</title>
        </rect>
      ))}
      {firstOfMonth.map((f) => (
        <g key={f.x}>
          <text className="ax" x={f.x} y={top + 7 * step + 14}>
            {f.label}
          </text>
          <text className="mt" x={f.x} y={top + 7 * step + 30}>
            {n(f.total)}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MonthBars({ counts }: { counts: readonly number[] }) {
  const months = monthly(counts);
  const w = 340;
  const h = 210;
  const base = 172;
  const max = Math.max(...months.map((d) => d.n));
  const bw = (w - 8) / months.length;
  return (
    <svg className="heat-m" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Totals per month. The same numbers are in the table below.">
      {months.map((d, i) => {
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
      <text className="ax" x={4} y={h - 2}>
        Nov 2025
      </text>
      <text className="ax" x={w - 4} y={h - 2} textAnchor="end">
        Oct 2026
      </text>
    </svg>
  );
}

export default function Activity() {
  const [view, setView] = useState<ViewKey>("mine");
  const v = VIEWS[view];
  const counts: readonly number[] = v.counts;
  const months = monthly(counts);
  return (
    <section className="sec" id="activity">
      <div className="wrap">
        <h2>Eleven months in the repository</h2>
        <p className="intro">
          The repository started on 17 November 2025. Until March 2026 we
          committed straight to the main branch (803 commits against 6 merged
          pull requests), so the commits show those months best. Since May 2026,
          agents have written nearly all of the code.
        </p>
        <div className="activity">
          <div className="seg" role="group" aria-label="What the chart shows">
            {(Object.keys(VIEWS) as ViewKey[]).map((k) => (
              <button key={k} type="button" aria-pressed={view === k} onClick={() => setView(k)}>
                {VIEWS[k].tab}
              </button>
            ))}
          </div>
          <div className="head">
            <span className="big">{n(sum(counts))}</span>
            <span className="big-l">{v.label}</span>
          </div>
          <Heatmap counts={counts} unit={v.unit} />
          <MonthBars counts={counts} />
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
                  <th scope="col">{v.tab}</th>
                </tr>
              </thead>
              <tbody>
                {months.map((d) => (
                  <tr key={d.key}>
                    <td>{d.long}</td>
                    <td>{n(d.n)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </div>
        <p className="src" style={{ marginTop: 14 }}>
          {v.src} Period: {fmt(dayAt(0))} to {fmt(dayAt(counts.length - 1))}.
        </p>
      </div>
    </section>
  );
}
