import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSectionStudio from './HeroSectionStudio';
import HowHelp from '../Service/HowHelp';

gsap.registerPlugin(ScrollTrigger);

// Hero Section Component
<HeroSectionStudio></HeroSectionStudio>

const OurStudio = () => {
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
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop'
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
      category: 'Team Member'
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
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop'
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
      category: 'Team Member'
    }
  ];

  const leftColumn = projects.filter((_, index) => index % 2 === 0);
  const rightColumn = projects.filter((_, index) => index % 2 !== 0);

  // GSAP Scroll Animation
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
         {/* Floating Particles */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-50"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
        {/* Section Titles */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
          <div className="flex justify-between mb-20 items-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-wider"
            >
              Our <span className="text-red-500">Work</span>
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-wider"
            >
              Our <span className="text-red-500">Team</span>
            </motion.h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative flex gap-8 md:gap-16 justify-between">

            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/30 via-red-500/50 to-red-500/30 -translate-x-1/2">
              {/* Top Dot */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />

              {/* Animated Middle Dot */}
              <div
                ref={dotRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl shadow-red-500/70"
              />

              {/* Bottom Dot */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
            </div>

            {/* Left Column */}
            <div className="flex-1 max-w-md space-y-16">
              {leftColumn.map((item, index) => (
                <CardItem
                  key={item.id}
                  item={item}
                  index={index}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  align="right"
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 max-w-md space-y-16">
              {rightColumn.map((item, index) => (
                <CardItem
                  key={item.id}
                  item={item}
                  index={index}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  align="left"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <HowHelp/>
      </div>
    </div>
  );
};

// Card Item Component
const CardItem = ({ item, index, selectedService, setSelectedService, align }) => {
  const isSelected = selectedService?.id === item.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        className="bg-gradient-to-br from-zinc-900 to-black border border-red-600/30 overflow-hidden cursor-pointer"
        onClick={() => setSelectedService(isSelected ? null : item)}
      >
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-black/50 transition-all duration-500" />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-[1fr_100px]">
          {/* Left Section - Text Content */}
          <div className="relative flex flex-col justify-between p-6 border-r border-zinc-700/50">
            <div>
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-4 leading-tight tracking-wide">
                {item.type === 'project' ? item.title : item.name}
              </h3>

              {/* Category Badge */}
              <div className="inline-block">
                <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Corner Accent */}
          <div className="relative">
            {/* Top Right Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-500/50"></div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="grid grid-cols-[1fr_100px]">
          {/* Bottom Left - Button and Corner */}
          <div className="relative p-0">
            {/* More Information Button */}
            <button
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-left font-bold px-6 py-4 text-base border-t border-b border-zinc-700/50 transition-all duration-300 tracking-wide"
            >
              V I E W  D E T A I L S <span className="text-xl ml-2">→</span>
            </button>

            {/* Bottom Left Corner */}
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-red-500/50"></div>
          </div>

          {/* Bottom Right - Logo/Photo */}
          <div className="relative border-t border-l border-zinc-700/50 flex items-center justify-center p-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 blur-2xl animate-pulse" />
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src={item.type === 'project' ? item.logo : item.avatar}
                alt={item.type === 'project' ? 'Company Logo' : item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Drawer below card */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseLeave={() => setSelectedService(null)}
            className="overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border-2 border-t-0 border-red-500/40 relative"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5" />

            {item.type === 'project' ? (
              <div className="relative p-8">
                {/* Video Section */}
                <div className="relative mb-6">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 rounded-lg object-cover border border-red-500/30"
                  />
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div>
                    <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2 mb-3 tracking-wide">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm tracking-wider">C L I E N T</span>
                      <span className="text-white font-medium tracking-wide">{item.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm tracking-wider">Y E A R</span>
                      <span className="text-white font-medium tracking-wide">{item.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm tracking-wider">D U R A T I O N</span>
                      <span className="text-white font-medium tracking-wide">{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative p-8 flex flex-col items-center justify-center text-center space-y-6">
                {/* Team Member Photo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full" />
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-red-500/30 shadow-xl"
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">
                    {item.role}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-2 mb-4 tracking-wide">
                    {item.name}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm tracking-wide">
                    {item.bio}
                  </p>
                </div>

                {/* Team Details */}
                <div className="flex gap-8 pt-4 border-t border-white/10 w-full justify-center">
                  <div>
                    <p className="text-gray-400 text-xs mb-1 tracking-widest">S P E C I A L T Y</p>
                    <p className="text-white font-medium tracking-wide">{item.specialty}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1 tracking-widest">E X P E R I E N C E</p>
                    <p className="text-white font-medium tracking-wide">{item.projects}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OurStudio;