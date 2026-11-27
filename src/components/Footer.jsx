import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ personal, social }) {
  const hasEmail = Boolean(social.email && social.email.trim());
  const hasGitHub = Boolean(social.githubUrl && social.githubUrl.trim());
  const hasLinkedIn = Boolean(social.linkedinUrl && social.linkedinUrl.trim());

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__name">{personal.name}</p>
            <p className="footer__tagline">
              {personal.shortSubtitle} · {personal.location}
            </p>
          </div>

          <div className="footer__links">
            {hasGitHub ? (
              <a
                href={social.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </a>
            ) : (
              <span
                className="footer__link footer__link--muted"
                title="Configure GitHub URL in src/config/portfolioConfig.js"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </span>
            )}

            {hasLinkedIn ? (
              <a
                href={social.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </a>
            ) : (
              <span
                className="footer__link footer__link--muted"
                title="Configure LinkedIn URL in src/config/portfolioConfig.js"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </span>
            )}

            {hasEmail ? (
              <a href={`mailto:${social.email}`} className="footer__link">
                <Mail size={16} aria-hidden="true" />
                <span>Email</span>
              </a>
            ) : (
              <a href="#contact" className="footer__link">
                <Mail size={16} aria-hidden="true" />
                <span>Contact</span>
              </a>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {CURRENT_YEAR} {personal.name}. All rights reserved.</p>
          <p>{personal.degree}</p>
        </div>
      </div>
    </footer>
  );
}
