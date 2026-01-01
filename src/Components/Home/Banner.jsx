import React from 'react';
import Spline from '@splinetool/react-spline';
import vdo1 from '../../assets/video/montage footage.mp4'
import './style.css'
import { HiArrowUp } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";


const openWhatsApp = () => {
  window.open(
    "https://wa.me/8801764308876",
    "_blank",
    "noopener,noreferrer"
  );
};





const Banner = () => {
  return (
    <div
      id="banner-page"
      className="relative h-screen overflow-hidden font-silverblack"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={vdo1}
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        id="banner-text"
        className="absolute flex text-xl items-center gap-5 left-5/8 bottom-30 uppercase font-font2"
      >
        <div className="relative">
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>

          {/* WhatsApp Button */}
          <div
            onClick={openWhatsApp}
            className="relative bg-green-500 w-fit h-fit text-white p-3 rounded-full text-3xl cursor-pointer hover:scale-110 transition-transform shadow-xl"
          >
            <FaWhatsapp />
          </div>
        </div>

        <h1>
          pixel and polygon <br />
          3d games <br />
          post production <br />
          studio
        </h1>
      </div>
    </div>
  )
}

export default Banner

{/* <Spline scene="https://prod.spline.design/tyIAVPmekUztUdjN/scene.splinecode" /> */ }
{/* <Spline scene="https://prod.spline.design/tyIAVPmekUztUdjN/scene.splinecode" /> */ }