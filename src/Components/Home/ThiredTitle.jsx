import { motion } from "framer-motion";
import React from "react";
import { cn } from './../../lib/utils';

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
        src="/src/assets/video/bg1.mp4"   
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay (keep/remove as you want) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <li className="relative z-10 flex cursor-pointer flex-col items-center overflow-visible">
        <div className="relative flex items-start">
          <TextRoll
            center
            className="text-4xl text-red-600 font-extrabold uppercase leading-[0.8] tracking-wide transition-colors lg:text-[12vw]"
          >
            7007&nbsp;&nbsp;Studio
          </TextRoll>
        </div>
      </li>

    </ul>
  );
};

const STAGGER = 0.035;

const TextRoll = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default ThiredTitle;
