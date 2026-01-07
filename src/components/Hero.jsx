export default function Hero() {
  return (
    <section style={styles.hero}>
      <img
        src="/images/profile.jpeg"
        alt="Abhishek Kale Profile"
        style={styles.image}
      />

      <h1 style={styles.title}>Hi, I’m Abhishek 👋</h1>
      <p style={styles.subtitle}>
        Engineering Student | Software Developer
      </p>

      <a
        href="/resume/Abhishek_Kale_S_D_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = "#16a34a")}
        onMouseOut={(e) => (e.target.style.background = "#22c55e")}
      >
        Download Resume
      </a>
    </section>
  );
}

const styles = {
  hero: {
    padding: "70px 16px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },

  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "4px solid #22c55e",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#6b7280",
  },

  button: {
    display: "inline-block",
    marginTop: "24px",
    padding: "12px 26px",
    background: "#22c55e",
    color: "#ffffff",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};
