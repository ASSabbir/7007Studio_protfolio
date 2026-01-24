import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bg1 from "../../assets/video/bg1.mp4";

const ThiredTitle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Split text into animated characters
  const splitText = (text, delayStart = 0) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ y: 150, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: delayStart + index * 0.08,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section
      ref={ref}
      className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={bg1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center text-white font-semibold uppercase leading-[0.8] tracking-[0.9em]">
        <h1 className="text-5xl lg:text-[13vw] overflow-hidden">
          {splitText("7007", 0)}
        </h1>

        <h1 className="text-[18vw] text-red-600 overflow-hidden">
          {splitText("Studio", 0.4)}
        </h1>
      </div>
    </section>
  );
};

export default ThiredTitle;
