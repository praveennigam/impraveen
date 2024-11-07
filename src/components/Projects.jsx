import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-950 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-sans"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-yellow-900 font-semibold bg-clip-text mr-2 text-transparent">
          Projects
        </span>
      </motion.h1>
      <div className="flex flex-wrap  items-center justify-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="w-full  lg:w-3/4 mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:px-6"
          >
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <img
                src={project.image}
                height={150}
                width={150}
                className="rounded-xl lg:w-3/4 mb-4 mt-12"
                alt={project.title}
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 lg:ml-14 mt-12 lg:mt-0"
            >
              <div className="text-center lg:text-left">
                <h4 className="text-xl text-purple-500 font-sans">
                  {project.title}
                </h4>
                <p className="max-w-xl py-2 font-light font-sans mx-auto lg:mx-0">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-1 mt-2 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-rose-600 bg-clip-text tracking-tight text-transparent px-1 py-1 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex mt-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-700  to-purple-800 text-white py-2 px-4 rounded-lg shadow-md mx-2"
                    onClick={() => window.open(project.userSite, "_blank")}
                  >
                    User Site
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-rose-700  to-blue-900 text-white py-2 px-4 rounded-lg shadow-md mx-2"
                    onClick={() => window.open(project.adminSite, "_blank")}
                  >
                    Admin Site
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-800 to-orange-300 text-white py-2 px-4 rounded-lg shadow-md mx-2"
                    onClick={() => window.open(project.git, "_blank")}
                  >
                    Git Repository
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
