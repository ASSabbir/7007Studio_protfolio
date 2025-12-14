import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? " backdrop-blur-lg border-b border-red-900/30 shadow-lg shadow-red-900/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-[7vw]">
          <div className="flex justify-between items-center py-4 md:py-6 lg:py-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden"
            >
              <NavLink to="/" className="block">
                <motion.h1
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-silverblack text-white hover:text-red-500 transition-colors duration-300 cursor-pointer"
                >
                  7007 <span className="text-red-500">Studio</span>
                </motion.h1>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center gap-8 xl:gap-12 font-zendots text-sm xl:text-base"
            >
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
              
              {/* CTA Button */}
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <NavLink to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-6 py-2.5 font-silverbold text-sm border border-red-600 hover:border-red-500 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </NavLink>
              </motion.li>
            </motion.ul>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center border border-red-900/30 hover:border-red-500 bg-black/50 backdrop-blur-sm transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-red-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-red-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-black border-l border-red-900/30 z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* Mobile Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-silverblack text-white">
                    7007 <span className="text-red-500">Studio</span>
                  </h2>
                  <p className="text-gray-500 font-dmsans text-sm mt-2">
                    3D Animation Excellence
                  </p>
                </motion.div>

                {/* Mobile Navigation Links */}
                <ul className="space-y-2 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <NavLink
                        to={link.to}
                        onClick={toggleMobileMenu}
                        className={({ isActive }) =>
                          `block py-4 px-6 font-zendots text-lg border-l-2 transition-all duration-300 ${
                            isActive
                              ? "border-red-500 bg-red-500/10 text-red-500"
                              : "border-transparent text-gray-300 hover:border-red-500/50 hover:bg-red-500/5 hover:text-white"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <NavLink to="/contact" onClick={toggleMobileMenu}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 font-silverbold text-base transition-all duration-300 border border-red-600"
                    >
                      Get Started
                    </motion.button>
                  </NavLink>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="mt-12 pt-8 border-t border-red-900/30"
                >
                  <p className="text-gray-600 font-dmsans text-xs mb-4">
                    CONTACT INFO
                  </p>
                  <div className="space-y-3 text-gray-400 font-dmsans text-sm">
                    <p>hello@7007studio.com</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      
    </>
  );
};

export default Nav;