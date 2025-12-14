import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, User, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@3dstudio.com",
      subtext: "We reply within 24 hours",
      delay: 0.2
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9AM - 6PM EST",
      delay: 0.4
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Creative Street",
      subtext: "New York, NY 10001",
      delay: 0.6
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "24/7 Support",
      subtext: "Always here to help",
      delay: 0.8
    }
  ];

  const services = [
    "Product Animation",
    "Logo Animation",
    "Character Rigging",
    "Motion Graphics",
    "Architectural Walkthrough",
    "Game Asset Creation",
    "VFX Integration",
    "Other"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.div
        style={{ opacity }}
        className="relative pt-20 md:pt-32 pb-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <MessageSquare className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-silverblack mb-6"
          >
            Let's Create
            <span className="text-red-500"> Together</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 font-dmsans text-lg md:text-xl max-w-3xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it. Get in touch and let's make something amazing.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Info Cards with Scroll Animation */}
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: info.delay }}
                whileHover={{ y: -10 }}
                className="group relative bg-black border border-red-900/30 hover:border-red-500 p-6 transition-all duration-500"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-500" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-all duration-300"
                  >
                    <info.icon className="w-6 h-6 text-red-500" />
                  </motion.div>

                  <h3 className="text-lg font-silverbold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 font-dmsans mb-1">{info.detail}</p>
                  <p className="text-gray-600 font-dmsans text-sm">{info.subtext}</p>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Contact Form Section */}
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-silverblack mb-4"
                >
                  Send us a
                  <span className="text-red-500"> Message</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 font-dmsans"
                >
                  Fill out the form below and we'll get back to you as soon as possible.
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-silverbold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-red-500 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-red-900/30 focus:border-red-500 text-white font-dmsans pl-12 pr-4 py-4 outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-silverbold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-red-500 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-red-900/30 focus:border-red-500 text-white font-dmsans pl-12 pr-4 py-4 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>

                {/* Service Select */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-silverbold text-gray-300 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-red-900/30 focus:border-red-500 text-white font-dmsans px-4 py-4 outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-silverbold text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black border border-red-900/30 focus:border-red-500 text-white font-dmsans px-4 py-4 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-silverbold py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {formSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-black border border-red-900/30 p-8"
              >
                <h3 className="text-2xl font-silverblack mb-6">
                  Why <span className="text-red-500">Choose Us?</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Fast Response", desc: "We reply within 24 hours" },
                    { title: "Expert Team", desc: "10+ years of experience" },
                    { title: "Quality Work", desc: "100% satisfaction guaranteed" },
                    { title: "Flexible Pricing", desc: "Custom quotes for every project" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <div className="w-6 h-6 border border-red-500 flex items-center justify-center mt-1 group-hover:bg-red-500 transition-all duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          className="w-2 h-2 bg-red-500 group-hover:bg-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-silverbold text-white group-hover:text-red-500 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 font-dmsans text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-black border border-red-900/30 p-8"
              >
                <h3 className="text-2xl font-silverblack mb-6">
                  Quick <span className="text-red-500">Questions?</span>
                </h3>
                <div className="space-y-3">
                  {[
                    "What's your turnaround time?",
                    "Do you offer revisions?",
                    "What file formats do you deliver?",
                    "Can I see your portfolio?"
                  ].map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="w-full text-left text-gray-400 hover:text-white font-dmsans py-3 border-b border-red-900/20 hover:border-red-500/50 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-between">
                        {question}
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="text-red-500"
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gradient-to-br from-red-500/10 to-black border border-red-500/30 p-8"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-5xl font-silverblack text-red-500 mb-2"
                  >
                    500+
                  </motion.div>
                  <p className="text-white font-silverbold mb-1">Projects Completed</p>
                  <p className="text-gray-400 font-dmsans text-sm">
                    Trusted by clients worldwide
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA with Parallax */}
      <motion.div
        style={{ y }}
        className="relative py-20 px-4 md:px-8 mt-16 border-t border-red-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-silverblack mb-6"
          >
            Prefer to
            <span className="text-red-500"> Email Directly?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-dmsans text-lg mb-8"
          >
            Drop us a line at <span className="text-red-500 font-silverbold">hello@3dstudio.com</span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;