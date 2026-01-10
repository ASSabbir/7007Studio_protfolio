import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import video1 from '../../assets/video/bg2.mp4'

const SecondTitle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div>
      {/* Main Section with Video */}
      <div
        ref={ref}
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-start overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full 
          px-4 sm:px-6 md:px-12 lg:px-20
          flex flex-col justify-center items-start"
        >
          {/* Motion Title */}
          <motion.div
            style={{ y, opacity }}
            className="font-KronaOne text-red-600 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-bold leading-snug md:leading-tight tracking-tight relative z-10"
          >
            7007 Studio is a CGI, VFX, post-production, and gaming studio.
            We specialize in 3D animation and visual effects.
          </motion.div>

          {/* Bottom White Text */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <p className="font-KronaOne text-white 
              text-lg sm:text-xl md:text-2xl lg:text-3xl 
              leading-snug sm:leading-snug md:leading-tight lg:leading-tight 
              tracking-wide"
            >
              We collaborate <br />
              with studios, agencies, and brands to deliver <br />
              production-ready digital content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTitle;
