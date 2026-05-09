import { Instagram, Facebook, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-14 mt-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-gradient text-primary-foreground">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-foreground">PristineWash</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Mobile car detailing across the GTA. Hand-washed, eco-friendly, and done right at your
            home or office.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a aria-label="Instagram" href="#" className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a aria-label="Facebook" href="#" className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground">Service area</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Toronto</li>
            <li>Mississauga</li>
            <li>Vaughan</li>
            <li>Markham</li>
            <li>Etobicoke</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} PristineWash Mobile Detailing. All rights reserved.</span>
        <span>Made for everyday drivers.</span>
      </div>
    </footer>
  );
}