// import About from "./components/About"
// import Hero from "./components/Hero"
// import Navbar from "./components/Navbar"

// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

//       <div className="fixed top-0 -z-10 h-full w-full"></div>

//       <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1b1515_40%,#4e13ee_100%)]"></div>

//       <div className="container mx-auto px-8">
//        <Navbar />
//         <Hero />
//         <About />
//       </div>

//     </div>
//   )
// }

// export default App


import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Background from "./components/Background"; // ✅ import background
import Chatbot from "./components/ChatBot";

const App = () => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* ✅ Background stays behind everything */}
      <Background />

      <div className="z-10 container mx-auto px-8">
        <Navbar
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <Hero />
        <About />
        {/* <Education /> */}
        <Technologies />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default App;
