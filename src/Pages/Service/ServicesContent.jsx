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
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-black"
    >
      {/* Tab Selector - Sticky within this section */}
      <div className="sticky top-0 z-50">
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