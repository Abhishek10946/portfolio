import { skills } from "../assets/data/skills";

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2>Technical Skills</h2>

      <div style={styles.box}>
        <p><b>Programming Languages:</b> {skills.programming.join(", ")}</p>
        <p><b>Web Technologies:</b> {skills.web.join(", ")}</p>
        <p><b>Databases:</b> {skills.databases.join(", ")}</p>
        <p><b>Tools & Platforms:</b> {skills.tools.join(", ")}</p>

        <h3 style={{ marginTop: "20px" }}>Subjects / Electives</h3>
        <ul>
          {skills.subjects.map((sub, i) => (
            <li key={i}>{sub}</li>
          ))}
        </ul>
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
    maxWidth: "800px"
  }
};
