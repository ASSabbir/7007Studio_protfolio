import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSectionStudio from './HeroSectionStudio';
import HowHelp from './HowHelp';
import Pipeline from './Pipeline';
import FAQ from './FAQ';
import vdo1 from '../../assets/video/CF1.mp4';
import vdo2 from '../../assets/video/CF2.mp4';
import vdo3 from '../../assets/video/CF3.mp4';
import vdo4 from '../../assets/video/CF4.mp4';





const OurStudio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      bio: 'Leading creative vision with 10+ years of experience in 3D animation and motion graphics.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
      specialty: '3D Animation',
      experience: '10+ Years'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: '3D Artist',
      bio: 'Expert in photorealistic rendering and complex 3D modeling with a passion for detail.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      specialty: '3D Modeling',
      experience: '8+ Years'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Motion Designer',
      bio: 'Specializing in dynamic motion graphics and seamless animations.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
      specialty: 'Motion Graphics',
      experience: '7+ Years'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'VFX Supervisor',
      bio: 'Creating stunning visual effects and bringing impossible visions to life.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
      specialty: 'VFX',
      experience: '12+ Years'
    }
  ];

 const caseStudies = [
  {
    id: 1,
    title: 'Systema Toothbrush Launch TVC',
    category: '3D Product Animation',
    description: 'High-precision 3D TVC visualizing advanced dental cleaning technology.',
    video: vdo1,
    logo: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=200&h=200&fit=crop',
    client: 'Lions Bangladesh',
    year: '2024',
    duration: '1.5 months',
    challenge: 'Lions Bangladesh needed a visually scientific yet premium commercial to prove Systema’s “9x more cleaning power” claim while maintaining broadcast-level polish under a tight deadline.',
    solution: 'We created a macro-level 3D visualization system that accurately demonstrates how tapered bristles interact with teeth and gum lines using cinematic lighting and medical-grade realism.',
    process: 'High-fidelity teeth and gum models were built in Blender, followed by precision bristle simulations to demonstrate cleaning mechanics. Shaders were tuned to reflect enamel gloss and bristle translucency. Final animation was composited and polished for nationwide TV broadcast.',
    results: 'Delivered a technically accurate and visually premium TVC that successfully communicated the product’s scientific benefits and aligned with the brand’s healthcare positioning.',
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606813902912-6c84a2bb3c7d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606813902912-6c84a2bb3c7d?w=1200&h=800&fit=crop'
    ],
    technologies: ['Blender', 'Compositing'],
    testimonial: {
      text: 'The visuals perfectly communicated our technology and brand promise. The result was beyond expectations.',
      author: 'Brand Team',
      position: 'Lions Bangladesh'
    }
  },

  {
    id: 2,
    title: 'City Bank AmEx Platinum Reserve TVC',
    category: '3D Motion Graphics',
    description: 'Luxury-focused 3D commercial for premium financial branding.',
    video: vdo2,
    logo: 'https://images.unsplash.com/photo-1612831661966-49b0d5ff28c5?w=200&h=200&fit=crop',
    client: 'City Bank',
    year: '2024',
    duration: '2 months',
    challenge: 'City Bank needed a premium, cinematic visual style to position the AmEx Platinum Reserve card as a symbol of exclusivity and luxury.',
    solution: 'We created a high-contrast, cinematic 3D motion system that emphasized metallic finishes, lighting drama, and elegant motion design to convey status and prestige.',
    process: 'The card was modeled in 3D, materials were developed to reflect metallic and matte surfaces, and lighting was designed to create a luxury mood. Motion graphics, camera animation, and compositing finalized the TVC.',
    results: 'The campaign achieved strong brand recall and positioned the Platinum Reserve card as a premium lifestyle product.',
    images: [
      'https://images.unsplash.com/photo-1612831661966-49b0d5ff28c5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612831661966-49b0d5ff28c5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?w=1200&h=800&fit=crop'
    ],
    technologies: ['Blender', 'After Effects', 'Compositing'],
    testimonial: {
      text: 'The commercial captured the premium essence of our brand beautifully.',
      author: 'Marketing Team',
      position: 'City Bank'
    }
  },

  {
    id: 3,
    title: 'Walton Water Purifier – Pure Innovation',
    category: '3D Product Animation',
    description: 'Cinematic fluid-driven visualization of water purification technology.',
    video: vdo3,
    logo: 'https://images.unsplash.com/photo-1581093588401-22f6360b5d54?w=200&h=200&fit=crop',
    client: 'Walton Home Appliance',
    year: '2024',
    duration: '3 months',
    challenge: 'Walton needed a premium way to visualize internal filtration technology while maintaining a dark, cinematic brand mood.',
    solution: 'We used Houdini fluid simulations combined with Blender rendering to show internal filtration in a dramatic, x-ray style.',
    process: 'Water simulations were generated in Houdini, internal filters were modeled in Blender, and lighting was optimized for a dark premium look. Cycles rendering and compositing finalized the visuals.',
    results: 'Delivered a cinematic TVC that elevated product trust and showcased technical innovation clearly.',
    images: [
      'https://images.unsplash.com/photo-1581093588401-22f6360b5d54?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581093588401-22f6360b5d54?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1200&h=800&fit=crop'
    ],
    technologies: ['Blender', 'Houdini', 'Compositing'],
    testimonial: {
      text: 'The internal visualization made our technology easy to understand and visually premium.',
      author: 'Product Team',
      position: 'Walton'
    }
  },

  {
    id: 4,
    title: 'Sprint Sneaker Mania',
    category: '3D Product Animation',
    description: 'High-energy sneaker showcase with cinematic motion and transitions.',
    video: vdo4,
    logo: 'https://images.unsplash.com/photo-1528701800489-20be3c8d4f47?w=200&h=200&fit=crop',
    client: 'Sprint',
    year: '2024',
    duration: '2 months',
    challenge: 'Sprint required a visually dynamic sneaker campaign using scanned assets without losing realism.',
    solution: 'We optimized real-world scans and designed fluid camera motion and transitions for a clean, cinematic presentation.',
    process: 'Scans were cleaned and retopologized in Blender, materials refined, animations choreographed, and final compositing polished.',
    results: 'Created a visually powerful sneaker campaign with smooth transitions and premium realism.',
    images: [
      'https://images.unsplash.com/photo-1528701800489-20be3c8d4f47?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1528701800489-20be3c8d4f47?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop'
    ],
    technologies: ['Blender', '3D Scanning', 'Compositing'],
    testimonial: {
      text: 'The transitions and motion made our sneakers feel alive and premium.',
      author: 'Creative Team',
      position: 'Sprint'
    }
  }
];


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-KronaOne">
      
      {/* Hero Section */}
    <HeroSectionStudio></HeroSectionStudio>
    <HowHelp></HowHelp>
  

      {/* Team Members Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-20 text-center tracking-tighter">
              Team <span className="text-red-600">MEMBER'S</span>
            </h2>
            <p className="text-gray-300 text-2xl w-full mx-auto text-center tracking-tighter">
              7007 Studio is a focused, founder-led creative studio, collaborating with a small network of trusted artists and specialists when needed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tighter">
              Case <span className="text-red-600">Studies</span>
            </h2>
            <p className="text-gray-300 text-lg text-center w-full mx-auto tracking-tighter">
             <span className='text-5xl text-red-600'>We begin </span> by understanding the project from the <span className='text-red-600'>client’s perspective</span>. From there, we translate that vision into a functional solution — breaking complex ideas down into clear, manageable parts and building them with intention and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {caseStudies.map((project, index) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

<div className="">
  <Pipeline></Pipeline>
  <FAQ></FAQ>
</div>

    </div>
  );
};

// Team Card Component
const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden border border-red-500/30 bg-black group"
    >
      {/* Background Image with Heavy Blur and Dark Overlay */}
      <div className="absolute inset-0 ">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover blur-xl"
          style={{ filter: "blur(10px)" }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center 
                      p-6 sm:p-8 md:p-10 
                      min-h-[220px] sm:min-h-[240px] md:min-h-[260px]">
        
        {/* Left Side - Content */}
        <div className="flex-1 md:pr-8 text-center md:text-left">
          <span className="inline-block mb-4 md:mb-5 
                           bg-gradient-to-r from-red-600 to-red-700 
                           px-3 py-1 md:px-4 
                           text-[10px] md:text-xs 
                           font-bold tracking-[0.25em] md:tracking-[0.35em] 
                           uppercase">
            {member.role}
          </span>

          <h3 className="font-bold leading-tight tracking-wide mb-3 md:mb-4
                         text-xl sm:text-2xl md:text-4xl">
            {member.name}
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8">
            {member.bio}
          </p>

          {/* Bottom Info */}
          <div className="pt-5 md:pt-6 border-t border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start">
              <div>
                <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">
                  Specialty
                </p>
                <p className="text-white text-xs sm:text-sm">
                  {member.specialty}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">
                  Experience
                </p>
                <p className="text-white text-xs sm:text-sm">
                  {member.experience}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Member Photo */}
        <div className="mt-8 md:mt-0 
                        w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 
                        flex-shrink-0 relative overflow-hidden 
                        border-2 border-red-500/40 
                        group-hover:border-red-500 
                        transition-all duration-500">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-red-500/40 z-20" />
      <div className="absolute bottom-0 left-0 w-10 h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-red-500/40 z-20" />
    </motion.div>
  );
};


