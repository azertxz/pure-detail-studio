import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Kesgrave Mobile Car Detailing" },
      {
        name: "description",
        content: "Privacy policy for Kesgrave Mobile Car Detailing",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kesgrave Mobile Car Detailing ("we", "us", "our", or "Company") operates the website and provides mobile car detailing services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <div className="space-y-3 ml-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                <p className="text-muted-foreground">
                  When you contact us to request our services, we collect your name, email address, phone number, and vehicle details to process your booking and provide service updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Usage Data</h3>
                <p className="text-muted-foreground">
                  We collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages. This helps us understand how users engage with our site and improve our service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location Data</h3>
                <p className="text-muted-foreground">
                  For service delivery purposes, we collect the address where you request our mobile car detailing service. This is used only to confirm we service your area and to schedule appointments.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kesgrave Mobile Car Detailing uses the collected data for various purposes:
            </p>
            <ul className="space-y-2 ml-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>To provide and maintain our services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>To notify you about changes to our services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>To allow you to participate in interactive features of our service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>To provide customer support and respond to inquiries</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>To monitor the usage and performance of our website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>To send you promotional materials about our services</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete the information we have on file about you. You may also withdraw consent to receive promotional communications at any time by contacting us using the information below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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
