import React from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";
import vdo1 from "../../assets/video/montage footage.mp4";

const HeroSectionStudio = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-silverblack">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vdo1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Hero Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-full flex items-center justify-center px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          

          <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-4xl md:text-6xl lg:text-[14vw] font-bold mb-6 text-red-600 uppercase tracking-wide font-OdibeeSans"
                    >
                      Our studio
                    </motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSectionStudio;