import { SectionHeading } from "./About";

const seminars = [
  {
    title: "Online Machine Learning for Time Series Forecasting",
    venue: "Seminar — TU Munich",
    period: "WS 2025/26",
    repo: "https://github.com/ErikEremenko/online-learning-finance",
    paper:
      "https://github.com/ErikEremenko/online-learning-finance/blob/main/OL_CAML_TUM_Eremenko_Muller.pdf",
    description:
      "Independent seminar paper comparing online learning algorithms for financial time series prediction. Evaluated Online SNARIMAX, Ternary Classifier, and Batch-ARIMA on S&P 500 data using the River framework.",
    topics: [
      "Regret Minimization",
      "Online Newton Step",
      "Catastrophic Forgetting",
      "Time Series Forecasting",
    ],
  },
];

export default function Seminars() {
  return (
    <section id="research" className="py-20">
      <SectionHeading>Research &amp; Seminars</SectionHeading>

      <div className="space-y-6">
        {seminars.map((s) => (
          <div
            key={s.title}
            className="border border-card-border rounded-lg p-5 bg-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-sm font-semibold text-foreground">
                {s.title}
              </h3>
              <span className="text-xs text-muted font-mono shrink-0">
                {s.period}
              </span>
            </div>
            <p className="text-xs text-accent/80 mb-2">{s.venue}</p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              {s.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href={s.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded border border-card-border text-foreground hover:border-accent/40 hover:text-accent transition-colors"
              >
                View Repository
              </a>
              <a
                href={s.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded border border-card-border text-foreground hover:border-accent/40 hover:text-accent transition-colors"
              >
                Read Paper (PDF)
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.topics.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
