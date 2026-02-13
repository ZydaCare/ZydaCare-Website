import { motion } from "framer-motion";
import { Smartphone, Apple, PlayCircle } from "lucide-react";

const AppDownloadSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-7">
          <p className="section-label mb-4">Mobile App</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] mb-6">
            Your health, in your pocket.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed mb-10">
            Book doctors, consult via video, order genuine medications, and track your health all from one app. Available soon on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-background px-6 py-4 opacity-60 cursor-not-allowed">
                <Apple size={28} className="text-foreground" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">Coming Soon on</p>
                  <p className="text-base font-bold text-foreground leading-tight">App Store</p>
                </div>
              </div>
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Soon
              </span>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-background px-6 py-4 opacity-60 cursor-not-allowed">
                <PlayCircle size={28} className="text-foreground" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">Coming Soon on</p>
                  <p className="text-base font-bold text-foreground leading-tight">Google Play</p>
                </div>
              </div>
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Soon
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-[500px] rounded-[3rem] border-[6px] border-foreground bg-card flex flex-col items-center justify-center p-8">
              <Smartphone size={48} className="text-primary mb-6" />
              <h3 className="font-heading text-2xl text-foreground text-center mb-3">ZydaCare App</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                One app for all your healthcare needs. Coming to your device soon.
              </p>
              <div className="mt-8 w-full space-y-2">
                {["Book Doctors", "Telemedicine", "Order Meds", "Health Records"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1 w-3 bg-primary rounded-full shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 rounded-full">
              Launching Soon
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AppDownloadSection;
