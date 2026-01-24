import { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";

const Marque = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        {
            title: "Advanced 3D Modeling & Visual Design Solutions",
            details:
                "End-to-end professional 3D modeling services crafted for games, films, advertisements, and interactive media. Every model is built with precision, clean topology, and industry-standard workflows to ensure both visual excellence and technical accuracy."
        },
        {
            title: "High-Fidelity Character Modeling & Sculpting",
            details:
                "From concept art to production-ready characters, this service delivers anatomically accurate, expressive, and detailed character models. Optimized topology ensures smooth rigging, animation compatibility, and seamless integration into real-time or cinematic pipelines."
        },
        {
            title: "Game-Ready 3D Assets with Performance Optimization",
            details:
                "Production-quality assets designed specifically for real-time engines. Includes optimized polygon counts, clean UV layouts, proper LODs, and engine-ready exports to ensure maximum performance without sacrificing visual quality."
        },
        {
            title: "Cinematic Visual Development & Rendering Expertise",
            details:
                "Specialized in lighting, composition, shading, and rendering to create visually compelling and cinematic results. Perfect for trailers, portfolio visuals, product showcases, and immersive storytelling experiences."
        },
        {
            title: "Photorealistic Texturing & Physically-Based Materials",
            details:
                "High-quality PBR texturing with realistic materials, accurate surface details, and optimized UV mapping. Designed to maintain realism across multiple lighting environments and platforms while meeting modern production standards."
        }
    ];

    return (
        <div className="bg-black py-8 text-center space-y-4">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Title - Always visible */}
                    <div className="h-[100px] flex items-center justify-center px-8">
                        <h2 className="text-4xl md:text-7xl tracking-tight transition-transform duration-300 text-gray-400">
                            {service.title}
                        </h2>
                    </div>

                    {/* Marquee */}
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute top-0 left-0 w-full h-[100px] bg-white flex items-center"
                            >
                                <Marquee
                                    speed={160}
                                    direction={index%2==0?"left":"right"}
                                    gradient={false}
                                    className="h-full"
                                >
                                    <h2 className="text-5xl md:text-6xl font-black font-KronaOne tracking-tight text-red-600  px-8 whitespace-nowrap">
                                        {service.details}
                                    </h2>
                                </Marquee>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Marque;