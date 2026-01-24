import React from "react";
import { motion } from "framer-motion";
import video1 from '../../assets/video/montage footage CF.mp4'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-KronaOne">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Hero Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-full flex items-center justify-center 
                   px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-4xl sm:max-w-4xl md:max-w-5xl mx-auto text-center">

          {/* Main Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-red-600 uppercase tracking-wider
                       mb-4 sm:mb-5 md:mb-6
                       text-3xl sm:text-4xl md:text-7xl lg:text-8xl"
          >
            CAPABILITIES
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-bold text-red-500 uppercase tracking-wide
                       mb-6 sm:mb-7 md:mb-8
                       text-lg sm:text-xl md:text-3xl lg:text-4xl"
          >
            How We Work
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white leading-relaxed mx-auto
                       text-sm sm:text-base md:text-lg lg:text-xl
                       max-w-xl sm:max-w-2xl md:max-w-3xl"
          >
            At 7007 Studio, we collaborate in two flexible ways — designed to
            support both clear production needs and open-ended ideas.
          </motion.p>

        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
