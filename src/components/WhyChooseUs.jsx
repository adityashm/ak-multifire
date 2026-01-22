import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, Shield, DollarSign, Radio } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'NICET Level II Certified Technicians',
      description: 'All technicians certified to NFPA standards with ongoing training and expertise.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      title: 'NFPA 72 Code Expertise',
      description: 'Fully compliant with National Fire Alarm Code ensuring safety and legal adherence.',
      color: 'from-primary to-accent',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Response',
      description: 'Rapid response team available around the clock for urgent fire safety needs.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Comprehensive Warranty',
      description: 'Industry-leading warranty on all installations with guaranteed workmanship.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with detailed estimates in INR. No hidden charges or surprises.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Radio,
      title: 'UL Listed Central Station Monitoring',
      description: 'Redundant monitoring centers for maximum reliability and rapid emergency dispatch.',
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  const certifications = [
    'Honeywell Notifier Series',
    'Siemens Cerberus PRO',
    'Silent Knight',
    'Fire-Lite',
    'Edwards EST',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Why MultiFire System
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Your Trusted Fire Safety Partner
          </h2>
          <p className="text-lg text-gray-600">
            We combine cutting-edge technology, certified expertise, and unwavering commitment to
            protect lives and property across Delhi NCR.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${reason.color} rounded-xl mb-4`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy to-navy-dark rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Factory-Trained on Major Brands</h3>
              <p className="text-gray-300 mb-6">
                Our technicians are certified and factory-trained on all major fire alarm system
                manufacturers, ensuring expert installation and maintenance.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium border border-white/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-accent mb-2" />
                <p className="text-2xl font-bold mb-1">Licensed</p>
                <p className="text-sm text-gray-300">State Certified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Award className="w-8 h-8 text-success mb-2" />
                <p className="text-2xl font-bold mb-1">Insured</p>
                <p className="text-sm text-gray-300">Full Coverage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-primary-light mb-2" />
                <p className="text-2xl font-bold mb-1">10+ Years</p>
                <p className="text-sm text-gray-300">Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Radio className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-2xl font-bold mb-1">24/7</p>
                <p className="text-sm text-gray-300">Monitoring</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
