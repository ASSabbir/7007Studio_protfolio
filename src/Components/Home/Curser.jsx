import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
const Curser = () => {
    useGSAP(()=>{
        const handelMouseMove= (e)=>{
           const {clientX,clientY}=e;
           gsap.to('#curser',{
            opacity:100,
            x:clientX-20,
            y:clientY-2,
            duration:1,
            delay:0,
            ease:"power4.out"
           })   
        }
        const handelMouseLeave=(e)=>{
            gsap.to('#curser',{
                opacity:0
            })
        }
        
        const banner=document.querySelector('#banner-page')
        window.addEventListener('mousemove',handelMouseMove)
        window.addEventListener('mouseleave',handelMouseLeave)
    })
    return (
        <div>
            <div id='curser' className='w-7  opacity-0 md:flex pointer-events-none fixed top-0 left-0 z-20 rounded-full h-7 bg-red-500'></div>
        </div>
    );
};

export default Curser;