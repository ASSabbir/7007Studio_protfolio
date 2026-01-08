import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import vdo1 from '../../assets/video/montage footage.mp4'
const projects = [
  {
    title: "Project 1",
    src: vdo1,
  },
  {
    title: "Project 2",
    src: vdo1
  },
  // {
  //   title: "Project 3",
  //   src: vdo1
  // },

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
        className="relative bg-black flex w-full flex-col items-center "
      >
        <h1
          className="
    font-extrabold
    text-red-600
    transition-colors

    tracking-[-0.03em] lg:tracking-wide
    leading-[0.9] sm:leading-[0.85] lg:leading-[0.8]

    py-10 sm:py-14 md:py-16 lg:py-20

    text-4xl sm:text-5xl md:text-6xl lg:text-[8vw]
  "
        >
          SHOWREEL
        </h1>



        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1
          );

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

const StickyCard = ({
  i,
  src,
  title,
  progress,
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
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
