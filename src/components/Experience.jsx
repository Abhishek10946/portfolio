import { experience } from "../assets/data/experience";

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2>Position of Responsibility</h2>

      {experience.map((exp, i) => (
        <div key={i} style={styles.card}>
          <h3>{exp.role}</h3>
          <p style={styles.org}>{exp.organization}</p>
          <p style={styles.duration}>{exp.duration}</p>
          <ul>
            {exp.details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 40px",
    background: "#ecfdf5"
  },
  card: {
    background: "#ffffff",
    border: "1px solid #dcfce7",
    borderRadius: "8px",
    padding: "20px"
  },
  org: {
    fontWeight: "600",
    color: "#065f46"
  },
  duration: {
    fontSize: "14px",
    color: "#166534"
  }
};
