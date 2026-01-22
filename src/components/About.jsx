import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '24/7', label: 'Emergency Support', icon: Heart },
    { number: '100%', label: 'NFPA 72 Compliance', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Users },
  ];

  const values = [
    {
      title: 'Safety First',
      description: 'Every decision prioritizes the protection of lives and property',
      icon: '🛡️',
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent service with no hidden costs or compromises',
      icon: '💎',
    },
    {
      title: 'Innovation',
      description: 'Leveraging latest technology for superior fire safety solutions',
      icon: '🚀',
    },
    {
      title: 'Customer Focus',
      description: 'Personalized service tailored to your unique safety requirements',
      icon: '🤝',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              About MultiFire System
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
              Protecting Delhi NCR for Over a Decade
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by <span className="font-semibold text-navy">Anmol Kumar Sharma</span>,
                MultiFire System has grown from a vision of uncompromising fire safety to become
                Delhi NCR's most trusted fire alarm and life safety systems provider.
              </p>

              <p>
                With over 10 years of industry experience and NICET Level II certification, our team
                combines technical expertise with genuine commitment to protecting lives and property.
                We've successfully completed 500+ projects across commercial, industrial, healthcare,
                and educational facilities.
              </p>

              <p>
                Every system we install meets or exceeds NFPA 72 standards, and our 24/7 emergency
                response team ensures you're never alone when it matters most.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-l-4 border-primary">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy mb-2">Our Mission</h4>
                  <p className="text-gray-700">
                    To protect lives and property through cutting-edge fire safety solutions and
                    uncompromising service excellence across Delhi NCR.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-white text-center shadow-xl"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-accent" />
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="text-xl font-bold text-navy mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy to-navy-dark rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/result_0.jpeg"
                  alt="Anmol Kumar Sharma, Founder of MultiFire System"
                  className="object-cover w-full h-full rounded-2xl border-4 border-white shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-2">Anmol Kumar Sharma</h3>
              <p className="text-accent font-semibold mb-4">Founder & Principal</p>

              <p className="text-gray-300 leading-relaxed mb-4">
                With NICET Level II certification and over a decade of hands-on experience in fire
                safety systems, Anmol founded MultiFire System with a singular vision: to provide
                Delhi NCR with uncompromising fire safety solutions that truly protect lives.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                His commitment to excellence, technical expertise, and personal involvement in every
                project has established MultiFire System as the region's most trusted name in fire
                safety.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm">NICET Level II</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-sm">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">500+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
