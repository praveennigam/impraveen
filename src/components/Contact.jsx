import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import the location icon
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-36 px-4 sm:px-6 lg:px-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl md:text-4xl bg-gradient-to-r from-blue-500 via-purple-400 to-yellow-900 font-bold bg-clip-text text-transparent"
      >
        Contact
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent ml-2">
          Me
        </span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Side: Video */}
        <motion.div
          className="lg:w-1/2 lg:pr-4 mb-8 lg:mb-0"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-center my-4 bg-gradient-to-r from-blue-400 to-yellow-500 bg-clip-text text-transparent font-bold border-b mb-4 pb-4 mx-4 lg:mx-36">
            Watch My YouTube Video
          </h2>
          <div className="flex justify-center">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/HljeMpKxcYE?controls=1&showinfo=0&rel=0&modestbranding=1"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg max-w-full h-auto"
              style={{ aspectRatio: '16 / 9' }}
            ></iframe>
          </div>
          {/* Gradient Button */}
          <div className="flex justify-end mt-4">
            <a
              href="https://www.youtube.com/@Thewebseller"
              className="inline-block px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-900 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
            >
              Go to Channel
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Information */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center tracking-tighter">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 text-md md:text-lg flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-400 to-yellow-800
              bg-clip-text text-transparent border-b border-transparent"
            >
              <FaMapMarkerAlt className="text-green-700 mr-2" /> {/* Location icon */}
              {CONTACT.address}
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="my-2 text-md md:text-lg bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-500 bg-clip-text text-transparent border-b border-transparent"
            >
              {CONTACT.phoneNo}
            </motion.p>
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.7 }}
              href={`mailto:${CONTACT.email}`}
              className="text-md md:text-lg bg-gradient-to-r from-red-400 via-purple-500 to-green-500 bg-clip-text text-transparent border-b border-transparent"
            >
              {CONTACT.email}
            </motion.a>
            <div className="flex justify-center mt-4">
              <a href="https://code-tech.onrender.com" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 rounded-full border-none shadow-lg transition-transform transform hover:scale-105"
                />
                <span className="text-lg bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent border-b">
                  Visit <span className="font-bold">Thewebseller</span>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
