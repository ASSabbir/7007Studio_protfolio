import React from "react";
import { motion } from "framer-motion";
import TabSelector from "./TabSelector";
import ServicesGrid from "./ServicesGrid";

const ServicesContent = ({
  containerRef,
  detailsRef,
  activeTab,
  selectedService,
  setSelectedService,
  handleTabChange,
  gigServices,
  customServices,
}) => {
  return (
    <motion.div
      
      className="bg-black"
    >
      {/* Tab Selector - Sticky within this section */}
      <div className="z-50">
        <TabSelector
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
      </div>

      {/* Services Grid */}
      <ServicesGrid
        containerRef={containerRef}
        detailsRef={detailsRef}
        activeTab={activeTab}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        gigServices={gigServices}
        customServices={customServices}
      />
    </motion.div>
  );
};

export default ServicesContent;