import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaGitAlt,
  FaReact, // ✅ React Native icon (reusing FaReact)
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJquery } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const getAnimationProps = (index) => ({
    initial: { y: index % 2 === 0 ? -10 : 10 },
    animate: {
      y: index % 2 === 0 ? [10, -10] : [-10, 10],
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const icons = [
    { Component: RiReactjsLine, color: "text-cyan-600" },
    { Component: FaNodeJs, color: "text-green-600" },
    { Component: SiMongodb, color: "text-green-600" },
    { Component: FaJsSquare, color: "text-yellow-500" },
    { Component: SiExpress, color: "text-fuchsia-400" },
    { Component: FaHtml5, color: "text-orange-600" },
    { Component: FaCss3Alt, color: "text-blue-600" },
    { Component: FaBootstrap, color: "text-purple-600" },
    { Component: SiJquery, color: "text-blue-500" },
    { Component: FaGitAlt, color: "text-red-600" },
    { Component: FaReact, color: "text-blue-400" }, // ✅ React Native icon
  ];

  return (
    <section className="py-14">
    <div className="px-2 py-6 sm:px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-300 bg-clip-text text-4xl font-semibold text-transparent">
          Techno
          <span className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-cyan-200 text-transparent bg-clip-text text-4xl tracking-tight">
            logies
          </span>
        </span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map(({ Component, color }, index) => (
          <motion.div
            key={index}
            {...getAnimationProps(index)}
            className="rounded-2xl border border-white/20 bg-slate-950/50 py-4 px-6 shadow-lg shadow-black/20"
          >
            <Component className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Technologies;
