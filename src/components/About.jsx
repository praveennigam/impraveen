import React from "react";
import aboutimg from "../assets/aboutimg.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-12">
    <div className="px-2 py-10 sm:px-4">
      <h1 className="my-16 text-center text-4xl font-sans font-semibold">
        <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text mr-2 text-transparent">
          About{" "}
        </span>{" "}
        <span className="my-2 max-w-xl py-6 font-medium tracking-thin text-md lg:text-left bg-gradient-to-r from-fuchsia-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">Me</span>
      </h1>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-6 sm:w-1"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutimg}
              className="rounded-2xl border border-white/15 w-1/2 lg:w-full lg:mr-20 max-w-md shadow-xl shadow-black/30"
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
          <p className="my-2 max-w-3xl tracking-tight py-2 font-normal font-sans mx-auto lg:mx-0 text-sm sm:text-base text-left text-slate-100 w-full leading-relaxed">
          {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default About;
