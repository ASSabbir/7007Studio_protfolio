import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceMotivation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-7xl w-full">
        
        {/* Main Container */}
        <div className="relative">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            <p className="text-gray-400 text-xl md:text-9xl">
              Experience the future of design with our 3D services
            </p>
          </motion.div>

          {/* 3D Cube Visualization */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            
            {/* Animated 3D Cube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-64 h-64 md:w-24 md:h-24" style={{ perspective: '1000px' }}>
                <motion.div
                  className="w-full h-full relative"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    rotateX: isHovered ? 25 : 15,
                    rotateY: isHovered ? 360 : 0,
                  }}
                  transition={{
                    rotateY: { duration: isHovered ? 3 : 0, repeat: isHovered ? Infinity : 0, ease: "linear" },
                    rotateX: { duration: 0.5 }
                  }}
                >
                  {/* Front Face */}
                  <motion.div
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-purple-400 rounded-lg flex items-center justify-center text-white text-4xl font-bold"
                    style={{ transform: 'translateZ(80px)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    3D
                  </motion.div>
                  
                  {/* Back Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-pink-600 to-red-600 border-2 border-pink-400 rounded-lg"
                    style={{ transform: 'translateZ(-80px) rotateY(180deg)' }}
                  />
                  
                  {/* Right Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-blue-400 rounded-lg"
                    style={{ transform: 'rotateY(90deg) translateZ(80px)' }}
                  />
                  
                  {/* Left Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-red-600 to-orange-600 border-2 border-red-400 rounded-lg"
                    style={{ transform: 'rotateY(-90deg) translateZ(80px)' }}
                  />
                  
                  {/* Top Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-green-600 to-blue-600 border-2 border-green-400 rounded-lg"
                    style={{ transform: 'rotateX(90deg) translateZ(80px)' }}
                  />
                  
                  {/* Bottom Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-yellow-600 to-green-600 border-2 border-yellow-400 rounded-lg"
                    style={{ transform: 'rotateX(-90deg) translateZ(80px)' }}
                  />
                </motion.div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceMotivation;