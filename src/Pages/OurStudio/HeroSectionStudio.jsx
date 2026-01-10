import React from "react";
import { motion } from "framer-motion";
import vdo1 from "../../assets/video/montage footage.mp4";

const HeroSectionStudio = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-KronaOne">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vdo1}
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
        className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-6xl mx-auto text-center space-y-4 sm:space-y-6">

          {/* Big Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-4xl 
              sm:text-5xl 
              md:text-7xl 
              lg:text-9xl 
              font-bold 
              text-red-600 
              uppercase 
              tracking-wider
            "
          >
            Welcome 
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              text-lg 
              sm:text-xl 
              md:text-3xl 
              lg:text-4xl 
              font-bold 
              text-red-500 
              uppercase 
              tracking-wide
            "
          >
            To 7007 Studio
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              text-xs 
              sm:text-sm 
              md:text-base 
              lg:text-xl 
              text-white 
              leading-relaxed 
              md:leading-loose 
              max-w-3xl 
              mx-auto
              px-2 sm:px-0
            "
          >
            A place where ideas are shaped with intention, clarity, and craft.
            Everything we create begins with a clear idea and a focused process.
          </motion.p>

        </div>
      </motion.div> 
    </div>
  );
};

export default HeroSectionStudio;
