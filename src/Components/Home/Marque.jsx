import { useState } from "react";
import Marquee from "react-fast-marquee";

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
                    className="relative overflow-hidden transition-all duration-300"
                    style={{
                        height: hoveredIndex === index ? '120px' : '80px'
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >

                    {hoveredIndex === index ? (
                        <Marquee
                            speed={150}
                            direction="left"
                            gradient={false}
                            className="h-full flex items-center"
                        >
                            <h2 className="text-5xl bg-red-600 py-10 md:text-9xl text-white w-full tracking-tight px-8">
                                {service.details}
                            </h2>
                        </Marquee>
                    ) : (
                        <div className="h-full flex items-center justify-center px-8">
                            <h2 className="text-4xl md:text-7xl tracking-tight transition-transform duration-300 text-gray-400">
                                {service.title}
                            </h2>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Marque;