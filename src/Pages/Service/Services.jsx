import React, { useState, useRef } from "react";
import HeroSection from "./HeroSection";
import ServicesContent from "./ServicesContent";
import BottomCTA from "./BottomCTA";
import { gigServices, customServices } from "./servicesData";
import "./styles";

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
    <div className="relative min-h-screen text-white">
      {/* Layer 1: Hero Section - Fixed Background (Always visible behind) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <HeroSection />
      </div>

      {/* Spacer to create scroll space for first section */}
      <div className="h-screen"></div>

      {/* Layer 2: Services Content - Slides up over hero */}
      <div className="relative z-10">
        <ServicesContent
          containerRef={containerRef}
          detailsRef={detailsRef}
          activeTab={activeTab}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          handleTabChange={handleTabChange}
          gigServices={gigServices}
          customServices={customServices}
        />
      </div>

      {/* Layer 3: Bottom CTA - Slides up over services */}
      <div className="relative z-20">
        <BottomCTA />
      </div>
    </div>
  );
};

export default Services;