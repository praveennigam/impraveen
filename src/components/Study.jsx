import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import career from "../assets/career.png";


const Study = () => {
  return (
    <section className="py-14">
    <div className="my-7 pb-4 px-2 sm:px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-sans my-16"
      >
        {" "}
        <span className="inline-flex items-center bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 font-semibold bg-clip-text mr-2 text-transparent">
  Career{" "}
  <img src={career} alt="" className="h-10 ml-2" />
</span>
</motion.h1>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-wrap rounded-2xl border border-white/10 bg-slate-950/40 p-4 lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-slate-300 font-sans ">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full font-sans max-w-xl lg:w-3/4 lg:ml-44"
            >
              <h6 className="mb-2 font-semibold text-slate-100">
                {experience.role} -
                <span className="text-sm font-sans text-cyan-200">
                  {experience.institution}
                </span>
              </h6>
              <p className="font-normal mb-4 text-slate-100">
                {experience.description}
              </p>
              <span className="inline-block bg-slate-900/70 rounded-2xl p-1 pl-2 border border-white/10">
                {experience.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 bg-clip-text tracking-tight text-transparent "
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
    </section>
  );
};

export default Study;
