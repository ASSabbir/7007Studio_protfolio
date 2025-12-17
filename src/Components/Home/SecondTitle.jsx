import { div } from 'framer-motion/client';
import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
const SecondTitle = () => {
    return (
        <div className='bg-black'>
            <div className=" text-9xl  px-20 leading-none pt-[10vw] normal-case w-full bg-black  font-font2">
                <h1 className="relative leading-28 ">
                    High-End 3D Visuals. Built for Impact.
                </h1>
                <h1 className='text-3xl  font-extralight font-dmsans mt-10'>We turn complex ideas into effortless experiences</h1>

            </div>
            <div className=' flex justify-end px-[10vw] pb-[10vw]'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JFNUVJtlQDU?si=zLHjhD3NwWulf5ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex group  mt-36  gap-2">
                            <button className="uppercase text-xl  group-hover:text-white group-hover:bg-zinc-900 border-[1px] px-4 py-2 rounded-full duration-500 border-zinc-900 tracking-tighter">Investor deck</button>
                            <div className="w-12 h-12 group-hover:bg-zinc-900 border-[1px] border-zinc-900 rounded-full flex duration-500 justify-center items-center text-2xl ">
                                <IoMdArrowUp className="rotate-45 duration-500 group-hover:rotate-[405deg] group-hover:text-white "></IoMdArrowUp>
                            </div>
                        </div>
        </div>
    );
};

export default SecondTitle;