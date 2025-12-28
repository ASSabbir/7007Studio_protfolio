import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index, isGig, selectedService, setSelectedService }) => {
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

export default ServiceCard;