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
          <div
            key={index}
            className="mb-16 flex flex-wrap lg:justify-between items-center"
          >
            {/* Project Screenshot */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.0 }}
              className="w-full lg:w-1/2 mb-8"
            >
              {/* Desktop: Hover Overlay */}
              <div className="relative group hidden sm:block w-fit">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-[450px] h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg">
                  <div className="flex gap-4">
                    <button
                      onClick={() => window.open(project.repo, "_blank")}
                      className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
                    >
                      View Code
                    </button>
                    <button
                      onClick={() => window.open(project.live, "_blank")}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile: Show buttons below image */}
              <div className="sm:hidden">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-full object-cover rounded-lg shadow-lg mb-4"
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => window.open(project.repo, "_blank")}
                    className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
                  >
                    View Code
                  </button>
                  <button
                    onClick={() => window.open(project.live, "_blank")}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.0 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-3 font-semibold text-2xl">{project?.title}</h6>
              <p className="mb-6 text-neutral-400 text-lg">
                {project?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 font-medium text-green-500 text-sm"
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
