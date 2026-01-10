import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Pipeline = () => {
    const cardRefs = useRef([]);
    const connectorRefs = useRef([]);

    const pipelineSteps = [
        {
            id: 1,
            phase: 'Discovery',
            title: 'Concept & Planning',
            description: 'Understanding client vision, project requirements, and creating initial concepts that set the foundation.',
            duration: '1-2 Weeks'
        },
        {
            id: 2,
            phase: 'Pre-Production',
            title: 'Storyboarding',
            description: 'Detailed planning of scenes, camera angles, and visual flow for the production process.',
            duration: '2-3 Weeks'
        },
        {
            id: 3,
            phase: 'Modeling',
            title: '3D Modeling',
            description: 'Creating all 3D assets, characters, and environments where ideas transform into digital reality.',
            duration: '3-4 Weeks'
        },
        {
            id: 4,
            phase: 'Texturing',
            title: 'Materials & Texturing',
            description: 'Adding colors, materials, and surface details to bring models to life with realistic appearances.',
            duration: '2-3 Weeks'
        },
        {
            id: 5,
            phase: 'Animation',
            title: 'Animation & Motion',
            description: 'Bringing characters and objects to life through movement and believable motion.',
            duration: '4-6 Weeks'
        },
        {
            id: 6,
            phase: 'Rendering',
            title: 'Rendering',
            description: 'Converting 3D scenes into final images using render engines and optimization techniques.',
            duration: '2-3 Weeks'
        },
        {
            id: 7,
            phase: 'Post-Production',
            title: 'Final Delivery',
            description: 'Color correction, compositing, and final touches for delivery-ready content.',
            duration: '2-3 Weeks'
        }
    ];

    useEffect(() => {
        // Animate the running arrows along the connection paths
        connectorRefs.current.forEach((connector, index) => {
            if (connector) {
                const horizontalLine = connector.querySelector('.horizontal-line');
                const verticalLine = connector.querySelector('.vertical-line');
                const runningArrow = connector.querySelector('.running-arrow');
                
                if (horizontalLine && verticalLine && runningArrow) {
                    const isEven = index % 2 === 0;
                    const horizontalWidth = horizontalLine.offsetWidth;
                    const verticalHeight = verticalLine.offsetHeight;
                    
                    // Create timeline for continuous animation
                    const tl = gsap.timeline({ repeat: -1 });
                    
                    if (isEven) {
                        // For even index: move right on horizontal, then down on vertical
                        tl.set(runningArrow, { 
                            left: 0, 
                            top: 0,
                            rotate: 0
                        })
                        .to(runningArrow, {
                            left: horizontalWidth,
                            duration: 1.5,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            left: horizontalWidth,
                            top: 0,
                            rotate: 90
                        })
                        .to(runningArrow, {
                            top: verticalHeight,
                            duration: 1,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            opacity: 0
                        })
                        .set(runningArrow, {
                            left: 0,
                            top: 0,
                            opacity: 1,
                            rotate: 0
                        }, '+=0.5');
                    } else {
                        // For odd index: move left on horizontal, then down on vertical
                        tl.set(runningArrow, { 
                            right: 0, 
                            left: 'auto',
                            top: 0,
                            rotate: 180
                        })
                        .to(runningArrow, {
                            right: horizontalWidth,
                            duration: 1.5,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            right: horizontalWidth,
                            left: 'auto',
                            top: 0,
                            rotate: 90
                        })
                        .to(runningArrow, {
                            top: verticalHeight,
                            duration: 1,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            opacity: 0
                        })
                        .set(runningArrow, {
                            right: 0,
                            left: 'auto',
                            top: 0,
                            opacity: 1,
                            rotate: 180
                        }, '+=0.5');
                    }
                }
            }
        });
    }, []);

    return (
        <div className="min-h-screen bg-black  text-white py-20 px-4 md:px-8 font-">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
                    Our <span className="text-red-500">Pipeline</span>
                </h1>
                <p className="text-gray-400 text-lg text-center">
                    A streamlined 7-step journey through our 3D production process. 
                    From concept to final delivery, every phase brings your vision closer to reality.
                </p>
            </motion.div>

            {/* Snake Pipeline */}
            <div className="max-w-6xl mx-auto">
                {pipelineSteps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    const isLast = index === pipelineSteps.length - 1;

                    return (
                        <div key={step.id}>
                            {/* Step Row */}
                            <div className={`flex  items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} `}>
                                {/* Step Card */}
                                <motion.div
                                    ref={el => cardRefs.current[index] = el}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex-1 border border-red-500/30 bg-zinc-900 relative overflow-hidden group"
                                >
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-600/5 transition-all duration-500" />
                                    
                                    <div className="relative z-10 p-8">
                                        {/* Step Number & Badge */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full border-4 border-red-500 bg-red-500/20 flex items-center justify-center">
                                                <span className="text-2xl font-bold">{step.id}</span>
                                            </div>
                                            
                                            <span className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 text-xs font-bold tracking-[0.35em] uppercase">
                                                {step.phase}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                                            {step.description}
                                        </p>

                                        {/* Duration */}
                                        <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
                                            <span className="text-gray-500 text-xs uppercase tracking-wider">Duration:</span>
                                            <span className="text-white text-sm font-bold">{step.duration}</span>
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-500/60" />
                                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-500/60" />
                                </motion.div>

                                {/* Horizontal Line */}
                                {!isLast && (
                                    <div className="hidden md:block flex-shrink-0 w-24 h-1 bg-red-500/30" />
                                )}
                            </div>

                            {/* Connecting Elements - Only if not last step */}
                            {!isLast && (
                                <div 
                                    ref={el => connectorRefs.current[index] = el}
                                    className={`flex ${isEven ? 'justify-end' : 'justify-start'} mb-5 relative`}
                                >
                                    {/* Running Arrow - positioned absolutely to follow the path */}
                                    <div 
                                        className=" running-arrow absolute w-6 h-6 bg-red-500 rounded-full flex items-center justify-center z-20"
                                        style={{ 
                                            left: isEven ? 0 : 'auto',
                                            right: isEven ? 'auto' : 0,
                                            top: 0
                                        }}
                                    >
                                        <ArrowRight className="w-3 h-3 text-white" />
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-2">
                                        {/* Horizontal Line (invisible but used for measurement) */}
                                        <div className="horizontal-line w-24 md:w-96 h-1 bg-transparent absolute top-0" 
                                             style={{ 
                                                 left: isEven ? 0 : 'auto',
                                                 right: isEven ? 'auto' : 0
                                             }} 
                                        />
                                        
                                        {/* Vertical Line */}
                                        <div className="vertical-line w-1 h-20 bg-red-500/30" />
                                        
                                        {/* Static Arrow at bottom */}
                                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                                            <ArrowDown className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Pipeline;