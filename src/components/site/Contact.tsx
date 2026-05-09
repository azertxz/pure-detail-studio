import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! We'll be in touch within a few hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">Contact</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Book a detail or just ask a question.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill out the form and we'll get back to you with availability, or reach us directly.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+14165550199" className="text-foreground font-medium">
                  (416) 555-0199
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:hello@pristinewash.example" className="text-foreground font-medium">
                  hello@pristinewash.example
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Service area</div>
                <div className="text-foreground font-medium">Greater Toronto Area</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Hours</div>
                <div className="text-foreground font-medium">Mon–Sat · 8:00–7:00</div>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Vehicle (year, make, model)" name="vehicle" />
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">
              Service interested in
            </label>
            <select
              name="service"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary"
              defaultValue="Full Valet"
            >
              <option>Interior Clean</option>
              <option>Exterior Wash</option>
              <option>Full Valet</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">
              Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Anything we should know? Pet hair, stains, preferred date…"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 font-medium hover:opacity-90 disabled:opacity-60 transition shadow-glow"
          >
            <Send className="w-4 h-4" />
            {sending ? "Sending..." : "Request booking"}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            We'll never share your details. Demo form — replace with your booking system.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary"
      />
    </div>
  );
}