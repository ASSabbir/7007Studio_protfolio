import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSectionStudio from './HeroSectionStudio';
import HowHelp from './HowHelp';
import Pipeline from './Pipeline';
import FAQ from './FAQ';




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
      title: 'E-Commerce Platform',
      category: '3D Animation',
      description: 'Revolutionary shopping experience with immersive 3D product visualization.',
      video: '/src/assets/video/vid1.mp4',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
      client: 'TechCorp Inc.',
      year: '2024',
      duration: '6 months',
      challenge: 'TechCorp needed to revolutionize their online shopping experience to compete with emerging AR/VR e-commerce platforms. Traditional 2D product images were no longer sufficient to showcase their premium product line.',
      solution: 'We developed a comprehensive 3D visualization system that allows customers to interact with products in real-time. Our team created over 500 photorealistic 3D models, implemented advanced rendering techniques, and designed an intuitive interface that seamlessly integrates these 3D elements into the existing platform.',
      process: 'The project began with extensive product photography and 3D scanning. Our modeling team then refined each asset to achieve photorealistic quality. We implemented a custom WebGL-based viewer that provides smooth 360-degree rotation, zoom capabilities, and material variation previews. The final phase involved rigorous testing across devices to ensure optimal performance.',
      results: 'The platform saw a 45% increase in user engagement and 32% boost in conversion rates within the first three months of launch. Customer returns decreased by 28% due to better product visualization. The average session duration increased from 3.5 to 6.2 minutes.',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
      ],
      technologies: ['Three.js', 'WebGL', 'React', 'Blender', 'Substance Painter'],
      testimonial: {
        text: 'The 3D visualization system has completely transformed how our customers interact with products online. The results exceeded our expectations.',
        author: 'James Peterson',
        position: 'CEO, TechCorp Inc.'
      }
    },
    {
      id: 2,
      title: 'Brand Identity Campaign',
      category: 'Motion Graphics',
      description: 'Complete brand transformation with stunning motion graphics and visual storytelling.',
      video: '/src/assets/video/bg2.mp4',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop',
      client: 'StartupX',
      year: '2024',
      duration: '4 months',
      challenge: 'StartupX was entering a crowded market and needed a distinctive brand identity that would resonate with their tech-savvy millennial audience while conveying professionalism and innovation.',
      solution: 'We crafted a comprehensive brand identity system centered around dynamic motion graphics. This included an animated logo system, brand guidelines, social media templates, and a complete suite of marketing materials featuring cohesive motion design elements.',
      process: 'Starting with brand discovery workshops, we identified core values and visual themes. Our design team created multiple concept directions, refining the chosen direction through iterative feedback. The motion graphics were developed using a modular system, ensuring consistency while allowing flexibility across different applications.',
      results: 'Brand recognition increased by 67% within the first quarter. Social media engagement grew by 89%, with video content receiving 3x more shares than previous static content. The campaign won two industry awards for motion design excellence.',
      images: [
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
      ],
      technologies: ['After Effects', 'Cinema 4D', 'Illustrator', 'Premiere Pro'],
      testimonial: {
        text: 'The motion graphics system gave our brand a personality that truly stands out. Our audience engagement has never been higher.',
        author: 'Michelle Rodriguez',
        position: 'Marketing Director, StartupX'
      }
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'VFX',
      description: 'Cinematic product reveal with breathtaking visual effects and CGI integration.',
      video: '/src/assets/video/bg1.mp4',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop',
      client: 'Innovation Labs',
      year: '2024',
      duration: '5 months',
      challenge: 'Innovation Labs needed a show-stopping product launch video for their flagship device that would generate buzz at a major tech conference and drive pre-orders.',
      solution: 'We produced a 90-second cinematic video featuring advanced VFX, including particle simulations, dynamic lighting, photorealistic CGI product integration, and seamless transitions between abstract concepts and product features.',
      process: 'Pre-production involved detailed storyboarding and previz. We built a complete CGI environment and product model, then integrated it with live-action footage. The VFX pipeline included particle effects for energy visualizations, advanced compositing for seamless integration, and color grading to achieve a premium, tech-forward aesthetic.',
      results: 'The launch video garnered over 2 million views in the first week and was featured in major tech publications including TechCrunch and The Verge. Pre-orders exceeded projections by 150%. The video won Best Product Launch Video at the Digital Marketing Awards.',
      images: [
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop'
      ],
      technologies: ['Houdini', 'Nuke', 'Maya', 'Redshift', 'DaVinci Resolve'],
      testimonial: {
        text: 'This video perfectly captured our product vision and generated incredible momentum for our launch.',
        author: 'Dr. Sarah Kim',
        position: 'Chief Product Officer, Innovation Labs'
      }
    },
    {
      id: 4,
      title: 'Architectural Visualization',
      category: '3D Rendering',
      description: 'Photorealistic architectural renders for luxury real estate development.',
      video: '/src/assets/video/footage3.mp4',
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop',
      client: 'Skyline Properties',
      year: '2024',
      duration: '3 months',
      challenge: 'Skyline Properties needed to secure funding for a $200M luxury development project before breaking ground. Potential investors needed to visualize the finished project to commit capital.',
      solution: 'We created a comprehensive suite of photorealistic architectural visualizations including exterior renders, interior walkthroughs, aerial views, and an interactive 3D tour. Each visualization was crafted to showcase the development in the most compelling light.',
      process: 'Working closely with the architectural team, we built detailed 3D models of the entire development. Our lighting artists created realistic lighting scenarios for different times of day. The rendering process used physically-based materials and advanced ray tracing for photorealistic results. We also developed an interactive VR experience for investor presentations.',
      results: 'The project was fully funded within two months, with visualizations playing a key role in securing $180M in investor commitments. The renders were used in all marketing materials and helped presell 40% of units before construction began. The project won three architectural visualization awards.',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop'
      ],
      technologies: ['3ds Max', 'V-Ray', 'Corona Renderer', 'Photoshop', 'Unreal Engine'],
      testimonial: {
        text: 'These visualizations were instrumental in securing our funding. Investors could truly see our vision.',
        author: 'Robert Chen',
        position: 'Managing Partner, Skyline Properties'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-KronaOne">
      
      {/* Hero Section */}
    <HeroSectionStudio></HeroSectionStudio>
    <HowHelp></HowHelp>
  

      {/* Team Members Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
              Team <span className="text-red-500">MEMBER'S</span>
            </h2>
            <p className="text-gray-400 text-lg w-full mx-auto text-center">
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
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
              Case <span className="text-red-500">Studies</span>
            </h2>
            <p className="text-gray-400 text-lg text-center w-full mx-auto">
             <span className='text-5xl text-red-500'>We begin </span> by understanding the project from the client’s perspective. From there, we translate that vision into a functional solution — breaking complex ideas down into clear, manageable parts and building them with intention and precision.
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
      <div className="absolute inset-0">
        <img 
          src={member.avatar} 
          alt={member.name}
          className="w-full h-full object-cover blur-xl"
          style={{ filter: 'blur(10px)' }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-10 h-full flex items-center min-h-[400px]">
        {/* Left Side - Content */}
        <div className="flex-1 pr-8">
          <span className="inline-block mb-5 bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 text-xs font-bold tracking-[0.35em] uppercase">
            {member.role}
          </span>

          <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide mb-4">
            {member.name}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            {member.bio}
          </p>

          {/* Bottom Info */}
          <div className="pt-6 border-t border-white/20">
            <div className="flex gap-8">
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Specialty</p>
                <p className="text-white text-sm">{member.specialty}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Experience</p>
                <p className="text-white text-sm">{member.experience}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Large Member Photo */}
        <div className="w-72 h-96 flex-shrink-0 relative overflow-hidden border-2 border-red-500/40 group-hover:border-red-500 transition-all duration-500">
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle gradient overlay on photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-500/40 z-20" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-500/40 z-20" />
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
      <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[500px]">
        {/* Top */}
        <div>
          <span className="inline-block mb-5 bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 text-xs font-bold tracking-[0.35em] uppercase">
            {project.category}
          </span>

          <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
            {project.title}
          </h3>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-12 border-t border-white/20">
          <span className="text-sm tracking-[0.4em] text-gray-300 uppercase group-hover:text-red-500 transition-colors duration-300">
            View Breakdown
          </span>

          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/30">
            <img
              src={project.logo}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-500/40" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-500/40" />
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
      <div className="min-h-screen p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-zinc-900 border border-red-500/30 max-w-6xl mx-auto my-8 font-KronaOne"
        >

          <div className="p-8 md:p-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <span className="inline-block mb-4 bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 text-xs font-bold tracking-[0.35em] uppercase">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{project.title}</h2>
              
              <div className="grid grid-cols-3 gap-8 pb-8 border-b border-zinc-800">
                <div>
                  <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Client</p>
                  <p className="text-white text-lg">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Year</p>
                  <p className="text-white text-lg">{project.year}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Duration</p>
                  <p className="text-white text-lg">{project.duration}</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[500px] object-cover border border-red-500/30"
              />
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
                {project.solution}
              </p>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    src={img}
                    alt={`Project image ${idx + 1}`}
                    className="w-full h-48 object-cover border border-red-500/30 hover:border-red-500 transition-colors duration-300"
                  />
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">The Process</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.process}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-zinc-800 border border-red-500/30 text-sm uppercase tracking-wider"
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
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">Results & Impact</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.results}
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="border-l-4 border-red-500 pl-8 py-6 bg-zinc-800/50"
            >
              <p className="text-gray-300 text-lg italic mb-4">
                "{project.testimonial.text}"
              </p>
              <p className="text-white font-bold">{project.testimonial.author}</p>
              <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurStudio;