import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // handeling the sticky navber animation
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
    return () => {
      window.removeEventListener("scroll", handelScrolling);
    };
  });

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/our_studio", label: "Our Studio" },
    { to: "/client_review", label: "Client Review" },
    { to: "/contact", label: "Contact" }
  ];



  return (
    <div className={`flex fixed mix-blend-difference  op indent-0 z-999 text-white top-0 justify-between items-center font-urbanist flex-row w-full  px-20 py-10`}>
      <div className="overflow-hidden">
        <img src={logo} className="w-20  navlinks-li" alt="" />
      </div>
      <div className="flex overflow-hidden list-none gap-20 text-lg ">
        {navLinks.map((link, index) => (
          <li
            key={link.to}
            className="navlinks-li"
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `relative group py-2 transition-colors duration-300 ${isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );




  


  






};








export default Nav;


