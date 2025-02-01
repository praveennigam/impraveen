import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPlay } from "react-icons/fa";
import logo from "../assets/logo.png"; // Add your logo path here
import "./Contact.css";

const Contact = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    rating: "5",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const videos = [
    {
      src: "https://www.youtube.com/embed/6VLaYrjPJb8?si=OH6R4IHtnYKi0f3N",
      description: "React Overview: Essential concepts for beginners and developers.",
    },
    {
      src: "https://www.youtube.com/embed/TdVSnIQt83E?si=Cfdjikhkl-5K-W35",
      description: "Advanced Techniques: Deep dive into hooks and performance optimization.",
    },
    {
      src: "https://www.youtube.com/embed/jCXCIA7mGXM?si=ipDEMKiiRPZS3UVn",
      description: "Scalable Applications: Tips for efficient backend integration.",
    },
    {
      src: "https://www.youtube.com/embed/gQXmU9S3Kj8?si=_fjsYgkycKS7nzVa",
      description: "MERN Application: Summary of full-stack setup and deployment.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://code-tech-1.onrender.com/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Thank you for your feedback!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          rating: "5",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlayClick = (src) => {
    setPlayingVideo(`${src}&autoplay=1`);
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

      
      <div className="text-center tracking-tighter mt-8">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-2 flex items-center justify-center text-lg"
        >
          <FaMapMarkerAlt className="text-red-600 mr-2" />
          <span className="text-gradient">{CONTACT.address}</span>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-2 text-black text-lg flex items-center justify-center"
        >
          <FaPhoneAlt className="text-green-600 mr-2" />
          <span className="text-gradient">{CONTACT.phoneNo}</span>
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.7 }}
          href={`mailto:${CONTACT.email}`}
          className="text-black text-lg underline flex items-center justify-center"
        >
          <FaEnvelope className="text-blue-600 mr-2" />
          <span className="text-gradient">{CONTACT.email}</span>
        </motion.a>
      </div>

      <div className="mt-12">
        <h2 className="text-center text-3xl font-bold mb-6">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border  bg-transparent border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border  bg-transparent border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border bg-transparent border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-lg font-medium mb-2">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border  bg-transparent border-gray-600 rounded"
            >
              <option value="1">1 - Very Poor</option>
              <option value="2">2 - Poor</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Subject
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-gray-600 px-4 py-2 border rounded"
              rows="4"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-slate-900 via-blue-800 to-green-800 text-white py-2 px-4 rounded"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="footer mt-8">
        <a
          href="https://code-tech.onrender.com"
          className="flex items-center justify-center space-x-2"
        >
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
