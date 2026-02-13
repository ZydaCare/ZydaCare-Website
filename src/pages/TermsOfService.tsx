import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-foreground leading-[0.95] mb-8">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Last updated: November 10, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using ZydaCare's digital healthcare platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ZydaCare is a digital healthcare infrastructure platform that connects patients with verified healthcare providers, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Doctor booking and telemedicine services</li>
                <li>Verified pharmacy marketplace</li>
                <li>AI-powered symptom checking</li>
                <li>Emergency ambulance dispatch services</li>
                <li>Health monitoring and follow-up care</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of ZydaCare, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete health information</li>
                <li>Use the service for legitimate healthcare purposes only</li>
                <li>Respect the privacy and rights of healthcare providers</li>
                <li>Pay for services rendered through the platform</li>
                <li>Follow medical advice and treatment plans responsibly</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">4. Healthcare Provider Verification</h2>
              <p className="text-muted-foreground leading-relaxed">
                ZydaCare verifies the credentials of all healthcare providers on our platform. However, we are not responsible for the medical advice, diagnosis, or treatment provided by independent healthcare professionals. Users should exercise their own judgment when selecting healthcare providers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">5. Emergency Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For emergency ambulance services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Response times depend on availability and location</li>
                <li>Emergency services are provided by independent ambulance operators</li>
                <li>ZydaCare acts as a coordination platform, not a medical emergency provider</li>
                <li>For life-threatening emergencies, also call local emergency numbers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">6. Payment and Fees</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users agree to pay all fees associated with services booked through ZydaCare. Payment processing is handled securely through our platform. Refunds are subject to the individual provider's cancellation policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">7. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of ZydaCare is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal and health information in compliance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of the ZydaCare platform are owned by ZydaCare and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                ZydaCare is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or from medical treatment provided by healthcare professionals on our platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">10. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to maintain high service availability, we cannot guarantee uninterrupted access. Services may be temporarily unavailable for maintenance, updates, or technical issues.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">11. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                ZydaCare reserves the right to suspend or terminate accounts that violate these terms. Users may also terminate their accounts at any time through the platform settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of any modifications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
                <br />
                Email: <a href="mailto:wecare@zydacare.com" className="text-primary hover:underline">wecare@zydacare.com</a>
                <br />
                Location: Lagos, Nigeria
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
