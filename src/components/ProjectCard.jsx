import { CheckCircle2, ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";

export default function ProjectCard({ project }) {
  const hasGitHub = Boolean(project.githubUrl && project.githubUrl.trim());
  const hasDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim());

  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
    >
      <div>
        <div className="project-card__badges">
          {project.featured && (
            <span className="project-badge project-badge--featured">
              <Star size={12} aria-hidden="true" />
              Featured Project
            </span>
          )}
          {!project.featured && project.category && (
            <span className="project-badge project-badge--category">
              {project.category}
            </span>
          )}
          {project.eventBadge && (
            <span className="project-badge project-badge--event">
              {project.eventBadge}
            </span>
          )}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        {project.subtitle && (
          <p className="project-card__subtitle">{project.subtitle}</p>
        )}

        <p className="project-card__description">{project.description}</p>

        {project.statusNote && (
          <div className="project-card__note" role="note">
            {project.statusNote}
          </div>
        )}

        <div className="project-details">
          <div>
            <span className="project-details__label">Problem Statement</span>
            <p className="project-details__text">{project.problemStatement}</p>
          </div>
          <div>
            <span className="project-details__label">Solution</span>
            <p className="project-details__text">{project.solution}</p>
          </div>
        </div>

        <div className="project-features">
          <h4 className="project-features__title">Key Features</h4>
          <ul className="project-features__list">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="project-features__item">
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-tech" aria-label={`Technologies used in ${project.title}`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="tech-tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <footer className="project-card__footer">
        {hasGitHub ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            <GitHubIcon size={15} />
            <span>GitHub Repository</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="btn btn--muted-disabled btn--sm"
            title="Set githubUrl for this project in src/config/portfolioConfig.js"
          >
            <GitHubIcon size={15} />
            <span>GitHub URL Configurable</span>
          </button>
        )}

        {hasDemo && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            aria-label={`Open ${project.title} live demo (opens in new tab)`}
          >
            <ExternalLink size={15} aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        )}
      </footer>
    </article>
  );
}
