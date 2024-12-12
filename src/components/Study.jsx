import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Study = () => {
  return (
    <div className="border-b my-7 border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-sans my-16"
      >
        {" "}
        <span className="bg-gradient-to-r from-yellow-500  via-blue-700 to-rose-400 font-semibold  bg-clip-text mr-2 text-transparent">
          Career{" "}
        </span>
      </motion.h1>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400 font-sans ">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full font-sans max-w-xl lg:w-3/4 lg:ml-44"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -
                <span className="text-sm font-sans text-purple-300">
                  {experience.institution}
                </span>
              </h6>
              <p className="font-light mb-4 text-neutral-400">
                {experience.description}
              </p>
              <span className="bg-slate-900 rounded-2xl p-1 pl-2 ">
                {experience.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-gradient-to-r from-blue-400 via-green-500 to-yellow-600 bg-clip-text tracking-tight text-transparent "
                  >
                    {subject}
                    {index !== experience.subjects.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Study;
