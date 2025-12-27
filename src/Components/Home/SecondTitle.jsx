import { div } from 'framer-motion/client';
import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const SecondTitle = () => {
     gsap.registerPlugin(ScrollTrigger)
     
    return (
        <div className='bg-red-600 h-screen flex  flex-col justify-center items-center'>
            <div className=" text-[12vw] text-center  px-20 leading-none pt-[10vw] normal-case w-full   font-font2">
                <h1 className="relative leading-28 ">
                    7007 Studio
                </h1>
                <h1 className='text-3xl  font-extralight font-dmsans mt-20'>We turn complex ideas into effortless experiences</h1>

            </div>

            <div className="flex group  mt-36  gap-2">
                <button className="uppercase text-xl  group-hover:text-white group-hover:bg-zinc-900 border-[1px] px-4 py-2 rounded-full duration-500 border-zinc-900 tracking-tighter">Contact Us</button>
                <div className="w-12 h-12 group-hover:bg-zinc-900 border-[1px] border-zinc-900 rounded-full flex duration-500 justify-center items-center text-2xl ">
                    <IoMdArrowUp className="rotate-45 duration-500 group-hover:rotate-[405deg] group-hover:text-white "></IoMdArrowUp>
                </div>
            </div>
        </div>
    );
};

export default SecondTitle;