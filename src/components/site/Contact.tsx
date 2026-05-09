import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! I'll get back to you with availability shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">Contact</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Book a detail or ask a question.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send your details and I'll get back to you with availability. You can also call or
            message directly.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+447557981537" className="text-foreground font-medium">
                  +44 7557 981537
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:hello@replace-this-email.co.uk" className="text-foreground font-medium">
                  hello@replace-this-email.co.uk
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Service area</div>
                <div className="text-foreground font-medium">Kesgrave and within 5 miles</div>
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
          <Field label="Vehicle, year, make and model" name="vehicle" />
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">
              Service interested in
            </label>
            <select
              name="service"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary"
              defaultValue="Mini Detail"
            >
              <option>Maintenance Detail</option>
              <option>Mini Detail</option>
              <option>Deep Clean</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <Field label="Preferred date" name="date" type="date" />
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Anything I should know? Pet hair, stains, problem areas..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 font-medium hover:opacity-90 disabled:opacity-60 transition shadow-glow"
          >
            <Send className="w-4 h-4" />
            {sending ? "Sending..." : "Request Booking"}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Your details are only used to respond to your enquiry.
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