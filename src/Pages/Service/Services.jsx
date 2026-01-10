import React, { useState, useRef } from "react";
import HeroSection from "./HeroSection";
import ServicesContent from "./ServicesContent";
import MeetingSection from "./MeetingSection"; // Import
import { gigServices, customServices } from "./servicesData";
import "./styles";
import ServiceMotivation from "./serviceMotivation";
import Package from "./Package";
import Calender from "./Calender";
import Description from "./Description";
import { motion } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState("gig");
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);
  const detailsRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedService(null);
  };

  return (
    <div className="relative min-h-screen text-white font-KronaOne" ref={containerRef}>
      <div className="left-0 w-full h-screen z-0">
        <HeroSection />
      </div>
      <Description></Description>

      <Package></Package>

      <section className="w-full bg-black text-white font-kronaOne pt-14 px-6 md:px-12 lg:px-48">
        <p className="text-4xl md:text-6xl lg:text-7xl font-kronaOne">
          We offer
          <span className="text-gray-300 text-lg md:text-xl font-kronaOne w-full">
            a free meeting <span className="text-red-500">call to talk</span> through your challenge, concept, or curiosity — <br />
            <span className="text-red-500">
              even if you don’t need our services or are simply exploring.
            </span>
          </span></p>
        <p className="text-red-500 text-lg md:text-xl font-kronaOne">
          No pitch. No pressure. Just a focused <span className="text-gray-400">discussion</span> .
        </p>

      </section>


      <Calender></Calender>

      <section className="w-full bg-black text-white font-kronaOne px-6 md:px-12 lg:px-48">

  <p className="w-full text-4xl md:text-6xl lg:text-7xl font-kronaOne">
    The Internal <span className="text-red-500 text-gray-300 text-lg md:text-xl font-kronaOne mt-6 w-full">
      Tech Team for you
    </span> 
  </p>

  <p className="text-gray-300 text-lg md:text-xl font-kronaOne leading-relaxed w-full"><br />
    We build the custom tools and automations that power
    <span className="text-red-500"> TVC, film, and game agencies</span>.
    We act as your internal technical partner, providing the infrastructure
    you need to scale production—from quick, ready-to-go gigs to
    bespoke internal systems.
  </p>

  <p className="mt-8 text-red-500 text-lg md:text-xl font-kronaOne tracking-wide">
    [ Book a 30-min Session ]
  </p>

</section>


      {/* Meeting Section*/}
      <div className="relative z-15">
        <ServiceMotivation></ServiceMotivation>
      </div>
    </div>
  );
};

export default Services;