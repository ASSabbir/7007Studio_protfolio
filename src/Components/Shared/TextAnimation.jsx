import { motion } from "framer-motion";
import React from "react";
import { cn } from './../../lib/utils';

const TextAnimation = ({navlinks}) => {
  

  return (
    <ul className="relative bs flex   ">
      
      

      {/* Content */}
      <li className="relative z-10 flex cursor-pointer flex-col items-center overflow-visible">
        <div className="relative flex items-start">
          <TextRoll
            center
            className="  tracking-wide transition-colors "
          >
            {navlinks}
          </TextRoll>
        </div>
      </li>

    </ul>
  );
};

const STAGGER = 0.035;

const TextRoll = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default TextAnimation;
