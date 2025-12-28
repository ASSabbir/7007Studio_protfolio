import { div } from 'framer-motion/client';
import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const SecondTitle = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        // gsap.from('.second-title',{
        //     y:50,
        //     opacity:1,
        //     scrollTrigger:{
        //         trigger:'#second-title-trigger',
        //         markers:false,
        //         start:'260% 60%'
        //     }
        // })
    })
    return (
        <div className='bg-red-600 h-screen flex  flex-col justify-center items-center'>
            <div className=" text-[12vw] text-center text-black px-20 leading-none pt-[10vw] normal-case w-full   font-font2">
                <div className="relative  leading-28 ">
                    <span className='second-title'>7</span>
                    <span className='second-title'>0</span>
                    <span className='second-title'>0</span>
                    <span className='second-title'>7</span>
                    <span className='second-title'>S</span>
                    <span className='second-title'>t</span>
                    <span className='second-title'>u</span>
                    <span className='second-title'>d</span>
                    <span className='second-title'>i</span>
                    <span className='second-title'>o</span>

                </div>
                <h1 id='second-title-trigger' className='text-3xl  font-extralight font-dmsans mt-20'>7007 Studio is a CGI, VFX, post-production, and gaming studio; we specialize in 3D animation and visual effects</h1>

            </div>

            <div className="flex group  mt-36  gap-2">
                <button className="uppercase text-xl text-black group-hover:text-red-600 group-hover:bg-zinc-900 border-[1px] px-4 py-2 rounded-full duration-500 border-black tracking-tighter">
                    Contact Us
                </button>
                <div className="w-12 h-12 group-hover:bg-zinc-900 border-[1px] border-black rounded-full flex duration-500 justify-center items-center text-2xl ">
                    <IoMdArrowUp className="rotate-45 duration-500 group-hover:rotate-[405deg] text-black group-hover:text-red-600 "></IoMdArrowUp>
                </div>
            </div>
        </div>
    );
};

export default SecondTitle;