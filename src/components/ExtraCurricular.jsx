import { extracurricular } from "../assets/data/extracurricular";

export default function ExtraCurricular() {
  return (
    <section id="extracurricular" style={styles.section}>
      <h2>Extra Curricular Activities</h2>

      <div style={styles.box}>
        <ul>
          {extracurricular.map((item, i) => (
            <li key={i}>{item}</li>
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
    maxWidth: "600px"
  }
};
