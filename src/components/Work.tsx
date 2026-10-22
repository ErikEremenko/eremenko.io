const more = [
  {
    when: "October 2025 to February 2026, TUM lab course",
    h: "Molecular dynamics simulator",
    p: "A team-built simulator in C++ with the Lennard-Jones potential and the linked-cell algorithm, parallelized with OpenMP and checked with GoogleTest, sanitizers and Valgrind.",
    links: [{ t: "Code on GitHub", href: "https://github.com/ErikEremenko/MolSim-WS25-GroupB" }],
  },
  {
    when: "Winter semester 2025/26, TUM seminar",
    h: "Online learning for time-series forecasting",
    p: "A seminar paper with Sam Muller comparing online SNARIMAX, a ternary classifier and batch ARIMA on S&P 500 data, with the theory behind them: regret minimization, the online Newton step, catastrophic forgetting.",
    links: [
      { t: "Paper (PDF)", href: "https://github.com/ErikEremenko/online-learning-finance/blob/main/OL_CAML_TUM_Eremenko_Muller.pdf" },
      { t: "Code", href: "https://github.com/ErikEremenko/online-learning-finance" },
    ],
  },
  {
    when: "November 2025, HackaTUM",
    h: "IMC Trading Challenge",
    p: "A trading bot with exchange API integration, automated order management and an ensemble model for price prediction, built as team Bavariance.",
    links: [
      { t: "Devpost", href: "https://devpost.com/software/bavariance-imcity" },
      { t: "Code", href: "https://github.com/Bavariance/IMCity" },
    ],
  },
  {
    when: "March 2025, TUM Venture Labs",
    h: "Robo.Innovate hackathon",
    p: "On the BMW team: an on-premise server setup, and training and fine-tuning of robot policies by imitation learning with LeRobot.",
    links: [{ t: "Project page", href: "https://unbox-robotics.vercel.app" }],
  },
];

export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <h2>Studies and hackathons</h2>
        <ul className="work-list" style={{ marginTop: 8 }}>
          {more.map((w) => (
            <li key={w.h}>
              <span className="when">{w.when}</span>
              <h3>{w.h}</h3>
              <p>{w.p}</p>
              {w.links.length > 0 && (
                <div className="links">
                  {w.links.map((l) => (
                    <a key={l.href} className="link" href={l.href}>
                      {l.t}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
