import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Award, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSectionStudio from '../OurStudio/HeroSectionStudio';

gsap.registerPlugin(ScrollTrigger);

const OurStudio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
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
      duration: '6 months'
    },
    {
      id: 2,
      type: 'team',
      name: 'Sarah Johnson',
      role: 'Creative Director',
      bio: 'Leading creative vision with 10+ years of experience in 3D animation and motion graphics.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
      specialty: '3D Animation',
      projects: '50+ Projects'
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
      duration: '4 months'
    },
    {
      id: 4,
      type: 'team',
      name: 'Michael Chen',
      role: '3D Artist',
      bio: 'Expert in photorealistic rendering and complex 3D modeling with a passion for detail.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      specialty: '3D Modeling',
      projects: '80+ Projects'
    }
  ];

  const leftColumn = projects.filter((_, index) => index % 2 === 0);
  const rightColumn = projects.filter((_, index) => index % 2 !== 0);

  // GSAP Scroll Animation
  useEffect(() => {
    const leftCol = leftColumnRef.current;
    const rightCol = rightColumnRef.current;
    const dot = dotRef.current;

    if (leftCol && rightCol) {
      gsap.to(leftCol, {
        y: -800,
        ease: 'none',
        scrollTrigger: {
          trigger: leftCol,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to(rightCol, {
        y: 800,
        ease: 'none',
        scrollTrigger: {
          trigger: rightCol,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }

    // Dot animation
    if (dot) {
      gsap.to(dot, {
        y: 800,
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
        <div className="max-w-xl mx-auto px-4 md:px-8 mb-16 ">
          <div className="flex justify-between mb-20 items-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-silverblack text-white"
            >
              Our <span className="text-red-500">Work</span>
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-silverblack text-white"
            >
              Our <span className="text-red-500">Team</span>
            </motion.h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 ">
          <div className="relative flex gap-8 md:gap-16 justify-center">
            
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

            {/* Left Column - Scrolls Up */}
            <div ref={leftColumnRef} className="flex-1 max-w-md space-y-16 mt-50">
              {leftColumn.map((item) => (
                <CircleItem
                  key={item.id}
                  item={item}
                  onHover={() => setHoveredItem(item)}
                  hoveredItem={hoveredItem}
                  align="right"
                />
              ))}
            </div>

            {/* Right Column - Scrolls Down */}
            <div ref={rightColumnRef} className="flex-1 max-w-md space-y-16 mb-70">
              {rightColumn.map((item) => (
                <CircleItem
                  key={item.id}
                  item={item}
                  onHover={() => setHoveredItem(item)}
                  hoveredItem={hoveredItem}
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

// Circle Item Component
const CircleItem = ({ item, onHover, hoveredItem, align }) => {
  const [isLocalHovered, setIsLocalHovered] = useState(false);

  return (
    <div 
      className={`flex items-center gap-6 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
      onMouseEnter={() => setIsLocalHovered(true)}
      onMouseLeave={() => setIsLocalHovered(false)}
    >
      {/* Circle */}
      <motion.div
        onClick={onHover}
        whileHover={{ scale: 1.05 }}
        className="relative w-32 h-32 flex-shrink-0 cursor-pointer"
      >
        <div
          className="relative w-full h-full rounded-full overflow-hidden border-2 border-red-500/30 bg-black"
          style={{
            boxShadow: isLocalHovered
              ? '0 20px 40px -10px rgba(239, 68, 68, 0.6)'
              : '0 10px 20px -5px rgba(239, 68, 68, 0.3)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          <img
            src={item.type === 'project' ? item.thumbnail : item.avatar}
            alt={item.type === 'project' ? item.title : item.name}
            className="w-full h-full object-cover"
          />
          
        </div>
      </motion.div>

      {/* Info Text */}
      <motion.div 
        className={`flex-1 ${align === 'right' ? 'text-right' : 'text-left'}`}
        initial={{ opacity: 0, x: align === 'right' ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <InfoReveal delay={0} align={align}>
          <h3 className="text-xl md:text-2xl font-silverblack text-white mb-1">
            {item.type === 'project' ? item.title : item.name}
          </h3>
        </InfoReveal>
        <InfoReveal delay={0.2} align={align}>
          <p className="text-red-400 font-dmsans text-sm md:text-base mb-2">
            {item.type === 'project' ? item.category : item.role}
          </p>
        </InfoReveal>
        <InfoReveal delay={0.4} align={align}>
          <p className="text-gray-400 font-dmsans text-xs md:text-sm">
            Click for details →
          </p>
        </InfoReveal>
      </motion.div>
    </div>
  );
};

// Info Reveal Component with Slow Animation
const InfoReveal = ({ children, delay = 0, align }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ x: align === 'right' ? '100%' : '-100%' }}
        whileInView={{ x: align === 'right' ? '-100%' : '100%' }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: delay + 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
      />
    </div>
  );
};

// Detail Modal Component
const DetailModal = ({ item, onClose }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
                  <h2 className="text-4xl font-silverblack text-white mt-2 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 font-dmsans text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-dmsans">Client</span>
                    <span className="text-white font-dmsans font-medium">{item.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-dmsans">Year</span>
                    <span className="text-white font-dmsans font-medium">{item.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-dmsans">Duration</span>
                    <span className="text-white font-dmsans font-medium">{item.duration}</span>
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
                <span className="text-red-400 text-sm font-dmsans font-semibold uppercase tracking-wider">
                  {item.role}
                </span>
                <h2 className="text-3xl font-silverblack text-white mt-2 mb-4">
                  {item.name}
                </h2>
                <p className="text-gray-300 font-dmsans text-base leading-relaxed max-w-md">
                  {item.bio}
                </p>
              </div>

              <div className="flex gap-8 pt-4 border-t border-white/10 w-full justify-center">
                <div>
                  <p className="text-gray-400 font-dmsans text-sm mb-1">Specialty</p>
                  <p className="text-white font-dmsans font-medium">{item.specialty}</p>
                </div>
                <div>
                  <p className="text-gray-400 font-dmsans text-sm mb-1">Experience</p>
                  <p className="text-white font-dmsans font-medium">{item.projects}</p>
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