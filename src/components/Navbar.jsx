import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const rotateAnimation = {
  rotate: [0, 360],
};

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <nav className="mb-20 items-center justify-between py-6 flex">
      <motion.div
        className="flex-shrink-0 items-center relative"
        animate={rotateAnimation}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-14 w-14 rounded-full mx-1 my-1 logo relative z-10 cursor-pointer"
          onClick={() => navigate("/")} // Navigate to home page on logo click
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 opacity-50 z-0"></div>
      </motion.div>
      <div className="flex m-8 items-center justify-center gap-4 mx-2 text-2xl">
        <FaLinkedin
          className="text-white"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/impraveen1999?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
              "_blank"
            )
          }
        />
        <FaFacebook
          className="text-white"
          onClick={() =>
            window.open(
              "https://www.facebook.com/share/7EXCGjcN6jhvLf4g/?mibextid=LQQJ4d",
              "_blank"
            )
          }
        />
        <FaWhatsapp
          className="text-white"
          onClick={() => window.open("https://wa.me/+919109481480", "_blank")}
        />
        <FaPhone
          className="text-white"
          onClick={() => window.open("tel:+919109481480", "_blank")}
        />
        <FaInstagram
          className="text-white"
          onClick={() =>
            window.open(
              "https://www.instagram.com/_its_praveen_?igshid=MWR5a25yY2lycTRkNg%3D%3D&utm_source=qr",
              "_blank"
            )
          }
        />
        <FaFilePdf
          className="text-white cursor-pointer"
          onClick={() => navigate("/resume")} // Navigate to Resume page on click
        />
      </div>
    </nav>
  );
};

export default Navbar;
