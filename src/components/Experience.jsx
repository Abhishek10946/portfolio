import { experience } from "../assets/data/experience";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Experience — positions of responsibility rendered as a vertical timeline.
 * A gradient connector line runs down the left side with a glowing dot
 * beside each entry. Bullet points use custom colored dots instead of
 * default list markers.
 */
export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="section">
      {/* Section label + heading */}
      <p className="section-tag">Leadership & Roles</p>
      <h2 className="section-title">
        Positions of <span className="gradient-text">Responsibility</span>
      </h2>

      {/* Timeline container */}
      <div ref={ref} className="experience-timeline scroll-animate">
        {experience.map((exp) => (
          <div key={exp.role} className="experience-item">
            <div className="exp-card">
              {/* Role title */}
              <h3 className="exp-role">{exp.role}</h3>

              {/* Organization name */}
              <p className="exp-org">{exp.organization}</p>

              {/* Duration chip with clock icon */}
              <span className="exp-duration">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {exp.duration}
              </span>

              {/* Achievement bullet list */}
              <ul className="exp-details">
                {exp.details.map((point) => (
                  <li key={point} className="exp-detail-item">
                    <span className="exp-dot" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
