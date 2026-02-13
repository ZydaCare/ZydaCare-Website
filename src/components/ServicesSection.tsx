import { motion } from "framer-motion";
import { Calendar, Video, ShieldCheck, Brain, HeartPulse, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Calendar,
    title: "Doctor Booking",
    desc: "In-person or home visits with verified specialists.",
    tag: "Booking",
  },
  {
    icon: Video,
    title: "Telemedicine",
    desc: "Video, voice, or chat with licensed doctors. E-prescriptions included.",
    tag: "Virtual",
  },
  {
    icon: ShieldCheck,
    title: "Verified Pharmacy",
    desc: "Only genuine medications from licensed pharmacies, delivered to your door.",
    tag: "Pharmacy",
  },
  {
    icon: Brain,
    title: "AI Symptom Checker",
    desc: "Preliminary guidance to help you decide if you need a doctor or pharmacy.",
    tag: "AI-Powered",
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring",
    desc: "Reminders, follow-ups, chronic care tracking, and digital health records.",
    tag: "Ongoing",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <p className="section-label mb-4">What We Offer</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
          From symptom to follow-up, one platform, complete care.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card p-8 group hover:bg-background transition-colors relative"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center">
                <s.icon size={20} className="text-primary" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1">
                {s.tag}
              </span>
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3 flex items-center gap-2">
              {s.title}
              <ArrowUpRight
                size={18}
                className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
        {/* View all link */}
        <Link
          to="/services"
          className="bg-card p-8 flex items-center justify-center gap-2 text-primary font-semibold hover:bg-background transition-colors group"
        >
          View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
