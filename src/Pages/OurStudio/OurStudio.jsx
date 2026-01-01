import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSectionStudio from './HeroSectionStudio';

gsap.registerPlugin(ScrollTrigger);

const OurStudio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const dotRef = useRef(null);

  // Sample data
  const projects = [
    {
      id: 1,
      type: 'project',
      title: 'E-Commerce Platform',
      category: '3D Animation',
      description: 'Revolutionary shopping experience with immersive 3D product visualization and interactive animations.',
      video: '/src/assets/video/montage footage.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
      client: 'TechCorp Inc.',
      year: '2024',
      duration: '6 months',
      image: '🎨'
    },
    {
      id: 2,
      type: 'team',
      name: 'Sarah Johnson',
      role: 'Creative Director',
      bio: 'Leading creative vision with 10+ years of experience in 3D animation and motion graphics.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
      specialty: '3D Animation',
      projects: '50+ Projects',
      category: 'Team Member',
      image: '👤'
    },
    {
      id: 3,
      type: 'project',
      title: 'Brand Identity Campaign',
      category: 'Motion Graphics',
      description: 'Complete brand transformation with stunning motion graphics and visual storytelling.',
      video: '/src/assets/video/montage footage.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop',
      client: 'StartupX',
      year: '2024',
      duration: '4 months',
      image: '🎬'
    },
    {
      id: 4,
      type: 'team',
      name: 'Michael Chen',
      role: '3D Artist',
      bio: 'Expert in photorealistic rendering and complex 3D modeling with a passion for detail.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      specialty: '3D Modeling',
      projects: '80+ Projects',
      category: 'Team Member',
      image: '👨‍💻'
    }
  ];

  const leftColumn = projects.filter((_, index) => index % 2 === 0);
  const rightColumn = projects.filter((_, index) => index % 2 !== 0);

  // GSAP Scroll Animation - Only for dot
  useEffect(() => {
    const dot = dotRef.current;

    // Dot animation
    if (dot) {
      gsap.to(dot, {
        y: 500,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scroll-section',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="">
        <HeroSectionStudio />
      </div>
      {/* Two Column Scroll Section */}
      <div className="scroll-section relative py-20">
        {/* Section Titles */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
          <div className="flex justify-between mb-20 items-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Our <span className="text-red-500">Work</span>
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Our <span className="text-red-500">Team</span>
            </motion.h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative flex gap-8 md:gap-16 justify-between">
            
            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500 to-red-500/50 -translate-x-1/2">
              {/* Top Dot */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
              
              {/* Animated Middle Dot */}
              <div 
                ref={dotRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-xl shadow-red-500/70 border-2 border-black"
              />
              
              {/* Bottom Dot */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
            </div>

            {/* Left Column - No scroll animation */}
            <div className="flex-1 max-w-md space-y-16">
              {leftColumn.map((item, index) => (
                <CardItem
                  key={item.id}
                  item={item}
                  index={index}
                  onHover={() => setHoveredItem(item)}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  align="right"
                />
              ))}
            </div>

            {/* Right Column - No scroll animation */}
            <div className="flex-1 max-w-md space-y-16">
              {rightColumn.map((item, index) => (
                <CardItem
                  key={item.id}
                  item={item}
                  index={index}
                  onHover={() => setHoveredItem(item)}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  align="left"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {hoveredItem && (
          <DetailModal item={hoveredItem} onClose={() => setHoveredItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Card Item Component (replacing Circle Item)
const CardItem = ({ item, index, onHover, selectedService, setSelectedService, align }) => {
  const isSelected = selectedService?.id === item.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      animate={{
        scale: isSelected ? 0.95 : 1,
        opacity: isSelected ? 0.7 : 1,
      }}
      className="group relative bg-gradient-to-br from-zinc-900 to-black border border-red-600 overflow-hidden"
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-black/50 transition-all duration-500" />

      {/* Main Grid Layout */}
      <div className={`grid ${selectedService ? "grid-cols-1" : "grid-cols-[1fr_100px]"}`}>
        {/* Left Section - Text Content */}
        <div
          className={`relative flex flex-col justify-between transition-all duration-300 ${
            selectedService ? "p-4" : "p-6 border-r-2 border-gray-700"
          }`}
        >
          <div>
            {/* Title */}
            <h3
              className={`font-bold text-white font-serif transition-all duration-300 ${
                selectedService
                  ? "text-xl h-12 flex items-center"
                  : "text-2xl lg:text-3xl mb-4 leading-tight"
              }`}
            >
              {item.type === 'project' ? item.title : item.name}
            </h3>

            {/* Category Badge - Only show when no service selected */}
            {!selectedService && (
              <div className="inline-block">
                <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Corner Accent */}
        {!selectedService && (
          <div className="relative">
            {/* Top Right Red Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-red-700"></div>
          </div>
        )}
      </div>

      {/* Bottom Section - Full Width */}
      <div className={`grid ${selectedService ? "grid-cols-1" : "grid-cols-[1fr_100px]"}`}>
        {/* Bottom Left - Button and Corner */}
        <div className="relative p-0">
          {/* More Information Button */}
          <button
            onClick={() => onHover()}
            className={`w-full bg-red-700 hover:bg-zinc-900 text-white text-left font-bold transition-colors ${
              selectedService
                ? "px-4 py-2 text-sm border-t border-gray-700"
                : "px-6 py-4 text-base border-t-2 border-b-2 border-gray-700"
            }`}
          >
            More Information <span className="text-xl">→</span>
          </button>

          {/* Bottom Left Red Corner - hide when selected */}
          {!selectedService && (
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-red-700"></div>
          )}
        </div>

        {/* Bottom Right - Image/Icon with Glow */}
        {!selectedService && (
          <div className="relative border-t-2 border-l-2 border-gray-700 flex items-center justify-center p-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse" />
            </div>
            <div className="relative text-4xl z-10">{item.image}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Detail Modal Component
const DetailModal = ({ item, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', damping: 25 }}
        className={`relative ${
          item.type === 'team' ? 'max-w-2xl' : 'max-w-5xl'
        } w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-red-500/30`}
        style={{
          boxShadow: '0 50px 100px -20px rgba(239, 68, 68, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-red-500/20 hover:bg-red-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-red-500/30"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative p-8 md:p-12">
          {item.type === 'project' ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video rounded-2xl object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h2 className="text-4xl font-bold text-white mt-2 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Client</span>
                    <span className="text-white font-medium">{item.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year</span>
                    <span className="text-white font-medium">{item.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full" />
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-red-500/30"
                />
              </div>

              <div>
                <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                  {item.role}
                </span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                  {item.name}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed max-w-md">
                  {item.bio}
                </p>
              </div>

              <div className="flex gap-8 pt-4 border-t border-white/10 w-full justify-center">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Specialty</p>
                  <p className="text-white font-medium">{item.specialty}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Experience</p>
                  <p className="text-white font-medium">{item.projects}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurStudio;