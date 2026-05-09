import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you need water and power?",
    a: "Yes. Please have an outdoor tap and an outdoor power socket available. That gives me everything I need to set up on your driveway.",
  },
  {
    q: "How long does a valet take?",
    a: "Most valets take between 1.5 and 4 hours depending on the package, vehicle size, and condition.",
  },
  {
    q: "What happens if it rains?",
    a: "Light rain is usually fine. If the weather is too heavy to work properly, I'll rearrange the booking at no extra cost.",
  },
  {
    q: "How do I pay?",
    a: "Cash is preferred. Bank transfer is also accepted on the day.",
  },
  {
    q: "Is pet hair extra?",
    a: "No. Pet hair is included, but heavy pet hair may mean the job takes longer. Send photos before booking if the car is heavily affected.",
  },
  {
    q: "Do you offer add-ons?",
    a: "No. I keep the service simple and only offer the listed packages. That means no headlight restoration, clay bar treatment, machine polishing, or paint correction.",
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes. If I miss something included in your package, send me a photo within 24 hours and I'll put it right.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="reveal text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Common questions.
          </h2>
        </div>

        <div className="mt-10 reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`q-${i}`}
                className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}