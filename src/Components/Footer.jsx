import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Clock
} from 'lucide-react';

const Footer = () => {

  const footerLinks = {
    services: [
      { name: '3D Product Animation', href: '#' },
      { name: 'Logo Animation', href: '#' },
      { name: 'Character Rigging', href: '#' },
      { name: 'Motion Graphics', href: '#' },
      { name: 'Architectural Walkthrough', href: '#' },
      { name: 'VFX & Compositing', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Client Reviews', href: '#' },
      { name: 'Our Process', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    resources: [
      { name: 'Portfolio', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1200+', label: 'Projects Done' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative px-4 md:px-8 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">

          {/* Middle Section - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-silverblack mb-4 tracking-wide">
                7007 <span className="text-red-500">Studio</span>
              </h2>
              <p className="text-gray-400 font-dmsans text-base leading-relaxed tracking-wide mb-6">
                We are a creative 3D animation studio specializing in bringing ideas to life through stunning visuals and innovative design solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="font-dmsans text-sm tracking-wide">hello@7007studio.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="font-dmsans text-sm tracking-wide">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="font-dmsans text-sm tracking-wide">123 Creative St, New York, NY</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="font-dmsans text-sm tracking-wide">Mon-Fri: 9AM - 6PM EST</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-silverbold text-white mb-6 tracking-wider">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 font-dmsans text-sm transition-all duration-300 flex items-center gap-2 group tracking-wide"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-silverbold text-white mb-6 tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 font-dmsans text-sm transition-all duration-300 flex items-center gap-2 group tracking-wide"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-silverbold text-white mb-6 tracking-wider">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 font-dmsans text-sm transition-all duration-300 flex items-center gap-2 group tracking-wide"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-red-900/30"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-3xl md:text-4xl font-silverblack text-red-500 mb-2 tracking-wider group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-dmsans text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 font-dmsans text-sm text-center md:text-left tracking-wide"
            >
              © 2026 <span className="text-red-500 font-silverbold">7007 Studio</span>. All rights reserved. Made with{' Techof Solutions Ltd'}.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-red-500/10 border border-red-500/30 hover:bg-red-500 hover:border-red-500 flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 text-sm"
            >
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 font-dmsans transition-colors duration-300 tracking-wide"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 font-dmsans transition-colors duration-300 tracking-wide"
              >
                Terms & Conditions
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
    </footer>
  );
};

export default Footer;