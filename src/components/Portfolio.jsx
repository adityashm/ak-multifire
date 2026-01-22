import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      client: 'McDonald\'s Restaurant',
      location: 'Sector 1, Vasundhara, Ghaziabad, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1594723838688-4334e64d4f51?q=80&w=2070',
      scope: 'Complete commercial building fire alarm and kitchen suppression system',
      system: 'Addressable Fire Alarm with Kitchen Hood Suppression',
      challenge:
        'High-traffic restaurant in commercial complex requiring minimal disruption during installation',
      solution:
        'After-hours installation with integrated kitchen suppression and quick-response detection',
      result: 'Passed Delhi Fire Services inspection. Zero service interruption. Full compliance achieved.',
      testimonial: '"MultiFire System completed the installation professionally without affecting our business hours."',
      author: 'Restaurant Manager, McDonald\'s Vasundhara',
    },
    {
      client: 'Opulent by Miriya Banquet Hall',
      location: 'Ghaziabad, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c09?' +
'q=80&w=2096',
      scope: 'Banquet hall fire safety system with emergency evacuation',
      system: 'Addressable System with Voice Evacuation',
      challenge:
        'Large event space with high occupancy requiring rapid detection and clear evacuation alerts',
      solution:
        'Strategic detector placement with multilingual voice evacuation system for large gatherings',
      result: 'Full compliance with banquet hall safety regulations. Successfully handles 500+ guest events.',
      testimonial: '"The fire safety system gives our clients complete peace of mind during their special events."',
      author: 'Owner, Opulent Banquet Hall',
    },
    {
      client: 'Miriya Vaishali Commercial Complex',
      location: 'Vaishali, Ghaziabad',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      scope: 'Multi-tenant commercial building fire alarm system',
      system: 'Honeywell Addressable System with Zone Management',
      challenge:
        'Multiple businesses in single complex requiring individual zone control and centralized monitoring',
      solution:
        'Addressable system with tenant-specific zones and centralized fire panel for building management',
      result: 'Achieved NOC from fire department. Individual tenant control with master override capability.',
      testimonial: '"Perfect solution for our multi-tenant building. Each business has control while we maintain safety oversight."',
      author: 'Building Manager, Miriya Vaishali',
    },
    {
      client: 'Grand Piyiza Restaurant',
      location: 'Ghaziabad, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074',
      scope: 'Restaurant fire alarm and kitchen fire suppression',
      system: 'Conventional Fire Alarm with Automatic Kitchen Suppression',
      challenge:
        'Active commercial kitchen with multiple cooking stations requiring comprehensive fire protection',
      solution:
        'Hood suppression system integrated with building alarm and automatic gas shutoff',
      result: 'Full fire safety compliance. Insurance premium reduced. Zero kitchen fire incidents.',
      testimonial: '"The kitchen suppression system is exactly what we needed. Installation was quick and professional."',
      author: 'Owner, Grand Piyiza',
    },
    {
      client: 'Multi-Specialty Hospital',
      location: 'Greater Kailash, Delhi',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053',
      scope: 'Fire alarm, suppression, and mass notification systems',
      system: 'Siemens Cerberus PRO with Clean Agent Suppression',
      challenge:
        'Critical healthcare facility requiring 100% uptime during installation',
      solution:
        'Phased installation during off-hours with redundant monitoring during transitions',
      result: 'Zero service interruption. NABH compliance certification achieved.',
      testimonial: '"MultiFire System ensured patient safety was never compromised during installation."',
      author: 'Chief Administrator, Hospital',
    },
    {
      client: 'Educational Campus (5 Buildings)',
      location: 'Dwarka, Delhi',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086',
      scope: 'Campus-wide fire detection and evacuation system',
      system: 'Silent Knight Addressable with Voice Evacuation',
      challenge:
        'Large campus with diverse building types and high occupancy',
      solution:
        'Centralized monitoring with building-specific zones and multilingual voice alerts',
      result: 'Successfully evacuated 2,000+ students in drill. CBSE safety compliant.',
      testimonial: '"The voice evacuation system proved invaluable during our fire drills."',
      author: 'Principal, Educational Institution',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Featured Projects & Case Studies
          </h2>
          <p className="text-lg text-gray-600">
            Real-world fire safety solutions that protect lives and property across Delhi NCR
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start space-x-2 mb-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                      {project.client}
                    </h3>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Scope
                      </p>
                      <p className="text-sm text-gray-700">{project.scope}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        System Installed
                      </p>
                      <p className="text-sm text-gray-700">{project.system}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Challenge
                      </p>
                      <p className="text-sm text-gray-700">{project.challenge}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-gray-700">{project.solution}</p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-success/10 rounded-lg p-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-success font-medium">{project.result}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div className="border-l-4 border-primary pl-4 mb-4">
                      <p className="text-sm italic text-gray-600 mb-2">{project.testimonial}</p>
                      <p className="text-xs font-semibold text-gray-500">— {project.author}</p>
                    </div>
                  )}

                  {/* View Details Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <a href="#contact" className="btn-primary inline-block">
            Request Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
