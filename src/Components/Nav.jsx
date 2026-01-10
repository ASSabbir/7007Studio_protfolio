import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.png";
import TextAnimation from "./Shared/TextAnimation";
import { CustomEase } from "gsap/CustomEase";


gsap.registerPlugin(CustomEase);



const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky navbar animation
  useEffect(() => {
    const handelScrolling = () => {
      const currentScrollState = window.scrollY;
      if (currentScrollState > scrollPosition && currentScrollState > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollPosition(currentScrollState);
    };
    window.addEventListener("scroll", handelScrolling);
    return () => window.removeEventListener("scroll", handelScrolling);
  });

  // Menu open animation
  useGSAP(() => {
    if (menuOpen) {
      CustomEase.create("myEase", "0.7, 0, 0.84, 0");
      const tl = gsap.timeline();

      // Container slides in
      tl.fromTo("#menu-container",
        { x: "100%" },
        { x: 0, duration: 0.6, ease: "myEase" }
      );

      // Close button appears
      tl.fromTo("#close-btn",
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.6 },
        "-=0.3"
      );

      // Nav links appear one by one
      tl.fromTo(".nav-link-item",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
        "-=0.3"
      );
    }
  }, [menuOpen]);

  // Close menu function
  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => setMenuOpen(false)
    });
    CustomEase.create("myEase", "0.7, 0, 0.84, 0");

    // Nav links fade out
    tl.to(".nav-link-item",
      { x: 50, opacity: 0, duration: 0.3, stagger: 0.08 }
    );

    // Close button fades out
    tl.to("#close-btn",
      { opacity: 0, rotate: 90, duration: 0.3 },
      "-=0.2"
    );

    // Container slides out
    tl.to("#menu-container",
      { x: "100%", duration: 0.5, ease: "myEase" },
      "-=0.3"
    );
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "CAPABILITIES" },
    { to: "/our_studio", label: "STUDIO" },
  ];

  return (
    <div>
      <div className="fixed top-0  z-[999] w-full text-white px-5  md:px-20 py-10 flex justify-between items-center font-OdibeeSans tracking-wider">
        {/* Logo */}
        <div className="overflow-hidden">
          <img src={logo} className="w-12 navlinks-li" alt="logo" />
        </div>

        {/* Menu Icon */}
        <div className=" p-2 overflow-hidden">
          {!menuOpen && (
            <button
              id="nav-close-btn" className="text-red-600 hover:text-white cursor-pointer relative z-[1001]"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={36} />
            </button>
          )}
        </div>
      </div>

      {/* Full Screen Menu */}
      {menuOpen && (
        <div
          id="menu-container"
          className="fixed top-0  right-0 w-full h-screen bg-black z-[1000] flex items-center justify-center"
        >
          {/* Close Button */}
          <button
            id="close-btn"
            className="absolute top-10 right-20 text-red-600 hover:text-white duration-200 cursor-pointer z-[1001]"
            onClick={handleClose}
          >
            <X size={36} />
          </button>

          {/* Nav Links */}
          <ul className="flex flex-col font-dmsans   items-center space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.to} className="nav-link-item">
                <NavLink
                  to={link.to}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    `block  text-7xl font-bold transition-all duration-300
                    ${isActive ? "text-red-600" : "text-white"}`
                  }
                >
                  <TextAnimation navlinks={link.label}></TextAnimation>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;