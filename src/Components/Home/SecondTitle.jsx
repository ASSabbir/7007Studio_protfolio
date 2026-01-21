import React from 'react';
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
        className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-start overflow-hidden"
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
         {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/40 to-transparent" /> */}
 <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/30 to-transparent" />
 <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/60 to-transparent" />
        {/* Content */}
        <div className="relative z-10 w-full 
          px-6 sm:px-10 md:px-16 lg:px-20
          flex flex-col justify-center items-start"
        >
          {/* Motion Title*/}
          <motion.div
            
            className="font-KronaOne px-15 pt-15 text-red-600 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl 
              font- leading-none tracking-tighter relative"
          >
            <span className="relative z-10"
              
            >
              7007 Studio is a CGI, VFX, post-production, and gaming studio.
              we specialize in 3D animation and visual effects
            </span>
          </motion.div>

          {/* Bottom White Text */}
          <div className="px-15 mt-10 md:mt-12 pb-15">
            <p className="font-KronaOne text-white text-2xl sm:text-3xl md:text-4xl lg:text-2xl leading-snug md:leading-tight tracking-tight">
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
