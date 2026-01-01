"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import vdo from '../src/assets/video/montage footage.mp4'
import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaMuteButton,
  MediaTimeRange,
} from "media-chrome/react";

export default function SkiperVideo() {
  const [showVideo, setShowVideo] = useState(false);

  const x = useSpring(0, { mass: 0.1 });
  const y = useSpring(0, { mass: 0.1 });
  const opacity = useSpring(0, { mass: 0.1 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    opacity.set(1);
  };

  return (
    <section className="relative flex items-center justify-center py-62 bg-black">
      <AnimatePresence>
        {showVideo && <VideoModal close={() => setShowVideo(false)} />}
      </AnimatePresence>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => opacity.set(0)}
        onClick={() => setShowVideo(true)}
        className="relative w-80 h-48 cursor-pointer"
      >
        <motion.div
          style={{ x, y, opacity }}
          className="absolute z-10 flex items-center gap-2 text-white mix-blend-exclusion"
        >
          <Play size={16} fill="white" /> Play
        </motion.div>

        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={vdo} />
        </video>
      </div>
    </section>
  );
}

function VideoModal({ close }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
      />

      <motion.div
        className="relative w-[80vw] aspect-video bg-black"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <MediaController style={{ width: "100%", height: "100%" }}>
          <video
            slot="media"
            src={vdo}
            autoPlay
            className="w-full h-full object-cover"
          />

          <span
            onClick={close}
            className="absolute top-3 right-3 cursor-pointer"
          >
            <Plus className="rotate-45 text-white" />
          </span>

          <MediaControlBar className="absolute bottom-0 w-full px-4">
            <MediaPlayButton />
            <MediaTimeRange />
            <MediaMuteButton />
          </MediaControlBar>
        </MediaController>
      </motion.div>
    </div>
  );
}
