import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Zap,
  Sparkles,
  ArrowRight,
  Clock,
  DollarSign,
  Package,
} from "lucide-react";
import vdo1 from "../../assets/video/footage2.mp4";

const Services = () => {
  const [activeTab, setActiveTab] = useState("gig");
  const containerRef = useRef(null);

  const gigServices = [
    {
      id: 1,
      name: "Product Animation",
      description:
        "High-quality 3D product visualization with smooth rotations and dynamic lighting effects.",
      category: "Commercial",
      duration: "3-5 days",
      price: "Starting at $299",
      features: ["360° rotation", "HD rendering", "2 revisions"],
      image: "🎁",
    },
    {
      id: 2,
      name: "Logo Animation",
      description:
        "Eye-catching animated logos that bring your brand identity to life with professional motion design.",
      category: "Branding",
      duration: "2-3 days",
      price: "Starting at $199",
      features: ["Multiple formats", "4K quality", "Sound design"],
      image: "⚡",
    },
    {
      id: 3,
      name: "Character Rigging",
      description:
        "Professional character rigging for animations with full body controls and facial expressions.",
      category: "Character",
      duration: "5-7 days",
      price: "Starting at $399",
      features: ["Full body rig", "Facial controls", "Walk cycles"],
      image: "🎭",
    },
    {
      id: 4,
      name: "Motion Graphics",
      description:
        "Dynamic motion graphics for social media, presentations, and digital marketing campaigns.",
      category: "Marketing",
      duration: "3-4 days",
      price: "Starting at $249",
      features: ["Social ready", "Custom design", "Unlimited colors"],
      image: "✨",
    },
  ];

  const customServices = [
    {
      id: 1,
      name: "Full 3D Explainer",
      description:
        "Complete 3D animated explainer videos tailored to your business needs with custom storytelling.",
      category: "Corporate",
      duration: "2-3 weeks",
      price: "Custom Quote",
      features: ["Script writing", "Voiceover", "Custom models"],
      image: "🎬",
    },
    {
      id: 2,
      name: "Architectural Walkthrough",
      description:
        "Photorealistic architectural visualizations with cinematic camera movements and lighting.",
      category: "Architecture",
      duration: "3-4 weeks",
      price: "Custom Quote",
      features: ["Photorealistic", "VR ready", "Day/night modes"],
      image: "🏢",
    },
    {
      id: 3,
      name: "Game Asset Creation",
      description:
        "Complete game-ready 3D assets from concept to final optimization for any game engine.",
      category: "Gaming",
      duration: "2-6 weeks",
      price: "Custom Quote",
      features: ["Game optimized", "PBR textures", "LOD models"],
      image: "🎮",
    },
    {
      id: 4,
      name: "VFX Integration",
      description:
        "Professional visual effects integration with live-action footage for films and commercials.",
      category: "Film/TV",
      duration: "4-8 weeks",
      price: "Custom Quote",
      features: ["Compositing", "Color grading", "Camera tracking"],
      image: "🎥",
    },
  ];

  const ServiceCard = ({ service, index, isGig }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-black border border-red-900/30 hover:border-red-500 transition-all duration-500 overflow-hidden"
      >
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-black/50 transition-all duration-500" />

        <div className="relative p-6 md:p-8">
          {/* Icon/Emoji */}
          <div className="text-6xl mb-4 transition-transform duration-1000">
            {service.image}
          </div>

          {/* Category Badge */}
          <div className="inline-block mb-3">
            <span className="text-xs font-urbanist font-semibold text-red-500 bg-red-500/10 px-3 py-1 border border-red-500/30">
              {service.category}
            </span>
          </div>

          {/* Service Name */}
          <h3 className="text-2xl md:text-2xl font-urbanist text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 font-dmsans text-sm md:text-base mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-red-500" />
                <span className="text-gray-500 font-dmsans text-sm">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-red-900/30">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-xs text-gray-600 font-dmsans">Timeline</p>
                <p className="text-sm text-white font-dmsans">
                  {service.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-xs text-gray-600 font-dmsans">Pricing</p>
                <p className="text-sm text-white font-dmsans">
                  {service.price}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ x: 5 }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-silverbold py-3 px-6 flex items-center justify-center gap-2 transition-all duration-300 group/btn"
          >
            {isGig ? "Order Now" : "Get Quote"}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-500" />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen  text-white overflow-hidden">
      {/* Hero Section */}

      <div
        id="banner-page"
        className="relative h-screen overflow-hidden top-0 font-silverblack"
      >
        {/* Background Video */}
        <video
          className="absolute  top-0 left-0 w-full h-full object-cover -z-10"
          src={vdo1}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>

        {/* Hero Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-40 md:pt-70 pb-16 px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Box className="w-16 h-16 md:w-20 md:h-20 text-red-500 mx-auto animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-9xl font-bold mb-6 text-red-500 font-orbitron"
            >
              Services
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Tab Selector */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="sticky bg-black top-0 z-50  backdrop-blur-lg border-b border-red-900/30 px-4 md:px-8 py-6"
      >
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("gig")}
              className={`relative px-8 py-4 font-orbitron text-3xl transition-all duration-300 ${
                activeTab === "gig"
                  ? "text-white text-4xl tracking-widest"
                  : "text-gray-500 hover:text-gray-300 text-3xl tracking-tight"
              }`}
            >

              Gig Services
              {activeTab === "gig" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab("custom")}
              className={`relative px-8 py-4 font-orbitron text-3xl transition-all duration-300 ${
                activeTab === "custom"
                  ? "text-white text-4xl tracking-widest"
                  : "text-gray-500 hover:text-gray-300 text-3xl tracking-tight"
              }`}
            >

              Custom Projects
              {activeTab === "custom" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div ref={containerRef} className="bg-black px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "gig" ? (
              <motion.div
                key="gig"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {gigServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    isGig={true}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="custom"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {customServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    isGig={false}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black relative py-20 px-4 md:px-8 "
      >
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-12 h-12 text-red-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-urbanist mb-6">
            Ready to Start Your
            <span className="text-red-500"> 3D Project?</span>
          </h2>
          <p className="text-gray-400 font-dmsans text-lg mb-8 max-w-2xl mx-auto">
            Let's bring your ideas to life with cutting-edge 3D animation
            technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-silverbold text-5xl rounded-full px-12 py-4 inline-flex items-center gap-3 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
