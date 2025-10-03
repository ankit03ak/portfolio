import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
// import logo from "../assets/logo.png";
import profile_pic from "../assets/profile_pic.png";
import profile_pic2 from "../assets/profile_pic2.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pt-24 sm:pt-28 border-b border-neutral-900 pb-4 lg:mb-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
  variants={container(0)}
  initial="hidden"
  animate="visible"
  className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
>
  Ankit Kumar
</motion.h1>
            <motion.span
              variants={container(0.3)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
             bg-clip-text text-4xl tracking-tight text-transparent"
            >
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Coder",
                  "Tech Enthusiast",
                  "Problem Solver",
                ]}
                loop={true}
                cursor={true}
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
            >
              {HERO_CONTENT.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 ml-10">
          <div className="flex w-full justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="rounded-full"
              src={profile_pic}
              // src={profile_pic2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;