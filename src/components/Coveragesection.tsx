import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import map from '../assets/people.png'

const coverageData = [
  {
    state: "Lagos",
    color: "#3b82f6",
    services: ["Telemedicine", "Pharmacy", "Ambulance", "Home Visits"],
    doctors: 245,
    pharmacies: 87,
  },
  {
    state: "Abuja",
    color: "#eab308",
    services: ["Telemedicine", "Pharmacy", "Ambulance"],
    doctors: 156,
    pharmacies: 52,
  },
  {
    state: "Port Harcourt",
    color: "#ef4444",
    services: ["Telemedicine", "Pharmacy"],
    doctors: 98,
    pharmacies: 34,
  },
  {
    state: "Enugu",
    color: "#10b981",
    services: ["Telemedicine", "Pharmacy", "Ambulance"],
    doctors: 112,
    pharmacies: 41,
  },
];

const CoverageSection = () => {
  const [activeState, setActiveState] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Nigeria Map */}
          <img src={map} alt="Nigeria Map" className="lg:col-span-6" />

          {/* Right: Coverage Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <p className="section-label mb-4">Nationwide Coverage</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
              Healthcare that reaches you, wherever you are.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              ZydaCare is expanding across Nigeria, bringing verified doctors, genuine medications, and emergency ambulance services to communities nationwide.
            </p>

            {/* Active state details */}
            <motion.div
              key={activeState}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl border border-border p-6 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: coverageData[activeState].color }}
                />
                <h3 className="font-heading text-2xl text-foreground">
                  {coverageData[activeState].state}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-3xl font-heading text-primary mb-1">
                    {coverageData[activeState].doctors}+
                  </p>
                  <p className="text-sm text-muted-foreground">Verified Doctors</p>
                </div>
                <div>
                  <p className="text-3xl font-heading text-primary mb-1">
                    {coverageData[activeState].pharmacies}+
                  </p>
                  <p className="text-sm text-muted-foreground">Licensed Pharmacies</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground mb-3">Available Services:</p>
                <div className="flex flex-wrap gap-2">
                  {coverageData[activeState].services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent text-accent-foreground px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 size={12} className="text-primary" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* State selector buttons */}
            <div className="flex flex-wrap gap-3">
              {coverageData.map((location, index) => (
                <button
                  key={location.state}
                  onClick={() => setActiveState(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeState === index
                      ? "bg-foreground text-background"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {location.state}
                </button>
              ))}
            </div>

            {/* Coverage stats */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-heading text-primary mb-1">36</p>
                  <p className="text-xs text-muted-foreground">States Planned</p>
                </div>
                <div>
                  <p className="text-2xl font-heading text-primary mb-1">4</p>
                  <p className="text-xs text-muted-foreground">Active Now</p>
                </div>
                <div>
                  <p className="text-2xl font-heading text-primary mb-1">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;