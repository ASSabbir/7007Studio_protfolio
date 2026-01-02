import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const BottomCTA = () => {
  return (
    <motion.div
      
      className="bg-black relative py-20 px-4 md:px-8 min-h-screen flex items-center justify-center"
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
  );
};

export default BottomCTA;