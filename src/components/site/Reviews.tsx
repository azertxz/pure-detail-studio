import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Etobicoke",
    body: "They came to my driveway, took their time, and my car genuinely looks newer than the day I bought it. Worth every dollar.",
  },
  {
    name: "David L.",
    role: "North York",
    body: "Booked the Signature for my SUV after road trips with the kids. Spotless. The team was polite and clearly knew what they were doing.",
  },
  {
    name: "Priya R.",
    role: "Mississauga",
    body: "I tried the cheap automatic places for years. This is a different league. Smooth booking, fair price, fantastic result.",
  },
  {
    name: "Marc T.",
    role: "Vaughan",
    body: "Headlight restoration brought my old Civic back to life. They explained everything and didn't upsell me on stuff I didn't need.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">Reviews</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Trusted by hundreds of locals.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="w-6 h-6 text-primary" />
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">
                "{r.body}"
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-primary">
                {[0, 1, 2, 3, 4].map((j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <figcaption className="mt-3">
                <div className="text-sm font-semibold text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}