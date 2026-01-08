import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SecondTitle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 🔥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/video/bg2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full text-center text-red-600 
        px-6 sm:px-10 md:px-16 lg:px-20
        text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl
        leading-tight sm:leading-snug lg:leading-none normal-case"
      >
        <motion.div
          style={{ y, opacity }}
          className="relative py-6 sm:py-8 md:py-10 overflow-hidden break-words"
        >
          7007 Studio is a CGI, VFX, post-production, and gaming studio.
          we specialize in 3D animation and visual effects
        </motion.div>
      </div>
    </div>
  );
};

export default SecondTitle;
