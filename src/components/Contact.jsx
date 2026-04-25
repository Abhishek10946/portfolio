import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Contact — reachability cards for email, GitHub, and LinkedIn.
 * Each card is a link that opens the appropriate app or page.
 * The icon box bounces on hover for a tactile feel.
 */
export default function Contact() {
  const ref = useScrollAnimation();

  /* Contact entry definitions — type, display metadata, and href */
  const contacts = [
    {
      type:    "Email",
      label:   "University",
      value:   "abhishekak22.elec@coeptech.ac.in",
      href:    "mailto:abhishekak22.elec@coeptech.ac.in",
      icon:    "📧",
      iconBg:  "rgba(99,102,241,0.14)",
    },
    {
      type:    "Email",
      label:   "Personal",
      value:   "kaleabhishek2104@gmail.com",
      href:    "mailto:kaleabhishek2104@gmail.com",
      icon:    "✉️",
      iconBg:  "rgba(6,182,212,0.12)",
    },
    {
      type:    "GitHub",
      label:   "GitHub",
      value:   "Abhishek10946",
      href:    "https://github.com/Abhishek10946",
      icon:    "🐙",
      iconBg:  "rgba(139,92,246,0.12)",
    },
    {
      type:    "LinkedIn",
      label:   "LinkedIn",
      value:   "abhishek-kale-889437205",
      href:    "https://www.linkedin.com/in/abhishek-kale-889437205",
      icon:    "💼",
      iconBg:  "rgba(16,185,129,0.12)",
    },
  ];

  return (
    <section id="contact" className="section">
      {/* Section label + heading */}
      <p className="section-tag">Get In Touch</p>
      <h2 className="section-title">
        Let&apos;s <span className="gradient-text">Connect</span>
      </h2>

      {/* Grid of contact cards */}
      <div ref={ref} className="contact-grid scroll-animate">
        {contacts.map(({ type, label, value, href, icon, iconBg }) => (
          <a
            key={`${type}-${label}`}
            href={href}
            target={type !== "Email" ? "_blank" : undefined}
            rel={type !== "Email" ? "noopener noreferrer" : undefined}
            className="contact-card"
          >
            {/* Colored emoji icon box */}
            <div
              className="contact-icon-box"
              style={{ background: iconBg }}
              aria-hidden="true"
            >
              {icon}
            </div>

            {/* Label + value text */}
            <div>
              <p className="contact-label">{label}</p>
              <p className="contact-value">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
