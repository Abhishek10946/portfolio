import { testScores } from "../assets/data/testScores";

export default function TestScores() {
  return (
    <section id="testscores" style={styles.section}>
      <h2>Test Scores</h2>

      {testScores.map((t, i) => (
        <div key={i} style={styles.box}>
          <p><strong>{t.exam}</strong></p>
          <p>Date: {t.date}</p>
          <p>Score: {t.score}</p>
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
    color: "#111111",
    maxWidth: "400px",
    marginTop: "20px"
  }
};
