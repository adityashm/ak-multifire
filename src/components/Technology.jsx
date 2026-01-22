import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Cloud, Smartphone, TrendingUp, Zap } from 'lucide-react';

const Technology = () => {
  const brands = [
    { name: 'Honeywell', products: 'Notifier, Silent Knight, Fire-Lite' },
    { name: 'Siemens', products: 'Cerberus PRO Series' },
    { name: 'Edwards', products: 'EST, iO Series' },
    { name: 'DMP', products: 'Fire Alarm Panels' },
    { name: 'Bosch', products: 'Security & Fire Solutions' },
    { name: 'Kidde', products: 'Budget Solutions' },
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'Smart Mobile Integration',
      description: 'Monitor and control your fire alarm system from anywhere via mobile app',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Early Detection',
      description: 'Intelligent algorithms reduce false alarms and detect threats faster',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Monitoring',
      description: 'Real-time system status and alerts accessible from cloud platforms',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Wifi,
      title: 'Wireless & Hybrid Systems',
      description: 'Flexible installation without extensive rewiring or disruption',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Maintenance',
      description: 'AI predicts component failures before they occur for zero downtime',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'IoT Sensor Networks',
      description: 'Interconnected smart sensors for comprehensive coverage',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy-dark to-gray-900 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Technology & Equipment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Cutting-Edge Fire Safety Technology
          </h2>
          <p className="text-lg text-gray-300">
            We install and service premium fire alarm systems from world-leading manufacturers,
            integrated with the latest smart technology.
          </p>
        </motion.div>

        {/* Modern Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-lg mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Premium Brands We Install</h3>
            <p className="text-gray-300">
              Factory-trained and certified on industry-leading fire alarm systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl p-6 text-center border border-white/20"
              >
                <h4 className="text-2xl font-bold text-accent mb-2">{brand.name}</h4>
                <p className="text-sm text-gray-300">{brand.products}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-success/20 text-success px-6 py-3 rounded-full">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Latest 2024/2025 Technology Standards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
