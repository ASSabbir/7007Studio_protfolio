import { motion } from "framer-motion";
import React from "react";
import { cn } from './../../lib/utils';

const ThiredTitle = () => {
  const navigationItems = [
    '7007 Studio is a CGI, VFX, post-production, and gaming studio',
    'we specialize in 3D animation and visual effects'
  ];

  return (
    <ul className="relative border-red-600 flex h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] w-full flex-1 flex-col items-center justify-center gap-1.5 px-4 sm:px-6 md:px-12 lg:px-20 py-3 overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/video/bg1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <li className="relative z-10 flex cursor-pointer h-full flex-col items-center overflow-visible">
        <div className="relative justify-center flex pb-8 sm:pb-10 md:pb-12 h-full flex-col items-center text-red-600 font-semibold uppercase leading-[0.8] tracking-[0.9em] transition-colors text-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10vw]">7007</h1>
          <br />
          <h1 className="text-6xl sm:text-7xl md:text-[12vw] lg:text-[14vw]">Studio</h1>
        </div>
      </li>

    </ul>
  );
};

export default ThiredTitle;
