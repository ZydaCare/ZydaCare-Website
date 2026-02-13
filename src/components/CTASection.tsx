import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 lg:py-32 bg-foreground">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-12 gap-12 items-end"
      >
        <div className="lg:col-span-7">
          <p className="section-label !text-primary mb-4">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background leading-[1.05] mb-6">
            Ready to experience healthcare differently?
          </h2>
          <p className="text-background/60 text-lg max-w-lg leading-relaxed">
            Join thousands of Nigerians already accessing trusted, affordable, and convenient healthcare through ZydaCare.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-7 py-4 text-sm font-semibold text-background hover:border-background/50 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
