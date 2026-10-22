const columns = [
  {
    h: "Trading engine",
    p: [
      "Market orders walk the live order book level by level and fill at the volume-weighted price. The engine is complement-aware like Polymarket's own: a bid for No at 40¢ is an offer of Yes at 60¢.",
      "A book older than two seconds (750 ms for live sports) is fetched again before anything fills against it. Takers pay Polymarket's fee formula with per-category rates; makers pay nothing.",
      "Limit orders rest and are matched every second, with partial fills. Every balance change is an atomic ledger entry, a repeated order ID returns the original order instead of filling twice, and resolved markets pay $1 or $0 a share.",
    ],
  },
  {
    h: "API and SDK",
    p: [
      "REST and WebSocket, with routes and channels that follow Polymarket's, so a bot written for Polymarket can point at PolySimulator instead. Orders never reach Polymarket.",
      "API keys are stored hashed and rate-limited per key, in published tiers from 2 to 100 requests a second. It handled 3.3 million API requests in the 24 hours to 22 October 2026.",
      "The Python SDK on PyPI follows the interface of Polymarket's own Python client. A partner API lets other platforms run simulated accounts for their users.",
    ],
  },
  {
    h: "Order-book recorder",
    p: [
      "8 recorder processes keep about 1,900 WebSocket connections open to Polymarket's public market feed and record every book snapshot, price change and trade, around the clock since 31 July 2026.",
      "Every hour each process writes Parquet files to Cloudflare R2 and reads each upload back to check it. Every frame is numbered, so a gap shows up instead of hiding, and a check compares the recorded layers every 20 minutes.",
      "That is about 6 billion order-book rows a day, around 2 TB of new data a week. An hourly job sorts it by market for replay and backtests.",
    ],
  },
];

const stats = [
  { v: "409,000+", k: "simulated fills" },
  { v: "3,800+", k: "traders with at least one fill" },
  { v: "70,000+", k: "markets traded" },
  { v: "~6 billion", k: "order-book rows written a day" },
];

const more = [
  {
    when: "Backtests",
    h: "Replay without look-ahead",
    p: "Backtests replay the recorded order books. Each order can be delayed by a realistic latency (we suggest the 104 ms median we measured in production) and is priced against the book as it stood when it would have arrived. Each fill carries a look-ahead flag computed from the data.",
  },
  {
    when: "October 2026",
    h: "Moving production to London",
    p: "Four days from decision to cutover. The website was in maintenance for 11 minutes 22 seconds; 7,590 user records and 7,867 login identities were copied with matching row counts and checksums, with reverse replication ready for a rollback.",
  },
];

function DataFlow() {
  const box = (x: number, y: number, w: number, t: string, s: string, accent = false) => (
    <g>
      <rect className={accent ? "n-gate" : "n"} x={x} y={y} width={w} height={58} rx={9} />
      <text className="t" x={x + 16} y={y + 25}>{t}</text>
      <text className="s" x={x + 16} y={y + 44}>{s}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 960 300" role="img" aria-labelledby="flow-t flow-d">
      <title id="flow-t">How market data moves through PolySimulator</title>
      <desc id="flow-d">
        Polymarket&apos;s public order-book feed goes two ways. For trading, it is
        ingested into a live book cache that the matching engine fills orders
        against; orders arrive through the Polymarket-compatible API and SDK, and
        balances live in a PostgreSQL ledger. For research, 8 recorder processes
        write hourly Parquet files with manifests to a datalake on Cloudflare R2,
        which feeds replay and backtests through the simulation API.
      </desc>
      <defs>
        <marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path className="ah-acc" d="M0 0 L10 5 L0 10 z" />
        </marker>
        <marker id="fg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path className="ah" d="M0 0 L10 5 L0 10 z" />
        </marker>
      </defs>

      <rect className="n-me" x="0" y="112" width="168" height="76" rx="10" />
      <text className="t-inv" x="16" y="141">Polymarket</text>
      <text className="t-inv2" x="16" y="163">public order-book feed</text>

      <path className="w-acc" d="M168 136 H196 V39 H226" markerEnd="url(#fa)" />
      <path className="w" d="M168 164 H196 V259 H226" markerEnd="url(#fg)" />

      {box(230, 10, 160, "Ingest", "books and markets")}
      <path className="w-acc" d="M390 39 H416" markerEnd="url(#fa)" />
      {box(420, 10, 160, "Book cache", "Redis, kept live")}
      <path className="w-acc" d="M580 39 H606" markerEnd="url(#fa)" />
      {box(610, 10, 170, "Matching engine", "walks the live book", true)}
      <path className="w-acc" d="M780 39 H806" markerEnd="url(#fa)" />
      {box(810, 10, 150, "Ledger", "PostgreSQL")}

      {box(610, 120, 170, "API and SDK", "Polymarket-compatible")}
      <path className="w-acc" d="M695 120 V72" markerEnd="url(#fa)" />

      {box(230, 230, 160, "Recorder", "8 processes")}
      <path className="w" d="M390 259 H416" markerEnd="url(#fg)" />
      {box(420, 230, 160, "Hourly files", "Parquet, manifests")}
      <path className="w" d="M580 259 H606" markerEnd="url(#fg)" />
      {box(610, 230, 170, "Datalake", "Cloudflare R2, ~2 TB/week")}
      <path className="w" d="M780 259 H806" markerEnd="url(#fg)" />
      {box(810, 230, 150, "Replay", "backtests, research")}
      <path className="w" d="M885 230 V149 H784" markerEnd="url(#fg)" />
      <text className="lbl" x="877" y="190" textAnchor="end">simulation</text>
      <text className="lbl" x="877" y="206" textAnchor="end">API</text>
    </svg>
  );
}

