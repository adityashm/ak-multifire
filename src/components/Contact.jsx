import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, Loader } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("https://formspree.io/f/xreewnyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          propertyType: data.propertyType,
          contactMethod: data.contactMethod,
          message: data.message,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitError("Network error. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Request Free Consultation
          </h2>
          <p className="text-lg text-gray-600">
            Let's discuss your fire safety requirements. Our team responds within 2 hours during
            business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-success/10 border border-success rounded-lg p-4 flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-success" />
                  <p className="text-success font-semibold">
                    Thank you! We'll contact you within 2 hours.
                  </p>
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-red-100 border border-red-400 rounded-lg p-4 flex items-center space-x-3"
                >
                  <span className="text-red-600 font-semibold">{submitError}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid phone number (10 digits)',
                      },
                    })}
                    type="tel"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="9313624114"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register('serviceType', { required: 'Please select a service type' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  >
                    <option value="">Select a service</option>
                    <option value="new-installation">New Installation</option>
                    <option value="system-inspection">System Inspection</option>
                    <option value="repair-service">Repair Service</option>
                    <option value="monitoring-services">Monitoring Services</option>
                    <option value="emergency-service">Emergency Service</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                  )}
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register('propertyType', { required: 'Please select a property type' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.propertyType ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  >
                    <option value="">Select property type</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="residential">Residential (Multi-Family)</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="educational">Educational</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.propertyType && (
                    <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        {...register('contactMethod')}
                        type="radio"
                        value="email"
                        className="text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <span className="text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register('contactMethod')}
                        type="radio"
                        value="phone"
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register('contactMethod')}
                        type="radio"
                        value="whatsapp"
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your fire safety requirements..."
                  ></textarea>
                </div>

                {/* Agreement Checkbox */}
                <div>
                  <label className="flex items-start space-x-2">
                    <input
                      {...register('agreement', {
                        required: 'You must agree to be contacted',
                      })}
                      type="checkbox"
                      className="mt-1 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to be contacted by MultiFire System regarding my inquiry
                      <span className="text-primary">*</span>
                    </span>
                  </label>
                  {errors.agreement && (
                    <p className="text-red-500 text-sm mt-1">{errors.agreement.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Request Free Consultation</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Company Info */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">MultiFire System</h4>
                    <p className="text-gray-600">Anmol Kumar Sharma, Owner</p>
                    <p className="text-gray-600">Delhi NCR, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Phone</h4>
                    <a
                      href="tel:+919313624114"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +91-9313624114
                    </a>
                    <p className="text-primary font-semibold mt-1">
                      24/7 Emergency: +91-9313624114
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Email</h4>
                    <a
                      href="mailto:ak.multifire@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      ak.multifire@gmail.com
                    </a>
                    <a
                      href="mailto:contact@multifiresystem.com"
                      className="text-gray-600 hover:text-primary transition-colors block"
                    >
                      contact@multifiresystem.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency Only</p>
                    <p className="text-success font-semibold mt-2">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-8 h-8" />
                <h4 className="text-xl font-bold">Response Guarantee</h4>
              </div>
              <p className="text-white/90">
                We respond to all inquiries within 2 hours during business hours. Emergency calls
                answered immediately 24/7.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Serving Delhi NCR</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
