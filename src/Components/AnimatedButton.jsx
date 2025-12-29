import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-fit w-fit  flex items-center justify-center p-4 gap-8">
      {/* Single Button */}
      <motion.div
        className="relative overflow-hidden bg-red-600 flex items-center justify-center text-xl w-fit h-fit p-2 text-black cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* White Background Animation - Left to Right */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '0%' : '-100%' }}
          transition={{
            duration: 0.4,
            ease: [0.65, 0, 0.35, 1]
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          animate={{
            color: isHovered ? '#000000' : '#000000'
          }}
          transition={{
            duration: 0.3
          }}
        >
          <Linkedin className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Multiple Social Buttons Example */}
      <div className="flex gap-4">
        {[
          { icon: Linkedin, label: 'LinkedIn' },
          { icon: Linkedin, label: 'Twitter' },
          { icon: Linkedin, label: 'Instagram' }
        ].map((social, index) => {
          const [hovered, setHovered] = useState(false);
          
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-red-600 flex items-center justify-center text-xl w-fit h-fit p-3 text-black cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* White Background Animation */}
              <motion.div
                className="absolute inset-0  bg-white"
                initial={{ x: '-100%' }}
                animate={{ x: hovered ? '0%' : '-100%' }}
                transition={{
                  duration: 0.4,
                  ease: [0.65, 0, 0.35, 1]
                }}
              />

              {/* Icon */}
              <social.icon className="w-6 h-6 relative z-10" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedButton;