import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Fire Alarm Installation', href: '#services' },
    { name: 'Inspection & Testing', href: '#services' },
    { name: '24/7 Monitoring', href: '#services' },
    { name: 'Fire Suppression', href: '#services' },
    { name: 'System Upgrades', href: '#services' },
    { name: 'Training & Consultation', href: '#services' },
  ];

  const resources = [
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Safety Tips', href: '#safety' },
    { name: 'Compliance Resources', href: '#compliance' },
    { name: 'Downloads', href: '#downloads' },
  ];

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-dark to-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MultiFire System</h3>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">Your Safety, Our Priority</p>
            <p className="text-gray-400 text-sm mb-4">
              NFPA 72 compliant fire safety solutions across Delhi NCR. Protecting lives and
              property with cutting-edge technology.
            </p>
            <p className="text-gray-300 text-sm font-semibold">
              Owned and operated by Anmol Kumar Sharma
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+919999999999"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    +91 99999 99999
                  </a>
                  <span className="text-xs text-gray-500">Business</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <a
                    href="tel:+918888888888"
                    className="text-accent hover:text-accent-light transition-colors text-sm font-semibold block"
                  >
                    +91 88888 88888
                  </a>
                  <span className="text-xs text-gray-500">24/7 Emergency</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:ak.multifire@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  ak.multifire@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Delhi NCR, India</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#facebook"
                  className="bg-white/10 hover:bg-primary p-2 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#linkedin"
                  className="bg-white/10 hover:bg-primary p-2 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#instagram"
                  className="bg-white/10 hover:bg-primary p-2 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#twitter"
                  className="bg-white/10 hover:bg-primary p-2 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} MultiFire System. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span>Licensed & Insured</span>
              </span>
              <span>•</span>
              <span>NICET Certified</span>
              <span>•</span>
              <span>NFPA 72 Compliant</span>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Website designed for excellence in fire safety
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
