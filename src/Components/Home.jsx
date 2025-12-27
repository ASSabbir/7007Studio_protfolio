import React from 'react';
import Banner from './Home/Banner';
import Marque from './Home/Marque';
import img1 from '../assets/TLOGO.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SecondTitle from './Home/SecondTitle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import BlackScreen from './Shared/BlackScreen';
const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to('#intro-logo', {
      scale: 60,
      opacity: 1,
      scrollTrigger: {
        trigger: '#intro-section',
        start: 'top top',
        end: '+=130%',   // scroll distance
        scrub: 1,
        pin: true,       // 🔥 THIS STOPS SCROLL
        anticipatePin: 1,
        markers: true,
        onLeave: () => {
          gsap.set('#intro-logo', { display: 'none' })
        },
        onEnterBack: () => {
        gsap.set('#intro-logo', { display: 'block' })
      }
      }
    })
  })

  return (
    <div>
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

      {/* 🚀 NORMAL SCROLL AFTER */}
      <SecondTitle />
    </div>
  )
}

export default Home
