import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Layers,
  Users,
} from "lucide-react";
import { RevealBlock, SectionHeader } from "./SectionHeader";

const ICON_MAP = {
  Code2,
  Cpu,
  Layers,
  Database,
  BrainCircuit,
  Users,
};

export default function About({ personal, highlights }) {
  return (
    <section
      id="about"
      className="section section--subtle"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          id="about-heading"
          title="Engineering Focus & Background"
          subtitle="Combining Computer Science fundamentals and Business Systems thinking to build dependable software."
        />

        <RevealBlock>
          <div className="about-lead-card">
            <p className="about-lead-card__text">{personal.aboutSummary}</p>
            <p className="about-lead-card__closing">{personal.closingStatement}</p>
          </div>
        </RevealBlock>

        <RevealBlock>
          <div className="highlights-grid">
            {highlights.map((item) => {
              const Icon = ICON_MAP[item.icon] || Code2;
              return (
                <article key={item.title} className="highlight-card">
                  <div className="highlight-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <h3 className="highlight-card__title">{item.title}</h3>
                  <p className="highlight-card__desc">{item.description}</p>
                </article>
              );
            })}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
