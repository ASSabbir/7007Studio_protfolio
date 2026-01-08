import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const [hoveredLine, setHoveredLine] = useState(null);
  const [videoHover, setVideoHover] = useState(false);

  const philosophyLines = [
    "Achievement is not the end — it's the breaking point.",
    "Beyond every completed goal lies a new vision waiting to be built.",
    "That's where we begin again.",
    "We believe powerful visuals are crafted through structure, clarity, and discipline.",
    "Each frame tells a story — not just how it looks, but why it exists.",
    "We dream. We build. We evolve."
  ];

  return (
    <div className="py-10 min-h-screen bg-black text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left Side - Text */}
        <div className="flex flex-col justify-center items-start px-12 md:px-28 lg:px-32 py-20 lg:py-0 z-10 relative">
          <div className="max-w-5xl w-full">

            {/* 🔥 Title Reveal */}
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
                <li
                  key={index}
                  className="flex items-start gap-6 cursor-default"
                  onMouseEnter={() => setHoveredLine(index)}
                  onMouseLeave={() => setHoveredLine(null)}
                >
                  {/* Bullet */}
                  <span
                    className="mt-4 w-3 h-3 rounded-full bg-red-600 transition-transform duration-500"
                    style={{
                      transform: hoveredLine === index ? 'scale(1.6)' : 'scale(1)'
                    }}
                  />

                  {/* 🔥 Text Shadow Run Animation */}
                  <motion.p
                    initial={{ backgroundPosition: '0% 50%' }}
                    whileInView={{ backgroundPosition: '200% 50%' }}
                    transition={{ duration: 2.2, ease: 'linear' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl leading-[1.1] transition-transform duration-500 bg-[linear-gradient(110deg,#ffffff,rgba(255,255,255,0.3),#ffffff)] bg-[length:200%_100%] bg-clip-text text-transparent"
                    style={{
                      transform: hoveredLine === index ? 'scale(1.06)' : 'scale(1)'
                    }}
                  >
                    {line}
                  </motion.p>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Right Side - Video */}
        <div
          className="relative h-screen overflow-hidden"
          onMouseEnter={() => setVideoHover(true)}
          onMouseLeave={() => setVideoHover(false)}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: videoHover ? 'translateX(-40px) scale(1.05)' : 'translateX(0) scale(1)'
            }}
          >
            <source src="/src/assets/video/vid1.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
};

export default Philosophy;
