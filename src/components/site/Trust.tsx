import { Droplets, Leaf, Clock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Washed by hand",
    body: "No harsh spinning brushes. I use wash mitts, different types of brushes, and proper products to clean the car more carefully.",
  },
  {
    icon: Droplets,
    title: "Simple, honest service",
    body: "One person handles the job from start to finish, so you know who is working on your car.",
  },
  {
    icon: Clock,
    title: "I come to you",
    body: "I work on your driveway. I just need access to an outdoor tap and power socket.",
  },
  {
    icon: Leaf,
    title: "Careful product use",
    body: "I use minimal amounts of water and always choose safe products for the job wherever possible.",
  },
];

export function Trust() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Why me
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            A better option than a rushed car wash.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Automatic washes are quick and cheap, but they often miss the details. I take more
            time, use the correct tools, and clean by hand so your car gets a more careful finish.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}