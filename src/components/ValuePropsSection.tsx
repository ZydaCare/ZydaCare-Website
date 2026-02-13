import { motion } from "framer-motion";

const audiences = [
  {
    label: "Patients",
    points: ["Verified doctors you can trust", "Genuine medications, always", "Faster consultations, less travel", "Your health history in one place"],
  },
  {
    label: "Doctors",
    points: ["Flexible income opportunities", "Broader reach to patients", "Reduced admin burden", "No-show protection built in"],
  },
  {
    label: "Pharmacies",
    points: ["Increased digital orders", "Verified patient traffic", "Secure prescription handling", "Expanded market presence"],
  },
  {
    label: "Corporates & HMOs",
    points: ["Digital claims = fraud reduction", "Preventive care lowers costs", "Employee health programs", "Full transparency & audit trails"],
  },
];

const ValuePropsSection = () => (
  <section id="providers" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-16"
      >
        <p className="section-label mb-4">Who It's For</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
          Built for every stakeholder in healthcare.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
          >
            <h3 className="font-heading text-3xl text-foreground mb-6">{a.label}</h3>
            <ul className="space-y-3">
              {a.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-4 bg-primary shrink-0 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePropsSection;
