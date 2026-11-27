import { Briefcase, CheckCircle2 } from "lucide-react";
import { RevealBlock, SectionHeader } from "./SectionHeader";

export default function Experience({ items }) {
  return (
    <section
      id="experience"
      className="section section--subtle"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Experience & Training"
          id="experience-heading"
          title="Technical Training & Development Experience"
          subtitle="Structured skill-development programs and hands-on technical practice. Editable directly in portfolioConfig.js."
        />

        <RevealBlock>
          <div className="two-col-stack">
            {items.map((item, idx) => (
              <article key={idx} className="info-card">
                <div className="info-card__top">
                  <div>
                    <h3 className="info-card__title">{item.organization}</h3>
                    <p className="info-card__org">{item.programName}</p>
                  </div>

                  <span className="info-card__pill">
                    <Briefcase size={15} aria-hidden="true" />
                    <span>
                      {item.type} · {item.duration}
                    </span>
                  </span>
                </div>

                {item.skillsLearned && item.skillsLearned.length > 0 && (
                  <div style={{ marginBottom: "18px" }}>
                    <h4 className="project-features__title">Skills Learned</h4>
                    <ul className="skill-card__badges">
                      {item.skillsLearned.map((skill) => (
                        <li key={skill} className="skill-badge">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div>
                    <h4 className="project-features__title">
                      Responsibilities &amp; Activities
                    </h4>
                    <ul className="bullet-list">
                      {item.responsibilities.map((resp) => (
                        <li key={resp} className="bullet-list__item">
                          <CheckCircle2 size={15} aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
