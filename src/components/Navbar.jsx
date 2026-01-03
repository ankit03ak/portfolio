
    
    

    import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollToProjects, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ onClick, children, href }) => {
    const Component = href ? "a" : "button";
    const props = href
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { onClick };

    return (
      <Component
        {...props}
        className="relative px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors group"
      >
        {children}
        <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-white/10 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
      </Component>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden sm:flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-2 backdrop-blur-xl shadow-lg shadow-black/20"
      >
        <div className="flex items-center px-4 pr-8 border-r border-white/10 mr-2">
           
           <span className="font-bold text-white tracking-wider">AK</span>
        </div>

        <NavItem onClick={scrollToProjects}>Projects</NavItem>
        <NavItem onClick={scrollToContact}>Contact</NavItem>
        <NavItem href={import.meta.env.VITE_RESUME_VIEW}>Resume</NavItem>
        
        <div className="mx-2 h-4 w-[1px] bg-white/10" />
        
        <div className="flex gap-2 px-2">
            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-cyan-400 transition-colors"><FaLinkedin size={18} /></a>
            <a href={import.meta.env.VITE_GITHUB_PROFILE} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors"><FaGithub size={18} /></a>
        </div>
      </motion.nav>

      <div className="fixed top-0 left-0 right-0 p-4 flex justify-end z-50 sm:hidden">
            <button 
                onClick={() => setIsOpen(true)}
                className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white shadow-lg"
            >
                <FaBars />
            </button>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col items-center justify-center gap-8 sm:hidden"
            >
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white"
                >
                    <FaTimes size={24} />
                </button>

                <nav className="flex flex-col items-center gap-6 text-xl">
                    <button onClick={() => { scrollToProjects(); setIsOpen(false); }} className="text-neutral-300 hover:text-cyan-400">Projects</button>
                    <button onClick={() => { scrollToContact(); setIsOpen(false); }} className="text-neutral-300 hover:text-cyan-400">Contact</button>
                    <a href={import.meta.env.VITE_RESUME_VIEW} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-cyan-400">Resume</a>
                </nav>

                <div className="flex gap-6 mt-8">
                     <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-cyan-400"><FaLinkedin size={24} /></a>
                     <a href={import.meta.env.VITE_GITHUB_PROFILE} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white"><FaGithub size={24} /></a>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;