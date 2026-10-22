export const CV_EN = "/Erik_Eremenko_CV.pdf";
export const CV_DE = "/Erik_Eremenko_Lebenslauf.pdf";

const links = [
  { label: "How I work", href: "#how" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="hdr">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap">
        <a className="name" href="#top">
          Erik Eremenko
        </a>
        <nav aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="cv" href={CV_EN}>
          CV
        </a>
      </div>
    </header>
  );
}
