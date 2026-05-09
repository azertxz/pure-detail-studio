import { useState } from "react";
import { Sofa, Car, Sparkles, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Sofa,
    title: "Interior Clean",
    blurb: "Deep vacuum, steam, and protect.",
    bullets: [
      "Full vacuum (seats, mats, trunk)",
      "Steam clean dash & console",
      "Leather conditioning",
      "Glass & mirror polish",
    ],
    from: "$89",
  },
  {
    icon: Car,
    title: "Exterior Wash",
    blurb: "Hand wash, dry and protect.",
    bullets: [
      "Two-bucket hand wash",
      "Wheels, tires & arches",
      "Spray sealant for shine",
      "Bug & tar spot removal",
    ],
    from: "$69",
  },
  {
    icon: Sparkles,
    title: "Full Valet",
    blurb: "Inside and out, top to bottom.",
    bullets: [
      "Everything in Interior + Exterior",
      "Engine bay wipe-down",
      "Hand-applied wax",
      "Tire dressing & trim restore",
    ],
    from: "$149",
    featured: true,
  },
  {
    icon: Plus,
    title: "Add-ons",
    blurb: "Tailor it to your car.",
    bullets: [
      "Pet hair removal",
      "Headlight restoration",
      "Clay bar treatment",
      "Ceramic spray coating",
    ],
    from: "$25",
  },
];

export function Services() {
  const [active, setActive] = useState(2);
  return (
    <section id="services" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Pick what your car needs.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every package is hand-done by a trained detailer. Mix and match add-ons to fit your
            schedule and budget.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <button
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "reveal text-left group relative rounded-2xl border p-6 transition-all duration-300",
                  isActive
                    ? "border-primary/60 bg-card -translate-y-1 shadow-glow"
                    : "border-border bg-card hover:-translate-y-1",
                )}
              >
                {s.featured && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-semibold text-primary-foreground bg-primary rounded-full px-2 py-1">
                    Popular
                  </span>
                )}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl grid place-items-center transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>

                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">From</span>
                  <span className="text-xl font-semibold text-foreground">{s.from}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}