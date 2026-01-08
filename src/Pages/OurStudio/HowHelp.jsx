import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HowHelp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-6xl w-full">
        {/* Main Content Container */}
        <div className="relative">

          {/* Characters Container */}
          <div className="relative flex items-center justify-center gap-8 md:gap-16">
            
            {/* Client Character (Left) */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="relative z-10 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                
                {/* Client Body */}
                <svg width="200" height="280" viewBox="0 0 200 280" className="relative">
                  {/* Head */}
                  <motion.circle
                    cx="100"
                    cy="50"
                    r="35"
                    fill="#ff4444"
                    animate={isHovered ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Eyes */}
                  <circle cx="90" cy="45" r="4" fill="white" />
                  <circle cx="110" cy="45" r="4" fill="white" />
                  
                  {/* Smile */}
                  <motion.path
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    d={isHovered ? "M 85 55 Q 100 68 115 55" : "M 85 55 Q 100 62 115 55"}
                    animate={isHovered ? {} : { d: ["M 85 55 Q 100 62 115 55", "M 85 55 Q 100 65 115 55", "M 85 55 Q 100 62 115 55"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Body */}
                  <motion.rect
                    x="70"
                    y="90"
                    width="60"
                    height="80"
                    rx="10"
                    fill="#cc0000"
                    animate={{ scaleY: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Left Arm (Reaching/Waving) */}
                  <motion.rect
                    x="130"
                    y="100"
                    width="50"
                    height="15"
                    rx="7"
                    fill="#ff4444"
                    animate={isHovered ? { rotate: -45, y: -20 } : { rotate: [0, -5, 0] }}
                    transition={{ duration: isHovered ? 0.3 : 2, repeat: isHovered ? 0 : Infinity }}
                    style={{ transformOrigin: "130px 107px" }}
                  />
                  
                  {/* Right Arm */}
                  <rect x="20" y="110" width="50" height="15" rx="7" fill="#ff4444" />
                  
                  {/* Legs */}
                  <rect x="75" y="170" width="20" height="60" rx="10" fill="#990000" />
                  <rect x="105" y="170" width="20" height="60" rx="10" fill="#990000" />
                  
                  {/* Feet */}
                  <ellipse cx="85" cy="240" rx="15" ry="8" fill="#660000" />
                  <ellipse cx="115" cy="240" rx="15" ry="8" fill="#660000" />
                </svg>

                {/* "Hi!" Text beside hand */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 200, y: 60 }}
                      animate={{ opacity: 1, scale: 1, x: 200, y: 60 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
                      className="absolute text-white font-bold text-4xl"
                      style={{ top: 0, left: 0 }}
                    >
                      Hi...
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center relative z-10 mt-10"
          >
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-gray-400 text-4xl lg:text-9xl"
            >
              Ready to start your next project? We're here to help!
            </motion.p>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowHelp;