import { RevealBlock, SectionHeader } from "./SectionHeader";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Skills"
          id="skills-heading"
          title="Core Languages, Frameworks & Tools"
          subtitle="Technologies and computer science foundations applied across coursework and software prototypes."
        />

        <RevealBlock>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.category} className="skill-card">
                <div className="skill-card__header">
                  <div>
                    <h3 className="skill-card__title">{group.category}</h3>
                    <p className="skill-card__desc">{group.description}</p>
                  </div>
                </div>

                <ul className="skill-card__badges" aria-label={group.category}>
                  {group.items.map((skill) => (
                    <li key={skill} className="skill-badge">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
