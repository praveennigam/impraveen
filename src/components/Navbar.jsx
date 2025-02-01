import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFilePdf,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] flex items-center justify-between py-4 px-6 
        transition-all duration-500 ease-in-out shadow-lg bg-gradient-to-r from-black via-blue-800 to-black`}
    >
      <img
        src={logo}
        alt="Logo"
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-100"
        onClick={() => navigate("/")}
      />

      <div className="flex items-center gap-4 text-xl opacity-80">
        <a
          href="https://www.linkedin.com/in/impraveen1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/share/7EXCGjcN6jhvLf4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 transition duration-300 transform hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/+919109481480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition duration-300 transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919109481480"
          className="text-blue-200 hover:text-blue-100 transition duration-300 transform hover:scale-110"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="https://www.instagram.com/_its_praveen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-800 hover:text-pink-600 transition duration-300 transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com/@sellertheweb?si=xmZPGQaMw0efoGaX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition duration-300 transform hover:scale-110"
        >
          <FaYoutube />
        </a>
        <a
          href="https://t.me/techshiksha1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition duration-300 transform hover:scale-110"
        >
          <FaTelegram />
        </a>
        <button
          onClick={() => navigate("/resume")}
          className="text-red-900 hover:text-red-700 transition duration-300 transform hover:scale-110"
          aria-label="View Resume"
        >
          <FaFilePdf />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
