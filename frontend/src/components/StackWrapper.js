// // components/StackWrapper.js
// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// import About from "./about";
// import Project from "./project";
// import Achivements from "./achivements";
// import Skills from "./skills";
// import Contact from "./contact";

// import "./StackWrapper.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function StackWrapper() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // ✅ Lenis smooth scrolling setup
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // ✅ Stack effect setup
//     const sections = gsap.utils.toArray(".stack-section");

//     sections.forEach((section, i) => {
//       const targetScale = 0.75 + i * 0.03; // 75%, 78%, 81%, etc.
//       const targetY = i * 20;              // vertical offset (px)

//       gsap.to(section, {
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "+=100%",
//           pin: true,
//           pinSpacing: false,
//           scrub: true,
//         },
//         scale: targetScale,
//         y: targetY,
//         ease: "none",
//       });
//     });

//     // ✅ Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div className="stack-container" ref={containerRef}>
//       <section className="stack-section"><About /></section>
//       <section className="stack-section"><Project /></section>
//       <section className="stack-section"><Achivements /></section>
//       <section className="stack-section"><Skills /></section>
//       <section className="stack-section"><Contact /></section>
//     </div>
//   );
// }


// src/components/StackWrapper.js
"use client";
import React, { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollContext } from "./ScrollProvider";

import About from "./about";
import Project from "./project";
import Achivements from "./achivements";
import Skills from "./skills";
import Contact from "./contact";

import "./StackWrapper.css";

gsap.registerPlugin(ScrollTrigger);

export default function StackWrapper() {
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const achRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const { registerSection } = useContext(ScrollContext);

  useEffect(() => {
    // register each section name (so header can call scrollTo("about"))
    registerSection("about", aboutRef);
    registerSection("project", projectRef);
    registerSection("achievements", achRef);
    registerSection("skills", skillsRef);
    registerSection("contact", contactRef);

    // --- GSAP / ScrollTrigger stack effect ---
    const sections = gsap.utils.toArray(".stack-section");

    sections.forEach((section, i) => {
      const targetScale = 0.75 + i * 0.03;
      const targetY = i * 20;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
        scale: targetScale,
        y: targetY,
        ease: "none",
      });
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return (
    <div className="stack-container" ref={containerRef}>
      <section ref={aboutRef} className="stack-section"><About /></section>
      <section ref={projectRef} className="stack-section"><Project /></section>
      <section ref={achRef} className="stack-section"><Achivements /></section>
      <section ref={skillsRef} className="stack-section"><Skills /></section>
      <section ref={contactRef} className="stack-section"><Contact /></section>
    </div>
  );
}
