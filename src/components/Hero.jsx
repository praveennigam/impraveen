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
    <div className="pb-10 lg:mb-36 mx-6 px-4 sm:px-8 md:px-10 rounded-3xl md:py-10 overflow-hidden  ">
      <div className="my-16 flex flex-wrap">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-6 pt-6 text-4xl sm:text-5xl md:text-6xl tracking-tight lg:mt-5 lg:text-8xl font-sans font-thin"
          >
            <b>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-blue-800 via-orange-400 to-green-800 bg-clip-text mr-2 text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                Praveen
              </motion.span>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-pink-600 via-blue-700 to-green-700 bg-clip-text text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                Nigam
              </motion.span>
            </b>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-pink-900 via-slate-500 to-blue-900 bg-clip-text text-xl sm:text-2xl tracking-tight text-transparent font-sans"
          >
            <b>Full Stack Developer</b>
          </motion.span>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="my-2 max-w-xl py-6 font-medium tracking-tight text-md lg:text-left bg-gradient-to-r from-blue-400 via-slate-200 to-purple-400 bg-clip-text text-transparent"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pl-8">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
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
