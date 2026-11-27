import ProjectCard from "./ProjectCard";
import { RevealBlock, SectionHeader } from "./SectionHeader";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="section section--subtle"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          id="projects-heading"
          title="Software & Engineering Projects"
          subtitle="Hands-on projects across full-stack web development, agentic AI with SAP HANA, and IoT embedded systems."
        />

        <RevealBlock>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
