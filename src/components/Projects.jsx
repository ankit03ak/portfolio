import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 mt-25 flex flex-wrap lg:justify-between  ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.0 }}
              key={index}
              className="w-full lg:w-1/2 mb-10 sm:mb-10"
            >
              <img
                src={project?.image}
                height="full"
                width={450}
                className="mb-6 h-full object-cover"
                alt={project?.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.0 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-2 font-semibold text-2xl">{project?.title}</h6>
              <div className="flex mb-5">
                <button
                  className="bg-red-600 text-white border border-red-700 rounded-md px-2 py-2"
                  onClick={() => window.open(project.repo)}
                >
                  Github Repo
                </button>
                <button
                  className="bg-red-600 text-white border border-red-700 rounded-md px-2 py-2 ml-5"
                  onClick={() => window.open(project.live)}
                >
                  Live link
                </button>
              </div>
              <p className="mb-4 text-neutral-400 text-xl">
                {project?.description}
              </p>
              <div className="flex flex-wrap gap-y-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-green-500 text-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;