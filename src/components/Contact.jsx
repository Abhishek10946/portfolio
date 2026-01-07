export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact</h2>

      <div style={styles.box}>
        <p>Email: abhishekak22.elec@coeptech.ac.in</p>
        <p>Gmail: kaleabhishek2104@gmail.com</p>
        <p>GitHub: github.com/Abhishek10946</p>
        <p>LinkedIn: https://www.linkedin.com/in/abhishek-kale-889437205/</p>
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
