import { ArrowRight, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export default function Hero({ personal, resume, social }) {
  const hasGitHub = Boolean(social.githubUrl && social.githubUrl.trim());
  const hasLinkedIn = Boolean(social.linkedinUrl && social.linkedinUrl.trim());
  const hasProfilePhoto = Boolean(
    personal.profileImageUrl && personal.profileImageUrl.trim()
  );

  return (
    <section id="home" className="section section--hero" aria-labelledby="hero-name">
      <div
        className={`container ${
          hasProfilePhoto ? "hero-grid" : "hero-grid hero-grid--single"
        }`}
      >
        <div className="hero__content">
          <div className="hero__badge">{personal.targetRoleBadge}</div>

          <h1 id="hero-name" className="hero__title">
            {personal.name}
          </h1>

          <p className="hero__role">{personal.shortSubtitle}</p>
          <p className="hero__headline">{personal.headline}</p>
          <p className="hero__intro">{personal.heroTagline}</p>

          <div className="hero__meta-strip">
            <span className="hero__meta-item">
              <GraduationCap size={16} aria-hidden="true" />
              <span>{personal.degree}</span>
            </span>
            <span className="hero__meta-item">
              <MapPin size={16} aria-hidden="true" />
              <span>{personal.location}</span>
            </span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              <span>View Projects</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <a
              href={resume.filePath}
              download={resume.downloadFileName}
              className="btn btn--secondary"
            >
              <Download size={16} aria-hidden="true" />
              <span>{resume.label}</span>
            </a>

            <a href="#contact" className="btn btn--outline">
              <Mail size={16} aria-hidden="true" />
              <span>Contact Me</span>
            </a>
          </div>

          {(hasGitHub || hasLinkedIn) && (
            <div className="hero__social-row">
              <span className="hero__social-label">Profiles:</span>

              {hasGitHub && (
                <a
                  href={social.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <GitHubIcon size={17} />
                  <span>GitHub</span>
                </a>
              )}

              {hasLinkedIn && (
                <a
                  href={social.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <LinkedInIcon size={17} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          )}
        </div>

        {hasProfilePhoto && (
          <aside className="profile-card" aria-label="Candidate Profile">
            <div className="profile-card__frame">
              <img
                src={personal.profileImageUrl}
                alt={personal.profileImageAlt}
              />
            </div>

            <div className="profile-card__meta">
              <div className="profile-card__meta-item">
                <GraduationCap size={17} aria-hidden="true" />
                <span>{personal.degree}</span>
              </div>
              <div className="profile-card__meta-item">
                <MapPin size={17} aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
