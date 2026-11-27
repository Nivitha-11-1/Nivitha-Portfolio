import { CheckCircle2, GraduationCap } from "lucide-react";
import { RevealBlock, SectionHeader } from "./SectionHeader";

export default function Education({ education }) {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          id="education-heading"
          title="Academic Background"
          subtitle="Undergraduate studies integrating computer science engineering with business systems."
        />

        <RevealBlock>
          <div className="two-col-stack">
            {education.map((edu, idx) => (
              <article key={idx} className="info-card info-card--education">
                <div className="info-card__top">
                  <div>
                    <h3 className="info-card__institution">{edu.institution}</h3>
                    <p className="info-card__degree">{edu.degree}</p>
                    <p className="info-card__location">{edu.location}</p>
                  </div>

                  <div className="edu-badges">
                    <span className="info-card__pill">
                      <GraduationCap size={15} aria-hidden="true" />
                      <span>CSBS Undergraduate</span>
                    </span>
                    <span className="info-card__cgpa-badge">
                      CGPA: <strong>{edu.cgpa}</strong>
                    </span>
                  </div>
                </div>

                <div className="meta-grid">
                  <div className="meta-box">
                    <span className="meta-box__label">Degree</span>
                    <span className="meta-box__value">{edu.degree}</span>
                  </div>
                  <div className="meta-box">
                    <span className="meta-box__label">Academic Year</span>
                    <span className="meta-box__value">{edu.currentYear}</span>
                  </div>
                  <div className="meta-box">
                    <span className="meta-box__label">Expected Graduation</span>
                    <span className="meta-box__value">{edu.graduationYear}</span>
                  </div>
                  <div className="meta-box meta-box--highlight">
                    <span className="meta-box__label">CGPA</span>
                    <span className="meta-box__value meta-box__value--highlight">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>

                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4 className="project-features__title">
                      Relevant Coursework
                    </h4>
                    <ul className="bullet-list">
                      {edu.coursework.map((course) => (
                        <li key={course} className="bullet-list__item">
                          <CheckCircle2 size={15} aria-hidden="true" />
                          <span>{course}</span>
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
