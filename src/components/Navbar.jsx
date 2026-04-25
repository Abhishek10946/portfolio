import { useState, useEffect } from "react";

/**
 * Navbar — fixed glassmorphism navigation bar.
 * Tracks scroll position to add a deeper shadow when the user scrolls.
 * Tracks the active section via IntersectionObserver to highlight the
 * corresponding nav link with the .active class.
 */
export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Add/remove .scrolled class based on scroll position */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Determine the active section as the user scrolls through the page */
  useEffect(() => {
    const sectionIds = ["about", "education", "skills", "projects", "experience", "contact"];

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  /* Nav link definitions — label maps to the section id anchor */
  const navLinks = [
    { label: "About",      href: "#about" },
    { label: "Education",  href: "#education" },
    { label: "Skills",     href: "#skills" },
    { label: "Projects",   href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact",    href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Brand logo — clicking scrolls back to top */}
        <a href="#" className="navbar-logo">
          Abhishek Kale
        </a>

        {/* Navigation links */}
        <ul className="navbar-menu">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`navbar-link ${activeSection === sectionId ? "active" : ""}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
