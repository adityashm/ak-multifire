import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, CheckCircle, Users } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: Award, text: 'NICET Certified' },
    { icon: Shield, text: 'NFPA 72 Compliant' },
    { icon: CheckCircle, text: 'Licensed & Insured' },
    { icon: Clock, text: '24/7 Emergency Response' },
    { icon: Users, text: '500+ Projects Completed' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-navy via-navy-dark to-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070"
          alt="Fire Safety System"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              top: `${-50 + i * 20}%`,
              right: `${-10 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-20 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-semibold">
                Delhi NCR's Trusted Fire Safety Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Protecting Lives Through{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Advanced Fire Safety
              </span>{' '}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300"
            >
              NFPA 72 Compliant Fire Alarm Systems | 24/7 Emergency Service | NICET Certified Technicians
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Founded and led by <span className="font-semibold text-white">Anmol Kumar Sharma</span></span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="btn-primary text-center text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all border-2 border-white/30"
              >
                <Clock className="w-5 h-5 animate-pulse-slow" />
                <div className="text-left">
                  <p className="text-xs text-gray-300">Call Emergency</p>
                  <p className="font-bold">+91 99999 99999</p>
                </div>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <badge.icon className="w-8 h-8 text-primary-light" />
                  <p className="text-xs font-medium">{badge.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Badges/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px]">
              {/* Certification Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 bg-white rounded-2xl shadow-2xl p-6 w-56"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <Shield className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy">NICET</p>
                    <p className="text-sm text-gray-600">Level II Certified</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-40 left-0 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl p-6 w-64"
              >
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-white/90">Successful Projects</p>
                <p className="text-sm text-white/70 mt-2">Across Delhi NCR</p>
              </motion.div>

              {/* NFPA Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-20 right-10 bg-white rounded-2xl shadow-2xl p-6 w-52"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-navy">NFPA 72</p>
                    <p className="text-sm text-gray-600">100% Compliant</p>
                  </div>
                </div>
              </motion.div>

              {/* 24/7 Badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-10 bg-navy rounded-2xl shadow-2xl p-6 w-48 text-white"
              >
                <Clock className="w-10 h-10 mb-3 text-accent" />
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-gray-300">Emergency Support</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
