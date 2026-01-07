export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact</h2>

      <div style={styles.box}>
        <p>Email: abhishekak22.elec@coeptech.ac.in</p>
        <p>Gmail: kaleabhishek2104@gmail.com</p>
        <p>GitHub: <a href="https://github.com/Abhishek10946" 
                      target="_blank"
                      rel="noopener noreferrer">
        Abhishek10946
        </a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/abhishek-kale-889437205" 
                      target="_blank"
                      rel="noopener noreferrer">
        abhishek-kale-889437205
        </a></p>
        </p>
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
