import React from "react";
import { HERO_CONTENT } from "../constants";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";

// Define the animation keyframes for the gradient
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-slate-500 to-purple-700 border-neutral-900 pb-10 lg:mb-36 mx-6 px-4 sm:px-8 md:px-10 rounded-3xl md:py-10">
      <div className="my-16 flex flex-wrap">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 pt-6 text-4xl sm:text-5xl md:text-6xl tracking-tight lg:mt-5 lg:text-8xl font-sans font-thin"
          >
            <b>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-orange-400 via-blue-800 to-green-800 bg-clip-text mr-2 text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                Praveen
              </motion.span>

              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-slate-900 via-blue-800 to-green-300 bg-clip-text text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                Nigam
              </motion.span>
            </b>
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-900 via-slate-900 to-blue-900 bg-clip-text text-xl sm:text-2xl tracking-tight text-transparent font-sans"
          >
            <b>Full Stack Developer</b>
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-medium tracking-wide text-slate-900 font-sans text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pl-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            src={me}
            alt="Praveen Nigam"
            className="rounded-md w-2/3 sm:w-1/2 md:w-2/5 lg:w-96 lg:mt-16 max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
