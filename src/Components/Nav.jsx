import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/case_study", label: "Case Study" },
    { to: "/client_review", label: "Client Review" },
    { to: "/contact", label: "Contact" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex absolute indent-0 z-20 top-0 justify-between items-center font-urbanist flex-row w-full  px-20 py-10">
      <img src={logo} className="w-20 " alt="" />
      <div className="flex list-none gap-20 text-lg ">
        {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative group py-2 transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                  </NavLink>
                </motion.li>
              ))}
      </div>
    </div>
  );
};

export default Nav;

