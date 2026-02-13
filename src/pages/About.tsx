import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Eye, Heart, Cpu, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Shield, title: "Trust", desc: "Every doctor is verified. Every medication is genuine. Every transaction is secure." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, digital audit trails, and full visibility into your healthcare journey." },
  { icon: Heart, title: "Accessibility", desc: "Healthcare that reaches everyone, regardless of location or income level." },
  { icon: Cpu, title: "Innovation", desc: "AI-powered tools and modern technology to make healthcare smarter and faster." },
  { icon: Users, title: "Human Care", desc: "Technology serves people, not the other way around. Empathy drives our design." },
];

const timeline = [
  { phase: "Phase 1", title: "Foundation", desc: "Building the core platform — doctor booking, telemedicine, and verified pharmacy marketplace for Nigeria." },
  { phase: "Phase 2", title: "AI & Insurance", desc: "Launching AI symptom checker, health monitoring tools, and HMO/insurance integration for fraud-free claims." },
  { phase: "Phase 3", title: "Scale Across Africa", desc: "Expanding to other African countries, building the continent's most trusted healthcare super-app." },
  { phase: "Phase 4", title: "Health Infrastructure Layer", desc: "Becoming the digital health infrastructure backbone — APIs, partnerships, and interoperability across the continent." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="section-label mb-6">About ZydaCare</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-8">
              Building Africa's most trusted healthcare platform.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              ZydaCare is a Nigerian-based digital health technology company building trusted healthcare access infrastructure for Africa. We connect patients, licensed doctors, verified pharmacies, and health insurers into one secure ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label mb-4">What We Are</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
                Not just a telemedicine app.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ZydaCare is a trust-first digital health platform designed to solve three of Nigeria's biggest healthcare challenges: limited access to doctors, circulation of counterfeit drugs, and high out-of-pocket healthcare costs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through technology, AI-powered tools, and verified provider networks, we deliver convenient, trackable, and reliable healthcare services directly to users' mobile devices. We replace fragmented healthcare access with a single trusted interface.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="section-label mb-4">Our Approach</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
                An open ecosystem, not a closed loop.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike EMR-focused companies, single-vertical telemedicine apps, or closed insurance systems, ZydaCare integrates the entire healthcare journey: Symptom → Consultation → Prescription → Drug Delivery → Follow-up.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We operate as an open ecosystem aggregator, bringing together every stakeholder in healthcare to create a seamless experience for all. All in one trusted environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-2xl p-10"
            >
              <p className="section-label mb-4">Our Vision</p>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground leading-[1.1]">
                To become Africa's most trusted digital healthcare infrastructure platform.
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="border border-border rounded-2xl p-10"
            >
              <p className="section-label mb-4">Our Mission</p>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground leading-[1.1]">
                To make quality healthcare accessible, affordable, and verifiable for every African, starting with Nigeria.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="section-label mb-4">Our Values</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
              What ZydaCare stands for.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card p-8"
              >
                <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <v.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Compliance */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p className="section-label mb-4">Technology & Compliance</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
                Built on trust, secured by design.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Trust and compliance are foundational to our operations. Every aspect of ZydaCare is designed with security, verification, and regulatory alignment at its core.
              </p>
            </motion.div>
            <div className="lg:col-span-7 space-y-0 divide-y divide-border">
              {[
                { title: "Doctor License Verification", desc: "Every doctor on our platform goes through a rigorous license verification process to ensure they are qualified and authorized to practice." },
                { title: "Pharmacy Verification Protocols", desc: "We partner only with licensed pharmacies and verified pharmaceutical vendors, combating counterfeit drugs at the source." },
                { title: "Secure Digital Payments", desc: "All transactions are processed through secure, encrypted payment channels with full transaction trails." },
                { title: "Data Protection Compliance", desc: "Patient data is protected using industry-standard encryption and stored in compliance with data protection regulations." },
                { title: "Encrypted Health Records", desc: "All health records are encrypted end-to-end, ensuring patient privacy and confidentiality at every level." },
                { title: "Regulatory Alignment", desc: "ZydaCare operates in alignment with national healthcare authorities and regulatory frameworks across our markets." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="section-label mb-4">Roadmap</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
              Where we're headed.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">{t.phase}</span>
                <h3 className="font-heading text-2xl text-foreground mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-background leading-[1.05] mb-6">
              Want to learn more or partner with us?
            </h2>
            <p className="text-background/60 text-lg mb-10 leading-relaxed">
              Whether you're a patient, doctor, pharmacy, or organization — we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