export default function Engineering() {
  return (
    <section className="sec" id="engineering">
      <div className="wrap">
        <h2>Building PolySimulator</h2>
        <p className="intro">
          PolySimulator lets traders and trading software practice on
          Polymarket&apos;s live markets with paper money. I designed its core
          architecture, trading engine and API. Most of the work is data
          engineering: keeping a live copy of every order book, filling orders
          against it correctly, and recording all of it.
        </p>

        <div className="feature">
          <picture>
            <source srcSet="/img/polysimulator-market-1x.jpg 1x, /img/polysimulator-market-2x.jpg 2x" />
            <img
              src="/img/polysimulator-market-1x.jpg"
              width={1176}
              height={917}
              alt="A PolySimulator market page with the price chart, order book and trade ticket"
              loading="lazy"
            />
          </picture>
          <div>
            <span className="when">Since November 2025, co-founder</span>
            <h3>PolySimulator</h3>
            <p>
              A paper-trading simulator, trading API and public Python SDK for
              Polymarket&apos;s prediction markets, with 7,000+ registered
              accounts. Built with my co-founder, Wladimir Kirjanovs, and run day
              to day with AI agents.
            </p>
            <div className="links">
              <a className="link" href="https://polysimulator.com">
                polysimulator.com
              </a>
              <a className="link" href="https://github.com/Bavariance/polysimulator-sdk">
                Python SDK
              </a>
              <a className="link" href="https://bavariance.com/work">
                The team behind it
              </a>
            </div>
          </div>
        </div>

        <div className="map flow">
          <DataFlow />
          <div className="map-list">
            <ol>
              <li>
                <b>Polymarket</b>The public order-book feed goes two ways.
              </li>
              <li>
                <b>Trading</b>It is ingested into a live book cache. The
                matching engine fills orders against it; orders arrive through
                the Polymarket-compatible API and SDK, and balances live in a
                PostgreSQL ledger.
              </li>
              <li>
                <b>Recording</b>8 recorder processes write hourly Parquet files
                to a datalake on Cloudflare R2: about 6 billion order-book rows
                a day, around 2 TB of new data a week.
              </li>
              <li>
                <b>Replay</b>The archive feeds backtests and research through
                the simulation API.
              </li>
            </ol>
          </div>
        </div>

        <dl className="stats">
          {stats.map((x) => (
            <div key={x.k}>
              <dt>{x.k}</dt>
              <dd>{x.v}</dd>
            </div>
          ))}
        </dl>

        <div className="cols3">
          {columns.map((c) => (
            <div key={c.h}>
              <h3>{c.h}</h3>
              {c.p.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        <ul className="work-list">
          {more.map((w) => (
            <li key={w.h}>
              <span className="when">{w.when}</span>
              <h3>{w.h}</h3>
              <p>{w.p}</p>
            </li>
          ))}
        </ul>
        <p className="src">
          Engine, API and recorder: PolySimulator&apos;s code, October 2026.
          Fills, traders and markets: production database, 22 October 2026.
          Recorder volume: the recorders&apos; own logs, average of 15 to 21
          October 2026. Move figures: production records, 21 October 2026.
        </p>
      </div>
    </section>
  );
}
