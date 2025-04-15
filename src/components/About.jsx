import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        <span className="text-neutral-500">About Me</span>
      </motion.h1>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex"
      >
        <div className="w-full ">
          <div className="flex justify-center text-xl">
            <p className="my-2 max-w-4xl py-3">
              {ABOUT_TEXT.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;