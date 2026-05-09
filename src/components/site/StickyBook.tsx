import { Phone } from "lucide-react";

export function StickyBook() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2">
      <a
        href="tel:+447557981537"
        className="grid place-items-center w-14 h-14 rounded-full bg-card border border-border text-foreground shadow-soft"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href="#contact"
        className="flex-1 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium shadow-glow"
      >
        Book Now
      </a>
    </div>
  );
}