import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'How often do fire alarms need to be tested in Delhi?',
          a: 'According to NFPA 72 and local Delhi fire safety regulations, fire alarm systems must be tested annually. Additionally, visual inspections should be conducted weekly, and functional tests of detectors, notification devices, and control panels should be performed quarterly. We offer comprehensive testing and maintenance packages to ensure your system stays compliant.'
        },
        {
          q: 'What is NFPA 72 and why does it matter?',
          a: 'NFPA 72 is the National Fire Alarm and Signaling Code, which provides requirements for the installation, performance, testing, inspection, and maintenance of fire alarm systems. Compliance with NFPA 72 ensures your fire safety system is reliable, meets international standards, and provides adequate protection. It\'s also often required by insurance companies and regulatory authorities in Delhi NCR.'
        },
        {
          q: 'How long does fire alarm installation take?',
          a: 'Installation time varies based on building size and system complexity. A small office (2,000 sq ft) typically takes 2-3 days. Medium buildings (10,000 sq ft) take 1-2 weeks. Large commercial or industrial facilities may take 3-6 weeks. We provide a detailed timeline during your free consultation after assessing your specific requirements.'
        },
        {
          q: 'Do I need a fire alarm in my commercial building?',
          a: 'Yes, fire alarm systems are mandatory for most commercial buildings in Delhi NCR as per the NBC (National Building Code) and local fire safety regulations. This includes offices, retail spaces, restaurants, hotels, hospitals, schools, and industrial facilities. Non-compliance can result in hefty fines and insurance invalidation. We can help assess your specific requirements.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What\'s the difference between smoke detectors and fire alarms?',
          a: 'Smoke detectors are sensors that detect smoke particles in the air. Fire alarms are complete systems that include detectors (smoke, heat, flame), notification devices (bells, sirens, strobes), control panels, and often monitoring capabilities. A fire alarm system integrates multiple smoke detectors throughout a building and provides centralized control, monitoring, and alerts.'
        },
        {
          q: 'How do wireless fire alarm systems work?',
          a: 'Wireless fire alarm systems use radio frequency (RF) signals to communicate between devices instead of physical wiring. Detectors, call points, and sounders transmit signals to the control panel wirelessly. They\'re ideal for heritage buildings, renovations, or locations where running cables is difficult. Modern wireless systems are just as reliable as wired ones, with encrypted communication and battery backup in each device.'
        },
        {
          q: 'Can I integrate my fire alarm with building automation?',
          a: 'Yes! Modern fire alarm systems can integrate with building management systems (BMS) through protocols like BACnet or Modbus. This allows for automatic responses such as elevator recall, HVAC shutdown, door unlocking, and access control integration. We specialize in integrated solutions that enhance overall building safety and efficiency.'
        }
      ]
    },
    {
      category: 'Service & Pricing',
      questions: [
        {
          q: 'How much does annual fire alarm maintenance cost?',
          a: 'Annual maintenance contracts typically range from ₹15,000-₹50,000 for small offices to ₹1,00,000+ for large commercial buildings, depending on system size and complexity. Our maintenance includes quarterly inspections, annual comprehensive testing, battery replacements, sensor cleaning, and 24/7 emergency support. Contact us for a customized quote based on your specific system.'
        },
        {
          q: 'Can I upgrade my existing fire alarm system?',
          a: 'Absolutely! We specialize in system upgrades and retrofits. You can upgrade from conventional to addressable systems, add wireless zones, integrate with modern monitoring, or expand coverage. We\'ll assess your current system and recommend cost-effective upgrade paths that maintain compliance while improving functionality. Many upgrades can be done without complete replacement.'
        },
        {
          q: 'Do you offer 24/7 emergency repair service?',
          a: 'Yes! We provide 24/7 emergency service with a guaranteed 2-hour response time within Delhi NCR. Our NICET-certified technicians carry common replacement parts and can diagnose and repair most issues on the first visit. Emergency service is included in our annual maintenance contracts, or available on a call-out basis with transparent pricing.'
        },
        {
          q: 'What happens if my fire alarm fails inspection?',
          a: 'If your system fails inspection, we provide a detailed report of deficiencies and required repairs. We\'ll prioritize critical issues affecting life safety and work with you to create a compliance roadmap. Most issues can be resolved within 1-2 weeks. We handle all documentation for re-inspection and ensure you meet all NFPA 72 and local code requirements.'
        }
      ]
    },
    {
      category: 'Certification & Compliance',
      questions: [
        {
          q: 'What certifications should my fire alarm contractor have?',
          a: 'Look for NICET (Level II or higher) certification, NFPA 72 training, manufacturer certifications from major brands (Honeywell, Siemens, Edwards), and valid electrical/fire safety licenses. MultiFire System holds NICET Level II certification, is trained and certified by all major manufacturers, and maintains full licensing and insurance. Always verify credentials before hiring.'
        },
        {
          q: 'What is a fire alarm monitoring service?',
          a: 'Fire alarm monitoring is 24/7 professional supervision of your system by a UL-listed central station. When your alarm activates, the monitoring center receives an immediate signal, verifies the emergency, and dispatches the fire department. This ensures rapid response even when your building is unoccupied. We offer both local and cloud-based monitoring solutions.'
        },
        {
          q: 'How do I know if my fire alarm system is compliant?',
          a: 'Compliance requires three elements: 1) System meets NFPA 72 design standards, 2) Annual testing and inspection records are up to date, 3) All deficiencies are addressed promptly. We provide comprehensive compliance audits with detailed reports showing code compliance status, testing history, and any required actions. Schedule a free compliance assessment today.'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Your Fire Safety Questions
            <span className="text-primary"> Answered</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get instant answers to common questions about fire alarm installation, compliance, 
            and maintenance in Delhi NCR
          </p>
        </motion.div>

        {/* FAQ Categories */}
        {faqs.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              {category.category} Questions
            </h3>

            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const currentIndex = questionIndex++;
                return (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(currentIndex)}
                      className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                      aria-expanded={openIndex === currentIndex}
                    >
                      <span className="font-semibold text-navy pr-8 text-lg">
                        {faq.q}
                      </span>
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {openIndex === currentIndex ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openIndex === currentIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Our NICET-certified fire safety experts are here to help. Get personalized answers 
            and a free consultation for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-secondary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:+919313624114"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +91-9313624114
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
