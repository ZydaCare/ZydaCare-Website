import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Apple, PlayCircle, Smartphone, Bell, ArrowRight, Calendar, Video, ShieldCheck, Brain, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Calendar, title: "Book Doctors", desc: "Find and book verified doctors for in-person or home visits." },
  { icon: Video, title: "Telemedicine", desc: "Consult via video, voice, or chat from anywhere." },
  { icon: ShieldCheck, title: "Order Medications", desc: "Genuine drugs from verified pharmacies, delivered to you." },
  { icon: Brain, title: "AI Symptom Checker", desc: "Get smart guidance before deciding on a doctor visit." },
  { icon: HeartPulse, title: "Health Tracking", desc: "Monitor your health with reminders and digital records." },
];

const Download = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <p className="section-label mb-6">Download the App</p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-8">
                Your health, in your pocket. <em className="text-primary">Coming soon.</em>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
                The ZydaCare mobile app will bring the full power of our healthcare platform to your fingertips. Book doctors, consult remotely, order medications, and manage your health — all from one app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative">
                  <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-6 py-4 opacity-60 cursor-not-allowed">
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

                <div className="relative">
                  <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-6 py-4 opacity-60 cursor-not-allowed">
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

              <p className="text-sm text-muted-foreground">
                We're working hard to bring ZydaCare to your device. In the meantime, explore our{" "}
                <Link to="/services" className="text-primary hover:underline">services</Link>{" "}
                or <Link to="/contact" className="text-primary hover:underline">contact us</Link> to learn more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-[540px] rounded-[3rem] border-[6px] border-foreground bg-card flex flex-col items-center justify-center p-8">
                  <Smartphone size={48} className="text-primary mb-6" />
                  <h3 className="font-heading text-3xl text-foreground text-center mb-3">ZydaCare</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed mb-8">
                    One app for all your healthcare needs.
                  </p>
                  <div className="w-full space-y-3">
                    {["Book Doctors", "Telemedicine", "Order Meds", "AI Guidance", "Health Records"].map((f) => (
                      <div key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-4 bg-primary rounded-full shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-5 py-2 rounded-full">
                  Launching Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What the App Will Offer */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="section-label mb-4">App Features</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
              Everything you need, one tap away.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card p-8"
              >
                <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
            <div className="bg-card p-8 flex flex-col items-center justify-center text-center">
              <Bell size={24} className="text-primary mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Want to know when the app launches?{" "}
                <Link to="/contact" className="text-primary hover:underline">Contact us</Link> and we'll notify you.
              </p>
            </div>
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
              Can't wait for the app?
            </h2>
            <p className="text-background/60 text-lg mb-10 leading-relaxed">
              While we finalize the mobile app, you can explore our services and get in touch with us directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-8 py-4 text-sm font-semibold text-background hover:border-background/50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Download;
