import React from "react";
import { motion } from "framer-motion";

const TabSelector = ({ activeTab, handleTabChange }) => {
  return (
    <div className="bg-black/95 backdrop-blur-lg border-b border-red-900/30 px-4 md:px-8 py-6">
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
    </div>
  );
};

export default TabSelector;