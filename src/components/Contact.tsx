import { SectionHeading } from "./About";
import { GitHubIcon, LinkedInIcon, KaggleIcon, EmailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <SectionHeading>Get In Touch</SectionHeading>

      <div className="max-w-lg">
        <p className="text-muted leading-relaxed mb-8">
          I&apos;m always open to interesting conversations, collaboration
          opportunities, or just a friendly hello. Feel free to reach out!
        </p>

        <div className="space-y-3 mb-8">
          <ContactLink
            href="mailto:erik.eremenko@tum.de"
            icon={<EmailIcon className="w-4 h-4" />}
            label="erik.eremenko@tum.de"
          />
          <ContactLink
            href="https://github.com/ErikEremenko"
            icon={<GitHubIcon className="w-4 h-4" />}
            label="ErikEremenko"
          />
          <ContactLink
            href="https://www.linkedin.com/in/erik-eremenko-a225a625a/"
            icon={<LinkedInIcon className="w-4 h-4" />}
            label="Erik Eremenko"
          />
          <ContactLink
            href="https://www.kaggle.com/erikeremenko"
            icon={<KaggleIcon className="w-4 h-4" />}
            label="erikeremenko"
          />
        </div>

        <a
          href="mailto:erik.eremenko@tum.de"
          className="inline-block px-6 py-3 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors"
        >
          Say Hello
        </a>
      </div>

      <footer className="mt-20 pt-8 border-t border-card-border text-center">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Erik Eremenko
        </p>
      </footer>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
