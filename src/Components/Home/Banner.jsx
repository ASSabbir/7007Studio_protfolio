import React from 'react';
import Spline from '@splinetool/react-spline';
import vdo1 from '../../assets/video/montage footage.mp4'
const Banner = () => {
    return (
        <div className="relative h-screen overflow-hidden top-0 font-silverblack">

            {/* Background Video */}
            <video
                className="absolute  top-0 left-0 w-full h-full object-cover -z-10"
                src={vdo1}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>

            {/* Text Content */}
            <div className="relative text-9xl text-center h-full  flex justify-center items-center flex-col leading-30  normal-case   font-font2">
                <h1 className="relative  ">
                    Building Digital<br></br> Realities. Shaping<br></br> Visual Futures
                </h1>
                <h1 className='text-3xl  font-extralight font-dmsans mt-10'>We turn complex ideas into effortless experiences</h1>
            </div>


        </div>

    );
};
{/* <Spline scene="https://prod.spline.design/tyIAVPmekUztUdjN/scene.splinecode" /> */ }
{/* <Spline scene="https://prod.spline.design/tyIAVPmekUztUdjN/scene.splinecode" /> */}

export default Banner;