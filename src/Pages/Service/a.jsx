import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Zap,
  ArrowRight,
  Clock,
  DollarSign,
  X,
  CheckCircle,
} from "lucide-react";
import vdo1 from "../../assets/video/footage2.mp4";
import vdo2 from "../../assets/video/footage2.mp4";
import vdo3 from "../../assets/video/footage3.mp4";
import vdo4 from "../../assets/video/8760caa0-582a50ce.mp4";
import vdo5 from "../../assets/video/montage footage.mp4";
import vdo6 from "../../assets/video/footage2.mp4";
import vdo7 from "../../assets/video/footage2.mp4";
import vdo8 from "../../assets/video/footage2.mp4";
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes borderGlow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(220, 38, 38, 0.4),
                    inset 0 0 15px rgba(220, 38, 38, 0.1);
      }
      50% {
        box-shadow: 0 0 30px rgba(220, 38, 38, 0.6),
                    inset 0 0 20px rgba(220, 38, 38, 0.2);
      }
    }

    @keyframes borderScan {
      0% {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      25% {
        top: 0;
        left: auto;
        right: 0;
        width: 2px;
        height: 100%;
      }
      50% {
        top: auto;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
      }
      75% {
        top: 0;
        bottom: auto;
        left: 0;
        right: auto;
        width: 2px;
        height: 100%;
      }
      100% {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    }
  `;
  if (!document.getElementById("card-animations")) {
    style.id = "card-animations";
    document.head.appendChild(style);
  }
}
const Services = () => {
  const [activeTab, setActiveTab] = useState("gig");
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);
  const detailsRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedService(null);
  };

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
      video: vdo1,
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
      video: vdo2,
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
      video: vdo3,
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
      video: vdo4,
    },
  ];

  const customServices = [
    {
      id: 5,
      name: "Full 3D Explainer",
      description:
        "Complete 3D animated explainer videos tailored to your business needs with custom storytelling.",
      category: "Corporate",
      duration: "2-3 weeks",
      price: "Custom Quote",
      features: ["Script writing", "Voiceover", "Custom models"],
      image: "🎬",
      video: vdo5,
    },
    {
      id: 6,
      name: "Architectural Walkthrough",
      description:
        "Photorealistic architectural visualizations with cinematic camera movements and lighting.",
      category: "Architecture",
      duration: "3-4 weeks",
      price: "Custom Quote",
      features: ["Photorealistic", "VR ready", "Day/night modes"],
      image: "🏢",
      video: vdo6,
    },
    {
      id: 7,
      name: "Game Asset Creation",
      description:
        "Complete game-ready 3D assets from concept to final optimization for any game engine.",
      category: "Gaming",
      duration: "2-6 weeks",
      price: "Custom Quote",
      features: ["Game optimized", "PBR textures", "LOD models"],
      image: "🎮",
      video: vdo7,
    },
    {
      id: 8,
      name: "VFX Integration",
      description:
        "Professional visual effects integration with live-action footage for films and commercials.",
      category: "Film/TV",
      duration: "4-8 weeks",
      price: "Custom Quote",
      features: ["Compositing", "Color grading", "Camera tracking"],
      image: "🎥",
      video: vdo8,
    },
  ];

  const ServiceCard = ({ service, index, isGig }) => {
    const isSelected = selectedService?.id === service.id;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        animate={{
          scale: isSelected ? 0.95 : 1,
          opacity: isSelected ? 0.7 : 1,
          height: selectedService ? "200px" : "auto",
        }}
        className="group relative bg-gradient-to-br from-zinc-900 to-black border border-red-600 overflow-hidden animate-[borderGlow_2s_ease-in-out_infinite]"
      >

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-black/50 transition-all duration-500" />

        {/* Main Grid Layout */}
        <div
          className={`grid ${
            selectedService ? "grid-cols-1" : "grid-cols-[1fr_200px]"
          }`}
        >
          {/* Left Section - Text Content */}
          <div
            className={`relative flex flex-col justify-between transition-all duration-300 ${
              selectedService ? "p-4" : "p-8 border-r-2 border-gray-700"
            }`}
          >
            <div>
              {/* Title */}
              <h3
                className={`font-bold text-white font-serif transition-all duration-300 ${
                  selectedService
                    ? "text-2xl h-16 flex items-center"
                    : "text-4xl lg:text-5xl mb-6 leading-tight"
                }`}
              >
                {service.name}
              </h3>

              {/* Category Badge - Only show when no service selected */}
              {!selectedService && (
                <div className="inline-block">
                  <span className="bg-red-700 text-white text-sm font-bold px-4 py-2 uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Corner Accent */}
          {!selectedService && (
            <div className="relative">
              {/* Top Right Red Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-red-700"></div>
            </div>
          )}
        </div>

        {/* Bottom Section - Full Width */}
        <div
          className={`grid ${
            selectedService ? "grid-cols-1" : "grid-cols-[1fr_200px]"
          }`}
        >
          {/* Bottom Left - Button and Corner */}
          {/* Bottom Left - Button and Corner */}
          <div className="relative p-0">
            {/* More Information Button */}
            <button
              onClick={() => setSelectedService(service)}
              className={`w-full bg-red-700 hover:bg-zinc-900 text-white text-left font-bold text-lg transition-colors  ${
                selectedService
                  ? "px-4 py-3 border-t border-gray-700"
                  : "px-8 py-6 border-t-2 border-b-2 border-gray-700"
              }`}
            >
              More Information <span className="text-2xl">→</span>
            </button>

            {/* Bottom Left Red Corner - hide when selected */}
            {!selectedService && (
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-red-700"></div>
            )}
          </div>

          {/* Bottom Right - Image/Icon with Glow */}
          {!selectedService && (
            <div className="relative border-t-2 border-l-2 border-gray-700 flex items-center justify-center p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse" />
              </div>
              <div className="relative text-7xl z-10">{service.image}</div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <div
        id="banner-page"
        className="relative h-screen overflow-hidden top-0 font-silverblack"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
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
              <Box className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-9xl font-bold mb-6 text-white font-orbitron"
            >
              Services
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Tab Selector */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="sticky bg-black top-0 z-50 backdrop-blur-lg border-b border-red-900/30 px-4 md:px-8 py-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleTabChange("gig")}
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
              onClick={() => handleTabChange("custom")}
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
          <div className="flex gap-8">
            {/* Services Cards - Left Side */}
            <div
              className={`transition-all duration-500 ${
                selectedService ? "w-1/2" : "w-full"
              }`}
            >
              <AnimatePresence mode="wait">
                {activeTab === "gig" ? (
                  <motion.div
                    key="gig"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
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
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
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

            {/* Details Panel - Right Side */}
            <AnimatePresence>
              {selectedService && (
                <motion.div
                  ref={detailsRef}
                  initial={{ opacity: 0, x: 100, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "48%" }}
                  exit={{ opacity: 0, x: 100, width: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="sticky top-24 h-fit"
                >
                  <div className="bg-black border-2 border-red-600 overflow-hidden">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 z-50 p-2 bg-red-700 hover:bg-red-800 transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Video Section */}
                    <div className="relative h-64 bg-black">
                      <video
                        className="w-full h-full object-cover "
                        src={selectedService.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                    </div>

                    {/* Details Section */}
                    <div className="relative p-8 bg-black/95 backdrop-blur-xl border-t-2 border-white">
                      {/* Category Badge */}
                      <div className="inline-block mb-4">
                        <span className="bg-red-700 text-white text-sm font-bold px-4 py-2 uppercase tracking-wide">
                          {selectedService.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-4 font-serif">
                        {selectedService.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {selectedService.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Timeline & Pricing Grid */}
                      <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-900 border-2 border-white mb-6">
                        <div className="flex items-start gap-2">
                          <Clock className="w-5 h-5 text-red-500 mt-1" />
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                              Timeline
                            </p>
                            <p className="text-white text-base font-bold">
                              {selectedService.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-red-500 mt-1" />
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                              Pricing
                            </p>
                            <p className="text-white text-base font-bold">
                              {selectedService.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 transition-all duration-300 text-base uppercase tracking-wider">
                        ORDER NOW →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black relative py-20 px-4 md:px-8"
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
