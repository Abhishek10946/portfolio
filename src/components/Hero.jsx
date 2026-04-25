import { useState, useEffect } from "react";

/**
 * Hero — full-viewport landing section.
 * Contains animated background orbs, a floating profile avatar with a
 * gradient glow ring, the user's name, subtitle, and a resume CTA button.
 * Clicking the avatar opens a fullscreen lightbox; pressing Escape or
 * clicking outside the image closes it.
 */
export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  /* Open the lightbox when the avatar is clicked */
  const openLightbox = () => setLightboxOpen(true);

  /* Close the lightbox */
  const closeLightbox = () => setLightboxOpen(false);

  /* Close on Escape key press */
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  /* Lock body scroll while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <section className="hero">
      {/* Ambient radial light background */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Floating decorative gradient blobs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      {/* Main content */}
      <div className="hero-content">
        {/* Avatar — clicking opens the lightbox */}
        <div
          className="hero-avatar-wrapper"
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          aria-label="View profile photo"
          onKeyDown={(e) => e.key === "Enter" && openLightbox()}
        >
          <div className="hero-avatar-ring" aria-hidden="true" />
          <img
            src="/images/profile.jpeg"
            alt="Abhishek Kale"
            className="hero-avatar"
          />
          {/* Zoom hint that appears on hover */}
          <div className="hero-avatar-zoom-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>

        {/* Greeting label */}
        <p className="hero-greeting">Hello, World 👋</p>

        {/* Name — gradient span for the highlighted word */}
        <h1 className="hero-title">
          I&apos;m <span className="gradient-text">Abhishek Kale</span>
        </h1>

        {/* Role subtitle */}
        <p className="hero-subtitle">
          Electrical Engineering Student&nbsp;·&nbsp;Software Developer
          <br />
          Building intelligent systems from circuits to code.
        </p>

        {/* Resume download CTA */}
        <a
          href="/resume/Abhishek_COEP_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Scroll hint at the very bottom of the viewport */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-mouse" />
        <span>Scroll</span>
      </div>

      {/* Lightbox overlay — renders only when open */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo lightbox"
        >
          {/* Close button */}
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* The zoomed image — stop propagation so clicking it doesn't close */}
          <img
            src="/images/profile.jpeg"
            alt="Abhishek Kale"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
