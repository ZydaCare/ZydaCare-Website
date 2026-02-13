import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-16 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="ZydaCare" className="h-12 w-12" />
            <span className="font-body text-[18px] font-bold text-foreground">
              Zyda<span className="text-primary">Care</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Digital Healthcare Infrastructure for Africa. Making quality healthcare accessible, affordable, and verifiable.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">Services</h4>
          <ul className="space-y-2.5">
            {["Doctor Booking", "Telemedicine", "Pharmacy", "AI Symptom Checker", "Health Monitoring"].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">Company</h4>
          <ul className="space-y-2.5">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Contact", to: "/contact" },
              { label: "Download App", to: "/download" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">Legal</h4>
          <ul className="space-y-2.5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} ZydaCare. All rights reserved.</p>
        <p>Built for Africa 🌍</p>
      </div>
    </div>
  </footer>
);

export default Footer;
