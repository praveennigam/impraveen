import React from "react";
import aboutimg from "../assets/aboutimg.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-t border-neutral-950 pb-10 py-12">
      <h1 className="my-16 text-center text-4xl font-sans">
        <span className="bg-gradient-to-r from-orange-900 via-blue-400 font-semibold to-yellow-300 bg-clip-text mr-2 text-transparent">
          About{" "}
        </span>{" "}
        <span className="my-2 max-w-xl py-6 font-medium  tracking-thin text-md  lg:text-left bg-gradient-to-r from-blue-400 via-slate-200 to-purple-400 bg-clip-text text-transparent">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-6"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutimg}
              className="rounded-2xl w-1/2 lg:w-full lg:mr-32 max-w-md"
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
            <p className="my-2 max-w-xl py-6 font-medium  tracking-thin text-md  lg:text-left bg-gradient-to-r from-blue-400 via-slate-200 to-purple-400 bg-clip-text text-transparent">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
