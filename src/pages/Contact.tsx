import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
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
            <p className="section-label mb-6">Contact Us</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-8">
              Let's talk about healthcare.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you're a patient seeking care, a doctor looking to expand your practice, a pharmacy wanting to go digital, an ambulance provider seeking dispatch integration, or an organization interested in partnership, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label mb-4">Get In Touch</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-8">
                We're here to help.
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1">Email Us</h3>
                    <a href="mailto:wecare@zydacare.com" className="text-primary hover:underline text-lg">
                      wecare@zydacare.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      For general inquiries, partnerships, emergency services coordination, and support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1">Location</h3>
                    <p className="text-lg text-foreground">Lagos, Nigeria</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Serving all of Nigeria, expanding across Africa.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  title: "For Patients",
                  desc: "Need help finding a doctor, ordering medications, or requesting emergency ambulance services? We're here for you.",
                  email: "wecare@zydacare.com",
                },
                {
                  title: "For Doctors",
                  desc: "Interested in joining our network of verified healthcare providers? Let's connect.",
                  email: "wecare@zydacare.com",
                },
                {
                  title: "For Pharmacies",
                  desc: "Want to list your pharmacy on our verified marketplace? We'd love to partner.",
                  email: "wecare@zydacare.com",
                },
                {
                  title: "For Ambulance Providers",
                  desc: "Looking to join our nationwide emergency network with digital dispatch and increased utilization? Let's talk.",
                  email: "wecare@zydacare.com",
                },
                {
                  title: "For Corporates & HMOs",
                  desc: "Looking for digital healthcare solutions including emergency response coordination for your employees or members? Let's discuss.",
                  email: "wecare@zydacare.com",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                  <a href={`mailto:${item.email}`} className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                    {item.email} <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="section-label mb-4">Partnerships</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
              Partner with ZydaCare.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're actively seeking partnerships with hospitals, clinics, pharmacies, ambulance services, health insurers, HMOs, corporate organizations, and government health agencies. Together, we can build a healthier Africa with better emergency response.
            </p>
            <a
              href="mailto:wecare@zydacare.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:opacity-80 transition-opacity"
            >
              Reach Out <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 lg:py-32 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-background leading-[1.05] mb-6">
              Get the ZydaCare app.
            </h2>
            <p className="text-background/60 text-lg mb-10 leading-relaxed">
              Our mobile app with emergency ambulance services is coming soon to iOS and Android. Stay tuned for the launch!
            </p>
            <Link
              to="/download"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
