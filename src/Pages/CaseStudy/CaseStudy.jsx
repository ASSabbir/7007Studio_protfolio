import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Calendar, User, Target, TrendingUp, Award, Eye, ChevronRight } from 'lucide-react';

const CaseStudy = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    { 
      id: 1,
      title: 'TechCorp Product Launch',
      category: '3D Product Animation',
      client: 'TechCorp Industries',
      date: 'December 2024',
      duration: '3 weeks',
      color: 'from-red-600 to-orange-600',
      thumbnail: '🎁',
      description: 'High-end 3D product visualization for a revolutionary tech gadget launch, featuring photorealistic rendering and dynamic camera movements.',
      challenge: 'Creating photorealistic materials and lighting that showcased the product\'s premium feel while maintaining fast render times.',
      solution: 'Implemented advanced PBR materials with optimized ray tracing, resulting in stunning visuals at 60fps.',
      results: ['300% increase in pre-orders', '2M+ social media views', '95% client satisfaction'],
      tags: ['3D Animation', 'Product Viz', 'Motion Graphics'],
      metrics: { views: '2.5M', engagement: '87%', conversion: '+250%' }
    },
    { 
      id: 2,
      title: 'StartupX Brand Identity',
      category: 'Logo Animation',
      client: 'StartupX',
      date: 'November 2024',
      duration: '2 weeks',
      color: 'from-blue-600 to-cyan-600',
      thumbnail: '⚡',
      description: 'Dynamic 3D logo animation system that adapts across all digital platforms, from social media to broadcast.',
      challenge: 'Creating a modular animation system that maintains brand consistency across different formats and durations.',
      solution: 'Developed a parametric animation rig allowing instant variations while keeping the core brand identity intact.',
      results: ['Used in 50+ campaigns', 'Brand recognition +180%', 'Won design award'],
      tags: ['Branding', '3D Logo', 'Motion Design'],
      metrics: { views: '1.8M', engagement: '92%', conversion: '+180%' }
    },
    { 
      id: 3,
      title: 'GameCo Character Showcase',
      category: 'Character Animation',
      client: 'GameCo Studios',
      date: 'October 2024',
      duration: '4 weeks',
      color: 'from-green-600 to-emerald-600',
      thumbnail: '🎮',
      description: 'Full character rigging and animation suite for a AAA game trailer, including facial expressions and realistic movement.',
      challenge: 'Achieving game-quality visuals at cinematic quality while maintaining performance for real-time rendering.',
      solution: 'Hybrid pipeline combining pre-rendered sequences with real-time elements, optimized for Unreal Engine 5.',
      results: ['10M+ trailer views', 'Featured at E3', 'Game pre-sales +400%'],
      tags: ['Character Rig', 'Game Animation', 'Unreal Engine'],
      metrics: { views: '10.2M', engagement: '94%', conversion: '+400%' }
    },
    { 
      id: 4,
      title: 'Luxury Real Estate Tour',
      category: 'Architectural Walkthrough',
      client: 'Elite Properties',
      date: 'September 2024',
      duration: '5 weeks',
      color: 'from-purple-600 to-pink-600',
      thumbnail: '🏢',
      description: 'Photorealistic architectural visualization with cinematic walkthrough for a $50M luxury property development.',
      challenge: 'Achieving photorealism in lighting and materials while keeping file sizes manageable for VR viewing.',
      solution: 'Advanced lighting baking with dynamic elements, creating immersive VR-ready experience at 90fps.',
      results: ['Sold 80% units pre-launch', 'VR tours: 5000+', 'ROI: 600%'],
      tags: ['Architecture', 'VR Ready', 'Photorealistic'],
      metrics: { views: '850K', engagement: '89%', conversion: '+600%' }
    },
    { 
      id: 5,
      title: 'MediCare Explainer Series',
      category: 'Medical Animation',
      client: 'MediCare Solutions',
      date: 'August 2024',
      duration: '6 weeks',
      color: 'from-indigo-600 to-blue-600',
      thumbnail: '💊',
      description: 'Scientific 3D animation series explaining complex medical procedures in an accessible, engaging format.',
      challenge: 'Balancing scientific accuracy with visual appeal while making complex concepts easy to understand.',
      solution: 'Collaborated with medical professionals to create accurate yet simplified 3D models with clear visual metaphors.',
      results: ['Used in 200+ hospitals', 'Patient understanding +250%', 'Medical award winner'],
      tags: ['Medical Viz', 'Educational', '3D Modeling'],
      metrics: { views: '3.2M', engagement: '96%', conversion: '+250%' }
    },
    { 
      id: 6,
      title: 'AutoDrive Car Commercial',
      category: 'VFX & Compositing',
      client: 'AutoDrive Motors',
      date: 'July 2024',
      duration: '8 weeks',
      color: 'from-orange-600 to-red-600',
      thumbnail: '🚗',
      description: 'Full CGI car commercial with live-action integration, showcasing advanced autonomous driving features.',
      challenge: 'Seamlessly blending CGI vehicles with live-action footage while maintaining photorealistic quality.',
      solution: 'Advanced motion tracking and compositing workflow with physically accurate car shaders and reflections.',
      results: ['Super Bowl airtime', '50M+ TV views', 'Sales +320%'],
      tags: ['VFX', 'Compositing', 'Commercial'],
      metrics: { views: '50M+', engagement: '91%', conversion: '+320%' }
    }
  ];

  const categories = ['All', '3D Product Animation', 'Logo Animation', 'Character Animation', 'Architectural Walkthrough', 'Medical Animation', 'VFX & Compositing'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-20 md:pt-32 pb-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <Award className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-silverblack mb-6 tracking-wide"
          >
            Case
            <span className="text-red-500"> Studies</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 font-dmsans text-lg md:text-xl max-w-3xl mx-auto tracking-wider leading-relaxed"
          >
            Explore our portfolio of successful projects. Real results, real impact.
          </motion.p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-red-900/30 px-4 md:px-8 py-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                onClick={() => setFilter(category)}
                className={`px-4 md:px-6 py-2 md:py-3 font-dmsans text-sm md:text-base transition-all duration-300 border tracking-wide ${
                  filter === category
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-transparent text-gray-400 border-red-900/30 hover:border-red-500 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 md:px-8 mt-16 border-t border-red-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-silverblack mb-6 tracking-wide"
          >
            Ready for Your
            <span className="text-red-500"> Success Story?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 font-dmsans text-lg mb-8 tracking-wider leading-relaxed"
          >
            Let's create something extraordinary together
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-silverbold text-lg px-12 py-4 inline-flex items-center gap-3 transition-all duration-300"
          >
            Start Your Project
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative bg-black border border-red-900/30 hover:border-red-500 overflow-hidden cursor-pointer transition-all duration-500"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-all duration-500`} />

      <div className="relative p-6 md:p-8">
        {/* Thumbnail Icon */}
        <motion.div
          // animate={{ 
          //   scale: isHovered ? 1.2 : 1,
          //   rotate: isHovered ? 360 : 0
          // }}
          transition={{ duration: 0.6 }}
          className="text-6xl mb-6"
        >
          {project.thumbnail}
        </motion.div>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="text-xs font-urbanist font-semibold text-red-500 bg-red-500/10 px-3 py-1 border border-red-500/30 tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-silverblack text-white mb-3 group-hover:text-red-500 transition-colors duration-300 tracking-wide">
          {project.title}
        </h3>

        {/* Description Preview */}
        <p className="text-gray-300 font-dmsans text-sm md:text-base mb-6 leading-relaxed tracking-wide line-clamp-2">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <User className="w-4 h-4 text-red-500" />
            <span className="font-dmsans tracking-wide">{project.client}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4 text-red-500" />
            <span className="font-dmsans tracking-wide">{project.date}</span>
          </div>
        </div>

        {/* Metrics Preview */}
        <div className="grid grid-cols-3 gap-2 pt-6 border-t border-red-900/30 mb-6">
          <div>
            <p className="text-xs text-gray-600 font-dmsans tracking-wide">Views</p>
            <p className="text-sm font-silverbold text-red-500">{project.metrics.views}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-dmsans tracking-wide">Engagement</p>
            <p className="text-sm font-silverbold text-red-500">{project.metrics.engagement}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-dmsans tracking-wide">Growth</p>
            <p className="text-sm font-silverbold text-red-500">{project.metrics.conversion}</p>
          </div>
        </div>

        {/* View Case Study Button */}
        <motion.button
          whileHover={{ x: 5 }}
          className="w-full bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/30 hover:border-red-600 font-silverbold py-3 px-6 flex items-center justify-center gap-2 transition-all duration-300 group/btn tracking-wide"
        >
          View Case Study
          <Play className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-500" />
    </motion.div>
  );
};

