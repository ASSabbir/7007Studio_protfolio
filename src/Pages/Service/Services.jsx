import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import ServiceMotivation from "./serviceMotivation";
import Package from "./Package";
import Calender from "./Calender";
import Description from "./Description";

const Services = () => {
  const containerRef = useRef(null);

  return (
    <div className="relative min-h-screen text-white font-KronaOne" ref={containerRef}>
      {/* Hero Section */}
      <div className="left-0 w-full h-screen z-0">
        <HeroSection />
      </div>

      {/* Description Section */}
      <Description />

      {/* Package Section */}
      <Package />

      {/* Free Meeting Section */}
      <section className="w-full bg-black text-white font-kronaOne pt-10 px-4 sm:px-6 md:px-12 lg:px-48">
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-kronaOne mb-4 sm:mb-6">
          We offer
          <span className="block text-gray-300 text-sm sm:text-lg md:text-xl font-kronaOne mt-2">
            a free meeting <span className="text-red-500">call to talk</span> through your challenge, concept, or curiosity — <br />
            <span className="text-red-500 text-sm sm:text-lg md:text-xl">
              even if you don’t need our services or are simply exploring.
            </span>
          </span>
        </p>

        <p className="text-red-500 text-sm sm:text-lg md:text-xl font-kronaOne">
          No pitch. No pressure. Just a focused <span className="text-gray-400">discussion</span>.
        </p>
      </section>

      {/* Calendar Section */}
      <Calender />

      {/* Tech Team Section */}
      <section className="w-full bg-black text-white font-kronaOne px-4 sm:px-6 md:px-12 lg:px-48 pt-10">
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-kronaOne mb-2">
          The Internal <span className="block text-red-500 text-gray-300 text-sm sm:text-lg md:text-xl mt-2">
            Tech Team for you
          </span>
        </p>

        <p className="text-gray-300 text-sm sm:text-lg md:text-xl font-KronaOne leading-relaxed mt-4 sm:mt-6">
          We build the custom tools and automations that power
          <span className="text-red-500"> TVC, film, and game agencies</span>.
          We act as your internal technical partner, providing the infrastructure
          you need to scale production—from quick, ready-to-go gigs to
          bespoke internal systems.
        </p>

        <p className="mt-6 sm:mt-8 text-red-500 text-sm sm:text-lg md:text-xl font-KronaOne tracking-wide">
          [ Book a 30-min Session ]
        </p>
      </section>

      {/* Meeting Section */}
      <div className="relative z-15">
        <ServiceMotivation />
      </div>
    </div>
  );
};

export default Services;
