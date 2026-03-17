import { GitHubIcon, LinkedInIcon, KaggleIcon, EmailIcon, FileTextIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-14">
      <div className="animate-fade-in-up">
        <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>
      </div>
      <div className="animate-fade-in-up animation-delay-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Erik Eremenko
        </h1>
      </div>
      <div className="animate-fade-in-up animation-delay-200">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted mb-6">
          Prediction markets, HPC simulations,
          <br className="hidden sm:block" />
          and AI-assisted development.
        </h2>
      </div>
      <div className="animate-fade-in-up animation-delay-300">
        <p className="text-muted max-w-lg text-base leading-relaxed mb-8">
          CS student at{" "}
          <span className="text-foreground font-medium">TU Munich</span>,
          building real products — a prediction market platform with 1,880+
          users, high-performance C++ simulations, and AI-driven development.
        </p>
      </div>
      <div className="animate-fade-in-up animation-delay-400 flex items-center gap-5">
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
          href="mailto:erik.eremenko@tum.de"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <EmailIcon className="w-5 h-5" />
        </a>
        <a
          href="/main-web.pdf"
          download
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Download CV"
          title="Download CV"
        >
          <FileTextIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
