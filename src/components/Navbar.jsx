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
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const rotateAnimation = {
  rotate: [0, 0],
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="mb-20 flex items-center justify-between gap-3 py-4 px-2 bg-transparent">
      
        <img
          src={logo}
          alt="Logo"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-2 my-1 logo relative z-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
        
      
      <div className="flex items-center justify-center gap-3 text-xl">
        <FaLinkedin className="text-blue-600 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/impraveen1999", "_blank")} />
        <FaFacebook className="text-blue-700 cursor-pointer" onClick={() => window.open("https://www.facebook.com/share/7EXCGjcN6jhvLf4g", "_blank")} />
        <FaWhatsapp className="text-green-500 cursor-pointer" onClick={() => window.open("https://wa.me/+919109481480", "_blank")} />
        <FaPhone className="text-purple-400 cursor-pointer" onClick={() => window.open("tel:+919109481480", "_blank")} />
        <FaInstagram className="text-pink-600 cursor-pointer" onClick={() => window.open("https://www.instagram.com/_its_praveen_", "_blank")} />
        <FaYoutube className="text-red-700 cursor-pointer" onClick={() => window.open("https://youtube.com/@thewebseller?si=lTc45AaTSu1hvAb3", "_blank")} />
        <FaTelegram className="text-blue-400 cursor-pointer" onClick={() => window.open("https://t.me/techshiksha1999", "_blank")} />
        <FaFilePdf className="text-red-600 cursor-pointer" onClick={() => navigate("/resume")} />
      </div>
    </nav>
  );
};

export default Navbar;
