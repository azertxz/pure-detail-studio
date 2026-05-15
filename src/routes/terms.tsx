import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service - Kesgrave Mobile Car Detailing" },
      {
        name: "description",
        content: "Terms of service for Kesgrave Mobile Car Detailing",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Kesgrave Mobile Car Detailing website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kesgrave Mobile Car Detailing provides professional mobile car detailing services to customers within Kesgrave and surrounding areas (within 5 miles). Services are provided at the customer's location at a pre-arranged time and date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Booking and Payment</h2>
            <div className="space-y-3 ml-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Booking Confirmation</h3>
                <p className="text-muted-foreground">
                  All bookings must be confirmed via our website or phone. A booking is considered confirmed once you receive a confirmation message from us.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Payment Terms</h3>
                <p className="text-muted-foreground">
                  Payment must be made at the time of service unless other arrangements have been agreed upon in advance. We accept card payments and cash.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pricing</h3>
                <p className="text-muted-foreground">
                  Prices are clearly stated on our website and confirmed at the time of booking. Pricing may vary based on vehicle type and service selected.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Cancellation and Rescheduling</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cancellations or rescheduling must be made at least 24 hours in advance. Cancellations made less than 24 hours before the scheduled service may incur a cancellation fee. In case of emergency or severe weather conditions, we reserve the right to reschedule your appointment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Liability and Responsibility</h2>
            <div className="space-y-3 ml-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Vehicle Condition</h3>
                <p className="text-muted-foreground">
                  The customer is responsible for disclosing any existing damage, mechanical issues, or special concerns about their vehicle prior to service. Our technicians will perform a pre-service inspection.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Limited Liability</h3>
                <p className="text-muted-foreground">
                  Kesgrave Mobile Car Detailing provides professional detailing services using industry-standard practices. We are not responsible for damage caused by pre-existing conditions, manufacturing defects, or improper vehicle maintenance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Water Damage</h3>
                <p className="text-muted-foreground">
                  While we take precautions to prevent water entry into your vehicle, we are not liable for water damage that may occur during or after service if your vehicle has existing sealing issues.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Service Area and Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We service Kesgrave, Martlesham, Rushmere St Andrew, Woodbridge, and Ipswich. Services are available by appointment only. We reserve the right to refuse service outside our service area or to customers who do not meet our requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website and all content, including text, graphics, logos, images, and software, is the property of Kesgrave Mobile Car Detailing or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Kesgrave Mobile Car Detailing, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or in connection with this agreement or the services provided.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-accent/50 p-4 rounded-lg border border-border">
              <p className="text-foreground font-medium">Kesgrave Mobile Car Detailing</p>
              <p className="text-muted-foreground text-sm">Kesgrave, Suffolk, UK</p>
              <p className="text-muted-foreground text-sm">Email: contact@kesgravemobiledetailing.co.uk</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
