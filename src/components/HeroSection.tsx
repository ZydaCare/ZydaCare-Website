import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => (
  <section className="relative pt-20 min-h-screen flex items-center">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <p className="section-label mb-6">Digital Healthcare · Nigeria</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-foreground mb-8">
            Healthcare<br />
            you can <em className="text-primary">trust</em>,<br />
            wherever you are.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
            Verified doctors. Genuine medications. One secure platform built for Africa, starting with Nigeria.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:opacity-80 transition-opacity"
            >
              Learn More
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Services <ArrowDown size={14} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src={heroImage}
                alt="Healthcare professional using ZydaCare"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-5 text-primary-foreground">
              <p className="font-heading text-4xl leading-none mb-1">70%</p>
              <p className="text-xs opacity-80 max-w-[8rem]">
                of healthcare spending in Nigeria is out-of-pocket
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { num: "4:1000", label: "Doctor-to-patient ratio in Nigeria" },
          { num: "54%", label: "Nigerians lack access to essential medicines" },
          { num: "70%", label: "Out-of-pocket healthcare spending" },
          { num: "1", label: "Platform to fix it all" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-heading text-3xl md:text-4xl text-foreground mb-1">{s.num}</p>
            <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
