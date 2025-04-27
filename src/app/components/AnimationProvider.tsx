"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      disable: () => window.innerWidth < 768, // Disable on mobile
    });
  }, []);

  return null; // No UI needed, just initialization
};

export default AnimationProvider;
