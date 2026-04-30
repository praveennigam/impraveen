import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    rating: "5",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://code-tech-1.onrender.com/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
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

  return (
    <section className="py-14">
      <div className="mx-auto max-w-full p-2 pb-16 sm:p-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-16 mt-6 text-center text-4xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-300 bg-clip-text text-transparent"
        >
          Contact <span className="ml-2">Me</span>
        </motion.h1>

        <div className="mt-8 grid gap-4 text-center tracking-tighter sm:grid-cols-3">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="my-2 flex items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-500/[0.06] py-3 text-lg"
          >
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            <span className="text-slate-100">{CONTACT.address}</span>
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="my-2 flex items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-500/[0.06] py-3 text-lg"
          >
            <FaPhoneAlt className="mr-2 text-green-500" />
            <span className="text-slate-100">{CONTACT.phoneNo}</span>
          </motion.p>
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
            href={`mailto:${CONTACT.email}`}
            className="flex items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/[0.06] py-3 text-lg underline"
          >
            <FaEnvelope className="mr-2 text-blue-500" />
            <span className="text-slate-100">{CONTACT.email}</span>
          </motion.a>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-center text-3xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-300 bg-clip-text text-transparent">
            Feedback Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl rounded-2xl border border-white/15 bg-slate-950/50 p-6"
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-lg font-medium text-cyan-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded border border-cyan-300/30 bg-transparent px-4 py-2 text-slate-50 focus:border-cyan-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-lg font-medium text-cyan-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded border border-cyan-300/30 bg-transparent px-4 py-2 text-slate-50 focus:border-cyan-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="mb-2 block text-lg font-medium text-cyan-100">
                Phone
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded border border-cyan-300/30 bg-transparent px-4 py-2 text-slate-50 focus:border-cyan-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="mb-2 block text-lg font-medium text-cyan-100">
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full rounded border border-cyan-300/30 bg-transparent px-4 py-2 text-slate-50 focus:border-cyan-200 focus:outline-none"
              >
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-lg font-medium text-cyan-100">
                Subject
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded border border-cyan-300/30 bg-transparent px-4 py-2 text-slate-50 focus:border-cyan-200 focus:outline-none"
                rows="4"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 px-4 py-2 font-medium text-white shadow-md transition hover:scale-[1.01] hover:brightness-110"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
