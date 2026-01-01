import { education } from "../assets/data/education";

export default function Education() {
  return (
    <section id="education" style={styles.section}>
      <h2>Education</h2>

      <div style={styles.box}>
        <p><strong>{education.college}</strong></p>
        <p>{education.degree} – {education.branch}</p>
        <p>{education.duration}</p>
        <p>{education.location}</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 40px",
    background: "#ecfdf5"
  },
  box: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    color: "#111111",
    maxWidth: "600px"
  }
};
