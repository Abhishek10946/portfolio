/**
 * Footer — minimal bottom bar with brand logo, copyright, and quick links.
 * Uses the same gradient shimmer effect as the Navbar logo for brand
 * consistency. Year is computed dynamically so it never goes stale.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  /* Quick navigation links mirroring the navbar */
  const links = [
    { label: "About",      href: "#about" },
    { label: "Projects",   href: "#projects" },
    { label: "Contact",    href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand name with gradient shimmer */}
        <span className="footer-logo">Abhishek Kale</span>

        {/* Quick links row */}
        <nav className="footer-links" aria-label="Footer navigation">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="footer-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; {year} Abhishek Kale &mdash; Built with React &amp; Vite
        </p>
      </div>
    </footer>
  );
}
