export default function Hero() {
  return (
    <section style={styles.hero}>
      <img
        src="/images/profile.jpeg"
        alt="Profile"
        style={styles.image}
      />

      <h1>Hi, I’m Abhishek 👋</h1>
      <p>Engineering Student | Software Developer</p>

      <a
        href="/resume/Abhishek_Kale_S_D_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        Download Resume
      </a>
    </section>
  );
}

const styles = {
  hero: {
    padding: "80px 20px",
    textAlign: "center"
  },
  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    borderColor: "green"
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#22c55e",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "600",
    textDecoration: "none",
    cursor: "pointer"
  }
};
