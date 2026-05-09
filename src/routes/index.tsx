import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyBook } from "@/components/site/StickyBook";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kesgrave Mobile Car Detailing" },
      {
        name: "description",
        content:
          "Mobile car detailing in Kesgrave and within 5 miles. Hand-washed at your home, with clear pricing and a one-person service.",
      },
      { property: "og:title", content: "Kesgrave Mobile Car Detailing" },
      {
        property: "og:description",
        content:
          "Mobile car detailing in Kesgrave. Hand-washed, straightforward, and done at your home.",
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
        <Gallery />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyBook />
      <Toaster />
    </div>
  );
}
