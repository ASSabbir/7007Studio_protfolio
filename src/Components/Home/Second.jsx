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
                    <div className="absolute text-9xl text-center leading-none normal-case w-full bg-black font-font2">
                        <h1 className="relative leading-28 ">
                            High-End 3D Visuals. Built for Impact.
                        </h1>
                        <h1 className='text-3xl  font-extralight font-dmsans mt-10'>We turn complex ideas into effortless experiences</h1>
                    </div>
        
                    {/* Bottom Bar */}
                    <div className="w-96 h-9 bg-[#0C0C11] absolute bottom-5 right-0"></div>
        
                </div>
    );
};

export default Second;