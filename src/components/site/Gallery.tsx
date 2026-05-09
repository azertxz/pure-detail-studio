import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const filters = ["All", "Exterior", "Interior", "Wheels"] as const;
type Filter = (typeof filters)[number];

const items: { src: string; tag: Exclude<Filter, "All">; alt: string }[] = [
  { src: g2, tag: "Exterior", alt: "Glossy white SUV after exterior detail" },
  { src: g1, tag: "Interior", alt: "Clean leather interior of a sedan" },
  { src: g3, tag: "Wheels", alt: "Polished alloy wheel close-up" },
  { src: afterImg, tag: "Exterior", alt: "Mirror finish blue paint" },
];

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      if (!dragging.current || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      setPos(Math.max(2, Math.min(98, p)));
    };
    const onMM = (e: MouseEvent) => move(e.clientX);
    const onTM = (e: TouchEvent) => e.touches[0] && move(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMM);
    window.addEventListener("touchmove", onTM);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("touchmove", onTM);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative rounded-3xl overflow-hidden border border-border select-none aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize shadow-soft"
      onMouseDown={() => (dragging.current = true)}
      onTouchStart={() => (dragging.current = true)}
    >
      <img src={afterImg} alt="After detailing" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={beforeImg}
          alt="Before detailing"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
        />
      </div>
      <div className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-background/70 backdrop-blur px-3 py-1 rounded-full text-foreground">
        Before
      </div>
      <div className="absolute top-4 right-4 text-xs uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">
        After
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-glow">
          <span className="text-xs">↔</span>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? items : items.filter((i) => i.tag === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Gallery</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Before and after results.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real photos will be added as I build my local portfolio.
            </p>
          </div>
        </div>

        <div className="mt-10 reveal">
          <BeforeAfter />
        </div>

        <div className="mt-12 flex flex-wrap gap-2 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm border transition-colors",
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((it, i) => (
            <div
              key={it.src + i}
              className="reveal group relative overflow-hidden rounded-2xl border border-border aspect-[4/3]"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                <span className="text-xs uppercase tracking-widest text-primary">{it.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}