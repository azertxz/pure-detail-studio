import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-hero overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Mobile detailing — we come to you
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            A showroom finish,{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              parked at your door.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Hand-detailed inside and out by trained pros — at your home or office. Eco-friendly
            products, real attention to detail, no rushed automatic wash.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium shadow-glow hover:translate-y-[-2px] transition"
            >
              Book Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 font-medium text-foreground hover:bg-card transition"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 text-primary">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-muted-foreground">
              <span className="text-foreground font-semibold">4.9/5</span> from 320+ local reviews
            </div>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-soft">
            <img
              src={heroImg}
              alt="Freshly detailed car with water beading on the hood"
              width={1600}
              height={1100}
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl bg-card/90 backdrop-blur border border-border p-4 shadow-soft hidden sm:block">
            <div className="text-xs text-muted-foreground">Next available</div>
            <div className="text-base font-semibold text-foreground">Tomorrow · 9:00 AM</div>
          </div>
          <div className="absolute -top-6 -right-4 sm:-right-8 rounded-2xl bg-card/90 backdrop-blur border border-border p-4 shadow-soft hidden sm:block">
            <div className="text-xs text-muted-foreground">Service area</div>
            <div className="text-base font-semibold text-foreground">Greater Toronto · GTA</div>
          </div>
        </div>
      </div>
    </section>
  );
}