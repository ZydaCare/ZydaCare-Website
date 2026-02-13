import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="ZydaCare" className="h-12 w-12" />
          <span className="font-body text-lg font-bold tracking-tight text-foreground">
            Zyda<span className="text-primary">Care</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/download"
          className="hidden md:inline-flex items-center justify-center rounded-full border-2 border-foreground px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-foreground hover:bg-foreground hover:text-background transition-all"
        >
          Download App
        </Link>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border px-6 pb-6 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/download"
            onClick={() => setOpen(false)}
            className="mt-3 block w-full text-center rounded-full border-2 border-foreground px-5 py-2.5 text-sm font-semibold text-foreground"
          >
            Download App
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
