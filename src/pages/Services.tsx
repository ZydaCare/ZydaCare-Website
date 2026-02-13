import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar, Video, ShieldCheck, Brain, HeartPulse,
  ArrowRight, Home, MessageSquare, Pill, FileText,
  Bell, Activity, ClipboardList, Stethoscope
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "doctor-booking",
    icon: Calendar,
    title: "Doctor Booking",
    subtitle: "In-Person & Home Visits",
    tag: "Booking",
    description: "Book physical appointments with verified, licensed doctors across specialties. Whether you prefer visiting a clinic or having a doctor come to you, ZydaCare makes it seamless.",
    features: [
      { icon: Stethoscope, text: "Book appointments with verified doctors" },
      { icon: Home, text: "Request home visits from qualified specialists" },
      { icon: ClipboardList, text: "Filter by specialty — GP, pediatrics, dermatology, and more" },
      { icon: ShieldCheck, text: "Pay securely within the platform" },
    ],
    doctorBenefit: "Doctors benefit from flexible scheduling, broader patient reach, and income expansion.",
  },
  {
    id: "telemedicine",
    icon: Video,
    title: "Telemedicine",
    subtitle: "Video, Voice & Chat Consultations",
    tag: "Virtual",
    description: "Consult with licensed doctors from the comfort of your home. No travel, no waiting rooms, no hassle. Get professional medical advice through your preferred communication channel.",
    features: [
      { icon: Video, text: "Video consultations with licensed doctors" },
      { icon: MessageSquare, text: "Secure chat and voice call options" },
      { icon: FileText, text: "E-prescriptions sent directly to verified pharmacies" },
      { icon: Activity, text: "Reduced travel time, waiting hours, and overall cost of care" },
    ],
    doctorBenefit: "Doctors can expand their practice beyond geographical limitations and reduce no-shows.",
  },
  {
    id: "pharmacy",
    icon: ShieldCheck,
    title: "Verified Pharmacy Marketplace",
    subtitle: "Genuine Medications Only",
    tag: "Pharmacy",
    description: "ZydaCare partners only with licensed pharmacies and verified pharmaceutical vendors. We're building a verification-first supply chain model to combat Nigeria's counterfeit drug crisis.",
    features: [
      { icon: Pill, text: "Order only genuine, verified medications" },
      { icon: FileText, text: "Upload prescriptions for fulfillment" },
      { icon: Home, text: "Receive medications via home delivery" },
      { icon: ShieldCheck, text: "Every pharmacy is licensed and verified" },
    ],
    doctorBenefit: "Pharmacies gain increased digital orders, verified patient traffic, and secure prescription handling.",
  },
  {
    id: "ai-symptom-checker",
    icon: Brain,
    title: "AI-Powered Symptom Checker",
    subtitle: "Smart Preliminary Guidance",
    tag: "AI-Powered",
    description: "Our AI triage tool helps users understand their symptoms before seeing a doctor. It provides preliminary guidance to determine if self-care is sufficient or if professional consultation is needed.",
    features: [
      { icon: ClipboardList, text: "Input symptoms and receive possible health guidance" },
      { icon: Brain, text: "Determine if self-care is sufficient" },
      { icon: Stethoscope, text: "Get routed to the appropriate doctor or pharmacy" },
      { icon: Activity, text: "Reduces unnecessary hospital visits" },
    ],
    doctorBenefit: "Helps improve doctor workload management by filtering cases that truly need professional attention.",
  },
  {
    id: "health-monitoring",
    icon: HeartPulse,
    title: "Follow-Up & Health Monitoring",
    subtitle: "Continuity of Care",
    tag: "Ongoing",
    description: "Healthcare doesn't end after a consultation. ZydaCare supports continuity of care with tools that keep patients engaged and health outcomes improving over time.",
    features: [
      { icon: Bell, text: "Medication reminders and adherence tracking" },
      { icon: MessageSquare, text: "Post-consultation follow-ups" },
      { icon: Activity, text: "Chronic condition tracking and management" },
      { icon: FileText, text: "Digital health history and records" },
    ],
    doctorBenefit: "Increases patient adherence and improves long-term health outcomes across the ecosystem.",
  },
];

const Services = () => (
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
            <p className="section-label mb-6">Our Services</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-8">
              From symptom to follow-up — one platform, complete care.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              ZydaCare is a unified digital healthcare ecosystem that integrates doctor booking, telemedicine, verified pharmacy, AI symptom checking, and health monitoring — all within one seamless platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-card" : ""}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1">
                    {service.tag}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-3">
                  {service.title}
                </h2>
                <p className="text-lg text-primary font-medium mb-6">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-7"
              >
                <div className="space-y-4 mb-8">
                  {service.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <f.icon size={18} className="text-primary" />
                      </div>
                      <p className="text-foreground text-sm leading-relaxed pt-2">{f.text}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-accent rounded-xl p-5">
                  <p className="text-sm text-accent-foreground leading-relaxed">
                    <span className="font-semibold">Provider Benefit:</span> {service.doctorBenefit}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
              Your complete healthcare journey.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Symptom", desc: "Use our AI tool to understand your symptoms and get guidance." },
              { step: "02", title: "Consultation", desc: "Book an in-person visit or consult remotely via video/chat." },
              { step: "03", title: "Prescription", desc: "Receive a verified e-prescription from your doctor." },
              { step: "04", title: "Delivery", desc: "Order genuine medications delivered to your door." },
              { step: "05", title: "Follow-up", desc: "Track your health, get reminders, and stay on top of care." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <span className="font-heading text-4xl text-muted/60 block mb-3">{item.step}</span>
                <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
              Ready to access better healthcare?
            </h2>
            <p className="text-background/60 text-lg mb-10 leading-relaxed">
              Reach out to learn how ZydaCare can serve you, your practice, or your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-8 py-4 text-sm font-semibold text-background hover:border-background/50 transition-colors"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
