import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Contact.css";

const Contact = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      src: "https://www.youtube.com/embed/6VLaYrjPJb8?si=OH6R4IHtnYKi0f3N",
      description: "React Overview: Essential concepts for beginners and developers..",
    },
    {
      src: "https://www.youtube.com/embed/TdVSnIQt83E?si=Cfdjikhkl-5K-W35",
      description: "Advanced Techniques: Deep dive into hooks and performance optimization..",
    },
    {
      src: "https://www.youtube.com/embed/jCXCIA7mGXM?si=ipDEMKiiRPZS3UVn",
      description: "Scalable Applications: Tips for efficient backend integration..",
    },
    {
      src: "https://www.youtube.com/embed/gQXmU9S3Kj8?si=_fjsYgkycKS7nzVa",
      description: "MERN Application: Summary of full-stack setup and deployment.",
    },
  ];

  const handlePlayClick = (src) => {
    setPlayingVideo(`${src}&autoplay=1`); // Add autoplay parameter
  };

  return (
    <div className="container mx-auto max-w-full border-b border-neutral-900 pb-36 p-4 min-h-screen">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold mb-16 mt-12 bg-gradient-to-r from-orange-900 via-blue-400 to-yellow-300 bg-clip-text text-transparent"
      >
        Contact <span className="ml-2">Me</span>
      </motion.h1>

      <div className="video-container flex flex-wrap justify-center gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="video-card flex flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="youtube-card relative">
              {playingVideo === `${video.src}&autoplay=1` ? (
                <iframe
                  className="video-iframe"
                  src={playingVideo}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="thumbnail">
                  <button className="play-button" onClick={() => handlePlayClick(video.src)}>
                    <span>▶</span>
                  </button>
                </div>
              )}
              {/* Show description with hover effect */}
              <div className="text-card">
                <motion.div className="flex items-center text-lg text-black">
                  <span>{video.description}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center tracking-tighter mt-8">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-2 flex items-center justify-center text-lg"
        >
          <FaMapMarkerAlt className="text-green-700 mr-2" />
          <span className="text-gradient">{CONTACT.address}</span>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-2 text-black text-lg"
        >
          <span className="text-gradient">{CONTACT.phoneNo}</span>
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.7 }}
          href={`mailto:${CONTACT.email}`}
          className="text-black text-lg underline"
        >
          <span className="text-gradient">{CONTACT.email}</span>
        </motion.a>
      </div>

      <div className="footer mt-8">
        <a href="https://code-tech.onrender.com" className="flex items-center justify-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full border-none shadow-lg"
          />
          <span className="text-lg text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text leading-6 hover:underline">
            Visit <span className="font-bold underline hover:underline">Thewebseller</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
