export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Abhishek Kale
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#aff1d3ff",
    color: "#111111"
  }
};
