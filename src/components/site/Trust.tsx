import { Droplets, Leaf, Clock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Hand-washed, never automated",
    body: "Soft microfiber, two-bucket method, pH-balanced soap. No swirl marks, no spinning brushes.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly products",
    body: "Biodegradable cleaners and minimal water use. Safe for your driveway and the neighbourhood.",
  },
  {
    icon: Clock,
    title: "I come to you",
    body: "Detailing done on your driveway in Kesgrave. I'll just need access to an outdoor tap and a power socket.",
  },
  {
    icon: Droplets,
    title: "One careful pair of hands",
    body: "It's just me — no rotating staff. Every car gets the same focused attention from start to finish.",
  },
];

export function Trust() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Why us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Better than a £10 automatic wash — by a long way.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A drive-through wash takes seven minutes and leaves swirl marks. We take our time, use
            proper products, and clean the spots a tunnel can never reach.
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