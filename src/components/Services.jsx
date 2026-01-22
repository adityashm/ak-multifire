import React from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Thermometer,
  Droplet,
  Bell,
  Wrench,
  Shield,
  ArrowUpCircle,
  Radio,
  GraduationCap,
  Factory,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: 'Fire Alarm System Installation',
      description:
        'Conventional and addressable systems with NFPA 72 compliant design. Custom layout and equipment selection tailored to your facility.',
      features: ['Addressable Systems', 'NFPA 72 Design', 'Custom Solutions'],
    },
    {
      icon: Thermometer,
      title: 'Smoke & Heat Detection Systems',
      description:
        'Intelligent smoke detectors, thermal imaging detection, air-sampling smoke detection (ASD), and carbon monoxide detection.',
      features: ['Intelligent Detection', 'Thermal Imaging', 'CO Detection'],
    },
    {
      icon: Droplet,
      title: 'Fire Suppression Systems',
      description:
        'Water-based sprinkler systems, clean agent suppression (eco-friendly), foam suppression, and pre-action systems.',
      features: ['Sprinkler Systems', 'Clean Agent', 'Pre-Action'],
    },
    {
      icon: Radio,
      title: 'Fire Alarm Monitoring (24/7)',
      description:
        'UL-listed central station monitoring with real-time alerts, emergency response coordination, and cellular/IP communication.',
      features: ['24/7 Monitoring', 'Real-Time Alerts', 'UL-Listed'],
    },
    {
      icon: Wrench,
      title: 'Inspection, Testing & Maintenance',
      description:
        'Annual NFPA 72 compliance testing, quarterly system inspections, preventive maintenance programs, and emergency repairs.',
      features: ['Annual Testing', 'Preventive Care', 'Emergency Repairs'],
    },
    {
      icon: Shield,
      title: 'Fire Safety Inspections & Compliance',
      description:
        'Building code compliance audits, NFPA standards assessment, AHJ coordination, and certification documentation.',
      features: ['Code Audits', 'NFPA Assessment', 'AHJ Coordination'],
    },
    {
      icon: ArrowUpCircle,
      title: 'System Upgrades & Retrofits',
      description:
        'Legacy system modernization, wireless fire alarm installation, smart technology integration, and energy-efficient upgrades.',
      features: ['Modernization', 'Wireless Systems', 'Smart Integration'],
    },
    {
      icon: Bell,
      title: 'Emergency Mass Notification',
      description:
        'Voice alarm systems, visual signaling devices, integrated communication platforms, and public address systems.',
      features: ['Voice Alarms', 'Visual Signals', 'PA Systems'],
    },
    {
      icon: GraduationCap,
      title: 'Fire Safety Training & Consultation',
      description:
        'Staff safety training programs, emergency evacuation planning, fire risk assessments, and compliance consultation.',
      features: ['Staff Training', 'Evacuation Plans', 'Risk Assessment'],
    },
    {
      icon: Factory,
      title: 'Special Hazard Protection',
      description:
        'Kitchen hood suppression, server room protection, industrial facility systems, and clean room fire protection.',
      features: ['Kitchen Suppression', 'Server Rooms', 'Industrial'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Comprehensive Fire Safety Services
          </h2>
          <p className="text-lg text-gray-600">
            From installation to maintenance, we provide end-to-end fire safety solutions compliant
            with NFPA 72 standards across Delhi NCR.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Fire Safety Solution?</h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Our expert team can design and implement tailored fire safety systems for your unique
              requirements. Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+919999999999"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all border-2 border-white/30"
              >
                Call: +91 99999 99999
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