// Project Detail Modal
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-black border border-red-500 p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ rotate: 90, scale: 1.1 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-6 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-7xl"
            >
              {project.thumbnail}
            </motion.div>
            <div className="flex-1">
              <span className="inline-block text-xs font-urbanist font-semibold text-red-500 bg-red-500/10 px-3 py-1 border border-red-500/30 mb-3 tracking-wider">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-silverblack text-white mb-3 tracking-wide">
                {project.title}
              </h2>
              <p className="text-gray-300 font-dmsans text-lg leading-relaxed tracking-wide">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-red-500/5 border border-red-900/30">
            <div>
              <p className="text-xs text-gray-600 font-dmsans mb-1 tracking-wide">CLIENT</p>
              <p className="text-white font-silverbold tracking-wide">{project.client}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-dmsans mb-1 tracking-wide">DATE</p>
              <p className="text-white font-silverbold tracking-wide">{project.date}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-dmsans mb-1 tracking-wide">DURATION</p>
              <p className="text-white font-silverbold tracking-wide">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-dmsans mb-1 tracking-wide">CATEGORY</p>
              <p className="text-white font-silverbold tracking-wide">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-silverblack text-white tracking-wide">The Challenge</h3>
          </div>
          <p className="text-gray-300 font-dmsans text-base md:text-lg leading-relaxed tracking-wide pl-9">
            {project.challenge}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-silverblack text-white tracking-wide">Our Solution</h3>
          </div>
          <p className="text-gray-300 font-dmsans text-base md:text-lg leading-relaxed tracking-wide pl-9">
            {project.solution}
          </p>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-silverblack text-white tracking-wide">Results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-9">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-red-500/5 border border-red-500/30 p-4"
              >
                <Eye className="w-5 h-5 text-red-500 mb-2" />
                <p className="text-white font-silverbold text-sm md:text-base tracking-wide">{result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-dmsans text-gray-400 bg-red-500/5 border border-red-900/30 px-3 py-1 tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-silverbold py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 tracking-wide"
        >
          Start Similar Project
          <ExternalLink className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudy;