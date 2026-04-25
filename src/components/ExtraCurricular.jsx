import { extracurricular } from "../assets/data/extracurricular";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * ExtraCurricular — personal interests and hobbies displayed as icon chips.
 * Each activity gets an emoji icon that visually represents the hobby,
 * making this section feel personal rather than a dry list.
 */
export default function ExtraCurricular() {
  const ref = useScrollAnimation();

  /* Map activity names to representative emoji icons */
  const iconMap = {
    Traveling:             "✈️",
    "Listening to Music":  "🎵",
    Reading:               "📖",
    Gaming:                "🎮",
    Photography:           "📷",
    Cooking:               "🍳",
    Cycling:               "🚴",
    Hiking:                "🏔️",
  };

  /* Resolve emoji for an activity, fallback to a generic star */
  const getIcon = (activity) => iconMap[activity] ?? "⭐";

  return (
    <section id="extracurricular" className="section">
      {/* Section label + heading */}
      <p className="section-tag">Beyond the Code</p>
      <h2 className="section-title">
        Extra <span className="gradient-text">Curriculars</span>
      </h2>

      {/* Horizontal list of activity chips */}
      <div ref={ref} className="extra-list scroll-animate">
        {extracurricular.map((item) => (
          <div key={item} className="extra-item">
            <span className="extra-icon" aria-hidden="true">{getIcon(item)}</span>
            <span className="extra-label">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
