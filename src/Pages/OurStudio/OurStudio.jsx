import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Award, Users, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSectionStudio from './HeroSectionStudio';


gsap.registerPlugin(ScrollTrigger);

const OurStudio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  // Sample data
  const projects = [
    {
      id: 1,
      type: 'project',
      title: 'E-Commerce Platform',
      category: '3D Animation',
      description: 'Revolutionary shopping experience with immersive 3D product visualization and interactive animations.',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
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
    },
    {
      id: 5,
      type: 'project',
      title: 'Product Launch Video',
      category: 'VFX',
      description: 'High-impact product reveal with cinematic VFX and dynamic camera movements.',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop',
      client: 'Digital Ventures',
      year: '2024',
      duration: '3 months'
    },
    {
      id: 6,
      type: 'team',
      name: 'Emily Rodriguez',
      role: 'Animation Lead',
      bio: 'Specializing in character animation and bringing stories to life through motion.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
      specialty: 'Character Animation',
      projects: '60+ Projects'
    },
    {
      id: 7,
      type: 'project',
      title: 'Corporate Presentation',
      category: 'UI Animation',
      description: 'Interactive presentation with smooth UI transitions and data visualization.',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
      client: 'InnovateCo',
      year: '2023',
      duration: '2 months'
    }
  ];

  const leftColumn = projects.filter((_, index) => index % 2 === 0);
  const rightColumn = projects.filter((_, index) => index % 2 !== 0);

  // GSAP Scroll Animation
  useEffect(() => {
    const leftCol = leftColumnRef.current;
    const rightCol = rightColumnRef.current;

    if (leftCol && rightCol) {
      // Left column scrolls up
      gsap.to(leftCol, {
        y: -500,
        ease: 'none',
        scrollTrigger: {
          trigger: leftCol,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Right column scrolls down
      gsap.to(rightCol, {
        y: 500,
        ease: 'none',
        scrollTrigger: {
          trigger: rightCol,
          start: 'top bottom',
          end: 'bottom top',
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


      <div className=" top-0 left-0 w-full h-screen z-0">
        <HeroSectionStudio />
      </div>

      {/* Hero Section with Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative  pb-32 px-4 md:px-8"
      >


        {/* Fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </motion.div>

      {/* Two Column Scroll Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-8 md:gap-16 justify-center">
            {/* Left Column - Scrolls Up */}
            <div ref={leftColumnRef} className="flex-1 max-w-md space-y-8">
              {leftColumn.map((item) => (
                <CircleItem
                  key={item.id}
                  item={item}
                  onHover={() => setHoveredItem(item)}
                  hoveredItem={hoveredItem}
                />
              ))}
            </div>

            {/* Right Column - Scrolls Down */}
            <div ref={rightColumnRef} className="flex-1 max-w-md space-y-8 mt-20">
              {rightColumn.map((item) => (
                <CircleItem
                  key={item.id}
                  item={item}
                  onHover={() => setHoveredItem(item)}
                  hoveredItem={hoveredItem}
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
const CircleItem = ({ item, onHover, hoveredItem }) => {
  const [isLocalHovered, setIsLocalHovered] = useState(false);
  const isThisHovered = hoveredItem?.id === item.id;

  return (
    <motion.div
      onHoverStart={() => {
        setIsLocalHovered(true);
      }}
      onHoverEnd={() => {
        setIsLocalHovered(false);
      }}
      onClick={onHover}
      whileHover={{ scale: 1.05 }}
      className="relative w-full cursor-pointer mx-auto"
      style={{
        perspective: '1000px'
      }}
    >
      <div
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-red-500/30 bg-black"
        style={{
          transform: 'translateZ(30px)',
          transformStyle: 'preserve-3d',
          boxShadow: isLocalHovered
            ? '0 30px 60px -15px rgba(239, 68, 68, 0.6), 0 0 0 1px rgba(239, 68, 68, 0.3)'
            : '0 20px 40px -15px rgba(239, 68, 68, 0.3)',
          transition: 'box-shadow 0.3s ease'
        }}
      >
        {/* Background Image */}
        <img
          src={item.type === 'project' ? item.thumbnail : item.avatar}
          alt={item.type === 'project' ? item.title : item.name}
          className="w-full h-full object-cover"
        />

        {/* Info Reveal on Hover */}
        <AnimatePresence>
          {isLocalHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
              {item.type === 'project' ? (
                <>
                  <Award className="w-12 h-12 text-red-500 mb-4" />
                  <InfoReveal delay={100}>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                  </InfoReveal>
                  <InfoReveal delay={1.10}>
                    <p className="text-red-400 text-sm md:text-base font-medium mb-3">
                      {item.category}
                    </p>
                  </InfoReveal>
                  <InfoReveal delay={0.2}>
                    <p className="text-gray-300 text-xs md:text-sm border-2">
                      Click for details
                    </p>
                  </InfoReveal>
                </>
              ) : (
                <>
                  <Users className="w-12 h-12 text-red-500 mb-4" />
                  <InfoReveal delay={0}>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      {item.name}
                    </h3>
                  </InfoReveal>
                  <InfoReveal delay={0.1}>
                    <p className="text-red-400 text-sm md:text-base font-medium mb-3">
                      {item.role}
                    </p>
                  </InfoReveal>
                  <InfoReveal delay={0.2}>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Click for details
                    </p>
                  </InfoReveal>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Glow */}
        <div className="absolute -inset-2 bg-red-500/20 blur-xl rounded-full -z-10" />
      </div>
    </motion.div>
  );
};

// Info Reveal Component with Left-to-Right Color Slide
const InfoReveal = ({ children, delay = 0 }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>

      {/* Red slide effect */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 0.6,
          delay: delay + 0.1,
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
        className="relative max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-red-500/30"
        style={{
          boxShadow: '0 50px 100px -20px rgba(239, 68, 68, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-red-500/20 hover:bg-red-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-red-500/30"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative p-8 md:p-12">
          {item.type === 'project' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Video/Image */}
              <div className="relative">
                {isVideoPlaying && item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    controls
                    className="w-full aspect-video rounded-2xl"
                  />
                ) : (
                  <div className="relative group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full aspect-video object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all rounded-2xl flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right - Details */}
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
            <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
              {/* Left - Avatar */}
              <div className="relative mx-auto">
                <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full" />
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="relative w-full aspect-square rounded-full object-cover border-4 border-red-500/30"
                />
              </div>

              {/* Right - Info */}
              <div className="space-y-6">
                <div>
                  <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                    {item.role}
                  </span>
                  <h2 className="text-4xl font-bold text-white mt-2 mb-4">
                    {item.name}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.bio}
                  </p>
                </div>

                <div className="flex gap-6 pt-4 border-t border-white/10">
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
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurStudio;