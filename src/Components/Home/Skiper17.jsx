import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import vdo1 from '../../assets/video/montage footage CF.mp4';
import vdo2 from '../../assets/video/CF10.mp4';
import vdo3 from '../../assets/video/CF11.mp4';

const projects = [
  { title: "Project 1", src: vdo1 },
  { title: "Project 2", src: vdo2 },
  { title: "Project 3", src: vdo3 },
];

const Skiper17 = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        style={{ paddingBottom: `${projects.length * 10}vh` }}
        className="relative bg-black flex w-full flex-col items-center"
      >
        {/* Section Title */}
        <h1 className="
          font-extrabold font-KronaOne text-red-600 transition-colors
          tracking-[-0.03em] sm:tracking-tight lg:tracking-wide
          leading-[1.0] sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8]
          py-8 sm:py-10 md:py-14 lg:py-20
          text-3xl sm:text-4xl md:text-5xl lg:text-[6vw] text-center
        ">
          SHOWREEL
        </h1>

        {/* Sticky Cards */}
        {projects.map((project, i) => {
          const targetScale = Math.max(0.5, 1 - (projects.length - i - 1) * 0.1);

          return (
            <StickyCard
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

const StickyCard = ({ i, src, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        style={{
          scale,
          top: `${i * 28}px`,
        }}
        className="relative w-full h-full origin-top overflow-hidden rounded-3xl shadow-xl"
      >
        <motion.video
          src={src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
    </div>
  );
};

export { Skiper17 };
