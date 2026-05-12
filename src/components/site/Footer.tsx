import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-14 mt-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 font-semibold">
            <img
              src={logo}
              alt="Kesgrave Mobile Car Detailing logo"
              className="h-12 w-12 object-contain rounded-md"
              loading="lazy"
              decoding="async"
            />
            <span className="text-foreground">Kesgrave Mobile Car Detailing</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Mobile car detailing in Kesgrave, carried out with care at your home.
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
            <li>Kesgrave</li>
            <li>Martlesham</li>
            <li>Rushmere St Andrew</li>
            <li>Woodbridge</li>
            <li>Ipswich</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Kesgrave Mobile Car Detailing. All rights reserved.</span>
        <span>Made for everyday drivers.</span>
      </div>
    </footer>
  );
}