import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const AnimatedButton = () => {
  return (
    <div className="flex gap-4">
      <a 
        href="https://youtube.com/@7007studio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110"
      >
        <Youtube className="w-6 h-6 text-white" />
      </a>
      <a 
        href="https://instagram.com/7007studio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110"
      >
        <Instagram className="w-6 h-6 text-white" />
      </a>
      <a 
        href="https://facebook.com/7007studio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110"
      >
        <Facebook className="w-6 h-6 text-white" />
      </a>
      <a 
        href="https://linkedin.com/company/7007studio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110"
      >
        <Linkedin className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white font-dmsans pt-30 border-red-400 flex flex-col relative">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 mb-10  md:px-12 md:py-16 lg:px-20 lg:py-0 gap-12 lg:gap-20">
        {/* Left Side - Logo */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="flex flex-col items-center font-OdibeeSans lg:items-start">
            <h1 className="text-[25vw] sm:text-[20vw] md:text-[18vw] lg:text-[12vw] xl:text-[14vw] font-black leading-none text-red-600">
              7007
            </h1>
            <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5vw] xl:text-[6vw] font-black leading-none text-white -mt-2 md:-mt-3 lg:-mt-4">
              STUDIO
            </h2>
            
            {/* Bottom Icons - Desktop */}
            <div className="hidden lg:flex mt-8 lg:mt-12">
              <AnimatedButton />
            </div>
          </div>
        </div>

        {/* Right Side - Info Sections */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {/* Contact Information */}
            <div className="text-center sm:text-left">
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Contact
              </h3>
              <div className="space-y-2">
                <a 
                  href="mailto:hello@7007studio.com" 
                  className="flex items-center justify-center sm:justify-start gap-2 text-white text-sm md:text-base hover:text-red-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@7007studio.com</span>
                </a>
                <a 
                  href="tel:+8801XXXXXXXXX" 
                  className="flex items-center justify-center sm:justify-start gap-2 text-white text-sm md:text-base hover:text-red-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+880 1XXXXXXXXX</span>
                </a>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-white text-sm md:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div className="text-center sm:text-left">
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                About us
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                7007 Studio is a creative design & digital production studio focused on premium visuals, branding, and motion experiences.
              </p>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-white text-sm md:text-base">
                <li className="hover:text-red-600 transition-colors cursor-pointer">3D Animation</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Motion Graphics</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Brand Identity</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Visual Effects</li>
              </ul>
            </div>

            {/* Careers */}
            <div className="text-center sm:text-left">
              <h3 className="text-red-600 text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Careers
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                We're always looking for creative minds.
              </p>
              <a 
                href="mailto:careers@7007studio.com" 
                className="inline-flex items-center gap-2 text-white text-sm md:text-base underline hover:text-red-600 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>careers@7007studio.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons - Mobile Only */}
      <div className="flex lg:hidden justify-center pb-8">
        <AnimatedButton />
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 py-4 md:py-6 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs md:text-sm text-center sm:text-left">
            © 2026 — All rights reserved by <a href="/" className="text-red-600 hover:text-red-500 transition-colors">7007 Studio</a>
          </p>
          <p className="text-gray-500 text-xs md:text-sm text-center sm:text-right">
            Developed by <a href="https://www.linkedin.com/company/techofsolution/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">Techof Solution Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;