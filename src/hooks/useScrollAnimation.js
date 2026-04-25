import { useEffect, useRef } from "react";

/**
 * useScrollAnimation — attaches an IntersectionObserver to a ref'd element.
 * When the element enters the viewport, the class "animate-in" is added,
 * which triggers the CSS transition defined in global.css (.scroll-animate).
 *
 * Usage:
 *   const ref = useScrollAnimation();
 *   <div ref={ref} className="scroll-animate"> ... </div>
 */
export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          // Unobserve after animating in so it doesn't reset on scroll back up
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
