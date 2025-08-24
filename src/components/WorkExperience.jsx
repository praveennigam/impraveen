// src/components/WorkExperience.js
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Zehntech Pvt Ltd . ",
      position: "Software Engineer",
      startDate: "September 2024",
      endDate: "December 2024",
      description: "Working as a Software Engineer on innovative projects and solutions."
    },

  ];

  return (
    <section
      id="work-experience"
      className="py-28 bg-transparent text-white"  // Make the background transparent
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-orange-400  font-semibold to-blue-600 bg-clip-text text-transparent">
          Work
        </span>{" "}
        <span className="my-2 max-w-xl py-6 font-medium tracking-thin text-md lg:text-left bg-gradient-to-r from-blue-400 via-slate-200 to-purple-100 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      {/* Work Experience Cards */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // Ensure it animates only once when it comes into view
          >
            <motion.h3
              className="text-xl font-semibold bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {experience.company}
            </motion.h3>
            <p className="text-md text-gradient bg-gradient-to-r from-blue-400   via-slate-200 to-purple-400 bg-clip-text text-transparent">
              {experience.position}
            </p>
            <p className="text-md text-gradient bg-gradient-to-r from-blue-400  to-orange-300 bg-clip-text text-transparent">
              {experience.startDate} - {experience.endDate}
            </p>
            <motion.p
              className="text-gradient mt-2 bg-gradient-to-r from-red-400 via-slate-200 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {experience.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
