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

const App = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900  ">
      <div className="fixed top-0 -z-10 max-h-full w-full">
        <div className="absolute inset-0 -z-10  min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#a346ff_100%)]"></div>
        
        
      </div>

      <div className="z-10 container mx-auto px-8">
        <Navbar
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <Hero />
        <About />
        <Technologies />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;