// Case Study Card Component
const CaseStudyCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onClick={onClick}
      className="relative overflow-hidden border border-red-500/30 bg-black cursor-pointer group"
    >
      {/* Background Video */}
      <video
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between 
                      p-6 sm:p-8 md:p-10 
                      min-h-[260px] sm:min-h-[320px] md:min-h-[340px]">
        
        {/* Top */}
        <div>
          <span className="inline-block mb-4 md:mb-5 
                           bg-gradient-to-r from-red-600 to-red-700 
                           px-3 py-1 md:px-4 
                           text-[10px] md:text-xs 
                           font-bold tracking-[0.25em] md:tracking-[0.35em] 
                           uppercase">
            {project.category}
          </span>

          <h3 className="font-bold leading-tight tracking-wide
                         text-xl sm:text-2xl md:text-4xl">
            {project.title}
          </h3>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between 
                        pt-6 sm:pt-8 md:pt-12 
                        border-t border-white/20">
          
          <span className="text-[10px] sm:text-xs md:text-sm 
                           tracking-[0.25em] md:tracking-[0.4em] 
                           text-gray-300 uppercase 
                           group-hover:text-red-500 
                           transition-colors duration-300">
            View Breakdown
          </span>

          <div className="relative 
                          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                          rounded-full overflow-hidden 
                          border border-white/30">
            <img
              src={project.logo}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-red-500/40" />
      <div className="absolute bottom-0 left-0 w-10 h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-red-500/40" />
    </motion.div>
  );
};


