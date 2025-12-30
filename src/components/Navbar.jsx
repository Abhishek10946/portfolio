export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Abhishek Kale</h2>
      <ul style={styles.menu}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#education" style={styles.link}>Education</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#b9eed5ff"
  },
  logo: {
    color: "#065f46"
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0
  },
  link: {
    color: "#111111",
    textDecoration: "none",
    fontWeight: "500"
  }
};
