// src/components/ScrollProvider.js
"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export const ScrollContext = createContext({
  scrollTo: (name) => {},
  registerSection: (name, ref) => {},
});

export default function ScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const sectionsRef = useRef({}); // { name: ref }

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(t) {
      lenisRef.current.raf(t);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);

  const registerSection = (name, ref) => {
    if (!name || !ref) return;
    sectionsRef.current[name] = ref;
  };

  const scrollTo = (name, options = {}) => {
    const ref = sectionsRef.current[name];
    if (!ref || !ref.current) return;

    // Lenis accepts DOM node or number:
    // offset option can be used to tweak final position if necessary
    if (lenisRef.current) {
      lenisRef.current.scrollTo(ref.current, { offset: options.offset || 0 });
    } else {
      // fallback
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo, registerSection }}>
      {children}
    </ScrollContext.Provider>
  );
}
