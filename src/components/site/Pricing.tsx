import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = ["Sedan", "SUV / Crossover", "Truck / Van"] as const;

const matrix: Record<(typeof sizes)[number], { name: string; price: string; features: string[]; featured?: boolean }[]> = {
  Sedan: [
    { name: "Express", price: "$69", features: ["Hand wash & dry", "Wheels & tires", "Quick interior wipe", "30–45 min"] },
    { name: "Signature", price: "$149", features: ["Full interior detail", "Hand wash & seal", "Leather condition", "Tire dressing", "Glass polish", "~2 hours"], featured: true },
    { name: "Showroom", price: "$249", features: ["Everything in Signature", "Clay bar treatment", "Hand wax", "Headlight polish", "Ceramic spray sealant", "~4 hours"] },
  ],
  "SUV / Crossover": [
    { name: "Express", price: "$89", features: ["Hand wash & dry", "Wheels & tires", "Quick interior wipe", "45 min"] },
    { name: "Signature", price: "$179", features: ["Full interior detail", "Hand wash & seal", "Leather condition", "Tire dressing", "Glass polish", "~2.5 hours"], featured: true },
    { name: "Showroom", price: "$289", features: ["Everything in Signature", "Clay bar treatment", "Hand wax", "Headlight polish", "Ceramic spray sealant", "~4.5 hours"] },
  ],
  "Truck / Van": [
    { name: "Express", price: "$99", features: ["Hand wash & dry", "Wheels & tires", "Quick interior wipe", "~1 hour"] },
    { name: "Signature", price: "$199", features: ["Full interior detail", "Hand wash & seal", "Leather condition", "Tire dressing", "Glass polish", "~3 hours"], featured: true },
    { name: "Showroom", price: "$329", features: ["Everything in Signature", "Clay bar treatment", "Hand wax", "Headlight polish", "Ceramic spray sealant", "~5 hours"] },
  ],
};

export function Pricing() {
  const [size, setSize] = useState<(typeof sizes)[number]>("Sedan");
  const tiers = matrix[size];

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Clear, public pricing.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No surprise fees. Pick your vehicle size — we'll quote the rest before we start.
          </p>
        </div>

        <div className="mt-8 flex justify-center reveal">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  "px-4 sm:px-5 py-2 text-sm rounded-full transition-colors",
                  size === s
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                "reveal relative rounded-3xl border p-7 flex flex-col transition-all",
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
              <div className="text-sm text-muted-foreground">{t.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-foreground">{t.price}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
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
                Book {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}