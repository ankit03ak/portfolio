


import React, { useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Background from "./components/Background"; 
import Chatbot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      <Background />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50"
        style={{ scaleX: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 }) }}
      />
      <Background />

      <div className="z-10 container mx-auto px-8">
        <Navbar
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
          <Chatbot />
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default App;
