import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle, Star, Box } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Package = () => {
  const [selectedService, setSelectedService] = useState(null);
  const dotRef = useRef(null);

  // Sample data for services
  const services = [
    {
      id: 1,
      type: 'gig',
      title: 'Professional 3D Product Animation',
      category: 'Gig-Based Service',
      description: 'Photorealistic rendering with smooth transitions',
      priceRange: '$299 - $999',
      video: '/src/assets/video/montage footage.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
      rating: 4.9,
      reviews: 127,
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
      fullDescription: 'Transform your products into stunning visual experiences with our professional 3D product animation service. We specialize in creating photorealistic animations that showcase every detail of your product, from intricate textures to smooth mechanical movements. Our team uses industry-leading software and techniques to deliver animations that not only look incredible but also effectively communicate your product\'s value proposition to your audience.',
      packages: [
        {
          name: 'Basic',
          price: 299,
          delivery: '5 days',
          revisions: 2,
          features: ['15-second animation', 'HD Quality (1080p)', '2 Revisions', 'Basic lighting', 'Product turnaround']
        },
        {
          name: 'Standard',
          price: 599,
          delivery: '7 days',
          revisions: 4,
          features: ['30-second animation', '4K Quality', '4 Revisions', 'Advanced lighting', 'Background music', 'Multiple camera angles']
        },
        {
          name: 'Premium',
          price: 999,
          delivery: '10 days',
          revisions: 'Unlimited',
          features: ['60-second animation', '4K Quality', 'Unlimited Revisions', 'Premium lighting & effects', 'Background music', 'Source files included', 'Custom environments']
        }
      ]
    },
    {
      id: 2,
      type: 'custom',
      title: 'Custom VFX Production',
      category: 'Custom Service',
      description: 'Tailored visual effects for films & commercials',
      priceRange: 'Starting at $2,500',
      video: '/src/assets/video/footage2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop',
      rating: 5.0,
      reviews: 89,
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop',
      fullDescription: 'Elevate your visual storytelling with our custom VFX production services. Whether you\'re working on a feature film, commercial, music video, or digital content, our experienced team will work closely with you to bring your creative vision to life. We offer end-to-end VFX solutions including compositing, green screen work, CGI integration, particle effects, and more. Each project is approached with a collaborative mindset, ensuring that the final result exceeds your expectations.',
      customFeatures: [
        'Personalized consultation & creative direction',
        'Custom workflow planning & pipeline setup',
        'Dedicated project manager & team',
        'Flexible timeline adapted to your schedule',
        'Full creative control throughout production',
        'Premium support & unlimited communication',
        'Advanced compositing & color grading',
        'CGI & 3D integration services'
      ],
      startingPrice: 2500,
      estimatedTime: 'Varies by project scope'
    },
    {
      id: 3,
      type: 'gig',
      title: 'Motion Graphics Logo Animation',
      category: 'Gig-Based Service',
      description: 'Eye-catching animations for brand identity',
      priceRange: '$149 - $499',
      video: '/src/assets/video/footage3.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=600&fit=crop',
      rating: 4.8,
      reviews: 203,
      logo: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=200&h=200&fit=crop',
      fullDescription: 'Make a lasting impression with professionally crafted logo animations that bring your brand to life. Our motion graphics specialists create dynamic, memorable animations that enhance brand recognition and add a professional touch to your videos, presentations, and digital content. From subtle elegant movements to bold energetic reveals, we tailor each animation to perfectly match your brand personality and communication goals.',
      packages: [
        {
          name: 'Basic',
          price: 149,
          delivery: '3 days',
          revisions: 2,
          features: ['5-second animation', 'HD Quality', '2 Revisions', '1 Concept', 'Simple animation style']
        },
        {
          name: 'Standard',
          price: 299,
          delivery: '5 days',
          revisions: 4,
          features: ['10-second animation', '4K Quality', '4 Revisions', '2 Concepts', 'Sound effects', 'Multiple export formats']
        },
        {
          name: 'Premium',
          price: 499,
          delivery: '7 days',
          revisions: 'Unlimited',
          features: ['15-second animation', '4K Quality', 'Unlimited Revisions', '3 Concepts', 'Sound effects', 'Multiple formats', 'Variations for social media']
        }
      ]
    },
    {
      id: 4,
      type: 'custom',
      title: 'Enterprise Brand Campaign',
      category: 'Custom Service',
      description: 'Complete brand storytelling solutions',
      priceRange: 'Starting at $5,000',
      video: '/src/assets/video/vid1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop',
      rating: 5.0,
      reviews: 45,
      logo: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=200&h=200&fit=crop',
      fullDescription: 'Launch your brand to new heights with our comprehensive enterprise brand campaign services. We create integrated visual narratives that combine motion graphics, 3D animation, live-action footage, and visual effects to tell your brand story across multiple platforms. From concept development to final delivery, our team handles every aspect of production, ensuring consistency, quality, and impact across all touchpoints of your campaign.',
      customFeatures: [
        'Full campaign strategy & creative development',
        'Multi-platform content delivery (TV, web, social)',
        'Dedicated creative team & art director',
        'Brand guidelines integration & consistency',
        'Ongoing support & content iterations',
        'Analytics, reporting & performance tracking',
        'Asset library creation & management',
        'Training & handover sessions'
      ],
      startingPrice: 5000,
      estimatedTime: '4-12 weeks'
    }
  ];

  const leftColumn = services.filter((_, index) => index % 2 === 0);
  const rightColumn = services.filter((_, index) => index % 2 !== 0);

  // GSAP Scroll Animation
  useEffect(() => {
    const dot = dotRef.current;

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

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden py-20 font-KronaOne">

      {/* Section Titles */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="relative flex justify-between items-center mb-20">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <h2 className="text-4xl md:text-4xl font-KronaOne text-white tracking-wider">
              Gig <span className="text-red-500">Services</span>
            </h2>
            <span className="absolute left-0 -bottom-3 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />
          </motion.div>

          {/* Middle Divider */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '80px' }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-red-500"
          />

          {/* Right Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <h2 className="text-4xl md:text-4xl font-KronaOne text-white tracking-wider">
              Custom <span className="text-red-500">Solutions</span>
            </h2>
            <span className="absolute right-0 -bottom-3 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />
          </motion.div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="scroll-section max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative flex gap-8 md:gap-16 justify-between">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/30 via-red-500/50 to-red-500/30 -translate-x-1/2">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
            
            {/* Animated Middle Dot */}
            <div
              ref={dotRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl shadow-red-500/70"
            />
            
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
          </div>

          {/* Left Column */}
          <div className="flex-1 space-y-16">
            {leftColumn.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedService(item)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-16">
            {rightColumn.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedService(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden border border-red-500/30 bg-black cursor-pointer group h-[300px] font-KronaOne"
      onClick={onClick}
    >
      {/* Background Video */}
      <video
        src={item.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-500" />

      {/* Card Content - Bottom Only */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        {/* Title */}
        <h3 className="text-2xl md:text-2xl text-white leading-tight tracking-wide mb-2 font-KronaOne">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-red-500 text-sm font-medium mb-3 font-KronaOne">
          {item.description}
        </p>

        {/* Price Range */}
        <p className="text-gray-300 text-lg font-semibold mb-4 font-KronaOne">
          {item.priceRange}
        </p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-500/40" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-500/40" />
    </motion.div>
  );
};

// Service Modal Component
const ServiceModal = ({ service, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(
    service.type === 'gig' ? 1 : null
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto font-KronaOne"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="relative w-full max-w-7xl mx-auto my-8 bg-black border border-red-500/30 font-KronaOne"
        onClick={(e) => e.stopPropagation()}
      >

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* LEFT SIDE */}
          <div className="lg:col-span-3 p-6 lg:p-8 space-y-6 border-r border-red-500/20">
            
            {/* Video */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative rounded-lg overflow-hidden border border-red-500/30 group"
            >
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl text-white mb-2 font-KronaOne">
                {service.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-yellow-500 font-KronaOne text-sm">
                    {service.rating}
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-KronaOne">
                  ({service.reviews} reviews)
                </span>
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg lg:text-xl font-KronaOne text-red-500 mb-3">
                About This Service
              </h3>
              <p className="text-gray-300 leading-relaxed text-xs lg:text-sm font-KronaOne">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Packages / Features */}
            {service.type === 'gig' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg lg:text-xl font-KronaOne text-red-500 mb-4">
                  Available Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.packages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.2)' }}
                      onClick={() => setSelectedPackage(index)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedPackage === index
                          ? 'border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20'
                          : 'border-zinc-800 hover:border-red-500/50 bg-zinc-900/30'
                      }`}
                    >
                      <div className="flex flex-col mb-3">
                        <h4 className="text-base lg:text-lg font-KronaOne text-white mb-1">
                          {pkg.name}
                        </h4>
                        <div className="text-xl lg:text-2xl font-KronaOne text-red-500 mb-2">
                          ${pkg.price}
                        </div>
                        <p className="text-xs text-gray-400 font-KronaOne">
                          {pkg.delivery} • {pkg.revisions} Revisions
                        </p>
                      </div>

                      <ul className="space-y-1">
                        {pkg.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs text-gray-400 font-KronaOne"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg lg:text-xl font-KronaOne text-red-500 mb-4">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.customFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 6 }}
                      className="flex gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-red-500/30 transition-all duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs lg:text-sm font-KronaOne">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 p-6 lg:p-8 bg-zinc-900/30 flex flex-col">

            {/* Pricing Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-black/40 rounded-lg border border-red-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <Box className="w-5 h-5 text-red-500" />
                <span className="text-xs font-KronaOne text-gray-400 uppercase tracking-wider">
                  {service.type === 'gig' ? 'Package Pricing' : 'Starting Price'}
                </span>
              </div>

              {service.type === 'gig' && selectedPackage !== null ? (
                <motion.div
                  key={selectedPackage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl lg:text-5xl font-KronaOne text-white mb-2">
                    ${service.packages[selectedPackage].price}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-300 space-y-1 font-KronaOne">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      {service.packages[selectedPackage].delivery} delivery
                    </div>
                    <div className="text-gray-400">
                      {service.packages[selectedPackage].revisions} Revisions
                    </div>
                  </div>
                </motion.div>
              ) : service.type === 'custom' ? (
                <>
                  <div className="text-4xl lg:text-5xl font-KronaOne text-white mb-2">
                    ${service.startingPrice}+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-300 font-KronaOne">
                    <Clock className="w-4 h-4 inline mr-1 text-red-500" />
                    {service.estimatedTime}
                  </div>
                </>
              ) : (
                <div className="text-lg lg:text-xl text-gray-500 font-KronaOne">
                  Select a package above
                </div>
              )}
            </motion.div>

            {/* CTA Buttons - Immediately Below Pricing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(239, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-KronaOne py-3 lg:py-4 rounded-lg tracking-wider uppercase text-xs lg:text-sm transition-all duration-300"
              >
                {service.type === 'gig' ? 'Order Now' : 'Book Consultation'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(239, 68, 68, 1)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full border-2 border-red-500 text-red-500 hover:text-white font-KronaOne py-3 lg:py-4 rounded-lg tracking-wider uppercase text-xs lg:text-sm transition-all duration-300"
              >
                Contact Us
              </motion.button>

              <div className="pt-4 border-t border-zinc-800 text-center text-xs text-gray-400 flex justify-center gap-2 font-KronaOne">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Satisfaction guaranteed
              </div>
            </motion.div>

            {/* Key Features - Below CTA */}
            {((service.type === 'gig' && selectedPackage !== null) || service.type === 'custom') && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-6 bg-black/40 rounded-lg border border-red-500/20"
              >
                <h4 className="text-xs font-KronaOne text-gray-400 uppercase tracking-wider mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {service.type === 'gig' && selectedPackage !== null ? (
                    service.packages[selectedPackage].features.slice(0, 5).map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs lg:text-sm text-gray-300 font-KronaOne"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))
                  ) : (
                    service.customFeatures.slice(0, 5).map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs lg:text-sm text-gray-300 font-KronaOne"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))
                  )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Package;