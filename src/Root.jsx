import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import logovideo from '../src/assets/video/logo2.mp4'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from './Components/Footer';


gsap.registerPlugin(useGSAP); 

const Root = () => {

    useGSAP(()=>{
        const tl =gsap.timeline()
        tl.to('#loading_video',{
            
            duration:1.4
        })
        tl.to('#loading_video',{
            opacity:0,
            duration:0.35
        })
        tl.to('#loading_video',{
            display:'none'
        })
        tl.from('#title-logo',{
            y:50,
            opacity:0
        })
        tl.to('#title-logo',{
            y:0,
            opacity:1,
            duration:0.5,
            ease: "power4.out",
        })
        
    })
    return (
        <div className='bg-zinc-950 relative h-screen text-white'>
            <Nav></Nav>
            <Outlet></Outlet>
            <video src={logovideo} autoPlay
                muted
                loop
                playsInline
                id='loading_video'
                className="w-full h-auto absolute top-0"></video>
<<<<<<< HEAD
            <Footer></Footer>
=======

        

>>>>>>> 89128cd3b3b940ff51ae2177082a361c48839d84
        </div>
    );
};

export default Root;