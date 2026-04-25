import { projects } from "../assets/data/projects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Projects — showcase grid of personal/academic projects.
 * Each project renders as a card with a gradient top accent border that
 * appears on hover, tech stack badges, and a GitHub link button.
 * The grid uses auto-fit columns for responsive layout.
 */
export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section">
      {/* Section label + heading */}
      <p className="section-tag">What I&apos;ve Built</p>
      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>

      {/* Responsive project card grid */}
      <div ref={ref} className="projects-grid scroll-animate">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            {/* Project title */}
            <h3 className="project-title">{project.title}</h3>

            {/* Duration with calendar icon */}
            <span className="project-duration">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {project.duration}
            </span>

            {/* Short description */}
            <p className="project-description">{project.description}</p>

            {/* Technology pill badges */}
            <div className="project-tech-list">
              {project.tech.map((tech) => (
                <span key={tech} className="project-tech-tag">{tech}</span>
              ))}
            </div>

            {/* GitHub link with icon */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-btn"
            >
              {/* GitHub mark icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
