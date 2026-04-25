import { testScores } from "../assets/data/testScores";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * TestScores — academic entrance exam achievements.
 * Renders each score as a large-stat card with a gradient number for
 * maximum visual impact. The decorative orb inside the card adds depth.
 */
export default function TestScores() {
  const ref = useScrollAnimation();

  /* Extract the numeric part of the score string for the large display,
     and keep the unit (e.g. "Percentile") as a smaller label below it */
  const parseScore = (scoreStr) => {
    const match = scoreStr.match(/^([\d.]+)\s*(.*)$/);
    return match ? { value: match[1], unit: match[2] } : { value: scoreStr, unit: "" };
  };

  return (
    <section id="testscores" className="section">
      {/* Section label + heading */}
      <p className="section-tag">Academic Achievements</p>
      <h2 className="section-title">
        Test <span className="gradient-text">Scores</span>
      </h2>

      {/* Score card grid */}
      <div ref={ref} className="test-scores-grid scroll-animate">
        {testScores.map((t) => {
          const { value, unit } = parseScore(t.score);
          return (
            <div key={t.exam} className="test-score-card">
              {/* Exam name */}
              <p className="test-score-exam">{t.exam}</p>

              {/* Large gradient score value */}
              <p className="test-score-value">{value}</p>

              {/* Unit label (e.g. "Percentile") */}
              {unit && <p className="test-score-label">{unit}</p>}

              {/* Date the score was achieved */}
              <p className="test-score-date">{t.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
