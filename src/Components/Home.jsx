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
const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
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
    gsap.from('.navlinks-li', {
      y: -100,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#navtrigger',
        start: 'top top',
        end: 'top 7%',
        markers: false,




      }
    })
  })

  return (
    <div className='relative'>
      {/* 🔒 PINNED SECTION */}
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
      <SecondTitle />
      {/* <SplineSection></SplineSection> */}
    </div>
  )
}

export default Home