// Case Study Modal Component
const CaseStudyModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
    >
      <div className="min-h-screen p-3 sm:p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-zinc-900 border border-red-500/30 
                     max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl 
                     mx-auto my-4 sm:my-6 md:my-8 font-KronaOne"
        >

          <div className="p-4 sm:p-6 md:p-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <span className="inline-block mb-4 bg-gradient-to-r from-red-600 to-red-700 
                               px-3 sm:px-4 py-1 text-[10px] sm:text-xs 
                               font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase">
                {project.category}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold 
                             mb-6 sm:mb-8 leading-tight">
                {project.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 
                              pb-6 sm:pb-8 border-b border-zinc-800">
                <div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Client</p>
                  <p className="text-white text-sm sm:text-lg">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Year</p>
                  <p className="text-white text-sm sm:text-lg">{project.year}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Duration</p>
                  <p className="text-white text-sm sm:text-lg">{project.duration}</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full 
                           h-[220px] sm:h-[320px] md:h-[500px] 
                           object-cover border border-red-500/30"
              />
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                The Challenge
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                Our Solution
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                {project.solution}
              </p>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {project.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    src={img}
                    alt={`Project image ${idx + 1}`}
                    className="w-full 
                               h-40 sm:h-44 md:h-48 
                               object-cover border border-red-500/30 
                               hover:border-red-500 transition-colors duration-300"
                  />
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                The Process
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.process}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-2 bg-zinc-800 
                               border border-red-500/30 
                               text-[10px] sm:text-sm uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                Results & Impact
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.results}
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="border-l-4 border-red-500 
                         pl-4 sm:pl-6 md:pl-8 
                         py-4 sm:py-6 
                         bg-zinc-800/50"
            >
              <p className="text-gray-300 text-sm sm:text-lg italic mb-3 sm:mb-4">
                "{project.testimonial.text}"
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                {project.testimonial.author}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {project.testimonial.position}
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


export default OurStudio;