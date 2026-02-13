import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
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
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Last updated: November 10, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                ZydaCare is committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our digital healthcare platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Personal Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name, date of birth, and contact information</li>
                <li>Address and location data for service delivery</li>
                <li>Payment and billing information</li>
                <li>Government-issued identification for verification</li>
              </ul>

              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Health Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Medical history and symptoms</li>
                <li>Consultation records and treatment plans</li>
                <li>Prescription information</li>
                <li>Health monitoring data and vital signs</li>
                <li>Emergency medical information</li>
              </ul>

              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Technical Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Device information and IP address</li>
                <li>Usage data and interaction patterns</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location data for emergency services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and coordinate healthcare services</li>
                <li>Connect you with verified healthcare providers</li>
                <li>Process payments and manage transactions</li>
                <li>Facilitate emergency ambulance dispatch</li>
                <li>Send appointment reminders and health notifications</li>
                <li>Improve our services and develop new features</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">4. Information Sharing</h2>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Healthcare Providers</h3>
              <p className="text-muted-foreground leading-relaxed">
                We share relevant health information with healthcare providers you select to deliver care. This includes doctors, pharmacies, and ambulance services necessary for your treatment.
              </p>

              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Service Partners</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may share information with trusted third-party service providers who assist in operating our platform, such as payment processors, cloud infrastructure providers, and communication services.
              </p>

              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may disclose your information if required by law, court order, or to protect our rights, property, or safety, or that of our users or the public.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>End-to-end encryption for all health data</li>
                <li>Secure servers with regular security updates</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on privacy and security practices</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information only as long as necessary to provide our services and comply with legal obligations. Health records are retained according to applicable medical record retention requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of non-essential communications</li>
                <li>Obtain a copy of your data in a portable format</li>
                <li>Restrict processing of your information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">8. Emergency Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                In emergency situations, we may share your location and relevant medical information with ambulance services and emergency responders to ensure timely and appropriate care. This sharing is necessary for your health and safety.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">9. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 18. We do not knowingly collect personal information from minors. Parents or guardians may create accounts on behalf of their children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than Nigeria. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">12. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our platform and sending you an email notification.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy or to exercise your rights, please contact us at:
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

export default PrivacyPolicy;
