import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import logo from "../assets/logo.png";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/our_studio", label: "Our Studio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 z-999 w-full mix-blend-difference text-white px-20 py-10 flex justify-between items-center font-OdibeeSans tracking-wider">
      {/* Logo */}
      <div className="overflow-hidden">
        <img src={logo} className="w-12 navlinks-li" alt="logo" />
      </div>

      {/* Menu Icon + Dropdown */}
      <div className="relative " ref={menuRef}>
        <button className="text-red-600" onClick={() => setMenuOpen((p) => !p)}>
          <Menu size={36} />
        </button>

        {/* Dropdown Modal */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-4 w-56 rounded-xl 
                         p-3 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded transition-all duration-300
                      ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
