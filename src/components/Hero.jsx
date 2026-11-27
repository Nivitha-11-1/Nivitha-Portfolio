import { ArrowRight, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export default function Hero({ personal, resume, social }) {
  const hasGitHub = Boolean(social.githubUrl && social.githubUrl.trim());
  const hasLinkedIn = Boolean(social.linkedinUrl && social.linkedinUrl.trim());

  return (
    <section id="home" className="section section--hero" aria-labelledby="hero-name">
      <div className="container hero-grid">
        <div>
          <div className="hero__badge">{personal.targetRoleBadge}</div>

          <h1 id="hero-name" className="hero__title">
            {personal.name}
          </h1>

          <p className="hero__role">{personal.shortSubtitle}</p>
          <p className="hero__headline">{personal.headline}</p>
          <p className="hero__intro">{personal.heroTagline}</p>

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

          <div className="hero__social-row">
            <span className="hero__social-label">Profiles:</span>

            {hasGitHub ? (
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
            ) : (
              <span
                className="social-pill social-pill--unconfigured"
                title="Add your GitHub profile URL in src/config/portfolioConfig.js"
              >
                <GitHubIcon size={17} />
                <span>GitHub (Add URL in config)</span>
              </span>
            )}

            {hasLinkedIn ? (
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
            ) : (
              <span
                className="social-pill social-pill--unconfigured"
                title="Add your LinkedIn profile URL in src/config/portfolioConfig.js"
              >
                <LinkedInIcon size={17} />
                <span>LinkedIn (Add URL in config)</span>
              </span>
            )}
          </div>
        </div>

        <aside className="profile-card" aria-label="Candidate Profile Summary">
          <div className="profile-card__frame">
            {personal.profileImageUrl ? (
              <img
                src={personal.profileImageUrl}
                alt={personal.profileImageAlt}
              />
            ) : (
              <div className="profile-placeholder">
                <div className="profile-placeholder__avatar" aria-hidden="true">
                  {personal.initials}
                </div>
                <p className="profile-placeholder__title">{personal.name}</p>
                <p className="profile-placeholder__hint">
                  Professional profile photo placeholder — configure{" "}
                  <code>profileImageUrl</code> in <code>portfolioConfig.js</code>
                </p>
              </div>
            )}
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
      </div>
    </section>
  );
}
