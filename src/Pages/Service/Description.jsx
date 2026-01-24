import React from 'react';
import { motion } from 'framer-motion';

const columnVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Description = () => {
  return (
    <section className="w-full bg-black text-white font-kronaOne pt-16 sm:pt-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16">

        {/* COLUMN 1 */}
        <motion.div
          variants={columnVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="space-y-4 sm:space-y-5 p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl font-kronaOne">
            <span className="text-red-500">1. </span>Structured <span className="text-red-500">(Gig-Based)</span> Support.
          </h3>

          <p className="leading-relaxed text-red-500 text-sm sm:text-base">
            For projects with defined goals, timelines, and deliverables. This model works best when:
          </p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              'The scope is clear',
              'The outcome is well defined',
              'You need reliable, production-ready results',
            ].map((item, i) => (
              <li
                key={i}
                className="text-gray-400 font-kronaOne text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
              >
                • {item}
              </li>
            ))}
          </ul>

          <p className="text-red-500 font-kronaOne mt-4 sm:mt-6 text-sm sm:text-base">Ideal for:</p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              'Game assets & environments',
              'Product visualization',
              'Cinematic shots & trailers',
              'Real-time Unreal Engine visuals',
            ].map((item, i) => (
              <li
                key={i}
                className="text-gray-400 font-kronaOne text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
              >
                • {item}
              </li>
            ))}
          </ul>

          <p className="text-red-500 leading-relaxed pt-3 sm:pt-4 font-kronaOne text-sm sm:text-base">
            We focus on clean execution, technical accuracy, and consistent quality at every stage.
          </p>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          variants={columnVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="space-y-4 sm:space-y-5 p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl font-kronaOne">
            <span className="text-red-500">2. </span> Custom <span className="text-red-500">(Idea-Driven)</span> Collaboration
          </h3>

          <p className="text-red-500 leading-relaxed text-sm sm:text-base font-kronaOne">
            For concepts that are still evolving or require creative direction.
          </p>

          <p className="text-red-500 font-kronaOne text-sm sm:text-base">If you have:</p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              'An idea in progress',
              'A problem that needs visual clarity',
              'A concept without a fixed pipeline',
            ].map((item, i) => (
              <li
                key={i}
                className="text-gray-400 font-kronaOne text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
              >
                • {item}
              </li>
            ))}
          </ul>

          <p className="text-red-500 leading-relaxed pt-3 sm:pt-4 font-kronaOne text-sm sm:text-base">
            We’re happy to explore it with you. This approach allows flexibility, experimentation, and deeper creative involvement — from early concepts to final delivery.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Description;
