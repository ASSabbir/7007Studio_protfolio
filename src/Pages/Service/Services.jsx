import React, { useState, useRef } from "react";
import HeroSection from "./HeroSection";
import ServicesContent from "./ServicesContent";
import MeetingSection from "./MeetingSection"; // Import
import { gigServices, customServices } from "./servicesData";
import "./styles";
import ServiceMotivation from "./serviceMotivation";
import Calender from "./Calender";

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
      <div className="left-0 w-full h-screen z-0">
        <HeroSection />
      </div>

      <div className="h-screen"></div>

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
      <Calender></Calender>

      {/* Meeting Section - Add here */}
      <div className="relative z-15">
        {/* <MeetingSection /> */}
        <ServiceMotivation></ServiceMotivation>
      </div>
    </div>
  );
};

export default Services;