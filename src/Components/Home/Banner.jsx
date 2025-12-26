import React from 'react';
import Spline from '@splinetool/react-spline';
import vdo1 from '../../assets/video/montage footage.mp4'
import './style.css'
import { HiArrowUp } from "react-icons/hi2";
const Banner = () => {
    return (
        <div id='banner-page' className="relative h-screen overflow-hidden top-0 font-silverblack">
            {/* <Curser></Curser> */}
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
            <div className="absolute flex  text-xl items-center gap-5 left-5/8 bottom-30 uppercase    font-font2">
                <div className='bg-red-500 w-fit h-fit text-white p-3 rounded-full rotate-180 text-3xl'>
                    <HiArrowUp />
                </div>
                <h1 >pixel and polygon<br></br>3d games<br></br>post production <br></br>studio</h1>
            </div>


        </div>

    );
};
{/* <Spline scene="https://prod.spline.design/tyIAVPmekUztUdjN/scene.splinecode" /> */ }
{/* <Spline scene="https://prod.spline.design/tyIAVPmekUztUdjN/scene.splinecode" /> */ }

export default Banner;