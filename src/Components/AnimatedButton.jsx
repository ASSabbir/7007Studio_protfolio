import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';

const AnimatedButton = () => {
  return (
    <div className="h-fit w-fit flex items-center justify-center p-4 gap-8">

      {/* Multiple Social Buttons */}
      <div className="flex gap-4">
        {[
          { icon: Facebook, label: 'Facebook', link: 'https://facebook.com' },
          { icon: Youtube, label: 'YouTube', link: 'https://youtube.com' },
          { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
          { icon: Instagram, label: 'Instagram', link: 'https://instagram.com' },
        ].map((social, index) => {
          const [hovered, setHovered] = useState(false);

          return (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full relative overflow-hidden bg-red-600 flex items-center justify-center text-xl w-fit h-fit p-3 text-black cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* White Background Animation */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                animate={{ x: hovered ? '0%' : '-100%' }}
                transition={{
                  duration: 0.4,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />

              {/* Icon */}
              <social.icon className="w-6 h-6 relative z-10" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedButton;
