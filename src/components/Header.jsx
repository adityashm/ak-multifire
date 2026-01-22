import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Phone, Menu, X, ChevronDown, FileText, Shield, BookOpen } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Fire Alarm Installation', href: '#services' },
    { name: 'Inspection & Testing', href: '#services' },
    { name: '24/7 Monitoring', href: '#services' },
    { name: 'Fire Suppression Systems', href: '#services' },
  ];

  const resources = [
    { name: 'Blog', href: '#blog', icon: FileText },
    { name: 'Safety Tips', href: '#safety', icon: Shield },
    { name: 'FAQs', href: '#faq', icon: BookOpen },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-navy">MultiFire System</h1>
                <p className="text-xs text-gray-600">Your Safety, Our Priority</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-navy hover:text-primary transition-colors font-medium">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-navy hover:text-primary transition-colors font-medium">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                    >
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 hover:bg-gray-50 text-navy hover:text-primary transition-colors"
                        >
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#about" className="text-navy hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#certifications" className="text-navy hover:text-primary transition-colors font-medium">
                Certifications
              </a>
              <a href="#portfolio" className="text-navy hover:text-primary transition-colors font-medium">
                Projects
              </a>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-navy hover:text-primary transition-colors font-medium">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                    >
                      {resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.href}
                          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 text-navy hover:text-primary transition-colors"
                        >
                          <resource.icon className="w-4 h-4" />
                          <span>{resource.name}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#contact" className="text-navy hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919313624114"
                className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-all animate-pulse-slow"
              >
                <Phone className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-xs">24/7 Emergency</p>
                  <p className="font-bold">+91-9313624114</p>
                </div>
              </a>
              <a href="#contact" className="btn-secondary">
                Get Free Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-custom py-4 space-y-4">
                <Link to="/" className="block py-2 text-navy hover:text-primary font-medium">
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-700">Services</p>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block py-2 pl-4 text-navy hover:text-primary"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
                <a href="#about" className="block py-2 text-navy hover:text-primary font-medium">
                  About Us
                </a>
                <a href="#certifications" className="block py-2 text-navy hover:text-primary font-medium">
                  Certifications
                </a>
                <a href="#portfolio" className="block py-2 text-navy hover:text-primary font-medium">
                  Projects
                </a>
                <a href="#contact" className="block py-2 text-navy hover:text-primary font-medium">
                  Contact
                </a>
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+919313624114"
                    className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-3 rounded-lg w-full"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-bold">+91-9313624114</span>
                  </a>
                  <a href="#contact" className="btn-secondary w-full text-center block">
                    Get Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
