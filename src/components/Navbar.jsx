// import { FaLinkedin , FaInstagram, FaGithub } from "react-icons/fa"
// import { FaSquareXTwitter} from "react-icons/fa6";
// import logo from "../assets/logo.png"

// const Navbar = () => {
  
  
  
  //   return (
    //     <nav className="mb-20 flex items-center justify-between py-6" >
    //         <div className="flex flex-shrink-0 items-center">
    
    //             <img className="mx-2 w-10" 
    //             src={logo}  // LOGO
    //             alt="img" />
    
    //         </div>
    
    //         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    
    
    //       <FaLinkedin />
    //       < FaInstagram/>
    //       <FaSquareXTwitter />
    //       <FaGithub />
    //         </div>
    
    
    //     </nav>
    //   )
    // }
    
    // export default Navbar
    
    
    import logo from "../assets/logo.png"
    import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaFile,
  FaEnvelope,
  FaProjectDiagram,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import { FaRegEye, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = ({ scrollToProjects, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50 h-16 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      
      <div className="flex items-center justify-end px-6 py-4">
        
        {/* Logo or Site Name */}
          {/* <div className="flex flex-shrink-0 items-center">

            <img className="mx-2 w-10" 
            src={logo}  // LOGO
            alt="img" />

        </div> */}



        {/* Right Section (Always Visible) */}
        <div className="flex items-center gap-6">
          {/* GitHub & LinkedIn (Always Visible) */}
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href={import.meta.env.VITE_GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-300 transition"
          >
            <FaGithub />
          </a>
          {/* <a
            href={import.meta.env.VITE_XTWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-300 transition"
          >
            <FaSquareXTwitter />
          </a> */}

          {/* Buttons (Hidden on Small Screens) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={scrollToContact}
              className=" font-medium border-b-2 border-transparent hover:text-cyan-300 transition"
            >
              <span className="bg-gray-900 flex items-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition">
  Contact
</span>


            </button>
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 cursor-pointer border-b-2 border-transparent hover:text-cyan-300 transition"
            >
              <span className="bg-gray-900 flex items-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition">
              <FaProjectDiagram /> &nbsp;
  View My Work
</span>
            </button>
            <a
              href={import.meta.env.VITE_RESUME_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-300 transition"
            >
              <span className="bg-gray-900 flex items-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition">
  
              <FaRegEye /> 
              &nbsp; 
Resume
</span>
            </a>

            <a
              href={import.meta.env.VITE_RESUME_DOWNLOAD}
              download
              className="flex items-center gap-2 hover:text-cyan-300 transition"
            >
              <span className="bg-gray-900 flex items-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition">
              <FaDownload /> &nbsp; 
  
Resume
</span>
            </a>
          </div>

          {/* ☰ Hamburger Menu (Only on Small Screens) */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-3xl sm:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar Menu (For Small Screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 text-lg relative">
          {/* ✖ Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <a
            href={import.meta.env.VITE_RESUME_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaEye /> View Resume
          </a>

          <a
            href={import.meta.env.VITE_RESUME_DOWNLOAD}
            download
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaDownload /> Download
          </a>

          <a
            href="mailto:vickyak1339@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaEnvelope /> Shoot Me an Email
          </a>

          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition"
          >
            <FaProjectDiagram /> See My Projects
          </button>

          <button
            onClick={scrollToContact}
            className="text-lg font-medium hover:text-cyan-300 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;