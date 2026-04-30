import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-unique.svg";
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
      className="fixed top-0 left-0 right-0 z-[999] mx-auto mt-2 flex w-[96%] items-center justify-between rounded-2xl border border-cyan-200/20 bg-slate-900/35 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-500 ease-in-out sm:px-6"
    >
      <img
        src={logo}
        alt="Logo"
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-100"
        onClick={() => navigate("/")}
      />

      <div className="flex items-center gap-3 text-lg opacity-90 sm:gap-4 sm:text-xl">
        <a
          href="https://www.linkedin.com/in/impraveen1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 transition duration-300 hover:scale-110 hover:text-blue-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/share/7EXCGjcN6jhvLf4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 transition duration-300 hover:scale-110 hover:text-blue-400"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/+919109481480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 transition duration-300 hover:scale-110 hover:text-green-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919109481480"
          className="text-cyan-200 transition duration-300 hover:scale-110 hover:text-cyan-100"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="https://www.instagram.com/_its_praveen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 transition duration-300 hover:scale-110 hover:text-pink-300"
        >
          <FaInstagram />
        </a>
        
        <a
          href="https://t.me/techshiksha1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-300 transition duration-300 hover:scale-110 hover:text-sky-200"
        >
          <FaTelegram />
        </a>
        <button
          onClick={() => navigate("/resume")}
          className="text-rose-300 transition duration-300 hover:scale-110 hover:text-rose-200"
          aria-label="View Resume"
        >
          <FaFilePdf />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
