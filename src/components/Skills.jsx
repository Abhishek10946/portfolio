import { skills } from "../assets/data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Skills — technical skills organized into category cards.
 * Each category renders as a card with a colored icon box and pill badges
 * for each skill. Badge colors differ per category for visual variety.
 */
export default function Skills() {
  const ref = useScrollAnimation();

  /* Category definitions — each maps to a skills data key with display metadata */
  const categories = [
    {
      icon: "⌨️",
      label: "Programming Languages",
      items: skills.programming,
      tagClass: "tag-violet",
      iconBg: "rgba(167,139,250,0.12)",
    },
    {
      icon: "🌐",
      label: "Web Technologies",
      items: skills.web,
      tagClass: "tag-cyan",
      iconBg: "rgba(103,232,249,0.1)",
    },
    {
      icon: "🗄️",
      label: "Databases",
      items: skills.databases,
      tagClass: "tag-emerald",
      iconBg: "rgba(110,231,183,0.1)",
    },
    {
      icon: "🛠️",
      label: "Tools & Platforms",
      items: skills.tools,
      tagClass: "tag-amber",
      iconBg: "rgba(252,211,77,0.1)",
    },
    {
      icon: "📚",
      label: "Subjects / Electives",
      items: skills.subjects,
      tagClass: "tag-rose",
      iconBg: "rgba(252,165,165,0.1)",
    },
  ];

  return (
    <section id="skills" className="section">
      {/* Section label + heading */}
      <p className="section-tag">What I Know</p>
      <h2 className="section-title">
        Technical <span className="gradient-text">Skills</span>
      </h2>

      {/* Grid of skill category cards */}
      <div ref={ref} className="skills-grid scroll-animate">
        {categories.map(({ icon, label, items, tagClass, iconBg }) => (
          <div key={label} className="skill-card">
            {/* Category header row */}
            <div className="skill-card-header">
              <div
                className="skill-card-icon"
                style={{ background: iconBg }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <span className="skill-card-title">{label}</span>
            </div>

            {/* Skill pill badges */}
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className={`skill-tag ${tagClass}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
