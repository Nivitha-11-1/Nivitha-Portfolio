import { Award, Briefcase, Calendar, ExternalLink, Laptop } from "lucide-react";
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
          eyebrow="Experience"
          id="experience-heading"
          title="Internship Experience"
          subtitle="Completed full-stack web development internship experience and practical project deliverables."
        />

        <RevealBlock>
          <div className="two-col-stack">
            {items.map((item, idx) => {
              const hasCertificate = Boolean(
                item.certificateUrl && item.certificateUrl.trim()
              );

              return (
                <article
                  key={idx}
                  className="info-card info-card--education"
                >
                  <div className="info-card__top">
                    <div>
                      <h3 className="info-card__institution">{item.role}</h3>
                      <p className="info-card__degree">{item.organization}</p>
                    </div>

                    <div className="edu-badges">
                      <span className="info-card__pill">
                        <Laptop size={15} aria-hidden="true" />
                        <span>{item.type}</span>
                      </span>
                      <span className="info-card__pill">
                        <Calendar size={15} aria-hidden="true" />
                        <span>{item.duration}</span>
                      </span>
                    </div>
                  </div>

                  {item.achievement && (
                    <div className="internship-achievement">
                      <div className="internship-achievement__body">
                        <Award size={18} aria-hidden="true" />
                        <div>
                          <span className="internship-achievement__label">
                            Achievement
                          </span>
                          <p className="internship-achievement__text">
                            {item.achievement}
                          </p>
                        </div>
                      </div>

                      <div className="internship-achievement__actions">
                        {item.certificateId && (
                          <span className="internship-cert-id">
                            Certificate ID: {item.certificateId}
                          </span>
                        )}

                        {hasCertificate && (
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary btn--sm"
                          >
                            <ExternalLink size={15} aria-hidden="true" />
                            <span>
                              {item.certificateLabel ||
                                "View Internship Certificate"}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {item.projectsCompleted && item.projectsCompleted.length > 0 && (
                    <div>
                      <h4 className="project-features__title">
                        <Briefcase
                          size={14}
                          style={{
                            verticalAlign: "-2px",
                            marginRight: "6px",
                          }}
                          aria-hidden="true"
                        />
                        Projects &amp; Tasks Completed
                      </h4>

                      <div className="internship-projects-grid">
                        {item.projectsCompleted.map((proj, pIdx) => (
                          <div key={proj.title} className="internship-task-card">
                            <span className="internship-task-card__num">
                              0{pIdx + 1}
                            </span>
                            <div>
                              <h5 className="internship-task-card__title">
                                {proj.title}
                              </h5>
                              <p className="internship-task-card__desc">
                                {proj.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
