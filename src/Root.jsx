import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import logovideo from '../src/assets/video/logo2.mp4'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from './Components/Footer';
import { ReactLenis, useLenis } from 'lenis/react'
import Lenis from 'lenis';

gsap.registerPlugin(useGSAP);

const Root = () => {

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to('#loading_video', {

            duration: 5
        })
        tl.to('#loading_video', {
            opacity: 0,
            duration: 0.35
        })
        tl.to('#loading_video', {
            display: 'none'
        })
        tl.from('#title-logo', {
            y: 50,
            opacity: 0
        })
        tl.to('#title-logo', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
        })

    })
    return (
        <div className=' relative h-screen text-white'>
            <Nav></Nav>
            <Outlet></Outlet>
            <video src={logovideo} autoPlay
                muted
                loop
                playsInline
                id='loading_video'
                className="w-full h-auto absolute top-0"></video>
            <Footer></Footer>
            {/* <ReactLenis
                root
                options={{
                    duration: 1.2,        // scroll duration in seconds (default: 1.2)
                    easing: (t) => 1 - Math.pow(1 - t, 3), // custom easing curve
                   
                    gestureDirection: 'both', // allow both mouse wheel + touchpad gestures
                    smoothWheel: true,     // smooth scroll for mouse wheel
                    smoothTouch: true,    // smooth scroll for touch devices
                    touchMultiplier: 1.5,  // multiplier for touch scroll speed
                    wheelMultiplier: 1.5,    // multiplier for wheel scroll speed
                    infinite: false,       // loop scrolling
                }}
            /> */}


        </div>
    );
};

export default Root;