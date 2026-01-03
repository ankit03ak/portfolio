import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light tracking-tight text-white"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto px-4">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800 hover:border-cyan-500/30 transition-colors"
          >
            <div className="md:w-1/4 flex-shrink-0">
              <p className="mb-2 text-sm font-semibold text-cyan-400 bg-cyan-900/20 w-fit px-3 py-1 rounded-full">
                {exp.year}
              </p>
            </div>

            <div className="md:w-3/4">
              <h6 className="mb-2 font-semibold text-xl text-white">
                {exp.role} -{" "}
                <span className="text-neutral-400 text-base font-normal">
                  {exp.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-cyan-500 border border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;