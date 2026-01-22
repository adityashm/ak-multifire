import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Restaurant Manager',
      title: 'Manager',
      company: 'McDonald\'s Vasundhara, Ghaziabad',
      rating: 5,
      text: 'MultiFire System completed our restaurant fire safety installation professionally without affecting our business hours. The kitchen suppression system and alarm integration work flawlessly. Highly recommended for commercial food establishments.',
      industry: 'Restaurant/QSR',
      date: 'December 2025',
    },
    {
      name: 'Banquet Owner',
      title: 'Owner',
      company: 'Opulent by Miriya, Ghaziabad',
      rating: 5,
      text: 'The fire safety system gives our clients complete peace of mind during their special events. MultiFire System understood the unique requirements of a large banquet hall with high occupancy. The voice evacuation system is excellent.',
      industry: 'Hospitality/Events',
      date: 'November 2025',
    },
    {
      name: 'Building Manager',
      title: 'Building Manager',
      company: 'Miriya Vaishali Commercial Complex',
      rating: 5,
      text: 'Perfect solution for our multi-tenant building. Each business has control while we maintain safety oversight with centralized monitoring. MultiFire System expertise in commercial complexes is unmatched in Ghaziabad.',
      industry: 'Commercial Real Estate',
      date: 'October 2025',
    },
    {
      name: 'Restaurant Owner',
      title: 'Owner',
      company: 'Grand Piyiza, Ghaziabad',
      rating: 5,
      text: 'The kitchen suppression system is exactly what we needed for our busy restaurant. Installation was quick, professional, and met all fire safety regulations. Our insurance costs went down significantly after the installation.',
      industry: 'Restaurant',
      date: 'September 2025',
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Chief Administrator',
      company: 'Multi-Specialty Hospital, Greater Kailash',
      rating: 5,
      text: 'Working with MultiFire System for our hospital fire safety was exceptional. They understood the critical nature of healthcare facilities and ensured zero disruption during installation. The 24/7 monitoring gives us complete peace of mind.',
      industry: 'Healthcare',
      date: 'August 2025',
    },
    {
      name: 'School Principal',
      title: 'Principal',
      company: 'Educational Campus, Dwarka',
      rating: 5,
      text: 'The voice evacuation system installed by MultiFire System has proven invaluable during our fire drills. The multilingual alerts ensure all students and staff can respond quickly. Highly recommend for educational institutions.',
      industry: 'Education',
      date: 'July 2025',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by 500+ businesses across Delhi NCR for fire safety excellence
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl text-gray-700 text-center leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Client Info */}
              <div className="text-center">
                <p className="font-bold text-navy text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
                <div className="flex justify-center items-center space-x-4 mt-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonials[currentIndex].industry}
                  </span>
                  <span className="text-gray-500 text-sm">{testimonials[currentIndex].date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-primary hover:text-white text-navy p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-primary hover:text-white text-navy p-3 rounded-full shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-3xl font-bold text-navy mb-1">4.9/5.0</p>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-4xl font-bold text-success mb-2">100%</p>
            <p className="text-gray-600">First-Time Pass Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
