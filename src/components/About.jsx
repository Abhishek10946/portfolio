export default function About() {
  return (
    <section id="about" style={styles.about}>
      <h2>About Me</h2>
      <p style={{ background: "#ffffff", color: "#111111", padding: "16px", borderRadius: "8px" }}>
  I am a student pursuing Electrical Engineering at COEP Technological University. I am always looking for opportunities to learn
  different technologies and expand my knowledge in the field of technology. I am a sincere and disciplined individual, who
  pays great attention to details.
</p>

    </section>
  );
}

const styles = {
  about: {
    padding: "60px 40px",
    background: "#ecfdf5",
    color: "#111111"
  }
};