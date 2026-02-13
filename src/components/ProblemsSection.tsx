import { motion } from "framer-motion";

const problems = [
  {
    num: "01",
    title: "Doctor Shortage",
    desc: "Nigeria's doctor-to-patient ratio is critically low. Millions go without access to a single consultation.",
  },
  {
    num: "02",
    title: "Counterfeit Drugs",
    desc: "Substandard and falsified medications flood the market, putting lives at risk every single day.",
  },
  {
    num: "03",
    title: "Unaffordable Care",
    desc: "Over 70% of healthcare spending comes directly from patients' pockets — making care a luxury.",
  },
  {
    num: "04",
    title: "Fragmented Systems",
    desc: "Hospitals, pharmacies, and insurers operate in silos. Patients are left navigating chaos alone.",
  },
];

const ProblemsSection = () => (
  <section id="why" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left sticky header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <p className="section-label mb-4">The Problem</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
            Africa's healthcare system is broken.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These aren't just statistics — they're the daily reality for over 200 million Nigerians.
          </p>
        </motion.div>

        {/* Right: Problem cards */}
        <div className="lg:col-span-8 space-y-0 divide-y divide-border">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="py-8 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-4 items-start"
            >
              <span className="md:col-span-2 font-heading text-5xl text-muted/80 select-none">
                {p.num}
              </span>
              <div className="md:col-span-10">
                <h3 className="font-heading text-2xl text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemsSection;
