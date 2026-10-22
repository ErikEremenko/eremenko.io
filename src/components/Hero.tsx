import { GitHubIcon, LinkedInIcon, KaggleIcon, EmailIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-14">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Erik Eremenko
        </h1>
      </div>
      <div className="animate-fade-in-up animation-delay-100">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted mb-6">
          I build and run software
          <br className="hidden sm:block" /> with AI coding agents.
        </p>
      </div>
      <div className="animate-fade-in-up animation-delay-200">
        <p className="text-muted max-w-xl text-base leading-relaxed mb-8">
          Co-founder of{" "}
          <a
            href="https://polysimulator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium hover:text-accent transition-colors"
          >
            PolySimulator
          </a>
          , a paper-trading simulator for Polymarket with 7,000+ registered
          accounts. Working student in applied AI at ING Deutschland, and a
          student at{" "}
          <span className="text-foreground font-medium">TU Munich</span>.
        </p>
      </div>
      <div className="animate-fade-in-up animation-delay-300 flex items-center gap-5">
        <a
          href="https://github.com/ErikEremenko"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/erik-eremenko-a225a625a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.kaggle.com/erikeremenko"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Kaggle"
        >
          <KaggleIcon className="w-5 h-5" />
        </a>
        <a
          href="mailto:erik@eremenko.io"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <EmailIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
