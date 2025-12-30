import { projects } from "../assets/data/projects";

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2>Projects</h2>

      {projects.map((p, i) => (
        <div key={i} style={styles.box}>
          <h3>{p.title}</h3>
          <p style={styles.duration}>{p.duration}</p>
          <p>{p.description}</p>
          <p><b>Technologies:</b> {p.tech.join(", ")}</p>

          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.githubBtn}
          >
            View on GitHub
          </a>
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
  box: {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    color: "#111111",
    maxWidth: "900px"
  },
  duration: {
    fontSize: "14px",
    color: "#166534"
  },
  githubBtn: {
    display: "inline-block",
    marginTop: "12px",
    padding: "8px 16px",
    background: "#22c55e",
    color: "#ffffff",
    borderRadius: "6px",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer"
  }
};

