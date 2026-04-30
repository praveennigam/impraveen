import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-14">
    <div className="px-2 pb-12 sm:px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl sm:text-4xl font-semibold"
      >
        <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-300 font-semibold bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center mb-4">
        {PROJECTS.map((project, index) => {
          const hideExtraButtons =
            project.title === "Grolynk.com" || project.title === "Xentto.ai";
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="mb-8 mt-8 flex w-full max-w-[1400px] flex-col rounded-2xl border border-white/10 bg-slate-950/40 p-4 lg:mt-12 lg:flex-row lg:items-center lg:justify-center lg:px-6"
            >
              <div className="flex w-full items-center justify-center lg:w-1/2">
                <img
                  src={project.image}
                  height={150}
                  width={150}
                  className="mb-4 mt-6 w-full max-w-md rounded-xl border border-white/15 object-cover shadow-lg lg:mt-8"
                  alt={project.title}
                />
              </div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mt-8 w-full lg:ml-14 lg:mt-0 lg:w-1/2"
              >
                <div className="text-left">
                  <h4 className="mb-2 text-2xl font-semibold text-cyan-100">
                    {project.title}
                  </h4>
                  <p className="mx-auto max-w-xl py-2 text-left text-sm font-normal text-slate-50 sm:text-base lg:mx-0">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="mr-2 mb-2 mt-2 rounded-full border border-cyan-300/40 bg-cyan-500/15 px-3 py-1 text-xs text-cyan-50 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center space-x-4 lg:justify-start">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-2 font-medium text-white shadow-md transition hover:brightness-110"
                      onClick={() => window.open(project.userSite, "_blank")}
                    >
                      User Site
                    </motion.button>
                    {!hideExtraButtons && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 px-4 py-2 font-medium text-white shadow-md transition hover:brightness-110"
                        onClick={() => window.open(project.adminSite, "_blank")}
                      >
                        Admin Site
                      </motion.button>
                    )}
                    {!hideExtraButtons && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-700 px-4 py-2 font-medium text-white shadow-md transition hover:brightness-110"
                        onClick={() => window.open(project.git, "_blank")}
                      >
                        Git Repository
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default Projects;
