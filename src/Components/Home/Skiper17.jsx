import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

const projects = [
  {
    title: "Project 1",
    src: "https://veikk.com/image/catalog/news/new-9/1591348563266576.jpg",
  },
  {
    title: "Project 2",
    src: "https://d1a9v60rjx2a4v.cloudfront.net/2020/10/22/18_09_06_462_grizzltWireframe.jpg",
  },
  {
    title: "Project 3",
    src: "https://miro.medium.com/v2/resize:fit:1400/0*2grHU-ATndUd7VNA.jpg",
  },
  {
    title: "Project 3",
    src: "https://s3.amazonaws.com/redvector-public-assets/cms-content/production/uploads/2016/09/3d-modeling-for-construction.png",
  },
  {
    title: "Project 3",
    src: "https://arcadium3d.com/build/assets/Arcadium3DDesignA-CyhRRK7I.png",
  },
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
        className="relative bg-black flex w-full flex-col items-center pt-[20vh]"
      >
        <h1 className=" font-extrabold text-red-600 uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-[12vw]">Our Work</h1>
        


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
        className="relative h-[70vh] w-[80vw] origin-top overflow-hidden rounded-3xl shadow-xl"
      >
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export { Skiper17 };
