import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Heart,
  GraduationCap,
  ShoppingBag,
  Factory,
  Home,
  Warehouse,
  Landmark,
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Commercial Office Buildings',
      description: 'Complete fire safety solutions for corporate offices and business centers',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Healthcare & Medical Facilities',
      description: 'Specialized systems for hospitals, clinics, and medical centers',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Fire alarm systems for schools, colleges, and universities',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Restaurant Chains',
      description: 'Customized fire protection for retail stores and dining establishments',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Factory,
      title: 'Industrial & Manufacturing',
      description: 'Heavy-duty fire suppression for factories and production facilities',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Home,
      title: 'Multi-Family Residential',
      description: 'Comprehensive safety systems for apartment complexes and housing societies',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Warehouse,
      title: 'Warehouses & Distribution Centers',
      description: 'Large-scale fire detection and suppression for logistics facilities',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      icon: Landmark,
      title: 'Government & Municipal Buildings',
      description: 'Code-compliant fire safety for public sector facilities',
      color: 'from-indigo-600 to-blue-700',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Fire Safety Across All Sectors
          </h2>
          <p className="text-lg text-gray-600">
            From corporate offices to industrial facilities, we provide tailored fire safety solutions
            for diverse industries across Delhi NCR.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${industry.color} rounded-lg`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We've successfully implemented fire safety solutions for unique and specialized
              facilities. Contact us to discuss your specific requirements.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Discuss Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
