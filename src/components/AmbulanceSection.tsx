import { motion } from "framer-motion";
import { Clock, MapPin, Shield, Users } from "lucide-react";

const AmbulanceSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <p className="section-label mb-4">Emergency Services</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
            When every second counts, we're there.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our nationwide ambulance network provides instant emergency response with real-time tracking and direct hospital routing. One tap connects you to the nearest verified ambulance service.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Fast Response</h3>
                <p className="text-sm text-muted-foreground">Average response time under 15 minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Nationwide Coverage</h3>
                <p className="text-sm text-muted-foreground">Available across all 36 Nigerian states</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Shield size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground mb-1">Verified Providers</h4>
                <p className="text-sm text-muted-foreground">All ambulance services are licensed, insured, and verified for quality care.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Users size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground mb-1">24/7 Dispatch</h4>
                <p className="text-sm text-muted-foreground">Round-the-clock coordination center for emergency requests.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-6"
        >
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center relative">
              <img 
                  src="https://plus.unsplash.com/premium_photo-1723708841860-5b00cc402a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1idWxhbmNlfGVufDB8fDB8fHww"
                  alt="Emergency Ambulance Service" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              <div className="relative z-10 text-center p-8 bg-black/20 backdrop-blur-sm lg:w-auto w-[350px] lg:mt-0 -mt-10 rounded-[8px] lg:rounded-[0px]">
                <h3 className="font-heading text-2xl text-white mb-2">Emergency Ambulance</h3>
                <p className="text-sm text-white max-w-xs mx-auto">
                  Instant dispatch • Real-time tracking • Verified providers
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-4 text-center">
              <p className="font-heading text-3xl text-primary mb-1">24/7</p>
              <p className="text-xs font-medium">Emergency Response</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-4 text-center">
              <p className="font-heading text-3xl text-primary mb-1">15min</p>
              <p className="text-xs font-medium">Avg. Response Time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AmbulanceSection;
