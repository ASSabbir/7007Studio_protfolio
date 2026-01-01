import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SecondTitle = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Animation range
    });

    // Transform scroll progress to Y position
    const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const text = `7007 Studio is a CGI, VFX, post-production, and gaming studio; 
                    we specialize in 3D animation and visual effects`;

    return (
        <div ref={ref} className='bg-red-600 h-screen flex flex-col justify-center items-center'>
            <div className="text-8xl text-center text-black px-20 leading-none  normal-case w-full font-font2">

                <motion.div
                    style={{ y, opacity }}
                    className="relative  py-10 overflow-hidden leading- break-all"
                >
                    7007 Studio is a CGI, VFX, post-production, and gaming studio.
                        we specialize in 3D animation and visual effects
                    {/* <motion.span

                        initial={{ y: -500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            delay: 0.05,
                            duration: 0.4
                        }}
                        className="inline-block"
                    >
                        7007 Studio is a CGI, VFX, post-production, and gaming studio.
                        we specialize in 3D animation and visual effects
                    </motion.span> */}
                </motion.div>

            </div>

            {/* <motion.div 
                style={{ y, opacity }}
                className="flex group mt-36 gap-2"
            >
                <button className="uppercase text-xl text-black group-hover:text-red-600 group-hover:bg-zinc-900 border-[1px] px-4 py-2 rounded-full duration-500 border-black tracking-tighter">
                    Contact Us
                </button>
                <div className="w-12 h-12 group-hover:bg-zinc-900 border-[1px] border-black rounded-full flex duration-500 justify-center items-center text-2xl">
                    <IoMdArrowUp className="rotate-45 duration-500 group-hover:rotate-[405deg] text-black group-hover:text-red-600" />
                </div>
            </motion.div> */}
        </div>
    );
};

export default SecondTitle;