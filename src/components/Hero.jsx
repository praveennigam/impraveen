import React from "react";
import { HERO_CONTENT } from "../constants";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";

// Define the animation keyframes for the gradient
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

const Hero = () => {
  return (
    <section className="pt-28 pb-10 lg:pb-16">
      <div className="px-2 sm:px-6 md:px-8 py-8">
      <div className="my-8 flex flex-wrap items-center">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-4 pt-6 text-4xl sm:text-5xl md:text-6xl tracking-tight lg:mt-5 lg:text-7xl font-sans font-semibold"
          >
            <b>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="dynamic-gradient-text bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text mr-2 text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                Praveen
              </motion.span>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="dynamic-gradient-text bg-gradient-to-r from-fuchsia-200 via-purple-300 to-cyan-200 bg-clip-text text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                Nigam
              </motion.span>
            </b>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="dynamic-gradient-text bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 bg-clip-text text-lg sm:text-2xl tracking-tight text-transparent font-semibold font-sans"
          >
            Full Stack Developer | MERN | Next.js
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="my-2 max-w-xl py-6 text-sm sm:text-base leading-relaxed text-slate-50"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-2 hidden w-full max-w-xl grid-cols-2 gap-3 sm:grid"
          >
            <div className="rounded-xl border border-cyan-300/40 bg-cyan-400/15 p-3">
              <p className="text-xl font-semibold text-cyan-100">2+</p>
              <p className="text-xs text-slate-100">Years Building Projects</p>
            </div>
            <div className="rounded-xl border border-violet-300/40 bg-violet-400/15 p-3">
              <p className="text-xl font-semibold text-violet-100">10+</p>
              <p className="text-xs text-slate-100">Production-Ready Apps</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pl-8">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src={me}
            alt="Praveen Nigam"
            className="rounded-2xl border border-white/20 object-cover w-2/3 sm:w-1/2 md:w-2/5 lg:w-96 lg:mt-16 max-w-md shadow-2xl shadow-purple-900/40"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
