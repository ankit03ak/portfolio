import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="my-20 text-center text-4xl font-light tracking-tight text-white"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-neutral-900/50 p-6 backdrop-blur-md border border-neutral-800 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <img
                src={project?.image}
                alt={project?.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-100 text-neutral-900 rounded-lg text-sm font-semibold hover:bg-white transition-colors"
                >
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors"
                >
                  Demo
                </a>
              </div>
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="mb-2 text-xl font-bold text-neutral-100 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-neutral-400 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-cyan-900/30 px-3 py-1 text-xs font-medium text-cyan-500 border border-cyan-900/50"
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

export default Projects;
