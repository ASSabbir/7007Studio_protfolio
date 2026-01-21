import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bg1 from '../../assets/video/bg1.mp4';

const ThiredTitle = () => {
  const navigationItems = [
    '7007 Studio is a CGI, VFX, post-production, and gaming studio',
    'we specialize in 3D animation and visual effects'
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Split text into individual characters
  const splitText = (text, delayStart) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ y: 150, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: delayStart + (index * 0.08),
          ease: [0.6, 0.01, 0.05, 0.95]
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <ul 
      ref={ref}
      className="bg-black relative flex h-[80vh] w-full flex-1 flex-col items-center justify-center gap-1.5 px-7 py-3 overflow-hidden"
    >
      <li className="relative z-10 flex cursor-pointer h-full flex-col items-center overflow-hidden">
        <div className="relative justify-end flex pb-12 h-full flex-col items-center text-white font-semibold uppercase leading-[0.8] tracking-[0.9em] transition-colors overflow-hidden">
          <h1 className="text-5xl lg:text-[13vw] overflow-hidden">
            {splitText("7007", 0)}
          </h1>
          <br />
          <h1 className="text-[18vw] text-red-600 overflow-hidden">
            {splitText("Studio", 0.4)}
          </h1>
        </div>
      </li>
    </ul>
  );
};

export default ThiredTitle;