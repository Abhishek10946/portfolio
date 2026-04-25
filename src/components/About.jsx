import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * About — short bio section.
 * Renders a single card with a gradient accent bar on the left and
 * the user's bio text on the right. Animates in when scrolled into view.
 */
export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section">
      {/* Section label + heading */}
      <p className="section-tag">Who I Am</p>
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>

      {/* Bio card with scroll entrance animation */}
      <div ref={ref} className="about-card scroll-animate">
        {/* Left gradient bar */}
        <div className="about-accent-bar" aria-hidden="true" />

        {/* Bio text */}
        <div className="about-body">
          <p className="about-text">
            I am a student pursuing{" "}
            <strong>Electrical Engineering at COEP Technological University</strong>,
            Pune. I am constantly exploring the intersection of hardware and
            software — from embedded systems to AI-powered applications. I am a{" "}
            <strong>sincere, disciplined, and detail-oriented</strong> individual who
            thrives on learning new technologies and turning ideas into tangible
            solutions. Whether it is building a RAG-based AI assistant or designing
            a complaint management system in C++, I approach every challenge with
            curiosity and precision.
          </p>
        </div>
      </div>
    </section>
  );
}
