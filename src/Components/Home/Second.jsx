import React from 'react';
import vdo1 from '../../assets/video/b56c9806-11400f44.mp4'
const Second = () => {
    return (
        <div className="relative h-screen overflow-hidden top-0 font-silverblack">
        
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                        src={vdo1}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
        
                    {/* Text Content */}
                    
        
                    {/* Bottom Bar */}
                    <div className="w-96 h-9 bg-[#0C0C11] absolute bottom-5 right-0"></div>
        
                </div>
    );
};

export default Second;