import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-950 pb-16">
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
      <div className="flex flex-wrap">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 lg:p-6"
          >
            <div className="flex lg:w-1/2 lg:ml-14 items-center justify-center">
              <img
                src={project.image}
                height={150}
                width={150}
                className="rounded-2xl w-1/2 lg:w-full lg:mr-32 mb-4 mt-12 max-w-md"
                alt={project.title}
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full mt-12 lg:w-1/2 lg:mt-32"
            >
              <div className="justify-center lg:justify-start sm:w-1/2">
                <h4 className="text-xl text-purple-500 font-sans">
                  {project.title}
                </h4>
                <p className="max-w-xl py-2 font-light font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
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
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, from-purple-400, via-pink-500, to-rose-600)",
                      color: "#fff",
                      paddingRight: "8px",
                      paddingLeft: "8px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      fontWeight: "600",
                      borderRadius: "0.375rem",
                      boxShadow: "0 1px 2px 0 rgba(206, 190, 190, 0.582)",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                      backgroundClip: "text",
                    }}
                    onClick={() => window.open(project.userSite, "_blank")}
                  >
                    <span className="bg-gradient-to-r from-blue-700 via-purple-500 to-yellow-400 bg-clip-text tracking-tight text-transparent">
                      Visit User Site
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, from-purple-400, via-pink-500, to-rose-600)",
                      color: "#fff",
                      paddingRight: "8px",
                      paddingLeft: "8px",
                      marginLeft: "14px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      fontWeight: "600",
                      borderRadius: "0.375rem",
                      boxShadow: "0 1px 2px 0 rgba(206, 190, 190, 0.582)",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                      backgroundClip: "text",
                    }}
                    onClick={() => window.open(project.adminSite, "_blank")}
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-700 bg-clip-text tracking-tight text-transparent">
                      Visit Admin Site
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, from-purple-400, via-pink-500, to-rose-600)",
                      color: "#fff",
                      paddingRight: "8px",
                      paddingLeft: "8px",
                      marginLeft: "14px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      fontWeight: "600",
                      borderRadius: "0.375rem",
                      boxShadow: "0 1px 2px 0 rgba(206, 190, 190, 0.582)",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                      backgroundClip: "text",
                    }}
                    onClick={() => window.open(project.git, "_blank")}
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-700 bg-clip-text tracking-tight text-transparent">
                      Git Repository
                    </span>
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
