import React, { useState } from 'react';

const Philosophy = () => {
    const [hoveredLine, setHoveredLine] = useState(null);

    const philosophyLines = [
        "Achievement is not the end — it's the breaking point.",
        "Beyond every completed goal lies a new vision waiting to be built.",
        "That's where we begin again.",
        "We believe powerful visuals are crafted through structure, clarity, and discipline.",
        "Each frame tells a story — not just how it looks, but why it exists.",
        "We dream. We build. We evolve."
    ];

    return (
        <div className="py-10 min-h-screen bg-black text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-center items-start px-8 md:px-20 py-20 lg:py-0 z-10 relative">
  <div className="max-w-5xl w-full">

    <h2 className="tracking-wide text-7xl md:text-9xl font-bold mb-20 tracking-tighter text-left text-red-600">
      OUR PHILOSOPHY
    </h2>

    <ul className="space-y-10 ">
      {philosophyLines.map((line, index) => (
        <li
          key={index}
          className="flex items-start gap-6 transition-all duration-500 cursor-default"
          onMouseEnter={() => setHoveredLine(index)}
          onMouseLeave={() => setHoveredLine(null)}
        >
          {/* Bullet / Icon */}
          <span
            className="mt-3 w-4 h-4 rounded-full transition-all duration-500"
            style={{
              backgroundColor: hoveredLine === index ? '#ffffff' : '#ef4444',
              transform: hoveredLine === index ? 'scale(1.4)' : 'scale(1)'
            }}
          />

          {/* Text */}
          <p
            className="tracking-wide text-4xl md:text-6xl leading-[1.1] transition-all duration-500"
            style={{
              color: hoveredLine === index ? '#ffffff' : '#ef4444',
              transform: hoveredLine === index ? 'translateX(10px)' : 'translateX(0)',
              fontWeight: hoveredLine === index ? '700' : '500',
              letterSpacing: hoveredLine === index ? '-0.03em' : '-0.01em'
            }}
          >
            {line}
          </p>
        </li>
      ))}
    </ul>

  </div>
</div>



                {/* Right Side - Video */}
                <div className="relative h-screen overflow-hidden">  
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/src/assets/video/vid1.mp4" type="video/mp4" />
                    </video>
                   
                </div>
            </div>
        </div>
    );
};

export default Philosophy;