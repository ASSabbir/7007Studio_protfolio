import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../../assets/video/vid1.mp4';

const Philosophy = () => {
  const philosophyLines = [
    { text: "Achievement is not the end — it's the breaking point.", color: "red" },
    { text: "Beyond every completed goal lies a new vision waiting to be built. That's where we begin again.", color: "white" },
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

            {/* Title */}
            <motion.div
              className="relative inline-block overflow-hidden cursor-pointer mb-24"
              initial={{ 
                scale: 0,
                rotateX: -90,
                transformOrigin: "top center"
              }}
              whileInView={{ 
                scale: 1,
                rotateX: 0
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              <h2 className="text-7xl md:text-6xl font-bold text-red-600 tracking-tighter relative z-10 tracking-wide">
                PHILOSOPHY
              </h2>
            </motion.div>

            {/* Philosophy Lines with 3D Scale Effect */}
            <ul className="space-y-12">
              {philosophyLines.map((line, index) => (
                <motion.li
                  key={index}
                  initial={{ 
                    scale: 0,
                    scaleY: 0.2,
                    transformOrigin: "top center",
                    opacity: 0
                  }}
                  whileInView={{ 
                    scale: 1,
                    scaleY: 1,
                    opacity: 1
                  }}
                  transition={{ 
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.6, 0.01, 0.05, 0.95]
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`text-2xl md:text-2xl leading-[1.2] tracking-wide`}
                  style={{
                    color: line.color === "red" ? '#ff0000' : '#ffffff',
                    letterSpacing: '0.08em',
                    perspective: "1000px"
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
            <source src={video1} type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
};

export default Philosophy;