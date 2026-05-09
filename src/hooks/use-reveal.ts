import { useEffect } from "react";

/**
 * Reveal-on-scroll hook.
 *
 * IMPORTANT: We set inline styles on the DOM element rather than toggling a
 * class, because React owns `className` and will overwrite a JS-added class
 * (".in") on the next re-render — which previously caused elements to fade
 * back out when hover state or filter buttons triggered a re-render.
 * Inline style properties that React doesn't manage are preserved across
 * re-renders.
 */
export function useReveal() {
  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const seen = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            seen.add(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (!seen.has(el)) io.observe(el);
      });
    };

    observe();

    // Re-scan when new .reveal nodes appear (e.g. after filter click)
    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}