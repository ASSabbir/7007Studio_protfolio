import React from 'react';
import { Youtube, Home, Info, Briefcase } from 'lucide-react';
import { TfiLinkedin } from "react-icons/tfi";
import AnimatedButton from './AnimatedButton';
const Footer = () => {
  return (
    <footer className="bg-black text-white min-h-screen flex flex-col relative">
      

      {/* Main Content */}
      <div className="flex-1 flex  flex-col lg:flex-row items-center justify-between px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-0 gap-12 lg:gap-0">
        {/* Left Side - Logo */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col font-normal
           items-center lg:items-start ">
          <h1 className="text-[25vw] sm:text-[20vw] md:text-[18vw] lg:text-[15vw] xl:text-[17vw] font-black leading-none text-red-600">
            7007
          </h1>
          <h2 className="text-[10vw] font-dmsans text-left px-2 w-f sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[7vw] font-black leading-none text-white -mt-2 md:-mt-4 lg:-mt-6 xl:-mt-">
            STUDIO
          </h2>
          
          {/* Bottom Icons - Desktop */}
          <div className="hidden lg:flex gap-4 mt-8 lg:mt-12">
            <AnimatedButton></AnimatedButton>
          </div>
        </div>
        </div>

        {/* Right Side - Info Sections */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-16 text-center sm:text-right max-w-2xl mx-auto lg:mx-0">
            {/* About Us - Top Left */}
            <div>
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3">about us</h3>
              <p className="text-white text-xs md:text-sm mb-1">hello@7007studio.com</p>
              <p className="text-white text-xs md:text-sm mb-1">+880 1XXXXXXXXX</p>
              <p className="text-white text-xs md:text-sm">Bangladesh</p>
            </div>

            {/* About Us - Top Right */}
            <div>
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3">about us</h3>
              <p className="text-white text-xs md:text-sm leading-relaxed">
                7007 Studio is a creative design & digital
                production studiofocused on premium
                visuals, branding, and motion experiences.
              </p>
            </div>

            {/* About Us - Bottom Left */}
            <div>
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3">about us</h3>
              <p className="text-white text-xs md:text-sm mb-1">We're always looking for creative minds.</p>
              <a href="mailto:careers@7007studio.com" className="text-white text-xs md:text-sm underline hover:text-red-600 transition-colors">
                careers@7007studio.com
              </a>
            </div>

            {/* About Us - Bottom Right */}
            <div>
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3">about us</h3>
              <p className="text-white text-xs md:text-sm mb-1">We're always looking for creative minds.</p>
              <a href="mailto:careers@7007studio.com" className="text-white text-xs md:text-sm underline hover:text-red-600 transition-colors">
                careers@7007studio.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons - Mobile Only */}
      <div className="flex lg:hidden justify-center gap-4 pb-8">
        <Youtube className="w-8 h-8 text-red-600 cursor-pointer hover:scale-110 transition-transform" />
        <Home className="w-8 h-8 text-red-600 cursor-pointer hover:scale-110 transition-transform" />
        <Info className="w-8 h-8 text-red-600 cursor-pointer hover:scale-110 transition-transform" />
        <Briefcase className="w-8 h-8 text-red-600 cursor-pointer hover:scale-110 transition-transform" />
      </div>

      {/* Bottom Copyright */}
      <div className="py-4 md:py-6 px-6 md:px-12 lg:px-20 text-center sm:text-right">
        <p className="text-white text-[10px] md:text-xs lg:text-sm">
          © 2025 — All rights reserved by 7007 Studio/Developed by TechoF Solution Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;