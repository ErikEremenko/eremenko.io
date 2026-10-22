import { CV_EN } from "./Header";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <h1>Erik Eremenko</h1>
          <p className="claim">
            I build software with a team of AI agents, and I run it in
            production.
          </p>
          <p className="lead">
            I co-founded{" "}
            <a className="link" href="https://polysimulator.com">
              PolySimulator
            </a>
            , a paper-trading simulator for Polymarket with 7,000+ registered
            accounts. Since May 2026, AI coding agents that I orchestrate have
            written nearly all of its code. I&apos;m a working student in
            applied AI at ING Deutschland and study Information Systems at TU
            Munich.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="mailto:erik@eremenko.io">
              Email me
            </a>
            <a className="btn btn-secondary" href={CV_EN}>
              Download CV
            </a>
            <span className="elsewhere">
              <a href="https://github.com/ErikEremenko">GitHub</a>
              <a href="https://www.linkedin.com/in/erik-eremenko-a225a625a/">
                LinkedIn
              </a>
            </span>
          </div>
        </div>
        <figure className="portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/erik.jpg" alt="Erik Eremenko" width={400} height={400} />
          <figcaption>Munich, Germany</figcaption>
        </figure>
      </div>
    </section>
  );
}
