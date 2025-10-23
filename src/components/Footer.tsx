import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import tdbLogo from "@/assets/tdb-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={tdbLogo} 
                alt="Tara & Dem Boyz Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Tara & Dem Boyz
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional janitorial services for commercial and residential clients 
              across the Southeast coastal region. Neighbors you can trust, service you can count on.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Services
              </Link>
              <Link
                to="/reviews"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Reviews
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <span>Residential Cleaning</span>
              <span>Commercial Cleaning</span>
              <span>Floor & Carpet Care</span>
              <span>Window Cleaning</span>
              <span>Deep Sanitization</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-5 h-5" />
                <span>912-259-2825</span>
              </a>
              <a
                href="mailto:info@taraanddemboyz.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-5 h-5" />
                <span>info@taraanddemboyz.com</span>
              </a>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Southeast Coastal Region</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Tara & Dem Boyz. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;