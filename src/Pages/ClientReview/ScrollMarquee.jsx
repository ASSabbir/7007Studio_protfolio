import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollMarquee = () => {
  const [scrollDirection, setScrollDirection] = useState('right');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('right');
      } else {
        setScrollDirection('left');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const marqueeItems = [
    '3D Animation',
    'Client Testimonials',
    'Success Stories',
    'Happy Clients',
    'Five Star Reviews',
    'Trusted Partners'
  ];

  return (
    <div className="relative w-screen overflow-hidden py-8">
      <motion.div
        animate={{
          x: scrollDirection === 'right' ? [0, -2000] : [-2000, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex ">
            {marqueeItems.map((item, index) => (
              <h1 key={`${setIndex}-${index}`} className="text-6xl md:text-8xl lg:text-9xl font-black font-dmsans text-white mx-8">
                {item} <span className="text-red-500">-</span>
              </h1>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;