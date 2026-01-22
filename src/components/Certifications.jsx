import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: 'NICET Certification',
      subtitle: 'Fire Alarm Systems Level II',
      description: 'National Institute for Certification in Engineering Technologies',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'NFPA Compliance',
      subtitle: 'NFPA 72 & NFPA 25',
      description: 'National Fire Protection Association Standards',
      color: 'from-primary to-accent',
    },
    {
      icon: FileCheck,
      title: 'State Licensing',
      subtitle: 'Delhi Fire Services Licensed',
      description: 'Authorized Fire Alarm Contractor',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: CheckCircle,
      title: 'Insurance Coverage',
      subtitle: 'Liability & Workers Comp',
      description: 'Comprehensive business insurance coverage',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const manufacturers = [
    { name: 'Honeywell', subtitle: 'Notifier Series' },
    { name: 'Siemens', subtitle: 'Cerberus PRO' },
    { name: 'Silent Knight', subtitle: 'Authorized Dealer' },
    { name: 'Fire-Lite', subtitle: 'Certified Installer' },
    { name: 'Edwards EST', subtitle: 'Factory Trained' },
    { name: 'Bosch', subtitle: 'Security Systems' },
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Credentials & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Industry-Recognized Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Anmol Kumar Sharma and the MultiFire System team hold industry-recognized certifications
            ensuring the highest standards of fire safety installation and maintenance.
          </p>
        </motion.div>

        {/* Main Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-br ${cert.color} rounded-xl`}>
                    <cert.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy mb-2">{cert.title}</h3>
                <p className="text-primary font-semibold mb-3">{cert.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-gray-600">{cert.description}</p>

                {/* Verified Badge */}
                <div className="mt-4 inline-flex items-center space-x-1 text-xs text-success font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manufacturer Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Manufacturer Certifications
            </h3>
            <p className="text-gray-600">
              Factory-trained and authorized to install and service premium fire alarm systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {manufacturers.map((mfr, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-primary transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-bold text-navy text-sm mb-1">{mfr.name}</p>
                  <p className="text-xs text-gray-500">{mfr.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">100% NFPA 72 Compliance Rate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
