import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to provide water or power?",
    a: "Nope. Our van carries its own water tank and generator, so all we need is a parking spot near your car.",
  },
  {
    q: "How long does a full valet take?",
    a: "Most full valets take between 2 and 4 hours depending on the size of the vehicle and its condition.",
  },
  {
    q: "What if it rains?",
    a: "If the weather turns, we'll reach out to reschedule at no charge. Light drizzle is usually fine — we work under a portable shelter.",
  },
  {
    q: "How do I pay?",
    a: "We accept e-transfer, credit and debit cards on the spot. No deposit required for standard bookings.",
  },
  {
    q: "Is pet hair extra?",
    a: "Heavy pet hair is a small add-on (from $25). Light shedding is usually included in the interior detail.",
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes. If you spot something we missed, send us a photo within 24 hours and we'll come back to fix it free of charge.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="reveal text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Questions, answered.
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