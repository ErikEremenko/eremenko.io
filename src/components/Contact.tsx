import { CV_DE, CV_EN } from "./Header";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>Contact</h2>
        <p className="intro">Email is the quickest way to reach me.</p>
        <a className="mail" href="mailto:erik@eremenko.io">
          erik@eremenko.io
        </a>
        <div className="links">
          <a className="link" href={CV_EN}>
            CV (English, PDF)
          </a>
          <a className="link" href={CV_DE}>
            Lebenslauf (Deutsch, PDF)
          </a>
          <a className="link" href="https://www.linkedin.com/in/erik-eremenko-a225a625a/">
            LinkedIn
          </a>
          <a className="link" href="https://github.com/ErikEremenko">
            GitHub
          </a>
          <a className="link" href="https://www.kaggle.com/erikeremenko">
            Kaggle
          </a>
        </div>
        <p className="foot">Erik Eremenko, Munich, 2026</p>
      </div>
    </section>
  );
}
