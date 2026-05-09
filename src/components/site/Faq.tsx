import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you need water and power?",
    a: "Yes — please have an outdoor tap and an outdoor power socket available. That's all I need to get set up on your driveway.",
  },
  {
    q: "How long does a full valet take?",
    a: "Most full valets take between 2 and 4 hours depending on the size of the vehicle and its condition.",
  },
  {
    q: "What if it rains?",
    a: "If the weather turns heavy I'll reach out to reschedule at no charge. Light drizzle is usually fine.",
  },
  {
    q: "How do I pay?",
    a: "Bank transfer or card on the day. No deposit required for standard bookings.",
  },
  {
    q: "Is pet hair extra?",
    a: "Heavy pet hair is a small add-on. Light shedding is usually included in the interior detail.",
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes. If you spot something I missed, send me a photo within 24 hours and I'll come back to fix it free of charge.",
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