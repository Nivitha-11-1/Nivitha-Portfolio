import { Award, ExternalLink } from "lucide-react";
import { RevealBlock, SectionHeader } from "./SectionHeader";

export default function Achievements({ achievements }) {
  const verifiedAchievements = achievements.filter((item) => !item.isPlaceholder);

  if (verifiedAchievements.length === 0) {
    return null;
  }

  return (
    <section
      id="achievements"
      className="section"
      aria-labelledby="achievements-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          id="achievements-heading"
          title="Hackathons & Engineering Highlights"
          subtitle="Verified hackathon participation and hands-on engineering work."
        />

        <RevealBlock>
          <div className="achievements-grid">
            {verifiedAchievements.map((item, idx) => {
              const hasCredential = Boolean(
                item.credentialUrl && item.credentialUrl.trim()
              );
              return (
                <article key={idx} className="achievement-card">
                  <div className="achievement-card__top">
                    <span className="achievement-card__category">
                      <Award
                        size={14}
                        style={{ verticalAlign: "-2px", marginRight: "6px" }}
                        aria-hidden="true"
                      />
                      {item.category}
                    </span>
                    <span className="achievement-card__year">{item.year}</span>
                  </div>

                  <h3 className="achievement-card__title">{item.title}</h3>
                  <p className="achievement-card__desc">{item.description}</p>

                  {hasCredential && (
                    <div style={{ marginTop: "6px" }}>
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline btn--sm"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>View Credential</span>
                      </a>
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
