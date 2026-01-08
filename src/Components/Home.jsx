import React from 'react';
import Banner from './Home/Banner';
import Marque from './Home/Marque';
import img1 from '../assets/TLOGO.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SecondTitle from './Home/SecondTitle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import BlackScreen from './Shared/BlackScreen';
import SplineSection from './Home/SplineSection';
import ThiredTitle from './Home/ThiredTitle';
import { Skiper17 } from './Home/Skiper17';

import SkiperVideo from '../SkiperVideo';
import ClientReview from '../Pages/ClientReview/ClientReview';
import Philosophy from './Home/Philosopy';
import Project from './Home/Project';
import { CustomEase } from "gsap/CustomEase";



const Home = () => {

  gsap.registerPlugin(CustomEase);
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    CustomEase.create("myEase", "0.7, 0, 0.84, 0");
    gsap.to('#intro-logo', {
      scale: 70,
      opacity: 1,
      scrollTrigger: {
        trigger: '#intro-section',
        start: 'top top',
        end: '+=130%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        refreshPriority: -1, // 👈 Add this
        markers: false,
        onLeave: () => {
          gsap.set('#intro-logo', { display: 'none' })
        },
        onEnterBack: () => {
          gsap.set('#intro-logo', { display: 'block' })
        }
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#navtrigger',
        start: 'top top',
        end: 'top 7%',
        markers: false,
      }
    });

    // All animations in sequence
    tl.from('.navlinks-li', {
      y: -100,
      delay:0.4,
      opacity: 0,
      ease:'power2.in',
      duration: 0.6
    });
    tl.from('#nav-close-btn', {
      y: -100,
      opacity: 0,
      
      duration: 0.6
    }, "-=0.4");
    tl.from('#showreels-btn', {
      y: 100,
      opacity: 0,
      ease:'power2.in',
      duration: 0.6
    }, "-=0.4");
    tl.from('#banner-whatapp-icon', {
      x: 50,
      opacity: 0,
      ease:'power2.in',
      duration: 0.3
    }, );
    tl.from('#banner-text-effect', {
      x: -50,
      opacity: 0,
      ease:'power2.in',
      duration: 0.3
    }, "-=0.3");


  })

  return (
    <div className='relative'>
      {/* PINNED SECTION */}
      <section
        id="intro-section"
        className="relative h-screen overflow-hidden"
      >
        <img
          src={img1}
          id="intro-logo"
          className="absolute inset-0 h-full w-full object-cover z-20"
          alt=""
        />


        <Banner />
      </section>
      <div id='navtrigger' className=' h-60 w-60 absolute top-20'></div>

      {/* 🚀 NORMAL SCROLL AFTER */}

      <ThiredTitle></ThiredTitle>



      <SecondTitle />
      <Philosophy></Philosophy>

      {/* <SkiperVideo></SkiperVideo> */}

      <Skiper17></Skiper17>

      <Project></Project>

      <ClientReview></ClientReview>
      <Marque></Marque>



      {/* <SplineSection></SplineSection> */}
    </div>
  )
}

export default Home
