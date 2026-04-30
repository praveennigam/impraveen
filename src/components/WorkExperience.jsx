// src/components/WorkExperience.js
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Zehntech Pvt Ltd.",
      position: "Software Engineer",
      startDate: "September 2024",
      endDate: "December 2024",
      description:
        "Worked as a Software Engineer on innovative projects and solutions.",
    },
    {
      company: "Elymento.ai",
      position: "Software Engineer",
      startDate: "October 2026",
      endDate: "Present",
      description:
        "Working as a Software Engineer on product development and AI-driven solutions.",
    },

  ];

  return (
    <section
      id="work-experience"
      className="py-14 text-white"
    >
      <div className="px-2 py-10 sm:px-4">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-cyan-200 font-semibold to-indigo-300 bg-clip-text text-transparent">
          Work
        </span>{" "}
        <span className="my-2 max-w-xl py-6 font-medium tracking-thin text-md lg:text-left bg-gradient-to-r from-violet-200 via-slate-100 to-cyan-200 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      {/* Work Experience Cards */}
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border border-white/15 bg-slate-900/60 p-6 shadow-lg shadow-black/30"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {experience.company}
            </motion.h3>
            <p className="text-md font-medium bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {experience.position}
            </p>
            <p className="text-md font-medium bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              {experience.startDate} - {experience.endDate}
            </p>
            <motion.p
              className="mt-2 text-slate-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {experience.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WorkExperience;
