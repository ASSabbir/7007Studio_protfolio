import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Clock, DollarSign } from "lucide-react";

const ServiceDetails = ({ detailsRef, selectedService, setSelectedService }) => {
  return (
    <AnimatePresence>
      {selectedService && (
        <motion.div
          ref={detailsRef}
          initial={{ opacity: 0, x: 100, width: 0 }}
          animate={{ opacity: 1, x: 0, width: "48%" }}
          exit={{ opacity: 0, x: 100, width: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="sticky top-24 h-fit"
        >
          <div className="bg-black border-2 border-red-600 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-red-700 hover:bg-red-800 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Section */}
            <div className="relative h-64 bg-black">
              <video
                className="w-full h-full object-cover "
                src={selectedService.video}
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
            </div>

            {/* Details Section */}
            <div className="relative p-8 bg-black/95 backdrop-blur-xl border-t-2 border-white">
              {/* Category Badge */}
              <div className="inline-block mb-4">
                <span className="bg-red-700 text-white text-sm font-bold px-4 py-2 uppercase tracking-wide">
                  {selectedService.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4 font-serif">
                {selectedService.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Timeline & Pricing Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-900 border-2 border-white mb-6">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                      Timeline
                    </p>
                    <p className="text-white text-base font-bold">
                      {selectedService.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                      Pricing
                    </p>
                    <p className="text-white text-base font-bold">
                      {selectedService.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 transition-all duration-300 text-base uppercase tracking-wider">
                ORDER NOW →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetails;
