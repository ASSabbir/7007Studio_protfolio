import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav";
import logovideo from "../src/assets/video/logo2.mp4";
import { useRef } from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "./Components/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import Lenis from "lenis";
import Curser from "./Components/Home/Curser";

gsap.registerPlugin(useGSAP);

const Root = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔥 FORCE HOME + RESET SCROLL ON RELOAD
  useEffect(() => {
    // disable browser scroll restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // always go to home on reload
    const navEntry = performance.getEntriesByType("navigation")[0];
    if (navEntry?.type === "reload") {
      navigate("/", { replace: true });
    }

    window.scrollTo(0, 0);

    // lock scroll
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    };
  }, [navigate]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("#loading_video", {
      duration: 4.5
    });

    tl.to("#intro-logo", {
      opacity: 1
    });

    tl.to("#loading_video", {
      opacity: 0,
      duration: 0.35
    });

    tl.to("#loading_video", {
      display: "none"
    });

    // Optional animations (keep commented if not needed)
    tl.from('#title-logo', {
      y: 50,
      opacity: 0
    });
    tl.to('#title-logo', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });

  });

  return (
    <div className=' font-OdibeeSans  h-screen text-white'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Curser></Curser>
      <video src={logovideo} autoPlay
        muted
        loop
        playsInline
        id='loading_video'
        className="w-full h-screen object-cover absolute top-0 "></video>
      <Footer></Footer>
      {/* <ReactLenis
                root
                options={{
                    duration: 1.2,        // scroll duration in seconds (default: 1.2)
                    easing: (t) => 1 - Math.pow(1 - t, 3), // custom easing curve

                    gestureDirection: 'both', // allow both mouse wheel + touchpad gestures
                    smoothWheel: true,     // smooth scroll for mouse wheel
                    smoothTouch: true,    // smooth scroll for touch devices
                    touchMultiplier: 1.5,  // multiplier for touch scroll speed
                    wheelMultiplier: 1.5,    // multiplier for wheel scroll speed
                    infinite: false,       // loop scrolling
                }}
            /> */}
    </div>
  );
};

export default Root;
