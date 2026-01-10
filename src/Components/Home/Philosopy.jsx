import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const [titleHover, setTitleHover] = useState(false);

  const philosophyLines = [
    { text: "Achievement is not the end — it’s the breaking point.", color: "red" },
    { text: "Beyond every completed goal lies a new vision waiting to be built. That’s where we begin again.", color: "white" },
    { text: "We believe powerful visuals are crafted through structure, clarity, and discipline.", color: "red" },
    { text: "Each frame tells a story — not just how it looks, but why it exists.", color: "red" },
    { text: "We dream. We build. We evolve.", color: "white" }
  ];

  return (
    <div className="font-KronaOne min-h-screen bg-black text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left Side - Text */}
        <div className="flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-32 py-16 sm:py-20 lg:py-0 z-10 relative">
          <div className="max-w-full sm:max-w-3xl lg:max-w-5xl w-full">

            {/* Title with White Slide Hover Effect */}
            <div
              className="relative inline-block overflow-hidden cursor-pointer mb-12 sm:mb-16 lg:mb-24"
              onMouseEnter={() => setTitleHover(true)}
              onMouseLeave={() => setTitleHover(false)}
            >
              {/* White Background Slide */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                animate={{ x: titleHover ? '100%' : '-100%' }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              />

              {/* Text */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 tracking-tighter relative z-10">
                OUR PHILOSOPHY
              </h2>
            </div>

            {/* Philosophy Lines */}
            <ul className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              {philosophyLines.map((line, index) => (
                <motion.li
                  key={index}
                  initial={{ backgroundPosition: '0% 50%' }}
                  whileInView={{ backgroundPosition: '200% 50%' }}
                  transition={{ duration: 2.2, ease: 'linear' }}
                  viewport={{ once: true }}
                  className={`text-lg sm:text-xl md:text-2xl leading-[1.2] tracking-wide bg-[linear-gradient(110deg,#ffffff,rgba(255,255,255,0.3),#ffffff)] bg-[length:200%_100%] bg-clip-text text-transparent`}
                  style={{
                    color: line.color === "red" ? '#ff0000' : '#ffffff',
                    letterSpacing: '0.05em',
                  }}
                >
                  {line.text}
                </motion.li>
              ))}
            </ul>

          </div>
        </div>

        {/* Right Side - Video */}
        <div className="relative h-96 sm:h-[500px] md:h-[600px] lg:h-screen overflow-hidden">
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
