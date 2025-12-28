import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceDetails from "./ServiceDetails";

const ServicesGrid = ({
  containerRef,
  detailsRef,
  activeTab,
  selectedService,
  setSelectedService,
  gigServices,
  customServices,
}) => {
  return (
    <div ref={containerRef} className="bg-black px-4 md:px-8 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Services Cards - Left Side */}
          <div
            className={`transition-all duration-500 ${
              selectedService ? "w-1/2" : "w-full"
            }`}
          >
            <AnimatePresence mode="wait">
              {activeTab === "gig" ? (
                <motion.div
                  key="gig"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                >
                  {gigServices.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                      isGig={true}
                      selectedService={selectedService}
                      setSelectedService={setSelectedService}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="custom"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                >
                  {customServices.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                      isGig={false}
                      selectedService={selectedService}
                      setSelectedService={setSelectedService}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Details Panel - Right Side */}
          <ServiceDetails
            detailsRef={detailsRef}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;