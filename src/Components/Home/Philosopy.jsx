import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const philosophyLines = [
    { text: "Achievement is not the end — it’s the breaking point.", color: "red" },
    { text: "Beyond every completed goal lies a new vision waiting to be built. That’s where we begin again.", color: "white" },
    { text: "We believe powerful visuals are crafted through structure, clarity, and discipline.", color: "red" },
    { text: "Each frame tells a story — not just how it looks, but why it exists.", color: "red" },
    { text: "We dream. We build. We evolve.", color: "white" }
  ];

  return (
    <div className="py-10 min-h-screen bg-black text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left Side - Text */}
        <div className="flex flex-col justify-center items-center px-12 md:px-28 lg:px-32 py-20 lg:py-0 z-10 relative">
          <div className="max-w-5xl w-full">

            {/* Title Reveal */}
            <motion.h2
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="tracking-wide text-7xl md:text-9xl font-bold mb-24 tracking-tighter text-left text-red-600 overflow-hidden"
            >
              OUR PHILOSOPHY
            </motion.h2>

            <ul className="space-y-12">
              {philosophyLines.map((line, index) => (
                <motion.li
                  key={index}
                  initial={{ backgroundPosition: '0% 50%' }}
                  whileInView={{ backgroundPosition: '200% 50%' }}
                  transition={{ duration: 2.2, ease: 'linear' }}
                  viewport={{ once: true }}
                  className={`text-3xl md:text-4xl leading-[1.2] tracking-wide bg-[linear-gradient(110deg,#ffffff,rgba(255,255,255,0.3),#ffffff)] bg-[length:200%_100%] bg-clip-text text-transparent`}
                  style={{
                    color: line.color === "red" ? '#ff0000' : '#ffffff',
                    letterSpacing: '0.08em' 
                  }}
                >
                  {line.text}
                </motion.li>
              ))}
            </ul>

          </div>
        </div>

        {/* Right Side - Video */}
        <div className="relative h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
          >
            <source src="/src/assets/video/vid1.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
};

export default Philosophy;
