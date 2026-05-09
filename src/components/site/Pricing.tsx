import { Check, Sparkles, Droplets, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = ["Small", "Medium", "Large", "X-Large"] as const;
type Size = (typeof sizes)[number];

type Tier = {
  name: string;
  icon: typeof Sparkles;
  description: string;
  prices: Record<Size, number>;
  includes: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Maintenance Detail",
    icon: Droplets,
    description:
      "A simple regular clean for cars that need maintenance rather than a full reset.",
    prices: { Small: 35, Medium: 40, Large: 45, "X-Large": 50 },
    includes: [
      "Safe exterior wash",
      "Wheels cleaned",
      "Tyres dressed",
      "Exterior glass cleaned",
      "Quick interior vacuum",
      "Dashboard wipe-down",
      "Door shuts cleaned",
    ],
  },
  {
    name: "Mini Detail",
    icon: Sparkles,
    description:
      "A more thorough inside-and-out clean for cars needing extra attention.",
    prices: { Small: 60, Medium: 65, Large: 70, "X-Large": 80 },
    includes: [
      "Exterior wash",
      "Wheels and arches cleaned",
      "Full interior vacuum",
      "Interior plastics cleaned",
      "Interior and exterior glass cleaned",
      "Light stain attention",
      "Spray wax protection",
    ],
    featured: true,
  },
  {
    name: "Deep Clean",
    icon: Wand2,
    description:
      "A deeper clean for dirtier vehicles needing more time and attention.",
    prices: { Small: 110, Medium: 125, Large: 135, "X-Large": 150 },
    includes: [
      "Everything in the Mini Detail",
      "More detailed interior cleaning",
      "Deeper fabric and plastic cleaning",
      "Extra time on grime build-up",
      "Longer attention to problem areas",
    ],
  },
];

const sizeGuide: { label: Size; examples: string }[] = [
  {
    label: "Small",
    examples:
      "Toyota Aygo, Fiat 500, Mini Cooper, Toyota Yaris, Kia Picanto, Vauxhall Corsa, Audi A1.",
  },
  {
    label: "Medium",
    examples:
      "Ford Focus, Audi A3, BMW 1/2 Series, Mercedes A Class, VW Golf, Renault Megane.",
  },
  {
    label: "Large",
    examples:
      "Audi A5, BMW 4/5 Series, Tesla Model 3, Ford Mondeo, Vauxhall Insignia, Volvo S60, Jaguar XE.",
  },
  {
    label: "X-Large",
    examples:
      "Audi Q5/Q7, BMW X4/X5/X6, Tesla Model X, Ford Ranger, Vauxhall Grandland, Range Rover, Land Rover Discovery.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Services & Pricing
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Clear pricing by vehicle size.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three straightforward packages. No hidden fees — pick the level of clean your car
            needs.
          </p>
        </div>

        {/* Launch offer banner */}
        <div className="mt-10 reveal">
          <div className="relative rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-2 self-start text-[10px] uppercase tracking-widest font-semibold text-primary-foreground bg-primary rounded-full px-3 py-1">
              <Sparkles className="w-3 h-3" /> Founders Launch Offer
            </span>
            <p className="text-sm sm:text-base text-foreground/90">
              <span className="font-semibold text-foreground">25% off</span> for the first 10
              local customers — in exchange for honest feedback and permission to use before /
              after photos.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={cn(
                  "reveal relative rounded-3xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-1",
                  t.featured
                    ? "border-primary/60 bg-card shadow-glow lg:scale-[1.03]"
                    : "border-border bg-card",
                )}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-semibold text-primary-foreground bg-primary rounded-full px-3 py-1">
                    Recommended
                  </span>
                )}

                <div
                  className={cn(
                    "w-12 h-12 rounded-xl grid place-items-center",
                    t.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>

                {/* Price rows */}
                <div className="mt-6 rounded-2xl border border-border overflow-hidden">
                  {sizes.map((s, idx) => (
                    <div
                      key={s}
                      className={cn(
                        "flex items-center justify-between px-4 py-2.5 text-sm",
                        idx !== sizes.length - 1 && "border-b border-border",
                      )}
                    >
                      <span className="text-muted-foreground">{s} Vehicle</span>
                      <span className="font-semibold text-foreground tabular-nums">
                        £{t.prices[s]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <ul className="mt-6 space-y-2.5 flex-1">
                  {t.includes.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition",
                    t.featured
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-secondary",
                  )}
                >
                  Book This Detail
                </a>
              </div>
            );
          })}
        </div>

        {/* Unsure note */}
        <p className="mt-8 text-center text-sm text-muted-foreground reveal">
          Unsure of your vehicle size? Send your car model before booking and I'll confirm the
          correct price.
        </p>

        {/* Vehicle size guide */}
        <div className="mt-12 reveal">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-lg font-semibold text-foreground">Vehicle size guide</h3>
              <span className="text-xs text-muted-foreground">
                Examples — not an exhaustive list
              </span>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sizeGuide.map((g) => (
                <div
                  key={g.label}
                  className="rounded-2xl border border-border bg-background/40 p-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">
                      {g.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {g.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
