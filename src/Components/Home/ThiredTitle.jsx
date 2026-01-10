import { motion } from "framer-motion";
import React from "react";
import { cn } from './../../lib/utils';
import bg1 from '../../assets/video/bg1.mp4'

const ThiredTitle = () => {
  const navigationItems = [
    '7007 Studio is a CGI, VFX, post-production, and gaming studio',
    'we specialize in 3D animation and visual effects'
  ];

  return (
    <ul className=" border-red-600 relative bs flex h-[80vh] w-full flex-1 flex-col items-center justify-center gap-1.5 px-7 py-3 overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bg1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay (keep/remove as you want) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <li className="relative z-10 flex cursor-pointer h-full flex-col items-center overflow-visible">
        <div className="relative justify-end flex pb-12 h-full flex-col items-center text-red-600 font-semibold uppercase leading-[0.8] tracking-[0.9em] transition-colors">
          <h1
            center
            className="text-4xl lg:text-[10vw]"
          >
            7007
          </h1>
          <br></br>
          <h1 className="text-[14vw]">Studio</h1>
        </div>
      </li>

    </ul>
  );
};

export default ThiredTitle;
