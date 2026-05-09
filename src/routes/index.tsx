import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyBook } from "@/components/site/StickyBook";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PristineWash — Mobile Car Detailing in the GTA" },
      {
        name: "description",
        content:
          "Premium mobile car detailing in the Greater Toronto Area. Hand-washed, eco-friendly, and done right at your home or office. Clear pricing, real results.",
      },
      { property: "og:title", content: "PristineWash — Mobile Car Detailing" },
      {
        property: "og:description",
        content:
          "Hand-detailed inside and out, at your door. Clear pricing, eco-friendly, trusted by hundreds of locals.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Gallery />
        <Pricing />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyBook />
      <Toaster />
    </div>
  );
}
