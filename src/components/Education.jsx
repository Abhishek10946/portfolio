import { education } from "../assets/data/education";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Education — academic background card.
 * Displays the user's college, degree, duration, and location from the
 * education data file. The card lifts on hover and animates in on scroll.
 */
export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="section">
      {/* Section label + heading */}
      <p className="section-tag">Academic Background</p>
      <h2 className="section-title">
        My <span className="gradient-text">Education</span>
      </h2>

      {/* Education card */}
      <div ref={ref} className="education-card scroll-animate">
        {/* Graduation cap icon */}
        <div className="edu-icon-box" aria-hidden="true">🎓</div>

        {/* Degree details */}
        <div className="edu-body">
          <h3 className="edu-college">{education.college}</h3>
          <p className="edu-degree">
            {education.degree} &mdash; {education.branch}
          </p>

          {/* Location and duration chips */}
          <div className="edu-meta">
            {/* Location */}
            <span className="edu-meta-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {education.location}
            </span>

            {/* Duration */}
            <span className="edu-meta-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {education.duration}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
